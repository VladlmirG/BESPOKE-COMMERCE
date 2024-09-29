import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizedProducts";
import ProductImages from "@/components/ProductImages";
import Reviews from "@/components/Reviews";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import DOMPurify from "isomorphic-dompurify";
import { Metadata } from "next";

// Define metadata for this page
export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  let wixClient = await wixClientServer();

  if (!wixClient || !wixClient.products) {
    console.error('Wix client or products not available');
    return {
      title: "Product Not Found",
      description: "Product not found in the store",
      openGraph: {
        title: "Product Not Found",
        description: "Product not found in the store",
        images: [
          {
            url: "https://mydomain/logo.png",
            alt: "Product Not Found",
          },
        ],
      },
    };
  }

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return {
      title: "Product Not Found",
      description: "Product not found in the store",
      openGraph: {
        title: "Product Not Found",
        description: "Product not found in the store",
        images: [
          {
            url: "https://mydomain/logo.png",
            alt: "Product Not Found",
          },
        ],
      },
    };
  }

  const product = products.items[0];
  
  // Use the Nullish Coalescing operator to ensure a string is always returned
  const productName = product.name ?? "Product Name";  
  const productDescription = product.description ?? "Product description";

    // Use the correct property name to access the media URL
  const mediaItems = product.media?.items ?? [];
  const imageUrl = mediaItems.length > 0 && mediaItems[0]?.image?.url
    ? mediaItems[0].image.url
    : "https://mydomain/logo.png";
  
  return {
    title: `BESPOKE | ${productName}`,  
    description: productDescription,
    openGraph: {
      title: productName,  
      description: productDescription,
      images: [
        {
          url: imageUrl,  // Default to "/logo.jpg" if `imageUrl` is undefined
          alt: productName,
        },
      ],
    },
  };
};


const SinglePage = async ({ params }: { params: { slug: string } }) => { 
  let wixClient = await wixClientServer();

  if (!wixClient || !wixClient.products) {
    console.error('Wix client or products not available');
    return;
  }

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  return (
    <>      
    <div className="px-4 mt-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium text-bluey">{product.name}</h1>
        <div
          className="text-gray-500"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description || '') }}
        />
        <div className="h-[2px] bg-gray-100" />
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">$ {product.price?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <div className="text-gray-500"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.description || '') }}
            />
          </div>
        ))}
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">Reviews</h1>
        <Suspense fallback="Loading...">
          <Reviews productId={product._id!} />
        </Suspense>
      </div>
    </div>
    </>
  );
};

export default SinglePage;


