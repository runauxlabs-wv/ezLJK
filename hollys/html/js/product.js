let recommandMenus = [
  {
    name: "딸기 피스타쵸 맛있쵸",
    price: 6800,
  },
  {
    name: "유자 민트 오로라 티",
    price: 5800,
  },
  {
    name: "피스타치오 빅토리아 케이크",
    price: 6500,
  },
  {
    name: "제주 레몬 애플티",
    price: 5800,
  },
  {
    name: "생딸기 가득 주스",
    price: 6900,
  },
  {
    name: "new 딸기 듬뿍 라떼",
    price: 5900,
  },
  {
    name: "토마토 통통 주스",
    price: 6500,
  },
  {
    name: "스트로 베리머치 라운드",
    price: 7500,
  },
  {
    name: "베리베리 딸기 요거트",
    price: 6300,
  },

];

function inputP() {
  let sec1Wrappers = document.querySelectorAll(".sli .swiper-slide");
  // 배열에서 인덱스와 각 값을 다 사용해야 한다면, 예전은 잊고 선택자.forEach()를 사용하자
  sec1Wrappers.forEach((sec1Wrapper, index) => {
    let menus = ``;
    menus += `
       <article>
         <a href="#">
           <h4>${recommandMenus[index].name}</h4>
           <span>${recommandMenus[index].price} 원</span>
         </a>
       </article>`;
    sec1Wrapper.innerHTML = menus;
    // 개선안) 데이터만 업데이트 하면 슬라이드가 추가되는 형식이 유지보수하기가 좋으니, 데이터배열을 돌면서 innerHTML할 요소에 <div class="swiper-slide">가 되도록 구성하는것이 좋다.
    // css에서 백그라운드 이미지를 운용하고 있으므로, 중복 class 추가부분에 백팃을 구성하면 된다. classList.add를 이용하여 각 요소에 인덱스 번호를 붙이 클래스를 추가하자.
  });
}
inputP();