var
  zoomSize = 1;

function zoomIn() {
  zoomSize *= 1.1;
  zoom();
}
function zoomOut() {
  zoomSize /= 1.1;
  zoom();
}
function zoomReset() {
  document.body.style.zoom = 'unset';
  zoomSize = 1; // 누적된 변수값을 초깃값으로 재할당
}
function zoom() {
  document.body.style.zoom = zoomSize;
}