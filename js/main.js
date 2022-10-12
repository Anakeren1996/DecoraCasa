window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function menuToggle() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// FORMULÁRIO
$("[placeholder]")
  .focus(function () {
    $(this).attr("data-text", $(this).attr("placeholder"));
    $(this).attr("placeholder", "");
  })
  .blur(function () {
    $(this).attr("placeholder", $(this).attr("data-text"));
  });

