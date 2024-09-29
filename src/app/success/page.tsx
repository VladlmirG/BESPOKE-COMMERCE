"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Confetti from "react-confetti";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("orderId");

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize); // Update size on resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!orderId) return;

    const timer = setTimeout(() => {
      router.push("/orders/" + orderId);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [orderId, router]);

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)] px-4">
      {/* Confetti is now responsive */}
      <Confetti width={windowSize.width} height={windowSize.height} />
      {/* Text size responsive */}
      <h1 className="text-4xl md:text-6xl text-green-700">Successful</h1>
      <h2 className="text-lg md:text-xl font-medium text-center">
        We sent the invoice to your e-mail
      </h2>
      <h3 className="text-sm md:text-base text-center">
         You are being redirected to the order page...
      </h3>
    </div>
  );
};

const SuspendedSuccessPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SuccessPage />
  </Suspense>
);

export default SuspendedSuccessPage;
