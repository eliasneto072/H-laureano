const $images = document.querySelectorAll(".donate-image");
const $modalDoacao = document.querySelectorAll(".modal");
let $closeBtnDontation = document.querySelectorAll(".close");

function displayInfos() {
  for (let i = 0; i < $images.length; i++) {
    $images[i].onclick = function () {
      console.log("a");
      $modalDoacao[i].style.display = "flex";
      close(i);
    };
  }
}

function close(i) {
  $closeBtnDontation[i].onclick = function () {
    $modalDoacao[i].style.display = "none";
  };
}

if (window.screen.width > 480) {
  displayInfos();
}
