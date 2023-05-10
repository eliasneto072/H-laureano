const $titlesHeader = document.querySelectorAll(".list-header");
const $titles = document.querySelectorAll(".list-title");
const $imgs = document.querySelectorAll(".list-img");
const $lists = document.querySelectorAll(".list-wrapper");

let toggle = [];

for (let i = 0; i < $titlesHeader.length; i++) {
  toggle.push("off");
}

for (let i = 0; i < $titlesHeader.length; i++) {
  $titlesHeader[i].addEventListener("click", function () {
    if (toggle[i] == "off") {
      $lists[i].style.display = "block";
      $titles[i].style.color = "var(--darkGreen)";
      $titles[i].style.margin = "0 0 0 5px";
      $imgs[i].src = "/static/images/lista_icon_baixo.png";
      $imgs[i].style.width = "20px";
      $imgs[i].style.height = "10px";
      toggle[i] = "on";
    } else {
      $lists[i].style.display = "none";
      $titles[i].style.color = "black";
      $titles[i].style.margin = "0 0 0 15px";
      $imgs[i].src = "/static/images/lista_icon.png";
      $imgs[i].style.width = "10px";
      $imgs[i].style.height = "20px";
      toggle[i] = "off";
    }
  });
}
