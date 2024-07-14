import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Hangman } from './hangman';
import { Quiz } from './multiplayer';
// import path from 'path';

const routes = [{ path: '/', Page: Home }, { path: '/singleplayer', Page: Hangman }, { path: '/multiplayer', Page: Quiz }];

function Routing() {
  const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
