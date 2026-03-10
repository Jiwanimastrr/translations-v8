const db = [
  {
    "id": 1,
    "title": "home",
    "words": [
      {
        "id": 1,
        "en": "Word (Text)",
        "ko": "Interpretation01_Korean",
        "senEn": "Sentence 1 (Text)",
        "senKo": "Interpretation01_Korean",
        "def": ""
      },
      {
        "id": 2,
        "en": "air conditioner",
        "ko": "에어컨",
        "senEn": "Turn on the air conditioner.",
        "senKo": "에어컨을 켜세요.",
        "def": ""
      },
      {
        "id": 3,
        "en": "attic",
        "ko": "다락(방)",
        "senEn": "Anne lived in the attic of the house.",
        "senKo": "앤은 그 집 다락방에 살았어요.",
        "def": ""
      },
      {
        "id": 4,
        "en": "aunt",
        "ko": "이모, 고모",
        "senEn": "My aunt lives in Busan.",
        "senKo": "우리 이모는 부산에 살고 계세요.",
        "def": ""
      },
      {
        "id": 5,
        "en": "basement",
        "ko": "지하층",
        "senEn": "We have a large basement.",
        "senKo": "우리집에는 큰 지하실이 있어요.",
        "def": ""
      },
      {
        "id": 6,
        "en": "bathroom",
        "ko": "욕실, 화장실",
        "senEn": "Where is the bathroom?",
        "senKo": "화장실이 어디예요?",
        "def": ""
      },
      {
        "id": 7,
        "en": "bed",
        "ko": "침대",
        "senEn": "A pillow is on the bed.",
        "senKo": "침대 위에 베개가 있어요.",
        "def": ""
      },
      {
        "id": 8,
        "en": "bedroom",
        "ko": "침실, 방",
        "senEn": "My bedroom is too small.",
        "senKo": "내 방은 아주 작아요.",
        "def": ""
      },
      {
        "id": 9,
        "en": "blanket",
        "ko": "담요",
        "senEn": "The blanket is made of wool.",
        "senKo": "그 담요는 양모로 만들어졌어요.",
        "def": ""
      },
      {
        "id": 10,
        "en": "bowl",
        "ko": "그릇",
        "senEn": "The bowl is full of milk.",
        "senKo": "그릇에 우유가 가득 담겨있네요.",
        "def": ""
      },
      {
        "id": 11,
        "en": "brother",
        "ko": "형제",
        "senEn": "I have two brothers.",
        "senKo": "나는 남자 형제가 두명 있어요.",
        "def": ""
      },
      {
        "id": 12,
        "en": "chair",
        "ko": "의자",
        "senEn": "I like the yellow chair.",
        "senKo": "나는 노란 의자를 좋아해요.",
        "def": ""
      },
      {
        "id": 13,
        "en": "closet",
        "ko": "옷장",
        "senEn": "I put my clothes in the small closet.",
        "senKo": "내 옷을 작은 옷장에 두었어요.",
        "def": ""
      },
      {
        "id": 14,
        "en": "computer",
        "ko": "컴퓨터",
        "senEn": "What do you usually do with your computer?",
        "senKo": "당신은 컴퓨터로 주로 무슨 일을 하나요?",
        "def": ""
      },
      {
        "id": 15,
        "en": "cook",
        "ko": "요리하다",
        "senEn": "My brother cooks very well.",
        "senKo": "우리 형은 요리를 아주 잘 해요.",
        "def": ""
      },
      {
        "id": 16,
        "en": "cousin",
        "ko": "사촌",
        "senEn": "My cousin has brown hair.",
        "senKo": "내 사촌은 갈색 머리예요.",
        "def": ""
      },
      {
        "id": 17,
        "en": "cupboard",
        "ko": "찬장",
        "senEn": "There is a big cupboard in the kitchen.",
        "senKo": "주방에 큰 찬장이 있어요.",
        "def": ""
      },
      {
        "id": 18,
        "en": "daughter",
        "ko": "딸",
        "senEn": "We have a daughter.",
        "senKo": "우리는 딸이 한 명 있어요.",
        "def": ""
      },
      {
        "id": 19,
        "en": "desk",
        "ko": "책상",
        "senEn": "The desk is messy.",
        "senKo": "책상이 어질러져 있네요.",
        "def": ""
      },
      {
        "id": 20,
        "en": "dining area",
        "ko": "식탁공간",
        "senEn": "We have meals in the dining area.",
        "senKo": "우리는 식탁에서 음식을 먹어요.",
        "def": ""
      },
      {
        "id": 21,
        "en": "floor",
        "ko": "바닥",
        "senEn": "A baby is playing on the floor.",
        "senKo": "아기가 바닥에서 놀고 있어요.",
        "def": ""
      },
      {
        "id": 22,
        "en": "garage",
        "ko": "차고, 창고",
        "senEn": "He parked his car in the garage.",
        "senKo": "그는 차고에 차를 주차했어요.",
        "def": ""
      },
      {
        "id": 23,
        "en": "garbage",
        "ko": "쓰레기",
        "senEn": "A boy threw some trash in the garbage can.",
        "senKo": "소년이 쓰레기통에 쓰레기를 버렸어요.",
        "def": ""
      },
      {
        "id": 24,
        "en": "grandfather",
        "ko": "할아버지",
        "senEn": "My grandfather wants to live with me.",
        "senKo": "우리 할아버지는 나와 함께 살고 싶어하세요.",
        "def": ""
      },
      {
        "id": 25,
        "en": "grandmother",
        "ko": "할머니",
        "senEn": "My grandmother is in her sixties.",
        "senKo": "우리 할머니는 60대입니다.",
        "def": ""
      },
      {
        "id": 26,
        "en": "grandparents",
        "ko": "조부모님",
        "senEn": "I live with my grandparents.",
        "senKo": "나는 조부모님과 살고 있어요.",
        "def": ""
      },
      {
        "id": 27,
        "en": "kitchen",
        "ko": "부엌, 주방",
        "senEn": "A man is in the kitchen.",
        "senKo": "한 남자가 주방에 있어요.",
        "def": ""
      },
      {
        "id": 28,
        "en": "living room",
        "ko": "거실",
        "senEn": "Let's watch TV in the living room.",
        "senKo": "거실에서 TV를 보자.",
        "def": ""
      },
      {
        "id": 29,
        "en": "mobile phone",
        "ko": "휴대폰",
        "senEn": "Children don't need a mobile phone.",
        "senKo": "어린이는 휴대폰이 필요하지 않아요.",
        "def": ""
      },
      {
        "id": 30,
        "en": "parents",
        "ko": "부모님",
        "senEn": "I really love my parents.",
        "senKo": "나는 부모님을 정말 사랑해요.",
        "def": ""
      },
      {
        "id": 31,
        "en": "pillow",
        "ko": "베개",
        "senEn": "I like a soft pillow.",
        "senKo": "나는 부드러운 베개를 좋아해요.",
        "def": ""
      },
      {
        "id": 32,
        "en": "porch light",
        "ko": "현관등",
        "senEn": "Turn on the porch light at 7 o'clock.",
        "senKo": "7시에 현관등을 켜세요.",
        "def": ""
      },
      {
        "id": 33,
        "en": "refrigerator",
        "ko": "냉장고",
        "senEn": "We need a refrigerator in the summer.",
        "senKo": "여름에는 냉장고가 필요합니다.",
        "def": ""
      },
      {
        "id": 34,
        "en": "roof",
        "ko": "지붕",
        "senEn": "The house has a red roof.",
        "senKo": "그 집은 빨간 색 지붕이야.",
        "def": ""
      },
      {
        "id": 35,
        "en": "satellite dish",
        "ko": "위성안테나",
        "senEn": "There is a satellite dish on the window.",
        "senKo": "창문에 위성 안테나가 있어요.",
        "def": ""
      },
      {
        "id": 36,
        "en": "sibling",
        "ko": "형제 자매",
        "senEn": "I have no siblings.",
        "senKo": "나는 형제자매가 없어요.",
        "def": ""
      },
      {
        "id": 37,
        "en": "sister",
        "ko": "자매",
        "senEn": "Diana is my sister.",
        "senKo": "Diana는 내 여동생이야.",
        "def": ""
      },
      {
        "id": 38,
        "en": "son",
        "ko": "아들",
        "senEn": "This is my son, Thomas.",
        "senKo": "이 애는 내 아들 Thomas예요.",
        "def": ""
      },
      {
        "id": 39,
        "en": "table",
        "ko": "탁자",
        "senEn": "Put the bowls on the table.",
        "senKo": "그릇을 탁자 위에 놓아요.",
        "def": ""
      },
      {
        "id": 40,
        "en": "telephone",
        "ko": "전화기",
        "senEn": "I'll answer the telephone.",
        "senKo": "전화를 받을게요.",
        "def": ""
      },
      {
        "id": 41,
        "en": "vacuum cleaner",
        "ko": "진공청소기",
        "senEn": "The vacuum cleaner sucked in all the dust.",
        "senKo": "청소기가 모든 먼지를 빨아들였어요.",
        "def": ""
      },
      {
        "id": 42,
        "en": "window",
        "ko": "창문",
        "senEn": "Open the window, please.",
        "senKo": "창문 좀 열어 주세요.",
        "def": ""
      }
    ]
  },
  {
    "id": 2,
    "title": "Time",
    "words": [
      {
        "id": 1,
        "en": "Word (Text)",
        "ko": "Interpretation01_Korean",
        "senEn": "Sentence 1 (Text)",
        "senKo": "Interpretation01_Korean",
        "def": ""
      },
      {
        "id": 2,
        "en": "afternoon",
        "ko": "오후",
        "senEn": "It is a rainny afternoon.",
        "senKo": "비가 오는 오후입니다.",
        "def": ""
      },
      {
        "id": 3,
        "en": "annual",
        "ko": "매년, 연례의",
        "senEn": "They spent their annual holiday on a yacht in the Caribbean.",
        "senKo": "그들은 카리브해에서 요트를 타고 연차 휴가를 보냈어요.",
        "def": ""
      },
      {
        "id": 4,
        "en": "April",
        "ko": "4월",
        "senEn": "My birthday is in April.",
        "senKo": "내 생일은 4월이예요.",
        "def": ""
      },
      {
        "id": 5,
        "en": "August",
        "ko": "8월",
        "senEn": "The special event is in August.",
        "senKo": "그 특별 행사는 8월에 있어요.",
        "def": ""
      },
      {
        "id": 6,
        "en": "clock",
        "ko": "시계",
        "senEn": "I have an antique clock.",
        "senKo": "난 오래된 시계를 가지고 있어요.",
        "def": ""
      },
      {
        "id": 7,
        "en": "decade",
        "ko": "10년간",
        "senEn": "They change their leader every decade.",
        "senKo": "그들은 10년마다 그들의 지도자를 바꿉니다.",
        "def": ""
      },
      {
        "id": 8,
        "en": "December",
        "ko": "12월",
        "senEn": "I was born in December.",
        "senKo": "나는 12월에 태어났어요.",
        "def": ""
      },
      {
        "id": 9,
        "en": "evening",
        "ko": "저녁",
        "senEn": "I usually watch TV in the evening.",
        "senKo": "나는 주로 저녁에 TV를 봅니다.",
        "def": ""
      },
      {
        "id": 10,
        "en": "February",
        "ko": "2월",
        "senEn": "My birthday is in February.",
        "senKo": "내 생일은 2월이에요.",
        "def": ""
      },
      {
        "id": 11,
        "en": "Friday",
        "ko": "금요일",
        "senEn": "Shall we go to the theater on Friday?",
        "senKo": "금요일에 극장에 갈까?",
        "def": ""
      },
      {
        "id": 12,
        "en": "hour",
        "ko": "1 시간",
        "senEn": "There are 24 hours in a day.",
        "senKo": "하루는 24시간입니다.",
        "def": ""
      },
      {
        "id": 13,
        "en": "January",
        "ko": "1월",
        "senEn": "Her father died in January.",
        "senKo": "그녀의 아버지는 1월에 돌아가셨어요.",
        "def": ""
      },
      {
        "id": 14,
        "en": "July",
        "ko": "7월",
        "senEn": "My birthday is in July.",
        "senKo": "내 생일은 7월이야.",
        "def": ""
      },
      {
        "id": 15,
        "en": "June",
        "ko": "6월",
        "senEn": "Her birthday in on the 25th of June.",
        "senKo": "내 생일은 6월 25일이야.",
        "def": ""
      },
      {
        "id": 16,
        "en": "March",
        "ko": "3월",
        "senEn": "He left on the 26th of March.",
        "senKo": "그는 3월 26일에 떠났어요.",
        "def": ""
      },
      {
        "id": 17,
        "en": "May",
        "ko": "5월",
        "senEn": "My mother's birthday is in May.",
        "senKo": "엄마의 생일은 5월이예요.",
        "def": ""
      },
      {
        "id": 18,
        "en": "midnight",
        "ko": "한밤중",
        "senEn": "I heard the clock strike during the midnight.",
        "senKo": "한밤중에 시계 치는 소리가 들렸어요.",
        "def": ""
      },
      {
        "id": 19,
        "en": "minute",
        "ko": "분",
        "senEn": "Wait a minute.",
        "senKo": "잠깐만 기다려요.",
        "def": ""
      },
      {
        "id": 20,
        "en": "Monday",
        "ko": "월요일",
        "senEn": "I'll see you next Monday.",
        "senKo": "다음 월요일에 만나요.",
        "def": ""
      },
      {
        "id": 21,
        "en": "month",
        "ko": "월(달)",
        "senEn": "February is the shortest month.",
        "senKo": "2월은 가장 짧은 달이에요.",
        "def": ""
      },
      {
        "id": 22,
        "en": "morning",
        "ko": "아침",
        "senEn": "I get up early in the morning.",
        "senKo": "나는 아침에 일찍 일어나요.",
        "def": ""
      },
      {
        "id": 23,
        "en": "night",
        "ko": "밤",
        "senEn": "It gets cold at night.",
        "senKo": "밤에는 추워져요.",
        "def": ""
      },
      {
        "id": 24,
        "en": "noon",
        "ko": "정오",
        "senEn": "I usually have lunch at noon.",
        "senKo": "나는 보통 12시 정각에 점심을 먹어요.",
        "def": ""
      },
      {
        "id": 25,
        "en": "November",
        "ko": "11월",
        "senEn": "The bakery opened last November.",
        "senKo": "그 제과점은 지난 11월에 오픈했어요.",
        "def": ""
      },
      {
        "id": 26,
        "en": "October",
        "ko": "10월",
        "senEn": "Halloween is on October 31st.",
        "senKo": "할로윈은 10월 31일이에요.",
        "def": ""
      },
      {
        "id": 27,
        "en": "once",
        "ko": "한번",
        "senEn": "I want to try it once again.",
        "senKo": "한 번 더 해보고 싶어요.",
        "def": ""
      },
      {
        "id": 28,
        "en": "overnight",
        "ko": "밤새",
        "senEn": "He became a star overnight.",
        "senKo": "그는 하룻밤새 스타가 되었네요.",
        "def": ""
      },
      {
        "id": 29,
        "en": "quarter",
        "ko": "15분",
        "senEn": "It is a quarter to six.",
        "senKo": "6시 15분 전입니다.",
        "def": ""
      },
      {
        "id": 30,
        "en": "Saturday",
        "ko": "토요일",
        "senEn": "David is leaving on Saturday.",
        "senKo": "David는 토요일에 떠납니다.",
        "def": ""
      },
      {
        "id": 31,
        "en": "schedule",
        "ko": "일정",
        "senEn": "I'm really on a tight schedule.",
        "senKo": "정말로 빡빡한 일정이에요.",
        "def": ""
      },
      {
        "id": 32,
        "en": "September",
        "ko": "9월",
        "senEn": "My birthday is in September.",
        "senKo": "내 생일은 9월이에요.",
        "def": ""
      },
      {
        "id": 33,
        "en": "Sunday",
        "ko": "일요일",
        "senEn": "We go to church every Sunday.",
        "senKo": "우리는 매주 일요일에 교회에 갑니다.",
        "def": ""
      },
      {
        "id": 34,
        "en": "Thursday",
        "ko": "목요일",
        "senEn": "See you next Thursday!",
        "senKo": "다음 주 목요일에 만나요.",
        "def": ""
      },
      {
        "id": 35,
        "en": "today",
        "ko": "오늘",
        "senEn": "What’s the date today?",
        "senKo": "오늘이 몇일 인가요?",
        "def": ""
      },
      {
        "id": 36,
        "en": "tomorrow",
        "ko": "내일",
        "senEn": "See you tomorrow.",
        "senKo": "내일 보자.",
        "def": ""
      },
      {
        "id": 37,
        "en": "Tuesday",
        "ko": "화요일",
        "senEn": "We always meet on Tuesdays.",
        "senKo": "우리는 화요일 마다 늘 만납니다.",
        "def": ""
      },
      {
        "id": 38,
        "en": "twice",
        "ko": "두번",
        "senEn": "I've already asked him twice.",
        "senKo": "나는 이미 그에게 두 번이나 물었어요.",
        "def": ""
      },
      {
        "id": 39,
        "en": "Wednesday",
        "ko": "수요일",
        "senEn": "I didn't go to school last Wednesday.",
        "senKo": "지난 수요일, 나는 학교에 가지 않았어요.",
        "def": ""
      },
      {
        "id": 40,
        "en": "week",
        "ko": "주간",
        "senEn": "I go to aerobics three times a week.",
        "senKo": "나는 일주일에 세 번 에어로빅하러 가요.",
        "def": ""
      },
      {
        "id": 41,
        "en": "weekend",
        "ko": "주말",
        "senEn": "He spent the weekend fishing with his brother.",
        "senKo": "그는 주말에 형과 함께 낚시를 하며 보냈다.",
        "def": ""
      },
      {
        "id": 42,
        "en": "year",
        "ko": "연",
        "senEn": "Annette worked in Italy for two years.",
        "senKo": "Annette은 2년동안 이탈리아에서 일했다.",
        "def": ""
      }
    ]
  },
  {
    "id": 3,
    "title": "Season & Weather",
    "words": [
      {
        "id": 1,
        "en": "Word (Text)",
        "ko": "Interpretation01_Korean",
        "senEn": "Sentence 1 (Text)",
        "senKo": "Interpretation01_Korean",
        "def": ""
      },
      {
        "id": 2,
        "en": "autumn",
        "ko": "가을",
        "senEn": "My favorite season is autumn.",
        "senKo": "내가 가장 좋아하는 계절은 가을이야.",
        "def": ""
      },
      {
        "id": 3,
        "en": "blizzard",
        "ko": "눈보라",
        "senEn": "The blizzard was blowing outside.",
        "senKo": "밖에는 눈보라가 치고 있었어.",
        "def": ""
      },
      {
        "id": 4,
        "en": "breeze",
        "ko": "산들바람, 미풍",
        "senEn": "Flags are flapping in the breeze.",
        "senKo": "산들바람에 깃발이 날리고 있어.",
        "def": ""
      },
      {
        "id": 5,
        "en": "chilly",
        "ko": "쌀쌀한",
        "senEn": "It's rather chilly this morning.",
        "senKo": "오늘 아침은 좀 쌀쌀하네요.",
        "def": ""
      },
      {
        "id": 6,
        "en": "cloud",
        "ko": "구름",
        "senEn": "There is a big cloud in the sky.",
        "senKo": "커다란 구름이 하늘에 떠 있어요.",
        "def": ""
      },
      {
        "id": 7,
        "en": "desert",
        "ko": "사막",
        "senEn": "The little prince met a fox in a desert.",
        "senKo": "어린왕자는 사막에서 여우를 만났어요.",
        "def": ""
      },
      {
        "id": 8,
        "en": "dew",
        "ko": "이슬",
        "senEn": "The plants were wet with dew.",
        "senKo": "식물이 이슬에 젖었네요.",
        "def": ""
      },
      {
        "id": 9,
        "en": "drought",
        "ko": "가뭄",
        "senEn": "We need the rain after that long drought.",
        "senKo": "오랜 가뭄이 지난 후 비가 와야 해요.",
        "def": ""
      },
      {
        "id": 10,
        "en": "dust",
        "ko": "먼지",
        "senEn": "The table was covered with a lot of dust.",
        "senKo": "테이블이 많은 먼지로 덮여 있어요.",
        "def": ""
      },
      {
        "id": 11,
        "en": "earthquake",
        "ko": "지진",
        "senEn": "An earthquake was felt last night.",
        "senKo": "어제 밤에 지진이 감지되었다.",
        "def": ""
      },
      {
        "id": 12,
        "en": "flood",
        "ko": "홍수",
        "senEn": "There was a flood in New Orleans.",
        "senKo": "뉴올리언즈에 홍수가 났어요.",
        "def": ""
      },
      {
        "id": 13,
        "en": "fog (foggy)",
        "ko": "안개",
        "senEn": "The fog lifted in the afternoon.",
        "senKo": "오후에 안개가 걷혔다.",
        "def": ""
      },
      {
        "id": 14,
        "en": "freezing",
        "ko": "몹시 추운",
        "senEn": "I am freezing to death.",
        "senKo": "너무 추워요. (얼어 죽겠어요.)",
        "def": ""
      },
      {
        "id": 15,
        "en": "frost",
        "ko": "서리",
        "senEn": "There was a heavy frost last night.",
        "senKo": "어젯밤에 서리가 내렸어요.",
        "def": ""
      },
      {
        "id": 16,
        "en": "glacier",
        "ko": "빙하",
        "senEn": "A glacier is a mass of ice.",
        "senKo": "빙하는 얼음덩어리예요.",
        "def": ""
      },
      {
        "id": 17,
        "en": "ground",
        "ko": "땅, 지면",
        "senEn": "There was trash on the ground.",
        "senKo": "땅바닥에 쓰레기가 있었지요.",
        "def": ""
      },
      {
        "id": 18,
        "en": "hail",
        "ko": "우박",
        "senEn": "Hail was falling from the sky like rain.",
        "senKo": "우박이 하늘에서 비처럼 떨어지고 있어요.",
        "def": ""
      },
      {
        "id": 19,
        "en": "harvest",
        "ko": "수확하다, 추수하다",
        "senEn": "We had a good harvest this year.",
        "senKo": "올해는 수확이 좋아요.",
        "def": ""
      },
      {
        "id": 20,
        "en": "haze",
        "ko": "안개, 연무",
        "senEn": "I can't see you due to the haze.",
        "senKo": "안개 때문에 너를 볼 수가 없어.",
        "def": ""
      },
      {
        "id": 21,
        "en": "humid",
        "ko": "습한",
        "senEn": "The city is very hot and humid in August.",
        "senKo": "그 도시는 8월에 매우 덥고 습합니다.",
        "def": ""
      },
      {
        "id": 22,
        "en": "hurricane",
        "ko": "허리케인",
        "senEn": "A hurricane hit the city last month.",
        "senKo": "지난 달에 허리케인이 도시를 강타했어요.",
        "def": ""
      },
      {
        "id": 23,
        "en": "iceberg",
        "ko": "빙산",
        "senEn": "It's the tip of the iceberg.",
        "senKo": "빙산의 일각이에요.",
        "def": ""
      },
      {
        "id": 24,
        "en": "lightning",
        "ko": "번개",
        "senEn": "Lightning crackled in the skies.",
        "senKo": "하늘에서 번개가 번쩍였어요.",
        "def": ""
      },
      {
        "id": 25,
        "en": "mist",
        "ko": "옅은 안개, 분무",
        "senEn": "Mist was rolling from the sea.",
        "senKo": "바다로부터 옅은 안개가 밀려왔어요.",
        "def": ""
      },
      {
        "id": 26,
        "en": "monsoon",
        "ko": "우기, 장마",
        "senEn": "Every year they have monsoon season in Korea.",
        "senKo": "한국에는 매년 장마철이 있어요.",
        "def": ""
      },
      {
        "id": 27,
        "en": "muggy",
        "ko": "후덥지근한",
        "senEn": "It was so hot from the muggy air.",
        "senKo": "후덥지근한 공기때문에 너무 더웠어요.",
        "def": ""
      },
      {
        "id": 28,
        "en": "ocean",
        "ko": "대양",
        "senEn": "There is a lot of water in the ocean.",
        "senKo": "바다에는 물이 많지요.",
        "def": ""
      },
      {
        "id": 29,
        "en": "rainforest",
        "ko": "(열대)우림",
        "senEn": "Plants grow quickly in a rainforest.",
        "senKo": "열대우림에서는 식물이 빨리 자랍니다.",
        "def": ""
      },
      {
        "id": 30,
        "en": "season",
        "ko": "계절",
        "senEn": "What is your favorite season?",
        "senKo": "가장 좋아하는 계절이 언제야?",
        "def": ""
      },
      {
        "id": 31,
        "en": "sow",
        "ko": "씨뿌리다",
        "senEn": "I will sow the seeds in the pot.",
        "senKo": "나는 화분에 씨앗을 심을 거예요.",
        "def": ""
      },
      {
        "id": 32,
        "en": "spring",
        "ko": "봄",
        "senEn": "Spring is my favorite time.",
        "senKo": "봄은 내가 가장 좋아하는 시간이에요.",
        "def": ""
      },
      {
        "id": 33,
        "en": "storm",
        "ko": "폭풍",
        "senEn": "The storm continued for a week.",
        "senKo": "폭풍이 일주일간 계속되었어요.",
        "def": ""
      },
      {
        "id": 34,
        "en": "summer",
        "ko": "여름",
        "senEn": "It's really hot this summer.",
        "senKo": "이번 여름은 정말 더워요.",
        "def": ""
      },
      {
        "id": 35,
        "en": "temperature",
        "ko": "온도, 기온",
        "senEn": "The temperature today reached 30°C.",
        "senKo": "오늘 기온은 섭씨 30도에 달했어요.",
        "def": ""
      },
      {
        "id": 36,
        "en": "thunder",
        "ko": "천둥",
        "senEn": "The baby woke from thunder.",
        "senKo": "아기가 천둥 소리에 깨어났어요.",
        "def": ""
      },
      {
        "id": 37,
        "en": "tornado",
        "ko": "토네이도",
        "senEn": "The tornado was very strong and dangerous.",
        "senKo": "토네이도는 매우 강하고 위험했어요.",
        "def": ""
      },
      {
        "id": 38,
        "en": "tropical",
        "ko": "열대의",
        "senEn": "They love the colorful tropical fish.",
        "senKo": "그들은 화려한 색의 열대어를 좋아합니다.",
        "def": ""
      },
      {
        "id": 39,
        "en": "volcano",
        "ko": "화산",
        "senEn": "The mountain is a dormant volcano.",
        "senKo": "그 산은 휴화산입니다.",
        "def": ""
      },
      {
        "id": 40,
        "en": "warm",
        "ko": "따뜻한",
        "senEn": "It's warm in April.",
        "senKo": "4월에는 따뜻해요.",
        "def": ""
      },
      {
        "id": 41,
        "en": "wet",
        "ko": "젖은",
        "senEn": "They are depressed by the wet weather.",
        "senKo": "그들은 축축한 날씨 때문에 우울합니다.",
        "def": ""
      },
      {
        "id": 42,
        "en": "wind",
        "ko": "바람",
        "senEn": "There was a light wind blowing.",
        "senKo": "미풍이 불었어요.",
        "def": ""
      }
    ]
  },
  {
    "id": 4,
    "title": "Job & Work",
    "words": [
      {
        "id": 1,
        "en": "Word (text)",
        "ko": "Interpretation01_Korean",
        "senEn": "Sentence 1 (Text)",
        "senKo": "Interpretation01_Korean",
        "def": ""
      },
      {
        "id": 2,
        "en": "actor",
        "ko": "배우",
        "senEn": "He is a famous actor in France.",
        "senKo": "그는 프랑스에서 유명한 배우야.",
        "def": ""
      },
      {
        "id": 3,
        "en": "artist",
        "ko": "화가",
        "senEn": "The artist painted this picture using watercolors.",
        "senKo": "화가는 수채화로 이 그림을 그렸어요.",
        "def": ""
      },
      {
        "id": 4,
        "en": "astronaut",
        "ko": "우주비행사",
        "senEn": "An astronaut is a person who travels in space.",
        "senKo": "우주비행사는 우주공간을 여행하는 사람입니다.",
        "def": ""
      },
      {
        "id": 5,
        "en": "athlete",
        "ko": "운동선수",
        "senEn": "He is a famous athlete in the USA.",
        "senKo": "그는 미국의 유명한 운동선수예요.",
        "def": ""
      },
      {
        "id": 6,
        "en": "author",
        "ko": "작가",
        "senEn": "Aesop was the author of many fables.",
        "senKo": "이솝은 많은 우화의 저자예요.",
        "def": ""
      },
      {
        "id": 7,
        "en": "baker",
        "ko": "제빵사",
        "senEn": "Joseph is a baker at the bakery.",
        "senKo": "Joseph은 그 빵집에서 일하는 제빵사예요.",
        "def": ""
      },
      {
        "id": 8,
        "en": "barista",
        "ko": "바리스타",
        "senEn": "I want to be the best barista.",
        "senKo": "나는 최고의 바리스타가 되고 싶어요.",
        "def": ""
      },
      {
        "id": 9,
        "en": "broadcaster",
        "ko": "방송기술자",
        "senEn": "She was a famous broadcaster in 1990s.",
        "senKo": "그녀는 1990년대의 유명한 방송인입니다.",
        "def": ""
      },
      {
        "id": 10,
        "en": "businessman",
        "ko": "사업가",
        "senEn": "My father is a businessman.",
        "senKo": "우리 아버지는 사업가입니다.",
        "def": ""
      },
      {
        "id": 11,
        "en": "cartoonist",
        "ko": "만화가, 카툰작가",
        "senEn": "Walt Disney was a poor cartoonist.",
        "senKo": "월트 디즈니는 가난한 만화가였어요.",
        "def": ""
      },
      {
        "id": 12,
        "en": "cashier",
        "ko": "계산원",
        "senEn": "The cashier gave me the change for a $5.",
        "senKo": "계산원이 내게 5달러를 거슬러주었다.",
        "def": ""
      },
      {
        "id": 13,
        "en": "chef",
        "ko": "요리사, 쉐프",
        "senEn": "He is one of the top chefs in Paris.",
        "senKo": "그는 파리 최고의 요리사 중 한 명이다.",
        "def": ""
      },
      {
        "id": 14,
        "en": "clerk",
        "ko": "점원",
        "senEn": "I asked the clerk show another one.",
        "senKo": "나는 직원에게 다른 것을 보여달라고 요청했다.",
        "def": ""
      },
      {
        "id": 15,
        "en": "dentist",
        "ko": "치과의사",
        "senEn": "I want to be a dentist.",
        "senKo": "치과의사가 되고 싶어요.",
        "def": ""
      },
      {
        "id": 16,
        "en": "diplomat",
        "ko": "외교관",
        "senEn": "She is the daughter of a diplomat.",
        "senKo": "그녀는 외교관의 딸이에요.",
        "def": ""
      },
      {
        "id": 17,
        "en": "farmer",
        "ko": "농부",
        "senEn": "My parents are farmers working in the field.",
        "senKo": "부모님은 현장에서 일하는 농부입니다.",
        "def": ""
      },
      {
        "id": 18,
        "en": "firefighter",
        "ko": "소방수",
        "senEn": "My father was a brave firefighter.",
        "senKo": "아버지는 용감한 소방관이었어요.",
        "def": ""
      },
      {
        "id": 19,
        "en": "fisherman",
        "ko": "어부",
        "senEn": "The fisherman cast the net into the water.",
        "senKo": "어부는 물 속으로 그물을 던졌어요.",
        "def": ""
      },
      {
        "id": 20,
        "en": "hairdresser",
        "ko": "미용사",
        "senEn": "David works as a hairdresser in the shop.",
        "senKo": "David은 그 가게에서 미용사로 일하고 있어요.",
        "def": ""
      },
      {
        "id": 21,
        "en": "housekeeper",
        "ko": "가사도우미",
        "senEn": "He is a good housekeeper.",
        "senKo": "그는 훌륭한 가사도우미예요.",
        "def": ""
      },
      {
        "id": 22,
        "en": "interpreter",
        "ko": "통역사",
        "senEn": "She wants to become an interpreter.",
        "senKo": "그녀는 통역사가 되고 싶어요.",
        "def": ""
      },
      {
        "id": 23,
        "en": "janitor",
        "ko": "관리인",
        "senEn": "The janitor became a mayer of the city.",
        "senKo": "그 관리인은 시장이 되었다.",
        "def": ""
      },
      {
        "id": 24,
        "en": "judge",
        "ko": "판사",
        "senEn": "The judge asked the witnesses to pledge.",
        "senKo": "판사는 증인에게 서약을 요청했다.",
        "def": ""
      },
      {
        "id": 25,
        "en": "lawyer",
        "ko": "변호사",
        "senEn": "The lawyer made an appearance in court.",
        "senKo": "변호사가 법정에 나왔다.",
        "def": ""
      },
      {
        "id": 26,
        "en": "librarian",
        "ko": "사서",
        "senEn": "I asked the librarian for the picture book.",
        "senKo": "나는 사서에게 그림책을 요청했다.",
        "def": ""
      },
      {
        "id": 27,
        "en": "magician",
        "ko": "마술사",
        "senEn": "I want to be a magician.",
        "senKo": "마술사가 되고 싶어요.",
        "def": ""
      },
      {
        "id": 28,
        "en": "mail carrier",
        "ko": "우편 배달부",
        "senEn": "She is a mail carrier.",
        "senKo": "그녀는 우편배달부예요.",
        "def": ""
      },
      {
        "id": 29,
        "en": "film director",
        "ko": "영화 감독",
        "senEn": "Bong Joon Ho is a famous film director.",
        "senKo": "봉준호는 유명한 영화감독이지요.",
        "def": ""
      },
      {
        "id": 30,
        "en": "musician",
        "ko": "음악가",
        "senEn": "She is the famous jazz musician.",
        "senKo": "그녀는 유명한 재즈 뮤지션(음악가)예요.",
        "def": ""
      },
      {
        "id": 31,
        "en": "novelist",
        "ko": "소설가",
        "senEn": "Charles Dickens is one of the best-known novelists.",
        "senKo": "찰스 디킨슨은 가장 유명한 소설가 중 한명이에요.",
        "def": ""
      },
      {
        "id": 32,
        "en": "nurse",
        "ko": "간호사",
        "senEn": "He worked as a nurse in a hospital.",
        "senKo": "그는 병원에서 간호사로 일하고 있어요.",
        "def": ""
      },
      {
        "id": 33,
        "en": "pharmacist",
        "ko": "약사",
        "senEn": "Jessica is studying to be a pharmacist.",
        "senKo": "Jessica는 약사가 되려고 공부하고 있어요.",
        "def": ""
      },
      {
        "id": 34,
        "en": "photographer",
        "ko": "사진 작가",
        "senEn": "I want to be a professional photographer.",
        "senKo": "나는 전문 사진 작가가 되고 싶어요.",
        "def": ""
      },
      {
        "id": 35,
        "en": "pilot",
        "ko": "비행기 조종사",
        "senEn": "I’d like to grow up to be a fighter pilot.",
        "senKo": "나는 커서 전투기 조종사가 되고 싶습니다.",
        "def": ""
      },
      {
        "id": 36,
        "en": "police officer",
        "ko": "경찰관",
        "senEn": "She's a police officer in my town.",
        "senKo": "그녀는 우리 지역의 경찰관입니다.",
        "def": ""
      },
      {
        "id": 37,
        "en": "public official",
        "ko": "공무원",
        "senEn": "Public officials helped their citizens.",
        "senKo": "공무원들이 시민을 도왔습니다.",
        "def": ""
      },
      {
        "id": 38,
        "en": "scientist",
        "ko": "과학자",
        "senEn": "You look like a scientist.",
        "senKo": "넌 과학자처럼 보여.",
        "def": ""
      },
      {
        "id": 39,
        "en": "security guard",
        "ko": "경비원, 보안요원",
        "senEn": "He started working as a security guard.",
        "senKo": "그는 경비원으로 일하기 시작했다.",
        "def": ""
      },
      {
        "id": 40,
        "en": "soldier",
        "ko": "군인",
        "senEn": "Soldiers must learn how to handle the weapon.",
        "senKo": "군인들은 무기 다루는 방법을 배워야 한다.",
        "def": ""
      },
      {
        "id": 41,
        "en": "statesman",
        "ko": "정치인",
        "senEn": "He is a statesman and poet.",
        "senKo": "그는 정치인이자 시인이다.",
        "def": ""
      },
      {
        "id": 42,
        "en": "vet",
        "ko": "수의사",
        "senEn": "I know the new bet well.",
        "senKo": "나는 그 새로 온 수의사를 잘 안다.",
        "def": ""
      }
    ]
  },
  {
    "id": 5,
    "title": "Place",
    "words": [
      {
        "id": 1,
        "en": "Word (text)",
        "ko": "Interpretation01_Korean",
        "senEn": "Sentence 1 (Text)",
        "senKo": "Interpretation01_Korean",
        "def": ""
      },
      {
        "id": 2,
        "en": "airport",
        "ko": "공항",
        "senEn": "What time do you go to the airport?",
        "senKo": "몇시에 공항에 가나요?",
        "def": ""
      },
      {
        "id": 3,
        "en": "amusement park",
        "ko": "놀이공원",
        "senEn": "How about going to the amusement park?",
        "senKo": "놀이공원에 가는 건 어때요?",
        "def": ""
      },
      {
        "id": 4,
        "en": "bakery",
        "ko": "빵집",
        "senEn": "I like the bread from the small bakery.",
        "senKo": "나는 그 작은 빵집의 빵이 좋아요.",
        "def": ""
      },
      {
        "id": 5,
        "en": "bank",
        "ko": "은행",
        "senEn": "There are two banks on this street.",
        "senKo": "이 거리에는 은행이 두 곳 있어요.",
        "def": ""
      },
      {
        "id": 6,
        "en": "beach",
        "ko": "해변",
        "senEn": "I often play on the beach with my brother.",
        "senKo": "나는 종종 동생과 함께 해변에서 놀아요.",
        "def": ""
      },
      {
        "id": 7,
        "en": "beauty shop",
        "ko": "미용실",
        "senEn": "I cut my hair at a beauty shop.",
        "senKo": "미용실에서 머리카락을 잘랐어요.",
        "def": ""
      },
      {
        "id": 8,
        "en": "bookstore",
        "ko": "서점",
        "senEn": "I'm going to the bookstore.",
        "senKo": "서점에 가고 있어요.",
        "def": ""
      },
      {
        "id": 9,
        "en": "bus stop",
        "ko": "버스정류장",
        "senEn": "I'm looking for a bus stop.",
        "senKo": "버스정류장을 찾고 있어요.",
        "def": ""
      },
      {
        "id": 10,
        "en": "campus",
        "ko": "교정, 캠퍼스",
        "senEn": "My parents first met on the campus.",
        "senKo": "부모님은 캠퍼스에서 처음 만났대요.",
        "def": ""
      },
      {
        "id": 11,
        "en": "church",
        "ko": "교회",
        "senEn": "Please take me to the nearest church.",
        "senKo": "가장 가까운 교회로 데려다 주세요.",
        "def": ""
      },
      {
        "id": 12,
        "en": "city hall",
        "ko": "시청",
        "senEn": "I live near the city hall.",
        "senKo": "나는 시청 근처에 살아요.",
        "def": ""
      },
      {
        "id": 13,
        "en": "concert hall",
        "ko": "연주회장",
        "senEn": "It is the most famous concert hall in the world.",
        "senKo": "거긴 세계에서 가장 유명한 콘서트 홀이에요.",
        "def": ""
      },
      {
        "id": 14,
        "en": "convenience store",
        "ko": "편의점",
        "senEn": "Convenience stores are usually open until late.",
        "senKo": "편의점은 보통 밤늦게까지 영업해요.",
        "def": ""
      },
      {
        "id": 15,
        "en": "department store",
        "ko": "백화점",
        "senEn": "Department stores are divided into several parts.",
        "senKo": "백화점은 여러 부분으로 나뉘어져 있어요.",
        "def": ""
      },
      {
        "id": 16,
        "en": "downtown",
        "ko": "시내",
        "senEn": "I live two hours from downtown.",
        "senKo": "나는 시내에서 두 시간 걸리는 곳에 살아요.",
        "def": ""
      },
      {
        "id": 17,
        "en": "factory",
        "ko": "공장",
        "senEn": "The factory produces cars.",
        "senKo": "그 공장은 자동차를 생산해요.",
        "def": ""
      },
      {
        "id": 18,
        "en": "farm",
        "ko": "농장",
        "senEn": "My grandparents have a small farm.",
        "senKo": "조부모님은 작은 농장을 가지고 있어요.",
        "def": ""
      },
      {
        "id": 19,
        "en": "fire station",
        "ko": "소방서",
        "senEn": "There is a fire station near my house.",
        "senKo": "우리 집 근처에 소방서가 있어요.",
        "def": ""
      },
      {
        "id": 20,
        "en": "flower shop",
        "ko": "꽃집",
        "senEn": "Do you know of a flower shop nearby?",
        "senKo": "근처에 꽃집이 있나요?",
        "def": ""
      },
      {
        "id": 21,
        "en": "forest",
        "ko": "숲",
        "senEn": "Let's go to the forest hike.",
        "senKo": "숲으로 하이킹 갑시다.",
        "def": ""
      },
      {
        "id": 22,
        "en": "gallery",
        "ko": "미술관, 화랑",
        "senEn": "I like to go to the National Gallery in London.",
        "senKo": "런던에 있는 국립미술관에 가고 싶어요.",
        "def": ""
      },
      {
        "id": 23,
        "en": "garden",
        "ko": "정원",
        "senEn": "Sometimes they have a party in their garden.",
        "senKo": "그들은 가끔 정원에서 파티를 합니다.",
        "def": ""
      },
      {
        "id": 24,
        "en": "gas station",
        "ko": "주유소",
        "senEn": "Drivers can buy fuel and oil at a gas station.",
        "senKo": "운전자들은 주유소에서 연료와 기름을 구입할 수 있어요.",
        "def": ""
      },
      {
        "id": 25,
        "en": "harbor",
        "ko": "항구",
        "senEn": "A large ship was docking in the harbor.",
        "senKo": "커다란 배 한 척이 항구에 정박했습니다.",
        "def": ""
      },
      {
        "id": 26,
        "en": "hospital",
        "ko": "병원",
        "senEn": "Where is the nearest hospital?",
        "senKo": "가장 가까운 병원이 어디인가요?",
        "def": ""
      },
      {
        "id": 27,
        "en": "library",
        "ko": "도서관",
        "senEn": "I go to the library once a week.",
        "senKo": "나는 일주일에 한번 도서관에 갑니다.",
        "def": ""
      },
      {
        "id": 28,
        "en": "market",
        "ko": "시장",
        "senEn": "I like shopping at a flea market.",
        "senKo": "나는 벼룩시장에서 쇼핑하는 것을 좋아합니다.",
        "def": ""
      },
      {
        "id": 29,
        "en": "mudflat",
        "ko": "갯벌",
        "senEn": "They can get a lot of food from the mudflat.",
        "senKo": "그들은 갯벌에서 많은 먹을 거리를 구할 수 있습니다.",
        "def": ""
      },
      {
        "id": 30,
        "en": "museum",
        "ko": "박물관",
        "senEn": "What time does the museum close?",
        "senKo": "박물관은 언제 문을 닫나요?",
        "def": ""
      },
      {
        "id": 31,
        "en": "orchard",
        "ko": "과수원",
        "senEn": "My parents work at an apple orchard.",
        "senKo": "부모님은 사과 과수원에서 일하십니다.",
        "def": ""
      },
      {
        "id": 32,
        "en": "park",
        "ko": "공원",
        "senEn": "Let's go to the park and ride a bike.",
        "senKo": "공원에 가서 자전거를 타자.",
        "def": ""
      },
      {
        "id": 33,
        "en": "parking lot",
        "ko": "주차장",
        "senEn": "Is there a parking lot nearby?",
        "senKo": "이 근처에 주차장이 있나요?",
        "def": ""
      },
      {
        "id": 34,
        "en": "police station",
        "ko": "경찰서",
        "senEn": "Let's take the old man to the police station.",
        "senKo": "그 노인을 경찰서에 모시고 갑시다.",
        "def": ""
      },
      {
        "id": 35,
        "en": "post office",
        "ko": "우체국",
        "senEn": "My father works at a post office.",
        "senKo": "우리 아버지는 우체국에서 일하십니다.",
        "def": ""
      },
      {
        "id": 36,
        "en": "restaurant",
        "ko": "식당",
        "senEn": "I like the family restaurant.",
        "senKo": "나는 그 패밀리 레스토랑을 좋아합니다.",
        "def": ""
      },
      {
        "id": 37,
        "en": "shopping mall",
        "ko": "쇼핑 몰",
        "senEn": "She is running an Internet shopping mall.",
        "senKo": "그녀는 인터넷 쇼핑몰을 운영하고 있어요.",
        "def": ""
      },
      {
        "id": 38,
        "en": "stadium",
        "ko": "경기장",
        "senEn": "The big game is played in the stadium.",
        "senKo": "큰 경기는 경기장에서 진행됩니다.",
        "def": ""
      },
      {
        "id": 39,
        "en": "stationery store",
        "ko": "문구점",
        "senEn": "I usually buy pencils at a stationery store.",
        "senKo": "나는 보통 문구점에서 연필을 삽니다.",
        "def": ""
      },
      {
        "id": 40,
        "en": "street",
        "ko": "거리",
        "senEn": "There are many sculptures along the street.",
        "senKo": "거리를 따라 많은 조각품이 많이 있네요.",
        "def": ""
      },
      {
        "id": 41,
        "en": "subway station",
        "ko": "지하철 역",
        "senEn": "Let's meet at the subway station this afternoon.",
        "senKo": "오늘 오후에 지하철 역에서 만나자.",
        "def": ""
      },
      {
        "id": 42,
        "en": "temple",
        "ko": "사찰, 사원",
        "senEn": "Angkor Wat is a famous temple in Cambodia.",
        "senKo": "앙코르와트는 캄보디아에 있는 유명한 사원입니다.",
        "def": ""
      }
    ]
  },
  {
    "id": 6,
    "title": "traffic",
    "words": [
      {
        "id": 1,
        "en": "Word (Text)",
        "ko": "Interpretation01_Korean",
        "senEn": "Sentence 1 (Text)",
        "senKo": "Interpretation01_Korean",
        "def": ""
      },
      {
        "id": 2,
        "en": "ambulance",
        "ko": "구급차",
        "senEn": "They called an ambulance.",
        "senKo": "그들은 구급차를 불렀다.",
        "def": ""
      },
      {
        "id": 3,
        "en": "automobile",
        "ko": "자동차",
        "senEn": "The automobile is a necessity in our lives.",
        "senKo": "자동차는 우리 삶의 필수품이다.",
        "def": ""
      },
      {
        "id": 4,
        "en": "bicycle",
        "ko": "자전거",
        "senEn": "I go to school by bicycle.",
        "senKo": "나는 자전거를 타고 학교에 간다.",
        "def": ""
      },
      {
        "id": 5,
        "en": "boat",
        "ko": "보트",
        "senEn": "A boat is a small vehicle on water.",
        "senKo": "보트는 물 위를 다니는 작은 차량이다.",
        "def": ""
      },
      {
        "id": 6,
        "en": "crossing",
        "ko": "건널목",
        "senEn": "The children are walking through the crossing.",
        "senKo": "아이들이 교차로를 걷고 있어요.",
        "def": ""
      },
      {
        "id": 7,
        "en": "cruise ship",
        "ko": "유람선",
        "senEn": "Our cruise ship is like a five-star hotel.",
        "senKo": "우리 유람선은 오성급 호텔 같습니다.",
        "def": ""
      },
      {
        "id": 8,
        "en": "dock",
        "ko": "부두",
        "senEn": "My uncle works at the dock.",
        "senKo": "우리 삼촌은 부두에서 일합니다.",
        "def": ""
      },
      {
        "id": 9,
        "en": "driver",
        "ko": "운전자",
        "senEn": "He is a taxi driver in Paris.",
        "senKo": "그는 파리의 택시 기사 입니다.",
        "def": ""
      },
      {
        "id": 10,
        "en": "driver's license",
        "ko": "운전면허증",
        "senEn": "When can I get a driver's license?",
        "senKo": "나는 언제 운전면허증을 받을 수 있을까요?",
        "def": ""
      },
      {
        "id": 11,
        "en": "dump truck",
        "ko": "덤프트럭",
        "senEn": "It looks exciting to drive a dump truck.",
        "senKo": "덤프 트럭 운전하는 것이 흥미로워 보여요.",
        "def": ""
      },
      {
        "id": 12,
        "en": "fire engine",
        "ko": "소방차",
        "senEn": "He drives a big fire engine.",
        "senKo": "그는 대형 소방차를 운전합니다.",
        "def": ""
      },
      {
        "id": 13,
        "en": "flight",
        "ko": "비행, 항공편",
        "senEn": "Your flight leaves from Gate 28 now.",
        "senKo": "당신의 항공편은 지금 28번 게이트에서 출발합니다.",
        "def": ""
      },
      {
        "id": 14,
        "en": "go straight",
        "ko": "직진하다",
        "senEn": "Go straight and cross the street.",
        "senKo": "똑바로 가서 교차로를 건너세요.",
        "def": ""
      },
      {
        "id": 15,
        "en": "greenway",
        "ko": "자전거 전용도로",
        "senEn": "There is a greenway for bikes beside the river.",
        "senKo": "강가에 자전거 전용 도로가 있어요.",
        "def": ""
      },
      {
        "id": 16,
        "en": "helicopter",
        "ko": "헬리콥터",
        "senEn": "I like making model helicopters.",
        "senKo": "나는 모형 헬리콥터 만드는 것을 좋아합니다.",
        "def": ""
      },
      {
        "id": 17,
        "en": "highway",
        "ko": "고속도로",
        "senEn": "We were driving along the highway.",
        "senKo": "우리는 고속도로를 따라서 운전했다.",
        "def": ""
      },
      {
        "id": 18,
        "en": "intersection",
        "ko": "교차로",
        "senEn": "They placed traffic lights at all intersections.",
        "senKo": "그들은 모든 교차로에 신호등을 설치했다.",
        "def": ""
      },
      {
        "id": 19,
        "en": "lorry",
        "ko": "대형트럭(화물차)",
        "senEn": "A lorry dropped its load on the motorway.",
        "senKo": "화물차가 고속도로에서 짐을 떨어뜨렸어요.",
        "def": ""
      },
      {
        "id": 20,
        "en": "map",
        "ko": "지도",
        "senEn": "I like my globe with a world map.",
        "senKo": "나는 세계 지도가 있는 지구본을 좋아합니다.",
        "def": ""
      },
      {
        "id": 21,
        "en": "motorcycle",
        "ko": "오토바이",
        "senEn": "He wrote a book about a motorcycle.",
        "senKo": "그는 오토바이에 대한 책을 썼어요.",
        "def": ""
      },
      {
        "id": 22,
        "en": "no parking",
        "ko": "주차금지",
        "senEn": "The no-parking zone opens from 9 a.m. to 9 p.m.",
        "senKo": "주차금지 구역은 오전 9시부터 오후 9시까지입니다.",
        "def": ""
      },
      {
        "id": 23,
        "en": "one way",
        "ko": "일방통행, 편도",
        "senEn": "It is dangerous to go on a one-way street.",
        "senKo": "일방통행로로 가는 것은 위험합니다.",
        "def": ""
      },
      {
        "id": 24,
        "en": "opposite",
        "ko": "반대편 (길 건너편)",
        "senEn": "The old palace stands opposite to the City Hall.",
        "senKo": "고궁은 시청 맞은 편에 있어요.",
        "def": ""
      },
      {
        "id": 25,
        "en": "overpass",
        "ko": "육교",
        "senEn": "You can cross the railway through the overpass.",
        "senKo": "육교를 통해서 철로를 건널 수 있어요.",
        "def": ""
      },
      {
        "id": 26,
        "en": "passenger",
        "ko": "승객 (여행객)",
        "senEn": "We will help our passengers stay safe.",
        "senKo": "우리는 승객이 안전하게 지낼 수 있도록 도와드리겠습니다.",
        "def": ""
      },
      {
        "id": 27,
        "en": "patrol (car)",
        "ko": "경찰차",
        "senEn": "I want to drive a patrol car.",
        "senKo": "경찰차를 운전하고 싶어요.",
        "def": ""
      },
      {
        "id": 28,
        "en": "railroad",
        "ko": "철도",
        "senEn": "The railroad passed through a long desert.",
        "senKo": "그 철도는 긴 사막을 통과했습니다.",
        "def": ""
      },
      {
        "id": 29,
        "en": "runway",
        "ko": "활주로",
        "senEn": "The aircraft takes off or lands over the runway.",
        "senKo": "항공기는 활주로에서 이륙하거나 착륙합니다.",
        "def": ""
      },
      {
        "id": 30,
        "en": "sailboat",
        "ko": "범선",
        "senEn": "A sailboat moves through the water.",
        "senKo": "범선이 물을 가르며 움직입니다.",
        "def": ""
      },
      {
        "id": 31,
        "en": "scooter",
        "ko": "스쿠터",
        "senEn": "I like to ride my scooter.",
        "senKo": "나는 스쿠터 타는 것을 좋아합니다.",
        "def": ""
      },
      {
        "id": 32,
        "en": "ship",
        "ko": "배",
        "senEn": "I went to the island by ship.",
        "senKo": "나는 그 섬에 배를 타고 갔어요.",
        "def": ""
      },
      {
        "id": 33,
        "en": "sidewalk",
        "ko": "인도, 보도",
        "senEn": "I found the bag on the sidewalk.",
        "senKo": "보도에서 가방을 찾았어요.",
        "def": ""
      },
      {
        "id": 34,
        "en": "submarine",
        "ko": "잠수함",
        "senEn": "Have you ever been in a submarine?",
        "senKo": "잠수함에 타 본 적이 있어요?",
        "def": ""
      },
      {
        "id": 35,
        "en": "subway",
        "ko": "지하철",
        "senEn": "I go to school by subway.",
        "senKo": "나는 지하철을 타고 학교에 갑니다.",
        "def": ""
      },
      {
        "id": 36,
        "en": "tollgate",
        "ko": "톨게이트",
        "senEn": "She works at a tollgate as a cashier.",
        "senKo": "그녀는 톨게이트에서 계산원으로 일합니다.",
        "def": ""
      },
      {
        "id": 37,
        "en": "trailer",
        "ko": "트레일러",
        "senEn": "We need a trailer for camping trips.",
        "senKo": "캠핑 여행을 하기 위한 트레일러가 필요합니다.",
        "def": ""
      },
      {
        "id": 38,
        "en": "tram",
        "ko": "전차",
        "senEn": "We can go around the city by tram.",
        "senKo": "우리는 전차로 도시를 돌아다닐 수 있어요.",
        "def": ""
      },
      {
        "id": 39,
        "en": "truck",
        "ko": "트럭",
        "senEn": "My hobby is collecting toy trucks.",
        "senKo": "제 취미는 장난감 트럭을 모으는 거예요.",
        "def": ""
      },
      {
        "id": 40,
        "en": "turn left",
        "ko": "좌회전",
        "senEn": "Turn left at the crossroad.",
        "senKo": "사거리에서 좌회전 하세요.",
        "def": ""
      },
      {
        "id": 41,
        "en": "turn right",
        "ko": "우회전",
        "senEn": "Turn right at the next corner.",
        "senKo": "다음 모퉁이에서 우회전 하세요.",
        "def": ""
      },
      {
        "id": 42,
        "en": "van",
        "ko": "밴",
        "senEn": "The shuttle van leaves every 10 minutes.",
        "senKo": "순환용 밴은 매 10분에 출발합니다.",
        "def": ""
      }
    ]
  },
  {
    "id": 7,
    "title": "condition & situation",
    "words": [
      {
        "id": 1,
        "en": "Word (Text)",
        "ko": "Interpretation01_Korean",
        "senEn": "Sentence 1 (Text)",
        "senKo": "Interpretation01_Korean",
        "def": ""
      },
      {
        "id": 2,
        "en": "absent",
        "ko": "결석한",
        "senEn": "Michael was absent from school yesterday.",
        "senKo": "Michael은 어제 결석했어요.",
        "def": ""
      },
      {
        "id": 3,
        "en": "present",
        "ko": "출석한",
        "senEn": "We are present for the meeting every Monday.",
        "senKo": "우리는 매주 월요일 회의에 참석합니다.",
        "def": ""
      },
      {
        "id": 4,
        "en": "accept",
        "ko": "받아들이다",
        "senEn": "Please accept my apology.",
        "senKo": "내 사과를 받아 주세요. (사과드립니다. )",
        "def": ""
      },
      {
        "id": 5,
        "en": "refuse",
        "ko": "거절하다",
        "senEn": "Please don't refuse my request.",
        "senKo": "나의 제안을 거절하지 말아 주세요.",
        "def": ""
      },
      {
        "id": 6,
        "en": "agree",
        "ko": "찬성하다",
        "senEn": "I agree with you on this issue.",
        "senKo": "이 문제에 대해서는 당신에게 동의합니다.",
        "def": ""
      },
      {
        "id": 7,
        "en": "disagree",
        "ko": "반대하다",
        "senEn": "They disagree with what you say.",
        "senKo": "그들은 당신이 말한 것을 반대합니다.",
        "def": ""
      },
      {
        "id": 8,
        "en": "bad",
        "ko": "나쁜",
        "senEn": "It's bad news for me.",
        "senKo": "그것은 내게 나쁜 뉴스야.",
        "def": ""
      },
      {
        "id": 9,
        "en": "good",
        "ko": "좋은",
        "senEn": "She is a good teacher.",
        "senKo": "그녀는 좋은 선생님이예요.",
        "def": ""
      },
      {
        "id": 10,
        "en": "before",
        "ko": "~ 전에",
        "senEn": "You should wash your hands before meals.",
        "senKo": "식사 전에 손을 씻어야 합니다.",
        "def": ""
      },
      {
        "id": 11,
        "en": "after",
        "ko": "~ 후에",
        "senEn": "Let's go for a walk after dinner.",
        "senKo": "저녁 식사 후에 산책 가자.",
        "def": ""
      },
      {
        "id": 12,
        "en": "begin",
        "ko": "시작하다",
        "senEn": "What time does the festival begin?",
        "senKo": "축제는 몇시에 시작하나요?",
        "def": ""
      },
      {
        "id": 13,
        "en": "end",
        "ko": "마치다",
        "senEn": "What time does the festival end?",
        "senKo": "축제는 몇시에 끝나나요?",
        "def": ""
      },
      {
        "id": 14,
        "en": "below",
        "ko": "아래에",
        "senEn": "The sun sank slowly below the horizon.",
        "senKo": "태양이 수평선 아래로 서서히 가라앉았다.",
        "def": ""
      },
      {
        "id": 15,
        "en": "above",
        "ko": "위에",
        "senEn": "The sun rose slowly above the mountain.",
        "senKo": "태양이 산 위로 천천히 떠올랐다.",
        "def": ""
      },
      {
        "id": 16,
        "en": "best",
        "ko": "최고의",
        "senEn": "Joseph is my best friend.",
        "senKo": "Joseph은 나의 가장 친한 친구예요.",
        "def": ""
      },
      {
        "id": 17,
        "en": "worst",
        "ko": "최악의",
        "senEn": "You are my worst enemy.",
        "senKo": "당신은 최악의 적이야.",
        "def": ""
      },
      {
        "id": 18,
        "en": "big",
        "ko": "크다",
        "senEn": "The animal is big and slow.",
        "senKo": "그 동물은 크고 느립니다.",
        "def": ""
      },
      {
        "id": 19,
        "en": "small",
        "ko": "작다",
        "senEn": "The animal is small and quick.",
        "senKo": "그 동물은 작고 빠릅니다.",
        "def": ""
      },
      {
        "id": 20,
        "en": "borrow",
        "ko": "빌리다",
        "senEn": "You can borrow books at the library.",
        "senKo": "도서관에서 책을 빌릴 수 있어요.",
        "def": ""
      },
      {
        "id": 21,
        "en": "lend",
        "ko": "빌려주다",
        "senEn": "I often lend books to my friends.",
        "senKo": "나는 종종 친구들에게 책을 빌려준다.",
        "def": ""
      },
      {
        "id": 22,
        "en": "bottom",
        "ko": "바닥",
        "senEn": "I learned English from the bottom up.",
        "senKo": "나는 기초부터 영어를 배웠다.",
        "def": ""
      },
      {
        "id": 23,
        "en": "top",
        "ko": "꼭대기",
        "senEn": "I teach English to the student using the top-down style.",
        "senKo": "나는 하향식 방식으로 학생에게 영어를 가르친다.",
        "def": ""
      },
      {
        "id": 24,
        "en": "brave",
        "ko": "용감한",
        "senEn": "The lion wants to have a brave heart.",
        "senKo": "사자는 용감한 마음을 갖고 싶어합니다.",
        "def": ""
      },
      {
        "id": 25,
        "en": "cowardly",
        "ko": "비겁한",
        "senEn": "The lion thinks he is very cowardly.",
        "senKo": "사자는 자신이 몹시 비겁하다고 생각합니다.",
        "def": ""
      },
      {
        "id": 26,
        "en": "broad",
        "ko": "넓은",
        "senEn": "We have a broad square in front of the City Hall.",
        "senKo": "시청 앞에 넓은 광장이 있어요.",
        "def": ""
      },
      {
        "id": 27,
        "en": "narrow",
        "ko": "좁은",
        "senEn": "Our apartment corridor is too narrow.",
        "senKo": "아파트 복도가 너무 좁아요.",
        "def": ""
      },
      {
        "id": 28,
        "en": "build",
        "ko": "짓다, 세우다",
        "senEn": "I want to build my house by the river.",
        "senKo": "나는 강가에 집을 짓고 싶어요.",
        "def": ""
      },
      {
        "id": 29,
        "en": "destroy",
        "ko": "파괴하다",
        "senEn": "They will destroy the old cabin.",
        "senKo": "그들은 그 낡은 오두막을 부술거예요.",
        "def": ""
      },
      {
        "id": 30,
        "en": "cheap",
        "ko": "값이 싼",
        "senEn": "The restaurant is cheap and famous.",
        "senKo": "그 식당은 싸고 유명해요.",
        "def": ""
      },
      {
        "id": 31,
        "en": "expensive",
        "ko": "값이 비싼",
        "senEn": "The restaurant is very expensive.",
        "senKo": "그 식당은 너무 비싸요.",
        "def": ""
      },
      {
        "id": 32,
        "en": "clever",
        "ko": "영리한",
        "senEn": "My little sister is very clever.",
        "senKo": "내 동생은 참 영리해요.",
        "def": ""
      },
      {
        "id": 33,
        "en": "stupid",
        "ko": "미련한",
        "senEn": "I don't think my brother is stupid.",
        "senKo": "나는 내 동생이 미련하다고 생각하지 않아요.",
        "def": ""
      },
      {
        "id": 34,
        "en": "near",
        "ko": "가까운",
        "senEn": "Is there a Chinese restaurant near here?",
        "senKo": "이 근처에 중국 음식점이 있나요?",
        "def": ""
      },
      {
        "id": 35,
        "en": "far",
        "ko": "먼",
        "senEn": "Is the subway station far away?",
        "senKo": "지하철 역이 먼가요?",
        "def": ""
      },
      {
        "id": 36,
        "en": "closed",
        "ko": "닫힌",
        "senEn": "The restaurant is always closed on Sunday.",
        "senKo": "그 식당은 일요일에는 항상 문을 닫아요.",
        "def": ""
      },
      {
        "id": 37,
        "en": "open",
        "ko": "열린",
        "senEn": "The restaurant is always open at nine in the morning.",
        "senKo": "그 식당은 아침 9시에 늘 문을 열어요.",
        "def": ""
      },
      {
        "id": 38,
        "en": "answer",
        "ko": "대답",
        "senEn": "The teacher told me the answers to the test.",
        "senKo": "선생님은 시험에 대한 답을 알려주셨어요.",
        "def": ""
      },
      {
        "id": 39,
        "en": "question",
        "ko": "질문",
        "senEn": "The teacher asked me some difficult questions.",
        "senKo": "선생님은 어려운 질문을 했어요.",
        "def": ""
      },
      {
        "id": 40,
        "en": "danger",
        "ko": "위험",
        "senEn": "Driving too fast puts people in danger.",
        "senKo": "너무 빨리 운전하면 사람들이 위험에 처하게 됩니다.",
        "def": ""
      },
      {
        "id": 41,
        "en": "safety",
        "ko": "안전",
        "senEn": "For your safety, it is best not to speed.",
        "senKo": "안전을 위해 속도를 내지 않는 것이 가장 좋습니다.",
        "def": ""
      },
      {
        "id": 42,
        "en": "dark",
        "ko": "어두운",
        "senEn": "I don't like the dark side.",
        "senKo": "나는 어두운 면을 좋아하지 않아요.",
        "def": ""
      }
    ]
  }
];
