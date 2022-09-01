import React from "react";

const productFromApi = [
  {
    nama : 'earphone',
    harga : 20000
  },
  {
    nama : 'mouse',
    harga : 50000
  },
  {
    nama : 'keyboard',
    harga : 25000
  },
]

export default class LatihanLifeCycle extends React.Component {
  constructor () {
    super() 
    this.state = {
      products :[]
    } 
  }

  componentDidMount() {
    this.setState({products : productFromApi})
  }

  render() {
    return <div>
      Daftar produk 
      <ul>
        {this.state.products.map((barang)=>
          <li>
            {barang.nama} |
            Rp. {barang.harga} |
            <button> keranjang </button>
          </li>
        
        )}
      </ul>
    </div>
  }
}
