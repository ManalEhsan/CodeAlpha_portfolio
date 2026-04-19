// Typing Effect
const text = ["Frontend Developer", "CS Student", "Web Designer"];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  let current = text[i];

  if (!isDeleting) {
    document.getElementById("typing").textContent =
      current.substring(0, j++);
    
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent =
      current.substring(0, j--);

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, 100);
}

type();


// Scroll animation
const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});