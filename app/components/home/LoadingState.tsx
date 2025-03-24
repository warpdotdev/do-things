import { Card, CardHeader, CardContent, Skeleton } from "@/app/components/ui";

export function LoadingState() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8 mb-8">
        <div className="flex justify-between items-center">
          <Skeleton className="h-[47px] w-[200px]" />
          <div className="flex gap-4">
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
        <div className="text-center">
          <Skeleton className="h-10 w-[300px] mx-auto mb-2" />
          <Skeleton className="h-6 w-[400px] mx-auto" />
        </div>
      </div>

      {/* Search Bar Skeleton */}
      <div className="mb-8 w-full mx-auto">
        <Card>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="w-full md:w-64">
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filter Panel Skeleton */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-4">
            <Card className="shadow-sm">
              <CardHeader>
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-8 w-full" />
                  ))}
                </div>
              </CardHeader>
            </Card>
          </div>
        </aside>

        {/* Card Grid Skeleton */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="flex flex-col h-full">
                <CardHeader className="pb-3 flex-1">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start gap-3">
                      <Skeleton className="h-5 w-[160px]" />
                      <Skeleton className="h-6 w-[80px]" />
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-5 w-16" />
                    </div>
                    <Skeleton className="h-20 w-full mt-2" />
                  </div>
                </CardHeader>
                <CardContent className="pt-1">
                  <Skeleton className="h-9 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
