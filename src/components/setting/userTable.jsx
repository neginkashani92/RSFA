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
function userTable() {
 const users = [
  { id: "1", name: "Negin Kashani", Status: "Active", Role: "Superadmin" },
  { id: "2", name: "Aria Johnson", Status: "Non Active", Role: "Clerk" },
  { id: "3", name: "Daniel Smith", Status: "Active", Role: "Administrator" },
  { id: "4", name: "Sara Williams", Status: "Active", Role: "Clerk" },
  { id: "5", name: "Omid Rahmani", Status: "Non Active", Role: "Superadmin" },
  { id: "6", name: "Liam Brown", Status: "Active", Role: "Administrator" },
  { id: "7", name: "Mina Farahani", Status: "Non Active", Role: "Clerk" },
  { id: "8", name: "Sophia Miller", Status: "Active", Role: "Superadmin" },
  { id: "9", name: "Kian Anderson", Status: "Active", Role: "Administrator" },
  { id: "10", name: "Emma Davis", Status: "Non Active", Role: "Clerk" },
];

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Name</TableHead>
            <TableHead className="font-bold">Role</TableHead>
            <TableHead className="font-bold">Status</TableHead>
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
                {user?.name}

                </div>
              </TableCell>
              <TableCell>{user.Role}</TableCell>
              <TableCell>{user.Status}</TableCell>
              <TableCell className="text-right"><UserDelete/> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default userTable;
