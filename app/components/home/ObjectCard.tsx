import { useState } from 'react';
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/date";
import { showSuccessToast, showErrorToast } from "@/lib/toast";
import { ObjectData } from "@/types/object";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Button,
  Badge
} from "@/app/components/ui";
import {
  CopyIcon,
  CheckIcon,
  CalendarIcon,
  PersonIcon,
  RocketIcon,
  CodeIcon,
  FolderIcon,
  FileTextIcon
} from "@/app/components/ui/icons";

interface ObjectCardProps {
  object: ObjectData;
  selectedBadge: string | null;
  onBadgeClick: (badge: string) => void;
}

function ObjectTypeIcon({ type }: { type: string }) {
  const icons = {
    'Prompt': <RocketIcon className="h-4 w-4 text-muted-foreground" />,
    'Workflow': <CodeIcon className="h-4 w-4 text-muted-foreground" />,
    'Folder': <FolderIcon className="h-4 w-4 text-muted-foreground" />,
    'Notebook': <FileTextIcon className="h-4 w-4 text-muted-foreground" />
  };

  return icons[type as keyof typeof icons] || null;
}

function AuthorLink({ author }: { author: string }) {
  return (
    <a
      href={`https://github.com/${author}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-muted-foreground whitespace-nowrap flex items-center bg-secondary/30 hover:bg-secondary/40 transition-colors duration-200 px-2 py-1 rounded-md group cursor-pointer shrink-0"
      title={`View ${author}'s GitHub profile`}
    >
      <PersonIcon className="h-3 w-3 mr-1.5 inline-block opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
      @{author}
    </a>
  );
}

function DateBadge({ date }: { date: string }) {
  return (
    <div
      className="text-xs text-muted-foreground whitespace-nowrap flex items-center bg-secondary/30 hover:bg-secondary/40 transition-colors duration-200 px-2 py-1 rounded-md group cursor-default shrink-0"
      title={formatDate(date, 'full')}
      aria-label={`Added on ${formatDate(date, 'full')}`}
    >
      <CalendarIcon className="h-3 w-3 mr-1.5 inline-block opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
      {formatDate(date)}
    </div>
  );
}

function TagBadge({
  tag,
  isSelected,
  onClick
}: {
  tag: string;
  isSelected: boolean;
  onClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}) {
  return (
    <Badge
      variant={isSelected ? "default" : "secondary"}
      className={cn(
        "cursor-pointer transition-all duration-200",
        isSelected
          ? "ring-2 ring-primary/20"
          : "hover:bg-secondary/80"
      )}
      onClick={onClick}
    >
      {tag}
    </Badge>
  );
}

function CopyButton({
  link,
  type
}: {
  link: string;
  type: string;
}) {
  const [copying, setCopying] = useState(false);

  const handleCopy = async () => {
    try {
      setCopying(true);
      await navigator.clipboard.writeText(link);
      showSuccessToast("Copied to clipboard", `${type} link copied successfully`);
    } catch {
      showErrorToast("Failed to copy", `Could not copy ${type.toLowerCase()} link to clipboard`);
    } finally {
      setTimeout(() => setCopying(false), 1000);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "flex-1 cursor-pointer transition-all duration-200",
        !copying && "hover:bg-secondary/80"
      )}
      onClick={handleCopy}
      disabled={copying}
      aria-label={`Copy ${type.toLowerCase()} link to clipboard`}
    >
      {copying ? (
        <CheckIcon className="h-4 w-4 transition-transform duration-200" />
      ) : (
        <CopyIcon className="h-4 w-4 transition-transform duration-200" />
      )}
    </Button>
  );
}

export function ObjectCard({ object, selectedBadge, onBadgeClick }: ObjectCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-0">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start gap-3">
            <CardTitle className="text-base font-semibold flex items-center gap-2 break-words w-full">
              <ObjectTypeIcon type={object.type} />
              <span className="break-words min-w-0">{object.title}</span>
            </CardTitle>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <AuthorLink author={object.author} />
            <DateBadge date={object.dateAdded} />
          </div>
          <CardDescription className="text-sm break-words min-w-0">
            {object.description}
          </CardDescription>
          <div className="flex flex-wrap gap-1.5">
            {object.tags.map((tag, tagIndex) => (
              <TagBadge
                key={tagIndex}
                tag={tag}
                isSelected={tag === selectedBadge}
                onClick={(e) => {
                  e.preventDefault();
                  onBadgeClick(tag);
                }}
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardFooter className="pt-0">
        <div className="flex gap-2 w-full">
          <Button
            asChild
            className="flex-3 transition-colors"
            variant="default"
          >
            <a
              href={object.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              View {object.type}
            </a>
          </Button>
          <CopyButton link={object.link} type={object.type} />
        </div>
      </CardFooter>
    </Card>
  );
}
