const btn = document.getElementById("btn");
const adviceText = document.getElementById("adviceText");
const adviceId = document.getElementById("adviceId");

// async function getAdvice()
const getAdvice = async() => {
  const resp = await fetch("https://api.adviceslip.com/advice",  { cache: "no-cache" });
  //add { cache: "no-cache" } to prevent repeated response
  const data = await resp.json();
  const id = data.slip.id;
  const advice = data.slip.advice;
  adviceText.textContent = advice;
  adviceId.textContent = id;
}

//trigger animation
const animate = () => {
  //reset animation
  btn.classList.remove("animate");
  //trigger reflow
  void btn.offsetWidth;
  //start animation
  btn.classList.add("animate");
}

window.addEventListener("DOMContentLoaded", () => {
  getAdvice();
});

window.addEventListener("keypress", (keyPressed) => {
  if (keyPressed.key == "Enter") {
    getAdvice();
    animate();
  }
});

btn.addEventListener("click", () => {
  getAdvice();
  animate();
});
