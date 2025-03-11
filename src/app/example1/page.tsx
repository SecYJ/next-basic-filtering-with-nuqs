// import ItemList from "@/components/item-list";
import { items } from "@/data/items";
import Link from "next/link";

interface Props {
    searchParams: Promise<{
        category?: string;
        size?: string;
    }>;
}

const Example1Page = async ({ searchParams }: Props) => {
    // const category = (await searchParams).category;
    const { category, size } = await searchParams;
    const filteredItems = items.filter((item) => {
        // Filter by category if specified
        if (category && item.category !== category) {
            return false;
        }

        // Filter by size if specified
        if (size && (!item.size || item.size !== size)) {
            return false;
        }

        return true;
    });

    console.log("searchParams", { category, size });
    console.log("filteredItems", filteredItems);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-center text-3xl font-bold">
                Use Pure Link Component (Fully Server Side Rendered)
            </h1>
            <div className="flex flex-col items-center">
                <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                        href={{ pathname: "/example1" }}
                        className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200"
                    >
                        All Categories
                    </Link>
                    <Link
                        href={{
                            pathname: "/example1",
                            query: { category: "electronics", size },
                        }}
                        className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200"
                    >
                        Electronics
                    </Link>
                    <Link
                        href={{
                            pathname: "/example1",
                            query: { category: "clothing", size },
                        }}
                        className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200"
                    >
                        Clothing
                    </Link>
                    <Link
                        href={{
                            pathname: "/example1",
                            query: { category: "books", size },
                        }}
                        className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200"
                    >
                        Books
                    </Link>
                    <Link
                        href={{
                            pathname: "/example1",
                            query: { category: "home", size },
                        }}
                        className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200"
                    >
                        Home & Garden
                    </Link>
                    <Link
                        href={{
                            pathname: "/example1",
                            query: { category: "sports", size },
                        }}
                        className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200"
                    >
                        Sports & Outdoors
                    </Link>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                        href={{
                            pathname: "/example1",
                            query: category ? { category } : {},
                        }}
                        className={`rounded-md px-3 py-2 text-sm font-medium ${
                            !size
                                ? "bg-blue-100 hover:bg-blue-200"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    >
                        All Sizes
                    </Link>
                    <Link
                        href={{
                            pathname: "/example1",
                            query: {
                                ...(category ? { category } : {}),
                                size: "small",
                            },
                        }}
                        className={`rounded-md px-3 py-2 text-sm font-medium ${
                            size === "small"
                                ? "bg-blue-100 hover:bg-blue-200"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    >
                        Small
                    </Link>
                    <Link
                        href={{
                            pathname: "/example1",
                            query: {
                                ...(category ? { category } : {}),
                                size: "medium",
                            },
                        }}
                        className={`rounded-md px-3 py-2 text-sm font-medium ${
                            size === "medium"
                                ? "bg-blue-100 hover:bg-blue-200"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    >
                        Medium
                    </Link>
                    <Link
                        href={{
                            pathname: "/example1",
                            query: {
                                ...(category ? { category } : {}),
                                size: "large",
                            },
                        }}
                        className={`rounded-md px-3 py-2 text-sm font-medium ${
                            size === "large"
                                ? "bg-blue-100 hover:bg-blue-200"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    >
                        Large
                    </Link>
                    <Link
                        href={{
                            pathname: "/example1",
                            query: {
                                ...(category ? { category } : {}),
                                size: "xlarge",
                            },
                        }}
                        className={`rounded-md px-3 py-2 text-sm font-medium ${
                            size === "xlarge"
                                ? "bg-blue-100 hover:bg-blue-200"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                    >
                        X-Large
                    </Link>
                </div>
                {/* <Example1Filter /> */}
                {/* <ItemList /> */}
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
                                    <div className="mt-1 flex items-center">
                                        {item.size && (
                                            <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700">
                                                Size: {item.size}
                                            </span>
                                        )}
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
            </div>
        </div>
    );
};

export default Example1Page;
