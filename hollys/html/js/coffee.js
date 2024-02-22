let menuLists = document.querySelectorAll(".menu-list > ul > li");
let articles = document.querySelectorAll(".article");

// for (const menuList of [...menuLists]) {
//   menuList.addEventListener('click', function (e) {
//     e.preventDefault(); // a기능 막기
//     for (const article of [...articles]) {
//       tab(article);
//     }
//   });
// }

// function tab(element) {
//   let alreadyOn = document.querySelector(".article.tabon");
//   console.log(alreadyOn);
//   let notThis = alreadyOn !== element;
//   if (notThis) {
//     for (const article of [...articles]) article.classList.remove("tabon");
//     element.classList.add("tabon");
//   } else {
//     element.classList.remove("tabon");
//   }
// }

menuLists.forEach((menu, index) => {
  menu.addEventListener('click', function (e) {
    e.preventDefault(); // a기능 막기
    for (const article of articles) article.classList.remove("tabon");
    articles[index].classList.add("tabon");
  });
});