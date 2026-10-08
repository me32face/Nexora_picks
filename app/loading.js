import Container from "@/components/ui/Container";
import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="py-12 sm:py-20 animate-fade-in">
      <Container>
        <div className="space-y-8 max-w-4xl mx-auto">
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-5 w-1/2" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            <Skeleton className="h-64 rounded-2xl" />
            <Skeleton className="h-64 rounded-2xl" />
            <Skeleton className="h-64 rounded-2xl" />
          </div>
        </div>
      </Container>
    </div>
  );
}
