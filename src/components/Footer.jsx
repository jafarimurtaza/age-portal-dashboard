import { FaGraduationCap } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1B3A6B] to-[#0B0F19] border-t border-[#C8955A]/20 px-4 sm:px-6 py-4 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#FAF7F2]/50">
        <div className="flex items-center gap-2">
          <FaGraduationCap className="text-[#C8955A]" />
          <p>© {new Date().getFullYear()} Afghan Geeks. All rights reserved.</p>
        </div>
        <p className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8955A]" />
          Admin Console — Preview build
        </p>
      </div>
    </footer>
  );
}
