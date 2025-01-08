import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Button className="p-6" asChild>
        <Link href="/teacher/create">New Course</Link>
      </Button>
    </div>
  );
}
