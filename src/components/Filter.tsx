"use client";

import Link from "next/link";
import AdjustIcon from "@mui/icons-material/Adjust";
import CircleIcon from '@mui/icons-material/Circle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
    <div className="montserrat-font mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap items-center">
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
        /><br/>

        <ul className="flex gap-4 pl-2 py-2 flex-wrap mt-4">
          <li>
            <Link
              href="/list?cat=all-products"
              className="text-gray-600 hover:text-gray-900 align-middle"
            >
              <AdjustIcon
                sx={{ fontSize: "inherit", marginRight: "3px" }}
              />
              All Products
            </Link>
          </li>

          <li className="relative group">
              <div className="flex items-center">
                <Link href="/list?cat=quinceanera" className="nav-links text-bluey">Quinceanera
                <ArrowDropDownIcon sx={{ fontSize: "inherit", marginRight: "3px" }}/></Link>
              </div>
              <div className="absolute rounded-md text-center left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col subm shadow-lg gap-2 z-20 w-56">
              <Link href="/list?cat=quinceanera-vizcaya-by-morilee" className="text-bluey px-4 py-2 hover:font-semibold">Vizcaya by Morilee </Link>
                <Link href="/list?cat=quinceanera-valencia-by-morilee" className="text-bluey px-4 py-2 hover:font-semibold">Valencia by Morilee</Link>
                <Link href="/list?cat=quinceanera-valentina-by-morilee" className="text-bluey px-4 py-2 hover:font-semibold">Valentina by Morilee</Link>
                <Link href="/list?cat=quinceanera-rachel-allan" className="text-bluey px-4 py-2 hover:font-semibold">Rachel Allan</Link>
                <Link href="/list?cat=quinceanera-princesa-by-ariana-vara" className="text-bluey px-4 py-2 hover:font-semibold">Princesa by Ariana Vara</Link>
                <Link href="/list?cat=quinceanera-dresses-under-1000" className="text-bluey px-4 py-2 hover:font-semibold">Dresses under $1000</Link>
                <Link href="/list?cat=quinceanera-mini-quinceanera" className="text-bluey px-4 py-2 hover:font-semibold">Mini Quinceanera</Link>
                <Link href="/list?cat=quinceanera-quince-accessories" className="text-bluey px-4 py-2 hover:font-semibold">Quince Accessories</Link>
                <Link href="/list?cat=quinceanera-damas-dresses" className="text-bluey px-4 py-2 hover:font-semibold">Damas Dresses</Link>
              </div>
            </li>

            <li className="relative group">
              <div className="flex items-center">
                <Link href="/list?cat=prom" className="nav-links text-bluey">Prom
                <ArrowDropDownIcon sx={{ fontSize: "inherit", marginRight: "3px" }}/></Link>
              </div>
              <div className="absolute rounded-md text-center left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col subm shadow-lg gap-2 z-20 w-56">
                <Link href="/list?cat=prom" className="text-bluey px-4 py-2 hover:font-semibold">A-Line</Link>
                <Link href="/list?cat=prom" className="text-bluey px-4 py-2 hover:font-semibold">Mermaid</Link>
                <Link href="/list?cat=prom" className="text-bluey px-4 py-2 hover:font-semibold">Fitted</Link>
                <Link href="/list?cat=prom" className="text-bluey px-4 py-2 hover:font-semibold">Ball Gown</Link>
              </div>
            </li>

            <li className="relative group">
              <div className="flex items-center">
                <Link href="/list?cat=special-ocassion" className="nav-links text-bluey">Special Ocassion
                <ArrowDropDownIcon sx={{ fontSize: "inherit", marginRight: "3px" }}/></Link>
              </div>
              <div className="absolute rounded-md text-center left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col subm shadow-lg gap-2 z-20 w-56">
                <Link href="/list?cat=special-ocassion" className="text-bluey px-4 py-2 hover:font-semibold">Evening</Link>
                <Link href="/list?cat=special-ocassion" className="text-bluey px-4 py-2 hover:font-semibold">HOCO</Link>
                <Link href="/list?cat=special-ocassion" className="text-bluey px-4 py-2 hover:font-semibold">MOB</Link>
                <Link href="/list?cat=special-ocassion" className="text-bluey px-4 py-2 hover:font-semibold">Bridesmaids</Link>
                <Link href="/list?cat=special-ocassion" className="text-bluey px-4 py-2 hover:font-semibold">Bridal</Link>
              </div>
            </li>

            <li className="relative group">
              <div className="flex items-center">
                <Link href="/list?cat=tuxedos-suits" className="nav-links text-bluey">Tuxedos & Suits
                <ArrowDropDownIcon sx={{ fontSize: "inherit", marginRight: "3px" }}/></Link>
              </div>
              <div className="absolute rounded-md text-center left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col subm shadow-lg gap-2 z-20 w-56">
                <Link href="/list?cat=tuxedos-suits" className="text-bluey px-4 py-2 hover:font-semibold">Rental</Link>
                <Link href="/list?cat=tuxedos-suits" className="text-bluey px-4 py-2 hover:font-semibold">Suits</Link>
                <Link href="/list?cat=tuxedos-suits" className="text-bluey px-4 py-2 hover:font-semibold">Tuxedos</Link>
                <Link href="/list?cat=tuxedos-suits" className="text-bluey px-4 py-2 hover:font-semibold">Boys Suits</Link>
              </div>
            </li>

            <li className="relative group">
              <div className="flex items-center">
                <Link href="/list?cat=children" className="nav-links text-bluey">Children
                <ArrowDropDownIcon sx={{ fontSize: "inherit", marginRight: "3px" }}/></Link>
              </div>
              <div className="absolute rounded-md text-center left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col subm shadow-lg gap-2 z-20 w-56">
                <Link href="/list?cat=children" className="text-bluey px-4 py-2 hover:font-semibold">Infant</Link>
                <Link href="/list?cat=children" className="text-bluey px-4 py-2 hover:font-semibold">Baptism</Link>
                <Link href="/list?cat=children" className="text-bluey px-4 py-2 hover:font-semibold">1st Comunion</Link>
                <Link href="/list?cat=children" className="text-bluey px-4 py-2 hover:font-semibold">Flower Girl</Link>
              </div>
            </li>

            <li className="relative group">
              <div className="flex items-center">
                <Link href="/list?cat=accessories" className="nav-links text-bluey">Accessories
                <ArrowDropDownIcon sx={{ fontSize: "inherit", marginRight: "3px" }}/></Link>
              </div>
              <div className="absolute rounded-md text-center left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col subm shadow-lg gap-2 z-20 w-56">
                <Link href="/list?cat=accessories" className="text-bluey px-4 py-2 hover:font-semibold">Sub Category</Link>
                <Link href="/list?cat=accessories" className="text-bluey px-4 py-2 hover:font-semibold">Sub Category</Link>
                <Link href="/list?cat=accessories" className="text-bluey px-4 py-2 hover:font-semibold">Sub Category</Link>
                <Link href="/list?cat=accessories" className="text-bluey px-4 py-2 hover:font-semibold">Sub Category</Link>
              </div>
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
