export const updatedAt = "2026.09.07";
export const notionUrl = "https://app.notion.com/p/3b5062d2c59e8000aa44c5b8f15ace62";
export const booking = (name: string, checkin: string, checkout: string) =>
  "https://www.booking.com/searchresults.ko.html?" + new URLSearchParams({ss: name, checkin, checkout, group_adults: "2", no_rooms: "1", group_children: "0", selected_currency: "KRW"}).toString();

export const stops = [
  {id:"west", name:"짱구 · 스미냑", en:"CANGGU / SEMINYAK", checkin:"2026-10-21", checkout:"2026-10-25", dates:"10.21 — 10.25", nights:4, full:"온전한 3일", note:"서핑, 브런치, 비치클럽. 한 숙소에서 4박.", accent:"west"},
  {id:"gili", name:"길리 트라왕안", en:"GILI TRAWANGAN", checkin:"2026-10-25", checkout:"2026-10-29", dates:"10.25 — 10.29", nights:4, full:"온전한 3일", note:"거북이 스노클링과 자전거, 서쪽 해변의 노을.", accent:"gili"},
  {id:"ubud", name:"우붓", en:"UBUD", checkin:"2026-10-29", checkout:"2026-11-01", dates:"10.29 — 11.01", nights:3, full:"온전한 2일", note:"몽키포레스트, 논 전망, 하루 한 번의 마사지.", accent:"ubud"},
  {id:"south", name:"울루와뚜", en:"ULUWATU", checkin:"2026-11-01", checkout:"2026-11-03", dates:"11.01 — 11.03", nights:2, full:"1일 + 귀국일 낮", note:"절벽과 리조트. 11/3 저녁 공항으로.", accent:"south"},
];

export const itinerary = [
  {date:"10.21", weekday:"수", region:"west", kind:"도착", title:"밤 도착, 숙소로 바로", am:"12:40 인천 T1 도착 · 15:40 7C5303 출발", pm:"21:45 발리 도착 · 입국과 수하물 수령", night:"예약 차량으로 짱구·스미냑 숙소 이동", note:"입국 1–2시간 + 차량 45–90분 계획. 자정 이후 체크인 가능성이 있어 10/21부터 예약하고 늦은 도착을 알리기."},
  {date:"10.22", weekday:"목", region:"west", kind:"FULL", title:"늦은 브런치와 첫 선셋", am:"늦잠 · Sensorium 브런치", pm:"바투볼롱·에코비치 산책 · 카페", night:"숙소 수영장 또는 가까운 해변 저녁", note:"도착 다음 날은 회복 위주. Sensorium 대기 시 인근 카페로."},
  {date:"10.23", weekday:"금", region:"west", kind:"FULL", title:"서핑하고, 핀즈에서 쉬기", am:"강사와 초보 서핑 · 파도에 맞춰 시간 확정", pm:"샤워·점심 후 FINNS Beach Club", night:"핀즈 선셋 · 숙소로 복귀", note:"서핑은 강습 해변과 장비·보험 포함 여부 확인. 핀즈 무료 입장과 유료 데이베드 조건은 다름."},
  {date:"10.24", weekday:"토", region:"west", kind:"FULL", title:"스미냑을 걷는 하루", am:"스미냑 숍·카페 · 데우스 쇼핑 후보", pm:"마사지 · 수영 · 여행용 소액 현금 준비", night:"KU DE TA 선셋 · 길리행 짐 정리", note:"짱구↔스미냑은 편도 약 30–90분 계획. 다음 날 출항 때문에 밤 일정을 짧게."},
  {date:"10.25", weekday:"일", region:"gili", kind:"이동", title:"길리 트라왕안으로", am:"예약 픽업 → 세랑안 항구 · 출항 60분 전 도착", pm:"오전 패스트보트 · 길리 체크인", night:"동쪽 마을 산책 · 레지나 피제리아", note:"남부 숙소는 세랑안 출항 우선 비교. 실제 시간은 바우처 기준, 문에서 문까지 약 5–7시간을 확보."},
  {date:"10.26", weekday:"월", region:"gili", kind:"FULL", title:"거북이를 만나는 오전", am:"08:00 전후 3섬 스노클링 · 주나투어 후보", pm:"점심 · 수영장 · 낮잠", night:"서쪽 해변 선셋 · Pacifica 후보", note:"주나투어 집결지는 예약 전에 확인. 가이드·구명조끼 포함, 거북이와 산호를 만지지 않기."},
  {date:"10.27", weekday:"화", region:"gili", kind:"FULL", title:"자전거로 섬 한 바퀴", am:"자전거 대여 · 동북쪽 해변 산책", pm:"키라키라 올데이 · 숙소 휴식", night:"CLOUD9 또는 숙소 해변 바", note:"모래 구간은 끌고 걷기. 북동쪽 거북이 포인트도 조류와 보트 통로 확인 후 입수."},
  {date:"10.28", weekday:"수", region:"gili", kind:"FULL", title:"빈칸으로 남긴 섬의 하루", am:"날씨가 좋으면 추가 스노클링 또는 늦잠", pm:"마사지 · 한식 또는 로컬 식사", night:"마지막 노을 · 다음 날 보트 재확인", note:"10/26 바다가 좋지 않았다면 오늘로 투어를 옮길 수 있도록 여유를 남김."},
  {date:"10.29", weekday:"목", region:"ubud", kind:"이동", title:"길리에서 우붓으로", am:"오전 보트 → 파당바이 항구", pm:"예약 차량으로 우붓 · 약 1.5–2.5시간", night:"체크인 · 가까운 식당에서 저녁", note:"트라왕안 출발편은 방살 출항 허가 절차·기항 가능. 전체 5–7시간 계획, 관광 예약은 비우기."},
  {date:"10.30", weekday:"금", region:"ubud", kind:"FULL", title:"논 전망과 긴 휴식", am:"크레타야 우붓 · 논 전망과 수영", pm:"숙소 휴식 · 푸트리·그린타라·옌즈 중 스파 한 곳", night:"피손 우붓 · 투키즈 코코넛 디저트", note:"크레타야를 메인으로 뜨갈랄랑과 묶기. 별도 동부 투어까지 추가하지 않기."},
  {date:"10.31", weekday:"토", region:"ubud", kind:"FULL", title:"몽키포레스트와 시내 산책", am:"09:00 몽키포레스트", pm:"우붓 시장 · 라탄백·작은 기념품 · 카페", night:"와룽 부 루스 또는 가라시 · 조용한 저녁", note:"사라스와티 의식일. 사원·소규모 업장 운영과 차량 동선 확인. 바투르산은 이 오전 일정을 대체할 때만."},
  {date:"11.01", weekday:"일", region:"south", kind:"이동", title:"우붓에서 남쪽 절벽으로", am:"조식 · 10:30 전후 체크아웃", pm:"차량 약 2.5–4시간 · 울루와뚜 체크인", night:"Mana Uluwatu 또는 리조트 디너", note:"체크인 후 수영과 휴식. 이날은 먼 해변 투어를 예약하지 않기."},
  {date:"11.02", weekday:"월", region:"south", kind:"FULL", title:"바다와 케착 공연", am:"Sundays Beach Club 또는 파당파당 해변", pm:"14:30 전후 휴식 · 16:00 사원 이동", night:"18:00 케착 공연 후보 · 가까운 곳에서 저녁", note:"Sundays는 오전 반나절로. 사원·공연 티켓과 날씨별 운영을 따로 확인."},
  {date:"11.03", weekday:"화", region:"south", kind:"귀국", title:"마지막 수영, 23:05 비행", am:"조식 · 수영 · 레이트 체크아웃 또는 데이유즈", pm:"마사지 · 16:30–17:00 이른 저녁", night:"18:00–18:30 차량 출발 → 20:00 DPS → 23:05 7C5304", note:"인천 도착은 11/4(수) 07:10. 마지막 날은 17시쯤 마무리하고 공항 이동 여유 확보."},
];

export const stays = [
  {region:"west", name:"KOA D’Surfer Hotel", tag:"노션 후보 · 실속", note:"베라와 거점. 루프톱 수영장이 있고 핀즈 방문일과 동선이 맞음.", price:"노션 기록: 4박 21만원", caveat:"과거 메모 가격 · 현재 견적 아님. 야간 체크인 확인.", official:"https://koasurferhotel.com/", query:"Koa D Surfer Hotel Canggu"},
  {region:"west", name:"Modern Coliving", tag:"노션 후보 · 예산", note:"노션에 저장한 짱구 에어비앤비. 전용 욕실·정확한 위치·야간 입실 방식부터 확인.", price:"노션 기록: 4박 14.3만원", caveat:"청소비·서비스 수수료 포함 총액 재확인.", official:"https://www.airbnb.co.kr/rooms/1672873533988260003?check_in=2026-10-21&check_out=2026-10-25&adults=2", query:""},
  {region:"west", name:"SB313", tag:"노션 후보 · 비교", note:"노션에 저장한 두 번째 짱구 에어비앤비. 방음과 공사 후기를 우선 비교.", price:"노션 기록: 4박 26만원", caveat:"현재 재고·총액·입실 안내 확인 필요.", official:"https://www.airbnb.co.kr/rooms/1579393571258553885?check_in=2026-10-21&check_out=2026-10-25&adults=2", query:""},
  {region:"gili", name:"Ponte Villas", tag:"노션 후보 · 우선 비교", note:"노션의 ‘폰테 빌라’. 트라왕안 남쪽 거점으로 객실과 전용 풀빌라를 구분해 비교.", price:"10/25–29 요금 확인", caveat:"객실 유형마다 수영장 조건이 다름.", official:"https://pontevillas.com/", query:"Ponte Villas Gili Trawangan"},
  {region:"gili", name:"Pearl Sunset Resort", tag:"선셋 · 성인 전용", note:"서쪽 선셋 지역. 노션의 CLOUD9 방문과 묶기 좋은 휴식형 숙소.", price:"10/25–29 요금 확인", caveat:"항구에서 숙소까지 짐 이동과 자전거 조건 확인.", official:"https://www.pearlsunsetresort.com/Home", query:"Pearl Sunset Resort Gili Trawangan"},
  {region:"gili", name:"Cocana Resort", tag:"리조트 · 여유형", note:"Pacifica와 선셋 클럽이 있는 리조트. 라군 객실과 전용 풀빌라 중 선택.", price:"10/25–29 요금 확인", caveat:"비치바만 방문하는 일정도 가능.", official:"https://cocanaresorts.com/", query:"Cocana Resort Gili Trawangan"},
  {region:"ubud", name:"Umah Gatra Ubud", tag:"중심부 · 실속", note:"시내 식사·쇼핑·스파를 자주 할 때 비교할 후보. 새 날짜로 다시 검색.", price:"10/29–11/1 요금 확인", caveat:"이전 4박 가격은 적용하지 않음.", official:"https://www.booking.com/hotel/id/umah-gatra-ubud.ko.html", query:"Umah Gatra Ubud"},
  {region:"ubud", name:"Hidden Point Villa", tag:"전용 풀 후보", note:"시내 도보 접근성보다 숙소에서 보내는 시간을 우선할 때.", price:"10/29–11/1 요금 확인", caveat:"중심부 이동 방식·풀빌라 유형 확인.", official:"https://www.booking.com/hotel/id/hidden-point-villa.ko.html", query:"Hidden Point Villa Ubud"},
  {region:"south", name:"PinkCoco Uluwatu", tag:"성인 전용 · 해변 접근", note:"파당파당 해변 근처. 작은 부티크 호텔과 도보 식당 접근을 선호할 때.", price:"11/1–3 요금 확인", caveat:"11/3 레이트 체크아웃·짐 보관 문의.", official:"https://www.pinkhotels.com/pinkcoco-uluwatu/", query:"PinkCoco Uluwatu"},
  {region:"south", name:"Renaissance Uluwatu", tag:"리조트 · 마지막 2박", note:"수영장과 휴식 중심 후보. 노션의 아야나와 비교하되 울루와뚜 숙박 구간은 유지.", price:"11/1–3 요금 확인", caveat:"해변 접근·조식 포함·데이유즈 비용 확인.", official:"https://www.booking.com/hotel/id/renaissance-bali-uluwatu-resort-spa.ko.html", query:"Renaissance Bali Uluwatu Resort Spa"},
];

export const places = [
  {region:"west",name:"Sensorium",category:"브런치",status:"공식 메뉴 확인",note:"노션 우선 후보. 브런치 라멘·미소 팬케이크, 10/22 느린 아침에.",href:"https://www.sensoriumbali.co.id/menu"},
  {region:"west",name:"FINNS Beach Club",category:"비치클럽",status:"11:00–24:00",note:"성인 전용, 무료 입장 구역 운영. 데이베드 최소 주문은 별도. 10/23 오후.",href:"https://finnsbeachclub.com/"},
  {region:"west",name:"KU DE TA",category:"선셋 · 식사",status:"공식 예약 확인",note:"10/24 스미냑 선셋 후보. 좌석 종류·이벤트별 예약 조건 확인.",href:"https://kudeta.com/"},
  {region:"west",name:"초보 서핑",category:"액티비티",status:"노션 후보",note:"10/23 오전, 강사와 조수·파도에 맞춰 장소 결정. 노션의 핀즈 링크는 서핑 강습 예약 링크가 아님.",href:"https://www.google.com/maps/search/?api=1&query=surf+lessons+Canggu"},
  {region:"west",name:"Laci",category:"식사",status:"지점 확인 필요",note:"노션 후기 후보로 유지. 정확한 상호·위치를 확인한 뒤 식사에 추가.",href:"https://blog.naver.com/andy317/223420531914"},
  {region:"west",name:"데우스 · 스미냑 쇼핑",category:"쇼핑",status:"노션 후보",note:"티셔츠·작은 기념품. 10/24에 묶고 꾸따 쇼핑몰은 비 오는 날 대안.",href:"https://www.google.com/maps/search/?api=1&query=Deus+Ex+Machina+Canggu"},
  {region:"gili",name:"3섬 스노클링 · 주나투어",category:"액티비티",status:"노션 후보 · 미예약",note:"10/26 오전 우선. 출발섬·집결지·보트·가이드·구명조끼·사진 포함을 업체에 확인.",href:"https://blog.naver.com/cat_veling/224122697812"},
  {region:"gili",name:"Regina Pizzeria",category:"피자",status:"노션 후보",note:"길리 트라왕안 식당. 10/25 도착 후 마을 산책과 함께.",href:"https://maps.app.goo.gl/5CKBb34o4TzGaa4TA"},
  {region:"gili",name:"Pacifica · Cocana",category:"선셋 · 식사",status:"공식 운영 확인",note:"코카나 리조트의 식사 후보. 비치클럽은 현재 Cocana Sunset Club 명칭도 사용.",href:"https://cocanaresorts.com/location/pacifica/"},
  {region:"gili",name:"CLOUD9",category:"해변 바",status:"노션 후보",note:"펄 선셋 쪽 저녁 후보. 외부 방문·좌석·영업시간은 방문 전 확인.",href:"https://maps.app.goo.gl/5Tynbt7KMHvREMmo8"},
  {region:"gili",name:"키라키라 올데이",category:"카페",status:"노션 후보",note:"말차라떼 메모를 반영. 10/27 자전거 산책 도중 쉬어가기.",href:"https://maps.app.goo.gl/HN2eGUZbzsZr9dvWA"},
  {region:"gili",name:"파인트리 · 한식",category:"식사",status:"노션 후보",note:"순두부찌개가 생각날 때. 10/28 자유일의 선택지.",href:"https://maps.app.goo.gl/FpXSmMVQsS4WczBs9"},
  {region:"gili",name:"Turtle Point",category:"바다",status:"당일 조류 확인",note:"노션의 이른 오전 추천은 고정 안전시간이 아님. 현지 가이드와 조류·보트 동선을 확인.",href:"https://maps.app.goo.gl/RVNxfSmaLH1Rw8NX9"},
  {region:"ubud",name:"Cretya Ubud",category:"논 전망 · 수영",status:"07:00–21:00 · 18+",note:"공식 FDC Rp220k/인, 첫 음료 포함. 데이베드·이벤트 별도 조건. 10/30 오전.",href:"https://cretyaubud.com/en/cretya-ubud"},
  {region:"ubud",name:"Monkey Forest",category:"관광",status:"09:00–18:00 · Rp130k",note:"최종 입장 17:00. 10/31 09:00 방문, 음식과 소지품은 가방에.",href:"https://monkeyforestubud.com/visit/"},
  {region:"ubud",name:"Pison Ubud",category:"식사 · 카페",status:"07:00–23:00",note:"노션 우선 후보. 하노만 거리의 논 전망 식당, 10/30 저녁에.",href:"https://pisonindonesia.com/pison-ubud/"},
  {region:"ubud",name:"푸트리 스파",category:"마사지",status:"노션 후보 · 지점 확인",note:"그린타라·옌즈와 함께 비교해 하루 한 곳만. 숙소와 가까운 지점 우선.",href:"https://maps.app.goo.gl/CjN1e9gUPUNjgiYZ9"},
  {region:"ubud",name:"투키즈 코코넛",category:"디저트",status:"노션 후보",note:"시내 산책 뒤 코코넛 아이스크림. 10/30 또는 10/31에.",href:"https://maps.app.goo.gl/AdK7FnMt11j4cDaU9"},
  {region:"ubud",name:"와룽 부 루스",category:"로컬 식사",status:"노션 후보",note:"폭립 메모를 반영. 가라시·트로피칼 뷰도 노션에서 비교.",href:"https://maps.app.goo.gl/AT3jyH4U2RYWbDDf6"},
  {region:"south",name:"Sundays Beach Club",category:"해변",status:"07:30–22:00 · Rp800k",note:"Rp500k 식음 크레딧 포함, 일반 입장은 선착순. 11/2 오전만 머물러 케착과 연결.",href:"https://www.sundaysbeachclub.com/daily-beach-pass/"},
  {region:"south",name:"Uluwatu Temple · Kecak",category:"사원 · 공연",status:"18:00 회차 후보",note:"11/2 16:00 전후 사원 도착. 공연과 사원 입장은 별도, 예약 회차·요금 재확인.",href:"https://uluwatutemple.com/"},
  {region:"south",name:"Mana Uluwatu",category:"식사",status:"예약 확인",note:"11/1 체크인 후 저녁 후보. 선셋 좌석과 이동시간 확인.",href:"https://uluwatusurfvillas.com/restaurant/"},
  {region:"south",name:"키식 · 혼젠",category:"짐바란 식사",status:"노션 후보",note:"아야나 내 식사 후보. 11/3 공항 가는 길에 넣는다면 이른 저녁 운영과 예약 시간을 먼저 확인.",href:"https://maps.app.goo.gl/zRFxR6LmtrSnHbLS8"},
];

export const transfers = [
  {date:"10.21",route:"DPS → 짱구·스미냑",time:"입국 후 차량 약 45–90분",note:"21:45 착륙. 10/21 객실 예약을 유지하고 자정 이후 도착 가능성을 숙소에 전달.",href:"https://www.jejuair.net/en/prepare/flight/viewScheduleInfo.do"},
  {date:"10.25",route:"남부 → 세랑안 → 길리 T",time:"문에서 문까지 약 5–7시간",note:"남부는 세랑안 출항 우선 비교. 파당바이 출항은 육로가 길지만 항해가 짧을 수 있어 총 이동·멀미를 함께 비교.",href:"https://bluewater-express.com/schedules/"},
  {date:"10.29",route:"길리 T → 파당바이 → 우붓",time:"문에서 문까지 약 5–7시간",note:"복귀는 우붓으로 가기 좋은 파당바이 하선. 방살 기항·항만 허가로 늦어질 수 있어 저녁 예약을 비우기.",href:"https://bluewater-express.com/schedules/"},
  {date:"11.01",route:"우붓 → 울루와뚜",time:"차량 약 2.5–4시간",note:"10:30 전후 출발을 계획. 중간 관광을 많이 넣기보다 체크인 후 휴식.",href:"https://www.google.com/maps/dir/Ubud/Uluwatu/"},
  {date:"11.03",route:"울루와뚜 → DPS",time:"18:00–18:30 출발 · 20:00 도착 목표",note:"23:05 7C5304. 짐 보관·샤워·데이유즈와 공항 차량을 함께 예약.",href:"https://www.jejuair.net/en/prepare/flight/viewScheduleInfo.do"},
];

export const preparation = [
  {id:"passport",title:"여권과 항공권 확인",detail:"여권 유효기간 6개월 이상 · 영문명 일치 · 예약 원본은 노션",when:"지금"},
  {id:"stay",title:"4구간 숙소 확정",detail:"10/21–25 · 10/25–29 · 10/29–11/1 · 11/1–3",when:"지금"},
  {id:"late-arrival",title:"첫날 야간 체크인 연락",detail:"10/21 예약 유지 · 10/22 새벽 도착 가능성 전달",when:"예약할 때"},
  {id:"boat",title:"길리 보트 두 구간 예약",detail:"10/25 길리 T행 · 10/29 파당바이행 · 픽업과 항구세 확인",when:"미리"},
  {id:"dinner",title:"투어·스파·케착 예약",detail:"10/26 스노클링 · 10/30 스파 · 11/2 케착",when:"미리"},
  {id:"visa",title:"e-VOA B1",detail:"공식 비자 수수료 Rp500k/인 · 30일 체류",when:"출발 전"},
  {id:"levy",title:"발리 관광세",detail:"Rp150k/인 · 납부 QR 저장 · 길리 복귀 때도 보관",when:"출발 전"},
  {id:"arrival",title:"All Indonesia 작성",detail:"입국 3일 전인 10/18부터 · QR 오프라인 저장",when:"10.18부터"},
  {id:"weather",title:"보트·날씨 재확인",detail:"출항 48–72시간 전과 당일 · BMKG와 보트사 안내",when:"출항 전"},
  {id:"bags",title:"짐과 휴대폰 준비",detail:"여행자보험 · eSIM · 방수팩 · 멀미약 · WhatsApp·Gojek",when:"짐 쌀 때"},
  {id:"flight",title:"귀국 준비",detail:"11/3 23:05 출발 · 11/4 07:10 도착 · 공항차와 데이유즈",when:"귀국 전"},
];

export const sources = [
  {label:"보트 노선·체크인",url:"https://bluewater-express.com/schedules/"},
  {label:"FINNS 운영",url:"https://finnsbeachclub.com/"},
  {label:"크레타야 요금",url:"https://cretyaubud.com/en/cretya-ubud"},
  {label:"몽키포레스트 요금",url:"https://monkeyforestubud.com/visit/"},
  {label:"Sundays 패스",url:"https://www.sundaysbeachclub.com/daily-beach-pass/"},
  {label:"e-VOA 안내",url:"https://ngurahrai.imigrasi.go.id/layanan-wna/"},
  {label:"발리 관광세",url:"https://lovebali.baliprov.go.id/faq"},
  {label:"All Indonesia 안내",url:"https://bengkalis.imigrasi.go.id/2025/08/28/pemerintah-rilis-all-indonesia-integrated-passenger-declaration-system/"},
  {label:"2026 우붓 축제",url:"https://ubudwritersfestival.com/news/extraordinary-voices-and-bold-thinkers-announced-for-festival-2026"},
  {label:"2026 사라스와티",url:"https://bimashindu.kemenag.go.id/storage/files/Hari%20Libur%20Nasional%2C%20Libur%20Fakultatif%2C%20dan%20Cuti%20Bersama%20Tahun%202026.pdf"},
];

