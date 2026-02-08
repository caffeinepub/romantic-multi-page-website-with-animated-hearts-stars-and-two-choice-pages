import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import YassPage from './pages/YassPage';
import DefinitelyPage from './pages/DefinitelyPage';

type Route = '/' | '/yass' | '/definitely';

function App() {
  const [currentPath, setCurrentPath] = useState<Route>('/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname as Route);
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial path
    const path = window.location.pathname as Route;
    if (path === '/yass' || path === '/definitely') {
      setCurrentPath(path);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: Route) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <>
      {currentPath === '/' && <LandingPage navigate={navigate} />}
      {currentPath === '/yass' && <YassPage navigate={navigate} />}
      {currentPath === '/definitely' && <DefinitelyPage navigate={navigate} />}
    </>
  );
}

export default App;
