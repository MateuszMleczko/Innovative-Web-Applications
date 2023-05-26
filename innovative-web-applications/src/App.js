import './App.css';

import Header from './components/Header';
import OurFeaturesPage from './pages/OurFeaturesPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <OurFeaturesPage></OurFeaturesPage>
        <AboutUsPage></AboutUsPage>
    </div>
  );
}

export default App;
