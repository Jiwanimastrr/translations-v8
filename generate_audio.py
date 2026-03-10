import pandas as pd
import json
import os
import asyncio
import edge_tts

# Constants
EXCEL_FILE = '보카리아 필드 1.xlsx'
OUTPUT_JS = 'data.js'
AUDIO_DIR = 'audio'

# Target speeds for edge-tts
# +20% for fast, default for normal, -30% for slow
SPEEDS = {
    'fast': '+20%',
    'normal': '+0%',
    'slow': '-30%'
}
VOICE = 'en-US-JennyNeural' # High quality female voice

def parse_excel():
    db = []
    try:
        xls = pd.ExcelFile(EXCEL_FILE)
        chapter_id = 1
        for sheet_name in xls.sheet_names:
            df = pd.read_excel(xls, sheet_name=sheet_name, skiprows=2)
            
            # The columns format seems to be: ID, Unnamed:1(Word), Unnamed:2(Ko), Unnamed:3(Sen1_En), Unnamed:4(Sen1_Ko), ...
            # Wait, let's strictly identify columns. Or just use indices if we are sure.
            # Usually: 
            # col 1 -> Word
            # col 2 -> Meaning
            # col 3 -> Sen 1
            # col 4 -> Sen 1 Meaning
            words = []
            for index, row in df.iterrows():
                try:
                    word_en = str(row.iloc[1]).strip()
                    word_ko = str(row.iloc[2]).strip()
                    sen_en = str(row.iloc[3]).strip()
                    sen_ko = str(row.iloc[4]).strip()

                    if pd.isna(word_en) or word_en == 'nan' or not word_en:
                        continue
                    
                    # Also, the web app parses 14 words per session. We just read them sequentially.
                    words.append({
                        "id": index + 1,
                        "en": word_en,
                        "ko": word_ko,
                        "senEn": sen_en,
                        "senKo": sen_ko,
                        "def": "" # Ignore definition for dictation
                    })
                except Exception as e:
                    pass
            
            # Keep only exact multiples of 14, or up to 42 max. (Web app uses 42)
            words = words[:42]
            
            # Extract chapter title from sheet name
            title = sheet_name.split('.', 1)[-1].strip() if '.' in sheet_name else sheet_name
            db.append({
                "id": chapter_id,
                "title": title,
                "words": words
            })
            chapter_id += 1
            
    except Exception as e:
        print(f"Error parsing excel: {e}")
    return db

async def generate_single_audio(text, speed_key, rate_str, out_path, sem):
    async with sem:
        if os.path.exists(out_path):
            return
        try:
            communicate = edge_tts.Communicate(text, VOICE, rate=rate_str)
            await communicate.save(out_path)
            print(f"Generated: {out_path}")
        except Exception as e:
            print(f"Failed: {out_path} - {e}")

async def generate_all_audios(db):
    if not os.path.exists(AUDIO_DIR):
        os.makedirs(AUDIO_DIR)
        
    tasks = []
    sem = asyncio.Semaphore(15) # 15 concurrent requests max
    
    for ch in db:
        ch_dir = os.path.join(AUDIO_DIR, f"chapter_{ch['id']}")
        if not os.path.exists(ch_dir):
            os.makedirs(ch_dir)
            
        for i, word in enumerate(ch['words']):
            sen = word['senEn']
            if not sen or sen == 'nan':
                continue
            word_idx = i + 1
            
            for speed_key, rate_str in SPEEDS.items():
                out_name = f"sen_{word_idx}_{speed_key}.mp3"
                out_path = os.path.join(ch_dir, out_name)
                
                # Add to asyncio tasks
                task = asyncio.create_task(generate_single_audio(sen, speed_key, rate_str, out_path, sem))
                tasks.append(task)
                
    await asyncio.gather(*tasks)

def main():
    print("Parsing Excel...")
    db = parse_excel()
    print(f"Parsed {len(db)} chapters.")
    
    print("Writing data.js...")
    with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
        f.write(f"const db = {json.dumps(db, ensure_ascii=False, indent=2)};\n")
        
    print(f"Generating MP3 audio files for {len(db)} chapters...")
    asyncio.run(generate_all_audios(db))
    print("All audio files generated successfully.")

if __name__ == '__main__':
    main()
