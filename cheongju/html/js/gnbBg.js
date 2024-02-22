let gnbUl = document.querySelector('.gnb-wrap > ul');
let gnbWrapBg = document.querySelector('.gnb-wrap .gnb-bg');

gnbUl.addEventListener('mouseenter', () => {
  gnbWrapBg.classList.add('active');
});
gnbUl.addEventListener('mouseleave', () => {
  gnbWrapBg.classList.remove('active');
});