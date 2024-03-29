"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import Image from "next/image";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setTimeout(
      () => {
        setMenuOpen((prev) => !prev);
      },
      menuOpen ? 300 : 0
    );
  };
  return (
    <div>
      <Navbar open={menuOpen} handleMenu={handleMenu} />
      <div className="fixed top-20">
        <Image
          src="/about/about1.jpg"
          width={1616}
          height={1080}
          style={{ width: "300px", height: `300px` }}
          alt={"about"}
          priority
        />
        藤野大輔 Daisuke Fujino 1998年　東京都出身。 元サッカー少年、現無職。
        好きなもの：Oasis（ロックバンド）、自然、エスニック料理全般
        嫌いなもの：マヨネーズ
        19歳でベトナムのダナン、カンボジアに長期滞在、その後東南アジアを周遊するバックパッカー旅を敢行、旅に目覚める。
        20歳でヨーロッパ１ヶ月間の旅をした後に、社会人になるが旅への情熱を捨てきれず、自分の好きなカメラを持って旅することを決意。
        撮影テーマは、自然、人物、建物など。
        Next、5月7日より東南アジアを３ヶ月周遊します。
      </div>
    </div>
  );
}
