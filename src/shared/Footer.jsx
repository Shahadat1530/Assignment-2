import { Film } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between py-4 px-2 border border-white/35 rounded-2xl">
      <div className="flex gap-1 items-center">
        <Film size={30} color="red" />
        <h4 className="text-3xl font-semibold text-red-700">
          Movie<span className="text-red-400">Next</span>
        </h4>
      </div>
      <p>© 2026 MovieNext</p>
    </div>
  );
};

export default Footer;
