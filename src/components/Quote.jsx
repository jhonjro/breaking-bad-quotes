export const Quote = ({isLoading, quote, author}) => {
	return (
		<>
			{(isLoading && <div className="alert alert-info text-center">Loading...</div>) ||
				(quote && author && (
					<blockquote className="blockquote text-end">
						<p className="mb-1">{quote}</p>
						<footer className="blockquote-footer">{author}</footer>
					</blockquote>
				))}
		</>
	);
};
