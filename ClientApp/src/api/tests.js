const headers = {
	"Content-Type": "application/vnd.api+json",
};
const getAllTests = () => {
	return fetch(`/api/Tests/`, {
		method: "GET",
		headers: headers,
	}).then((response) => response.json());
};

export { getAllTests };
