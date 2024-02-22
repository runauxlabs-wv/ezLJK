let events = [
  {
    name: "상큼달달 딸기주의보! 딸기맛집 할리스 신메뉴 출시!",
    period: "2024-01-05 ~ 2024-03-07",
  },
  {
    name: "[멤버십 혜택] 할리스 멤버십 회원만을 위한 1월의 혜택 안내",
    period: "2024-01-01 ~ 2024-02-29",
  },
  {
    name: "[출시기념 이벤트] 할리베어 윈터 케이크 매장 구매 EVENT!",
    period: "2023-12-11 ~ 2024-01-31",
  },
];

function inputE() {
  let sec2wrapper = document.querySelector(".sec2-wrapper");

  let article = ``;
  for (const event of events) {
    article += `
    <article>
      <a href="#">
        <h4>${event.name}</h4>
        <span>${event.period}</span>
      </a>
    </article>`;
  }
  sec2wrapper.innerHTML = article;
}
inputE();