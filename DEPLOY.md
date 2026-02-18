# 用 GitHub Pages 發布你的自我介紹網站

照下面步驟做，就能得到一個專屬網址（例如 `https://你的帳號.github.io/intro-site/`）。

---

## 第一步：註冊／登入 GitHub

1. 打開 **https://github.com**
2. 若沒有帳號，點 **Sign up** 註冊；已有帳號則 **Sign in** 登入。

---

## 第二步：建立一個新的 Repository（倉庫）

1. 登入後，點右上角 **+** → **New repository**
2. 填寫：
   - **Repository name**：輸入 `intro-site`（或你喜歡的名稱）
   - **Description**：可填「嘉晃的自我介紹網站」（選填）
   - 選擇 **Public**
   - **不要**勾選 "Add a README file"
3. 點 **Create repository**

---

## 第三步：上傳網站檔案

GitHub 會顯示新倉庫的頁面，用下面其中一種方式上傳即可。

### 方式 A：用網頁直接上傳（不用安裝 Git）

1. 在倉庫頁面點 **uploading an existing file**（或 **Add file** → **Upload files**）
2. 把這三個檔案**拖進**網頁：
   - `index.html`
   - `styles.css`
   - `script.js`
3. 下方 **Commit message** 可填：`第一次上傳網站`
4. 點 **Commit changes**

### 方式 B：已安裝 Git，用指令上傳

在終端機（PowerShell 或命令提示字元）執行：

```bash
cd "c:\Users\88691\OneDrive\桌面\intro-site"
git init
git add index.html styles.css script.js .gitignore
git commit -m "第一次上傳網站"
git branch -M main
git remote add origin https://github.com/你的帳號/intro-site.git
git push -u origin main
```

（把 `你的帳號` 換成你的 GitHub 使用者名稱；推送時會要求登入 GitHub。）

---

## 第四步：開啟 GitHub Pages

1. 在該倉庫頁面點上方 **Settings**
2. 左側選 **Pages**
3. 在 **Build and deployment** 底下：
   - **Source** 選 **Deploy from a branch**
   - **Branch** 選 **main**，資料夾選 **/ (root)**
   - 點 **Save**
4. 等 1～2 分鐘，頁面會顯示綠框與網址，例如：
   - **Your site is live at** `https://你的帳號.github.io/intro-site/`

---

## 之後要更新網站

- **方式 A**：在 GitHub 倉庫裡點進檔案 → **Edit** → 改完後 **Commit changes**，幾分鐘後網站會自動更新。
- **方式 B**：在專案資料夾改完檔案後，執行：
  ```bash
  git add .
  git commit -m "更新內容"
  git push
  ```

---

完成後，你的自我介紹網站就會有專屬網址，可以分享給別人。
