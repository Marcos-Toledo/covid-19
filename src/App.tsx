import { CountryContextProvider } from './context/country';
import { Header } from './components/header/Header';
import { ShowCountry } from './components/show-country/ShowCountry';

import './assets/stylesheets/main.scss';

function App() {

  return (
    <CountryContextProvider>
      <Header />
      <main>
        <div className="container">
          <ShowCountry />
        </div>
      </main>
    </CountryContextProvider>
  );
}

export default App;
