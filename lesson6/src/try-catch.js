
async function fetchData(url, fallbackUrl) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network error: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data from first URL:", data);
        return data;
    } catch (error) {
        console.error("First url failed:", error);
        try {
            const responseFallback = await fetch(fallbackUrl);
            if (!responseFallback.ok) {
                throw new Error(`Network error on fallbackUrl: ${responseFallback.status}`);
            }
            const dataFallback = await responseFallback.json();
            console.log("Data from first URL:", dataFallback);
            return dataFallback;
        } catch {
            throw new Error("Both requests failed. Custom error generated.");
        }
    }
}

(async () => {
    try {
        const data = await fetchData(
            'https://thisurldoesnotexist.example.com',
            'https://fakestoreapi.com/products'
        );
        console.log("Final data:", data);
    } catch (finalError) {
        console.error(finalError.message);
    }
})();

