// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById('lastModified').textContent = document.lastModified;

// Wind Chill Calculation Function
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

// Wind Chill Display Function
function displayWindChill() {
    const temperature = 10;  // °C
    const windSpeed = 5;     // km/h

    const windChillElement = document.getElementById('windChill');

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Call wind chill display when page loads
displayWindChill();