"use client";

import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
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
      {props.open ? (
        <XMarkIcon
          className={`transition-opacity duration-700 ease-in-out text-gray-900 w-12 h-12 p-0`}
        />
      ) : (
        <Bars3Icon
          className={`${
            props.open ? "rotate-180 transform" : ""
          } transition-opacity duration-700 ease-in-out text-gray-900 w-12 h-12 p-0`}
        />
      )}
    </>
  );
};
