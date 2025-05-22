const audio = document.getElementById("myAudio");
const button = document.getElementById("playButton");

// Coba Auto Play
audio.onplay().catch(() => {
  button.style.display = "inline-block";
});

function playAudio() {
  audio.play();
  button.style.display = "none";
}

// Efek Scrol
window.addEventListener("scroll", () => {
  const scrollText = document.querySelector(".scroll-text");
  const scrollY = window.scrollY;
  scrollText.style.left = -(scrollY % scrollText.scrollWidth) + "px";
});

function openBook(book) {
  book.classList.toggle("open");
}

// Efek Klik
function handleCardClick(clickedCard) {
  const cards = document.querySelectorAll(".cardss");

  if (clickedCard.classList.contains("active")) {
    cards.forEach((cardss) => {
      cardss.classList.remove("blur");
      cardss.classList.remove("active");
    });
  } else {
    cards.forEach((cardss) => {
      cardss.classList.add("blur");
      cardss.classList.remove("active");
    });

    clickedCard.classList.remove("blur");
    clickedCard.classList.add("active");
  }
}

// Form js
function sendWhatsapp() {
  const message = document.getElementById('message').value;

  const url = "https://api.whatsapp.com/send?phone=6281239943191&text=Hallo%20KK%20Benox%20Tanggapan%20saya%20*"+ message +"*"

window.open(url)

}

