import { BrowserRouter } from 'react-router';
import { Menus } from './features/home/components/Menus';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {

  return (
    <>
      <BrowserRouter>
      <Menus />
        <div className='container mb-5'>
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
