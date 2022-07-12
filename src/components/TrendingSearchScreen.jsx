import { useState, useEffect } from 'react';
import getTrendingTerms from '../services/getTrendingTermsService';
import Category from './Category';

const TrendingSearchScreen = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name='Tendencias' options={trends} />;
};

export default TrendingSearchScreen;
