# 📅 EventoPedia – Discover Special Days, Festivals & Holidays!

**EventoPedia** is a clean and modern web application that helps users find special days, festivals, and national/international holidays by selecting any date.

## 🔍 Features
- 📆 Search holidays by selecting any date
- 🌎 Country-based holiday info (currently set to India 🇮🇳)
- 🧊 Modern, responsive UI with glassmorphism design
- ⚡ Fast and lightweight (HTML, CSS, JavaScript)
- 🔌 Uses [Abstract Public Holidays API](https://www.abstractapi.com/holidays-api)

## 🚀 Live Preview
Coming soon... (or deploy with GitHub Pages / Netlify)

## 📸 Screenshot
![screenshot](screenshot.png) <!-- Replace with actual screenshot file -->

## 🛠️ Tech Stack
- HTML5
- CSS3 (with modern UI styling)
- Vanilla JavaScript (ES6+)
- AbstractAPI for holiday data

## 🔑 API Setup
1. Create an account on [Abstract API](https://www.abstractapi.com/holidays-api)
2. Get your free API key
3. Replace the key in `script.js`:
```js
const url = `https://holidays.abstractapi.com/v1/?api_key=YOUR_API_KEY&country=IN&year=...`;
