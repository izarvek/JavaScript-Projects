const button = document.getElementsByTagName("button")[0];
const wrapper = document.querySelector('.wrapper');

 button.addEventListener("click", () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);        
  const blue = Math.floor(Math.random() * 255);
  wrapper.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});