import { Skeleton } from "@/components/ui/skeleton"

export function PostCardSkeleton() {
  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-center gap-3 mb-4">
        <Skeleton className="h-11 w-11 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-48 w-full mt-3 rounded-xl" />
      </div>
      <div className="flex items-center gap-1 pt-3 border-t border-border">
        <Skeleton className="h-8 w-16 rounded-full" />
        <Skeleton className="h-8 w-16 rounded-full" />
        <Skeleton className="h-8 w-16 rounded-full" />
      </div>
    </div>
  )
}
