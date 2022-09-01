import React from 'react';

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

export default class LifeCycleClass extends React.Component {
	constructor () {
		super()

		this.state = {
			totalPrice: 0,
			products: [],
			carts: [
				{
					name: 'Sikat Gigi',
					price: 5000
				}
			]
		}
	}

	componentDidMount () {
		this.setState({ products: productsFromAPi })
	}

	componentDidUpdate () {
		console.log('ini componentDidUpdate')
	}

	componentWillUnmount () {
		console.log('ini componentWillUnmount')
	}

	render () {
		console.log('ini render!')

		return (
			<>
				<p>Daftar Produk:</p>

				<ul>
					{this.state.products.map((product) =>
						<li>
							{product.name} |
							Rp. {product.price} |
							<button>+ Keranjang</button>
						</li>
					)}
				</ul>

				{/* ======= ini keranjang =========== */}

				<p>Daftar Keranjang:</p>

				<ul>
					{this.state.carts.map((carts) =>
						<li>
							{carts.name} |
							Rp. {carts.price}
						</li>
					)}
				</ul>

				<p>Total Harga: {this.state.totalPrice}</p>

			</>
		);
	}
}



// ini dokumen asli superfunction

{/* <ul>
	{this.state.products.map(
		function (product) {
			return (
				<li>{product.name}</li>
			)
		}
	)}
</ul> */}