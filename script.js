// 🎉 Continuous rainbow confetti
(function continuousConfetti() {
  (function frame() {
    confetti({
      particleCount: 5,
      startVelocity: 20,
      spread: 360,
      ticks: 200,
      origin: {
        x: Math.random(),
        y: 0
      },
      colors: ['#FF0000','#FF7F00','#FFFF00','#00FF00','#0000FF','#4B0082','#8F00FF']
    });
    requestAnimationFrame(frame);
  })();
})();

// 🖼️ Profile image change
const profileImg = document.getElementById("profile-img");
const profileUpload = document.getElementById("profile-upload");

profileImg.addEventListener("click", () => {
  profileUpload.click();
});

profileUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profileImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// ⏳ Countdown to Oct 3 at midnight
function updateCountdown() {
  const target = new Date("October 3, " + new Date().getFullYear() + " 00:00:00");
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "It's October 3rd!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
