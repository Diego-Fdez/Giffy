import { useGifs } from '../hooks/useGifs';
import ListOfGifs from '../components/ListOfGifs';
import LazyTrending from '../components/LazyTrending';
import SearchForm from '../components/SearchForm';
import { Helmet } from 'react-helmet';

const Home = () => {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <div className='o-header'>
        <SearchForm />
      </div>
      <div className='App-wrapper'>
        <div className='App-main'>
          <div className='App-results'>
            <h3 className='App-title'>Ultima Búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className='App-Category'>
            <LazyTrending />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
