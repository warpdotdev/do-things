import { Badge, Button } from "@/app/components/ui";
import { SortOrder } from "@/types/object";

interface FilterBadgesProps {
  selectedBadge: string | null;
  searchTerm: string;
  sortOrder: SortOrder;
  onClearFilters: () => void;
}

export function FilterBadges({ selectedBadge, searchTerm, sortOrder, onClearFilters }: FilterBadgesProps) {
  if (!selectedBadge && !searchTerm && !sortOrder) return null;

  return (
    <div className="mb-4 flex items-center flex-wrap gap-2">
      <p className="text-sm text-muted-foreground">
        Filtered by:
      </p>
      {selectedBadge && (
        <Badge variant="secondary">
          {selectedBadge}
        </Badge>
      )}
      {searchTerm && (
        <Badge variant="secondary">
          Search: {searchTerm}
        </Badge>
      )}
      {sortOrder && (
        <Badge variant="secondary">
          Date: {sortOrder === 'newest' ? 'Newest first' : 'Oldest first'}
        </Badge>
      )}
      <Button
        variant="outline"
        size="sm"
        className="cursor-pointer h-6 text-xs px-2"
        onClick={onClearFilters}
      >
        Clear All
      </Button>
    </div>
  );
}
