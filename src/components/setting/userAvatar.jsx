import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function userAvatar({ user }) {
  const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`.trim();

  return (
    <>
      <Avatar className="w-20 h-20">
        <AvatarImage src={user?.image} alt={fullName} />
        <AvatarFallback className="bg-black text-white">
          {user?.firstName?.[0]}
          {user?.lastName?.[0]}
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
