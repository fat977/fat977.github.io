$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
    $(window).scroll(function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
    
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 50) {
            $(".nav-link , .navbar-brand").css('color', '#17a2b8');
            $(".navbar-toggler").css('background-color', '#17a2b8');
        } else {
            $(".nav-link , .navbar-brand").css('color', '#e5e5e5');
            $(".navbar-toggler").css('background-color', '#e5e5e5');
        }
    });

    // for gallery
    const filterContainer = document.querySelector(".gallery-filter"),
        galleryItems = document.querySelectorAll(".gallery-item");

    filterContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("filter-item")) {
            // deactivate existing active 'filter-item'
            filterContainer.querySelector(".active").classList.remove("active");
            // activate new 'filter-item'
            event.target.classList.add("active");
            const filterValue = event.target.getAttribute("data-filter");
            galleryItems.forEach((item) => {
                if (item.classList.contains(filterValue) || filterValue === 'all') {
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            });
        }
    });
});