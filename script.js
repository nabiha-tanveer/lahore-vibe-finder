// ---------- DATA ----------
const spots = [
  { id: 1, name: "The Coffee Bean Hideout", mood: "chill", price: "Rs. 400", desc: "Cozy corner with soft lighting, perfect for unwinding.", img: "https://images.unsplash.com/photo-1739723745132-97df9db49db2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Open till midnight. Known for cold brews and outdoor seating." },
  { id: 2, name: "Study Nook DHA", mood: "study", price: "Rs. 350", desc: "Quiet, fast wifi, plenty of plug points.", img: "https://plus.unsplash.com/premium_photo-1661938292024-3869b974f578?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Ideal for group study. Whiteboards available on request." },
  { id: 3, name: "Pastel Café Gulberg", mood: "aesthetic", price: "Rs. 900", desc: "Instagram-worthy interiors with pastel tones.", img: "https://media.istockphoto.com/id/2293070789/photo/rooftop-patio-breakfast-with-coffee-pastries-and-city-view.jpg?s=1024x1024&w=is&k=20&c=7fORe4A7l03GhsSeNDflzSmnQRX55sTdnLW3yE-lnWQ=", details: "Best lighting in the afternoon. Try their rose latte." },
  { id: 4, name: "Student Dhaba", mood: "budget", price: "Rs. 60", desc: "Cheap chai and snacks, always packed with students.", img: "https://plus.unsplash.com/premium_photo-1712736395898-02844eeb1968?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Rs. 50 chai. Open 24/7 near campus." },
  { id: 5, name: "Rooftop Reads", mood: "chill", price: "Rs. 500", desc: "Rooftop seating with a relaxed vibe.", img: "https://images.unsplash.com/photo-1771695092168-9730f1ebcc73?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Great for evening hangouts. Live music on weekends." },
  { id: 6, name: "Quiet Corner Library Café", mood: "study", price: "Rs. 300", desc: "Library-style seating, silent zone.", img: "https://images.unsplash.com/photo-1777734582917-377c2ecd67ec?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "No loud conversations allowed. Bring your own laptop." },
  { id: 7, name: "Sunset Terrace", mood: "chill", price: "Rs. 800", desc: "Open-air terrace with warm evening lighting.", img: "https://images.unsplash.com/photo-1500130695625-8aa9b575c62a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Best visited after 6pm. Great for unwinding after class." },
  { id: 8, name: "Grind Zone", mood: "study", price: "Rs. 350", desc: "Silent focus zone with individual desks.", img: "https://plus.unsplash.com/premium_photo-1683586217703-58663979fa92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Bookable desks, unlimited coffee refills for members." },
  { id: 9, name: "Botanica Café", mood: "aesthetic", price: "Rs. 850", desc: "Plant-filled café with dreamy natural light.", img: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Popular for photoshoots. Try their matcha specials." },
  { id: 10, name: "Roadside Karak", mood: "budget", price: "Rs. 40", desc: "No-frills roadside stall, unbeatable prices.", img: "https://plus.unsplash.com/premium_photo-1699555728731-70a9bf22526a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Rs. 40 karak chai. Popular late-night student spot." },
  { id: 11, name: "Cloud Nine Lounge", mood: "chill", price: "Rs. 600", desc: "Comfy bean bags and lo-fi music.", img: "https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Board games available. Best for casual hangouts." },
  { id: 12, name: "Focus Point", mood: "study", price: "Rs. 300", desc: "Library-style setup with strict silent policy.", img: "https://plus.unsplash.com/premium_photo-1749137444919-2bf7d6964d1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Two-hour desk booking slots. ID card required at entry." },
  { id: 13, name: "Brewhouse Corner", mood: "chill", price: "Rs. 450", desc: "Vintage-style café with vinyl music playing.", img: "https://images.unsplash.com/photo-1691067987594-b1b7f84ba55a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Great ambiance for long conversations. Try their cold coffee." },
  { id: 14, name: "The Silent Room", mood: "study", price: "Rs. 250", desc: "Ultra-quiet reading room with dim, focused lighting.", img: "https://images.unsplash.com/photo-1789073484063-6586bd985021?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "No phone calls allowed. Lockers available for bags." },
  { id: 15, name: "Bloom Café", mood: "aesthetic", price: "Rs. 950", desc: "Floral-themed café with pink accents everywhere.", img: "https://images.unsplash.com/photo-1768464706123-8eb92de776af?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Popular for birthday shoots. Try their strawberry cream latte." },
  { id: 16, name: "Thela Chai Point", mood: "budget", price: "Rs. 30", desc: "Street-side chai thela, always crowded with regulars.", img: "https://images.unsplash.com/photo-1649836616276-ffa0738091ab?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Rs. 30 chai. Cash only, no seating but great vibe." },
  { id: 17, name: "Lazy Afternoon", mood: "chill", price: "Rs. 550", desc: "Hammocks and cushions for a laid-back hangout.", img: "https://images.unsplash.com/photo-1504963642567-227b3bbd79de?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Best on weekends. Bring a book or just nap." },
  { id: 18, name: "Deadline Den", mood: "study", price: "Rs. 200", desc: "Late-night study spot open till 3am.", img: "https://images.unsplash.com/photo-1594125674965-70d796b6693f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", details: "Free printing for students. Coffee refills every hour." }
];

const testimonials = [
  { name: "Ayesha", text: "Found my go-to study spot in seconds. Love the filter!" },
  { name: "Hamza", text: "The vibe-based search actually works, super accurate." },
  { name: "Sara", text: "Clean design and so easy to use on mobile." }
];

const PLACEHOLDER_IMG = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180"><rect width="300" height="180" fill="#d97b4f"/><text x="50%" y="50%" fill="#fff" font-size="18" text-anchor="middle" dominant-baseline="middle">Vibe Spot</text></svg>'
);

// ---------- STATE ----------
let currentMood = "all";
let searchTerm = "";
let sortBy = "default";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let ratingsData = JSON.parse(localStorage.getItem("ratingsData")) || {};
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

// ---------- SAFE DOM GETTERS (return null if element not on this page) ----------
const $ = (id) => document.getElementById(id);

const spotsGrid = $("spotsGrid");
const searchInput = $("searchInput");
const moodFilters = $("moodFilters");
const sortSelect = $("sortSelect");
const modalOverlay = $("modalOverlay");
const modalContent = $("modalContent");
const modalClose = $("modalClose");
const themeToggle = $("themeToggle");
const testimonialSlider = $("testimonialSlider");
const newsletterForm = $("newsletterForm");
const formMsg = $("formMsg");
const surpriseBtn = $("surpriseBtn");
const favCountBtn = $("favCountBtn");
const favCount = $("favCount");
const favModalOverlay = $("favModalOverlay");
const favModalContent = $("favModalContent");
const favModalClose = $("favModalClose");
const toast = $("toast");
const bookingsBtn = $("bookingsBtn");
const bookingCount = $("bookingCount");
const bookingsModalOverlay = $("bookingsModalOverlay");
const bookingsModalContent = $("bookingsModalContent");
const bookingsModalClose = $("bookingsModalClose");
const hamburgerBtn = $("hamburgerBtn");
const navLinks = $("navLinks");
const galleryGrid = $("galleryGrid");
const lightboxOverlay = $("lightboxOverlay");
const lightboxImg = $("lightboxImg");
const lightboxCaption = $("lightboxCaption");
const lightboxClose = $("lightboxClose");
const contactForm = $("contactForm");
const contactFormMsg = $("contactFormMsg");
const typewriterEl = $("typewriterHeading");

// ---------- HAMBURGER MENU (mobile nav) ----------
if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ---------- HELPER: image fallback ----------
function attachImgFallback(container) {
  container.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", function handler() {
      img.removeEventListener("error", handler);
      img.src = PLACEHOLDER_IMG;
    });
  });
}

// ---------- TOAST ----------
let toastTimer;
function showToast(message) {
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

// ---------- RATINGS ----------
function getRating(id) {
  if (!ratingsData[id]) {
    ratingsData[id] = { rating: 4.0, votes: 1 };
  }
  return ratingsData[id];
}

function rateSpot(id, stars) {
  const current = getRating(id);
  const newVotes = current.votes + 1;
  const newRating = ((current.rating * current.votes) + stars) / newVotes;
  ratingsData[id] = { rating: newRating, votes: newVotes };
  localStorage.setItem("ratingsData", JSON.stringify(ratingsData));
  renderSpots();
  showToast("Thanks for rating! ⭐");
}

function renderStars(rating, interactive = false, spotId = null) {
  const rounded = Math.round(rating);
  let html = `<div class="stars ${interactive ? "rating-stars-interactive" : ""}">`;
  for (let i = 1; i <= 5; i++) {
    html += interactive
      ? `<span data-id="${spotId}" data-star="${i}">${i <= rounded ? "★" : "☆"}</span>`
      : (i <= rounded ? "★" : "☆");
  }
  html += `</div>`;
  return html;
}

// ---------- RENDER SPOTS (only runs if spotsGrid exists on this page) ----------
function renderSpots() {
  if (!spotsGrid) return;

  let filtered = spots.filter(spot => {
    const matchesMood = currentMood === "all" || spot.mood === currentMood;
    const matchesSearch = spot.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMood && matchesSearch;
  });

  if (sortBy === "name") {
    filtered = filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "rating") {
    filtered = filtered.slice().sort((a, b) => getRating(b.id).rating - getRating(a.id).rating);
  } else if (sortBy === "popular") {
    filtered = filtered.slice().sort((a, b) => getRating(b.id).votes - getRating(a.id).votes);
  }

  spotsGrid.innerHTML = filtered.length ? "" : "<p>No spots found. Try a different filter.</p>";

  filtered.forEach(spot => {
    const isFav = favorites.includes(spot.id);
    const r = getRating(spot.id);
    const card = document.createElement("div");
    card.className = "spot-card";
    card.innerHTML = `
      <img src="${spot.img}" alt="${spot.name}">
      <div class="spot-card-body">
        <button class="fav-btn" data-id="${spot.id}">${isFav ? "❤️" : "🤍"}</button>
        <h3>${spot.name}</h3>
        <p>${spot.desc}</p>
        <span class="spot-tag">${spot.mood}</span>
        <span class="price-tag">${spot.price}</span>
        <div style="margin-top:8px;">${renderStars(r.rating)} <span class="rating-text">(${r.votes})</span></div>
      </div>
    `;
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("fav-btn")) openModal(spot);
    });
    spotsGrid.appendChild(card);
  });

  attachImgFallback(spotsGrid);

  document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(Number(btn.dataset.id));
    });
  });

  updateFavCount();
}

// ---------- FAVORITES ----------
function toggleFavorite(id) {
  const spot = spots.find(s => s.id === id);
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
    showToast(`Removed "${spot.name}" from favorites`);
  } else {
    favorites.push(id);
    showToast(`Added "${spot.name}" to favorites ❤️`);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderSpots();
}

function updateFavCount() {
  if (favCount) favCount.textContent = favorites.length;
}

function renderFavModal() {
  if (!favModalContent) return;
  const favSpots = spots.filter(s => favorites.includes(s.id));
  favModalContent.innerHTML = favSpots.length
    ? favSpots.map(s => `
        <div class="fav-mini-card">
          <img src="${s.img}">
          <div>
            <strong>${s.name}</strong><br>
            <span class="spot-tag">${s.mood}</span>
          </div>
        </div>
      `).join("")
    : "<p>No favorites yet. Tap the heart on any spot!</p>";
  attachImgFallback(favModalContent);
}

if (favCountBtn) {
  favCountBtn.addEventListener("click", () => {
    renderFavModal();
    favModalOverlay.classList.add("active");
  });
}
if (favModalClose) favModalClose.addEventListener("click", () => favModalOverlay.classList.remove("active"));
if (favModalOverlay) {
  favModalOverlay.addEventListener("click", (e) => {
    if (e.target === favModalOverlay) favModalOverlay.classList.remove("active");
  });
}

// ---------- BOOKINGS ----------
function updateBookingCount() {
  if (bookingCount) bookingCount.textContent = bookings.length;
}

function addBooking(spotName, visitorName, date, time) {
  bookings.push({ id: Date.now(), spotName, visitorName, date, time });
  localStorage.setItem("bookings", JSON.stringify(bookings));
  updateBookingCount();
  showToast(`Visit booked at "${spotName}" ✅`);
}

function cancelBooking(id) {
  bookings = bookings.filter(b => b.id !== id);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  updateBookingCount();
  renderBookingsModal();
  showToast("Booking cancelled");
}

function renderBookingsModal() {
  if (!bookingsModalContent) return;
  bookingsModalContent.innerHTML = bookings.length
    ? bookings.map(b => `
        <div class="booking-mini-card">
          <strong>${b.spotName}</strong>
          <span>${b.visitorName} • ${b.date} at ${b.time}</span><br>
          <button class="cancel-booking-btn" data-id="${b.id}">Cancel booking</button>
        </div>
      `).join("")
    : "<p>No bookings yet.</p>";

  bookingsModalContent.querySelectorAll(".cancel-booking-btn").forEach(btn => {
    btn.addEventListener("click", () => cancelBooking(Number(btn.dataset.id)));
  });
}

if (bookingsBtn) {
  bookingsBtn.addEventListener("click", () => {
    renderBookingsModal();
    bookingsModalOverlay.classList.add("active");
  });
}
if (bookingsModalClose) bookingsModalClose.addEventListener("click", () => bookingsModalOverlay.classList.remove("active"));
if (bookingsModalOverlay) {
  bookingsModalOverlay.addEventListener("click", (e) => {
    if (e.target === bookingsModalOverlay) bookingsModalOverlay.classList.remove("active");
  });
}

// ---------- SPOT DETAILS MODAL (only on spots.html) ----------
function openModal(spot) {
  if (!modalOverlay) return;
  const r = getRating(spot.id);
  const todayStr = new Date().toISOString().split("T")[0];
  modalContent.innerHTML = `
    <img src="${spot.img}" style="width:100%;border-radius:10px;margin-bottom:15px;">
    <h2>${spot.name}</h2>
    <span class="spot-tag">${spot.mood}</span>
    <span class="price-tag">${spot.price}</span>
    <p style="margin-top:12px;">${spot.details}</p>
    <div style="margin-top:14px;">
      <strong>Rate this spot:</strong><br>
      ${renderStars(r.rating, true, spot.id)}
      <span class="rating-text">${r.rating.toFixed(1)} (${r.votes} votes)</span>
    </div>

    <div class="booking-form">
      <strong>📅 Book a Visit</strong>
      <form id="bookingForm">
        <label for="visitorName">Your Name</label>
        <input type="text" id="visitorName" placeholder="e.g. Nabiha" required>

        <label for="visitDate">Date</label>
        <input type="date" id="visitDate" min="${todayStr}" required>

        <label for="visitTime">Time</label>
        <input type="time" id="visitTime" required>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  `;
  modalOverlay.classList.add("active");
  attachImgFallback(modalContent);

  modalContent.querySelectorAll(".rating-stars-interactive span").forEach(star => {
    star.addEventListener("click", () => {
      rateSpot(Number(star.dataset.id), Number(star.dataset.star));
      openModal(spot);
    });
  });

  const bookingForm = document.getElementById("bookingForm");
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const visitorName = document.getElementById("visitorName").value.trim();
    const visitDate = document.getElementById("visitDate").value;
    const visitTime = document.getElementById("visitTime").value;

    if (!visitorName || !visitDate || !visitTime) {
      showToast("Please fill all booking fields");
      return;
    }

    addBooking(spot.name, visitorName, visitDate, visitTime);
    modalOverlay.classList.remove("active");
  });
}
if (modalClose) modalClose.addEventListener("click", () => modalOverlay.classList.remove("active"));
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("active");
  });
}

// ---------- FILTERS ----------
if (moodFilters) {
  moodFilters.addEventListener("click", (e) => {
    if (!e.target.classList.contains("mood-btn")) return;
    document.querySelectorAll(".mood-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    currentMood = e.target.dataset.mood;
    renderSpots();
  });
}

// ---------- SORT ----------
if (sortSelect) {
  sortSelect.addEventListener("change", (e) => {
    sortBy = e.target.value;
    renderSpots();
  });
}

// ---------- SEARCH ----------
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderSpots();
  });
}

// ---------- SURPRISE ME ----------
if (surpriseBtn) {
  surpriseBtn.addEventListener("click", () => {
    const random = spots[Math.floor(Math.random() * spots.length)];
    if (modalOverlay) {
      openModal(random);
    } else {
      // On Home page: redirect to spots page and show a toast first
      showToast(`How about "${random.name}"? 🎲`);
      setTimeout(() => { window.location.href = "spots.html"; }, 900);
    }
  });
}

// ---------- THEME TOGGLE ----------
if (themeToggle) {
  // Apply saved theme on load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  }
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// ---------- TESTIMONIAL SLIDER ----------
let testimonialIndex = 0;
function renderTestimonial() {
  if (!testimonialSlider) return;
  const t = testimonials[testimonialIndex];
  testimonialSlider.style.opacity = 0;
  setTimeout(() => {
    testimonialSlider.innerHTML = `<p>"${t.text}"</p><h4 style="margin-top:10px;">- ${t.name}</h4>`;
    testimonialSlider.style.opacity = 1;
  }, 300);
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
if (testimonialSlider) setInterval(renderTestimonial, 4000);

// ---------- NEWSLETTER FORM ----------
if (newsletterForm) {
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
      showToast("Subscribed successfully! 🎉");
    }
  });
}

// ---------- CONTACT FORM (contact.html only) ----------
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !emailRegex.test(email)) {
      contactFormMsg.textContent = "Please enter a valid name and email.";
      contactFormMsg.style.color = "#c0392b";
      return;
    }

    contactFormMsg.textContent = `Thanks ${name}, your message has been sent! We'll reply soon.`;
    contactFormMsg.style.color = "#1e8449";
    contactForm.reset();
    showToast("Message sent successfully! 📩");
  });
}

// ---------- GALLERY + LIGHTBOX (gallery.html only) ----------
if (galleryGrid) {
  spots.forEach(spot => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `<img src="${spot.img}" alt="${spot.name}">`;
    item.addEventListener("click", () => {
      lightboxImg.src = spot.img;
      lightboxCaption.textContent = `${spot.name} — ${spot.mood}`;
      lightboxOverlay.classList.add("active");
    });
    galleryGrid.appendChild(item);
  });
  attachImgFallback(galleryGrid);
}
if (lightboxClose) lightboxClose.addEventListener("click", () => lightboxOverlay.classList.remove("active"));
if (lightboxOverlay) {
  lightboxOverlay.addEventListener("click", (e) => {
    if (e.target === lightboxOverlay) lightboxOverlay.classList.remove("active");
  });
}

// ---------- TYPEWRITER EFFECT (index.html only) ----------
if (typewriterEl) {
  const typewriterText = "Find Your Perfect Spot in Lahore";
  let twIndex = 0;
  function typeWriter() {
    if (twIndex < typewriterText.length) {
      typewriterEl.textContent += typewriterText.charAt(twIndex);
      twIndex++;
      setTimeout(typeWriter, 60);
    }
  }
  typeWriter();
}

// ---------- INIT ----------
renderSpots();
renderTestimonial();
updateBookingCount();