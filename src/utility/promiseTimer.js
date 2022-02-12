function promiseTimer(interval) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, interval);
	});
}

export default promiseTimer;
