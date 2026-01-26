
function newMessages() {


  return (
    <>
    <div>
      {/* <div className="flex mb-4">
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
        </div> */}
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
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <div className="flex flex-col">
                <h2 className="font-bold text-sm">
                  New messages
                  <span class="inline-flex items-center ml-2 justify-center w-5 h-5 text-xs font-bold text-white bg-[#C9A66A] border-1 border-white rounded-full dark:border-gray-900">
                    4
                  </span>
                  
                </h2>
                <span className="text-xs text-slate-600 pt-0">
                  Assign to me
                </span>
                </div>
              </div>
              
              <div className="py-4">
              <div>
                <p className="text-sm">2023-445 | <span className="font-bold">506 MAGNUS POIRIER</span></p>
              </div>
              <div className="text-xs">
                <p>Sorry Israel, I forgot to add the information with the...</p>
              </div>
              <div className="text-xs text-slate-600">
              <p>Today at 1:45 PM</p>
              </div>
              </div>

               <div className="py-4">
              <div>
                <p className="text-sm">2023-432 | <span className="font-bold">559 RODRIGUE MONTPETIT ET FILS</span></p>
              </div>
              <div className="text-xs">
                <p>Example of a condensed message from a customer that appears...</p>
              </div>
              <div className="text-xs text-slate-600">
              <p>Yesterday at 11:45</p>
              </div>
              </div>

               <div className="py-4">
              <div>
                <p className="text-sm">2023-441 | <span className="font-bold">582 F. THERIAULT INC.</span></p>
              </div>
              <div className="text-xs">
                <p>Example of a condensed message from a customer that appears...</p>
              </div>
              <div className="text-xs text-slate-600">
              <p>JUL 29 at 9:02</p>
              </div>
              </div>
                <div className="py-4">
              <div>
                <p className="text-sm">2023-441 | <span className="font-bold">582 F. THERIAULT INC.</span></p>
              </div>
              <div className="text-xs">
                <p>Example of a condensed message from a customer that appears...</p>
              </div>
              <div className="text-xs text-slate-600">
              <p>JUL 29 at 9:02</p>
              </div>
              </div>
    </div>
      
    </>
  );
}

export default newMessages;
