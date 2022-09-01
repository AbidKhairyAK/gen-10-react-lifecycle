import React from "react";

const productFromApi = [
  {
    nama: "earphone",
    harga: 20000,
  },
  {
    nama: "mouse",
    harga: 50000,
  },
  {
    nama: "keyboard",
    harga: 25000,
  },
];

export default class LatihanLifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      carts: [
        {
          nama: "mouse",
          harga: 50000,
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({ products: productFromApi });
  }

  tambahKeranjang(produkYangDitambahkan) {
    const keranjangSekarang = [...this.state.carts];
    keranjangSekarang.push(produkYangDitambahkan);
    this.setState({ carts: keranjangSekarang });
  }

  render() {
    return (
      <div>
        Daftar produk
        <ul>
          {this.state.products.map((barang) => (
            <li>
              {barang.nama} | Rp. {barang.harga} |
              <button onClick={() => this.tambahKeranjang(barang)}>
                {" "}
                keranjang{" "}
              </button>
            </li>
          ))}
        </ul>
        Daftar Keranjang
        <ul>
          {this.state.carts.map((cart) => (
            <li>
              {cart.nama} | Rp. {cart.harga}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
