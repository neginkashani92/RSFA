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
import { useEffect, useState } from "react";
import axiosClient from "@/lib/axiosClient";
import { useNavigate } from "react-router-dom";

function clientTable() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient
      .get("/users?limit=10&skip=0")
      .then((response) => {
        setUsers(response.data?.users);
      })
      .catch((error) => {
        console.error("Failed to fetch user:", error);
      });
  }, []);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold pl-5">Client</TableHead>
            <TableHead className="font-bold">ID</TableHead>
            <TableHead className="font-bold pl-8">Telephone</TableHead>
            <TableHead className="font-bold">Address</TableHead>
            <TableHead className="font-bold">Role</TableHead>
            <TableHead className="font-bold">Username</TableHead>
            <TableHead className="font-bold">Password</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              onClick={() => navigate(`/client/${user.id}`)}
              className="cursor-pointer hover:bg-muted/50 transition"
            >
              <TableCell className="font-medium py-4">
                <div className="flex items-center gap-2 pl-4">
                  {user.firstName} {user.lastName}
                </div>
              </TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell className="pl-8">{user.phone}</TableCell>
              <TableCell>{user.address?.address}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className="bg-white">
          <TableRow className="border-0 hover:bg-transparent">
            <TableCell colSpan={6} className="p-0">
              <div className="relative w-full py-3 flex items-center">
                <div className="absolute left-0">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>

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
