"use client";

import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export default function NavbarRoutes() {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Button size="sm" variant="ghost" asChild>
          <Link href="/">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Link>
        </Button>
      ) : (
        <Button asChild size="sm" variant="ghost">
          <Link href="/teacher/courses">Teacher Mode</Link>
        </Button>
      )}
      {/* <UserButton /> */}
    </div>
  );
}
