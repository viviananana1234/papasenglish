# Papa's Daily English - 배포 가이드

## 1. Vercel (추천, 가장 간단)

1. [vercel.com](https://vercel.com) 가입
2. 프로젝트 폴더를 GitHub에 푸시
3. Vercel에서 **Import Project** → GitHub 저장소 연결
4. 자동 감지 후 **Deploy** 클릭

**로컬에서 배포하려면** (Node.js 설치 필요):
```bash
npm install
npx vercel
```

---

## 2. Netlify

1. [netlify.com](https://netlify.com) 가입
2. **Add new site** → **Import an existing project**
3. GitHub 저장소 연결
4. Build command: `npm run build`, Publish directory: `dist`

---

## 3. GitHub Pages

1. 이 프로젝트를 GitHub 저장소에 푸시
2. 저장소 **Settings** → **Pages**
3. Source: **GitHub Actions** 선택
4. `main` 또는 `master` 브랜치에 푸시하면 자동 빌드 및 배포

배포 후 URL: `https://[사용자명].github.io/[저장소명]/`

---

## 4. 로컬 빌드 (Node.js 필요)

```bash
npm install
npm run build
```

생성된 `dist/` 폴더를 원하는 호스팅에 업로드하면 됩니다.
