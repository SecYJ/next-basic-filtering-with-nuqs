import { items } from "@/data/items";

interface Example2ListProps {
    searchParams: Promise<{
        category?: string;
    }>;
}

const Example2List = async ({ searchParams }: Example2ListProps) => {
    const { category } = await searchParams;
    
    const filteredItems = category
        ? items.filter(item => item.category === category)
        : items;

    return (
        <div className="w-full max-w-4xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-6">Items ({filteredItems.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                    <div 
                        key={item.id} 
                        className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                    >
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
                                    {item.category}
                                </span>
                            </div>
                            <p className="text-gray-500 mt-2 flex-grow">{item.description}</p>
                            <div className="mt-4 flex justify-between items-center pt-4 border-t">
                                <span className="font-bold">${item.price.toFixed(2)}</span>
                                <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                
                {filteredItems.length === 0 && (
                    <div className="col-span-full text-center py-12">
                        <p className="text-gray-500">No items found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Example2List;
