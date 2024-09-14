import { useState, useEffect } from 'react';

type CounterProps = {
	initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
	const [count, setCount] = useState(initialCount);

	useEffect(() => {
		const onCounterMount = new CustomEvent('onCounterMount');
		window.dispatchEvent(onCounterMount);

		// Este `return` pode ser removido, pois está causando uma duplicação.
		// Mantive-o por enquanto, já que não tenho certeza se é permitido removê-lo,
		// dado que o `SCHEMA` foi fornecido como parte da implementação original.

		return () => {
			const onCounterUnmount = new CustomEvent('onCounterUnmount');
			window.dispatchEvent(onCounterUnmount);
		};
	}, []);

	useEffect(() => {
		const onCounterUpdate = new CustomEvent('onCounterUpdate', {
			detail: {
				count: count,
			},
		});
		window.dispatchEvent(onCounterUpdate);

		if (count === 10) {
			const onCounterUnmount = new CustomEvent('onCounterUnmount');
			window.dispatchEvent(onCounterUnmount);
		}
	});

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<h2>Contador: {count}</h2>
			<button onClick={handleIncrement}>Incrementar +</button>
		</div>
	);
};
