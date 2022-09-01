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
		console.log('ini constructor!')
	}

	state = {
		products: []
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
					{this.state.products.map(
						function (product) {
							return (
								<li>{product.name}</li>
							)
						}
					)}
				</ul>

			</>
		);
	}
}