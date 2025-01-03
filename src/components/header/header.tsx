import Image from "next/image";
import Form from "next/form";
import Cart from "./cart";
import Link from "next/link";
import { AlignJustifyIcon, ShoppingBasket, User } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = async () => {
  const user = await currentUser();
  console.log(user);
  return (
    <header>
      {/* Top Header */}
      <p className="flex justify-center items-center gap-2 text-sm py-2 bg-[#f8f8f8]">
        <Link href="/">
          <Image src="/images/icon.png" width={22} height={22} alt="Van Logo" />
        </Link>
        {`World’s Fastest Online Shopping Destination`}
      </p>

      {/* Main Header */}
      <div className="hidden lg:flex justify-between items-center bg-[#434377] sm:px-3 md:px-6 text-white py-1 lg:px-8">
        {/* Logo */}
        <div>
          <Image
            src="/images/logo.png"
            width={80}
            height={70}
            alt="Company Logo"
          />
        </div>

        {/* Search Form */}
        <Form action="/search" className="flex items-center w-full max-w-md">
          <div className="flex w-full border border-gray-300 rounded-md overflow-hidden focus-within:ring focus-within:ring-gray-300 focus-within:border-gray-500">
            <input
              type="text"
              name="query"
              placeholder="Search for products..."
              className="flex-1 text-[#434377] px-3 py-2 rounded-l-md border-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
              aria-label="Search for products"
            />

            <button
              type="submit"
              className="px-4 text-[#434377] bg-gray-200 rounded-r-md flex items-center justify-center"
              aria-label="Search"
            >
              <Search  size={20} />
            </button>
          </div>
        </Form>

        {/* Actions */}
        <div className="flex items-center gap-4 ">
          <Cart />

          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/order"
                className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none transition duration-300 ease-in-out cursor-pointer"
              >
                <ShoppingBasket />
                <div className="flex flex-col">
                  <p className="text-xs">
                    <span className="font-semibold">0</span> items
                  </p>
                  <p className="font-semibold">Orders</p>
                </div>
              </Link>
            </SignedIn>

            {user ? (
              <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none transition duration-300 ease-in-out cursor-pointer">
                <UserButton />
                <div className="flex flex-col">
                  <p className="text-xs">Welcome Back</p>
                  <p className="font-semibold">{user?.fullName || "User"}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none transition duration-300 ease-in-out cursor-pointer">
                  <User />
                  <div className="flex flex-col">
                    <p className="text-xs">Account</p>
                    <p className="font-semibold">Login</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </div>
      <div className="flex lg:hidden justify-between items-center sm:px-3 md:px-6 text-white bg-[#434377]  py-1 lg:px-8">
        <div>
          <Image
            src="/images/logo.png"
            width={60}
            height={60}
            alt="Company Logo"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <div className="px-4 py-2">
            <AlignJustifyIcon size={30}/>
            </div>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col  h-screen bg-white">
              {/* Search Form */}
              <Form action="/search" className="flex items-center mt-16 mb-4 w-full">
                <div className="flex border mx-auto border-gray-600 rounded-md ">
                  <input
                    type="text"
                    name="query"
                    placeholder="Search for products..."
                    className="flex-1 text-[#434377] px-2 py-1 sm:px-3 sm:py-2 border-none"
                    aria-label="Search for products"
                  />
                  <button
                    type="submit"
                    className="px-2 sm:px-4  bg-[#434377] text-gray-200 flex items-center justify-center"
                    aria-label="Search"
                  >
                    <Search size={20} />
                  </button>
                </div>
              </Form>
              {/* Links and User Actions */}
              <div className="flex flex-col items-center gap-4">
          <Cart />

          <ClerkLoaded>
            <SignedIn>
              <Link
                href="/order"
                className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none transition duration-300 ease-in-out cursor-pointer"
              >
                <ShoppingBasket />
                <div className="flex flex-col">
                  <p className="text-xs">
                    <span className="font-semibold">0</span> items
                  </p>
                  <p className="font-semibold">Orders</p>
                </div>
              </Link>
            </SignedIn>

            {user ? (
              <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none transition duration-300 ease-in-out cursor-pointer">
                <UserButton />
                <div className="flex flex-col">
                  <p className="text-xs">Welcome Back</p>
                  <p className="font-semibold">{user?.fullName || "User"}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none transition duration-300 ease-in-out cursor-pointer">
                  <User />
                  <div className="flex flex-col">
                    <p className="text-xs">Account</p>
                    <p className="font-semibold">Login</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
