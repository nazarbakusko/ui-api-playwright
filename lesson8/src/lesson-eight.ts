interface Rating {
    rate: number;
    count: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

async function fetchFromUrl(url: string): Promise<Product[]> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
    }
    const jsonData: Product[] = await response.json();
    return jsonData;
}

async function fetchData(url: string): Promise<Product[] | undefined> {
    try {
        const data = await fetchFromUrl(url);
        return data;
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

(async () => {
    const data = await fetchData('https://fakestoreapi.com/products');
    console.log('Received and processed data:', data);
    console.log(data?.find(p => p.id === 7)?.price);
})();

