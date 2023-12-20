// let inch = (parseFloat(prompt("센티미터로 변환하고싶은 인치를 입력하시오")));
// let centi;

// centi = (inch * 2.54).toFixed(2);

// document.write(`${inch}inch는 ${centi}cm 입니다`);


let suroScore = prompt("수로점수를 입력하시오");

if (suroScore != null) {
  if (parseInt(suroScore) >= 3000) {
    alert(`당신의 수로점수는 ${suroScore}점 입니다
    축하합니다 특별회원입니다`);
  }
  else if (parseInt(suroScore) >= 2000) {
    alert(`당신의 수로점수는 ${suroScore}점 입니다
    축하합니다 우수회원입니다`);
  }
  else if (parseInt(suroScore) >= 1000) {
    alert(`당신의 수로점수는 ${suroScore}점 입니다
    정회원입니다`);
  }
  else if (parseInt(suroScore) < 1000) {
    alert(`당신의 수로점수는 ${suroScore}점 입니다
    실망입니다 분발하십시오`);
  }
}
else {
  alert("F5를 눌러 다시 입력해주세요!");
}