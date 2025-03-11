"use client";

import { useSearchParams } from "next/navigation";
import { items } from "@/data/items";

const ItemList = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    const filteredItems = category
        ? items.filter((item) => item.category === category)
        : items;

    return (
        <div className="mx-auto mt-8 w-full max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold">
                Items ({filteredItems.length})
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex h-full flex-col overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-md"
                    >
                        <div className="flex flex-grow flex-col p-6">
                            <div className="flex items-start justify-between">
                                <h3 className="text-lg font-semibold">
                                    {item.name}
                                </h3>
                                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
                                    {item.category}
                                </span>
                            </div>
                            <p className="mt-2 flex-grow text-gray-500">
                                {item.description}
                            </p>
                            <div className="mt-4 flex items-center justify-between border-t pt-4">
                                <span className="font-bold">
                                    ${item.price.toFixed(2)}
                                </span>
                                <button className="rounded bg-blue-500 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-600">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredItems.length === 0 && (
                    <div className="col-span-full py-12 text-center">
                        <p className="text-gray-500">
                            No items found in this category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemList;
