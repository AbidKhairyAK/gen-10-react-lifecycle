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
      totalHarga : 0,
      products: [],
      carts: [
        /*{
          nama: "mouse",
          harga: 50000,
        },*/
      ],
    };
  }

  componentDidMount() {
    this.setState({ products: productFromApi });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.carts.length !== this.state.carts.length ){
      let totalHarga = 0;
      for(let cart of this.state.carts){
        totalHarga = totalHarga + cart.harga
      }

      this.setState({totalHarga: totalHarga})
    }

  }

  tambahKeranjang(produkYangDitambahkan) {
    const keranjangSekarang = [...this.state.carts];
    keranjangSekarang.push(produkYangDitambahkan);
    this.setState({ carts: keranjangSekarang });
  }

  render() {
    return (
      <div>
        <p>Total Harga: {this.state.totalHarga}</p>
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
