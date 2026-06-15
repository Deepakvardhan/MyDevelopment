# VelumSky Weather App

A modern, elegant weather dashboard that displays current conditions and a 5‑day forecast based on your IP address. No manual location input needed – just click a button and get instant weather data for your area.

![VelumSky Screenshot](weather-working.png)  
*(Replace `weather-working.png` with your actual screenshot file name)*

---

## ✨ Features

- **Automatic location detection** – Uses your public IP address to get country, region, city, coordinates, ISP, and timezone.
- **Current weather conditions** – Temperature, cloud cover, wind speed/direction, rainfall, and day/night status with an icon.
- **5‑day forecast** – Daily maximum and minimum apparent temperatures.
- **Responsive design** – Works on desktop and mobile devices with flexible cards and gradients.
- **Clean, glass‑morphism UI** – Gradient backgrounds, rounded corners, and a modern colour palette.

---

## 🛠️ Technologies Used

- **HTML5** – Page structure
- **CSS3** – Styling, gradients, flexbox layout
- **JavaScript (ES6)** – Fetch API, DOM manipulation, async/await
- **ipwhois.app** – Free IP geolocation (HTTPS, CORS‑enabled)
- **Open‑Meteo** – Free weather forecast API (HTTPS)

---

## 📦 APIs Used

| API | Endpoint | Purpose |
|-----|----------|---------|
| ipwhois.app | `https://ipwhois.app/json/` | Get location, coordinates, ISP, timezone |
| Open‑Meteo | `https://api.open-meteo.com/v1/forecast` | Current weather + daily forecast (past 3 days / future 7 days) |

> **Note**: Both APIs use HTTPS and support CORS, so the app works perfectly on GitHub Pages, Vercel, Netlify, or any HTTPS host.

---

## 🚀 Setup & Usage

### 1. Download the files

Save these three files in the same folder:

- `index.html` (rename `weather.html` to `index.html` if needed)
- `weather_style.css`
- `weather_script.js`

### 2. Open the application

Simply double‑click `index.html` to open it in your web browser.  
No build steps, servers, or API keys are required – both APIs are completely free for non‑commercial use.

### 3. Get weather data

- Click the **“Get Weather”** button.
- Wait a moment while the app fetches your location and then the weather data.
- All cards will update with live information.

> **Important**: If nothing happens, check the browser’s developer console (F12) for errors.

---

## 📁 File Structure
velumsky-weather/
│
├── index.html # Main HTML structure
├── weather_style.css # All styling & responsive rules
├── weather_script.js # Fetch logic, DOM updates, forecast calculation
└── weather-working.png # Screenshot (optional)



## ⚠️ Known Issues

### Rate Limiting
- **ipwhois.app** allows 10,000 requests per month (free tier) – plenty for personal use.
- **Open‑Meteo** is very generous, but rapid repeated clicks may cause temporary delays.

### Forecast Range
The 5‑day forecast shown is **not** strictly “next 5 days”. Because the API includes past 3 days, the script displays the 5 days starting from 2 days before today. This was a design choice to show recent past weather as a reference.

### Missing Weather Icons
Only the current day/night icon is displayed. Forecast icons are commented out in the HTML – you can uncomment them and add logic using `weather_code` from the API.

---

## 🔧 Future Improvements

- [ ] Add icons for each forecast day using Open‑Meteo’s `weather_code`.
- [ ] Use browser geolocation (`navigator.geolocation`) for more precise coordinates.
- [ ] Show additional weather parameters (humidity, pressure, UV index).
- [ ] Add a loading spinner while fetching data.
- [ ] Improve error handling with user‑friendly messages.

---

## 📄 License

This project is open source and available under the **MIT License**.  
You are free to use, modify, and distribute it for personal or commercial purposes.

---

## 🙏 Acknowledgements

- [ipwhois.app](https://ipwhois.app) – Free IP geolocation (HTTPS + CORS)
- [Open‑Meteo](https://open-meteo.com) – Free weather data
- Icons by [Meteocons](https://github.com/basmilius/weather-icons) – used under the MIT license



**Enjoy checking what the clouds are up to – right here, right now!** ☁️🌦️