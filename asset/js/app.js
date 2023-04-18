$(function(){

'use strict';
$('.new_product_slider').slick({
    
    slidesToShow:4,
    prevArrow:'<i class="fa-solid fa-chevron-left product_slider_icon"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right product_slider_icon"></i>',
    dots:true,
    dotsClass:"product_slider_dots",
    responsive:[
      {
        breakpoint:1200,
        settings:{
          slidesToShow:2,
        }
      },
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
        }
      },

      {
        breakpoint:768,
        settings:{
          slidesToShow:2,

        }

      },

      {
        breakpoint:576,
        settings:{
          slidesToShow:2,
        }

      },

      {
        breakpoint:450,
        settings:{
          slidesToShow:1,
        }

      },
    ]



})





  $('.news_slider').slick({
    slidesToShow:4,
    arrows:false,
    dots:true,
    dotsClass:'news_slider_dots',

    responsive:[
      {
        breakpoint:1200,
        settings:{
          slidesToShow:3,
        }
      },
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
        }
      },

      {
        breakpoint:768,
        settings:{
          slidesToShow:2,

        }

      },

      {
        breakpoint:576,
        settings:{
          slidesToShow:2,
        }

      },

      {
        breakpoint:450,
        settings:{
          slidesToShow:1,
        }
      }
    ]

  


  })




  $('.expert_team-slider').slick({
    slidesToShow:4,
    prevArrow:'<i class="fa-solid fa-chevron-left expert_slider_icon"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right expert_slider_icon"></i>',

    responsive:[

      {

        breakpoint:768,
        settings:{
          slidesToShow:2,
        }
      },

      {
        breakpoint:450,
        settings:{
          slidesToShow:1,
        }
      }

    ]


  })

  $('.instragram_slider').slick({
    arrows:false,
    slidesToShow:6,
    dots:true,
    dotsClass:'instragram_slider_dots',

    responsive:[

      {

        breakpoint:768,
        settings:{
          slidesToShow:3,
        }
      },

      {
        breakpoint:450,
        settings:{
          slidesToShow:2,
        }

      },

    ]
  })


 $('.shop_slider').slick({
  slidesToShow:4,
  
 })

 $('.jacket_slider').slick({
  slidesToShow:5,
  prevArrow:'<i class="fa-solid fa-chevron-left jacket_slider_icon">',
  nextArrow:'<i class="fa-solid fa-chevron-right jacket_slider_icon">',
  autoplay:true,
  autoplaySpeed:2000,
  responsive:[
    {
      breakpoint:768,
      settings:{
        slidesToShow:4,
      }
    },

    {
      breakpoint:450,
      settings:{
        slidesToShow:3,
      }
    }
  ]
  
 })

 $('.related_product_slider').slick({
  slidesToShow:4,
  prevArrow:'<i class="fa-solid fa-chevron-left related_product_icon">',
  nextArrow:'<i class="fa-solid fa-chevron-right related_product_icon">',
  responsive:[
    {
      breakpoint:992,
      settings:{
        slidesToShow:3,
      }
    },

    {
      breakpoint:768,
      settings:{
        slidesToShow:2,
      }
    },

    {
      breakpoint:450,
      settings:{
        slidesToShow:1,
      }
    }
  ]
  
 
 })

 $('.leather_slider').slick({
  slidesToShow:1,
  arrows:false,
  autoplay:true,
  autoplaySpeed:2000,



 })
  
$('#cardDecrement').on('click', function(){
  if($('#cartField').val()<1){
    $('#cardDecrement').prop('disabled',true);
  }
})

$('.blog_slider').slick({
  slidesToShow:1,
  autoplay:true,
  arrows:false,
  autoplaySpeed:2000,
})


$('.blog-2_slider').slick({
  arrows:false,
  autoplay:true,
  autoplaySpeed:2000,
  slidesToShow:1,
})

$('.testomoniyal_slider').slick({
  slidesToShow:1,
  fade:true,
 
  arrows:false,
  dots:true,
  dotsClass:'testomoniyal_slider_dots',
asNavFor:'.testomoniyal_slider_nav',

  

}
  

)

$('.discount_product_slider').slick({

  slidesToShow:2,
  arrows: false,
  dots:true,
  dotsClass:"discount_slider_dots",

  responsive:[

    {
      breakpoint:576,
      settings:{
        slidesToShow:1,
      }
    }


  ]

  

})








})

new VenoBox();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

