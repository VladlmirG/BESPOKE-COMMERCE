"use client";

import Image from "next/image";
import { useCartStore } from "@/hooks/useCartStore";
import { media as wixMedia } from "@wix/sdk";
import { useWixClient } from "@/hooks/useWixClient";
import { currentCart } from "@wix/ecom";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useRef } from "react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // prevent scroll
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // restore scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleCheckout = async () => {
    try {
      const checkout =
        await wixClient.currentCart.createCheckoutFromCurrentCart({
          channelType: currentCart.ChannelType.WEB,
        });

      const { redirectSession } =
        await wixClient.redirects.createRedirectSession({
          ecomCheckout: { checkoutId: checkout.checkoutId },
          callbacks: {
            postFlowUrl: window.location.origin,
            thankYouPageUrl: `${window.location.origin}/success`,
          },
        });

      if (redirectSession?.fullUrl) {
        window.location.href = redirectSession.fullUrl;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300" />
      )}

      {/* Cart Modal */}
      <div
        ref={modalRef}
        className={`fixed top-0 right-0 h-full w-100 mm shadow-lg transform transition-transform z-50 flex flex-col bg-white ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 w-full bg-white py-2 px-4 z-20 flex justify-between items-center">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-600 transition-all duration-200 rounded-full p-2"
          >
            <CloseIcon fontSize="medium" />
          </button>

          <h2 className="text-xl font-semibold poiret_one-font uppercase tracking-widest">
            My Cart
          </h2>
        </div>

        <div className="p-4 flex-grow overflow-y-auto mt-2">
          {!cart?.lineItems || cart.lineItems.length === 0 ? (
            <div className="text-center">Empty Cart</div>
          ) : (
            <div className="flex flex-col gap-10">
              {cart.lineItems.map((item) => (
                <div className="flex gap-4" key={item._id}>
                  {item.image && (
                    <Image
                      src={wixMedia.getScaledToFillImageUrl(item.image, 72, 96, {})}
                      alt=""
                      width={72}
                      height={96}
                      className="object-cover rounded-md"
                    />
                  )}
                  <div className="flex flex-col justify-between w-full border-b border-gray-400">
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold uppercase text-bluey">
                        {item.productName?.original}
                      </h3>
                      <div className="p-1 rounded-sm flex items-center gap-2 font-bold poiret_one-font text-black">
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-xs text-orange-500">{item.quantity} x </div>
                        )}
                        USD ${item.price?.amount}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 poppins-font tracking-wide">
                      {item.availability?.status}
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Unid. {item.quantity}</span>
                      <span
                        className="text-red-500 hover:text-red-600 cursor-pointer"
                        onClick={() => removeItem(wixClient, item._id!)}
                      >
                        Remove
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t bg-white">
          <div className="flex justify-between font-semibold">
            <span className="uppercase poiret_one-font tracking-widest">Subtotal</span>
            <span className="text-bluey text-2xl">
              USD.{cart.subtotal ? cart.subtotal.amount : 0}
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Shipping and taxes calculated at checkout.
          </p>
          <button
            className="mt-4 w-full rounded-md py-3 bg-button hover:bg-hovr transition duration-500 text-white tracking-wider disabled:cursor-not-allowed disabled:opacity-75"
            disabled={isLoading || !cart?.lineItems || cart.lineItems.length === 0}
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModal;
