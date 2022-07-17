import React from 'react';

interface RoundProps {
	size: number,
	color: string
}

export function Round(props: RoundProps) {
	return (
		<span style={{
			width: props.size, height: props.size,
			backgroundColor: props.color,
			borderRadius: '50%',
			display: 'inline-block', verticalAlign: 'middle'
		}} />
	);
}