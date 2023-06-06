//Завдання  1:
$('a[href^="https://"]').attr("target", "_blank");

//Завдання  2:
$("h2.head").css("background-color", "green");
$("h2.head .inner").css("font-size", "35px");

//Завдання  3:

$("h3 + div").each(function () {
  $(this).insertBefore($(this).prev("h3"));
});

//Завдання  4:

$('input[type="checkbox"]').on("change", function () {
  if ($('input[type="checkbox"]:checked').length >= 3) {
    $('input[type="checkbox"]').attr("disabled", true);
  }
});
