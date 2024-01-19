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

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      // jika belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sudah ada cek apakah barang beda atau sama dengan yang di cart
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
      // console.log(this.total);
    },
    // remove
    remove(id){
      // ambil item yang mau diremove berdasarkan id nya
      const cartItem = this.items.find((item) => item.id === id);
      // jika item lebih dari 1
      if(cartItem.quantity > 1) {
        // telusuri satu satu
        this.items = this.items.map((item) =>{
          // jika bukan barang yang diklik
          if(item.id !== id){
            return item;
          } else{
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        })
      } else if (cartItem.quantity === 1) {
        // jika barangnya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    }
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
