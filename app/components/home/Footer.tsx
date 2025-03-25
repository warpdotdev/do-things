import Link from 'next/link';
import { XLogoIcon, DiscordLogoIcon, LinkedInLogoIcon, GitHubLogoIcon, VideoIcon } from '../ui/icons';

export function Footer() {
  return (
    <footer className="py-4 bg-background">
      <div className="container mx-auto px-4 border-t border-border">
        <div className="flex justify-between items-center pt-4">
          <span className="text-muted-foreground text-sm">
            All Rights Reserved © 2025
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="https://warp.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Warp
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="https://x.com/warpdotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <XLogoIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@warpdotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <VideoIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://discord.com/invite/warpdotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <DiscordLogoIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/warpdotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedInLogoIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/warpdotdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
