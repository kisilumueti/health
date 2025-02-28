document.addEventListener("DOMContentLoaded", function () {
    // Sample data for revenue chart
    var ctx = document.getElementById('revenueChart').getContext('2d');
    var revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
            datasets: [{
                label: 'Revenue in KES',
                data: [20000, 45000, 60000, 150000, 200000],
                borderColor: '#3498db',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true
        }
    });
});

