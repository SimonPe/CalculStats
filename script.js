function calculateStats() {
    var valuesInput = document.getElementById('values').value;
    var days = parseInt(document.getElementById('days').value);
    var valuesArray = valuesInput.split(',').map(function(item) {
        return parseFloat(item.trim());
    });

    var labels = [];
    for (var i = 1; i <= days; i++) {
        labels.push('Jour ' + i);
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Progression des valeurs',
                data: valuesArray,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
