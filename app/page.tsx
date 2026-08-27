"use client";

import { useEffect, useState, type ReactNode } from "react";

const itinerary = [
  {
    no: "01", date: "10.21", day: "수", place: "ICN → BALI", tone: "move",
    title: "섬으로 떠나는 날",
    morning: "12:40 인천공항 T1 도착 · 수하물/좌석 확인",
    afternoon: "15:40 제주항공 7C5303 출발",
    evening: "21:45 DPS 도착 · 입국 후 공항 인근 체크인",
  },
  {
    no: "02", date: "10.22", day: "목", place: "UBUD", tone: "stay",
    title: "초록 속으로",
    morning: "늦은 아침 · 10:30 전용차로 우붓 이동",
    afternoon: "숙소 체크인 · 왕궁과 시장 가볍게 산책",
    evening: "Sun Sun Warung · 컨디션 좋으면 전통무용",
  },
  {
    no: "03", date: "10.23", day: "금", place: "UBUD", tone: "stay",
    title: "걷고, 보고, 맛보기",
    morning: "06:30 캄푸한 릿지 워크 · 브런치",
    afternoon: "15:30 몽키 포레스트 · 카페 휴식",
    evening: "Hujan Locale 예약 저녁",
  },
  {
    no: "04", date: "10.24", day: "토", place: "UBUD", tone: "stay",
    title: "물과 논의 하루",
    morning: "07:30 띠르따 엠풀 · 정화 의식은 현장 선택",
    afternoon: "뜨갈랄랑 또는 축제 프로그램 1개",
    evening: "우붓 작가·독자 축제 분위기 즐기기",
  },
  {
    no: "05", date: "10.25", day: "일", place: "UBUD", tone: "slow",
    title: "아무것도 급하지 않게",
    morning: "느린 조식 · 마사지 또는 풀 타임",
    afternoon: "축제 마지막 날 세션 · 기념품 쇼핑",
    evening: "Nusantara 또는 Locavore NXT 기념일 식사",
  },
  {
    no: "06", date: "10.26", day: "월", place: "UBUD → GILI AIR", tone: "move",
    title: "바다를 건너는 날",
    morning: "이른 체크아웃 · 파당바이 출항 60분 전 도착",
    afternoon: "패스트보트 약 2–2.5시간 · 길리 에어 체크인",
    evening: "자전거 대여 · Mowie’s 선셋",
  },
  {
    no: "07", date: "10.27", day: "화", place: "GILI AIR", tone: "island",
    title: "물속에서 만나는 아침",
    morning: "08:00 프라이빗 3섬 스노클링",
    afternoon: "낮잠 · 북동쪽 해변과 Turtle Point",
    evening: "Pachamama · 별이 보이는 해변 산책",
  },
  {
    no: "08", date: "10.28", day: "수", place: "GILI AIR", tone: "island",
    title: "두 바퀴로 섬 한 바퀴",
    morning: "자전거 섬 일주 · 모래 구간은 천천히",
    afternoon: "해변 독서 · 스파 또는 체험 다이빙",
    evening: "서쪽 해변 일몰 · 가벼운 로컬 디너",
  },
  {
    no: "09", date: "10.29", day: "목", place: "GILI AIR", tone: "slow",
    title: "계획을 비워둔 날",
    morning: "바다 상태가 좋으면 해안 스노클링",
    afternoon: "카페 · 수영장 · 둘만의 자유시간",
    evening: "섬의 마지막 저녁 · 짐은 작은 가방으로 정리",
  },
  {
    no: "10", date: "10.30", day: "금", place: "GILI → SEMINYAK", tone: "move",
    title: "섬에서 서쪽 해안으로",
    morning: "08:30 전후 보트 · 체크인은 45–60분 전",
    afternoon: "파당바이 도착 · 전용차로 스미냑 2.5–4시간",
    evening: "체크인 · 페티텐겟 산책과 가벼운 저녁",
  },
  {
    no: "11", date: "10.31", day: "토", place: "CANGGU · SEMINYAK", tone: "festival",
    title: "짱구를 천천히 걷는 날",
    morning: "08:30 페레레난 브런치 · 바투볼롱 산책",
    afternoon: "숍과 카페 · 숙소로 돌아와 수영과 휴식",
    evening: "The Lawn 선셋 또는 Potato Head 저녁",
  },
  {
    no: "12", date: "11.01", day: "일", place: "SEMINYAK → ULUWATU", tone: "move",
    title: "남쪽 절벽으로",
    morning: "느린 조식 · 체크아웃 후 전용차 출발",
    afternoon: "교통 포함 1.5–3시간 블록 · 숙소 체크인",
    evening: "Mana Uluwatu 선셋 디너",
  },
  {
    no: "13", date: "11.02", day: "월", place: "ULUWATU", tone: "coast",
    title: "해변과 절벽의 하루",
    morning: "Sundays Beach Club 일찍 입장 또는 빈긴 해변",
    afternoon: "16:00 울루와뚜 사원 도착 · 소지품 단단히",
    evening: "18:00 케착 공연 · 예약 저녁",
  },
  {
    no: "14", date: "11.03", day: "화", place: "BALI → ICN", tone: "move",
    title: "마지막 수영, 그리고 집으로",
    morning: "체크아웃 · 짐 보관 또는 데이유즈",
    afternoon: "가벼운 쇼핑 · 17:00 이른 저녁",
    evening: "18:30 출발 → 20:00 DPS · 23:05 7C5304",
  },
];

const stayGroups = [
  {
    area: "공항 인근 · Tuban", dates: "10.21 — 10.22", nights: "1박", note: "21:45 착륙 뒤 이동 피로를 줄이는 잠자리",
    options: [
      { tag: "추천 · 실속", name: "Asta House", price: "₩21,129 / 1박", desc: "공항 0.6km · 세금 포함 · 더블베드", cancel: "10/20 전 무료 취소 · 검색 당시 7실", href: "https://www.booking.com/hotel/id/asta-house.ko.html?checkin=2026-10-21&checkout=2026-10-22&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW", pick: true },
      { tag: "편안한 도착", name: "The Vira Bali", price: "₩77,690 / 1박", desc: "공항 1km · 세금·조식 포함", cancel: "무료 취소 표시 · 마감 시각 결제 전 확인", href: "https://www.booking.com/hotel/id/the-vira-bali.ko.html?checkin=2026-10-21&checkout=2026-10-22&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW" },
      { tag: "최소 동선", name: "Novotel Airport", price: "약 ₩134,005 / 1박", desc: "공항 300m · 킹룸 · 터미널 연결", cancel: "검색 카드에 무료 취소 문구 없음", href: "https://www.booking.com/hotel/id/novotel-bali-ngurah-rai-airport-opening-june-2016.ko.html?checkin=2026-10-21&checkout=2026-10-22&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW" },
    ],
  },
  {
    area: "Ubud", dates: "10.22 — 10.26", nights: "4박", note: "축제 기간, 도보 접근성과 조기 예약이 핵심",
    options: [
      { tag: "추천 · 위치", name: "Umah Gatra Ubud", price: "₩150,328 / 4박", desc: "중심 350m · 세금·조식 포함 · 위치 9.7", cancel: "10/19 전 무료 취소 · 10/17 전 결제 없음", href: "https://www.booking.com/hotel/id/umah-gatra-ubud.ko.html?checkin=2026-10-22&checkout=2026-10-26&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW", pick: true },
      { tag: "가성비 풀빌라", name: "Hidden Point Villa", price: "₩422,586 / 4박", desc: "140㎡ · 1베드룸 전용 풀 · 평점 9.7", cancel: "중심 1.9km · 해당 요금 검색 당시 1실", href: "https://www.booking.com/hotel/id/hidden-point-villa.ko.html?checkin=2026-10-22&checkout=2026-10-26&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW" },
      { tag: "기념일", name: "Mayaloka Villas", price: "₩1,144,564 / 4박", desc: "100㎡ 전용 풀빌라 · 중심 0.7km", cancel: "세금·조식 포함 · 무료 취소 표시", href: "https://www.booking.com/hotel/id/mayaloka-villas-ubud.ko.html?checkin=2026-10-22&checkout=2026-10-26&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW" },
    ],
  },
  {
    area: "Gili Air", dates: "10.26 — 10.30", nights: "4박", note: "파티보다 바다와 둘만의 시간이 좋은 커플 섬",
    options: [
      { tag: "예산 친화", name: "Molah Gili Villa", price: "₩187,816 / 4박", desc: "해변 150m · 세금·조식 포함 · 평점 9.3", cancel: "무료 취소 표시 · 검색 당시 2실", href: "https://www.booking.com/hotel/id/molah-gili-villa.ko.html?checkin=2026-10-26&checkout=2026-10-30&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW" },
      { tag: "추천 · 커플", name: "Villa Saia", price: "₩704,310 / 4박", desc: "150㎡ 독채 · 프라이빗 풀 · 평점 9.6", cancel: "세금·조식 포함 · 무료 취소 표시", href: "https://www.booking.com/hotel/id/villa-saia.ko.html?checkin=2026-10-26&checkout=2026-10-30&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW", pick: true },
      { tag: "부티크", name: "The KOHO Air", price: "₩757,524 / 4박", desc: "해변 100m · 항구 도보 약 5분 · 평점 9.5", cancel: "룸온리 · 10/19 전 무료 취소", href: "https://www.booking.com/hotel/id/the-koho-air.ko.html?checkin=2026-10-26&checkout=2026-10-30&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW" },
    ],
  },
  {
    area: "Seminyak · Canggu", dates: "10.30 — 11.01", nights: "2박", note: "스미냑에 짐을 두고 짱구는 하루만 다녀오는 구성",
    options: [
      { tag: "실속 · 페티텐겟", name: "Viva Dash Hotel Seminyak", price: "실시간 요금 확인", desc: "페티텐겟 중심 · 넓은 객실 · 루프톱과 수영장", cancel: "10/30–11/1 객실·세금·무료 취소 조건 확인", href: "https://www.booking.com/hotel/id/dash-seminyak.html?checkin=2026-10-30&checkout=2026-11-01&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW" },
      { tag: "추천 · 위치", name: "Kanvaz Village Resort", price: "실시간 요금 확인", desc: "Jl. Petitenget · 위치 평점 9.5 · 수영장과 스파", cancel: "10/30–11/1 객실·세금·무료 취소 조건 확인", href: "https://www.booking.com/hotel/id/kanvaz-village-resort-seminyak.id.html?checkin=2026-10-30&checkout=2026-11-01&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW", pick: true },
      { tag: "디자인 스테이", name: "Potato Head Suites", price: "공식 요금 확인", desc: "해변 앞 · 디자인·웰니스 프로그램 · 비치클럽 연결", cancel: "공식 예약 화면에서 객실·취소 정책 재확인", href: "https://seminyak.potatohead.co/stay" },
    ],
  },
  {
    area: "Uluwatu", dates: "11.01 — 11.03", nights: "2박", note: "절벽, 해변, 공항 접근성을 모두 챙기는 마지막 장",
    options: [
      { tag: "좋은 위치", name: "La Cama Bali", price: "약 ₩145,557 / 2박", desc: "해변 450m · 위치 9.6 · 평점 9.5", cancel: "기존 3박 조회가의 2박 환산값 · 결제 전 재확인", href: "https://www.booking.com/hotel/id/la-cama-bali.ko.html?checkin=2026-11-01&checkout=2026-11-03&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW" },
      { tag: "성인 전용", name: "PinkCoco Uluwatu", price: "약 ₩302,335 / 2박", desc: "해변 350m · 킹베드 · 위치 9.5", cancel: "기존 3박 조회가의 2박 환산값 · 결제 전 재확인", href: "https://www.booking.com/hotel/id/pinkcoco-bali.ko.html?checkin=2026-11-01&checkout=2026-11-03&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW" },
      { tag: "추천 · 마지막", name: "Renaissance Uluwatu", price: "약 ₩448,202 / 2박", desc: "43㎡ 킹룸 · 조식 · 인피니티풀·스파", cancel: "기존 3박 조회가의 2박 환산값 · 결제 전 재확인", href: "https://www.booking.com/hotel/id/renaissance-bali-uluwatu-resort-spa.ko.html?checkin=2026-11-01&checkout=2026-11-03&group_adults=2&no_rooms=1&group_children=0&selected_currency=KRW", pick: true },
    ],
  },
];

const guides = [
  {
    id: "ubud", number: "A", place: "UBUD", title: "초록과 의식 사이", subtitle: "일찍 걷고, 한낮에는 쉬고, 저녁엔 좋은 식탁으로.", image: "./images/ubud-rice.jpg", imageAlt: "우붓의 초록빛 계단식 논",
    sights: [
      { name: "Sacred Monkey Forest", meta: "09:00–18:00 · Rp130k", note: "마지막 입장 17:00. 음식·안경·모자를 가방에 넣고 원숭이와 눈을 마주치지 않기.", href: "https://monkeyforestubud.com/visit/" },
      { name: "Campuhan Ridge Walk", meta: "무료 · 06:00–09:00 추천", note: "왕복 약 1시간. 그늘이 적고 비 뒤에는 미끄러워 일출 산책이 가장 편하다.", href: "https://visitbaliguide.com/ubud/campuhan-ridge-walk" },
      { name: "Tirta Empul", meta: "08:00–18:00 · 약 Rp75k", note: "입장 사롱 포함. 정화 의식용 젖는 사롱·라커·공물은 별도일 수 있다.", href: "https://tirtaempultemple.com/tirta-empul-temple-entrance-fee" },
      { name: "Ubud Traditional Dance", meta: "대부분 19:30 · 약 Rp100k", note: "요일별 작품이 다르다. 좋은 좌석은 18:45 전에 도착하고 우천 시 장소 변경 확인.", href: "https://ubud.id/event/regular-performances/" },
    ],
    food: [
      { name: "Sun Sun Warung", meta: "발리 가정식 · Rp50–150k", note: "가볍게 시작하기 좋은 나시참푸르와 사테. 11:00–22:00.", href: "https://sunsunwarung.com/" },
      { name: "Hujan Locale", meta: "모던 인도네시아 · Rp250–450k", note: "둘이 나눠 먹기 좋다. 저녁 예약 권장, 스마트 캐주얼.", href: "https://hujanlocale.com/booking/" },
      { name: "Locavore NXT", meta: "테이스팅 · 음식 Rp1.95m++", note: "여행의 한 번뿐인 기념일 식사. 출발 1–2개월 전 예약.", href: "https://locavorenxt.com/nxt/visit" },
    ],
  },
  {
    id: "gili", number: "B", place: "GILI AIR", title: "차가 없는 작은 섬", subtitle: "파티의 길리 T보다 고요하고, 길리 메노보다 식당 선택이 많은 균형점.", image: "./images/gili-water.jpg", imageAlt: "길리 제도의 맑은 바다와 모래 해변",
    sights: [
      { name: "3 Islands Snorkeling", meta: "3–4시간 · 합승 Rp150–250k/인", note: "커플은 08:00 전후 프라이빗 보트(Rp850k–1.2m/보트). 구명조끼와 가이드 포함 확인.", href: "https://visitgiliislands.com/activities/snorkeling" },
      { name: "BASK Nest", meta: "해안 접근 무료 · 수심 약 4m", note: "길리 메노 해안 약 40m. 조각을 밟거나 만지지 말고 보트·조류를 주의한다.", href: "https://underwatersculpture.com/projects/nest/" },
      { name: "Cycling the Island", meta: "Rp50–75k/일 · 1–2시간", note: "브레이크·타이어·자물쇠 확인. 깊은 모래 구간에서는 자전거를 끌어야 한다.", href: "https://visitgiliislands.com/activities/cycling" },
      { name: "Discover Scuba", meta: "4시간 · Rp1.35m/인", note: "무경험자도 가능. 건강 설문과 다이빙 후 비행 제한시간을 업체에 확인.", href: "https://www.gilidivers.com/dive-courses/try-scuba" },
    ],
    food: [
      { name: "Mowie’s", meta: "서쪽 해변 · Rp120–250k", note: "타코·포케와 선셋. 일몰 앞자리만 미리 예약하면 좋다.", href: "https://www.mowiesgiliair.com/restaurant" },
      { name: "Pachamama", meta: "건강식 · Rp100–220k", note: "비건·채식과 일반 메뉴를 함께 고를 수 있는 북동쪽의 편안한 식당.", href: "https://www.pachamamagiliair.com/about" },
      { name: "Gili T Night Market", meta: "숯불 해산물 · Rp50–150k", note: "섬 호핑 날 들를 대안. 굽기 전에 무게와 총액을 확인하고 현금 준비.", href: "https://visitgiliislands.com/activities/night-market" },
    ],
  },
  {
    id: "seminyak", number: "C", place: "SEMINYAK + CANGGU", title: "서쪽 해안의 하루", subtitle: "스미냑에 짐을 두고 짱구는 오전부터 하루만. 정체가 심해지기 전에 움직인다.",
    sights: [
      { name: "Petitenget + Seminyak Beach", meta: "개방형 해변 · 무료", note: "숙소에서 가볍게 걷기 좋은 일몰 코스. 수영은 낮에 안전 깃발과 인명구조원 구역에서만.", href: "https://www.indonesia.travel/gb/en/destination/bali-nusa-tenggara/bali/pantai-seminyak" },
      { name: "Batu Bolong + Echo Beach", meta: "오전 방문 · 무료", note: "08:30 전후 도착해 해변과 숍을 걸어본다. 오후에는 스미냑 복귀 정체를 넉넉히 계산.", href: "https://www.echobeachclub.com/" },
      { name: "The Lawn Canggu", meta: "선셋 · 예약 권장", note: "짱구에서 저녁까지 머물고 싶을 때. 좌석·최소 주문 조건은 날짜별 예약 화면에서 확인.", href: "https://www.thelawncanggu.com/home" },
      { name: "Potato Head Beach Club", meta: "워크인 가능 · 시간대별 정책", note: "스미냑으로 돌아온 뒤의 대안. 16:00–18:30 일부 구역은 리딤 가능한 커버 정책을 확인.", href: "https://seminyak.potatohead.co/feast/beach-club" },
    ],
    food: [
      { name: "Lima Bay", meta: "페레레난 · 08:00–21:00", note: "짱구 하루의 느린 브런치. 논 전망 자리는 오전에 가는 편이 편하다.", href: "https://www.limabaybali.com/" },
      { name: "Merah Putih", meta: "모던 인도네시아 · Rp400–650k", note: "페티텐겟의 데이트 저녁. 여행 일정이 확정되면 미리 예약.", href: "https://merahputihbali.com/restaurant/" },
      { name: "Echo Beach Club", meta: "해산물 · 캐주얼", note: "해변 산책 뒤 가벼운 점심 대안. 영업시간과 행사 여부는 방문일에 재확인.", href: "https://www.echobeachclub.com/" },
    ],
  },
  {
    id: "south", number: "D", place: "ULUWATU + SOUTH", title: "절벽 끝의 피날레", subtitle: "마지막 날은 바다와 공항 사이에서 여유롭게. 이동은 기사 차량이 편하다.",
    sights: [
      { name: "Uluwatu Temple + Kecak", meta: "사원 Rp60k · 공연 Rp150k", note: "16:00 입장, 늦어도 17:00 도착. 두 티켓은 별도이며 휴대폰·안경을 원숭이에게서 보호.", href: "https://uluwatutemple.id/uluwatu-kecak-dance" },
      { name: "Sundays Beach Club", meta: "07:30–22:00 · Rp800k", note: "Rp500k F&B 크레딧 포함. 만조·파고에 따라 해변 공간과 장비 운영이 달라진다.", href: "https://www.sundaysbeachclub.com/daily-beach-pass/" },
      { name: "Padang Padang Beach", meta: "오전 방문 추천", note: "계단과 조수 시간을 고려해 오전에 방문. 파도가 큰 날은 수영보다 산책 위주로.", href: "https://www.indonesia.travel/gb/en/destination/bali-nusa-tenggara/bali/padang-padang-beach" },
      { name: "Melasti Beach", meta: "남쪽 해변 · 현장 요금", note: "절벽 도로와 맑은 물이 매력적인 반나절 대안. 귀국일보다 11월 1–2일에 배치.", href: "https://www.google.com/maps/search/?api=1&query=Melasti+Beach+Bali" },
    ],
    food: [
      { name: "Mana Uluwatu", meta: "절벽 전망 · Rp250–450k", note: "캘리포니아·멕시칸과 인도네시아 향신료. 일몰석 예약 권장.", href: "https://uluwatusurfvillas.com/restaurant/" },
      { name: "Warung Local", meta: "나시참푸르 · Rp50–100k", note: "골라 담는 편안한 로컬 한 끼. 07:00–22:00, 워크인.", href: "https://linktr.ee/warunglocal" },
      { name: "Jimbaran Seafood", meta: "해변 저녁 · 시가", note: "귀국일 이른 저녁 대안. 주문 전 무게·단가·조리비와 총액을 확인.", href: "https://www.google.com/maps/search/?api=1&query=Jimbaran+Seafood+Bali" },
    ],
  },
];

const preparation = [
  { id: "passport", when: "지금", title: "여권 유효기간 확인", detail: "입국일 기준 6개월 이상 · 훼손 여부와 영문명 항공권 일치" },
  { id: "stay", when: "지금", title: "무료 취소 숙소 선점", detail: "우붓 축제 기간과 길리 소량 재고부터 예약" },
  { id: "boat", when: "출발 4–8주 전", title: "패스트보트 왕복", detail: "오전 직항 · 수하물·항구세·픽업 포함 여부 확인" },
  { id: "dinner", when: "출발 1–2개월 전", title: "기념일 식사와 케착", detail: "Locavore NXT, Hujan, Uluwatu Kecak 우선" },
  { id: "visa", when: "출발 2–4주 전", title: "e-VOA B1", detail: "공식 이민국에서 1인 Rp500k · 30일 체류" },
  { id: "levy", when: "출발 전", title: "Bali Tourist Levy", detail: "Love Bali 공식 사이트 · 1인 Rp150k · QR 저장" },
  { id: "arrival", when: "10.18부터", title: "All Indonesia 신고", detail: "입국 3일 전부터 무료 작성 · 두 사람 QR 오프라인 저장" },
  { id: "weather", when: "출항 72시간 전", title: "롬복 해협 파고 확인", detail: "BMKG 확인 후 보트사 바우처와 출항 시간 재확인" },
  { id: "flight", when: "출발 7일 전", title: "항공편 재확인", detail: "귀국편은 11/3 23:05 · 인천 도착은 11/4 07:10" },
  { id: "bags", when: "짐 싸는 날", title: "섬용 작은 가방", detail: "방수팩·아쿠아슈즈·얇은 우비·멀미약·현금 소액권" },
];

function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true"> ↗</span></a>;
}

function SectionHeading({ number, kicker, title, copy }: { number: string; kicker: string; title: string; copy: string }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div><p className="section-kicker">{kicker}</p><h2>{title}</h2></div>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

function TravelChecklist() {
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    const restoreId = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem("bali-between-us-checklist");
        if (saved) setChecked(JSON.parse(saved));
      } catch { /* private browsing can block storage */ }
    }, 0);
    return () => window.clearTimeout(restoreId);
  }, []);

  const toggle = (id: string) => {
    setChecked((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      try { window.localStorage.setItem("bali-between-us-checklist", JSON.stringify(next)); } catch { /* keep in memory */ }
      return next;
    });
  };

  return (
    <div className="checklist-card">
      <div className="checklist-progress">
        <span>준비도</span><strong>{checked.length} / {preparation.length}</strong>
        <div><i style={{ width: `${(checked.length / preparation.length) * 100}%` }} /></div>
      </div>
      <div className="checklist-items">
        {preparation.map((item) => (
          <label className={checked.includes(item.id) ? "checked" : ""} key={item.id}>
            <input type="checkbox" checked={checked.includes(item.id)} onChange={() => toggle(item.id)} />
            <span className="fake-check" aria-hidden="true">✓</span>
            <span className="check-when">{item.when}</span>
            <span className="check-copy"><strong>{item.title}</strong><small>{item.detail}</small></span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="topbar" aria-label="여행 수첩 메뉴">
          <a className="wordmark" href="#top" aria-label="첫 화면으로">BALI <span>2026</span></a>
          <div className="navlinks">
            <a href="#route">여정</a><a href="#stays">스테이</a><a href="#spots">먹고·보고</a>
            <a className="nav-cta" href="#checklist">출발 준비</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">BALI · GILI AIR · WEST COAST</p>
            <h1>Bali,<br />at our pace.</h1>
            <p className="lede">우붓과 길리 에어를 지나 스미냑에 머물고, 짱구의 하루와 울루와뚜의 바다를 담은 13박 14일.</p>
            <div className="hero-actions"><a className="primary-button" href="#route">일정 보기</a><span>2026.10.21 — 11.03</span></div>
            <div className="flight-chip"><b>7C5303</b><span>ICN 15:40 → DPS 21:45</span></div>
          </div>

          <figure className="hero-image">
            <img src="./images/gili-water.jpg" alt="길리 에어 해변을 위에서 바라본 풍경" />
            <figcaption>GILI AIR · INDONESIA</figcaption>
          </figure>
        </div>

        <div className="route-peek">
          <p>ROUTE</p>
          <ol>
            <li><b>00</b><span>공항 인근</span><small>1박 · 늦은 도착</small></li>
            <li><b>01</b><span>우붓</span><small>4박 · 숲과 예술</small></li>
            <li><b>02</b><span>길리 에어</span><small>4박 · 산호와 노을</small></li>
            <li><b>03</b><span>스미냑 · 짱구</span><small>2박 · 서쪽 해안</small></li>
            <li><b>04</b><span>울루와뚜</span><small>2박 · 절벽과 바다</small></li>
          </ol>
        </div>
      </section>

      <section className="snapshot" aria-label="여행 핵심 정보">
        <div><small>TRAVEL TIME</small><strong>13박 14일</strong><span>귀국 도착은 11/4</span></div>
        <div><small>TIME ZONE</small><strong>한국 −1시간</strong><span>표시 시각은 모두 현지</span></div>
        <div><small>WEATHER</small><strong>건기 → 우기 전환</strong><span>오전 야외 · 오후 플랜 B</span></div>
        <div><small>MONEY NOTE</small><strong>Rp100k ≈ ₩7,800</strong><span>8/26 계획 환율 기준</span></div>
      </section>

      <section className="notebook-section route-section" id="route">
        <SectionHeading number="01" kicker="DAY BY DAY" title="14일의 흐름" copy="이동일 저녁은 비우고 바다는 오전에. 나머지는 그날 컨디션과 날씨가 정합니다." />

        <div className="route-line" aria-label="전체 숙박 루트">
          {[
            ["10.21", "TUBAN", "1N"], ["10.22", "UBUD", "4N"], ["10.26", "GILI AIR", "4N"], ["10.30", "SEMINYAK", "2N"], ["11.01", "ULUWATU", "2N"], ["11.03", "DPS", "OUT"],
          ].map((stop, index) => <div key={stop[1]}><i>{index + 1}</i><small>{stop[0]}</small><strong>{stop[1]}</strong><span>{stop[2]}</span></div>)}
        </div>

        <div className="days-grid">
          {itinerary.map((day) => (
            <article className={`day-card ${day.tone}`} key={day.no}>
              <header><span>DAY {day.no}</span><strong>{day.date}</strong><small>{day.day}</small></header>
              <p className="day-place">{day.place}</p><h3>{day.title}</h3>
              <ul><li><b>AM</b>{day.morning}</li><li><b>PM</b>{day.afternoon}</li><li><b>NT</b>{day.evening}</li></ul>
            </article>
          ))}
        </div>

        <div className="transport-note">
          <div><p className="mini-kicker">FAST BOAT RULE</p><h3>국제선과 배는 같은 날 연결하지 않기.</h3><p>10월 30일에 길리에서 발리 본섬으로 돌아와 11월 3일 귀국편까지 충분한 여유를 남깁니다. 표기 운항은 2–2.5시간이어도 체크인·대기·중간 기항을 합쳐 문에서 문까지 4–5시간을 비워두세요.</p></div>
          <ol>
            <li><span>01</span><p><strong>오전 직항 우선</strong>파당바이 출항 60분 전 도착</p></li>
            <li><span>02</span><p><strong>48–72시간 전 재확인</strong>날씨·항만 통제·바우처 확인</p></li>
            <li><span>03</span><p><strong>본섬 기사 차량 예약</strong>파당바이 → 스미냑 2.5–4시간 확보</p></li>
          </ol>
          <div className="transport-links"><ExternalLink href="https://bluewater-express.com/schedules/">BlueWater 시간표</ExternalLink><ExternalLink href="https://maritim.bmkg.go.id/cuaca/perairan/selat-lombok-bagian-utara">BMKG 해상 날씨</ExternalLink></div>
        </div>
      </section>

      <section className="stay-section" id="stays">
        <div className="notebook-section stay-inner">
          <SectionHeading number="02" kicker="WHERE TO STAY" title="머무를 곳" copy="성인 2명·객실 1개·정확한 날짜로 2026년 8월 26일 조회했습니다. 가격은 당시 노출값이며 결제 전 재고·세금·취소 시각을 다시 확인하세요." />

          <div className="availability-note"><span>AVAILABILITY</span><p><strong>‘예약 가능’은 검색 결과에 객실 선택이 노출된 상태</strong>를 뜻합니다. 객실을 보유하거나 가격을 보장하는 것은 아니므로 무료 취소 요금으로 먼저 선점하는 편이 안전합니다.</p></div>

          <div className="stay-groups">
            {stayGroups.map((group, groupIndex) => (
              <div className="stay-group" key={group.area}>
                <div className="stay-group-head"><span>0{groupIndex + 1}</span><div><h3>{group.area}</h3><p>{group.note}</p></div><strong>{group.dates}<small>{group.nights}</small></strong></div>
                <div className="stay-cards">
                  {group.options.map((stay) => (
                    <article className={stay.pick ? "stay-card picked" : "stay-card"} key={stay.name}>
                      <p className="stay-tag">{stay.tag}</p><h4>{stay.name}</h4><strong className="stay-price">{stay.price}</strong>
                      <p>{stay.desc}</p><small>{stay.cancel}</small><ExternalLink className="book-link" href={stay.href}>날짜 그대로 보기</ExternalLink>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="stay-total">
            <span>추천 조합 합계</span><strong>약 ₩1,323,969 + 스미냑 2박</strong><p>Asta House + Umah Gatra + Villa Saia + Kanvaz + Renaissance · 스미냑은 실시간 요금 별도 · 2인 13박 · 항공/교통 제외</p>
          </div>
        </div>
      </section>

      <section className="notebook-section guide-section" id="spots">
        <SectionHeading number="03" kicker="EAT · SEE · SWIM" title="먹고, 보고, 걷기" copy="운영시간과 가격은 2026년 8월 26일 확인 기준입니다. 종교행사·날씨·사유 행사로 바뀔 수 있으니 방문 당일 공식 링크를 한 번 더 확인하세요." />

        {guides.map((guide, guideIndex) => (
          <article className={`guide-spread ${guide.image ? "has-image" : ""}`} id={guide.id} key={guide.id}>
            <header><span>{guide.number}</span><p>{guide.place}</p><h3>{guide.title}</h3><small>{guide.subtitle}</small></header>
            {guide.image && <figure><img src={guide.image} alt={guide.imageAlt} loading="lazy" /><figcaption>{guide.place} · PHOTO NOTE</figcaption></figure>}
            <div className="guide-column"><p className="column-label">TO SEE · TO DO</p>{guide.sights.map((spot, index) => <div className="guide-item" key={spot.name}><span>{String(index + 1).padStart(2, "0")}</span><div><h4>{spot.name}</h4><b>{spot.meta}</b><p>{spot.note}</p><ExternalLink href={spot.href}>공식·상세 정보</ExternalLink></div></div>)}</div>
            <div className="guide-column food-column"><p className="column-label">TO EAT</p>{guide.food.map((food, index) => <div className="guide-item" key={food.name}><span>{String(index + 1).padStart(2, "0")}</span><div><h4>{food.name}</h4><b>{food.meta}</b><p>{food.note}</p><ExternalLink href={food.href}>메뉴·예약 정보</ExternalLink></div></div>)}</div>
            {guideIndex === 1 && <div className="island-rule"><strong>GILI RULE</strong><span>차·오토바이 없음</span><span>오전 바다</span><span>구명조끼</span><span>섬 사이 수영 금지</span></div>}
          </article>
        ))}
      </section>

      <section className="planning-section" id="checklist">
        <div className="notebook-section planning-inner">
          <SectionHeading number="04" kicker="BEFORE DEPARTURE" title="출발 전 준비" copy="체크한 항목은 이 기기에 저장됩니다. 둘이 함께 예약 화면을 보면서 하나씩 지워가세요." />

          <div className="planning-grid">
            <TravelChecklist />
            <aside className="flight-panel">
              <p className="mini-kicker">FLIGHT CARD</p>
              <div className="flight-leg"><span>OUT</span><div><small>WED · 10.21</small><strong>ICN 15:40</strong><i>7C5303 · 7h 05m</i><strong>DPS 21:45</strong></div></div>
              <div className="flight-leg"><span>IN</span><div><small>TUE · 11.03</small><strong>DPS 23:05</strong><i>7C5304 · 7h 05m</i><strong>ICN 07:10 <em>+1</em></strong></div></div>
              <p className="flight-warning">귀국편 인천 도착은 <strong>11월 4일 수요일</strong>. DPS에는 20:00까지 도착하도록 남부 호텔에서 18:30 전후 출발합니다.</p>
              <ExternalLink className="outline-link" href="https://www.jejuair.net/en/prepare/flight/viewScheduleInfo.do">제주항공 일정 재확인</ExternalLink>
            </aside>
          </div>

          <div className="admin-grid">
            <article><span>01</span><h3>입국</h3><p><strong>e-VOA B1 · Rp500k/인</strong><br />30일 체류, 여권 유효기간 6개월 이상과 귀국 항공권 필요.</p><ExternalLink href="https://evisa.imigrasi.go.id/">인도네시아 e-Visa</ExternalLink></article>
            <article><span>02</span><h3>관광세</h3><p><strong>Bali Levy · Rp150k/인</strong><br />출발 전 공식 Love Bali에서 결제하고 QR을 저장.</p><ExternalLink href="https://lovebali.baliprov.go.id/faq">Love Bali 공식 안내</ExternalLink></article>
            <article><span>03</span><h3>도착 신고</h3><p><strong>All Indonesia · 무료</strong><br />10월 18일부터 작성 가능. 유사 유료 사이트를 피하고 공식 도메인만 이용.</p><ExternalLink href="https://allindonesia.imigrasi.go.id/">All Indonesia</ExternalLink></article>
          </div>

          <div className="budget-card">
            <div className="budget-title"><p className="mini-kicker">BUDGET FOR TWO</p><h3>항공 제외, 약 <em>₩410–560만</em></h3><small>추천 숙소 조합과 10% 비상예산을 포함한 여유 있는 범위</small></div>
            <div className="budget-bars">
              <div><span>숙박</span><i style={{ width: "52%" }} /><strong>약 ₩200만</strong></div>
              <div><span>식사</span><i style={{ width: "32%" }} /><strong>₩55–110만</strong></div>
              <div><span>교통</span><i style={{ width: "28%" }} /><strong>₩65–100만</strong></div>
              <div><span>체험</span><i style={{ width: "22%" }} /><strong>₩30–70만</strong></div>
              <div><span>비자·세금</span><i style={{ width: "8%" }} /><strong>약 ₩10만</strong></div>
            </div>
            <p className="budget-note">계획 환율: Rp100k ≈ ₩7,800 (2026.08.26 참고). 위 총액에는 팁·세탁·소액 지출과 10% 비상예산을 더했으며 쇼핑·항공권·여행자보험은 제외했습니다.</p>
          </div>

          <div className="heads-up">
            <p className="mini-kicker">DATES TO REMEMBER</p>
            <div><strong>10.21–25</strong><span>Ubud Writers & Readers Festival</span><p>우붓 4박과 겹칩니다. 숙소와 인기 식당을 먼저 확보하세요.</p></div>
            <div><strong>10.31</strong><span>Saraswati</span><p>짱구·스미냑 이동일. 사원 주변 교통과 소규모 업장의 운영 변경을 확인하세요.</p></div>
            <div><strong>11.03</strong><span>RETURN FLIGHT</span><p>7C5304는 23:05 출발. 기사 차량과 데이유즈를 미리 확정하고 20:00까지 공항에 도착하세요.</p></div>
            <ExternalLink href="https://ubudwritersfestival.com/">우붓 축제</ExternalLink><ExternalLink href="https://bimashindu.kemenag.go.id/storage/files/Hari%20Libur%20Nasional%2C%20Libur%20Fakultatif%2C%20dan%20Cuti%20Bersama%20Tahun%202026.pdf">2026 힌두 휴일표</ExternalLink>
          </div>
        </div>
      </section>

      <section className="closing-photo">
        <img src="./images/gili-sunset.jpg" alt="길리 해변의 나무 사이로 지는 해" loading="lazy" />
        <div><p>ONE LAST NOTE</p><blockquote>계획은 여기까지.<br />나머지는 발리에서.</blockquote><a href="#top">처음으로 ↑</a></div>
      </section>

      <footer>
        <div><a className="wordmark" href="#top">BALI <span>2026</span></a><p>2026.10.21 — 11.03 · 13 NIGHTS · 14 DAYS</p></div>
        <p className="source-note">정보·가격 확인 2026.08.26. 실제 예약·운항·입국 요건은 결제 및 출발 직전에 공식 링크에서 재확인하세요. 사진: <ExternalLink href="https://unsplash.com/photos/rice-terraces-jN9JnZ-SyVc">Radoslav Bali</ExternalLink>, <ExternalLink href="https://unsplash.com/photos/a-beach-with-a-boat-in-the-water-_G6p9nrL1lM">Audrey Rd</ExternalLink>, <ExternalLink href="https://unsplash.com/photos/a-lone-tree-in-the-middle-of-a-body-of-water-009eJNi9_C0">Filipe Freitas</ExternalLink> / Unsplash.</p>
        <button type="button" onClick={() => window.print()}>여행 수첩 인쇄 ↗</button>
      </footer>
    </main>
  );
}
