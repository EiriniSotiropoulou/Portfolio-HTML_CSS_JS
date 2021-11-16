$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
            
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    })

    // toggle menu/navbar script

    $('.menu-btn').click(function(){

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

});



var skillsCanvas = document.getElementById("skillsChart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

var skillData = {
    labels: [
        "HTML",
        "Javascript",
        "CSS",
        "Java",
        "MS Server"
        
    ],
    datasets: [
        {
            data: [30, 20, 30, 40,40],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ]
        }]
};

var pieChart = new Chart(skillsCanvas, {
  type: 'pie',
  data: skillData
});


