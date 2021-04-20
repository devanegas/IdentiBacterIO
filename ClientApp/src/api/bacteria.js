const headers = {
	"Content-Type": "application/vnd.api+json",
};
const getAllBacteria = () => {
	return fetch(`/api/Bacteria/`, {
		method: "GET",
		headers: headers,
	}).then((response) => response.json());
};

export { getAllBacteria };
