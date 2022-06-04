import React, {ChangeEvent, useMemo, useState, useTransition} from 'react';
import {defaultItems} from './defaultItems';

const Concurrent = () => {
	const [value, setValue] = useState('');
	const [filteredValue, setFilteredValue] = useState('');
	const [items, setItems] = useState(defaultItems);

	const [isPending, startTransition] = useTransition();

	const filterItems = useMemo(() => {
		setItems(defaultItems);
		return items.filter((item) =>
			item.title.toLowerCase().includes(filteredValue),
		);
	}, [filteredValue]);

	const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		startTransition(() => {
			setFilteredValue(e.target.value);
		});
	};

	return (
		<div style={{margin: '20px auto'}}>
			<input type='text' value={value} onChange={onChangeValue} />
			{isPending && <h1>Loading...</h1>}
			{filterItems.map((item) => (
				<div key={item.id}>
					<div>id={item.id}</div>
					<div>title: {item.title}</div>
				</div>
			))}
		</div>
	);
};

export default Concurrent;
