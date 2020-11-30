const isMobile = window.matchMedia("only screen and (max-width: 850px)");
isMobile.addListener(respondToMediaChange);
respondToMediaChange(isMobile);

function respondToMediaChange(isMobile){
  if (!isMobile.matches){
    if ($('.top-menu').hasClass('pressed')){
      $('.top-menu').removeClass('pressed');
      $('#header').css({"height": "80px"});
      $('.menu-toggle').removeClass('change');
    }
  }
}

$(document).ready(function() {
  $("#header").load("header.html");
  $("#sidebar-info").load("sidebar.html");
  $("#footer").load("footer.html");
});

$(document).ready(function() {
  var ctx = document.getElementById('radar-chart');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Data Science', 'Machine Learning', 'Deep Learning', 'AI Literacy', 'Software Engineering', 'Algorithmic Coding', 'Mathematics'],
      datasets: [{
        label: 'Workera score',
        data: [77, 88, 67, 99, 67, 88, 87],
        fill: true,
        backgroundColor: '#2e2a4380',
        borderColor: '#1e1a34',
        borderWidth: 2,
        pointBackgroundColor: '#1e1a34',
        pointBorderColor: '#1e1a34',
        pointHoverBackgroundColor: '#2e2a43',
        pointHoverBorderColor: '#1e1a34'
      }]
    },
    options: {
      title: {
        display: false,
        text: 'workera.ai assessment of AI skills',
        fontSize: 16,
        fontFamily: "'Roboto', sans-serif",
        fontColor: '#222831'
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: true,
        bodyFontFamily: "'Open Sans', sans-serif",
        titleFontFamily: "'Open Sans', sans-serif",
        footerFontFamily: "'Open Sans', sans-serif"
      },
      scale: {
        angleLines: {
            display: false
        },
        ticks: {
            suggestedMin: 50,
            suggestedMax: 100
        },
        pointLabels: {
          fontSize: 12,
          fontFamily: "'Open Sans', sans-serif"
        }
      }
    }
})});

$(document).ready(function() {
  $('.menu-toggle').click(function () {
    $('.top-menu').toggleClass('pressed');
    if ($('.top-menu').hasClass('pressed')){
      $('.menu-toggle').toggleClass('change');
      $("#header").css({"height": "350px"});
    }
    else {
      $('.menu-toggle').toggleClass('change');
      $("#header").css({"height": "80px"});
    }
  });
});

$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 80) {
      $("#header").css({"height": "80px"});
      $('.menu-toggle').removeClass('change');
      $('.top-menu').removeClass('pressed');
    }
  });
});
