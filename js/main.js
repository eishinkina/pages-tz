const hamburgerBtn = document.getElementById("hamburgerBtn");
const navList = document.querySelector(".nav__list");

hamburgerBtn.addEventListener("click", function() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 767) {
        if (navList.style.maxHeight === "0px" || navList.style.maxHeight === "") {
            navList.style.maxHeight = "300px";
        } else {
            navList.style.maxHeight = "0px";
        }
    }
});

document.addEventListener("click", function(event) {
    if (!navList.contains(event.target) && !hamburgerBtn.contains(event.target)) {
        const windowWidth = window.innerWidth;

        if (windowWidth <= 767) {
            navList.style.maxHeight = "0px";
        }
    }
});


window.addEventListener("resize", function() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 767) {
        navList.style.maxHeight = "";
    }
});




var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Промо-давление увеличивается',
            data: [38, 44, 49, 50, 54, 56],
            borderColor: 'red',
            tension: 0.3,
            borderWidth: 2,
            fill: false,
            pointRadius: 4,
            pointBackgroundColor: 'red',
            pointBorderColor: 'red',
            backgroundColor: 'transparent'
        }]
    },

    options: {
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    color: '#ddd',
                    drawBorder: false,
                },
                ticks: {
                    stepSize: 5,
                    padding: 40,
                    callback: (value) => (value + '%'),
                },
            },
            x: {
                grid: {
                    color: 'transparent',
                    drawBorder: false,
                    drawOnChartArea: false,
                    tickMarks: false,
                    borderSkipped: 'left'
                },
                ticks: {
                    display: true,
                    padding: 10
                },
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });