// 아코디언 구조를 활용한 Nav, 자기자신 눌렀을 때 닫힘
// 클릭이벤트 구현
let dps = document.querySelectorAll('.depth1');
for (const dp of [...dps]) {
  // depth1을 클릭하면
  dp.addEventListener('click', function () {
    let dp2 = this.querySelector('.depth2');
    collapse(dp2);

    // depth1이 열린상태에서 그 자식 depth2을 클릭하면, 버블링막기
    dp2.addEventListener('click', (e) => { e.stopPropagation(); });
  });
};
// 아코디언 함수
function collapse(element) { //element자리에 dp2들어옴
  let alreadyOn = document.querySelector(".depth2.-on");
  // 기존에 활성화된 메뉴 변수선언
  let notThis = alreadyOn !== element;
  // 기존에 활성화된 메뉴이 내가 누른 메뉴이 아닌 경우 변수선언
  if (notThis) {
    let dp2s = document.querySelectorAll('.depth2');
    // 닫혀있는 메뉴을 누른경우, 모든 .depth2에서 -on제거 후 누른대상에 -on 활성화
    for (const dp2 of [...dp2s]) dp2.classList.remove("-on");
    element.classList.add("-on");
  } else {
    // 열어놓은 메뉴을 또 누른경우, 누른대상에서 -on 제거
    element.classList.remove("-on");
  }
}