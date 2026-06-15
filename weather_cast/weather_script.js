

let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch("https://ipwhois.app/json/")
        .then((data) => {
            return data.json()
                .then(res => {
                    let city = res.city;
                    let country = res.country;
                    let region = res.region;
                    let isp = res.isp;
                    let lat = res.latitude;
                    let lon = res.longitude;




                    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max&models=best_match&current=temperature_2m,is_day,rain,weather_code,wind_speed_10m,wind_direction_10m,cloud_cover&timezone=auto&past_days=3&forecast_days=7`)
                        .then((data) => {
                            return data.json();
                        })
                        .then((res) => {
                            let presentTemp = res.current.temperature_2m;
                            let cloudCoverage = res.current.cloud_cover;
                            let windSpeed = res.current.wind_speed_10m;
                            let winddirection = res.current.wind_direction_10m;
                            let rain = res.current.rain;
                            let isDay = res.current.is_day;
                            let timezone = res.timezone;
                            let zone = res.timezone_abbreviation;


                            // console.log(res);


                            //Data for the first fetch 
                            let CountryName = document.querySelector("#countryname");
                            CountryName.innerText = `Country: ${country}`;

                            let CityName = document.querySelector("#cityname");
                            CityName.innerText = `City: ${city}`;

                            let RegionName = document.querySelector("#regionname");
                            RegionName.innerText = `Region: ${region}`;

                            let IspName = document.querySelector("#isp");
                            IspName.innerText = `ISP: ${isp}`;

                            let LatName = document.querySelector("#latitude");
                            LatName.innerText = `Latitude: ${lat}`;

                            let LonName = document.querySelector("#longitude");
                            LonName.innerText = `Longitude: ${lon}`;

                            let TimezoneName = document.querySelector("#timezone");
                            TimezoneName.innerText = `Timezone: ${timezone}   ${zone}`;





                            let PresentTemp = document.querySelector("#current_temp");
                            PresentTemp.innerText = `Present Temperature:${presentTemp}°C`;

                            let cloudarea = document.querySelector("#cloud_area");
                            cloudarea.innerText = `Cloud Coverage:${cloudCoverage}%`;

                            let Windspeed = document.querySelector("#wind_speed");
                            Windspeed.innerText = `Wind Speed:${windSpeed} Km/H`;

                            let Rain = document.querySelector("#rain");
                            Rain.innerText = `Rain:${rain} mm`;

                            let isday = document.querySelector("#is_day");
                            let addimg = document.querySelector("#img1");
                            if (isDay == 1) {
                                addimg.src = "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/clear-day.svg";
                                addimg.alt = "day";
                                isday.innerText = 'Day';
                            }

                            if (isDay == 0) {
                                addimg.src = "https://cdn.meteocons.com/3.0.0-next.10/svg/fill/clear-night.svg"
                                addimg.alt = 'night';
                                isday.innerText = 'Night';
                            }


                            let Winddirection = document.querySelector("#wind_direction");
                            if (winddirection == 0 || winddirection == 360) {
                                Winddirection.innerText = `Wind Direction:${winddirection} °(degrees) N`;
                            }
                            else if (winddirection > 0 && winddirection < 90) {
                                Winddirection.innerText = `Wind Direction:${winddirection} °(degrees) NE`;
                            }
                            else if (winddirection == 90) {
                                Winddirection.innerText = `Wind Direction:${winddirection} °(degrees) E`;
                            }
                            else if (winddirection > 90 && winddirection < 180) {
                                Winddirection.innerText = `Wind Direction:${winddirection} °(degrees) SE`;
                            }
                            else if (winddirection == 180) {
                                Winddirection.innerText = `Wind Direction:${winddirection} °(degrees) S`;
                            }
                            else if (winddirection > 180 && winddirection < 270) {
                                Winddirection.innerText = `Wind Direction:${winddirection} °(degrees) SW`;
                            }
                            else if (winddirection == 270) {
                                Winddirection.innerText = `Wind Direction:${winddirection} °(degrees) W`;
                            }
                            else if (winddirection > 270 && winddirection < 360) {
                                Winddirection.innerText = `Wind Direction:${winddirection} °(degrees) NW`;
                            }


                            let todaydate = res.current.time.slice(0, 10);
                            const groupdates = res.daily.time;
                            const PresentDateIndex = groupdates.indexOf(todaydate);

                            const groupmaxtemp = res.daily.apparent_temperature_max;
                            const groupmintemp = res.daily.apparent_temperature_min;

                            let iter = PresentDateIndex - 2;




                            for (let day = 0; day < 5; day += 1) {

                                let date = document.querySelector(`#day${day + 1}_date`);
                                date.innerText = `Date:${groupdates[iter + day]}`;

                                let maxtemp = document.querySelector(`#day${day + 1}_max_temp`);
                                maxtemp.innerText = `Max Temperature: ${groupmaxtemp[iter + day]}°C`;

                                let mintemp = document.querySelector(`#day${day + 1}_min_temp`);
                                mintemp.innerText = `Min Temperature: ${groupmintemp[iter + day]}°C`;

                            }




                        })
                        .catch((err) => {
                            console.log("rejected", err);
                        })
                })
        })
        .catch((err) => {
            console.log("rejected", err);
        })

})









