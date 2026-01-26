import NewMessages from "../components/dashboard/newMessages";
import Notifications from "../components/dashboard/notifications";
import Status from "../components/dashboard/status";
import ActiveFiles from "../components/dashboard/activeFiles";
import Clients from "../components/dashboard/clients";
import Statistics from "../components/dashboard/statistics";
function Dashboard() {
  return (
    <>
      <div className="max-w-7xl mx-auto my-5 px-3 md:px-0">

        <div className="md:flex gap-5 w-full">
          <div className="flex mb-8 gap-2 flex-col lg:w-3/8 w-full">
                <div className="flex items-center">
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
            <div className="flex flex-row border border-1 shadow-md p-3 gap-2">
              <NewMessages />
            </div>
          </div>
            <div className="flex my-8 gap-1 flex-col lg:w-3/8 w-full border border-1 shadow-md">
              <Status />
            </div>
            <div className="flex mb-8 gap-2 flex-col lg:w-1/4 w-full">
              <div className="flex items-center">
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
            <h1 className="pl-3 font-arimoB uppercase">Notifications</h1>
              </div>
          <div className="w-full border border-1 shadow-md p-4 h-[400px] overflow-y-auto">
            <Notifications />
          </div>
            </div>
        </div>




        <div className="md:flex gap-5 pb-4 w-full">
          <ActiveFiles />
          <Clients />
          <Statistics />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
