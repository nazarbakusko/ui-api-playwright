
function processData(data) {
    console.log("Data processing:", data);

    return data.map(item => ({
        ...item,
        processed: true
    }));
}

function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network error: ${response.status}`);
            }
            return response.json();
        })
        .then(jsonData => {
            const processed = processData(jsonData);
            return processed;
        })
        .catch(error => {
            console.error("Error occurred:", error);
        });
}

fetchData('https://fakestoreapi.com/products')
    .then(data => console.log("Received and processed data:", data));

export { fetchData, processData };
