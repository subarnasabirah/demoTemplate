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
            items: 2
        },
        700: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


});



