fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))

// function getCurrentTime() {
//     const date = new Date()
//     document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
// }

// setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p>${Math.round(data.main.temp)}º</p>
                <p>${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});
/**
 * Thử thách: Hiển thị nhiệt độ (làm tròn đến độ gần nhất)
 * và tên thành phố. Đừng lo lắng về bố cục cho đến bây giờ.
 */

// base: "stations"
// clouds: {all: 1}
// cod: 200
// coord: {lon: -111.9162, lat: 40.5269}
// dt: 1623180787
// id: 5780557
// main:
    // feels_like: 80.56
    // humidity: 17
    // pressure: 1009
    // temp: 83.17
    // temp_max: 88
    // temp_min: 78.62
// __proto__: Object
// name: "Riverton"
// sys: {type: 2, id: 2003861, country: "US", sunrise: 1623153431, sunset: 1623207400}
// timezone: -21600
// visibility: 10000
// weather: [{…}]
// wind: {speed: 11.01, deg: 167, gust: 21.99}