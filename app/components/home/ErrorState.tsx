import { Card, CardContent } from "@/app/components/ui";

interface ErrorStateProps {
  error: string;
}

export function ErrorState({ error }: ErrorStateProps) {
  return (
    <main className="container mx-auto p-4">
      <Card className="bg-red-50">
        <CardContent className="pt-6">
          <p className="text-red-600">Error: {error}</p>
        </CardContent>
      </Card>
    </main>
  );
} 