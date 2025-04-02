document.getElementById('hamburger-btn').addEventListener('click', function () {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
});

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



const temples = [
    {
      Name: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      Name: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      Name: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      Name: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      Name: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      Name: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      Name: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        Name: "Benin City Nigeria Temple",
        location: "Benin City, Edo State Nigeria",
        dedicated: "2025, May, 10",
        area: 116642,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/benin-city-nigeria-temple/benin-city-nigeria-temple-58575-main.jpg"
      },
      {
        Name: "Budapest Hungary Temple",
        location: "Kocsis Sándor út and Borsikafū utca, Budapest, Hungary",
        dedicated: "2025, June, 21",
        area: 116642,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/budapest-hungary-temple/budapest-hungary-temple-58578-main.jpg"
      },
      {
        Name: "Cape Town South Africa Temple",
        location: "3 Liesbeek Ave Observatory Cape Town, South Africa",
        dedicated: "2021, April, 4",   
        area: 116642,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cape-town-south-africa-temple/cape-town-south-africa-temple-23846-main.jpg"
      },
      {
        Name: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        Name: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
  ];



  function displayTemples(filteredTemples = temples) {
    const container = document.getElementById('temple-cards');
    container.innerHTML = ''; // Clear existing content
    
    filteredTemples.forEach(temple => {
      const card = document.createElement('div');
      card.className = 'temple-card';
      
      card.innerHTML = `
        <figure class="temple-figure">
          
          <figcaption>${temple.Name}</figcaption>
        </figure>
        <div class="temple-info">
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </div>
        <img src="${temple.imageUrl}" alt="${temple.Name}" loading="lazy">
      `;
      
      container.appendChild(card);
    });
  }


  function filterOld() {
    const oldTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split('-')[0]);
      return year < 1900;
    });
    displayTemples(oldTemples);
  }
  
  function filterNew() {
    const newTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split('-')[0]);
      return year > 2000;
    });
    displayTemples(newTemples);
  }
  
  function filterLarge() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
  }
  
  function filterSmall() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Initial display
    displayTemples();
    
    // Navigation event listeners
    document.getElementById('nav-home').addEventListener('click', () => displayTemples());
    document.getElementById('nav-old').addEventListener('click', filterOld);
    document.getElementById('nav-new').addEventListener('click', filterNew);
    document.getElementById('nav-large').addEventListener('click', filterLarge);
    document.getElementById('nav-small').addEventListener('click', filterSmall);
    
    // Footer updates
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
  });