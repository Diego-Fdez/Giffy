import './App.css';
import { Route, Link, Switch } from 'wouter';
import Detail from './pages/detail';
import ErrorPage from './pages/errorPage';
import SearchResults from './pages/searchResults';
import { GifsContextProvider } from './context/GifContext';
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./pages/index'));

function App() {
  return (
    <div className='App'>
      <Suspense fallback={null}>
        <section className='App-content'>
          <Link to='/'>
            <img className='App-logo' alt='Giffy Logo' src='/images/logo.png' />
          </Link>
          <GifsContextProvider>
            <Switch>
              <Route path='/' component={Home} />
              <Route
                path='/search/:keyword/:rating?'
                component={SearchResults}
              />
              <Route path='/gif/:id' component={Detail} />
              <Route component={ErrorPage} path='/:rest*' />
            </Switch>
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}

export default App;
