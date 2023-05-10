const $logo = document.querySelector(".header__title--logo");
const $hospitalName = document.querySelector(".header__title--title");
const $menu = document.querySelector(".header__menu");
const $lines = document.querySelector(".header__menu--menu");
const $linesImage = document.querySelector(".header__menu--menu-image");
const $menuAlt = document.querySelector(".header__menu--title");
const $menuOptions = document.querySelector(".menu-options");
const $categories = document.querySelectorAll(".categories");
const $menuCategory = document.querySelectorAll(".option--category");
const $subcategories = document.querySelectorAll(".subcategories");
const $menuSubcategory = document.querySelectorAll(".option--subcategory");

window.onscroll = function () {
  scrollFunction();
};

function sendTo(web) {
  window.location.href = web;
}

function sendToNewWindow(web) {
  window.open(web, "_blanck");
}

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    const fontSizeTitle = 40 / 16;
    const fontSizeAlt = 15 / 16;

    $logo.style.width = "40px";

    $hospitalName.style.fontSize = `${fontSizeTitle}rem`;

    $menuAlt.style.fontSize = `${fontSizeAlt}rem`;
    $menuAlt.style.margin = "40px 0 0 0";

    $menuOptions.style.margin = "-8% 0 0 9.5%";
    $menuOptions.style.padding = "5% 0 0 0";

    $linesImage.style.width = "40px";
  } else {
    const fontSizeTitle = 56 / 16;
    const fontSizeAlt = 20 / 16;

    $logo.style.width = "80px";

    $hospitalName.style.fontSize = `${fontSizeTitle}rem`;

    $menuAlt.style.fontSize = `${fontSizeAlt}rem`;
    $menuAlt.style.margin = "50px 0 0 0";

    $menuOptions.style.margin = "-1% 0 0 9.5%";
    $menuOptions.style.padding = "0 0 0 0";

    $linesImage.style.width = "50px";
  }
}

/*============================= DEVICE ==================================*/
const $menuDeviceOptions = document.querySelector(".menu-device-options");
const $fecharMenuDevice = document.querySelector("#fechar-menu-device");

const $optionCategoryDevice = document.querySelectorAll(
  ".option--category-device"
);
const $deviceCategories = document.querySelectorAll(".device-categories");
const $voltarMenuDeviceCategory = document.querySelectorAll(
  ".voltar-menu-device-category"
);

const $optionSubcategoryDevice = document.querySelectorAll(
  ".option--subcategory-device"
);
const $deviceSubcategories = document.querySelectorAll(".device-subcategories");
const $voltarMenuDeviceSubcategory = document.querySelectorAll(
  ".voltar-menu-device-subcategory"
);

const modal = document.querySelector(".modal-device");

if (window.screen.width <= 800) {
  $menu.addEventListener("click", function () {
    modal.classList.toggle("noShow");
    $menuDeviceOptions.classList.toggle("noShow");
    
    for (i = 0; i < $optionCategoryDevice.length; i++) {
      if (!$deviceCategories[i].nodeName.includes("noShow")) {
        $deviceCategories[i].classList.add("noShow");
      }
    }
    
    for (i = 0; i < $optionSubcategoryDevice.length; i++) {
      if (!$deviceSubcategories[i].nodeName.includes("noShow")) {
        $deviceSubcategories[i].classList.add("noShow");
      }
    }
  });

  modal.addEventListener("click", function () {
    modal.classList.toggle("noShow");
    $menuDeviceOptions.classList.toggle("noShow");
    
    for (i = 0; i < $optionCategoryDevice.length; i++) {
      if (!$deviceCategories[i].nodeName.includes("noShow")) {
        $deviceCategories[i].classList.add("noShow");
      }
    }
    
    for (i = 0; i < $optionSubcategoryDevice.length; i++) {
      if (!$deviceSubcategories[i].nodeName.includes("noShow")) {
        $deviceSubcategories[i].classList.add("noShow");
      }
    }
  });
  
  $fecharMenuDevice.addEventListener("click", function () {
    $menuDeviceOptions.classList.toggle("noShow");
    modal.classList.toggle("noShow");
  });

  for (i = 0; i < $optionCategoryDevice.length; i++) {
    (function (x) {
      $optionCategoryDevice[x].addEventListener("click", function () {
        $deviceCategories[x].classList.toggle("noShow");
      });
    })(i);
  }

  for (let i = 0; i < $voltarMenuDeviceCategory.length; i++) {
    (function (x) {
      $voltarMenuDeviceCategory[x].addEventListener("click", function () {
        $deviceCategories[x].classList.toggle("noShow");
      });
    })(i);
  }

  for (i = 0; i < $optionSubcategoryDevice.length; i++) {
    (function (x) {
      $optionSubcategoryDevice[x].addEventListener("click", function () {
        $deviceSubcategories[x].classList.toggle("noShow");
      });
    })(i);
  }

  for (let i = 0; i < $voltarMenuDeviceSubcategory.length; i++) {
    (function (x) {
      $voltarMenuDeviceSubcategory[x].addEventListener("click", function () {
        $deviceSubcategories[x].classList.toggle("noShow");
      });
    })(i);
  }
} else {
  $menu.addEventListener("mouseover", function () {
    $menuOptions.classList.remove("noShow");
  });

  $menuOptions.addEventListener("mouseover", function () {
    $menuOptions.classList.remove("noShow");
  });

  $menuOptions.addEventListener("mouseout", function () {
    $menuOptions.classList.add("noShow");
  });

  for (let i = 0; i < $menuCategory.length; i++) {
    $menuCategory[i].addEventListener("mouseover", function () {
      $categories[i].classList.remove("noShow");
    });

    $menuCategory[i].addEventListener("mouseout", function () {
      $categories[i].classList.add("noShow");
    });
  }

  for (let i = 0; i < $menuSubcategory.length; i++) {
    $menuSubcategory[i].addEventListener("mouseover", function () {
      $subcategories[i].classList.remove("noShow");
    });

    $menuSubcategory[i].addEventListener("mouseout", function () {
      $subcategories[i].classList.add("noShow");
    });
  }
}
