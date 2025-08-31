import { Bell, HelpCircle, Search } from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="flex justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 shadow px-4 py-3">
        <h1 className="text-lg font-roboto font-bold">DemoApp</h1>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-white cursor-pointer" />
          <HelpCircle className="w-5 h-5 text-white cursor-pointer" />
          <Bell className="w-5 h-5 text-white cursor-pointer" />
        </div>
      </header>

      <main className="flex-1 p-4 bg-[#f3f4f6]">
        {children}
      </main>
    </div>
  );
}
