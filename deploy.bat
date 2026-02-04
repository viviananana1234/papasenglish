@echo off
cd /d c:\Users\KDM\Cursor

echo ==========================================
echo [ Papa's Daily English 배포를 시작합니다 ]
echo ==========================================

if not exist .git (
  echo [최초 배포] Git 초기화 중...
  git init
  git branch -M main
  git remote add origin https://github.com/viviananana1234/papasenglish.git
  git add .
  git commit -m "Papa's Daily English - Initial commit"
  git push -u origin main
) else (
  git add .
  git commit -m "Deploy: Papa's Daily English update"
  git push origin main
)

echo ==========================================
echo [ 배포 완료 ]
echo https://viviananana1234.github.io/papasenglish/
echo ==========================================
pause