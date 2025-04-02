document.addEventListener("DOMContentLoaded", function() {
    // Get all lazy images
    const lazyImages = document.querySelectorAll("img.lazy-img");
    
    // Function to load image
    function loadImage(img) {
        // Only update src if it's not already set to the final image
        if (img.src !== img.dataset.src) {
            img.src = img.dataset.src;
        }
        img.onload = () => {
            img.classList.add("loaded");
        };
    }
    
    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(loadImage);
    }
    
    // Handle copyright and last modified if those elements exist
    const copyrightYearEl = document.getElementById('copyright-year');
    const lastModifiedEl = document.getElementById('last-modified');
    
    if (copyrightYearEl) {
        const currentYear = new Date().getFullYear();
        copyrightYearEl.textContent = currentYear;
    }
    
    if (lastModifiedEl) {
        const lastModified = new Date(document.lastModified);
        const formattedLastModified = lastModified.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        lastModifiedEl.textContent = formattedLastModified;
    }
});