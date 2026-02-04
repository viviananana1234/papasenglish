# GitHub 배포 가이드

## 배포 후 접속 URL

https://viviananana1234.github.io/papasenglish/

---

## 1. Git 설치

[git-scm.com](https://git-scm.com) 에서 Git을 설치한 뒤 터미널을 **재시작**하세요.

---

## 2. 최초 배포

**방법 A** – `deploy.bat` 더블클릭 (가장 간단)

**방법 B** – 터미널에서 수동 실행:

```bash
cd c:\Users\KDM\Cursor
deploy.bat
```

**방법 C** – 명령어 직접 입력:

```bash
cd c:\Users\KDM\Cursor
git init
git add .
git commit -m "Papa's Daily English - Initial commit"
git branch -M main
git remote add origin https://github.com/viviananana1234/papasenglish.git
git push -u origin main
```

*기존 저장소에 다른 파일이 있으면 충돌이 날 수 있습니다. 이 경우 `git push -u origin main --force`로 덮어쓸 수 있습니다 (기존 내용 삭제됨).*

---

## 3. 이후 업데이트 배포

```bash
cd c:\Users\KDM\Cursor
git add .
git commit -m "Update"
git push origin main
```

또는 `deploy.bat` 파일을 더블클릭하여 실행하세요.

---

## 4. GitHub Pages 설정

1. https://github.com/viviananana1234/papasenglish 접속
2. **Settings** → **Pages**
3. **Source**: **Deploy from a branch** 선택
4. **Branch**: **gh-pages** / **/(root)** 선택 후 Save
5. `main` 브랜치에 푸시하면 자동으로 빌드 후 gh-pages에 배포됩니다.
