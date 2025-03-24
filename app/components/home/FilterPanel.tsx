import { Card, CardHeader, CardTitle, CardContent, Badge } from "@/app/components/ui";
import { cn } from "@/lib/utils";

interface FilterPanelProps {
  badgeCounts: [string, number][];
  selectedBadge: string | null;
  onBadgeClick: (badge: string) => void;
  onClearFilters: () => void;
}

export function FilterPanel({ badgeCounts, selectedBadge, onBadgeClick, onClearFilters }: FilterPanelProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filter by tags</CardTitle>
          {selectedBadge && (
            <Badge
              variant="outline"
              className="cursor-pointer h-6 text-xs px-2"
              onClick={onClearFilters}
            >
              Clear filter
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col gap-2">
          {badgeCounts.length === 0 ? (
            <p className="text-sm text-muted-foreground">No badges found</p>
          ) : (
            <div className="space-y-1">
              {badgeCounts.map(([badge, count]) => (
                <button
                  key={badge}
                  type="button"
                  className="flex items-center justify-between w-full text-left p-2 rounded-md hover:bg-accent transition-colors duration-200"
                  onClick={() => onBadgeClick(badge)}
                  aria-label={`Filter by ${badge} (${count} items)`}
                >
                  <Badge
                    variant={selectedBadge === badge ? "default" : "secondary"}
                    className={cn(
                      "cursor-pointer transition-all duration-200",
                      selectedBadge === badge
                        ? "ring-2 ring-primary/20"
                        : "hover:bg-secondary/80"
                    )}
                  >
                    {badge}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{count}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
