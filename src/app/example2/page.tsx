import Example2Filter from "./example2-filter";
import Example2List from "./example2-list";

export const dynamic = "force-dynamic";

interface Props {
    searchParams: Promise<{
        category?: string;
    }>;
}

const Example2Page = async ({ searchParams }: Props) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-center text-3xl font-bold">
                Product Catalog
            </h1>
            <div className="flex flex-col items-center">
                <Example2Filter />
                <Example2List searchParams={searchParams} />
            </div>
        </div>
    );
};

export default Example2Page;
