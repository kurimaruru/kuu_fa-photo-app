import { Loader2 } from "lucide-react";

const DynamicLoadingScreen = () => {
  const colors = [
    "text-gray-700",
    "text-gray-600",
    "text-gray-500",
    "text-gray-400",
    "text-gray-300",
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-cyan-50 z-50">
      <div className="text-6xl font-bold mb-12 relative">
        {"Loading".split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block animate-bounce ${
              colors[index % colors.length]
            }`}
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: "1s",
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <Loader2 className="w-20 h-20 text-gray-400 animate-spin" />
    </div>
  );
};

export default DynamicLoadingScreen;
