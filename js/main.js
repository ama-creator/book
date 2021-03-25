var textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});







// $('.herois__slider-pic').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   asNavFor: '.herois__slider-text',
//   prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt="prev"></button>',
//   nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.svg" alt="next"></button>',
//   responsive: [{
//       breakpoint: 769,
//       settings: {
//           arrows: false
//       }
//   }]
// });
// $('.herois__slider-text').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   fade: true,
//   asNavFor: '.herois__slider-pic',
//   arrows: true
// });


$('.content-product__slider-pic').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  asNavFor: '.content-product__slider-text'
});
$('.content-product__slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-btn slick-prev"><img src="img/svg/slider-arrow-left.svg" alt="prev"></button>',
  nextArrow: '<button class="slick-btn slick-next"><img src="img/svg/slider-arrow-right.svg" alt="next"></button>',
  dots: true,
  fade: true,
  asNavFor: '.content-product__slider-pic',
});
			