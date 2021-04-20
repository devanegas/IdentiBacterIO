const headers = {
	"Content-Type": "application/vnd.api+json",
};
const getAllCategories = () => {
	return fetch(`/api/TestCategories/`, {
		method: "GET",
		headers: headers,
	}).then((response) => response.json());
};

export { getAllCategories };
