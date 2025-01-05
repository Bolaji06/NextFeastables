"use client";

import { LiaShoppingBagSolid } from "react-icons/lia";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import youBagImage from "../../public/assets/your-bag-text.svg";
import shopItem from "../../public/shop/Chocolate_Almond_60g_Carton.webp";
export default function CartDrawer() {
  return (
    <>
      <section>
        <Sheet>
          <SheetTrigger>
            <div className="mb-1 relative">
              <LiaShoppingBagSolid size={42} className="w-full h-full" />
              <p className="absolute top-3 left-4 font-bold">6</p>
            </div>
          </SheetTrigger>

          <SheetContent className="wavy-cart w-[800px] min-w-[700px] max-w-[800px] bg-[#f2ebe0] pr-0">
            <SheetHeader className="pb-10 py-6">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={youBagImage}
                  width={350}
                  height={350}
                  alt="your bag image"
                />
                <SheetTitle className="uppercase text-sm font-extrabold">
                  (3 items)
                </SheetTitle>
              </div>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <div className="h-60 py-6 overflow-y-auto">
              <div className="ml-20">
                <div className="flex gap-3">
                  <div className="w-16 p-2 border-2 border-black rounded-md bg-white">
                    <Image
                      src={shopItem}
                      width={100}
                      height={100}
                      alt="shop item"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-full">
                    <div className="spacey-2">
                      <h2 className="uppercase font-extrabold">
                        Peanut butter Peanut butter
                      </h2>
                      <p className="uppercase font-semibold text-sm">
                        King size | <span>$3.44</span>
                      </p>
                    </div>

                    <div className="mt-2 flex justify-between items-center">
                      <div className="border-2 h-8 border-black grid items-center grid-cols-3 w-[5.3rem] max-w-[7.2rem] gap-1 rounded-md">
                        <button className="rounded-md text-black font-extrabold bg-transparent hover:bg-white">
                          -
                        </button>
                        <p className="font-extrabold text-center">2</p>
                        <button className="rounded-md text-black font-extrabold bg-transparent hover:bg-white">
                          +
                        </button>
                      </div>
                      <Button
                        className="h-8 py-3 rounded-md border-2 mr-10 border-black
                               text-black font-extrabold italic uppercase text-sm bg-transparent transition-shadow ease-in-out hover:shadow-shadow_4xl shadow-black"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SheetFooter className="w-full bg-[#72e2ff] max-w-[800px]">
              <div className="py-4 w-full flex justify-between items-center">
                <p className="text-2xl uppercase ml-20 font-extrabold ">
                  Subtotal
                </p>
                <p className="text-2xl font-extrabold mr-8">$34.54</p>
              </div>

              <div className="h-full w-full p-5 bg-[#57ddfe]">
                <div className="flex flex-col justify-center items-center">
                  <Button className="uppercase text-2xl font-extrabold italic border-[3px] py-6 text-black border-black bg-[#cefc17]
                  hover:shadow-shadow_4xl shadow-black hover:bg-[#cefc17] transition-shadow ease-in-out">
                    View Bag and checkout
                  </Button>
                  <p className="text-xs font-bold py-2">*TAXES & ALL THAT JAZZ ARE CALCULATED AT CHECKOUT*</p>
                </div>

              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
}
