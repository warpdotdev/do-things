'use client';

// React imports
import { useEffect, useState, useMemo } from 'react';

// Home Components
import { Header } from '@/app/components/home/Header';
import { SearchBar } from '@/app/components/home/SearchBar';
import { FilterPanel } from '@/app/components/home/FilterPanel';
import { CardGrid } from '@/app/components/home/CardGrid';
import { LoadingState } from '@/app/components/home/LoadingState';
import { ErrorState } from '@/app/components/home/ErrorState';
import { Footer } from '@/app/components/home/Footer';

// Utils
import { fuzzySearch } from "@/lib/utils";

// Types
import { ObjectData, SortOrder } from "@/types/object";

export default function Home() {
  // Hooks and state
  const [objects, setObjects] = useState<ObjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  // Data fetching
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setObjects(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Memoized values
  const badgeCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    objects.forEach(object => {
      object.tags.forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
      });
    });

    return Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [objects]);

  const filteredObjects = useMemo(() => {
    const filtered = objects.filter(object => {
      const matchesSearch = searchTerm === "" ||
        fuzzySearch(searchTerm.toLowerCase(), object.title.toLowerCase()) ||
        fuzzySearch(searchTerm.toLowerCase(), object.description.toLowerCase()) ||
        object.tags.some(tag => fuzzySearch(searchTerm.toLowerCase(), tag.toLowerCase()));

      const matchesTag = !selectedBadge || object.tags.includes(selectedBadge);

      return matchesSearch && matchesTag;
    });

    if (sortOrder) {
      return [...filtered].sort((a, b) => {
        if (!a.dateAdded) return 1;
        if (!b.dateAdded) return -1;

        const dateA = new Date(a.dateAdded);
        const dateB = new Date(b.dateAdded);

        if (isNaN(dateA.getTime())) return 1;
        if (isNaN(dateB.getTime())) return -1;

        return sortOrder === 'newest'
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      });
    }

    return filtered;
  }, [objects, selectedBadge, searchTerm, sortOrder]);

  // Event handlers
  const handleBadgeClick = (badge: string): void => {
    setSelectedBadge(prevBadge => prevBadge === badge ? null : badge);
  };

  const handleClearFilters = (): void => {
    setSelectedBadge(null);
    setSearchTerm('');
    setSortOrder(null);
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-8">
          <Header />
        </div>
        <SearchBar
          searchTerm={searchTerm}
          sortOrder={sortOrder}
          onSearchChange={setSearchTerm}
          onSortChange={setSortOrder}
        />

        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-auto pb-4">
              <FilterPanel
                badgeCounts={badgeCounts}
                selectedBadge={selectedBadge}
                onBadgeClick={handleBadgeClick}
                onClearFilters={handleClearFilters}
              />
            </div>
          </aside>

          <div className="flex-1">
            <CardGrid
              filteredObjects={filteredObjects}
              selectedBadge={selectedBadge}
              searchTerm={searchTerm}
              sortOrder={sortOrder}
              onBadgeClick={handleBadgeClick}
              onClearFilters={handleClearFilters}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
