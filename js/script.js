$(document).ready(function(){

	/*Мобильный гамбургер*/
  	$(".hamburger").click(function(){
      	$(".hamburger").toggleClass('is-active');
      	$(".mobile_nav").toggleClass('active');
  	});
  	$(".header_el ul li a").click(function(){
      	$(".hamburger").removeClass('is-active');
    	$(".mobile_nav").removeClass('active');
  	});

  $('.m_1_slick').slick({
    arrows: false,                    // Стрелки
    slidesToShow: 1,                  // Количество слайдов, которые показываются сразу
    focusOnSelect: true,              // Фокус на елемент при клике
    autoplay: true,                   // Автоматическое переключение
    autoplaySpeed: 5000,              // Время на показ слайда до переключения на следующий
    dots: true,                      // Точки
    fade: false,                      // Эффект затухания вместо перелистывания
    infinite: true,                   // Бесконечность слайдов
    initialSlide: 0,                  // Номер с которого откроется слайдер
    pauseOnHover: true,               // Пауза при наведении на слайдер
    pauseOnDotsHover: false,          // Пауза при наведение на точки
    rows: 1,                          // Количество строк
    responsive: [                     
      {
        breakpoint: 992,
          settings: {

        }
      },
      {
        breakpoint: 600,
          settings: {

        }
      },
    ]
  });


  $('.m_4_slick').slick({
    arrows: false,                    // Стрелки
    slidesToShow: 5,                  // Количество слайдов, которые показываются сразу
    focusOnSelect: true,              // Фокус на елемент при клике
    autoplay: true,                   // Автоматическое переключение
    autoplaySpeed: 3000,              // Время на показ слайда до переключения на следующий
    dots: false,                      // Точки
    fade: false,                      // Эффект затухания вместо перелистывания
    infinite: true,                   // Бесконечность слайдов
    initialSlide: 0,                  // Номер с которого откроется слайдер
    pauseOnHover: true,               // Пауза при наведении на слайдер
    pauseOnDotsHover: false,          // Пауза при наведение на точки
    rows: 1,                          // Количество строк
    responsive: [                     
      {
        breakpoint: 992,
          settings: {
            slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
          settings: {
            slidesToShow: 2,
        }
      },
    ]
  });


  $(".m_2_text_read_more").click(function(){
      $(this).removeClass("active");
      $(".m_2_text_read_more_hide").addClass("active");
      $(".m_2_text_hide").addClass("active");
      jQuery(window).trigger('resize').trigger('scroll');
      return false;
  });
  $(".m_2_text_read_more_hide").click(function(){
      $(this).removeClass("active");
      $(".m_2_text_read_more").addClass("active");
      $(".m_2_text_hide").removeClass("active");
      jQuery(window).trigger('resize').trigger('scroll');
      return false;
  });

  $('.m_8_slick').slick({
    arrows: false,                    // Стрелки
    slidesToShow: 5,                  // Количество слайдов, которые показываются сразу
    focusOnSelect: true,              // Фокус на елемент при клике
    autoplay: true,                   // Автоматическое переключение
    autoplaySpeed: 2000,              // Время на показ слайда до переключения на следующий
    dots: false,                      // Точки
    fade: false,                      // Эффект затухания вместо перелистывания
    infinite: true,                   // Бесконечность слайдов
    initialSlide: 0,                  // Номер с которого откроется слайдер
    pauseOnHover: true,               // Пауза при наведении на слайдер
    pauseOnDotsHover: false,          // Пауза при наведение на точки
    rows: 1,                          // Количество строк
    responsive: [                     
      {
        breakpoint: 992,
          settings: {
            slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
          settings: {
            slidesToShow: 2,
        }
      },
    ]
  });


$(".but_go_to_top a, .header_el ul a").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
    });
  	/*
  	Маска для номера телефона

  	$("#m_8_phone").mask("+38 (099) 999-99-99");
  	*/

/*    
    Contact form 7 - успешная отправка

      $(document).ready(function(){ 
        $('.wpcf7').on( 'wpcf7mailsent ', function( event ) { 
          var inst = $('[data-remodal-id=remodal_thanks]').remodal(); // Обращаемся к всплывашке, чтобы открыть ответ меняем remodal_id на свой
                  inst.open();      
        });
      });*/

	/*
  	Плавный скрол

  	$("body a").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
  	});
  	*/

	/*
	Слик слайдер

	$('.s_4_slider_2').slick({
	  arrows: false,                    // Стрелки
	  asNavFor: ".s_4_slider_1",        // Связки 2 слайдеров для thumbnail
	  slidesToShow: 3,                  // Количество слайдов, которые показываются сразу
	  focusOnSelect: true,              // Фокус на елемент при клике
	  autoplay: true,                   // Автоматическое переключение
	  autoplaySpeed: 3000,              // Время на показ слайда до переключения на следующий
	  dots: false,                      // Точки
	  fade: false,                      // Эффект затухания вместо перелистывания
	  infinite: true,                   // Бесконечность слайдов
	  initialSlide: 0,                  // Номер с которого откроется слайдер
	  pauseOnHover: true,               // Пауза при наведении на слайдер
	  pauseOnDotsHover: false,          // Пауза при наведение на точки
	  rows: 1,                          // Количество строк
	  centerMod: true,                  // Центровать слайд
	  centerPadding: '50px',            // Отсупы от центрального слайда
	  draggable: true,                  // перелистывание слайдов, перетаскиванием слайда мышью
	  speed: 300,                       // Скорость анимации перелистывания
	  vertical: false,                  // Переключение на вертикальный тип слайдера
	  cssEase: "easy",                  // Вид анимации, для непрерывного слайдера linear  
	  responsive: [                     
	    {
	      breakpoint: 992,
	        settings: {

	      }
	    },
	    {
	      breakpoint: 600,
	        settings: {

	      }
	    },
	  ]
	});
	*/


	/*
	Валидация - отправка формы ajax

	$("form#idForm").validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: {
                required: "Это поле обязательно для ввода",
            },
            email: {
                required: "Это поле обязательно для ввода",
                email: "Вы ввели некоректный email",
            },
        },
        submitHandler: function () {
            var formData2 =  $('form#idForm').serialize(); // Выбираем нашу форм, посылание на тег form
            $.ajax({
              url: '/wp-admin/admin-ajax.php', 
              type: 'POST',
              data: formData2 + '&action=my_form_action',  // У каждой формы свой action, который пишется после =
              success: function() {
                $("form#idForm input[type=text]").val(""); // Чистим формы после того как клиент отправил данные нам на почту
                var inst = $('[data-remodal-id=remodal_id]').remodal(); // Обращаемся к всплывашке, чтобы открыть ответ меняем remodal_id на свой
                  inst.open();                                               // remodal открытие
                },
              error: function() {
                alert('Error');
              }
            });
            return false;
        }
   });
   */

});
 $(document).ready(function(){ 
        $('.wpcf7').on( 'wpcf7mailsent ', function( event ) { 
          var inst = $('[data-remodal-id=remodal_thanks]').remodal(); // Обращаемся к всплывашке, чтобы открыть ответ меняем remodal_id на свой
                  inst.open();      
        });
      });