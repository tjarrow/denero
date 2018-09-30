$(document).ready(function() {
  $(".menu-btn").click(function() {
    $(".menu-lower").slideToggle();
    if ($(".menu-lower").is(":visible"))
      $(".menu-lower").css("display", "flex");
    $(".menu-btn").toggleClass("menu-btn_close");
  });
});
