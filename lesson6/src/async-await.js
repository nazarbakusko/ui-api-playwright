

function processData(data) {
    console.log("Data processing:", data);

    return data.map(item => ({
        ...item,
        processed: true
    }));
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network error: ${response.status}`);
        }

        const jsonData = await response.json();
        const processed = processData(jsonData);
        return processed;
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

(async () => {
    const data = await fetchData('https://fakestoreapi.com/products');
    console.log("Received and processed data:", data);
})();

