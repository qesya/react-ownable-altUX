import React, {useReducer} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import FavoritePage from './components/Favorite/Favorite';
import {pageReducer}  from './reducers/pageReducer';
import PagesData from './components/pagesData.json';
import {pagesDataType} from './types/pages'
import './App.css';

const initialState: pagesDataType = {
    favoriteListId: [],
    // @ts-ignore
    pages: PagesData.editionMap.pages,
    selectedPage: 5866
}
export const MagazineContext = React.createContext(initialState)

const App: React.FC = () => {
    const [pagesData, setPagesData] = useReducer(pageReducer, initialState)
    return (
      // @ts-ignore
      <MagazineContext.Provider value={{ pagesData, setPagesData }}>
        <Router>
          <div className='page-container'>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={HomePage} />
                <Route
                    exact
                    path="/favorites"
                    component={FavoritePage} />
                <Route
                    exact
                    path="/**"
                    component={NotFound} />
            </Switch>
          </div>
        </Router>
      </MagazineContext.Provider>
  );
}

export default App;
