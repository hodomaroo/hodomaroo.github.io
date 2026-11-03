export const profile = {
  name: '김두호', english: 'Kim duho · Seya Toko', nationality:'대한민국 · 일본', role: '시스템 · 백엔드 엔지니어',
  email: 'hodumaru@korea.ac.kr', github: 'https://github.com/hodomaroo', blog: 'https://openhodu.tistory.com/',
  intro: '하드웨어와 소프트웨어 사이, 시스템을 연결합니다.',
  algorithms: [
    {label:'solved.ac', achievement:'Platinum II · 482문제',url:'https://solved.ac/profile/duho1004'},
    {label:'LeetCode',achievement:'Knight · 846문제',url:'https://leetcode.com/u/delicious-hodo/'}
  ],
  education: [
    {period:'2025.03 — 현재', title:'고려대학교', description:'컴퓨터학과 · 전기전자공학부 이중전공', note:'학점 4.41 / 4.5 · 취득 62학점'},
    {period:'2019.03 — 2022.02', title:'서울로봇고등학교', description:'첨단로봇시스템과', note:''}
  ],
  skills: [{label:'언어', value:'Python · JavaScript · C / C++ · Java'}, {label:'백엔드',value:'FastAPI · Node.js · Express · PostgreSQL'}, {label:'인프라',value:'Docker · Google Cloud Platform'}, {label:'로보틱스',value:'ROS · MoveIt · Unity XR · Gazebo'}]
};

export const entries = {
  crypto: {
    category:'projects',title:'암호화 이미지 분석과 Double AES',kicker:'Assignment · 정보보호',subtitle:'암호문에 남은 패턴에서 출발한 분석.',summary:'ECB 반복 블록 시각화 · 중간 일치 공격 구현',period:'2025.10',org:'고려대학교 · 정보보호',tags:['Python','암호학','AES'],color:'lilac',
    sections:[
      {title:'과제',text:'수업에서 제공된 암호화 이미지와 키의 부분 정보를 바탕으로, 암호문의 패턴을 분석하고 암호화 구조를 검증하는 과제입니다.'},
      {title:'구현 내용',bullets:['ECB에서 같은 평문 블록이 같은 암호문 블록으로 나타나는 특성을 이용해 반복 블록의 빈도를 시각화했습니다.','이미지 패턴에서 키 단서를 복원하고, 주어진 평문·암호문 쌍과 키 조건을 이용해 Double AES의 중간 일치 공격을 구현했습니다.','찾은 후보 키를 별도 암호문 복호화에 적용해 결과를 확인했습니다.']},
      {title:'기술과 학습',text:'Python, Pillow, NumPy, PyCryptodome을 사용했습니다. 수업에서 제한한 탐색 공간을 대상으로 시간·메모리의 교환 관계와 블록 암호 운용 방식의 중요성을 살펴봤습니다.'}
    ],links:[]
  },
  hash: {
    category:'projects',title:'블록체인 트랜잭션과 해시 분석',kicker:'Assignment · 정보보호',subtitle:'입력 데이터와 해시 구조를 추적하다.',summary:'믹싱 풀 트랜잭션 분석 · 교육용 해시의 두 번째 원상 검증',period:'2025.11',org:'고려대학교 · 정보보호',tags:['블록체인','해시 함수','보안 분석'],color:'mint',
    sections:[
      {title:'과제',text:'트랜잭션 입력의 의미와 해시 함수의 구조를 분석한 정보보호 과제입니다. 수업에서 제공한 트랜잭션과 교육용 toyhash를 대상으로 진행했습니다.'},
      {title:'트랜잭션 분석',text:'믹싱 풀의 ABI 입력값과 해시를 해석하고, 과제에서 주어진 입금·출금 사이의 연관성을 확인했습니다.'},
      {title:'해시 분석',text:'toyhash의 블록·서브블록 구조와 축약된 내부 해시 출력을 분석했습니다. 이를 이용해 두 번째 원상(second preimage) 후보를 구성하고, 후보 탐색 및 검증 과정을 구현했습니다.'},
      {title:'학습 내용',text:'입력의 인코딩과 데이터 흐름을 추적하고, 해시 함수의 내부 상태와 출력 길이가 보안 성질에 미치는 영향을 살펴봤습니다.'}
    ],links:[]
  },
  cpu: {
    category:'projects',title:'Verilog 파이프라인 설계',kicker:'Assignment · 컴퓨터구조',subtitle:'명령어의 실행을 하드웨어로 연결하다.',summary:'Verilog 기반 파이프라인 설계 · 명령어 제어와 데이터패스 구현',period:'2025.10 — 2025.12',org:'고려대학교 · 컴퓨터구조',tags:['Verilog','RV32I','파이프라인','시뮬레이션'],color:'blue',
    sections:[
      {title:'설계 과제',text:'Verilog를 활용해 명령어 실행 흐름과 파이프라인을 설계하고, 마일스톤별 구현·하드웨어 변경·시뮬레이션을 정리한 과제입니다.'},
      {title:'명령어 제어와 데이터패스',text:'Milestone 3 기록에서는 RV32I CPU의 명령어 처리와 제어 신호를 보완했습니다.',bullets:['JALR(ret)의 제어 신호 분기와 ALU 연산 결과를 이용한 PC 갱신 처리','XORI·XOR의 ALU 제어 및 연산 결과 처리','BGEU 활성화 처리와 제어 유닛의 신호 매핑 수정']},
      {title:'최종 시연',text:'최종 영상에 코드 설명, 하드웨어 수정 사항, 시뮬레이션 분석과 동작 확인을 담았습니다.',bullets:['00:00 코드 설명 · 02:57 하드웨어 수정 사항','10:50 시뮬레이션 분석 · 16:36 동작 확인']}
    ],links:[{label:'최종 시연 영상',url:'https://youtu.be/P1j3P6Y59DY'},{label:'Milestone 3 설계 기록',url:'https://app.notion.com/p/Computer-Architecture-Milestone-3-2a688e93e4ae80a1a897c3d46ff30394'}]
  },
  systemdesign: {
    category:'projects',title:'컴퓨터시스템설계 미니 프로젝트',kicker:'Assignment · 컴퓨터시스템설계',subtitle:'코드에서 보드 위의 동작까지.',summary:'시스템 구현과 LED·Tera Term을 통한 동작 검증',period:'2026.06',org:'고려대학교 · 컴퓨터시스템설계',tags:['시스템 설계','하드웨어','동작 검증'],color:'slate',
    sections:[
      {title:'과제',text:'컴퓨터시스템설계 수업에서 진행한 미니 프로젝트입니다. 구현 코드를 설명하고, LED와 Tera Term 화면을 통해 실제 동작을 확인하는 과정을 시연 영상으로 정리했습니다.'},
      {title:'시연 구성',bullets:['00:00 구현 코드 설명','21:00 LED를 이용한 정상 동작 확인','21:30 Tera Term 출력으로 동작 확인']}
    ],links:[{label:'미니 프로젝트 시연 영상',url:'https://youtu.be/98ScMInltms'}]
  },
  aimers: {
    category:'activities',title:'LG Aimers 9기',kicker:'AI 해커톤 · 본선 진출',subtitle:'모델링과 도메인 이해를 함께 배우다.',summary:'LG AI 해커톤 본선 진출 · 야구 데이터 기반 문제 해결',period:'2026',org:'LG Aimers',tags:['AI','본선 진출','머신러닝'],color:'rose',
    sections:[
      {title:'성과',text:'LG Aimers 9기에 참여해 LG AI 해커톤 본선에 진출했습니다.'},
      {title:'해커톤 문제와 연구 기록',text:'투수가 다음 공을 던지기 직전, 제구에 성공할 확률을 예측하는 문제를 다뤘습니다. 팀 노션에는 데이터셋 분석, 개인별 방법론과 제출 기록, 온라인 해커톤 모델 개선 과정을 정리했습니다.',bullets:['누적 기록에서 시즌별 정보를 역산하는 특징 설계','작은 표본을 과신하지 않도록 경험적 베이즈 기반 수축 적용','서로 다른 예측 모델의 앙상블과 경기 집단별 보정','Brier Skill Score를 기준으로 예측 확률의 평균·분산과 보정 성능 점검']},
      {title:'공식 교육 과정',text:'AI 이론을 학습하고 LG의 실제 데이터를 활용해 문제를 해결하는 교육·해커톤 프로그램입니다. 공식 사이트에서 안내하는 학습 주제는 다음과 같습니다.',bullets:['머신러닝을 위한 수학과 지도학습','전통적 모델부터 파운데이션 모델까지의 정형 데이터 머신러닝','최적화·의사결정 중심 학습과 시계열 분석','딥러닝 자연어처리 기초와 LLM Agent','LLM 응용과 평가']},
      {title:'후기',text:'야구에 대한 지식이 충분하지 않아 제시하거나 구상할 수 있는 방법론이 제한적이었습니다. 본선에서 기대만큼의 성과를 내지 못한 점은 아쉬움으로 남았습니다. 모델링 역량뿐 아니라 데이터가 만들어지는 맥락과 도메인을 이해하는 일이 중요하다는 점을 배운 경험이었습니다.'}
    ],links:[{label:'LG Aimers 공식 사이트',url:'https://www.lgaimers.ai/'},{label:'LG Aimers 9기 활동 기록',url:'https://app.notion.com/p/LG-Aimers-9-389feb58567680b69363efbb1df8978e'},{label:'온라인 해커톤 연구 정리',url:'https://app.notion.com/p/26-08-29-SOTA-3cbfeb585676803e8f09ef14e454e6dd'}]
  },
  roadmap: {
    cover:{src:'./assets/roadmap-cover.png',alt:'고려대학교 컴퓨터학과 강의 로드맵 공식 대표 이미지',width:1200,height:630},
    category:'projects',title:'KUCSE Roadmap',kicker:'학생회 사업 · 단독 개발',subtitle:'수강 계획에 필요한 정보를 한곳에.',
    summary:'고려대학교 컴퓨터학과 수강 로드맵 · 강의평점·수강평 정리',period:'2026.09 — 2026.11',org:'고려대학교 컴퓨터학과 학생회',role:'단독 개발',
    tags:['학생회','웹 서비스','데이터 정리','KLUE 협의'],color:'rose',visual:'roadmap',
    sections:[
      {title:'프로젝트',text:'고려대학교 컴퓨터학과 학생회 사업으로 2026년 9월부터 11월까지 단독 개발한 수강 로드맵·강의 정보 사이트입니다. 전공 이수 흐름과 강의평점·수강평을 함께 살펴보고 수강 계획을 세울 수 있도록 구성했습니다.'},
      {title:'KLUE와의 협의',text:'고려대학교 수강평 공유 플랫폼 KLUE와의 협의를 통해 KLUE의 수강평을 가져와 정리했습니다. 분반별 강의 진행 방식은 고려대학교 강의계획서와 KLUE를 기반으로 구성했으며, 사이트에도 운영 협의 후 배포 사실을 명시했습니다.'},
      {title:'주요 기능',bullets:['분야별 전공 로드맵과 권장 선이수 관계 시각화','입학 학번·전공 이수 유형에 따른 학점 현황 확인','학수번호·과목명·교수 검색과 이수구분·분야 필터','교수·분반별 강의 정보와 강의평점·수강평 정리','관심 과목 저장 및 가로·세로 로드맵 전환']},
      {title:'설계 방향',text:'과목 선택과 선이수 관계 파악에 필요한 정보를 연결했습니다. 학생회에서 구성한 로드맵은 참고용임을 안내하고, 공식 교과목표와 강의계획서의 출처를 함께 제공합니다.'}
    ],links:[{label:'사이트 방문',url:'https://kucse-roadmap.vercel.app/'}]
  },
  malo: {
    cover:{src:'./assets/malo-cover.png',alt:'Malo INTHON 최종 발표자료 표지',width:2880,height:1620},
    category:'projects', title:'Malo', kicker:'AI · 한국어 학습', subtitle:'문법을 넘어, 말의 의도까지.',
    summary:'AI 캐릭터와 관계·맥락에 맞는 한국어를 연습하는 서비스', period:'2026.11.01 — 11.02', org:'고려대학교 정보대학 INTHON · 팀 삼김',
    role:'팀장 · 백엔드 · AI Agent · DevOps',
    tags:['AI','React Native','FastAPI','음성 대화'], color:'lilac', visual:'malo',
    sections:[
      {title:'어떤 문제를 풀었나요?',text:'한국어 문장을 이해해도 간접적인 거절이나 관계에 따른 높임말, 말투의 뉘앙스를 파악하기는 어렵습니다. Malo는 TOPIK 3–4급 외국인 유학생을 핵심 대상으로, AI 캐릭터와 대화하며 이런 맥락을 반복해서 연습할 수 있도록 만든 한국어 학습 서비스입니다.'},
      {title:'맡은 역할',text:'팀 삼김의 팀장으로 백엔드, AI Agent, DevOps를 담당했습니다. 팀은 프론트엔드·디자인, 아이디어·비즈니스 모델 역할을 나눠 프로젝트를 진행했습니다.'},
      {title:'대화에서 재도전까지',bullets:['상대와 성격을 선택하고 장면의 상황·학습 목표를 확인합니다.','텍스트나 음성으로 답하면 캐릭터의 대사, 감정별 표정과 음성, 선택 언어의 자막이 함께 제공됩니다.','O·△·X·? 피드백으로 답변의 의도와 관계·문화적 맥락을 확인합니다. 학습 평가는 캐릭터의 기분과 구분합니다.','대화가 끝나면 종합·대화별 리포트를 확인하고, 아쉬웠던 표현을 다시 연습합니다. 리포트 PDF 저장과 화면 녹화를 지원합니다.']},
      {title:'서비스 구성',text:'React Native·Expo 기반 웹에서 대화와 리포트를 제공합니다. Next.js·Hono 백엔드가 학습 상태와 기록을 관리하고, FastAPI 기반 AI 서비스가 대화 생성·맥락 평가·번역·음성 기능을 연결합니다.',bullets:['데이터·인증: Supabase PostgreSQL, Google 로그인','AI·음성: OpenAI, Typecast, Azure Speech','운영: Docker Compose, GitHub Actions 검사 후 Azure VM 배포']},
      {title:'결과와 개발 범위',text:'2026년 11월 1–2일 INTHON에서 캐릭터 선택부터 대화·피드백·재도전까지 이어지는 MVP를 구현하고 데이트 상황의 대화를 시연했습니다. 현재 공개된 결과물은 웹 데모입니다. 한국어·일본어·영어·중국어로 설명을 제공하며, 연습 언어는 한국어입니다.'},
      {title:'다음 단계',text:'발표에서는 친구·상사 캐릭터, 수준별 가이드와 새 상황 응용 연습, 대학·어학당 도입을 확장 방향으로 제안했습니다. 구독·수익화 모델은 검증 전 계획입니다.'}
    ],
    links:[{label:'프로젝트 소개',url:'https://github.com/2026-INTHON'},{label:'프론트엔드',url:'https://github.com/2026-INTHON/frontend'},{label:'백엔드',url:'https://github.com/2026-INTHON/backend'},{label:'AI',url:'https://github.com/2026-INTHON/ai'}]
  },
  medivc: {
    cover:{src:'./assets/medivc-cover.png',alt:'MediVC 블록체인 & AI 해커톤 결선 발표자료 표지',width:1920,height:1080},
    category:'projects', title:'MediVC', kicker:'블록체인 · 응급 의료정보', subtitle:'말할 수 없는 순간, 의료정보를 연결하다.',
    summary:'환자 동의와 의료진 인증을 바탕으로 한 QR 의료정보 전달 시스템', period:'2026.05 — 2026.09 · 5개월', org:'2026 블록체인 & AI 해커톤 · 팀 블록체적화',
    role:'팀장 · 백엔드 · 블록체인',
    tags:['NestJS','PostgreSQL','블록체인','React Native'], color:'mint', visual:'medivc',
    sections:[
      {title:'프로젝트 배경',text:'환자가 의식이 없거나 휴대폰을 조작할 수 없는 응급상황에서, 사전에 동의한 의료정보를 인증된 구급대·의료진에게 전달하는 시스템입니다. 모바일 신분증을 활용한 2026 블록체인 & AI 해커톤에서 5개월 동안 진행했습니다.'},
      {title:'맡은 역할',text:'팀 블록체적화의 팀장으로 백엔드와 블록체인을 담당했습니다. 결선 발표에서는 서비스 유즈케이스와 아키텍처를 맡았습니다.'},
      {title:'하나의 QR, 역할별 흐름',bullets:['환자 앱: 본인 확인, 의료정보·동의 설정, 고정 QR 발급과 관리','발견자 웹: 일반 카메라로 QR을 열어 119 신고 및 현재 위치 안내 확인','의료진 앱: 인증 후 QR을 촬영하고 단회 티켓을 받아 동의한 범위의 의료정보 조회','서버: 접근 권한·동의·조회 기록을 관리하고, 감사 Worker와 Merkle root를 통해 조회 이력 검증 연결']},
      {title:'발견자가 바로 행동할 수 있도록',text:'쓰러진 사람의 MediVC 팔찌 QR을 일반 휴대폰 카메라로 스캔하면 119 신고 안내가 열립니다.',bullets:['119 전화와 스피커폰 안내, 현재 위치, 그대로 읽을 수 있는 신고 문장을 순서대로 제공합니다.','브라우저 위치 권한과 역지오코딩으로 확인한 주소를 신고 문장에 채웁니다.','위치 권한 거절·시간 초과·서버 오류가 생겨도 119 신고 안내는 계속 사용할 수 있습니다.','신고 후에는 소방청 자료를 바탕으로 한 응급처치 안내와 원문 PDF로 연결됩니다.']},
      {title:'공개 웹의 정보 경계',text:'발견자용 웹은 환자 이름·의료정보·보호자 연락처를 조회하거나 표시하지 않습니다. QR 참조값을 읽거나 전송하지 않고 주소창에서 제거합니다. 의료진의 인증된 조회 흐름과 발견자의 신고 안내를 분리한 구조입니다.'},
      {title:'기술 구성',bullets:['React Native·Expo 기반 환자·의료진 앱, React·Vite 기반 발견자 웹','NestJS·Fastify API 서버, Prisma·PostgreSQL로 의료정보·조회 이력·Outbox 관리','감사 Worker와 Merkle root를 통한 기록 검증','Geolocation·역지오코딩·Naver Maps 위치 안내, Playwright로 실패 상황과 개인정보 비노출 흐름 검증']},
      {title:'구현 범위와 다음 단계',text:'해커톤에서는 개발 인증, 합성 의료정보, 로컬 체인 검증 범위의 MVP를 구성했습니다. 실제 의료기관 연계와 현장 실증, 정보 확인 시간·인계 누락·조회 성공률의 측정은 후속 검증 과제입니다. 기관 도입과 수익 모델도 검증 전 계획으로 구분했습니다.'}
    ],
    links:[{label:'공개 웹 저장소',url:'https://github.com/block-optimization/verifier-web'},{label:'프로젝트 GitHub',url:'https://github.com/block-optimization'},{label:'공식 대회 안내',url:'https://opendid.org/hackathon/2026'}]
  },
  kist: {
    category:'experience', title:'한국과학기술연구원', kicker:'KIST · 연구 인턴', subtitle:'XR에서 실제 로봇까지.',
    summary:'XR 디지털 트윈 기반 로봇 원격 조작 시스템 개발', period:'2026.06 — 2026.08', org:'한국과학기술연구원 (KIST)', role:'연구 인턴', tags:['ROS','MoveIt','Unity XR','MongoDB'], color:'blue',
    sections:[
      {title:'담당 업무', text:'VR에서 지정한 파지 위치를 실제 로봇 팔의 움직임으로 변환하는 XR 디지털 트윈 기반 원격 조작 시스템을 개발했습니다.'},
      {title:'로봇 동작 설계', bullets:['MoveIt 원격 조작 액션 서버를 설계하고, XR 회전축과 중심 좌표로부터 Cartesian 궤적을 생성했습니다.','접근 → 파지 → 회전 → 이탈로 이어지는 상태 기계를 구현했습니다.','대각도 회전 시 손목 관절 한계를 재파지 분할로 해결하고, 직전 세그먼트의 관절 사용량을 바탕으로 되감기 방향을 보정했습니다.']},
      {title:'시스템 연결과 검증', bullets:['Unity(XR)·ROS·DB 서버로 구성된 3-PC 환경의 좌표계와 상태 동기화 문제를 추적하고 해결했습니다.','rosbridge·WebSocket으로 Unity, ROS, MongoDB의 상태를 동기화하고 DB 자동 재접속 및 실패 응답 처리를 구현했습니다.','Gazebo 시뮬레이션과 서비스 상태 관제 웹 패널을 구성했습니다.']}
      ,{title:'연구 결과 · ACK 2026',text:'「XR 원격조작에서 직관적인 파지 자세 지정을 위한 맨손-컨트롤러 결합 인터페이스」를 제1저자·발표자로 투고했습니다. 2026년 9월 24일 투고, 10월 15일 게재 수락, 10월 19일 최종본 제출을 완료했습니다.'}
    ], related:['research'], links:[{label:'기존 경력 기록',url:'https://hodomaroo.github.io/cv.html'}]
  },
  samsung: {
    category:'experience', title:'삼성전자', kicker:'DS 부문 · 메모리사업부', subtitle:'반복되던 계측 리포트를 하나의 파이프라인으로.',
    summary:'설비 엔지니어 · 반도체 NPW 계측 리포트 자동화', period:'2022.02 — 2026.03', org:'삼성전자 DS 부문 메모리사업부',role:'설비 엔지니어',tags:['Python','FastAPI','Pandas','APScheduler'], color:'slate',
    sections:[
      {title:'담당 업무',text:'반도체 NPW 계측 리포트의 수기 작성 과정을 데이터 적재, 분석·가공, 리포트 발행으로 이어지는 자동화 시스템으로 전환했습니다.'},
      {title:'구현',bullets:['APScheduler·Pandas·FastAPI를 활용해 실시간 데이터 적재와 가공, 리포트 발행 파이프라인을 설계하고 구현했습니다.','HTML·JavaScript 기반 사내 웹 UI와 백엔드 API를 개발했습니다.','데이터 수집부터 리포트 발행까지 전체 흐름을 연결했습니다.']},
      {title:'결과',text:'반복 작성에 드는 작업 시간을 줄이고 데이터 일관성을 개선했습니다.'}
    ],links:[{label:'기존 경력 기록',url:'https://hodomaroo.github.io/cv.html'}]
  },
  inthon: {
    category:'activities', title:'2026 INTHON', kicker:'대회 · 해커톤', subtitle:'Malo를 만든 이틀.',
    summary:'고려대학교 정보대학 해커톤 · Malo 프로젝트 참여',period:'2026.11.01 — 11.02', org:'고려대학교 정보대학', tags:['해커톤','팀 프로젝트'],color:'lilac',
    sections:[{title:'참여',text:'11월 1일부터 2일까지 고려대학교 정보대학 INTHON에 팀 삼김으로 참여했습니다. 대회 주제인 ‘감각’을 한국어의 관계·맥락·뉘앙스를 이해하는 경험으로 해석하고, AI 캐릭터와 대화하는 Malo를 개발했습니다.'}],related:['malo'],links:[{label:'프로젝트 GitHub',url:'https://github.com/2026-INTHON'}]
  },
  blockchain: {
    category:'activities',title:'블록체인 & AI 해커톤',kicker:'대회 · 해커톤',subtitle:'MediVC와 함께한 5개월.',summary:'모바일 신분증을 활용한 해커톤 · MediVC 프로젝트 참여',period:'2026.05 — 2026.09',org:'2026 블록체인 & AI 해커톤',tags:['블록체인','AI','팀 프로젝트'],color:'mint',
    sections:[{title:'참여',text:'2026 블록체인 & AI 해커톤에서 5개월 동안 MediVC 프로젝트를 진행했습니다. 공식 대회 기간은 5월 1일부터 9월 30일까지이며, 모바일 신분증을 활용한 제품·서비스 제안이 필수 조건인 대회입니다.'}],related:['medivc'],links:[{label:'공식 대회 안내',url:'https://opendid.org/hackathon/2026'},{label:'프로젝트 GitHub',url:'https://github.com/block-optimization'}]
  },
  research: {
    category:'activities',title:'XR 원격조작에서 직관적인 파지 자세 지정을 위한 맨손-컨트롤러 결합 인터페이스',kicker:'논문 · ACK 2026',subtitle:'맨손의 직관성과 컨트롤러의 정밀함을 결합한 XR 인터페이스.',summary:'김두호, 유범재, 박정민 · ACK 2026 · 게재 수락·최종본 제출',period:'2026.09 — 2026.10',org:'ACK 2026 · S5. 메타버스 및 XR',role:'제1저자 · 발표자',tags:['XR','HCI','MoveIt','로봇 원격조작'],color:'blue',
    sections:[
      {title:'논문 정보',bullets:['저자: 김두호, 유범재, 박정민','유형: 학부생·고등학생 논문경진대회','발표 유형: 구두(동영상)','투고일: 2026년 9월 24일','게재 수락일: 2026년 10월 15일','최종본 제출일: 2026년 10월 19일']},
      {title:'연구 내용',text:'컨트롤러만으로 파지 자세와 같은 공간 정보를 직관적으로 지정하기 어렵다는 문제에서 출발했습니다. 맨손의 공간 입력과 컨트롤러의 정밀 조작을 결합한 2단계 XR 원격조작 인터페이스를 제안하고 구현했습니다.'},
      {title:'접근 방법과 검증',bullets:['맨손으로 파지 위치·접근 방향·개폐 폭을 지정한 뒤 컨트롤러로 자세를 정밀 보정합니다.','명령을 확정하기 전에 파지 자세와 목표 각도의 실행 가능성을 확인합니다.','ROS 기반 로봇 제어 시스템과 통합하고, 시뮬레이션에서 파지 자세 지정부터 로봇 실행까지의 절차를 검증했습니다.']}
    ],related:['kist'],links:[{label:'ACK 2026 학술대회',url:'https://www.manuscriptlink.com/conferences/ack2026?lang=ko'}]
  },
  council: {
    category:'activities',title:'학생회 수강 로드맵 사업',kicker:'학생회 · 서비스 개발',subtitle:'학생들의 수강 선택을 돕는 웹 서비스.',summary:'KUCSE Roadmap 단독 개발 · KLUE 수강평 활용 협의',period:'2026.09 — 2026.11',org:'고려대학교 컴퓨터학과 학생회',tags:['학생회','단독 개발'],color:'rose',
    sections:[{title:'활동',text:'학생회 사업으로 컴퓨터학과 수강 로드맵과 강의평점·수강평 정리 사이트를 단독 개발했습니다. 고려대학교 수강평 공유 플랫폼 KLUE와 협의하여 수강평을 가져와 정리했습니다.'}],related:['roadmap'],links:[{label:'사이트 방문',url:'https://kucse-roadmap.vercel.app/'}]
  },
  studies: {
    category:'activities',title:'전공 스터디 운영',kicker:'커뮤니티 · 학습',subtitle:'같이 공부하고, 깊게 이해하기.',summary:'분산시스템·클라우드, 자료구조·알고리즘, 운영체제 스터디 운영',period:'2025 — 2026',org:'고려대학교',tags:['운영체제','알고리즘','분산시스템'],color:'slate',
    sections:[
      {title:'분산시스템 & 클라우드 · 2026년 1학기',text:'영상 강의와 Kubernetes 공식 문서를 병행하며 실습·발표·Q&A를 진행하는 스터디입니다. 강의와 실습에서 생긴 질문, 트러블슈팅 과정을 매주 기록했습니다.',bullets:['Thread & Race, GFS, Go·Threads·Raft 등 분산시스템 주제','Kubernetes 공식 문서 기반 실습과 16주 학습 계획','주차별 발표자 선정, 학습 내용 공유와 질문 토의'],links:[{label:'스터디 운영·일정',url:'https://app.notion.com/p/2e588e93e4ae808bbfc6d206d376cfc7'},{label:'학습 정리',url:'https://app.notion.com/p/2e588e93e4ae80ecbba9c14507c8e60a'},{label:'강의 재생목록',url:'https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB'},{label:'Kubernetes 공식 문서',url:'https://kubernetes.io/ko/'}]},
      {title:'컴퓨터 구조 & 운영체제 · 2025년',text:'혼자 공부하는 컴퓨터 구조+운영체제에서 OSTEP으로 이어지는 스터디를 운영했습니다. 12명이 주 1회 발표와 Q&A를 진행했으며, 2025년 4–12월의 21주차 기록을 통합 아카이브로 정리했습니다.',bullets:['챕터별 개인 요약과 발표자 로테이션','발표 자료·질문·답변을 공통 템플릿으로 아카이빙','OSTEP 50장 분산시스템 발표 기록'],links:[{label:'통합 아카이브',url:'https://app.notion.com/p/OS-3b8137789810810e8a24c74fdd62c102'},{label:'원본 스터디 기록',url:'https://app.notion.com/p/1bc88e93e4ae80ed83e1f7810ec39b66'},{label:'주차별 진행 기록',url:'https://app.notion.com/p/53268095ffea46bdb6345dd89969084d?v=c3580903f8cb40c08085cbbb4bafe0b9'}]},
      {title:'자료구조 & 알고리즘 KUCDAS · 2025년 2학기',text:'자료구조·알고리즘 스터디를 운영했습니다. 중첩 반복문, 로그 반복문, 분할정복 예제로 시간복잡도를 연습하고, 학습 가이드와 Git 협업을 위한 페이지를 구성했습니다.',links:[{label:'KUCDAS 스터디 가이드',url:'https://app.notion.com/p/2228f9c78a7e805e96e6c0beadf45aad?v=2228f9c78a7e805b9f25000c05391cfd'},{label:'시간복잡도 연습',url:'https://app.notion.com/p/2888f9c78a7e80bdbd71c6370b31e94f'},{label:'Git 협업 가이드',url:'https://app.notion.com/p/PR-2228f9c78a7e80799917c4bb729cc585'}]},
      {title:'GDG 백엔드 스터디',text:'API 설계·인증·데이터베이스 설계·성능 개선을 직접 구현하며 익히는 스터디입니다. 팀별로 언어와 프레임워크를 선택해 서비스를 만들고, 문제와 해결 방법을 공유하는 운영안을 정리했습니다.',links:[{label:'백엔드 스터디 기록',url:'https://app.notion.com/p/GDG-32588e93e4ae801e9760f710db959669'}]},
      {title:'DevKor 프런트엔드 스터디 · 2025년 1학기',text:'웹 기초, 모던 JavaScript, React의 State·Effect, 협업하기 좋은 코드와 접근성을 다룬 학습 기록입니다.',links:[{label:'프런트엔드 스터디 기록',url:'https://app.notion.com/p/DevKor-Front-End-Study-1b988e93e4ae80d78cdbc81bb658e8b9'}]}
    ],links:[{label:'블로그 학습 기록',url:'https://openhodu.tistory.com/'}]
  },
  robotics: {
    category:'activities',title:'모바일 로보틱스',kicker:'대회 · 수상',subtitle:'시스템을 만드는 첫 경험.',summary:'전국·지방기능경기대회 모바일 로보틱스 부문 수상',period:'2020 — 2021',org:'기능경기대회',tags:['로보틱스','수상'],color:'slate',
    sections:[{title:'수상 내역',bullets:['2021 전국기능경기대회 · 모바일 로보틱스 우수상 (4위)','2021 지방기능경기대회 · 모바일 로보틱스 은상','2020 지방기능경기대회 · 모바일 로보틱스 동상']}],links:[{label:'기존 수상 기록',url:'https://hodomaroo.github.io/cv.html'}]
  }
};

export const categories = {
  projects:{title:'프로젝트',english:'Selected projects',description:'아이디어를 실제로 동작하는 서비스로.',ids:['roadmap','malo','medivc'],assignments:['cpu','systemdesign','crypto','hash'],color:'lilac'},
  activities:{title:'대외활동·연구',english:'Beyond the classroom',description:'함께 만들고, 실험하며 넓혀온 경험.',groups:[{title:'대회',ids:['inthon','blockchain']},{title:'논문',ids:['research']},{title:'수상·선발',ids:['aimers','robotics']},{title:'스터디·학생회',ids:['studies','council']}],color:'mint'},
  experience:{title:'경력',english:'Work experience',description:'현장의 문제를 소프트웨어로 풀어낸 경험.',ids:['kist','samsung'],color:'slate'}
};
