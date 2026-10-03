document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("a[href='#']").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    alert("Add your social-media URL in links.html first.");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.08});

document.querySelectorAll(".card,.gallery-item,.social-card,.about-panel").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(14px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(el);
});

const style = document.createElement("style");
style.textContent = ".card.visible,.gallery-item.visible,.social-card.visible,.about-panel.visible{opacity:1!important;transform:none!important}";
document.head.appendChild(style);
