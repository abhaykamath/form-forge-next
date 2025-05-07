"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-5 flex justify-center items-center relative h-10 w-10">
      {/* Dark Mode Button (visible in light mode) */}
      <Button
        variant="outline"
        size="icon"
        className="border-2 rounded-xl scale-0 dark:scale-100 absolute"
        onClick={() => setTheme("light")}
      >
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
      </Button>

      {/* Light Mode Button (visible in dark mode) */}
      <Button
        variant="outline"
        size="icon"
        className="border-2 rounded-xl scale-100 dark:scale-0 absolute"
        onClick={() => setTheme("dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:-rotate-90" />
      </Button>
    </div>
  );
}
