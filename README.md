# 🌍 Atlas API Pro

A dynamic, interactive, and responsive web application that fetches data from the **REST Countries API** to present detailed information about countries worldwide. This project features direct interactive Google Maps embeds, real-time search, and the ability to seamlessly browse to neighboring country details by clicking their borders.

---

## 🚀 Features

* **Dynamic Home Screen**: Showcases popular pre-selected countries upon load.
* **Instant Smart Search**: Filter and search through countries in real-time as you type.
* **Detailed Country Cards**: Displays essential data including:
  * Official Flag
  * Capital City
  * Population Count
  * Languages Spoken
* **Google Maps Integration**: Automatically embeds a live Google Map of the country's geographical location (`latlng`).
* **Interactive Neighbors (Borders)**: Click on any neighboring country's border code to instantly navigate and view their detailed card.
* **Sleek Loading Screen**: Provides a beautiful visual loading feedback during API calls.
* **Bootstrap-powered Design**: Styled cleanly with Bootstrap 5 to look premium and fully responsive.

---

## 🛠️ API & The CORS Update

The application fetches data from the [REST Countries API (v3.1)](https://restcountries.com/). 

### ⚠️ Critical Update (REST Countries API limits)
The REST Countries API enforces a policy on their `/all` endpoint where **you must specify the exact fields you want to retrieve** (up to a maximum of 10 fields) to prevent server overload and `400 Bad Request` errors.

To address this, our API query explicitly requests only the 8 required fields needed by the application:
```javascript
let url = `https://restcountries.com/v3.1/all?fields=name,flags,population,capital,languages,latlng,borders,cca3`
```

---

## 💻 כיצד להפעיל את הפרויקט (How to Run)

מכיוון שהפרויקט משתמש ב-**JavaScript Modules** (`type="module"`), דפדפנים מודרניים יחסמו את הפעלתו ישירות מהמחשב (בלחיצה כפולה על קובץ ה-`index.html`) מטעמי אבטחת CORS. 
לכן, **חובה להריץ את הפרויקט באמצעות שרת מקומי**.

להלן שתי הדרכים הקלות ביותר להפעיל את הפרויקט:

### דרך א': שימוש בתוסף Live Server ב-VS Code (מומלץ)
1. פתח את תיקיית הפרויקט בתוך **VS Code**.
2. התקן את התוסף **Live Server** (על ידי Ritwick Dey) דרך חנות התוספים (`Ctrl+Shift+X`).
3. פתח את הקובץ `index.html`.
4. לחץ לחיצה ימנית על הקוד ובחר באפשרות **Open with Live Server** (או לחץ על הכפתור **Go Live** בפינה הימנית התחתונה של מסך ה-VS Code).
5. האתר ייפתח אוטומטית בדפדפן בכתובת המאובטחת: `http://127.0.0.1:5500/index.html`.

### דרך ב': הרצה מהירה דרך הטרמינל (באמצעות Node.js או Python)
פתח את הטרמינל בתיקיית הפרויקט והרץ את אחת מהפקודות הבאות:

* **אם מותקן Node.js במחשב:**
  ```bash
  npx serve
  ```
* **אם מותקן Python במחשב:**
  ```bash
  python -m http.server 8000
  ```
לאחר מכן פתח את הדפדפן והיכנס לכתובת שתוצג בטרמינל (לדוגמה `http://localhost:3000` או `http://localhost:8000`).

---

## 📂 Project Structure

```bash
├── index.html          # Main HTML entry point & Navigation Bar
├── style.css           # Custom styling overrides
├── API.js              # Fetching logic, API handling & main events
├── CountryClass.js     # ES6 Class to construct and render country cards
├── israelData.json     # Local backup of country data
└── lowdingif.gif       # Loading animation asset
```

---

*Developed with ❤️ as a modern Full Stack practice project.*
