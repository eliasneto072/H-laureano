const $prev = document.querySelectorAll(".previous");
const $next = document.querySelectorAll(".next");

const $imagesCoop = document.querySelectorAll(".cooperative--image");
let $coopImgs = [];
let $coopAlts = [];
for (let index = 0; index < $imagesCoop.length; index++) {
  $coopImgs.push($imagesCoop[index].src);
  $coopAlts.push($imagesCoop[index].getAttribute("alt"));
}
const $imagesCert = document.querySelectorAll(".certificate--image");
let $certImgs = [];
let $certAlts = [];
for (let index = 0; index < $imagesCert.length; index++) {
  $certImgs.push($imagesCert[index].src);
  $certAlts.push($imagesCert[index].getAttribute("alt"));
}

for (let i = 0; i < $prev.length; i++) {
  let auxImg;
  let auxAlt;
  $prev[i].addEventListener("click", function () {
    if (i === 0) {
      auxImg = $coopImgs[0];
      auxAlt = $coopAlts[0];
      $coopImgs.shift();
      $coopAlts.shift();
      $coopImgs.push(auxImg);
      $coopAlts.push(auxAlt);

      for (let j = 0; j < $coopImgs.length; j++) {
        $imagesCoop[j].src = $coopImgs[j];
        $imagesCoop[j].alt = $coopAlts[j];
      }
    } else {
      auxImg = $certImgs[0];
      auxAlt = $certAlts[0];
      $certImgs.shift();
      $certAlts.shift();
      $certImgs.push(auxImg);
      $certAlts.push(auxAlt);

      for (let j = 0; j < $certImgs.length; j++) {
        $imagesCert[j].src = $certImgs[j];
        $imagesCert[j].alt = $certAlts[j];
      }
    }
  });
}

for (let i = 0; i < $next.length; i++) {
  let auxImg;
  let auxAlt;
    $next[i].addEventListener("click", function () {
    if (i === 0) {
      auxImg = $coopImgs[$coopImgs.length-1];
      auxAlt = $coopAlts[$coopAlts.length-1];
      $coopImgs.pop();
      $coopAlts.pop();
      $coopImgs.unshift(auxImg);
      $coopAlts.unshift(auxAlt);

      for(let j = 0; j < $coopImgs.length; j++){
          $imagesCoop[j].src = $coopImgs[j];
          $imagesCoop[j].alt = $coopAlts[j];
      }
    } else {
        auxImg = $certImgs[$certImgs.length-1];
        auxAlt = $certAlts[$certAlts.length-1];
        $certImgs.pop();
        $certAlts.pop();
        $certImgs.unshift(auxImg);
        $certAlts.unshift(auxAlt);

        for(let j = 0; j < $certImgs.length; j++){
            $imagesCert[j].src = $certImgs[j];
            $imagesCert[j].alt = $certAlts[j];
        }
    }
  });
}
