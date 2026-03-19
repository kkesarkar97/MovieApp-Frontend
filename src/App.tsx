import { BrowserRouter } from 'react-router';
import { Menus } from './features/home/components/Menus';
import AppRoutes from './AppRoutes';
import cinema from './assets/Classic cinema in action.png';
const App: React.FC = () => {
const style = {
  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${cinema})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
        width: '100%'
};
  return (
    <div className="w-full" style={style} >

      <BrowserRouter>
      <Menus />
        <div
  className="container my-12 px-6">
  

  <AppRoutes />
</div>
      </BrowserRouter>
    </div>
  );
};

export default App;
