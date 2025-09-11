import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function userAvatar() {
  return (
    <>
      <Avatar className="w-20 h-20">
        <AvatarImage
          src="https://example.com/your-photo.jpg"
          alt="User avatar"
        />
        <AvatarFallback className="">
          <img
            src="https://ui-avatars.com/api/?background=black&color=fff&name=Negin+Kashani"
            alt="Fallback avatar"
            className="w-full h-full"
          />
        </AvatarFallback>
      </Avatar>
      <div>
        <h2 className="uppercase pb-2 font-arimoR">your Avatar</h2>
        <Button
          type="submit"
          className="bg-transparent text-xs text-black border-1 border-navy hover:bg-gray-200 rounded-none"
        >
          Upload your photos
        </Button>
      </div>
    </>
  );
}

export default userAvatar;
