const input = document.querySelectorAll(".controls input");

function changeStyle() {
  //https://www.dofactory.com/html/input/data custom attribute
  const unit = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + unit
  );
}

input.forEach((item) => {
  item.addEventListener("change", changeStyle); //滑鼠放開
  item.addEventListener("mousemove", changeStyle); //滑鼠移動
});
