import { fetchFromUrl } from './async-await.js';

async function fetchData(url, fallbackUrl) {
    try {
        const data = await fetchFromUrl(url);
        console.log("Data from first URL:", data);
        return data;
    } catch (error) {
        console.error("First url failed:", error);
        try {
            const dataFallback = await fetchFromUrl(fallbackUrl);
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

