



$('.btn-top').hover(function() {
  $(this).attr('aria-pressed', true);
},function() {
  $(this).attr('aria-pressed', false);
})


$('.btn-set').click(function() {
  const isPressed = $(this).attr('aria-pressed') === 'true';
  if(isPressed) {
    $(this).attr('aria-pressed', false);
    console.log("true일때" + isPressed)
  } else {
    $(this).attr('aria-pressed', true);
    console.log("false일때" + isPressed)
  }
  $('.setting_area').toggleClass('active');
})








// 화면 모드 선택시
$('.light').click(function() {
  $('html').attr('data-dark', false);
  $('.setting_group .setting_option .light').attr('aria-checked', true);
  $('.setting_group .setting_option .light').siblings().attr('aria-checked', false);
})
$('.dark').click(function() {
  $('html').attr('data-dark', true);
  $('.setting_group .setting_option .dark').attr('aria-checked', true);
  $('.setting_group .setting_option .dark').siblings().attr('aria-checked', false);
})
$('.device').click(function() {
  $('.setting_group .setting_option .device').attr('aria-checked', true);
  $('.setting_group .setting_option .device').siblings().attr('aria-checked', false);
})






// 글자 크기 선택시
$('.small').click(function() {
  $('html').removeClass();
  $('.setting_group .setting_option .small').attr('aria-checked', true);
  $('.setting_group .setting_option .small').siblings().attr('aria-checked', false);
})
$('.default').click(function() {
  $('html').removeClass().addClass('fzoom');
  $('.setting_group .setting_option .default').attr('aria-checked', true);
  $('.setting_group .setting_option .default').siblings().attr('aria-checked', false);
})
$('.big').click(function() {
  $('html').removeClass().addClass('fzoom3');
  $('.setting_group .setting_option .big').attr('aria-checked', true);
  $('.setting_group .setting_option .big').siblings().attr('aria-checked', false);
})













