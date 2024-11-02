import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileIcon } from "@radix-ui/react-icons";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MobileIcon/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader >
          <SheetTitle>Edit profile</SheetTitle>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
