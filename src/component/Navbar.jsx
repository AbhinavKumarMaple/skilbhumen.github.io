import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  XMarkIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink, useParams } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "about", current: false },
  { name: "Our Services", href: "service", current: false },
  { name: "Portfolio", href: "work", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contact Us", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { id } = useParams();
  console.log(id);
  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 sm:bg-opacity-0 absolute w-full sm:px-20 sm:py-8"
    >
      {({ open }) => (
        <>
          <div className=" sm:mx-auto  sm:max-w-full sm:px-6  ">
            <div className="relative flex h-16 items-center justify-center bg-grayDark sm:bg-opacity-0">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3BottomLeftIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1  items-center justify-center sm:justify-between sm:items-stretch ">
                <div className="flex flex-shrink-0 items-center ">
                  <LightBulbIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="hidden sm:block   lg:mx-14">
                  <div className="flex items-center  sm:justify-center  space-x-8 sm:space-x-0 lg:space-x-0 text-center  text-white  xl:absolute xl:right-1/2 xl:translate-x-1/2">
                    {/* desktop Nav */}
                    {navigation.map((item) => (
                      <NavLink
                        to={item.href}
                        key={item.name}
                        className={({ isActive }) =>
                          isActive
                            ? "xl:text-2xl  sm:text-xl sm:px-4  sm:font-bold xl:font-bold"
                            : "xl:text-2xl  sm:text-xl flex flex-shrink-0  sm:font-light xl:font-light xl:p-2"
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                  <button
                    type="button"
                    className=" bg-yellow xl:py-4 sm:p-3 xl:px-12  text-bg font-bold hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Get a quote
                  </button>

                  {/* Profile dropdown */}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 text-white bg-gray">
              {/* moble Nav */}
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Link to={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
