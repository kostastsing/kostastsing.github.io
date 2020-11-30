$(document).ready(function() {
  $("#header").load("theme/header.html", function() {
    $("#header").append("<script type='text/javascript' src='scripts/header.js'></" + "script>");
  });
  $("#sidebar-info").load("theme/sidebar.html");
  $("#footer").load("theme/footer.html");
});

$(document).ready(function(){
  $('.scroll').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:$($(this).attr('href')).offset().top + 'px'
    },1000,'swing');
});

// if we have anchor on the url (calling from other page)
if(window.location.hash){
  // smooth scroll to the anchor id
  $('html,body').animate({
    scrollTop:$(window.location.hash).offset().top + 'px'},1000,'swing');
  }
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
