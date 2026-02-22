# 上傳至 GitHub.com

此專案已連結到：**https://github.com/gahanglee/intro-site**

## 在 Cursor 裡改完後上傳步驟

1. **在 Cursor 開啟這個資料夾**（才能改「GitHub 那份」）  
   - 選單：**檔案 → 開啟資料夾**  
   - 選：`C:\Users\88691\GitHub\intro-site`

2. **改完程式後，在終端機執行：**
   ```powershell
   cd C:\Users\88691\GitHub\intro-site
   git add .
   git commit -m "說明你改了什麼"
   git push origin main
   ```

3. 到 **https://github.com/gahanglee/intro-site** 重新整理即可看到更新。

---

## 在 GitHub 網站上改完後，拉回本機

如果你在 **GitHub.com** 上直接編輯檔案並 commit，要讓 `C:\Users\88691\GitHub\intro-site` 同步到最新：

在終端機執行：
```powershell
cd C:\Users\88691\GitHub\intro-site
git pull origin main
```

之後 Cursor 裡開啟的該資料夾就會是最新內容。

---
*若 push 時要求登入，請用 GitHub 帳號或 Personal Access Token。*
