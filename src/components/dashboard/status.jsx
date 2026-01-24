import { Button } from "@/components/ui/button";
function Status() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
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
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <div className="flex flex-col">
            <h2 className="font-bold">Status</h2>
            <span className="text-xs text-slate-600 pt-0">Assign to me</span>
          </div>
        </div>
        <div>
          <Button
            type="submit"
            className="bg-transparent text-xs text-black border-1 border-slate-400 rounded-none hover:bg-gray-200"
          >
            MY FILES
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex gap-3">
      <div className="flex flex-col w-1/2 h-84 py-6">
        <div className="flex flex-1 items-center justify-center bg-gradient-to-b h-1/2 from-slate-200 to-white border-t-4 border-t-black">
          <div className="flex flex-col text-center">
          <h1 className="font-bold text-2xl">6</h1>
          <p>Total Files</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center bg-gradient-to-b h-1/2 from-[#E1EFF5] to-white border-t-4 border-t-[#40A5D3]">
         <div className="flex flex-col text-center">
          <h1 className="font-bold text-2xl">1</h1>
          <p>In Treatment</p>
         </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 h-84 py-6">
        <div className="flex justify-between items-center pb-8">
        <div className="text-sm flex gap-2">
            <div className="inline-flex items-center justify-center w-1 h-12 font-bold text-white bg-[#D5B626] border-1">
            </div>
            <div>
             <span className="text-lg font-bold pr-3">2</span>Corrections
             </div>
            </div>

        <div className="items-center">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
        </div>
        </div>

          <div className="flex justify-between items-center pb-8">
        <div className="text-sm flex gap-2">
            <div className="inline-flex items-center justify-center w-1 h-12 font-bold text-white bg-[#C69039] border-1">
            </div>
            <div>
             <span className="text-lg font-bold pr-3">1</span>Correction Transmitted
             </div>
            </div>

        <div className="items-center">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
        </div>
        </div>

          <div className="flex justify-between items-center pb-8">
        <div className="text-sm flex gap-2">
            <div className="inline-flex items-center justify-center w-1 h-12 font-bold text-white bg-[#4A5FA8] border-1">
            </div>
            <div>
             <span className="text-lg font-bold pr-3">1</span>Waiting for approval
             </div>
            </div>

        <div className="items-center">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
        </div>
        </div>

         <div className="flex justify-between items-center pb-8">
        <div className="text-sm flex gap-2">
            <div className="inline-flex items-center justify-center w-1 h-12 font-bold text-white bg-[#42B44F] border-1">
            </div>
            <div>
             <span className="text-lg font-bold pr-3">1</span>Approve
             </div>
            </div>

        <div className="items-center">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
        </div>
        </div>


      </div>
      </div>
    </>
  );
}

export default Status;
