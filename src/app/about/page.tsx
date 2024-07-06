"use client";
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { motion } from "framer-motion";
import { CameraIcon, GlobeIcon, Instagram, InstagramIcon } from "lucide-react";
import { setTimeout } from "timers";
import DynamicLoadingScreen from "../components/Loading/Loading";

export default function About() {
  const [activeSection, setActiveSection] = useState(0);
  const [loading, setLoading] = useState(true);

  const sections = [
    {
      title: "基本情報",
      content: "藤野大輔 Daisuke Fujino\n1998年 東京都出身\n元サッカー少年",
    },
    {
      title: "趣味と特徴",
      content:
        "好きなもの：Oasis（ロックバンド）、自然、エスニック料理全般\n嫌いなもの：マヨネーズ",
    },
    {
      title: "旅の経験",
      content:
        "19歳でベトナムのダナン、カンボジアに長期滞在、その後東南アジアを周遊するバックパッカー旅を敢行、旅に目覚める。\n20歳でヨーロッパ１ヶ月間の旅をした後に、社会人になるが旅への情熱を捨てきれず、自分の好きなカメラを持って旅することを決意。",
    },
    { title: "撮影テーマ", content: "自然、人物、建物など" },
    {
      title: "次の冒険",
      content: "Next、5月7日より東南アジアを３ヶ月周遊します。",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const timer = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {loading ? (
        <DynamicLoadingScreen />
      ) : (
        <div className="bg-gradient-to-br from-blue-100 to-green-100 min-h-screen">
          <Navbar />
          <div className="fixed top-20 left-0 h-[calc(100vh-100px)] container mx-auto px-4 overflow-y-scroll hidden-scrollbar">
            <motion.h1
              className="text-4xl font-bold mb-8 text-center text-gray-800"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h1>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    className={`my-5 ${
                      activeSection === index
                        ? "text-black"
                        : "text-gray-500 opacity-80"
                    }`}
                    animate={{ scale: activeSection === index ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-semibold mb-2">
                      {section.title}
                    </h2>
                    <p className="whitespace-pre-line">{section.content}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.h1
                className="text-4xl font-bold text-center text-gray-800"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Contact
              </motion.h1>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img
                  src="/Home/home_3.jpg"
                  alt="Daisuke Fujino"
                  className="rounded-full w-48 h-48 object-cover mb-6"
                />
                <div className="flex justify-center space-x-4">
                  <div className="relative w-10 h-10 flex items-center justify-center rounded-lg instagram-gradient overflow-hidden">
                    <Instagram size={24} className="text-white z-10" />
                    <style jsx>{`
                      .instagram-gradient::before {
                        content: "";
                        position: absolute;
                        top: -2px;
                        left: -2px;
                        right: -2px;
                        bottom: -2px;
                        background: linear-gradient(
                          45deg,
                          #f09433 0%,
                          #e6683c 25%,
                          #dc2743 50%,
                          #cc2366 75%,
                          #bc1888 100%
                        );
                        filter: blur(2px);
                        z-index: 0;
                      }
                    `}</style>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
