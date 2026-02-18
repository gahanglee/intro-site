# 這些 Git 指令是什麼意思？

下面每一行都是一個**指令**，要依序在終端機（PowerShell 或命令提示字元）裡執行。  
把 **你的帳號** 換成你在 GitHub 的**使用者名稱**（例如 `gahanglee`）。

---

## 逐行說明

| 指令 | 白話意思 |
|------|----------|
| `cd "c:\Users\88691\OneDrive\桌面\intro-site"` | **切換到**你的網站專案資料夾，讓後面的指令都在這個資料夾裡執行。 |
| `git init` | 在這個資料夾裡**建立一個 Git 倉庫**（開始被 Git 追蹤、記錄變更）。 |
| `git add index.html styles.css script.js` | 把這三個檔案**加入「待上傳清單」**，表示這次要上傳它們。 |
| `git commit -m "第一次上傳"` | 把待上傳的檔案**打包成一次「提交」**，並寫下說明「第一次上傳」（`-m` 後面就是說明文字）。 |
| `git branch -M main` | 把目前的分支**命名為 main**（GitHub 預設用 `main` 當主分支）。 |
| `git remote add origin https://github.com/你的帳號/intro-site.git` | **設定遠端**：告訴電腦「要上傳到哪一個 GitHub 倉庫」，`origin` 是這個遠端的代號，網址要換成你的帳號與倉庫名。 |
| `git push -u origin main` | **真的上傳**：把本機的 `main` 分支推到 GitHub 的 `origin`；`-u` 是「之後只要打 `git push` 就會推到這裡」的意思。 |

---

## 整體在做什麼？

1. 進入你的專案資料夾  
2. 讓這個資料夾被 Git 管理  
3. 選定要上傳的檔案（index.html、styles.css、script.js）  
4. 做一次「提交」（像存一個檢查點）  
5. 把主分支取名為 main  
6. 告訴 Git「我的 GitHub 倉庫網址是這個」  
7. 把本機的內容推送到 GitHub  

做完之後，你電腦裡的這個專案就**連到** GitHub 上的那個倉庫，之後要更新只要用「之後每次」那三行指令即可。

---

## 實際範例（假設你的 GitHub 帳號是 gahanglee）

你要在終端機裡打的就會是：

```
cd "c:\Users\88691\OneDrive\桌面\intro-site"
git init
git add index.html styles.css script.js
git commit -m "第一次上傳"
git branch -M main
git remote add origin https://github.com/gahanglee/intro-site.git
git push -u origin main
```

**注意**：`intro-site` 要和你當初在 GitHub 建立的**倉庫名稱**一樣；若你建的是別的名字（例如 `my-website`），就把網址裡的 `intro-site` 改成那個名字。
