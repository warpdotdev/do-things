import { Input, Card, CardContent } from "@/app/components/ui";
import { MagnifyingGlassIcon, Cross2Icon, CalendarIcon } from "@/app/components/ui/icons";
import { SortOrder } from "@/types/object";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/app/components/ui/select";

interface SearchBarProps {
  searchTerm: string;
  sortOrder: SortOrder;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOrder) => void;
}

export function SearchBar({ searchTerm, sortOrder, onSearchChange, onSortChange }: SearchBarProps) {
  return (
    <div className="mb-8 w-full mx-auto">
      <Card>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Search objects..."
                className="pl-10 pr-10"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                aria-label="Search objects"
              />
              {searchTerm && (
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => onSearchChange('')}
                  type="button"
                >
                  <Cross2Icon className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
            <div className="w-full md:w-64">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                <Select
                  value={sortOrder || 'default'}
                  onValueChange={(value) => onSortChange(value === 'default' ? null : (value as 'newest' | 'oldest'))}
                >
                  <SelectTrigger className="w-full pl-10">
                    <SelectValue placeholder="Sort by date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Sort by date</SelectItem>
                    <SelectItem value="newest">Newest first</SelectItem>
                    <SelectItem value="oldest">Oldest first</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
