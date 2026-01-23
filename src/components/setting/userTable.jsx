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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserDelete from "../setting/userDelete"
import { useEffect, useState } from "react";
import axiosClient from "@/lib/axiosClient";

function userTable() {
   const [users, setUsers] = useState([]);

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
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Role</TableHead>
            <TableHead className="font-bold">email</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                <Avatar className="w-5 h-5">
                  <AvatarImage
                    src="https://example.com/your-photo.jpg"
                    alt="User avatar"
                  />
                  <AvatarFallback className="">
                    <img
                      src={`https://ui-avatars.com/api/?background=black&color=fff&name=${user?.name}`}
                      alt="Fallback avatar"
                      className="w-full h-full"
                    />
                  </AvatarFallback>
                </Avatar>
               {user?.firstName + " " + user?.lastName}

                </div>
              </TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-right"><UserDelete/> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default userTable;
