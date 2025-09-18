import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserDelete from "../setting/userDelete";
function clientTable() {
  const users = [
    {
      id: "1",
      client: "Negin Kashani",
      address: "1250 Rue Sherbrooke Ouest, Montreal, QC",
      telephone: "(514) 321-8745",
      branches: 0,
      activeFolder: 8,
    },
    {
      id: "2",
      client: "Aria Johnson",
      address: "88 King St W, Toronto, ON",
      telephone: "(416) 872-4502",
      branches: 0,
      activeFolder: 4,
    },
    {
      id: "3",
      client: "Daniel Smith",
      address: "201 Portage Ave, Winnipeg, MB",
      telephone: "(204) 654-2381",
      branches: 2,
      activeFolder: 5,
    },
    {
      id: "4",
      client: "Sara Williams",
      address: "999 Broadway, Vancouver, BC",
      telephone: "(604) 876-9023",
      branches: 0,
      activeFolder: 4,
    },
    {
      id: "5",
      client: "Omid Rahmani",
      address: "450 4th Ave SW, Calgary, AB",
      telephone: "(403) 765-1189",
      branches: 1,
      activeFolder: 6,
    },
    {
      id: "6",
      client: "Liam Brown",
      address: "75 Queen St, Ottawa, ON",
      telephone: "(613) 442-7701",
      branches: 0,
      activeFolder: 8,
    },
    {
      id: "7",
      client: "Mina Farahani",
      address: "300 Rideau St, Ottawa, ON",
      telephone: "(613) 907-3345",
      branches: 1,
      activeFolder: 4,
    },
    {
      id: "8",
      client: "Sophia Miller",
      address: "120 Granville St, Halifax, NS",
      telephone: "(902) 555-2398",
      branches: 1,
      activeFolder: 5,
    },
    {
      id: "9",
      client: "Kian Anderson",
      address: "85 Albert St, Regina, SK",
      telephone: "(306) 221-6730",
      branches: 0,
      activeFolder: 6,
    },
    {
      id: "10",
      client: "Emma Davis",
      address: "62 Main St, St. John’s, NL",
      telephone: "(709) 320-4497",
      branches: 0,
      activeFolder: 4,
    },
  ];

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold pl-5">Client</TableHead>
            <TableHead className="font-bold">ID</TableHead>
            <TableHead className="font-bold pl-8">Telephone</TableHead>
            <TableHead className="font-bold">Address</TableHead>
            <TableHead className="font-bold">Branches</TableHead>
            <TableHead className="font-bold pr-4">Active Folder</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium py-4">
                <div className="flex items-center gap-2 pl-4">
                  {user?.client}
                </div>
              </TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell className="pl-8">{user.telephone}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.branches}</TableCell>
              <TableCell>{user.activeFolder}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className="bg-white">
          <TableRow className="border-0 hover:bg-transparent">
            <TableCell colSpan={6} className="p-0">
              <div className="relative w-full py-3 flex items-center">
                {/* Left: Previous */}
                <div className="absolute left-0">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>

                {/* Center: Page Links */}
                <div className="mx-auto">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>

                {/* Right: Next */}
                <div className="absolute right-0">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </TableCell>
          </TableRow>

          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={6}>
              <div className="w-full flex justify-center py-3">
                Showing 1 to 25 of 150 results
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}

export default clientTable;
