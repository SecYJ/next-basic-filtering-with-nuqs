import Filter from "@/components/filter";
import ItemList from "@/components/item-list";

const Home = () => {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Product Catalog</h1>
            <div className="flex flex-col items-center">
                <Filter />
                <ItemList />
            </div>
        </div>
    );
};

export default Home;
