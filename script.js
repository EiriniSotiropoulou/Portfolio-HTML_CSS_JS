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
  labels: ["HTML", "Javascript", "CSS", "Java", "MS Server"],
  datasets: [
    {
      data: [30, 20, 30, 40, 40],
      backgroundColor: ["#FF6384", "#63FF84", "#84FF63", "#8463FF", "#6384FF"],
    },
  ],
};

var pieChart = new Chart(skillsCanvas, {
  type: "pie",
  data: skillData,
});
