$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    nextArrow:
      '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt="arrow" />',
    prevArrow:
      '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="arrow" />',
    asNavFor: ".slider-dots__item",
  });

  $(".slider-dots__item").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
    focusOnSelect: true,
  });

  $(".serf__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:
      '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt="arrow" />',
    prevArrow:
      '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="arrow" />',
    asNavFor: ".slider-map",
  });
  $(".shop__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
    '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt="arrow" />',
  prevArrow:
    '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="arrow" />',

  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".serf__slider",
    focusOnSelect: true,
  });

  $(".holder__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow:
      '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt="arrow" />',
    prevArrow:
      '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="arrow" />',
  });


  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg"/></div><div class="quantity-button quantity-down"><img src="img/minus.svg"/></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.quantity-button').on('click', function(){
    var parents = $(this).parents('.holder-slider__info');
     let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
     $('.summ', parents).html('$' + summ);
    });
    
   
    $('.quantity').each(function() {
    var parents = $(this).parents('.holder-slider__info');
    let summ = $('.summ', parents).data('nights') * $('.nights', parents).val() + $('.summ', parents).data('guests') * $('.guests', parents).val();
     $('.summ', parents).html('$' + summ);
    });
});
