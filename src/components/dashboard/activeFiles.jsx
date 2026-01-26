import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import axiosClient from "@/lib/axiosClient";

function activeFiles() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/users?limit=10&skip=0")
      .then((res) => {
        const allUsers = res.data.users;
        const admins = allUsers.filter((user) => user.role === "admin");
        setUsers(admins);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);
  return (
    <>
      <div className="flex my-8 gap-5 flex-col lg:w-3/8 w-full">
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <h1 className="pl-3 font-arimoB uppercase">
              ACTIVE FILES OVERVIEW
            </h1>
          </div>

          <Button
            type="submit"
            className="bg-transparent text-xs text-black border-1 border-slate-400 rounded-none hover:bg-gray-200"
          >
            ALL FILES
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

        <div className="flex flex-row border border-1 shadow-md p-3 gap-2">
          <div className="flex flex-col w-1/2 h-89">
            <div className="relative flex flex-1 items-center justify-center bg-gradient-to-b h-1/3 from-slate-200 to-white border-t-4 border-t-black">
              <div className="absolute top-2 left-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>
              </div>

              <div className="flex flex-col text-center">
                <h1 className="font-bold text-2xl">18</h1>
                <p>Active Files</p>
              </div>
            </div>

            <div className="relative flex flex-1 items-center justify-center bg-gradient-to-b h-1/3 from-slate-200 to-white border-t-4 border-t-black">
              <div className="absolute top-2 left-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col text-center">
                <h1 className="font-bold text-2xl">3</h1>
                <p>Files Transmitted</p>
              </div>
            </div>

            <div className="relative flex flex-1 items-center justify-center bg-gradient-to-b h-1/3 from-slate-200 to-white border-t-4 border-t-black">
              <div className="absolute top-2 left-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </div>
              <div className="flex flex-col text-center">
                <h1 className="font-bold text-2xl">8</h1>
                <p>New Posts</p>
              </div>
            </div>
          </div>

          <div className="w-1/2 border-l-1 flex justify-between border-slate-400">
            <div className="flex flex-col pl-2 ">
              <div className="text-xs">
                <p className="font-bold">Assigned to</p>
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
                <p className="font-bold">files</p>
              </div>
              <div>
                <ul className="py-4 space-y-5 text-end">
                  <li className="text-xs items-center">7</li>
                  <li className="text-xs items-center">6</li>
                  <li className="text-xs items-center">2</li>
                  <li className="text-xs items-center">2</li>
                  <li className="text-xs items-center">1</li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default activeFiles;
