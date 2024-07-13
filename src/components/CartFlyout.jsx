import { useStore } from "@nanostores/react";
import { isProductOpen, cartProducts } from "@/productStore";
import CartFlyoutToggle from "@/components/CartFlyoutToggle.jsx";
import AddToCartProduct from "./AddToCartProduct";
import { RemoveToCartProduct } from "./AddToCartProduct";


export function BlurWindow() {
  const $isProductOpen = useStore(isProductOpen);
  return $isProductOpen ? (
    <div className="w-full h-screen fixed z-30 top-0 right-0 blur-xl bg-black opacity-30"></div>
  ) : null;
}

export default function CartFlyout() {
  const $isProductOpen = useStore(isProductOpen);
  const $cartProducts = useStore(cartProducts);
  return $isProductOpen ? (
    <>
      <BlurWindow />
      <aside className="w-60 md:w-80 h-screen border-l-4 fixed top-0 right-0 bg-white z-40">
        <div className="flex items-center justify-between bg-teal-400 p-4">
          <button><CartFlyoutToggle /></button>
          <span className="text-white font-bold text-xl">
            COP $
            {Object.values($cartProducts).reduce((total, cartProduct) => {
              const productTotal = parseInt(cartProduct.price) * cartProduct.quantity;
              return total + productTotal;
            }, 0)}
            ,00</span>
        </div>

        {Object.values($cartProducts).length ? (
          <ul className="space-y-1 p-2 border-b-4 ">
            {Object.values($cartProducts).filter(cartProduct => parseInt(cartProduct.quantity, 10) > 0).map((cartProduct) => (
              <li className=" border-gray-400 rounded-xl bg-white h-28 md:h-32 py-2 px-2 md:px-4  border-2 " key={cartProduct.id}>
                <h3 className="font-script text-lg text-center">{cartProduct.name}</h3>
                <div className="mt-2 flex items-center justify-between ">
                  <img className="w-16 md:w-20 " src={cartProduct.imageSrc} alt={cartProduct.name} />
                  <div className="flex items-center justify-between space-x-1 md:space-x-4 ">
                    <RemoveToCartProduct
                      id={cartProduct.name}
                      name={cartProduct.name}
                      imageSrc={cartProduct.imageSrc}
                      price={cartProduct.price}
                    >
                      <button type="submit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </button>
                    </RemoveToCartProduct>
                    <span className="text-lg font-semibold">{cartProduct.quantity}</span>
                    <AddToCartProduct id={cartProduct.name} name={cartProduct.name} imageSrc={cartProduct.imageSrc} price={cartProduct.price}  >
                      <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      </button>
                    </AddToCartProduct>

                  </div>
                  <p className="text-center "> <span className="text-md font-semibold">${parseInt(cartProduct.price, 10) * cartProduct.quantity},00</span></p>

                </div>
              </li>
            ))}
            {Object.values($cartProducts).some(cartProduct => parseInt(cartProduct.quantity, 10) > 0) ? (
              <button className="flex space-x-1 items-center mx-auto p-2 border-4 bg-green-300 rounded-xl font-bold text-sm my-4 hover:bg-green-400 hover:scale-110 duration-200">
                <span>Shop Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
            ) : <p className="text-center text-base font-bold bg-white">Empty Cart</p>}
          </ul>
        ) : (
          <p className="text-center text-base font-bold bg-white">Empty Cart</p>
        )}
      </aside>
    </>
  ) : null;
}
