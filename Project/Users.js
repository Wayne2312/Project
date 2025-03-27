#!/home/wayne/Downloads/node-v20.18.3-linux-x64/bin/node
/*let weatherapi_container = document.getElementById("weatherapi-weather-widget-3");
weatherapi_container.innerHTML = `
    <link rel='stylesheet' href='//cdn.weatherapi.com/weather-widget/weather.css' type='text/css' media='all' />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149630039-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-149630039-1');
    </script>
    <aside id="weatherapiweatherwidget-2" class="widget widget_weatherapiweatherwidget">
        <div id="weatherapi-weather-london-city-of-london-greater-london-united-kingdom" 
            class="weatherapi-weather-wrap awecf awe_wide awe_without_stats awe-code-1183 awe-desc-rain shm_4 scheme_43">
            <div class="weatherapi-weather-cover">
                <!-- Location -->
                <div class="weatherapi-weather-todays-stats-location">
                    <div class="awe_desc">Nairobi</div>
                </div>
                
                <!-- Current Weather -->
                <div class="weatherapi-weather-todays-stats-big-pict">
                    <img src="//cdn.weatherapi.com/weather/128x128/day/116.png" 
                        alt="Weather is Partly cloudy" 
                        title="Weather is Partly cloudy" />
                    <span class="weatherapi_descr">Partly cloudy</span>
                </div>
                
                <!-- Additional Stats -->
                <div class="weatherapi-weather-todays-stats-location">
                    <div class="weatherapi_descr">Wind: 21.2 kmph</div>
                    <span class="weatherapi_descr">Precip: 0.07 mm</span>
                    <div class="awe_desc">Pressure: 1019.0 mb</div>
                </div>
                
                <!-- Current Temperature -->
                <div class="weatherapi-weather-current-temp">
                    26.3<span> &deg;c</span>
                </div>
                
                <!-- Weather Forecast -->
                <div class="weatherapi-weather-forecast awe_days_5 awecf">
                    <div class="weatherapi-weather-forecast-day">
                        <div class="weatherapi-weather-forecast-day-abbr">Wed</div>
                        <div class="weatherapi-weather-forecast-day-abbr">
                            <div>
                                <img src="//cdn.weatherapi.com/weather/64x64/day/302.png" 
                                    alt="Moderate rain" 
                                    title="Moderate rain" />
                            </div>
                        </div>
                        <div class="weatherapi-weather-forecast-day-temp">19.4<span> &deg;c</span></div>
                    </div>
                    
                    <div class="weatherapi-weather-forecast-day">
                        <div class="weatherapi-weather-forecast-day-abbr">Thu</div>
                        <div class="weatherapi-weather-forecast-day-abbr">
                            <div>
                                <img src="//cdn.weatherapi.com/weather/64x64/day/302.png" 
                                    alt="Moderate rain" 
                                    title="Moderate rain" />
                            </div>
                        </div>
                        <div class="weatherapi-weather-forecast-day-temp">19.1<span> &deg;c</span></div>
                    </div>
                    
                    <div class="weatherapi-weather-forecast-day">
                        <div class="weatherapi-weather-forecast-day-abbr">Fri</div>
                        <div class="weatherapi-weather-forecast-day-abbr">
                            <div>
                                <img src="//cdn.weatherapi.com/weather/64x64/day/176.png" 
                                    alt="Patchy rain nearby" 
                                    title="Patchy rain nearby" />
                            </div>
                        </div>
                        <div class="weatherapi-weather-forecast-day-temp">17.6<span> &deg;c</span></div>
                    </div>
                    
                    <div class="weatherapi-weather-forecast-day">
                        <div class="weatherapi-weather-forecast-day-abbr">Sat</div>
                        <div class="weatherapi-weather-forecast-day-abbr">
                            <div>
                                <img src="//cdn.weatherapi.com/weather/64x64/day/302.png" 
                                    alt="Moderate rain" 
                                    title="Moderate rain" />
                            </div>
                        </div>
                        <div class="weatherapi-weather-forecast-day-temp">18.8<span> &deg;c</span></div>
                    </div>
                    
                    <div class="weatherapi-weather-forecast-day">
                        <div class="weatherapi-weather-forecast-day-abbr">Sun</div>
                        <div class="weatherapi-weather-forecast-day-abbr">
                            <div>
                                <img src="//cdn.weatherapi.com/weather/64x64/day/302.png" 
                                    alt="Moderate rain" 
                                    title="Moderate rain" />
                            </div>
                        </div>
                        <div class="weatherapi-weather-forecast-day-temp">17.6<span> &deg;c</span></div>
                    </div>
                </div>
            </div> <!-- /.weatherapi-weather-cover -->
            
        </div> <!-- /.weatherapi-weather-wrap -->
    </aside>`;
*/
//constants
/*const userLocation = document.getElementById("userLocation "),

converter = document.getElementById("converter"),
search = document.querySelector(".Search"),
weatherIcon = document.querySelector("weatherIcon"),
temperature = document.querySelector(".temperature"),
feelslike = document.querySelector(".feelslike"),
description = document.querySelector(".description"),
date = document.querySelector(".date"),
city = document.querySelector(".city"),

HValue = document.getElementById("HValue"),
WValue = document.getElementById("WValue"),
SRValue = document.getElementById("SRValue"),
SSValue = document.getElementById("SSValue"),
CValue = document.getElementById("CValue"),
UVValue = document.getElementById("UVValue"),
PValue = document.getElementById("PValue"),

Forecast = document.querySelector(".Forecast");
//function

// Placeholder for future use or initialization of weather data endpoint
const WEATHER_API_ENDPOINT = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=sunrise,sunset,uv_index_max,wind_direction_10m_dominant,daylight_duration,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_hours,sunshine_duration&hourly=temperature_2m,relative_humidity_2m,precipitation,precipitation_probability,cloud_cover,surface_pressure,wind_speed_80m,temperature_120m,visibility,wind_direction_80m&current=temperature_2m,relative_humidity_2m,precipitation,rain,wind_speed_10m,wind_direction_10m,cloud_cover&past_days=3"; 
function findUserLocation() {
    fetch(WEATHER_API_ENDPOINT)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        // Process the data here
        console.log("Weather data processed successfully:", data);
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
    });
}*/  


// Global variables
let currentLocation = "Nairobi";
let currentWeatherData = {};
let hourlyForecastData = {};
let dailyForecastData = {};
let historicalWeatherData = {};
let tempChart, precipChart;

// DOM elements
const locationInput = document.getElementById('location-input');
const searchBtn = document.getElementById('search-btn');
const currentLocationEl = document.getElementById('current-location');
const currentDateEl = document.getElementById('current-date');
const currentTempEl = document.getElementById('current-temp');
const currentDescEl = document.getElementById('current-desc');
const currentIconEl = document.getElementById('current-icon');
const feelsLikeEl = document.getElementById('feels-like');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const pressureEl = document.getElementById('pressure');
const visibilityEl = document.getElementById('visibility');
const cloudCoverEl = document.getElementById('cloud-cover');
const uvIndexEl = document.getElementById('uv-index');
const sunsetEl = document.getElementById('sunset');
const hourlyForecastEl = document.getElementById('hourly-forecast');
const dailyForecastEl = document.getElementById('daily-forecast');
const historyGridEl = document.getElementById('history-grid');


// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
    searchBtn.addEventListener('click', fetchWeatherData);
    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') fetchWeatherData();
    });
    createStars();
    fetchWeatherData();
});
// Creating decorative stars
function createStars() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        // Random animation duration
        star.style.setProperty('--duration', `${Math.random() * 3 + 1}s`);
        container.appendChild(star);
    }
}
//Updating da dates
function updateCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateEl.textContent = new Date().toLocaleDateString('en-US', options);
}
async function fetchWeatherData() {
    const location = locationInput.value || "Nairobi";
    currentLocation = location;
    try {//coordinates
        const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1`;
        const geocodingResponse = await fetch(geocodingUrl);
        const geocodingData = await geocodingResponse.json();
        if (!geocodingData.results || geocodingData.results.length === 0) {
            throw new Error("Location not found");
        }
        const { latitude, longitude, name, admin1, country } = geocodingData.results[0];
        currentLocationEl.textContent = `${name}, ${admin1 || country}`;
        // Get current date and date 7 days ago for historical data
        const now = new Date();
        const pastDate = new Date();
        pastDate.setDate(now.getDate() - 7);
        const formatDate = (date) => date.toISOString().split('T')[0];
        //Fetch da data
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,weathercode,windspeed_10m,pressure_msl,cloudcover,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max&timezone=auto&past_days=7`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        // Process and display data
        processCurrentWeather(weatherData);
        processHourlyForecast(weatherData);
        processDailyForecast(weatherData);
        processHistoricalWeather(weatherData);
        createCharts(weatherData);
        } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Could not fetch weather data. Please try another location.");
    }
}
// Process current weather data
function processCurrentWeather(data) {
    const current = data.current_weather;
    const hourly = data.hourly;
    const currentTime = new Date(current.time);
    
    // Find the index of the current hour in hourly data
    const currentHourIndex = hourly.time.findIndex(time => 
        new Date(time).getHours() === currentTime.getHours() && 
        new Date(time).getDate() === currentTime.getDate());
    // Update current weather display
    currentTempEl.textContent = `${current.temperature}°C`;
    currentDescEl.textContent = getWeatherDescription(current.weathercode);
    currentIconEl.innerHTML = `<i class="${getWeatherIcon(current.weathercode)}"></i>`;
    // Update additional details from hourly data
    if (currentHourIndex !== -1) {
        feelsLikeEl.textContent = `${hourly.apparent_temperature[currentHourIndex]}°C`;
        humidityEl.textContent = `${hourly.relativehumidity_2m[currentHourIndex]}%`;
        windEl.textContent = `${hourly.windspeed_10m[currentHourIndex]} km/h`;
        pressureEl.textContent = `${hourly.pressure_msl[currentHourIndex]} hPa`;
        visibilityEl.textContent = `${hourly.visibility[currentHourIndex] / 1000} km`;
        cloudCoverEl.textContent = `${hourly.cloudcover[currentHourIndex]}%`;
        
        // Calculate UV index (simplified - Open-Meteo doesn't provide this directly)
        const uvIndex = Math.min(Math.floor(current.temperature / 5), 11);
        uvIndexEl.textContent = `${uvIndex} (${getUvIndexDescription(uvIndex)})`;
    }
// Get sunset time from daily data
const todayIndex = data.daily.time.findIndex(time => 
        new Date(time).getDate() === currentTime.getDate());
    if (todayIndex !== -1) {
        const sunsetTime = new Date(data.daily.sunset[todayIndex]);
        sunsetEl.textContent = sunsetTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    }
}
// Process hourly forecast data
function processHourlyForecast(data) {
    const hourly = data.hourly;
    hourlyForecastEl.innerHTML = '';
    // Display next 24 hours
    const now = new Date();
    const currentHour = now.getHours();
    const startIndex = hourly.time.findIndex(time => 
        new Date(time).getHours() === currentHour && 
        new Date(time).getDate() === now.getDate());
    if (startIndex === -1) return;
    for (let i = startIndex; i < startIndex + 24 && i < hourly.time.length; i++) {
        const time = new Date(hourly.time[i]);
        const hour = time.getHours();
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        const hourlyItem = document.createElement('div');
        hourlyItem.className = 'hourly-item';
        hourlyItem.innerHTML = `
            <div class="hourly-time">${displayHour}${ampm}</div>
            <div class="hourly-icon"><i class="${getWeatherIcon(hourly.weathercode[i])}"></i></div>
            <div class="hourly-temp">${hourly.temperature_2m[i]}°C</div>
            <div class="hourly-precip">${hourly.precipitation_probability[i]}%</div>
        `;
        hourlyForecastEl.appendChild(hourlyItem);
    }
}
// Process daily forecast data
function processDailyForecast(data) {
    const daily = data.daily;
    dailyForecastEl.innerHTML = '';
    // Display 7-day forecast
    for (let i = 0; i < daily.time.length; i++) {
        const date = new Date(daily.time[i]);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const dailyItem = document.createElement('div');
        dailyItem.className = 'daily-item';
        dailyItem.innerHTML = `
            <div class="daily-day">${i === 0 ? 'Today' : dayName}</div>
            <div class="daily-icon"><i class="${getWeatherIcon(daily.weathercode[i])}"></i></div>
            <div class="daily-precip">${daily.precipitation_probability_max[i]}%</div>
            <div class="daily-temp">
                <span class="daily-high">${daily.temperature_2m_max[i]}°</span>
                <span class="daily-low">${daily.temperature_2m_min[i]}°</span>
            </div>
        `;
        dailyForecastEl.appendChild(dailyItem);
    }
}
// Process historical weather data
function processHistoricalWeather(data) {
    const daily = data.daily;
    historyGridEl.innerHTML = '';
    // Display past 7 days (excluding today)
    for (let i = 1; i < Math.min(8, daily.time.length); i++) {
        const date = new Date(daily.time[i]);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const historyCard = document.createElement('div');
        historyCard.className = 'history-card';
        historyCard.innerHTML = `
            <div class="history-date">${dateStr}</div>
            <div class="history-icon"><i class="${getWeatherIcon(daily.weathercode[i])}"></i></div>
            <div class="history-stats">
                <div class="history-stat">
                    <span>High</span>
                    ${daily.temperature_2m_max[i]}°C
                </div>
                <div class="history-stat">
                    <span>Low</span>
                    ${daily.temperature_2m_min[i]}°C
                </div>
                <div class="history-stat">
                    <span>Precip</span>
                    ${daily.precipitation_sum[i]} mm
                </div>
                <div class="history-stat">
                    <span>Wind</span>
                    ${daily.windspeed_10m_max[i]} km/h
                </div>
            </div>
        `;
        historyGridEl.appendChild(historyCard);
    }
}
// Create charts for temperature and precipitation
function createCharts(data) {
    const hourly = data.hourly;
    const now = new Date();
    const currentHour = now.getHours();
    const startIndex = hourly.time.findIndex(time => 
        new Date(time).getHours() === currentHour && 
        new Date(time).getDate() === now.getDate());
    
    // Prepare data for next 48 hours
    const labels = [];
    const temperatures = [];
    const apparentTemps = [];
    const precipProb = [];
    
    for (let i = startIndex; i < startIndex + 48 && i < hourly.time.length; i++) {
        const time = new Date(hourly.time[i]);
        labels.push(time.getHours() + 'h');
        temperatures.push(hourly.temperature_2m[i]);
        apparentTemps.push(hourly.apparent_temperature[i]);
        precipProb.push(hourly.precipitation_probability[i]);
    }
    
    // Destroy previous charts if they exist
    if (tempChart) tempChart.destroy();
    if (precipChart) precipChart.destroy();
    // Temperature chart
    const tempCtx = document.getElementById('temp-chart').getContext('2d');
    tempChart = new Chart(tempCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: temperatures,
                    borderColor: '#ff6b6b',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Feels Like (°C)',
                    data: apparentTemps,
                    borderColor: '#4fc3f7',
                    backgroundColor: 'rgba(79, 195, 247, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#e0e0ff'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a0c0'
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a0c0'
                    }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
    // Precipitation chart
    const precipCtx = document.getElementById('precip-chart').getContext('2d');
    precipChart = new Chart(precipCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Precipitation Probability (%)',
                data: precipProb,
                backgroundColor: 'rgba(79, 195, 247, 0.5)',
                borderColor: 'rgba(79, 195, 247, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#e0e0ff'
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a0c0'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#a0a0c0'
                    }
                }
            }
        }
    });
}
// Helper function to get weather description from WMO code
function getWeatherDescription(code) {
    const weatherCodes = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        56: 'Light freezing drizzle',
        57: 'Dense freezing drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        66: 'Light freezing rain',
        67: 'Heavy freezing rain',
        71: 'Slight snow fall',
        73: 'Moderate snow fall',
        75: 'Heavy snow fall',
        77: 'Snow grains',
        80: 'Slight rain showers',
        81: 'Moderate rain showers',
        82: 'Violent rain showers',
        85: 'Slight snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail'
    };
    return weatherCodes[code] || 'Unknown';
}
// Helper function to get Font Awesome icon from WMO code
function getWeatherIcon(code) {
    if (code === 0) return 'fas fa-sun';
    if (code === 1 || code === 2) return 'fas fa-cloud-sun';
    if (code === 3) return 'fas fa-cloud';
    if (code >= 45 && code <= 48) return 'fas fa-smog';
    if (code >= 51 && code <= 57) return 'fas fa-cloud-rain';
    if (code >= 61 && code <= 67) return 'fas fa-umbrella';
    if (code >= 71 && code <= 77) return 'fas fa-snowflake';
    if (code >= 80 && code <= 82) return 'fas fa-cloud-showers-heavy';
    if (code >= 85 && code <= 86) return 'fas fa-snowman';
    if (code >= 95 && code <= 99) return 'fas fa-bolt';
    return 'fas fa-question';
}
// Helper function to get UV index description
function getUvIndexDescription(index) {
    if (index <= 2) return 'Low';
    if (index <= 5) return 'Moderate';
    if (index <= 7) return 'High';
    if (index <= 10) return 'Very High';
    return 'Extreme';
}