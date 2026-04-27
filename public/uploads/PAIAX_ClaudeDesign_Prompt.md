# PAIAX 웹사이트 — Claude Design 프롬프트
# 이 파일을 Claude Design에 그대로 붙여넣으세요

---

## PROMPT

다음 명세대로 PAIAX 실용인공지능협회 웹사이트를 디자인해 주세요.
Next.js 14 + Tailwind CSS + TypeScript로 구현하고,
Claude Code에서 바로 사용할 수 있는 완전한 코드를 생성해 주세요.

---

## 브랜드 아이덴티티

**이름:** PAIAX (실용인공지능협회)
**포지셔닝:** 학술적 권위 + 실제 결과물 = 반박 불가능한 신뢰
**톤:** 절제된 권위. 과장 없음. 증거로 말한다.
**키워드:** 실제 결과물, 수익창출 가능, 실적, 인증, 가능성

**절대 사용 금지 단어:**
교육, 과정, 수업, 강의, 커리큘럼, 수료, 학습,
배우다, 가르치다, 강사, 돈을 벌어드립니다

---

## 디자인 시스템

### 색상
```
Primary Background:  #080E1C (딥 네이비)
Secondary BG:        #0D1830
Tertiary BG:         #142040
Gold Accent:         #C9A84C (핵심 강조색)
Gold Light:          #E8C96A
White:               #FFFFFF
Off White:           #F2F4F8 (밝은 섹션 배경)
Gray:                #8A9AB5
Light Gray:          #C8D0E0
Success Green:       #3EC480
Danger Red:          #E05252
```

### 타이포그래피
```
Display / Headline:  Noto Serif KR (weight 700, 900)
Body:                Noto Sans KR (weight 300, 400, 500, 700)
Mono / Badge:        Space Mono (weight 400, 700)
```

### 디자인 원칙
- 다크 배경 메인, 밝은 배경 교차 (S1다크→S2다크→S3밝음→S4다크→S5밝음...)
- 골드(#C9A84C)는 핵심 강조에만 사용. 남발 금지
- 그리드 오버레이: 60px 간격, opacity 2.5%
- 카드 hover: translateY(-4px) + border-color 변경
- 모든 섹션 진입 시 fadeUp 애니메이션 (IntersectionObserver)
- 카운트업 숫자 애니메이션 (뷰포트 진입 시)

---

## 페이지 구조

### 1. 메인 랜딩페이지 (/)

---

#### NAV (고정, z-index: 100)
```
높이: 60px
배경: rgba(8,14,28,0.95) + backdrop-blur(12px)
하단 테두리: 1px solid rgba(201,168,76,0.12)

좌측:
  로고: "PAIAX" (Noto Serif KR, gold, 1.1rem, bold)
  서브: "PRACTICAL AI ASSOCIATION" (Space Mono, gray, 0.62rem)

중앙 메뉴 (4개):
  무엇이 가능한가 | 실제 결과물 | 대상별 안내 | AX 인증
  각 항목: anchor link, hover시 골드

우측:
  CTA 버튼: "귀 기관에 무엇이 가능한지 확인하기"
  배경: #C9A84C, 텍스트: #080E1C, 폰트: Noto Sans KR bold
```

---

#### SECTION 1: Hero (100vh)

**레이아웃:** CSS Grid, 좌 3fr / 우 2fr, gap 3rem, 세로 중앙 정렬
**배경:** #080E1C + 그리드 오버레이 + 우상단 radial gradient glow

**좌측 콘텐츠 (staggered fadeUp 애니메이션):**

```
1. 상단 뱃지 (delay: 0.1s)
   형태: inline-flex, 골드 테두리, Space Mono 0.7rem
   내용: "● PAIAX — 실용인공지능협회"
   앞 점: 6px 골드 원형, pulse 애니메이션

2. 메인 헤드라인 (delay: 0.3s)
   폰트: Noto Serif KR, 900weight
   크기: clamp(2rem, 4vw, 3.4rem)
   내용:
     "AI를 배웠는데"
     "달라진 것이 없습니다."

3. 서브헤드라인 (delay: 0.45s)
   폰트: Noto Serif KR, 700weight
   색상: #C9A84C (골드)
   크기: clamp(1.4rem, 2.5vw, 2.2rem)
   내용: "우리는 그 이유를 알고 있습니다."

4. 본문 카피 (delay: 0.6s)
   폰트: Noto Sans KR, 0.98rem, 줄간격 1.9
   색상: #8A9AB5
   내용:
     "PAIAX는 알고 있는 것을 실제 결과물로 만드는 협회입니다."
     "실제 수상 실적, 실제 결과물,"
     "실제 수익창출까지도 가능합니다."
   강조 단어 "실제 결과물로 만드는 협회", "수익창출까지도 가능합니다"는
   color #FFFFFF로 강조

5. 대상 선택 버튼 4개 (delay: 0.75s)
   형태: 가로 flex, gap 0.5rem
   스타일: border 1px solid rgba(255,255,255,0.15), 배경 투명
   텍스트: #C8D0E0, 0.8rem
   hover/active: 배경 rgba(201,168,76,0.15), 테두리 #C9A84C, 텍스트 #C9A84C
   내용: [개인] [기업·단체] [학교·교육청] [대학교]
   클릭 시: S5 섹션으로 스크롤 + 해당 탭 자동 활성화

6. CTA 버튼 2개 (delay: 0.9s)
   Primary: 배경 #C9A84C, 텍스트 #080E1C, bold
             "귀 기관에 무엇이 가능한지 확인하기 →"
   Ghost: 테두리 rgba(255,255,255,0.25), 텍스트 #FFFFFF
          "실제 결과물 보기"
   hover: primary는 #E8C96A + translateY(-2px)

7. 파트너 배지 행 (delay: 1.1s)
   형태: flex, gap 1.5rem
   각 배지: 좌측 골드 2px 라인 | 텍스트 Space Mono 0.7rem gray
   내용: 카이스트 | 서강대학교 | Hacker-Dojo | iWISE UK
```

**우측 증거 카드:**
```
배경: #0D1830
테두리: 1px solid rgba(201,168,76,0.2)
패딩: 1.8rem

상단: "이것이 PAIAX가 만든 결과입니다" (Space Mono, gold, 0.68rem)

카드 스택 3개 (각 카드: 배경 #142040, 골드 3px 좌측 라인):

카드 1: AX-DOJO 우승
  제목: "AX-DOJO 미국 현지 우승" (white, bold, 0.9rem)
  내용: "서강대학교 학생팀 · 미국 현지 AI 대회 최종 우승" (gray, 0.78rem)
  사진 영역: 점선 박스, 배경 rgba(201,168,76,0.06)
              높이 70px, "[ 우승 사진 예정 ]" 텍스트

카드 2: AI중심대학
  제목 숫자: "70 → 7" (Noto Serif 1.6rem, gold)
  내용: "AI중심대학 선정 · PAIAX 핵심 역할"

카드 3: 인천교육청
  제목: "인천교육청 납품·운영"
  내용: "고교생 대상 · 공교육 체계 적용 · 성과 리포트 완비"
```

---

#### SECTION 2: Stats Bar

**배경:** #0D1830
**상하 테두리:** 1px solid rgba(201,168,76,0.12)
**패딩:** 2.5rem 4vw

```
5열 그리드, 각 열 가운데 정렬, 우측 테두리 1px rgba(255,255,255,0.05)

열 1: 숫자 "50" + 개국 | "글로벌 파트너십" | 뱃지 "학술"
열 2: 숫자 "70→7" | "AI중심대학 선정" | 뱃지 "학술"
열 3: 숫자 "1,200" + + | "결과물 완성" | 뱃지 "실용"
열 4: "axplaza" | "실거래 발생 중" | 뱃지 "실용"
열 5: "🏆" | "AX-DOJO 미국 우승" | 뱃지 "실용" (골드색)

숫자 스타일: Noto Serif KR 900, 2rem, #C9A84C
라벨 스타일: 0.73rem, gray
뱃지: Space Mono 0.62rem, 골드 테두리, padding 0.15rem 0.5rem

카운트업 애니메이션:
- data-target 속성으로 목표값 지정
- IntersectionObserver threshold 0.5
- cubic-ease-out, 1800ms
```

---

#### SECTION 3: AI 피로감 (밝은 배경)

**배경:** #F2F4F8
**패딩:** 6rem 4vw

**레이아웃:** 2열 그리드, gap 4rem

**좌측 — 타임라인:**
```
섹션 태그: "AI 피로감" (gold, bold, 0.68rem, space-mono)
헤드라인: "혹시 이런 경험이 있으십니까?" (navy, Noto Serif, 2rem+)

타임라인 4개 항목 (하단 구분선):
  각 항목: 연도(Space Mono, red, bold, min-width 36px) + 텍스트

2023: "ChatGPT를 열심히 익혔습니다." → "6개월 뒤 GPT-4가 나왔습니다."
2024: "Claude를 배웠습니다. Gemini도 나왔습니다." → "또 바뀌었습니다."
2025: "새 도구가 또 나왔습니다." → "내가 익힌 것이 또 달라졌습니다."
2026~: "또 새로운 AI가 나올 것입니다." → "이 게임이 언제 끝납니까?"

결과 텍스트: 0.78rem, red, italic

하단 인용 박스:
  배경: #080E1C
  좌측 라인: 4px solid #C9A84C
  폰트: Noto Serif KR, gold, 1rem, 줄간격 1.7
  내용: "이 게임에서 내려오십시오. 우리는 다른 게임을 합니다."
```

**우측 — 체크리스트 (인터랙티브):**
```
배경: white
패딩: 1.8rem
그림자: 0 4px 20px rgba(0,0,0,0.06)

상단 라벨: Space Mono, gold, 0.72rem

체크 항목 5개:
  hover/checked: 배경 #FFF9EE, 좌측 3px solid gold
  체크박스: 20x20px, 체크 시 골드 배경 + 네이비 체크마크
  텍스트: 0.85rem, #334466

항목:
1. AI 써봤는데 달라진 것이 없다
2. 뭔가 만들었는데 어디에 쓸지 모르겠다
3. 새 AI 나올 때마다 따라가기 지친다
4. 만든 것을 팔 방법을 모른다
5. 국제 무대 연결고리가 없다

하단 진단 결과 박스:
  배경: #080E1C
  상단: 3px solid #C9A84C
  골드 라벨 + 진행 바 (0→100%, 골드 fill, transition 0.5s) + 메시지 텍스트

진단 메시지:
  0개: "해당하는 항목을 체크해 보십시오"
  1-2개: "가볍게 시작할 수 있습니다"
  3-4개: "PAIAX가 필요한 시점입니다"
  5개: "지금 바로 확인이 필요합니다"

하단 버튼: 전체 너비, gold bg, navy text
"귀 기관에 무엇이 가능한지 확인하기 →"
```

---

#### SECTION 4: 무엇이 가능한가 (다크)

**배경:** #080E1C
**패딩:** 6rem 4vw

```
섹션 태그: "무엇이 가능한가" (반투명 골드)
헤드라인: "PAIAX와 함께하면 이것이 가능합니다" (white)

3열 카드 그리드, gap 1.5rem:

카드 구조:
  배경: #0D1830
  테두리: 1px solid rgba(255,255,255,0.06)
  상단 컬러 바: 5px
  hover: translateY(-4px) + 골드 테두리
  패딩: 1.5rem

카드 1 (초록 상단바 #27AE60):
  제목: "AI로 실제 결과물을 만들 수 있습니다"
  내용: "코딩을 몰라도 됩니다. 새 AI가 나와도 다시 시작할 필요가 없습니다.
         PAIAX의 방식으로 만들면 어떤 AI 도구가 나와도 그대로 작동합니다."
  하단: "→ axvend 기반" (Space Mono, gold 30%)

카드 2 (골드 상단바):
  제목: "만든 것이 실제 거래로 이어질 수 있습니다"
  내용: "만든 것을 어디서 팔지 걱정하지 않아도 됩니다.
         이미 열려있는 시장에 올리면 됩니다.
         실제 수익창출까지도 가능합니다."
  하단: "→ axplaza 기반"

카드 3 (빨강 상단바 #E74C3C):
  제목: "세계 무대에서 겨룰 수 있습니다"
  내용: "50개국이 참여하는 국제 AI 발명 대회가 이미 운영 중입니다.
         수상 실적이 포트폴리오가 됩니다."
  하단: "→ axgo 기반"

5단계 플로우 바 (카드 하단):
  배경: #0D1830, 테두리: 1px solid rgba(255,255,255,0.06)
  5개 항목 가로 배열, 각 항목 클릭 가능:
  STEP1 진단 | STEP2 결과물 완성 | STEP3 시장 등록 | STEP4 국제 무대 | STEP5 AX 인증
  active: 골드 텍스트, 배경 rgba(201,168,76,0.08)

하단 보호 문구 (이탤릭, gray 50%):
"어떤 새 AI가 나와도 이 흐름은 바뀌지 않습니다. 도구는 PAIAX가 업데이트합니다."
```

---

#### SECTION 5: 대상별 안내 (밝은 배경)

**배경:** #F2F4F8
**패딩:** 6rem 4vw

```
섹션 태그: "대상별 안내"
헤드라인: "귀 기관에 무엇이 가능한가요?"

탭 네비게이션:
  탭 4개: 개인 | 기업·단체 | 학교·교육청 | 대학교
  하단 2px solid 라인 기준
  active: navy 텍스트, 골드 하단 라인, bold
  비활성: gray 텍스트

각 탭 내용:

[공감 한 줄]
  색상: red, italic, 좌측 3px red 라인
  예) "AI 써봤는데 달라진 게 없습니다. 만들어도 어디에 파나요?"

[가능성 한 줄]
  bold, navy, 0.95rem
  예) "→ 실제 결과물을 만들고, 실제 수익창출까지도 가능합니다."

[상품 카드 그리드]
  개인/기업/대학: 3열, 학교: 4열
  카드 구조:
    배경: white
    상단: 3px solid (기본 gray, 추천은 gold)
    카드명 (1.05rem, bold, navy)
    대상 (0.75rem, gray)
    설명 (0.85rem, #334466, 줄간격 1.7)
    기능 목록 (✓ 초록, 0.82rem)
    기간 (Space Mono, gray, 0.7rem)
    hover: translateY(-2px) + shadow
    추천 카드: 상단 gold 라인 + 상단 골드 뱃지 "가장 많이 선택"

개인 탭 상품:
  처음 시작 | 만들고 팔기★ | 나도 만들어 드립니다

기업 탭 상품:
  한 팀부터 시작 | 전사 AI 전환★ | 우리 업종 전용

학교 탭 상품:
  하루 체험 | 국제 대회 출전★ | 세계 무대 도전 | 교육청 전용

대학 탭 상품:
  결과물 만들기 | 실적+KPI 완성★ | AI중심대학 만들기
```

---

#### SECTION 6: AX 인증 (다크)

**배경:** #0D1830
**패딩:** 6rem 4vw

```
중앙 정렬 인트로 (max-width 700px):
  섹션 태그: "AX 인증"
  헤드라인:
    "AI를 안다는 인증서는 넘쳐납니다."
  골드 인용:
    "실제로 만들었다는 인증은 세상에 없었습니다. 지금까지는."
    폰트: Noto Serif KR, 1.1rem, gold, 줄간격 1.7
  서브:
    "AX 인증은 시험이 아닙니다. 실제로 만들고, 실제로 거래된 기록이 인증입니다.
     QR 코드를 스캔하면 누구나 실시간으로 확인할 수 있습니다."

5열 인증 카드:
  배경: #080E1C
  테두리: 1px solid rgba(255,255,255,0.06)
  hover: 골드 테두리 + translateY(-3px)
  중앙 정렬

  ★ STARTER: 상단바 gray, "첫 결과물 완성", "디지털 배지"
  ★★ ASSEMBLER: 상단바 #4A90D9, "AI 서비스 실제 작동", "배지 + 실물 카드"
  ★★★ BUILDER: 상단바 #27AE60, "팔 수 있는 상태 완성", "배지 + 마켓 인증 마크"
  ★★★★ SELLER: 상단바 #C9A84C, "실제 거래 발생·위조 불가", "배지 + QR 실시간 검증"
                  → 이 카드만 테두리 강조 rgba(201,168,76,0.3)
  ★★★★★ ARCHITECT: 상단바 #9B59B6, "타인의 결과물도 만들어 거래", "전국 100명 이내"

비교 섹션 2열 그리드:
  왼쪽 (기존 AI 인증서): 상단 red 라인, ✗ 항목 4개
  오른쪽 (AX SELLER): 상단 green 라인, ✓ 항목 4개

[인증 전체 보기 →] 링크 → /certification 페이지
```

---

#### SECTION 7: 실제 결과물 (다크)

**배경:** #080E1C
**패딩:** 6rem 4vw

```
섹션 태그: "실제 결과물"
헤드라인: "이것이 PAIAX가 만든 결과입니다"

2열 그리드 카드 (마지막 카드 전체 너비):

카드 1 (실용, 골드 좌측 라인):
  뱃지: "실용 실적" (gold bg 10%)
  제목: "AX-DOJO 미국 현지 우승"
  내용: 서강대학교 학생팀 설명
  사진 영역: 점선 박스 80px 높이

카드 2 (학술, 보라 좌측 라인):
  뱃지: "학술 실적"
  제목: "AI중심대학 선정 기여"
  내용: 70→7 설명

카드 3 (학술, 파랑 좌측 라인):
  뱃지: "학술 실적"
  제목: "카이스트 첨단 드론 AI"

카드 4 (실용, 골드 좌측 라인):
  뱃지: "실용 실적"
  제목: "인천교육청 납품·운영"

카드 5 (글로벌, 전체 너비, red 좌측 라인):
  뱃지: "글로벌"
  제목: "50개국 axgo · Hacker-Dojo · iWISE 파트너십"

파트너 행:
  배경: #0D1830, 패딩 1.5rem
  5개 파트너명 (골드 좌측 라인 스타일)
  카이스트 · 서강대학교 · 인천교육청 · Hacker-Dojo · iWISE
```

---

#### SECTION 8: 리더십 (밝은 배경)

**배경:** #F2F4F8
**패딩:** 6rem 4vw

```
2열 그리드: 좌 소개+네트워크 / 우 인물 카드 2개

좌측:
  섹션 태그: "협회 소개"
  헤드라인: "학술적 권위와 실행 역량을 함께 보유한 협회입니다"
  서브: "카이스트와 서강대학교의 신뢰를 기반으로, 실리콘밸리의 실행력을 더했습니다."
  
  2x2 네트워크 그리드:
    각 항목: navy 배경, 하단 2px transparent → hover시 gold
    카이스트 / 서강대학교 / Hacker-Dojo / iWISE
    각 항목에 지역 태그 (골드 배경 10%)

우측 인물 카드 2개 (각 카드: white bg, 골드 좌측 3px 라인):
  레이아웃: 가로 flex (사진 + 정보)
  
  사진 영역: 56x56px, 점선 골드 테두리
               "사진 예정" 텍스트
  
  카드 1:
    역할: "현 협회장 · PRESIDENT" (Space Mono, gold)
    이름: "서강대 은진은 교수" (Noto Serif, 1rem, bold)
    소속: "서강대학교" (gray)
    인용: "AI중심대학 선정 과정에서 가장 중요한 것은 실행 가능한 인프라입니다..."
    
  카드 2:
    역할: "초대 협회장 · FOUNDING PRESIDENT"
    이름: "카이스트 윤용진 교수"
    소속: "카이스트 (KAIST)"
    인용: "첨단 드론 AI 활용 프로그램 설계·운영..."
```

---

#### SECTION 9: CTA (다크)

**배경:** #0D1830
**패딩:** 8rem 4vw
**중앙 정렬**

```
상단 라벨: "지금 바로 시작하십시오" (Space Mono, gold, 0.72rem, letter-spacing)

헤드라인:
  "귀 기관에 무엇이 가능한지"
  "먼저 확인해 보십시오."
  폰트: Noto Serif KR, 900, clamp(1.6rem, 3vw, 2.6rem)

서브: "1분 진단 · 비용 없음 · 의무 없음 · 24시간 내 연락"
      0.92rem, gray

3단계 플로우 (flex, center):
  각 스텝: 200px, navy 배경
  번호 원: 34px, gold 배경, navy 텍스트
  제목: bold, white
  설명: 0.75rem, gray
  
  1. "1분 진단 (무료)" / "지금 바로 · 비용·의무 없음"
  2. "가능한 것 확인" / "기관 상황에 맞는 안내 제공"
  3. "함께 시작" / "실제 결과물 · 수익창출 가능"
  
  화살표 → between steps

메인 버튼:
  배경: #C9A84C, 텍스트: #080E1C
  패딩: 1rem 3rem, 폰트: Noto Serif KR, 0.95rem, bold
  내용: "귀 기관에 무엇이 가능한지 확인하기 →"
  hover: #E8C96A + translateY(-2px)

연락처: "contact@paiax.or.kr · www.paiax.or.kr · 서울특별시"
         0.75rem, rgba(138,154,181,0.5)
```

---

#### FOOTER

```
배경: #050A14
패딩: 2.5rem 4vw
flex, space-between, wrap

좌: 브랜드 (gold, Noto Serif) + 서브 (gray, Noto Sans)
중: 링크 5개 (gray, hover gold)
우: 저작권 (gray 35%)
```

---

#### 전역 기능

**Live Toast (우측 하단 고정):**
```
배경: #0D1830, 초록 테두리
크기: max-width 290px
애니메이션: translateX(360px→0) 등장, 4초 후 퇴장
반복: 5초 후 첫 등장, 이후 8~15초 랜덤

토스트 1: "방금 ○○님의 AI 결과물이 실제 거래되었습니다"
토스트 2: "○○기업 팀이 AI 자동화 구조를 완성했습니다"
토스트 3: "○○학교 학생팀이 국제 대회 예선을 통과했습니다"
토스트 4: "방금 ○○님이 AX SELLER ★★★★를 취득했습니다"
토스트 5: "○○교육청 관내 학교 3곳이 PAIAX와 함께합니다"
```

**CTA 플로팅 토스트 (스크롤 30% 이후 등장):**
```
우하단 고정, 기존 토스트 위에 위치
배경: gold, 텍스트: navy
내용: "1분 무료 진단 → 귀 기관에 무엇이 가능한지 확인하기"
클릭 시 S9 CTA 섹션으로 스크롤
```

---

### 2. /certification 페이지

```
Hero:
  배경: #080E1C
  헤드라인: "AI를 안다는 인증서는 넘쳐납니다. 실제로 만들었다는 인증은 세상에 없었습니다."
  서브: 미슐랭 비유 설명
  
5단계 인증 상세 (각 카드 클릭 시 하단 펼침):
  ★ STARTER / ★★ ASSEMBLER / ★★★ BUILDER / ★★★★ SELLER / ★★★★★ ARCHITECT
  각 카드: 취득 조건 · 비유 · 기간 · 형태

대상별 취득 경로 4열:
  개인 / 기업·단체 / 학교·교육청 / 대학교
  각 열: 취득 경로 + CTA 버튼

CTA:
  "★ AX STARTER — 1~2일이면 취득 가능합니다"
```

---

### 3. /admin 페이지 (AI 콘텐츠 편집기)

```
비밀번호 보호 (환경변수 ADMIN_PASSWORD)

3열 레이아웃:
  좌: 섹션 선택 목록 (Hero/Stats/가능성/대상별/인증/실적/CTA)
  중: AI 편집 영역
      - 현재 내용 표시
      - 수정 요청 입력창
      - [AI 생성] 버튼 → Claude API 호출
      - 생성 결과 미리보기
      - [적용] 버튼 → Supabase 저장
  우: 실시간 미리보기

Claude API 시스템 프롬프트:
  "PAIAX 실용인공지능협회 웹사이트 편집자입니다.
   절대 사용 금지: 교육, 과정, 수업, 강의, 커리큘럼
   대신 사용: 만들다, 결과물, 가능합니다, 실제, 실적
   권위 있는 협회의 절제된 언어를 유지합니다."
```

---

## 컴포넌트 구조

```
/components
  /sections
    Nav.tsx           ← 고정 네비게이션
    Hero.tsx          ← S1 Hero
    Stats.tsx         ← S2 Stats bar
    Fatigue.tsx       ← S3 AI 피로감 + 체크리스트
    Possible.tsx      ← S4 무엇이 가능한가
    Targets.tsx       ← S5 대상별 탭
    Certification.tsx ← S6 인증 미리보기
    Results.tsx       ← S7 실적
    Leadership.tsx    ← S8 리더십
    CTA.tsx           ← S9 CTA
  /ui
    LiveToast.tsx     ← 활동 알림 토스트
    CTAToast.tsx      ← 플로팅 CTA 토스트
    PhotoPlaceholder.tsx
    TabSwitcher.tsx
    CountUp.tsx
    RevealOnScroll.tsx
/app
  /page.tsx
  /certification/page.tsx
  /admin/page.tsx
  /api/admin/generate/route.ts
  /api/content/route.ts
```

---

## 추가 구현 요청 사항

1. **반응형:** 모바일 768px 이하에서 1열 레이아웃으로 전환
2. **SEO:** 각 페이지 메타태그 (title, description, og:image)
3. **성능:** 이미지 Next.js Image 컴포넌트 사용, 폰트 preload
4. **접근성:** aria-label, 키보드 네비게이션 지원
5. **환경변수:**
   NEXT_PUBLIC_SUPABASE_URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY
   SUPABASE_SERVICE_ROLE_KEY
   ANTHROPIC_API_KEY
   ADMIN_PASSWORD
