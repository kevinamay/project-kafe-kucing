// toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// toggle class active untuk shopping-card
const shoppingCard = document.querySelector(".shopping-card");

// ketika humburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// ketika search menu diklik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  // toogle digunakan untuk menambahkan class aktif krtika belum ada
  searchBox.focus();
  // digunakan untuk agar jika di click icon search nagian di dalam form search langsung active
  e.preventDefault();
  // digunakan agar jika waktu melihat halaman lain dan ingin membuka bagian search halaman tidak otomatis langsung kembali ke atas
};
// ketika shopping card diklik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCard.classList.toggle("active");
  // digunakan agar jika waktu melihat halaman lain dan ingin membuka bagian search halaman tidak otomatis langsung kembali ke atas
  e.preventDefault();
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
// klik diluar sidebar untuk menghilangkan icon search
const search = document.querySelector("#search-button");
// klik diluar sidebar untuk menghilangkan shoppingcard
const shopping = document.querySelector("#shopping-cart-button");

// digunakan agar jika diklik di luar hamburger & search akan otomatis tertutup
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shopping.contains(e.target) && !shoppingCard.contains(e.target)) {
    shoppingCard.classList.remove("active");
  }
});

// Modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    let test = btn.parentNode.parentNode;
    itemDetailModal.children[0].children[1].children[0].src =
      test.children[1].childNodes[1].src;
    e.preventDefault();
    // digunakan untuk membuat produk muncul jika icon view produk diklik
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal agar modal / view produk hilang
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
