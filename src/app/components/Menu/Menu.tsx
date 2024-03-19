"use client";

import { Popover, Transition } from "@headlessui/react";
import { MenuItem } from "../MenuItem/MenuItem";

const menuItems = [
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

type Props = {
  open: boolean;
  handleMenu: () => void;
};

export function Menu(props: Props) {
  return (
    <Popover>
      <>
        <Popover.Button
          className="fixed top-2 right-2 z-40"
          onClick={props.handleMenu}
        >
          <OpenIcon open={props.open} />
        </Popover.Button>
        <Transition
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 -translate-x-full"
          enterTo="opacity-100 translate-x-0"
          leave="transition ease duration-500 transform"
          leaveFrom="opacity-100 translate-x-0"
          leaveTo="opacity-0 -translate-x-full"
        >
          <Popover.Panel className="fixed top-0 right-0 z-30 w-full  px-4 bg-slate-50">
            <div className="h-screen">
              <div className="menuItem mt-20">
                {menuItems.map((item) => (
                  <MenuItem href={item.href} name={item.name} key={item.name} />
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}

type OpenIconProps = {
  open: boolean;
};

const OpenIcon = (props: OpenIconProps) => {
  return (
    <>
      <div className="block w-16 absolute top-6 transform  -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`${
            props.open
              ? "block absolute h-0.5 w-7 bg-current transform transition duration-300 ease-in-out rotate-45"
              : "block absolute h-0.5 w-7 bg-current transform transition duration-300 ease-in-out -translate-y-1.5"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`${
            props.open
              ? "block absolute h-0.5 w-7 bg-current transform transition duration-600 ease-in-out opacity-0"
              : "block absolute h-0.5 w-7 bg-current transform transition duration-300 ease-in-out "
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`${
            props.open
              ? "block absolute h-0.5 w-7 bg-current transform transition duration-300 ease-in-out -rotate-45"
              : "block absolute h-0.5 w-7 bg-current transform transition duration-300 ease-in-out translate-y-1.5"
          }`}
        ></span>
      </div>
    </>
  );
};
