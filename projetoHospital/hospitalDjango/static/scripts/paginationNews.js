const newsMain = document.querySelector(".news-pag__main");

const listNews = document.querySelectorAll(".news-pag__news-image-wrapper");
const newsTitle = document.querySelectorAll(".news-pag__news-title");

if (newsTitle != 0) {
  var page_span = document.querySelector("#num-page-wrapper");

  var pagNext = document.querySelector("#pag-next");
  var pagFirst = document.querySelector("#pag-first");
  var pagPrev = document.querySelector("#pag-prev");
  var pagLast = document.querySelector("#pag-last");

  var currentPageNews = 1;
  var newsPerPage = 12;

  for (let i = 0; i < numPages(); i++) {
    page_span.innerHTML += `<a class="num-page" value="${1 + i}">${1 + i}</a>`;
    page_span.innerHTML += "<span class='dots'>...</span>";
  }

  const numPageNews = document.querySelectorAll(".num-page");
  const dotsNews = document.querySelectorAll(".dots");
  numPageNews[currentPageNews - 1].className += " active";

  function compressNumbers(page) {
    if (numPageNews.length > 10) {
      for (i = 0; i < numPageNews.length; i++) {
        numPageNews[i].className += " no-show";
        dotsNews[i].classList.add("no-show");
      }

      for (i = 0; i < numPageNews.length; i++) {
        if (i % 5 == 0 && i != 0 && i != numPageNews.length) {
          numPageNews[i - 1].classList.remove("no-show");
          dotsNews[i - 1].classList.remove("no-show");

          if (page == i) {
            numPageNews[i - 2].classList.remove("no-show");
            numPageNews[i - 1].classList.remove("no-show");
            numPageNews[i].classList.remove("no-show");

            dotsNews[i - 1].className = "dots no-show";
            dotsNews[i + 2].className = "dots";
          }

          if (page == i - 1 && i - 3 > 0) {
            numPageNews[i - 1].classList.remove("no-show");
            numPageNews[i - 2].classList.remove("no-show");
            numPageNews[i - 3].classList.remove("no-show");
          }

          if (page == i + 1) {
            numPageNews[i].classList.remove("no-show");
            numPageNews[i + 1].classList.remove("no-show");

            dotsNews[i - 1].className = "dots no-show";
            dotsNews[i + 2].className = "dots";
          }

          if (page == i - 2 && i - 4 > 0 && i != 2 && page != 3) {
            numPageNews[i - 2].classList.remove("no-show");
            numPageNews[i - 3].classList.remove("no-show");
            numPageNews[i - 4].classList.remove("no-show");
          }

          if (page == i + 2) {
            numPageNews[i].classList.remove("no-show");
            numPageNews[i + 1].classList.remove("no-show");
            numPageNews[i + 2].classList.remove("no-show");

            dotsNews[i - 1].className = "dots no-show";
            dotsNews[i + 2].className = "dots";
          }

          if (i + 1 == numPageNews.length) {
            numPageNews[i].classList.remove("no-show");

            dotsNews[i - 1].className = "dots no-show";
          }
        }

        if (i == 0) {
          numPageNews[i].classList.remove("no-show");

          dotsNews[i].className = "dots";
        }

        if (i == 1 && page == 2) {
          numPageNews[i].classList.remove("no-show");
          numPageNews[i + 1].classList.remove("no-show");

          dotsNews[i - 1].className = "dots no-show";
          dotsNews[i + 2].className = "dots";
        }

        if (i == 2 && page == 3) {
          numPageNews[i - 2].classList.remove("no-show");
          numPageNews[i - 1].classList.remove("no-show");
          numPageNews[i].classList.remove("no-show");
          numPageNews[i + 1].classList.remove("no-show");

          dotsNews[i - 2].className = "dots no-show";
        }

        if (i + 1 == numPageNews.length) {
          numPageNews[i].classList.remove("no-show");

          dotsNews[i - 2].classList.remove("no-show");
        }
      }
    } else {
      for (i = 0; i < numPageNews.length; i++) {
        dotsNews[i].classList.add("no-show");
      }
    }
  }

  function resetActive() {
    for (let j = 0; j < numPageNews.length; j++) {
      numPageNews[j].className = "num-page";
    }
  }

  for (let i = 0; i < numPageNews.length; i++) {
    numPageNews[i].onclick = function () {
      resetActive();
      numPageNews[i].className += " active";
      currentPageNews = i + 1;
      changePage(currentPageNews);
    };
  }

  function firstPage() {
    if (currentPageNews != 1) {
      resetActive();
      currentPageNews = 1;
      numPageNews[currentPageNews - 1].className += " active";
      changePage(currentPageNews);
    }
  }

  function prevPage() {
    if (currentPageNews > 1) {
      resetActive();
      currentPageNews--;
      numPageNews[currentPageNews - 1].className += " active";
      changePage(currentPageNews);
    }
  }

  function nextPage() {
    if (currentPageNews < numPages()) {
      resetActive();
      currentPageNews++;
      numPageNews[currentPageNews - 1].className += " active";
      changePage(currentPageNews);
    }
  }

  function lastPage() {
    if (currentPageNews != numPages()) {
      resetActive();
      currentPageNews = numPages();
      numPageNews[currentPageNews - 1].className += " active";
      changePage(currentPageNews);
    }
  }

  function changePage(page) {
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    for (j = 0; j < newsTitle.length; j++) {
      listNews[j].style.display = "none";
    }

    for (
      var i = (page - 1) * newsPerPage;
      i < page * newsPerPage && i < listNews.length;
      i++
    ) {
      if (page === 1) {
        newsMain.style.display = "flex";
        listNews[i].style.display = "flex";
      } else {
        newsMain.style.display = "none";
        listNews[i].style.display = "flex";
      }
    }

    if (page == 1) {
      pagPrev.style.visibility = "hidden";
      pagFirst.style.visibility = "hidden";
    } else {
      pagPrev.style.visibility = "visible";
      pagFirst.style.visibility = "visible";
    }

    if (page == numPages()) {
      pagNext.style.visibility = "hidden";
      pagLast.style.visibility = "hidden";
    } else {
      pagNext.style.visibility = "visible";
      pagLast.style.visibility = "visible";
    }

    document.body.scrollTo({ top: -10, behavior: "smooth" });
    compressNumbers(page);
  }

  function numPages() {
    return Math.ceil(newsTitle.length / newsPerPage);
  }

  window.onload = function () {
    changePage(1);
  };
}
