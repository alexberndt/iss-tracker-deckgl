import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Map from './components/Map';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Map />
      </div>
      <Footer title="ISS Tracker" />
    </div>
  );
};

export default App;
