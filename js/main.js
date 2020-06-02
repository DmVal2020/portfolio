// $(document).ready(function () {
$(".mobile div").on("click", () => {
  $(".mobile div").toggleClass("active");
  $(".mobile nav").toggleClass("open");
  $(".mobile nav ul").toggleClass("show");
});
for (let a = 1; a <= $(".mobile ul li").length; a++) {
  $(".mobile ul li:nth-child(" + a + ")").css(
    "animation-delay",
    "." + (a + 1) + "s"
  );
}

$(".modal_close").on("click", function () {
  $(".overlay, #thanks").fadeOut("slow");
});

$(".slider_content").slick({
  speed: 1200,
  prevArrow:
    '<button type="button" class="slick-prev"><img src="./img/chevron-left-solid.png"></button>',
  nextArrow:
    '<button type="button" class="slick-next"><img src="./img/chevron-right-solid.png"></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        dots: false,
      },
    },
  ],
});
$("form").submit(function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize(),
  }).done(function () {
    $(this).find("input").val("");
    $(".overplay, #thanks").fadeIn("slow");
    $("form").trigget("reset");
  });
  return false;
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 600) {
    $(".pageup").fadeIn();
  } else {
    $(".pageup").fadeOut();
  }
});
$("a[href^='#']").click(function () {
  const _href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
  return false;
});
