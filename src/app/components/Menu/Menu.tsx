"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MenuItem } from "../MenuItem/MenuItem";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
  { name: "About Me", href: "/about" },
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
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 z-30 w-full md:w-80 h-full bg-gradient-to-br from-white to-cyan-100 shadow-lg"
          >
            <div className="h-full flex flex-col justify-between p-8">
              <nav className="flex-grow flex flex-col justify-center">
                <ul className="space-y-6">
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.name}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="py-2"
                    >
                      <a
                        href={item.href}
                        className="text-4xl text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="text-sm text-gray-500">© 2023 Kuu_fa photo</div>
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
