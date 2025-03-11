"use client";

import { parseAsString, useQueryState } from "nuqs";
import { update } from "@/actions";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Example1Filter = () => {
    const [category, setCategory] = useQueryState("category");

    return (
        <div className="flex items-center space-x-4">
            <div className="flex flex-col space-y-1.5">
                <label htmlFor="category" className="text-sm font-medium">
                    Category
                </label>
                <Select
                    value={category || ""}
                    onValueChange={(value) => {
                        setCategory(value === "all" ? null : value);
                        update();
                    }}
                >
                    <SelectTrigger id="category" className="w-[180px]">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="electronics">
                                Electronics
                            </SelectItem>
                            <SelectItem value="clothing">Clothing</SelectItem>
                            <SelectItem value="books">Books</SelectItem>
                            <SelectItem value="home">Home & Garden</SelectItem>
                            <SelectItem value="sports">
                                Sports & Outdoors
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default Example1Filter;
