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

            {/* SVG WAVE SHAPE */}
      <div className="custom-shape-divider-bottom hidden md:block">
          <svg
            className="absolute bottom-0 w-full"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
      </div>
      
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
        {/* <h1 className="text-2xl">Reviews</h1>
        <Suspense fallback="Loading...">
          <Reviews productId={product._id!} />
        </Suspense> */}
      </div>
    </div>
    </>
  );
};

export default SinglePage;


