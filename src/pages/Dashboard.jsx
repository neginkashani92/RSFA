import NewMessages from "../components/dashboard/newMessages";
import Notifications from "../components/dashboard/notifications";
import Status from "../components/dashboard/status";
import ActiveFiles from "../components/dashboard/activeFiles";
function Dashboard() {
  return (
    <>
      <div className="max-w-7xl mx-auto my-5 px-3 md:px-0">
        <div className="flex mb-4">
          <div className="flex w-3/4">
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
                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
            <h1 className="pl-3 font-arimoB uppercase">Folders</h1>
          </div>
          <div className="flex">
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
            <h1 className="pl-3 font-arimoB uppercase">Notifications</h1>
          </div>
        </div>

        <div className="md:flex gap-5">
          <div className="md:w-3/4 flex gap-2">
            <div className="md:w-1/2 border border-1 shadow-md p-4">
              <NewMessages />
            </div>
            <div className="md:w-1/2 border border-1 shadow-md p-4 ">
              <Status />
            </div>
          </div>
          <div className="md:w-1/4 border border-1 shadow-md p-4 h-[400px] overflow-y-auto">
            <Notifications />
          </div>
        </div>

        <ActiveFiles />
      </div>
    </>
  );
}

export default Dashboard;
