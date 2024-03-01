function scrollShow(scrollID) {
  const show = document.querySelector(scrollID);
  show.classList.toggle("show");
}

// popup
function popUp(e) {
  let Content = document.querySelector(`#${e}`);
  let Close = Content.querySelector(".closeBox");

  Content.classList.add("active");
  document.body.style.overflow = "hidden";
  Close.addEventListener("click", () => {
    Content.classList.remove("active");
    document.body.style.overflow = "visible";
  });
}
function popClose(e) {
  let Content = document.querySelector(`#${e}`);

  Content.addEventListener("click", () => {
    Content.classList.remove("active");
    document.body.style.overflow = "visible";
  });
}

$(window).scroll(function () {
  if ($(window).scrollTop() > $("#first").offset().top - 1000) {
    $(".first-img").addClass("animate__animated");
    $(".first-img").toggle(true);
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() > $(".bg22").offset().top - 500) {
    $(".thing22-1").addClass("thing22Move");
  }
});

const menuButton = document.querySelector(".menuBar");
const SPnavList = document.querySelector(".navList");
const SPnavLink = document.querySelectorAll(".navLink");

menuButton.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    menuButton.classList.toggle("menuBar--active");
    SPnavList.classList.toggle("navList--spshow");
  }
});

SPnavLink.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      menuButton.classList.toggle("menuBar--active");
      SPnavList.classList.toggle("navList--spshow");
    }
  });
});
