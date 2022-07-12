import { useState, useEffect, useContext } from 'react';
import getGifs from '../services/getGifs';
import GifContext from '../context/GifContext';

const INITIAL_PAGE = 0;

export const useGifs = ({ keyword, rating } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const { gifs, setGifs } = useContext(GifContext);

  //recuperamos la keyword del localStorage
  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'random';

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      //guardamos la keyword en el localStorage
      localStorage.setItem('lastKeyword', keywordToUse);
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs({ keyword: keywordToUse, rating, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [keywordToUse, page, setGifs]);

  return {
    loading,
    gifs,
    setPage,
    loadingNextPage,
  };
};
