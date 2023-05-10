const listImages = document.querySelectorAll(".images-category");

var page_span = document.querySelector("#num-page-wrapper");

var pagNext = document.querySelector("#pag-next");
var pagFirst = document.querySelector("#pag-first");
var pagPrev = document.querySelector("#pag-prev");
var pagLast = document.querySelector("#pag-last");

var currentPageGalery = 1;
var imagesPerPage = 9;

if (listImages.length != 0) {
  for (let i = 0; i < numPagesGalery(); i++) {
    page_span.innerHTML += `<a class="num-page" value="${1 + i}">${1 + i}</a>`;
    page_span.innerHTML += "<span class='dots'>...</span>";
  }

  const numPageGalery = document.querySelectorAll(".num-page");
  const dotsGalery = document.querySelectorAll(".dots");
  numPageGalery[currentPageGalery - 1].className += " active";

  function compressNumbers(page) {
    if (numPageGalery.length > 10) {
      for (i = 0; i < numPageGalery.length; i++) {
        numPageGalery[i].className += " no-show";
        dotsGalery[i].classList.add("no-show");
      }

      for (i = 0; i < numPageGalery.length; i++) {
        if (i % 5 == 0 && i != 0 && i != numPageGalery.length) {
          numPageGalery[i - 1].classList.remove("no-show");
          dotsGalery[i - 1].classList.remove("no-show");

          if (page == i) {
            numPageGalery[i - 2].classList.remove("no-show");
            numPageGalery[i - 1].classList.remove("no-show");
            numPageGalery[i].classList.remove("no-show");

            dotsGalery[i - 1].className = "dots no-show";
            dotsGalery[i + 2].className = "dots";
          }

          if (page == i - 1 && i - 3 > 0) {
            numPageGalery[i - 1].classList.remove("no-show");
            numPageGalery[i - 2].classList.remove("no-show");
            numPageGalery[i - 3].classList.remove("no-show");
          }

          if (page == i + 1) {
            numPageGalery[i].classList.remove("no-show");
            numPageGalery[i + 1].classList.remove("no-show");

            dotsGalery[i - 1].className = "dots no-show";
            dotsGalery[i + 2].className = "dots";
          }

          if (page == i - 2 && i - 4 > 0 && i != 2 && page != 3) {
            numPageGalery[i - 2].classList.remove("no-show");
            numPageGalery[i - 3].classList.remove("no-show");
            numPageGalery[i - 4].classList.remove("no-show");
          }

          if (page == i + 2) {
            numPageGalery[i].classList.remove("no-show");
            numPageGalery[i + 1].classList.remove("no-show");
            numPageGalery[i + 2].classList.remove("no-show");

            dotsGalery[i - 1].className = "dots no-show";
            dotsGalery[i + 2].className = "dots";
          }

          if (i + 1 == numPageGalery.length) {
            numPageGalery[i].classList.remove("no-show");

            dotsGalery[i - 1].className = "dots no-show";
          }
        }

        if (i == 0) {
          numPageGalery[i].classList.remove("no-show");

          dotsGalery[i].className = "dots";
        }

        if (i == 1 && page == 2) {
          numPageGalery[i].classList.remove("no-show");
          numPageGalery[i + 1].classList.remove("no-show");

          dotsGalery[i - 1].className = "dots no-show";
          dotsGalery[i + 2].className = "dots";
        }

        if (i == 2 && page == 3) {
          numPageGalery[i - 2].classList.remove("no-show");
          numPageGalery[i - 1].classList.remove("no-show");
          numPageGalery[i].classList.remove("no-show");
          numPageGalery[i + 1].classList.remove("no-show");

          dotsGalery[i - 2].className = "dots no-show";
        }

        if (i + 1 == numPageGalery.length) {
          numPageGalery[i].classList.remove("no-show");

          dotsGalery[i - 2].classList.remove("no-show");
        }
      }
    } else {
      for (i = 0; i < numPageGalery.length; i++) {
        dotsGalery[i].classList.add("no-show");
      }
    }
  }

  function resetActive() {
    for (let j = 0; j < numPageGalery.length; j++) {
      numPageGalery[j].className = "num-page";
    }
  }

  for (let i = 0; i < numPageGalery.length; i++) {
    numPageGalery[i].onclick = function () {
      resetActive();
      numPageGalery[i].className += " active";
      currentPageGalery = i + 1;
      changePage(currentPageGalery);
    };
  }

  function firstPage() {
    if (currentPageGalery != 1) {
      resetActive();
      currentPageGalery = 1;
      numPageGalery[currentPageGalery - 1].className += " active";
      changePage(currentPageGalery);
    }
  }

  function prevPage() {
    if (currentPageGalery > 1) {
      resetActive();
      currentPageGalery--;
      numPageGalery[currentPageGalery - 1].className += " active";
      changePage(currentPageGalery);
    }
  }

  function nextPage() {
    if (currentPageGalery < numPagesGalery()) {
      resetActive();
      currentPageGalery++;
      numPageGalery[currentPageGalery - 1].className += " active";
      changePage(currentPageGalery);
    }
  }

  function lastPage() {
    if (currentPageGalery != numPagesGalery()) {
      resetActive();
      currentPageGalery = numPagesGalery();
      numPageGalery[currentPageGalery - 1].className += " active";
      changePage(currentPageGalery);
    }
  }

  function changePage(page) {
    // Validate page
    if (page < 1) page = 1;
    if (page > numPagesGalery()) page = numPagesGalery();

    for (j = 0; j < listImages.length; j++) {
      listImages[j].style.display = "none";
    }

    for (
      var i = (page - 1) * imagesPerPage;
      i < page * imagesPerPage && i < listImages.length;
      i++
    ) {
      listImages[i].style.display = "flex";
    }

    if (page == 1) {
      pagPrev.style.visibility = "hidden";
      pagFirst.style.visibility = "hidden";
    } else {
      pagPrev.style.visibility = "visible";
      pagFirst.style.visibility = "visible";
    }

    if (page == numPagesGalery()) {
      pagNext.style.visibility = "hidden";
      pagLast.style.visibility = "hidden";
    } else {
      pagNext.style.visibility = "visible";
      pagLast.style.visibility = "visible";
    }

    document.body.scrollTo({ top: -10, behavior: "smooth" });
    compressNumbers(page);
  }

  function numPagesGalery() {
    return Math.ceil(listImages.length / imagesPerPage);
  }

  window.onload = function () {
    changePage(1);
  };
}
