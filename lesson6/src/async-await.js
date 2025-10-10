
function processData(data) {
    console.log("Data processing:", data);
    return data.map(item => ({
        ...item,
        processed: true
    }));
}

export async function fetchFromUrl(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
}

async function fetchData(url) {
    try {
        const data = await fetchFromUrl(url);
        const processed = processData(data);
        return processed;
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

(async () => {
    const data = await fetchData('https://fakestoreapi.com/products');
    console.log("Received and processed data:", data);
})();

