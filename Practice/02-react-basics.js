const button = <button>hello</button>;
		const paragraph = <p>paragraph of text</p>;

		const todayDate = dayjs().format('MMMM D');

		const productCost = 10 + 16;
		const shippingCost = 5;

		const div = (
			<div>
				<button>hello</button>
				<p>paragraph of text { 2 + 2 }</p>
				<p>{ todayDate }</p>
				<p>Product cost: ${ productCost }</p>
				<p>shipping cost: ${ shippingCost }</p>
				<p>Total cost: ${ productCost + shippingCost }</p>
				<button>Place your order</button>
			</div>
		);

		function ProductDetails({name, price, discountPrice, imageSrc}) {
			return (
				<>
					<img src={imageSrc} width="100" />
					<div>
						<p>{name}</p>
						{discountPrice ? <del><p>Price: ${price}</p></del> : <p>Price: ${price}</p> }
						{discountPrice && <p>Discount Price: ${discountPrice}</p>}
						<button>Add to Cart</button>
					</div>
				</>
			);
		}

		function App() {
			return (
				<>
					<ProductDetails name="Cotton socks" price={10.90} discountPrice={8.00} imageSrc={"./cotton-socks.png"} />
					<ProductDetails name="Tennis ball" price={6.90} imageSrc={"./tennis-balls.png"}/>
					<ProductDetails name="Plain T-shirt" price={7.99} imageSrc={"./plain-t-shirt.png"}/>
				</>
			);
			
		}
		
    	const container = document.querySelector('.js-container');
		// const root = ReactDOM.createRoot(container);
		// setInterval(() => {
		// 	 const currentTime = dayjs().format('HH:mm:ss');
		// 	 const clock = (
		// 		<p>Current time: { currentTime }</p>
		// 	);
		// 	root.render(clock);
		// }, 1000);
		
		
      	ReactDOM.createRoot(container).render(<App />);