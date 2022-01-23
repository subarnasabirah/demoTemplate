$(document).ready(function () {

// main js Start
  // type your code 
// main js end


  $('.navbar a').on('click', function(e){
      if(this.hash !== ''){
          e.preventDefault();

          const hash = this.hash;

          $('html, body').animate(
              {
                  scrollTop: $(hash).offset().top
          },
          1500

          );
      }
  });


//carousel
$('.dot-list').owlCarousel({
    loop: true,
    autoplayHoverPause: true,
    margin: 30,
    nav: false,
    autoplay: true,
    dots: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        700: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});


});



$(window).scroll(function () {
    $('header').toggleClass('scrolled', $(this).scrollTop() > 100);
});

$(window).scroll(function () {
    $('.navbar-nav li').toggleClass('scrolled', $(this).scrollTop() > 100);
});