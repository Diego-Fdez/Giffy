import useNearScreen from '../hooks/useNearScreen';
import React, { Suspense } from 'react';
import Spinner from './Spinner';

const TrendingSearchScreen = React.lazy(() => import('./TrendingSearchScreen'));

//lazyLoad
export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '70px' });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Spinner />}>
        {isNearScreen ? <TrendingSearchScreen /> : <Spinner />}
      </Suspense>
    </div>
  );
}
