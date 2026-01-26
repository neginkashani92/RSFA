import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function addNewClient() {
  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button className="w-full cursor-pointer">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              New Client
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle className="py-3">New Client</DialogTitle>
            </DialogHeader>
            <div className="grid gap-3">
              <div className="grid gap-3">
                <Label htmlFor="username-1">Invitation Email</Label>
                <Input
                  className=" border-slate-400 rounded-none"
                  id="username-1"
                  name="username"
                />
                <DialogDescription className="text-xs">
                  Email of the user who will complete the funeral registration
                </DialogDescription>
                <div className="flex gap-3">
                  <div className="grid w-3/4 gap-3">
                    <Label htmlFor="name-1">Name of Funeral Director</Label>
                    <Input
                      id="name-1"
                      name="name"
                      className=" border-slate-400 rounded-none"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">ID</Label>
                    <Input
                      id="name-1"
                      name="name"
                      className=" border-slate-400 rounded-none"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="grid w-3/4 gap-3">
                    <Label htmlFor="name-1">Number</Label>
                    <Input
                      id="name-1"
                      name="name"
                      className=" border-slate-400 rounded-none"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Apt/Office</Label>
                    <Input
                      id="name-1"
                      name="name"
                      className=" border-slate-400 rounded-none"
                    />
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="name-1">Street</Label>
                  <Input
                    id="name-1"
                    name="name"
                    className=" border-slate-400 rounded-none"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="grid w-3/4 gap-3">
                    <Label htmlFor="name-1">City</Label>
                    <Input
                      id="name-1"
                      name="name"
                      className=" border-slate-400 rounded-none"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Province</Label>
                    <Input
                      id="name-1"
                      name="name"
                      className=" border-slate-400 rounded-none"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">PostCode</Label>
                    <Input
                      id="name-1"
                      name="name"
                      className=" border-slate-400 rounded-none"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="grid w-1/2 gap-3">
                    <Label htmlFor="name-1">Telephone</Label>
                    <Input
                      id="name-1"
                      name="name"
                      className=" border-slate-400 rounded-none"
                    />
                  </div>
                  <div className="grid w-1/2 gap-3">
                    <Label htmlFor="name-1">Fax</Label>
                    <Input
                      id="name-1"
                      name="name"
                      className=" border-slate-400 rounded-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Send</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}

export default addNewClient;
