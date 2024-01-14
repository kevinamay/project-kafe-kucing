// digunakan untuk menlooping data yang kita ambil dari array dai bawah
// dibawah digunakan untuk 1 class mechandise bisa mencakup 4 product mechandise di dalamnya
// atau bisa sekaligus meng edit data di dalam class merchandise
document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Tumbler Classic", img: "tumbler1.1.jpeg", price: 450000 },
      { id: 2, name: "Tumbler Disney", img: "tumbler2.jpeg", price: 650000 },
      { id: 3, name: "Tumbler ", img: "tumbler5.jpeg", price: 380000 },
      { id: 4, name: "Classic Mug", img: "tumbler4.jpeg", price: 280000 },
    ],
  }));
  // digunakan untuk membuat bagian cart bertambah sesuai product yang di tambah dicart
  // bertambah dari segi harga/total dan product
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
    },
  });
});

// konversi ke rupiah
// digunakan untuk mengatur harga merchandise menjadi satuan rupiah,bisa diganti dibagian CURRENCY
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    // diatas digunkan untuk mengilagkan koma dibelakang harga ribuan
  }).format(number);
};
