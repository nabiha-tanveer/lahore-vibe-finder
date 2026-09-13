// ---------- DATA ----------
const spots = [
  { id: 1, name: "The Coffee Bean Hideout", mood: "chill", desc: "Cozy corner with soft lighting, perfect for unwinding.", img: "https://images.unsplash.com/photo-1739723745132-97df9db49db2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Open till midnight. Known for cold brews and outdoor seating." },
  { id: 2, name: "Study Nook DHA", mood: "study", desc: "Quiet, fast wifi, plenty of plug points.", img: "https://plus.unsplash.com/premium_photo-1661938292024-3869b974f578?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Ideal for group study. Whiteboards available on request." },
  { id: 3, name: "Pastel Café Gulberg", mood: "aesthetic", desc: "Instagram-worthy interiors with pastel tones.", img: "https://media.istockphoto.com/id/2293070789/photo/rooftop-patio-breakfast-with-coffee-pastries-and-city-view.jpg?s=1024x1024&w=is&k=20&c=7fORe4A7l03GhsSeNDflzSmnQRX55sTdnLW3yE-lnWQ=", details: "Best lighting in the afternoon. Try their rose latte." },
  { id: 4, name: "Student Dhaba", mood: "budget", desc: "Cheap chai and snacks, always packed with students.", img: "https://plus.unsplash.com/premium_photo-1712736395898-02844eeb1968?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Rs. 50 chai. Open 24/7 near campus." },
  { id: 5, name: "Rooftop Reads", mood: "chill", desc: "Rooftop seating with a relaxed vibe.", img: "https://images.unsplash.com/photo-1771695092168-9730f1ebcc73?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Great for evening hangouts. Live music on weekends." },
  { id: 6, name: "Quiet Corner Library Café", mood: "study", desc: "Library-style seating, silent zone.", img: "https://images.unsplash.com/photo-1777734582917-377c2ecd67ec?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "No loud conversations allowed. Bring your own laptop." },
  { id: 7, name: "Sunset Terrace", mood: "chill", desc: "Open-air terrace with warm evening lighting.", img: "https://images.unsplash.com/photo-1500130695625-8aa9b575c62a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Best visited after 6pm. Great for unwinding after class." },
  { id: 8, name: "Grind Zone", mood: "study", desc: "Silent focus zone with individual desks.", img: "https://plus.unsplash.com/premium_photo-1683586217703-58663979fa92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Bookable desks, unlimited coffee refills for members." },
  { id: 9, name: "Botanica Café", mood: "aesthetic", desc: "Plant-filled café with dreamy natural light.", img: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Popular for photoshoots. Try their matcha specials." },
  { id: 10, name: "Roadside Karak", mood: "budget", desc: "No-frills roadside stall, unbeatable prices.", img: "https://plus.unsplash.com/premium_photo-1699555728731-70a9bf22526a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Rs. 40 karak chai. Popular late-night student spot." },
  { id: 11, name: "Cloud Nine Lounge", mood: "chill", desc: "Comfy bean bags and lo-fi music.", img: "https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Board games available. Best for casual hangouts." },
  { id: 12, name: "Focus Point", mood: "study", desc: "Library-style setup with strict silent policy.", img: "https://plus.unsplash.com/premium_photo-1749137444919-2bf7d6964d1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Two-hour desk booking slots. ID card required at entry." },
    { id: 13, name: "Brewhouse Corner", mood: "chill", desc: "Vintage-style café with vinyl music playing.", img: "https://images.unsplash.com/photo-1691067987594-b1b7f84ba55a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Great ambiance for long conversations. Try their cold coffee." },
  { id: 14, name: "The Silent Room", mood: "study", desc: "Ultra-quiet reading room with dim, focused lighting.", img: "https://images.unsplash.com/photo-1789073484063-6586bd985021?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "No phone calls allowed. Lockers available for bags." },
  { id: 15, name: "Bloom Café", mood: "aesthetic", desc: "Floral-themed café with pink accents everywhere.", img: "https://images.unsplash.com/photo-1768464706123-8eb92de776af?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Popular for birthday shoots. Try their strawberry cream latte." },
  { id: 16, name: "Thela Chai Point", mood: "budget", desc: "Street-side chai thela, always crowded with regulars.", img: "https://images.unsplash.com/photo-1649836616276-ffa0738091ab?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Rs. 30 chai. Cash only, no seating but great vibe." },
  { id: 17, name: "Lazy Afternoon", mood: "chill", desc: "Hammocks and cushions for a laid-back hangout.", img: "https://images.unsplash.com/photo-1504963642567-227b3bbd79de?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Best on weekends. Bring a book or just nap." },
  { id: 18, name: "Deadline Den", mood: "study", desc: "Late-night study spot open till 3am.", img: "https://images.unsplash.com/photo-1594125674965-70d796b6693f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Free printing for students. Coffee refills every hour." }
];

const testimonials = [
  { name: "Ayesha", text: "Found my go-to study spot in seconds. Love the filter!" },
  { name: "Hamza", text: "The vibe-based search actually works, super accurate." },
  { name: "Sara", text: "Clean design and so easy to use on mobile." },
 { name: "amna", text: "Nice." }
];

const PLACEHOLDER_IMG = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180"><rect width="300" height="180" fill="%23d97b4f"/><text x="50%25" y="50%25" fill="%23fff" font-size="18" text-anchor="middle" dominant-baseline="middle</text></svg>';

// ---------- STATE ----------
let currentMood = "all";
let searchTerm = "";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// ---------- DOM ----------
const spotsGrid = document.getElementById("spotsGrid");
const searchInput = document.getElementById("searchInput");
const moodFilters = document.getElementById("moodFilters");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const themeToggle = document.getElementById("themeToggle");
const testimonialSlider = document.getElementById("testimonialSlider");
const newsletterForm = document.getElementById("newsletterForm");
const formMsg = document.getElementById("formMsg");

// ---------- RENDER SPOTS ----------
function renderSpots() {
  const filtered = spots.filter(spot => {
    const matchesMood = currentMood === "all" || spot.mood === currentMood;
    const matchesSearch = spot.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMood && matchesSearch;
  });

  spotsGrid.innerHTML = filtered.length ? "" : "<p>No spots found. Try a different filter.</p>";

  filtered.forEach(spot => {
    const isFav = favorites.includes(spot.id);
    const card = document.createElement("div");
    card.className = "spot-card";
    card.innerHTML = `
      <img src="${spot.img}" alt="${spot.name}" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}'">
      <div class="spot-card-body">
        <button class="fav-btn" data-id="${spot.id}">${isFav ? "❤️" : "🤍"}</button>
        <h3>${spot.name}</h3>
        <p>${spot.desc}</p>
        <span class="spot-tag">${spot.mood}</span>
      </div>
    `;
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("fav-btn")) openModal(spot);
    });
    spotsGrid.appendChild(card);
  });

  document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(Number(btn.dataset.id));
    });
  });
}

// ---------- FAVORITES ----------
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderSpots();
}

// ---------- MODAL ----------
function openModal(spot) {
  modalContent.innerHTML = `
    <img src="${spot.img}" style="width:100%;border-radius:10px;margin-bottom:15px;" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}'">
    <h2>${spot.name}</h2>
    <span class="spot-tag">${spot.mood}</span>
    <p style="margin-top:12px;">${spot.details}</p>
  `;
  modalOverlay.classList.add("active");
}
modalClose.addEventListener("click", () => modalOverlay.classList.remove("active"));
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove("active");
});

// ---------- FILTERS ----------
moodFilters.addEventListener("click", (e) => {
  if (!e.target.classList.contains("mood-btn")) return;
  document.querySelectorAll(".mood-btn").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  currentMood = e.target.dataset.mood;
  renderSpots();
});

// ---------- SEARCH ----------
searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderSpots();
});

// ---------- THEME TOGGLE ----------
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ---------- TESTIMONIAL SLIDER ----------
let testimonialIndex = 0;
function renderTestimonial() {
  const t = testimonials[testimonialIndex];
  testimonialSlider.style.opacity = 0;
  setTimeout(() => {
    testimonialSlider.innerHTML = `<p>"${t.text}"</p><h4 style="margin-top:10px;">- ${t.name}</h4>`;
    testimonialSlider.style.opacity = 1;
  }, 300);
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
setInterval(renderTestimonial, 4000);

// ---------- NEWSLETTER FORM ----------
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("emailInput").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.style.color = "#ffe0e0";
  } else {
    formMsg.textContent = "Subscribed successfully! 🎉";
    formMsg.style.color = "#d4ffd4";
    newsletterForm.reset();
  }
});

// ---------- INIT ----------
renderSpots();
renderTestimonial();