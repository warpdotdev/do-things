import { ObjectCard } from "@/app/components/home/ObjectCard";
import { ObjectData, SortOrder } from "@/types/object";
import { FilterBadges } from "@/app/components/home/FilterBadges";

interface CardGridProps {
  filteredObjects: ObjectData[];
  selectedBadge: string | null;
  searchTerm: string;
  sortOrder: SortOrder;
  onBadgeClick: (badge: string) => void;
  onClearFilters: () => void;
}

export function CardGrid({
  filteredObjects,
  selectedBadge,
  searchTerm,
  sortOrder,
  onBadgeClick,
  onClearFilters
}: CardGridProps) {
  return (
    <>
      <FilterBadges
        selectedBadge={selectedBadge}
        searchTerm={searchTerm}
        sortOrder={sortOrder}
        onClearFilters={onClearFilters}
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredObjects.length === 0 ? (
          <div className="col-span-full text-center py-8">
            <p className="text-muted-foreground">
              {searchTerm || selectedBadge
                ? "No matches found. Try adjusting your filters."
                : "No objects available."}
            </p>
          </div>
        ) : (
          filteredObjects.map((object) => (
            <ObjectCard
              key={`${object.title}-${object.link}-${object.date_added}-${object.author}-${object.type}`}
              object={object}
              selectedBadge={selectedBadge}
              onBadgeClick={onBadgeClick}
            />
          ))
        )}
      </div>
    </>
  );
}
