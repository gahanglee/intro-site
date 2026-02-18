# 第一次用 Git 上傳 — 一步步做

## 「你的帳號」是什麼？

**你的帳號** = 你在 GitHub 的**使用者名稱**。

- 登入 GitHub 後，點右上角自己的頭像，會看到你的 **Username**。
- 或打開 **https://github.com**，登入後右上角顯示的名字就是。
- 例如：若你的 GitHub 網址是 `https://github.com/gahanglee`，那 **你的帳號** 就是 **gahanglee**。

只有**一處**要替換：`https://github.com/你的帳號/intro-site.git` 裡面的 **你的帳號**，換成上面這個英文帳號。

---

## 第一步：安裝 Git（若還沒裝）

1. 打開 **https://git-scm.com/download/win**
2. 下載並執行安裝檔，一直按 **Next** 用預設即可。
3. 安裝完**關掉 Cursor**，再重新打開 Cursor（或重開電腦）。

---

## 第二步：在 Cursor 裡打開終端機

1. 在 Cursor 裡打開你的專案（`intro-site` 資料夾）。
2. 按鍵盤 **Ctrl + `**（反引號，在 Esc 下面），或點上方選單 **終端機 → 新增終端機**。
3. 底下會出現一個可以打字的**終端機**視窗。

---

## 第三步：依序貼上指令（一次一行或整段）

在終端機裡**依序**輸入或貼上下面每一行，每行結束按 **Enter**。

**第 1 行**（先進入專案資料夾）：
```powershell
cd "c:\Users\88691\OneDrive\桌面\intro-site"
```

**第 2 行**：
```powershell
git init
```

**第 3 行**：
```powershell
git add index.html styles.css script.js
```

**第 4 行**：
```powershell
git commit -m "第一次上傳"
```

**第 5 行**：
```powershell
git branch -M main
```

**第 6 行**（這裡要把 `你的帳號` 換掉！）  
例如你的 GitHub 帳號是 **gahanglee**，就打成：
```powershell
git remote add origin https://github.com/gahanglee/intro-site.git
```
（若你的倉庫名稱不是 `intro-site`，把網址裡的 `intro-site` 改成你實際的倉庫名。）

**第 7 行**：
```powershell
git push -u origin main
```

按 Enter 後，可能會跳出視窗要你**登入 GitHub**（瀏覽器或彈窗），照著登入即可。完成後，本機的檔案就會上傳到 GitHub。

---

## 若出現「已經有檔案在 GitHub」的錯誤

若你之前用網頁上傳過這個倉庫，第 7 行 `git push` 有時會失敗。改做：

先執行：
```powershell
git pull origin main --allow-unrelated-histories
```

若有問 commit message，直接關掉或輸入 `:q` 再 Enter。接著再執行：
```powershell
git push -u origin main
```

---

## 做完之後

- **第一次**設定就完成了。
- 之後要同步，只要在同樣的終端機（或先 `cd` 到同一個資料夾）執行：
  ```powershell
  git add .
  git commit -m "更新網站"
  git push
  ```

有哪一步卡住，把終端機顯示的錯誤訊息複製給我，我可以幫你看。
