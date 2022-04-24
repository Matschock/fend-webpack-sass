function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => {
    //     return res.json()
    // })
    // .then(function(data) {
    //     document.getElementById('results').innerHTML = data.message
    // })

    // --- Start --- Exercise: API Call Challenge:
    const myApiKey = '&appid=d447d3d87b60bb09c3b42f23c3d2d799&units=imperial';
    const URLfoundation = 'https://api.openweathermap.org/data/2.5/weather?zip=';
    const countryCode = ',de';
    const zip = 40239;
    //Declare Variable
    let date = new Date();

    fetch(URLfoundation+zip+countryCode+myApiKey)
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        // Kelvin to Celsius
        let temperatureC = data.main.temp;
        temperatureC = temperatureC.toFixed(2);
        document.getElementById('results').innerHTML = `${temperatureC} this is a test`
    })
    // --- End --- Exercise: API Call Challenge:

    }

export { handleSubmit }
