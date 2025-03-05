// Get the current year for copyrig
document.getElementById('copyright-year').textContent = 
    `© ${new Date().getFullYear()} All Rights Reserved`;

    

// Display the last modified date of the document
document.getElementById('last-modified').textContent = 
    `Last Modified: ${document.lastModified}`;