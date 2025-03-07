// Get the current year for the copyright
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = new Date(document.lastModified);

// Format the last modified date
const formattedLastModified = lastModified.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

// Insert the current year into the copyright span
document.getElementById('copyright-year').textContent = currentYear;

// Insert the last modified date into the last modified span
document.getElementById('last-modified').textContent = formattedLastModified;