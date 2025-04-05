// Product array data
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  // Function to populate product dropdown
  function populateProductDropdown() {
    const productSelect = document.getElementById('productName');
    
    // Add each product to the dropdown
    products.forEach(product => {
      // Capitalize the first letter of each word for display
      const displayName = product.name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Create new option element
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = displayName;
      
      // Add option to select
      productSelect.appendChild(option);
    });
  }
  
  // Initialize the form when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    // Populate product dropdown
    populateProductDropdown();
    
    // Set up star rating interactivity
    const ratingLabels = document.querySelectorAll('.rating-option label');
    
    ratingLabels.forEach(label => {
      label.addEventListener('mouseover', function() {
        // Add hover effect
        this.style.transform = 'scale(1.1)';
      });
      
      label.addEventListener('mouseout', function() {
        // Remove hover effect
        this.style.transform = 'scale(1)';
      });
    });
  });

  document.getElementById('lastModified').textContent = new Date
  (document.lastModified).toLocaleString();