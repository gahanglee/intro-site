# 如何更新網站並同步到 GitHub

更新網站後，用下面其中一種方式把變更同步到 GitHub，你的 GitHub Pages 網址就會顯示最新內容。

---

## 方式一：在 GitHub 網頁上直接改（不用裝軟體）

適合：小改幾個字、改一個檔案。

1. 打開你的倉庫：**https://github.com/你的帳號/intro-site**
2. 點進要改的檔案（例如 `index.html` 或 `styles.css`）
3. 點右上角 **鉛筆圖示（Edit this file）**
4. 在網頁上修改內容
5. 往下捲，**Commit message** 填：`更新網站內容`（或簡短說明）
6. 點 **Commit changes**

幾分鐘後重新整理你的 **https://你的帳號.github.io/intro-site/** 就會看到更新。

---

## 方式二：本機改完再上傳（用網頁上傳檔案）

適合：在 Cursor 裡改了很多檔案，想整批換掉 GitHub 上的版本。

1. 在 Cursor 裡改好 **桌面 → OneDrive → 桌面 → intro-site** 裡的檔案並存檔。
2. 打開倉庫：**https://github.com/你的帳號/intro-site**
3. 點進要換的檔案（例如 `index.html`）
4. 點 **Edit this file（鉛筆）**
5. **全選**網頁裡的舊程式碼（Ctrl+A），**刪掉**，再從本機的 `index.html` **複製全部**貼上。
6. 點 **Commit changes**。
7. 對 `styles.css`、`script.js` 重複步驟 3～6（有改的才需要）。

這樣本機的更新就同步到 GitHub，Pages 會自動用新檔案。

---

## 方式三：用 Git 指令同步（需先安裝 Git）

適合：常常改、想用指令一次推送所有變更。

### 1. 安裝 Git

1. 到 **https://git-scm.com/download/win** 下載 Windows 版
2. 安裝時可全部用預設選項，完成後**關掉 Cursor 再重開**（或重開 PowerShell）

### 2. 第一次設定：把本機資料夾連到 GitHub

在 **PowerShell** 或 **終端機** 裡依序執行（把 `你的帳號` 改成你的 GitHub 使用者名稱）：

```powershell
cd "c:\Users\88691\OneDrive\桌面\intro-site"
git init
git add index.html styles.css script.js
git commit -m "第一次上傳"
git branch -M main
git remote add origin https://github.com/你的帳號/intro-site.git
git push -u origin main
```

若 GitHub 已有檔案（例如你之前用網頁上傳過），可能會要你先拉再推：

```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### 3. 之後每次更新網站並同步

在 Cursor 改完檔案並存檔後，到同一個資料夾執行：

```powershell
cd "c:\Users\88691\OneDrive\桌面\intro-site"
git add .
git commit -m "更新網站"
git push
```

執行完就同步到 GitHub，幾分鐘內 GitHub Pages 會更新。

---

## 總結

| 方式 | 何時用 |
|------|--------|
| **方式一** | 只改一點點，直接在 GitHub 網頁改 |
| **方式二** | 在本機改了很多，用複製貼上換掉 GitHub 上的檔案 |
| **方式三** | 已安裝 Git，用 `git add` → `git commit` → `git push` 一次同步 |

同步完成後，記得重新整理你的 **https://你的帳號.github.io/intro-site/** 查看結果。
