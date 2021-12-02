$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // toggle menu/navbar script

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });
  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });
});

var skillsCanvas = document.getElementById("skillsChart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

var skillData = {
  labels: ["HTML", "Javascript", "CSS", "Java", "MS Server","SQL"],
  datasets: [
    {
      data: [30, 20, 30, 30, 20,30],
      backgroundColor: ["rgb(71, 7, 245)", "rgb(245, 177, 7)", "rgb(110, 26, 6)", "rgb(5, 98, 70)", "#6384FF","rgb(60, 3, 83)"],
    },
  ],
};

var pieChart = new Chart(skillsCanvas, {
  type: "pie",
  data: skillData,
  options: {
    // This chart will not respond to mousemove, etc
    events: [null],
    plugins: {
      legend: {
          display: true,
          position:"left"
      }
  }
  }
});
