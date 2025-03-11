export interface Item {
    id: string;
    name: string;
    category: string;
    price: number;
    description: string;
    size?: string; // Optional size property
}

export const items: Item[] = [
    {
        id: "item-1",
        name: "Wireless Headphones",
        category: "electronics",
        price: 129.99,
        description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
        size: "medium"
    },
    {
        id: "item-2",
        name: "Smart Watch",
        category: "electronics",
        price: 249.99,
        description: "Fitness tracker with heart rate monitor and GPS",
        size: "small"
    },
    {
        id: "item-3",
        name: "Denim Jacket",
        category: "clothing",
        price: 89.99,
        description: "Classic denim jacket with modern fit",
        size: "large"
    },
    {
        id: "item-4",
        name: "Running Shoes",
        category: "sports",
        price: 119.99,
        description: "Lightweight running shoes with responsive cushioning",
        size: "medium"
    },
    {
        id: "item-5",
        name: "Science Fiction Novel",
        category: "books",
        price: 19.99,
        description: "Bestselling sci-fi novel exploring futuristic themes",
        size: "medium"
    },
    {
        id: "item-6",
        name: "Indoor Plant Set",
        category: "home",
        price: 49.99,
        description: "Set of 3 low-maintenance indoor plants with decorative pots",
        size: "small"
    },
    {
        id: "item-7",
        name: "Graphic T-Shirt",
        category: "clothing",
        price: 29.99,
        description: "Cotton graphic t-shirt with artistic design",
        size: "xlarge"
    },
    {
        id: "item-8",
        name: "Yoga Mat",
        category: "sports",
        price: 39.99,
        description: "Non-slip yoga mat with carrying strap",
        size: "large"
    },
    {
        id: "item-9",
        name: "Cookbook",
        category: "books",
        price: 34.99,
        description: "Collection of international recipes with step-by-step instructions",
        size: "medium"
    },
    {
        id: "item-10",
        name: "Smart Speaker",
        category: "electronics",
        price: 99.99,
        description: "Voice-controlled smart speaker with premium sound quality",
        size: "small"
    }
];
