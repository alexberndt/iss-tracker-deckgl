import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <div className="content">
        <Editor />
      </div> */}
      <Footer title="ISS Tracker" />
    </div>
  );
};

export default App;
