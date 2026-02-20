const octoBtn = document.getElementById("octoBtn");
const loveReveal = document.getElementById("loveReveal");

let timer;

octoBtn.addEventListener("click", () => {
  loveReveal.classList.remove("show");
  void loveReveal.offsetWidth; // reflow so animation restarts
  loveReveal.classList.add("show");

  clearTimeout(timer);
  timer = setTimeout(() => {
    loveReveal.classList.remove("show");
  }, 2600);
});

// Cherry blossom interaction: click to "bloom" (brief scale animation)
document.querySelectorAll(".blossom").forEach((el) => {
  el.addEventListener("click", function () {
    this.classList.remove("bloom");
    void this.offsetWidth;
    this.classList.add("bloom");
    setTimeout(() => this.classList.remove("bloom"), 600);
  });
  el.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.click();
    }
  });
});

// Hot air balloon: click to show "I miss you you're 20 now"
const balloonBtn = document.getElementById("balloonBtn");
const balloonReveal = document.getElementById("balloonReveal");
let balloonTimer;

if (balloonBtn && balloonReveal) {
  balloonBtn.addEventListener("click", () => {
    balloonReveal.classList.remove("show");
    void balloonReveal.offsetWidth;
    balloonReveal.classList.add("show");
    clearTimeout(balloonTimer);
    balloonTimer = setTimeout(() => balloonReveal.classList.remove("show"), 3000);
  });
}
