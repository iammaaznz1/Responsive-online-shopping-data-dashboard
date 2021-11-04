const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Amazon', 'Ebay', 'Alibaba','FlipKart'],
        datasets: [{
            label: 'Divisão de faturamento',
            data: [1200, 1900, 3000, 1200],
            backgroundColor: [
                'rgba(255, 99, 132,1)',
                'rgba(54, 162, 235,1)',
                'rgba(255, 206, 86,1)',
                'rgb(75, 192, 192,1)',
            ],
        }]
    },
    options: {
        responsive: true,
    }
});


const myCharta = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April','May','June','July','August','September','October','November','December'],
        datasets: [{
            label: 'Data',
            data: [13000, 44000, 22000, 1560, 13000, 3330, 15000, 27000, 13000, 44000, 22000, 1560],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
        }]
    },
    options: {
       responsive: true,
    }
});