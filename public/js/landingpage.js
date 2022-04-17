var animationElements = document.querySelectorAll(".show-on-screen");

function toggleAnimationWindow(element) {
  var rect = element.getClientRects()[0];
  var heightScreen = window.innerHeight;

  //check xem element co ben trong man hinh hay khong
  if (!(rect.bottom < 0 || rect.top > heightScreen)) {
    //ben trong thi vao day
    element.classList.add("start");
  } else {
    // ngoai thi vao day n
    element.classList.remove("start");
  }
}

function checkAnimation() {
  animationElements.forEach((el) => {
    toggleAnimationWindow(el);
  });
}
window.onscroll = checkAnimation;
