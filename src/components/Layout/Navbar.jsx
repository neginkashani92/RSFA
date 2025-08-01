import favicon from "../../assets/img/favicon-260.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <>
      <header className="bg-navy text-white w-screen h-15">
        <div className="max-w-7xl mx-auto p-2 flex justify-between">
          <div className="flex items-center gap-6">
            <img src={favicon} alt="RSAF-logo" className="w-8 h-8" />
            <nav className="space-x-8 text-md px-4" aria-label="main">
              <a href="#" className="hover:opacity-70">
                TABLEAU DE BORD
              </a>
              <a href="#" className="hover:opacity-70">
                DOSSIERS
              </a>
              <a href="#" className="hover:opacity-70">
                CLIENTS
              </a>
            </nav>
          </div>
          <div className="flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
            <button
              type="button"
              class="relative inline-flex items-center p-1.5 text-sm font-medium text-center text-white border rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>

              <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-[#C9A66A] border-1 border-white rounded-full -top-1 -end-1 dark:border-gray-900">
                2
              </div>
            </button>
             </DropdownMenuTrigger>
             <DropdownMenuContent>
                <DropdownMenuItem>Notification 1</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Notification 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>


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
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
