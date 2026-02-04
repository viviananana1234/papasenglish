# Papa's Daily English

하루 한 장 영어 카드를 배달해주는 학습 앱입니다.

## 기능

- **온보딩**: 앱 실행 시 Papa 애니메이션과 함께 환영 화면
- **오늘의 카드**: 32장의 카드를 랜덤 순서로 탐색, 탭하여 뒤집기
- **Next Card**: 다음 카드로 넘어가기
- **퀴즈**: 무한 4지선다 퀴즈 (PASS, NEXT 지원)

## 로컬 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## GitHub Pages 배포

### 1. 저장소 생성 및 푸시

```bash
git init
git add .
git commit -m "Initial commit: Papa's Daily English"
git branch -M main
git remote add origin https://github.com/viviananana1234/papasenglish.git
git push -u origin main
```

### 2. GitHub 설정

1. 저장소 **Settings** → **Pages**
2. **Source**: GitHub Actions 선택
3. `main` 브랜치에 푸시 시 자동 배포

### 3. 접속 URL

https://viviananana1234.github.io/papasenglish/

## 프로젝트 구조

```
├── public/images/cards/   # 카드 이미지 (card1.jpg.jpg ~ card32.jpg.jpg)
├── src/
│   ├── components/        # Onboarding, DailyCard, FlipCard, Quiz
│   ├── data/cards.js      # 카드 데이터
│   ├── utils/dailyCard.js # 랜덤 순서, 세션 카드 로직
│   └── App.jsx
└── .github/workflows/deploy.yml  # GitHub Pages 자동 배포
```
