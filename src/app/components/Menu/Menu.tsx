"use client";

import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import AppTitle from "../AppTitle/AppTitle";
import { MenuItem } from "../MenuItem/MenuItem";

const menuItems = [
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export function Menu() {
  return (
    <Popover className="">
      {({ open }) => (
        <>
          <Popover.Button className="fixed top-2 right-2 z-20">
            <OpenIcon open={open} />
          </Popover.Button>
          <Transition
            enter="transition ease duration-700 transform"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease duration-700 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <Popover.Panel className="fixed top-0 right-0 z-10 w-full  px-4 bg-white">
              <div className="h-lvh">
                <AppTitle textColor={"text-black"} pd={"pl-2 pt-3"} />
                <div className="menuItem pt-5">
                  {menuItems.map((item) => (
                    <MenuItem
                      href={item.href}
                      name={item.name}
                      key={item.name}
                    />
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

type Props = {
  open: boolean;
};

const OpenIcon = (props: Props) => {
  return (
    <>
      {props.open ? (
        <XMarkIcon
          className={`transition-opacity duration-700 ease-in-out text-gray-900 w-12 h-12 p-0`}
        />
      ) : (
        <Bars3Icon
          className={`${
            props.open ? "rotate-180 transform" : ""
          } transition-opacity duration-700 ease-in-out text-white w-12 h-12 p-0`}
        />
      )}
    </>
  );
};
