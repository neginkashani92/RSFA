import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Clients() {
  return (
    <>
      <div className="flex my-8 gap-5 flex-col lg:w-1/4 w-full">
        <div className="flex justify-between">
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
        <div className="flex border border-1 shadow-md p-3 justify-between">
          <div className="flex flex-col pl-2 ">
            <div className="text-xs">
              <p className="font-bold">Client</p>
            </div>
            <div>
              <ul className="py-4 space-y-4">
                <li>
                  {" "}
                  <div className="flex gap-2">
                    <Avatar className="size-5">
                      <AvatarImage
                        src="https://example.com/your-photo.jpg"
                        alt="User avatar"
                      />
                      <AvatarFallback className="">
                        <img
                          src="https://ui-avatars.com/api/?name=Kevin+Houle"
                          alt="Fallback avatar"
                          className="w-full h-full"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xs items-center">Kevin Houle</div>
                  </div>
                </li>

                <li>
                  {" "}
                  <div className="flex gap-2">
                    <Avatar className="size-5">
                      <AvatarImage
                        src="https://example.com/your-photo.jpg"
                        alt="User avatar"
                      />
                      <AvatarFallback className="">
                        <img
                          src="https://ui-avatars.com/api/?name=Isael+Martineau"
                          alt="Fallback avatar"
                          className="w-full h-full"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xs items-center">Isael Martineau</div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="flex gap-2">
                    <Avatar className="size-5">
                      <AvatarImage
                        src="https://example.com/your-photo.jpg"
                        alt="User avatar"
                      />
                      <AvatarFallback className="">
                        <img
                          src="https://ui-avatars.com/api/?name=Caroline+Asselin"
                          alt="Fallback avatar"
                          className="w-full h-full"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xs items-center">Caroline Asselin</div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="flex gap-2">
                    <Avatar className="size-5">
                      <AvatarImage
                        src="https://example.com/your-photo.jpg"
                        alt="User avatar"
                      />
                      <AvatarFallback className="">
                        <img
                          src="https://ui-avatars.com/api/?name=Dorianne+Dubé"
                          alt="Fallback avatar"
                          className="w-full h-full"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xs items-center">Dorianne Dubé</div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="flex gap-2">
                    <Avatar className="size-5">
                      <AvatarImage
                        src="https://example.com/your-photo.jpg"
                        alt="User avatar"
                      />
                      <AvatarFallback className="">
                        <img
                          src="https://ui-avatars.com/api/?name=Monique+MonPetit"
                          alt="Fallback avatar"
                          className="w-full h-full"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xs items-center">
                      Monique Mon Petit
                    </div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="flex gap-2">
                    <Avatar className="size-5">
                      <AvatarImage
                        src="https://example.com/your-photo.jpg"
                        alt="User avatar"
                      />
                      <AvatarFallback className="">
                        <img
                          src="https://ui-avatars.com/api/?name=Marc+Hebert"
                          alt="Fallback avatar"
                          className="w-full h-full"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xs items-center">Marc Hebert</div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="flex gap-2">
                    <Avatar className="size-5">
                      <AvatarImage
                        src="https://example.com/your-photo.jpg"
                        alt="User avatar"
                      />
                      <AvatarFallback className="">
                        <img
                          src="https://ui-avatars.com/api/?name=Ismael+Kashafar"
                          alt="Fallback avatar"
                          className="w-full h-full"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xs items-center">Ismael Kashafar</div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="flex gap-2">
                    <Avatar className="size-5">
                      <AvatarImage
                        src="https://example.com/your-photo.jpg"
                        alt="User avatar"
                      />
                      <AvatarFallback className="">
                        <img
                          src="https://ui-avatars.com/api/?name=Véronique+Vaillancourt"
                          alt="Fallback avatar"
                          className="w-full h-full"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xs items-center">
                      Véronique Vaillancourt
                    </div>
                  </div>
                </li>
                <li>
                  {" "}
                  <div className="flex gap-2">
                    <Avatar className="size-5">
                      <AvatarImage
                        src="https://example.com/your-photo.jpg"
                        alt="User avatar"
                      />
                      <AvatarFallback className="">
                        <img
                          src="https://ui-avatars.com/api/?name=Mireille+Séguin"
                          alt="Fallback avatar"
                          className="w-full h-full"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xs items-center">Mireille Séguin</div>
                  </div>
                </li>
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
