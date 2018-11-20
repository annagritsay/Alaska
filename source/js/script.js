  var button = document.querySelector(".popular-product__button");

  var modal = document.querySelector(".modal-order");

  var overlay = document.querySelector(".overlay");

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-order__active");
    overlay.classList.add("overlay__active");
  });

  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-order__active");
    overlay.classList.remove("overlay__active");
  });
