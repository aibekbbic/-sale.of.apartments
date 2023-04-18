let menuIconWrapper = document.querySelector(".menuIconWrapper");
let menuIcon = document.querySelector(".menuIcon");
let sidebar = document.querySelector(".sidebar");

menuIconWrapper.onclick = function () {
  menuIcon.classList.toggle("menu-icon-active");
  sidebar.classList.toggle("sidebar-mobile-active");
};

// const cardHidden = document.querySelectorAll(".cardHidden");
// const more = document.querySelector(".more");

// more.addEventListener("click", function () {
//   cardHidden.forEach(function (card) {
//     card.classList.remove("cardHidden");
//   });
// });
const showMore = document.querySelector(".more");
const cardHidden = document.querySelectorAll(".cardHidden");

showMore.addEventListener("click", function () {
  cardHidden.forEach(function (card) {
    card.classList.remove("cardHidden");
  });
});

// скрыть виджеты

const widgets = document.querySelectorAll(".widgetTitle");
const widgetTitle = document.querySelectorAll(".widgetTitle");

for (let item = 0; item < widgets.length; item++) {
  widgets[item].addEventListener("click", function (i) {
    if (i.target.classList.contains("widgetTitle"))
      i.target.classList.toggle("widgetTitleActive");
    i.target.nextElementSibling.classList.toggle("widgetBodyHidden");
  });
}

//

let buttonBottom = document.querySelector("#location5");
let buttonTop = document.querySelectorall("[dataLocation]");

buttonBottom.addEventListener("change", function () {
  if (buttonBottom.checked) {
    buttonTop.forEach(function (item) {
      item.checked = false;
    });
  }
});

buttonTop.forEach(function (item) {
  item.addEventListener("change", function () {
    buttonBottom.checked = false;
  });
});

//

let linkShowMore = document.querySelector(".linkShowMore");
let labelHidden = document.querySelectorAll(".labelHidden");

linkShowMore.addEventListener("click", function (e) {
  e.preventDefault();
  if (linkShowMore.dataset.options == "hidden") {
    labelHidden.forEach(function (item) {
      item.style.display = "block";
    });
    linkShowMore.innerHTML = "hidden";
    linkShowMore.dataset.options = "visible";
  } else if (linkShowMore.dataset.options == "visible") {
    labelHidden.forEach(function (item) {
      item.style.display = "none";
    });
    linkShowMore.innerHTML = "show";
    linkShowMore.dataset.options = "hidden";
  }
});
