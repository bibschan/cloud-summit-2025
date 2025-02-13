import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-8">
        {/* Title Skeleton */}
        <Skeleton className="h-9 w-96 mb-4 bg-slate-700/50" />
        
        {/* Search Bar Skeleton */}
        <div className="relative w-full max-w-md">
          <Skeleton className="h-10 w-full rounded-lg bg-slate-700/50" />
        </div>
      </div>
      
      {/* Cards Grid Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="bg-slate-800/80 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                {/* Provider Name */}
                <Skeleton className="h-7 w-40 bg-slate-700/50" />
                {/* Logo */}
                <Skeleton className="h-10 w-10 rounded-md bg-slate-700/50" />
              </div>
            </CardHeader>
            <CardContent>
              {/* Progress Bar */}
              <Skeleton className="h-2 w-full rounded-full mb-2 bg-slate-700/50" />
              <Skeleton className="h-4 w-24 bg-slate-700/50" />
            </CardContent>
            <CardFooter>
              {/* Button */}
              <Skeleton className="h-10 w-full rounded-md bg-slate-700/50" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 