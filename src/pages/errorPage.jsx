import SearchForm from '../components/SearchForm';
import { Helmet } from 'react-helmet';
import '../styles/ErrorPage.css';
import { useLocation } from 'wouter';

const gifsErrors = [
  'd2jjuAZzDSVLZ5kI',
  'Bp3dFfoqpCKFyXuSzP',
  'hv5AEBpH3ZyNoRnABG',
  'hLwSzlKN8Fi6I',
];

const ErrorPage = () => {
  const randomImage = () => {
    return `https://media.giphy.com/media/${
      gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]
    }/giphy.gif`;
  };
  const [_, pushLocation] = useLocation();

  const handleClick = () => {
    pushLocation('/');
  };

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header className='o-header'>
        <SearchForm />
      </header>
      <div className='App-wrapper'>
        <div className='pageErrorStyles'>
          <span className='codeErrorStyles'>404</span>
          <span className='msgErrorStyles'>
            Sometimes gettings lost isn't that bad
          </span>
          <img
            className='gifErrorStyles'
            src={randomImage()}
            alt='alt-page-404'
          />
          <button onClick={handleClick}>Go back home</button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
