class Book {
  #judul;
  #penulis;
  #tahunTerbit;
  #harga;
  #based;
  constructor(judul, penulis, tahunTerbit, harga, based) {
    this.#judul = judul;
    this.#penulis = penulis;
    this.#tahunTerbit = tahunTerbit;
    this.#harga = harga;
    this.#based = based;
  }
  show() {
    console.log(`Judul: ${this.getJudul()}\n Penulis: ${this.getPenulis()}\nTahun Terbit: ${this.getTahunTerbit()}\nHarga: $${this.getHarga()}\nBased On:${this.#based}\nLama Tahun Terbit: ${this.accesHitungUmurBuku()} Tahun`);
  }
  getJudul() {
    return this.#judul;
  }
  getPenulis() {
    return this.#penulis;
  }
  getTahunTerbit() {
    return this.#tahunTerbit;
  }
  getHarga() {
    return this.#harga;
  }
  accesHitungUmurBuku() {
    return this.#hitungUmurBuku();
  }
  #hitungUmurBuku() {
    let currentYear = new Date().getFullYear();
    return currentYear - this.#tahunTerbit;
  }
}
const book1 = new Book("All the bright places", "Jenniver Niven", 2015, 50, "True story");
book1.show();

