/* main-tab */
let tabLists = document.querySelectorAll(".tab-list");
let mWraps = document.querySelectorAll(".m-wrap");

tabLists.forEach((tabList, index) => {
  tabList.addEventListener('click', function () {
    for (const tabList of tabLists) tabList.classList.remove("active");
    tabLists[index].classList.add("active");
    for (const mWrap of mWraps) mWrap.classList.remove("active");
    mWraps[index].classList.add("active");
  });
});

/* customer-tab */
let customerTablists = document.querySelectorAll(".customer-tablist > button");
let cTabs = document.querySelectorAll(".c-tab");

customerTablists.forEach((customerTablist, index) => {
  customerTablist.addEventListener('click', function () {
    for (const customerTablist of customerTablists) customerTablist.classList.remove("active");
    customerTablists[index].classList.add("active");
    for (const cTab of cTabs) cTab.classList.remove("active");
    cTabs[index].classList.add("active");
  });
});


/* f-menu */
let fDps = document.querySelectorAll('.f-depth1');
for (const fDp of [...fDps]) {
  fDp.addEventListener('click', function (e) {
    e.preventDefault();
    let fDp2 = this.querySelector('.f-wrap');
    collapse(fDp2);
    fDp2.addEventListener('click', (e) => { e.stopPropagation(); });
  });
};
function collapse(element) {
  let alreadyOn = document.querySelector(".f-wrap.active");
  let notThis = alreadyOn !== element;
  if (notThis) {
    let fDp2s = document.querySelectorAll('.f-wrap');
    for (const fDp2 of [...fDp2s]) fDp2.classList.remove("active");
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
}