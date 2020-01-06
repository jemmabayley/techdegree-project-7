let userFields = document.querySelector('.user-fields');

document.querySelector('.btn-alert-x').addEventListener('click', () => {
    document.querySelector('.alert-container').innerHTML = "";
    document.querySelector('.dot').style.display = "none";
});

document.querySelector('.header-icon').addEventListener('click', () => {
    window.alert('Alert banner below. Click the X to close the alert.');
});

userFields.style.height = document.querySelector('.message-fields').clientHeight + 'px';
userFields.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = document.querySelector('.user-search').value;
    let message = document.querySelector('.user-message').value;
    if (user === '' && message === '') {
        window.alert('You haven\'t entered a user and message.');
    } else if (user === '') {
        window.alert('You haven\'t entered a user.');
    } else if (message == '') {
        window.alert('You haven\'t entered a message.');
    } else {
        window.alert('Your message has been sent.');
    }
});


var lineChart = new Chart(document.getElementById('traffic').getContext('2d'), {
    type: 'line',
    data: {
        responsive: true,
        maintainAspectRatio: false,
        xLabels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        yLabels: ["500", "1000", "1500", "2000", "2500"],
        datasets: [{
            backgroundColor: 'rgb(45, 47, 75, 0.2)',
            borderColor: '#7477bf',
            borderWidth: 2,
            lineTension: 0,
            pointRadius: 5,
            pointBackgroundColor: '#fff',
            data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
        }],
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }],
            yAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    }
});

// Daily-traffic chart
var barChart = new Chart(document.getElementById('daily-traffic').getContext('2d'), {
    type: 'bar',
    data: {
        responsive: true,
        maintainAspectRatio: false,
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: '#7477bf',
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }],
            yAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    }
});

//Mobile users charts
var doughnutChart = new Chart(document.getElementById('mobile-users').getContext('2d'), {
    type: 'doughnut',
    data: {
        responsive: true,
        maintainAspectRatio: false,
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            backgroundColor: ["#008080", "#2ecc71", "#7477bf"],
            data: [20, 15, 65]
        }]
    },
    options: {
        legend: {
            position: 'right',
        },
        rotation: -0.6 * Math.PI,
    }
});
