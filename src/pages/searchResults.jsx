import Spinner from '../components/Spinner';
import ListOfGifs from '../components/ListOfGifs';
import { useGifs } from '../hooks/useGifs';
import useNearScreen from '../hooks/useNearScreen';
import { useRef, useEffect, useCallback } from 'react';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';
import SearchForm from '../components/SearchForm';

const SearchResult = ({ params }) => {
  const { keyword, rating = 'g' } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });
  const title = gifs ? `${gifs.length} resultados de ${keyword}` : '';

  const debounceNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceNextPage();
  }, [debounceNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name='description' content={title} />
          </Helmet>
          <header className='o-header'>
            <SearchForm initialKeyword={keyword} initialRating={rating} />
          </header>
          <div className='App-wrapper'>
            <h3 className='App-title'>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            <div id='visor' ref={externalRef}></div>
          </div>
        </>
      )}
    </>
  );
};

export default SearchResult;
