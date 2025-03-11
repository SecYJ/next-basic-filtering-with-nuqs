"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Example2Filter = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    return (
        <div className="flex items-center space-x-4">
            <div className="flex flex-col space-y-1.5">
                <label htmlFor="category" className="text-sm font-medium">
                    Category
                </label>
                <Select value={category || ""}>
                    <SelectTrigger id="category" className="w-[180px]">
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="all" asChild>
                                <Link href="/example2">All Categories</Link>
                            </SelectItem>
                            <SelectItem value="electronics" asChild>
                                <Link href="/example2?category=electronics">
                                    Electronics
                                </Link>
                            </SelectItem>
                            <SelectItem value="clothing" asChild>
                                <Link href="/example2?category=clothing">
                                    Clothing
                                </Link>
                            </SelectItem>
                            <SelectItem value="books" asChild>
                                <Link href="/example2?category=books">
                                    Books
                                </Link>
                            </SelectItem>
                            <SelectItem value="home" asChild>
                                <Link href="/example2?category=home">
                                    Home & Garden
                                </Link>
                            </SelectItem>
                            <SelectItem value="sports" asChild>
                                <Link href="/example2?category=sports">
                                    Sports & Outdoors
                                </Link>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default Example2Filter;
