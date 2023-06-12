import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function ProfilePage() {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>Make changes to your profile.</SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" className="col-span-3" />
        </div>
      </div>
      <SheetFooter>
        <Button type="submit">Save changes</Button>
      </SheetFooter>
    </>
  );
}
