// Set Chart.js defaults (Keep existing settings)
Chart.defaults.color = '#cbd5e1'; // slate-300
Chart.defaults.borderColor = '#475569'; // slate-600
Chart.defaults.plugins.legend.labels.color = '#cbd5e1';
// Use external CSS for tooltips now if using external: true
// Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(15, 23, 42, 0.9)'; // slate-900 with opacity
// Chart.defaults.plugins.tooltip.titleColor = '#e2e8f0'; // slate-200
// Chart.defaults.plugins.tooltip.bodyColor = '#cbd5e1'; // slate-300
// Chart.defaults.plugins.tooltip.borderColor = '#64748b'; // slate-500
// Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.animation.duration = 1000; // Slightly slower, smoother animation
Chart.defaults.animation.easing = 'easeOutExpo';

// --- Historical Data ---
const years = [1950, 1955, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025];
const gdpUsdData = [180, 250, 380, 650, 1500, 2500, 3800, 3000, 1050, 1100, 1500, 2600, 6000, 8500, 13000, 17000]; // Billions USD
const gdpPerCapitaUsdData = [1500, 1700, 2200, 3000, 4700, 6100, 6900, 7200, 5800, 3200, 4400, 9000, 20000, 43000, 73000, 94400]; // USD

// --- Formatters ---
const formatBillion = (value) => `${(value / 1000).toFixed(1)}T`; // Format Billions as Trillions for large numbers
const formatMoney = (value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
const formatRubles = (value) => '₽' + value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
const exchangeRate = 30;

// --- Chart Configurations (Existing charts first) ---
// City Bar Chart (Keep existing config)
const cityBarCtx = document.getElementById('cityBarChart')?.getContext('2d');
if (cityBarCtx) { // Add check in case element doesn't exist
     const cityGradient = cityBarCtx.createLinearGradient(0, 0, 0, 300);
     cityGradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)'); // blue-500
     cityGradient.addColorStop(1, 'rgba(37, 99, 235, 0.8)'); // blue-700

     const cityBarChart = new Chart(cityBarCtx, {
         type: 'bar',
         data: { /* ... existing city data ... */
            labels: ['Verdansk', 'Vensk', 'St. Petrograd', 'Tavorsk', 'Ilyinsky', 'Vidirovgrad', 'Myilokaev', 'Saverodansk', 'Petrovski-S', 'Volgra C.'],
            datasets: [{
                label: 'Contribution to GDP (%)',
                data: [20, 15, 14, 12, 10, 8, 7, 6, 5, 3],
                backgroundColor: ['#2563eb','#7c3aed','#ca8a04','#16a34a','#dc2626','#65a30d','#0891b2','#64748b','#db2777','#ea580c'],
                borderRadius: 4, borderWidth: 0,
            }]
        },
         options: { /* ... existing city options ... */
             responsive: true, maintainAspectRatio: false, indexAxis: 'y',
             plugins: {
                 legend: { display: false },
                 tooltip: {
                     callbacks: {
                        title: (tooltipItems) => tooltipItems[0].label.replace('Petrovski-S', 'Petrovski-Sakho').replace('Volgra C.', 'Volgra City'),
                        label: function(context) { return ` ${context.raw}% of National GDP`; }
                    }
                 }
             },
             scales: {
                 y: { grid: { display: false }, ticks: { color: '#94a3b8' } },
                 x: {
                    beginAtZero: true, title: { display: true, text: '% of National GDP', color: '#94a3b8', font: { size: 10 } },
                    grid: { color: '#334155' }, ticks: { color: '#94a3b8', callback: value => value + '%' }
                 }
             }
        }
     });
}
// ... (rest of the JavaScript code from the <script> block) ... 