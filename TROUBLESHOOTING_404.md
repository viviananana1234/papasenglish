# GitHub Pages 404 해결 가이드

## "There isn't a GitHub Pages site here" 오류 원인

### 1. GitHub Pages Source 설정

**해결 방법:**

1. https://github.com/viviananana1234/papasenglish 접속
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Build and deployment** 섹션에서:
   - **Source**: **GitHub Actions** 선택
5. Save 후 1~2분 기다리기

이 프로젝트는 공식 `actions/deploy-pages` 워크플로우를 사용합니다. Source를 **GitHub Actions**로 설정해야 합니다.

---

### 2. 워크플로우가 실행되지 않았거나 실패함

**확인 방법:**

1. https://github.com/viviananana1234/papasenglish/actions 접속
2. **Deploy to GitHub Pages** 워크플로우 실행 내역 확인
3. 최근 실행이 **초록색(성공)**인지 확인
4. **빨간색(실패)**이면 클릭해 에러 로그 확인

**실패 시:** `main` 브랜치에 다시 푸시하면 워크플로우가 재실행됩니다.

---

### 3. 잘못된 URL 접속

**올바른 URL:**
- https://viviananana1234.github.io/papasenglish/
- 끝에 **슬래시(/) 가 있어야 합니다**
- `papasenglish`는 **저장소 이름**과 동일해야 합니다

**잘못된 예:**
- https://viviananana1234.github.io/ (사용자 페이지)
- https://viviananana1234.github.io/papas-english/ (저장소명 불일치)

---

### 4. 배포가 아직 완료되지 않음

푸시 후 **1~3분** 정도 소요될 수 있습니다. 잠시 후 새로고침하세요.

---

## 최근 수정 (공식 deploy-pages 적용)

- `peaceiris/actions-gh-pages` 대신 `actions/deploy-pages`로 전환했습니다.
- Settings > Pages에서 Source를 **GitHub Actions**로 설정하세요.

## 체크리스트

- [ ] Settings > Pages에서 Source가 **GitHub Actions**
- [ ] Actions 탭에서 "Deploy to GitHub Pages" 워크플로우가 **성공**으로 완료됨
- [ ] URL이 `https://viviananana1234.github.io/papasenglish/` 인지 확인
- [ ] `main` 브랜치에 코드가 푸시됨 (푸시 시 자동으로 gh-pages에 빌드 배포)
