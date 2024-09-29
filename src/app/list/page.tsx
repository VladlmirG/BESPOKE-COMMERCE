import Head from 'next/head'; 
import type { Metadata } from "next";
import Skeleton from "@/components/Skeleton";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";
import ProductList from "@/components/ProductList";
import Filter from "@/components/Filter";


export const metadata: Metadata = {
  title: "BESPOKE XV & FORMAL | THE STORE",
  description: "Bespoke XV & Formal ONLINE STORE",
};

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();
  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  return (
    <>
<Head>
  <meta property="og:title" content="BESPOKE XV & FORMAL | THE STORE" />
  <meta property="og:description" content="Bespoke XV & Formal ONLINE STORE" />
  <meta property="og:image" content="https://mydomain/favicon.ico" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="BESPOKE XV & FORMAL | THE STORE" />
  <meta name="twitter:description" content="Bespoke XV & Formal ONLINE STORE" />
  <meta name="twitter:image" content="https://mydomain/favicon.ico" />
</Head>


    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-gradient-to-r from-pink-100 to-white-500 rounded-md px-4 sm:flex justify-between h-64 mt-8">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-bluey">
          Explore our products
            <br /> ¡On Sale!
          </h1>
        </div>
        <div className="relative w-1/3">
          <Image src="/logo.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">{cat?.collection?.name}</h1>
      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
    </>
  );
};

export default ListPage;
