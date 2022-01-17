import React, { useState } from 'react';
import { Range } from 'react-range';

const InputRange = () => {
	const [ state, setstate ] = useState({ values: [ 50 ] });
	return (
		<div>
			<Range
				step={2}
				min={0}
				max={100}
				values={state.values}
				onChange={(values) => setstate({ values })}
				renderTrack={({ props, children }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: '8px',
							width: '40%',
							borderRadius: '5px',
							backgroundColor: '#0074fe'
						}}
					>
						{children}
					</div>
				)}
				renderThumb={({ props }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: '20px',
							width: '20px',
							borderRadius: '50%',
							backgroundColor: '#999'
						}}
					/>
				)}
			/>
			<h4>{state.values}</h4>
		</div>
	);
};
export default InputRange;
