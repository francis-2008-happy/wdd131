// Get current year for footer
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById('last-modified').textContent += lastModified;

// Windchill calculation
function calculateWindChill(temp, windSpeed) {
    // Metric formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Display windchill if conditions are met
const tempElement = document.getElementById('temp');
const windSpeedElement = document.getElementById('wind-speed');
const windChillElement = document.getElementById('wind-chill');

const temp = parseFloat(tempElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

if (temp <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temp, windSpeed);
    windChillElement.textContent = `${windChill}°C`;
}

// Mobile menu functionality
const menuButton = document.getElementById('menu-button');
const navList = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});