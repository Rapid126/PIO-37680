const apiKey = '50842ebd5c0ca395148db685030e547b'; 
const city = 'Tarnów'; 

async function fetchWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`);
    const data = await response.json();

    if (data.cod === 200) {
      const temperature = data.main.temp;
      const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const weatherDescription = data.weather[0].description;

      document.querySelector('.weather span:nth-child(2)').textContent = `${temperature}°C`;
      document.querySelector('.weather img').src = weatherIcon;
      document.querySelector('.weather img').alt = weatherDescription;
    } else {
      console.error('Błąd pobierania danych pogodowych');
    }
  } catch (error) {
    console.error('Błąd połączenia z API:', error);
  }
}

fetchWeather();
