import React from 'react';

export const ButtonNext = ({isLoading, quote, author, incrementIndex}) => {
	return (
		<>
			{quote && author && (
				<button className="btn btn-primary" onClick={() => incrementIndex()} disabled={isLoading}>
					Next Quote
				</button>
			)}
		</>
	);
};
