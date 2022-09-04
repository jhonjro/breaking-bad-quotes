import {useEffect, useState} from 'react';
import {useCounter} from './useCounter';

export const useFetch = (url, urlIndex) => {
	const {counter, increment, reset} = useCounter(1);
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
		counter,
	});

	const getDataFecth = async () => {
		setState({
			...state,
			isLoading: true,
		});

		urlIndex = url + counter;
		const resp = await fetch(urlIndex);
		const data = await resp.json();

		if (!(!!data && data.length >= 1)) {
			reset();
			setState({
				...state,
				isLoading: true,
				counter,
			});
		} else {
			setState({
				...state,
				isLoading: false,
				data,
			});
		}
	};

	const incrementIndex = () => {
		increment();
		setState({
			...state,
			counter,
		});
	};

	useEffect(() => {
		getDataFecth();
	}, [counter]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
		incrementIndex,
	};
};
