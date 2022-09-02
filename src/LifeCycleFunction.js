import { useEffect, useState } from 'react'

const productsFromAPi = [
	{
		name: 'Sikat Gigi',
		price: 5000
	},
	{
		name: 'Pasta Gigi',
		price: 10000
	},
	{
		name: 'Sabun Mandi',
		price: 3500
	},
]

export default function LifeCycleFunction () {
	const [products, setProducts] = useState([])
	const [carts, setCarts] = useState([])

	function tambahkanKeKeranjang (produkYangAkanDitambahkan) {
		const keranjangSekarang = [...carts]
		keranjangSekarang.push(produkYangAkanDitambahkan)
		setCarts(keranjangSekarang)
	}

	useEffect(() => {
		setProducts(productsFromAPi)
	}, [])

	return <>
		<p>total harga: 0</p>

		<h4>Daftar Produk:</h4>
		<ul>
			{products.map(product =>
				<li>
					{product.name} | Rp. {product.price}

					<button onClick={() => tambahkanKeKeranjang(product)}>
						+ keranjang
					</button>
				</li>
			)}
		</ul>

		<h4>Daftar Keranjang:</h4>
		<ul>
			{carts.map(cart =>
				<li>
					{cart.name} | Rp. {cart.price}

					<button>
						- hapus
					</button>
				</li>
			)}
		</ul>
	</>
}