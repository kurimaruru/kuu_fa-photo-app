"use client";

import AppTitle from "../AppTitle/AppTitle";
import { Menu } from "../Menu/Menu";

type Props = {
  open: boolean;
  handleMenu: () => void;
};

export function Navbar(props: Props) {
  return (
    <>
      <Menu open={props.open} handleMenu={props.handleMenu} />
      <div className="header fixed top-0 left-0 z-50  h-16">
        <AppTitle textColor={"text-black"} pd={"pl-5 pt-3"} />
      </div>
    </>
  );
}
