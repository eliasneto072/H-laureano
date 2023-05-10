/* jshint esversion: 6 */

var $modalGaleria = document.querySelector(".modal");
var images = document.querySelectorAll(".galery-image");

var $modalImg = document.querySelector(".modal-image");
var $modalTitle = document.querySelector(".modal-title");
var $categoriesGalery = document.querySelectorAll(".images-category");

var $closeBtn = document.querySelector(".close");
var prev = document.querySelector(".modal-previous");
var next = document.querySelector(".modal-next");

var imgs = [];
var alts = [];
var categs = [];

var allCategs = [];

getContent();

var auxImg;
var auxAlt;
var auxCateg;

function getContent() {
  for (let index = 0; index < $categoriesGalery.length; index++) {
    allCategs.push($categoriesGalery[index].getAttribute("id"));
  }
  for (let index = 0; index < images.length; index++) {
    imgs.push(images[index].src);
    alts.push(images[index].getAttribute("alt"));
    categs.push(images[index].getAttribute("categoria"));
  }
}

function displayImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      var list = [];
      $modalGaleria.style.display = "block";
      $modalImg.src = this.src;
      $modalImg.setAttribute("categoria", images[i].getAttribute("categoria"));
      $modalTitle.innerHTML = this.alt;

      list = imagesByCategory(list, $modalImg.getAttribute("categoria"));
      selectPrevious(list);
      selectNext(list);
    };
  }
}

function imagesByCategory(list, categoria) {
  for (let i = 0; i < images.length; i++) {
    if (categoria == images[i].getAttribute("categoria")) {
      list = list.concat([[imgs[i], alts[i], categs[i]]]);
    }
  }
  return list;
}

$closeBtn.onclick = function () {
  $modalGaleria.style.display = "none";
};

function selectPrevious(list) {
  var imgsCateg = [];
  var altsCateg = [];
  var categsCateg = [];
  for (let i = 0; i < list.length; i++) {
    imgsCateg.push(list[i][0]);
    altsCateg.push(list[i][1]);
    categsCateg.push(list[i][2]);
  }
  prev.onclick = function () {
    auxImg = imgsCateg[0];
    auxAlt = altsCateg[0];
    auxCateg = categsCateg[0];

    imgsCateg.shift();
    altsCateg.shift();
    categsCateg.shift();

    imgsCateg.push(auxImg);
    altsCateg.push(auxAlt);
    categsCateg.push(auxCateg);

    changePosition(imgsCateg, altsCateg, categsCateg);
  };
}

function selectNext(list) {
  var imgsCateg = [];
  var altsCateg = [];
  var categsCateg = [];
  for (let i = 0; i < list.length; i++) {
    imgsCateg.push(list[i][0]);
    altsCateg.push(list[i][1]);
    categsCateg.push(list[i][2]);
  }
  next.onclick = function () {
    auxImg = imgsCateg[imgsCateg.length - 1];
    auxAlt = altsCateg[altsCateg.length - 1];
    auxCateg = categsCateg[categsCateg.length - 1];

    imgsCateg.pop();
    altsCateg.pop();
    categsCateg.pop();

    imgsCateg.unshift(auxImg);
    altsCateg.unshift(auxAlt);
    categsCateg.unshift(auxCateg);

    changePosition(imgsCateg, altsCateg, categsCateg);
  };
}

function changePosition(imgsCateg, altsCateg, categsCateg) {
  for (var j = 0; j < imgsCateg.length; j++) {
    $modalImg.src = imgsCateg[j];
    $modalImg.alt = altsCateg[j];
    $modalImg.setAttribute("categoria", categsCateg[j]);
    $modalTitle.innerHTML = altsCateg[j];
  }
}

displayImage();