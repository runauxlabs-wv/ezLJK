let btn = document.querySelector(".m-btn");
let ham = document.querySelector(".ham");

btn.addEventListener('click', function () {
  fngnb(ham);
});

function fngnb(element) {
  let alreadyOn = document.querySelector(".ham.-active");
  let notThis = alreadyOn !== element;

  if (notThis) {
    element.classList.add("-active");
  } else {
    element.classList.remove("-active");
  }
}