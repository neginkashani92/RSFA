import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import favicon from "../../assets/img/favicon-260.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-navy text-white w-full h-15">
        <div className="max-w-7xl mx-auto p-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img src={favicon} alt="RSAF-logo" className="w-8 h-8" />
            <nav className="hidden md:flex space-x-8 text-md px-4" aria-label="main">
              <Link to="/" className="hover:opacity-70">
                DASHBOARD
              </Link>
              <Link to="/client" className="hover:opacity-70">
                CLIENTS
              </Link>
            </nav>
          </div>
          
          {/* Desktop User Menu */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  aria-label="Open user menu"
                  className="p-0 bg-transparent border-none ml-2"
                >
                  <Avatar className="size-9">
                    <AvatarImage
                      src="https://example.com/your-photo.jpg"
                      alt="User avatar"
                    />
                    <AvatarFallback className="">
                      <img
                        src="https://ui-avatars.com/api/?name=Negin+Kashani"
                        alt="Fallback avatar"
                        className="w-full h-full"
                      />
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => navigate(`/setting`)}>Setting</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex gap-4 items-center text-white">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-9 h-9 text-sm font-medium text-center text-white border rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>

                  <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-[#C9A66A] border border-white rounded-full -top-1 -end-1 dark:border-gray-900">
                    2
                  </div>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>Notification 1</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Notification 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open menu">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col space-y-4 mt-10 text-base font-medium">
                  <div className="text-center flex justify-center">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src="https://example.com/your-photo.jpg"
                        alt="User avatar"
                      />
                      <AvatarFallback>
                        <img
                          src="https://ui-avatars.com/api/?name=Negin+Kashani"
                          alt="Fallback avatar"
                          className="w-full h-full"
                        />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col gap-4 text-center">
                    <Link to="/">DASHBOARD</Link>
                    <Link to="/client">CLIENTS</Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
