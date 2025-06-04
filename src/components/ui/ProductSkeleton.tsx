
import { Skeleton } from '@/components/ui/skeleton';

interface ProductSkeletonProps {
  viewMode?: 'grid' | 'list';
}

const ProductSkeleton = ({ viewMode = 'grid' }: ProductSkeletonProps) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-sm ${
      viewMode === 'list' ? 'flex' : ''
    }`}>
      <Skeleton className={`${viewMode === 'list' ? 'w-48' : 'aspect-[3/4]'}`} />
      <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-2" />
        <Skeleton className="h-6 w-1/4" />
        {viewMode === 'list' && (
          <Skeleton className="h-10 w-32 mt-4" />
        )}
      </div>
    </div>
  );
};

export default ProductSkeleton;
