
// Update the review counter using localStorage
document.addEventListener('DOMContentLoaded', function() {
    // Get current count from localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    
    // If no count exists, start at 0
    if (!reviewCount) {
        reviewCount = 0;
    }
    
    // Increment the count
    reviewCount = parseInt(reviewCount) + 1;
    
    // Save the updated count
    localStorage.setItem('reviewCount', reviewCount);
    
    // Display the count
    document.getElementById('reviewCount').textContent = reviewCount;
    
    // Update last modified date
    document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleString();
});
