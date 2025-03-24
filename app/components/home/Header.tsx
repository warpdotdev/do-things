'use client';

import { Button } from "@/app/components/ui";
import { ThemeToggle } from "@/app/components/ui/themeToggle";
import Image from 'next/image';
import { useTheme } from 'next-themes';

function Logo() {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/images/logo-light.svg' : '/images/logo-dark.svg';

  return (
    <a href="https://warp.dev" target="_blank" rel="noopener noreferrer">
      <div className="relative w-[200px] h-[47px]">
        <Image
          src={logoSrc}
          alt="Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </a>
  );
}

export function Header() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex gap-4">
            <ThemeToggle />
            <Button asChild>
              <a href="https://github.com/warpdotdev/do-things" target="_blank" rel="noopener noreferrer">
                Contribute
              </a>
            </Button>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Do more things with Warp</h1>
          <p className="text-lg text-muted-foreground space-y-4">
            Discover how members of the Warp team and community are using Warp in their day-to-day development.
            <br />
            We&apos;ve curated some of our favorite use-cases below— browse the list, give them a try, and contribute your own.
            <br />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-4 block">
              Always review and verify the content of any object before running it on your system.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
