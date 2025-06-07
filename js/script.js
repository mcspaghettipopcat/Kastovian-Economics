console.log('JavaScript loaded!'); 

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Animate header on load
    const header = document.getElementById('header');
    if (header) {
        setTimeout(() => {
            header.classList.add('animated');
        }, 100);
    }

    // Animate dashboard cards
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animated');
        }, 100 * index);
    });

    // Initialize tooltips
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            const tooltiptext = this.querySelector('.tooltiptext');
            if (tooltiptext) {
                tooltiptext.style.visibility = 'visible';
                tooltiptext.style.opacity = '1';
            }
        });
        tooltip.addEventListener('mouseleave', function() {
            const tooltiptext = this.querySelector('.tooltiptext');
            if (tooltiptext) {
                tooltiptext.style.visibility = 'hidden';
                tooltiptext.style.opacity = '0';
            }
        });
    });
}); 