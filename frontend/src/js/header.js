import $ from 'jquery';

console.log("loaded");

// jQuery/ESM でのナビ制御（存在時のみ動作）
$(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('#header .nav').toggleClass('active');
  });

  $('#header .nav a').on('click', function () {
    $('.hamburger').removeClass('active');
    $('#header .nav').removeClass('active');
  });
});

