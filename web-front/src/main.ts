import "./style.css"

function main() {
  // カウンターの実装
  const counterButton = document.getElementById("counter");
  if (counterButton) {
    let count = 0;
    counterButton.addEventListener("click", () => {
      count++;
      counterButton.textContent = count.toString();
    });
  }
}

main();
