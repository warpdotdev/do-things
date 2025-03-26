"use client";

import {
  CalendarIcon as RadixCalendarIcon,
  MagnifyingGlassIcon as RadixMagnifyingGlassIcon,
  Cross2Icon as RadixCross2Icon,
  CopyIcon as RadixCopyIcon,
  CheckIcon as RadixCheckIcon,
  PersonIcon as RadixPersonIcon,
  RocketIcon as RadixRocketIcon,
  CodeIcon as RadixCodeIcon,
  FileTextIcon as RadixFileTextIcon,
  DiscordLogoIcon as RadixDiscordLogoIcon,
  LinkedInLogoIcon as RadixLinkedInLogoIcon,
  GitHubLogoIcon as RadixGitHubLogoIcon,
  VideoIcon as RadixVideoIcon
} from "@radix-ui/react-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { NewTwitterIcon, FolderIcon as HugeiconsFolderIcon } from "@hugeicons/core-free-icons";

// Re-export icons
export const CalendarIcon = RadixCalendarIcon;
export const MagnifyingGlassIcon = RadixMagnifyingGlassIcon;
export const Cross2Icon = RadixCross2Icon;
export const CopyIcon = RadixCopyIcon;
export const CheckIcon = RadixCheckIcon;
export const PersonIcon = RadixPersonIcon;
export const RocketIcon = RadixRocketIcon;
export const CodeIcon = RadixCodeIcon;
export const FolderIcon = (props: Omit<React.ComponentProps<typeof HugeiconsIcon>, "icon">) => (
  <HugeiconsIcon icon={HugeiconsFolderIcon} {...props} />
);
export const FileTextIcon = RadixFileTextIcon;
export const XLogoIcon = (props: Omit<React.ComponentProps<typeof HugeiconsIcon>, "icon">) => (
  <HugeiconsIcon icon={NewTwitterIcon} {...props} />
);
export const DiscordLogoIcon = RadixDiscordLogoIcon;
export const LinkedInLogoIcon = RadixLinkedInLogoIcon;
export const GitHubLogoIcon = RadixGitHubLogoIcon;
export const VideoIcon = RadixVideoIcon;
