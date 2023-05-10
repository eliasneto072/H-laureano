const listEvents = document.querySelectorAll(".event");

var page_span = document.querySelector("#num-page-wrapper");

var pagNext = document.querySelector("#pag-next");
var pagFirst = document.querySelector("#pag-first");
var pagPrev = document.querySelector("#pag-prev");
var pagLast = document.querySelector("#pag-last");

var currentPageEvents = 1;
var eventsPerPage = 5;

if (listEvents.length != 0) {
  for (let i = 0; i < numPagesEvents(); i++) {
    page_span.innerHTML += `<a class="num-page" value="${1 + i}">${1 + i}</a>`;
    page_span.innerHTML += "<span class='dots'>...</span>";
  }

  const numPageEvents = document.querySelectorAll(".num-page");
  const dotsEvents = document.querySelectorAll(".dots");
  numPageEvents[currentPageEvents - 1].className += " active";

  function compressNumbers(page) {
    if (numPageEvents.length > 10) {
      for (i = 0; i < numPageEvents.length; i++) {
        numPageEvents[i].className += " no-show";
        dotsEvents[i].classList.add("no-show");
      }

      for (i = 0; i < numPageEvents.length; i++) {
        if (i % 5 == 0 && i != 0 && i != numPageEvents.length) {
          numPageEvents[i - 1].classList.remove("no-show");
          dotsEvents[i - 1].classList.remove("no-show");

          if (page == i) {
            numPageEvents[i - 2].classList.remove("no-show");
            numPageEvents[i - 1].classList.remove("no-show");
            numPageEvents[i].classList.remove("no-show");

            dotsEvents[i - 1].className = "dots no-show";
            dotsEvents[i + 2].className = "dots";
          }

          if (page == i - 1 && i - 3 > 0) {
            numPageEvents[i - 1].classList.remove("no-show");
            numPageEvents[i - 2].classList.remove("no-show");
            numPageEvents[i - 3].classList.remove("no-show");
          }

          if (page == i + 1) {
            numPageEvents[i].classList.remove("no-show");
            numPageEvents[i + 1].classList.remove("no-show");

            dotsEvents[i - 1].className = "dots no-show";
            dotsEvents[i + 2].className = "dots";
          }

          if (page == i - 2 && i - 4 > 0 && i != 2 && page != 3) {
            numPageEvents[i - 2].classList.remove("no-show");
            numPageEvents[i - 3].classList.remove("no-show");
            numPageEvents[i - 4].classList.remove("no-show");
          }

          if (page == i + 2) {
            numPageEvents[i].classList.remove("no-show");
            numPageEvents[i + 1].classList.remove("no-show");
            numPageEvents[i + 2].classList.remove("no-show");

            dotsEvents[i - 1].className = "dots no-show";
            dotsEvents[i + 2].className = "dots";
          }

          if (i + 1 == numPageEvents.length) {
            numPageEvents[i].classList.remove("no-show");

            dotsEvents[i - 1].className = "dots no-show";
          }
        }

        if (i == 0) {
          numPageEvents[i].classList.remove("no-show");

          dotsEvents[i].className = "dots";
        }

        if (i == 1 && page == 2) {
          numPageEvents[i].classList.remove("no-show");
          numPageEvents[i + 1].classList.remove("no-show");

          dotsEvents[i - 1].className = "dots no-show";
          dotsEvents[i + 2].className = "dots";
        }

        if (i == 2 && page == 3) {
          numPageEvents[i - 2].classList.remove("no-show");
          numPageEvents[i - 1].classList.remove("no-show");
          numPageEvents[i].classList.remove("no-show");
          numPageEvents[i + 1].classList.remove("no-show");

          dotsEvents[i - 2].className = "dots no-show";
        }

        if (i + 1 == numPageEvents.length) {
          numPageEvents[i].classList.remove("no-show");

          dotsEvents[i - 2].classList.remove("no-show");
        }
      }
    } else {
      for (i = 0; i < numPageEvents.length; i++) {
        dotsEvents[i].classList.add("no-show");
      }
    }
  }

  function resetActive() {
    for (let j = 0; j < numPageEvents.length; j++) {
      numPageEvents[j].className = "num-page";
    }
  }

  for (let i = 0; i < numPageEvents.length; i++) {
    numPageEvents[i].onclick = function () {
      resetActive();
      numPageEvents[i].className += " active";
      currentPageEvents = i + 1;
      changePage(currentPageEvents);
    };
  }

  function firstPage() {
    if (currentPageEvents != 1) {
      resetActive();
      currentPageEvents = 1;
      numPageEvents[currentPageEvents - 1].className += " active";
      changePage(currentPageEvents);
    }
  }

  function prevPage() {
    if (currentPageEvents > 1) {
      resetActive();
      currentPageEvents--;
      numPageEvents[currentPageEvents - 1].className += " active";
      changePage(currentPageEvents);
    }
  }

  function nextPage() {
    if (currentPageEvents < numPagesEvents()) {
      resetActive();
      currentPageEvents++;
      numPageEvents[currentPageEvents - 1].className += " active";
      changePage(currentPageEvents);
    }
  }

  function lastPage() {
    if (currentPageEvents != numPagesEvents()) {
      resetActive();
      currentPageEvents = numPagesEvents();
      numPageEvents[currentPageEvents - 1].className += " active";
      changePage(currentPageEvents);
    }
  }

  function changePage(page) {
    // Validate page
    if (page < 1) page = 1;
    if (page > numPagesEvents()) page = numPagesEvents();

    for (j = 0; j < listEvents.length; j++) {
      listEvents[j].style.display = "none";
    }

    for (
      var i = (page - 1) * eventsPerPage;
      i < page * eventsPerPage && i < listEvents.length;
      i++
    ) {
      listEvents[i].style.display = "block";
    }

    if (page == 1) {
      pagPrev.style.visibility = "hidden";
      pagFirst.style.visibility = "hidden";
    } else {
      pagPrev.style.visibility = "visible";
      pagFirst.style.visibility = "visible";
    }

    if (page == numPagesEvents()) {
      pagNext.style.visibility = "hidden";
      pagLast.style.visibility = "hidden";
    } else {
      pagNext.style.visibility = "visible";
      pagLast.style.visibility = "visible";
    }

    document.body.scrollTo({ top: -10, behavior: "smooth" });
    compressNumbers(page);
  }

  function numPagesEvents() {
    return Math.ceil(listEvents.length / eventsPerPage);
  }

  window.onload = function () {
    changePage(1);
  };
}
