"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MenuItem } from "../MenuItem/MenuItem";

const menuItems = [
  { name: "Home", href: "/" },
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
    <>
      <button className="fixed top-2 right-2 z-40" onClick={props.handleMenu}>
        <OpenIcon open={props.open} />
      </button>
      <AnimatePresence>
        {props.open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 z-30 w-full px-4 bg-slate-50"
          >
            <div className="h-screen">
              <div className="menuItem mt-20">
                {menuItems.map((item) => (
                  <MenuItem href={item.href} name={item.name} key={item.name} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

type OpenIconProps = {
  open: boolean;
};

const OpenIcon = (props: OpenIconProps) => {
  return (
    <div className="block w-16 absolute top-6 transform -translate-x-1/2 -translate-y-1/2">
      <motion.span
        animate={{ rotate: props.open ? 45 : 0, y: props.open ? 0 : -6 }}
        transition={{ duration: 0.3 }}
        className="block absolute h-0.5 w-7 bg-current"
      ></motion.span>
      <motion.span
        animate={{ opacity: props.open ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="block absolute h-0.5 w-7 bg-current"
      ></motion.span>
      <motion.span
        animate={{ rotate: props.open ? -45 : 0, y: props.open ? 0 : 6 }}
        transition={{ duration: 0.3 }}
        className="block absolute h-0.5 w-7 bg-current"
      ></motion.span>
    </div>
  );
};
