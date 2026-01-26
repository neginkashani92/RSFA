import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import axiosClient from "@/lib/axiosClient";

function Clients() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosClient
      .get("/users?limit=24&skip=0")
      .then((res) => {
        const allUsers = res.data.users;
        const admins = allUsers.filter((user) => user.role === "user");
        setUsers(admins);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <>
      <div className="flex my-8 gap-5 flex-col lg:w-1/4 w-full">
        <div className="flex justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>

            <h1 className="pl-3 font-arimoB uppercase">Clients</h1>
          </div>

          <Button
            type="submit"
            className="bg-transparent text-xs text-black border-1 border-slate-400 rounded-none hover:bg-gray-200"
          >
            SEE ALL
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
        </div>
        <div className="flex border border-1 shadow-md p-3 justify-between">
          <div className="flex flex-col pl-2 ">
            <div className="text-xs">
              <p className="font-bold">Clients</p>
            </div>
            <div>
              <ul className="py-4 space-y-4">
                {users.map((user) => {
                  const fullName = `${user.firstName} ${user.lastName}`;
                  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    fullName,
                  )}`;

                  return (
                    <li key={user.id}>
                      <div className="flex gap-2">
                        <Avatar className="size-5">
                          <AvatarFallback className="text-[8px] flex items-center justify-center font-s bg-gray-500 text-white">
                            {user.firstName?.[0]}
                            {user.lastName?.[0]}
                          </AvatarFallback>
                        </Avatar>

                        <div className="text-xs items-center">{fullName}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-xs">
              <p className="font-bold">Active files</p>
            </div>
            <div>
              <ul className="py-4 space-y-5 text-end">
                <li className="text-xs items-center">4</li>
                <li className="text-xs items-center">3</li>
                <li className="text-xs items-center">2</li>
                <li className="text-xs items-center">1</li>
                <li className="text-xs items-center">1</li>
                <li className="text-xs items-center">1</li>
                <li className="text-xs items-center">1</li>
                <li className="text-xs items-center">1</li>
                <li className="text-xs items-center">1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
