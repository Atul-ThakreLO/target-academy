import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "lucide-react";
import React from "react";

const CareerCard = () => {
  return (
    <Card className="max-w-[700px]">
      <CardHeader>
        <h3 className="text-3xl font-semibold">Job Title</h3>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
        dignissimos officia possimus, omnis at accusantium nesciunt laborum
        veritatis similique nobis recusandae consectetur qui, voluptatem autem
        voluptas dicta. Consequuntur, ex iure!
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger>
            <Button>
              Apply Now <Link />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Job Apply</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione, aperiam repellat? Aperiam minima id rem, illo vero est
                voluptatum soluta. Maxime magni non molestiae provident itaque
                est saepe sunt ipsa!
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
                <Button>Apply </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
