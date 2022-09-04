import React from 'react';
import {useFetch} from '../hooks';
import {Quote} from './Quote';
import {ButtonNext} from './ButtonNext';

export const MultipleCustomHooks = () => {
	const {data, isLoading, incrementIndex} = useFetch('https://www.breakingbadapi.com/api/quotes/');
	const {quote, author} = !!data && data.length >= 1 && data[0];

	return (
		<>
			<h1>Breaking Bad Quotes</h1>
			<hr />
			<Quote isLoading={isLoading} quote={quote} author={author} />
			<ButtonNext isLoading={isLoading} quote={quote} author={author} incrementIndex={() => incrementIndex()} />
		</>
	);
};
