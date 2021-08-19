$(function() {

    var currentFloor = 2;
    var floorPath = $('.home-image path');
    var maxFloor = floorPath.length + 1;
    var counterUp = $('.counter__btn_up');
    var counterDown = $('.counter__btn_down');

    /* Наведение мыши на этаж */
    floorPath.on('mouseover', function() {
      let floor = $(this).attr('data-floor');
      $('.counter__number').html(floor);
    });

    /* Вывод активного этажа в счётчик при потере фокуса на картинке */
    $('.home-image').on('mouseout', function() {
      $('.counter__number').html(currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}));
    });

    /* Выбор этажа при клике на него */
    floorPath.on('click', function() {
      currentFloor = +$(this).attr('data-floor');
      floorPath.removeClass('current');
      $(this).addClass('current');
    });

    /* Выбор этажа выше текущего */
    counterUp.on('click', function() {
      if(currentFloor < maxFloor) {
        currentFloor++;
        var usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        $('.counter__number').html(usCurrentFloor);
        floorPath.removeClass('current');
        $(`[data-floor=${usCurrentFloor}]`).addClass('current');
      }
    });

    /* Выбор этажа ниже текущего */
    counterDown.on('click', function() {
      if(currentFloor > 2) {
        currentFloor--;
        var usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        $('.counter__number').html(usCurrentFloor);
        floorPath.removeClass('current');
        $(`[data-floor=${usCurrentFloor}]`).addClass('current');
      }
    });

/* End */
});