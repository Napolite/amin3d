const card = document.querySelector(".card");
const container = document.querySelector(".container");
const shoe = document.querySelector(".shoe");
const title = document.querySelector(".title");
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

  //   console.log(xAxis, yAxis);

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseleave", () => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = `all ease 0.5s`;
  shoe.style.transform = `translateZ(0px) rotate(0deg) `;
  title.style.transform = `translateZ(0px)`;
});

container.addEventListener("mouseenter", () => {
  card.style.transition = `none`;
  shoe.style.transform = `translateZ(100px) rotate(-35deg)`;
});
