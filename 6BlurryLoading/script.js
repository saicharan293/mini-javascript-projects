const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading-blur");

let interval = setInterval(blur, 30);
let load = 0;
function blur() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  loading.innerHTML = `${load}%`;
  loading.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
