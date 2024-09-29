"use client";

import Link from "next/link";
import AdjustIcon from "@mui/icons-material/Adjust";
import CircleIcon from '@mui/icons-material/Circle';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    // Populate selectedSize from the query params if present
    const currentSize = searchParams.get("size") || "";
    setSelectedSize(currentSize);
  }, [searchParams]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedSize(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("size", value);
    } else {
      params.delete("size");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 py-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 py-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />

        {/* <select
          value={selectedSize}
          onChange={handleSizeChange}
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option value="">All Sizes</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="XXXL">XXXL</option>
        </select> */}

        <ul className="flex gap-4 pl-2 py-2 flex-wrap">
          <li>
            <Link
              href="/list?cat=all-products"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <AdjustIcon
                sx={{ fontSize: "inherit", marginRight: "3px" }}
              />
              All Products
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=accessories"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <AdjustIcon
                sx={{ fontSize: "inherit", marginRight: "3px" }}
              />
              Accessories
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=best-sellers"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <AdjustIcon
                sx={{ fontSize: "inherit", marginRight: "3px" }}
              />
              Best Sellers
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=children"
              className="text-xs text-gray-600 hover:text-gray-900"
            >
              <AdjustIcon
                sx={{ fontSize: "inherit", marginRight: "3px" }}
              />
              Children
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=new-collection"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <AdjustIcon
                sx={{ fontSize: "inherit", marginRight: "3px" }}
              />
              New Collection
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=prom"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <AdjustIcon
                sx={{ fontSize: "inherit", marginRight: "3px" }}
              />
              Prom
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=quinceanera"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <AdjustIcon
                sx={{ fontSize: "inherit", marginRight: "3px" }}
              />
               Quinceanera
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=special-ocassion"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <AdjustIcon
                sx={{ fontSize: "inherit", marginRight: "3px" }}
              />
              Special Ocassion
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=tuxedos-suits"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <AdjustIcon
                sx={{ fontSize: "inherit", marginRight: "3px" }}
              />
              Tuxedos & Suits
            </Link>
          </li>
        </ul>




        {/* <ul className="flex gap-4 pl-2 py-2 flex-wrap">
          <h4 className="text-m text-gray-800">Filtrar por tamaño:</h4>
          <li>
            <Link
              href="/list?cat=extra-small"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <CircleIcon
                sx={{ fontSize: "5px", marginRight: "3px" }}
              />
              XS
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=small"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <CircleIcon
                sx={{ fontSize: "6px", marginRight: "3px" }}
              />
              S
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=medium"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <CircleIcon
                sx={{ fontSize: "7px", marginRight: "3px" }}
              />
              M
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=large"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <CircleIcon
                sx={{ fontSize: "8px", marginRight: "3px" }}
              />
              L
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=extra-large"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <CircleIcon
                sx={{ fontSize: "9px", marginRight: "3px" }}
              />
              XL
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=1xl"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <CircleIcon
                sx={{ fontSize: "9px", marginRight: "3px" }}
              />
              1XL
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=xxl"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <CircleIcon
                sx={{ fontSize: "10px", marginRight: "3px" }}
              />
              XXL
            </Link>
          </li>
          <li>
            <Link
              href="/list?cat=xxxl"
              className="text-xs text-gray-600 hover:text-gray-900 align-middle"
            >
              <CircleIcon
                sx={{ fontSize: "11px", marginRight: "3px" }}
              />
              XXXL
            </Link>
          </li>
          </ul> */}
      </div>
    </div>
  );
};

export default Filter;
