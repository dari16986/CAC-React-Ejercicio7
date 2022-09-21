import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Audio from './components/Audio';
import Video from './components/Video';
import audioMp3 from './efecto-de-sonido-golpe.mp3';
import videoMp4 from './background_video.mp4'
import ListaDeElementos from './components/ListaDeElementos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Clase 7 React</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <hr/>
      <section className="App-section">
        <h3>Boton</h3>
        <Button />
        <h3>Audio</h3>
        <Audio src={audioMp3} /> {/*Agregué el source a travez de una variable porque no puede hacer funcionar la ruta desde el componente.*/}
        <h3>Video</h3>
        <Video src={videoMp4} /> {/*Agregué el source a travez de una variable porque no puede hacer funcionar la ruta desde el componente.*/}
        <h3>Lista De Elementos</h3>
        <ListaDeElementos cantidadElementos = {[1,2,3,4]} />
      </section>
    </div>
  );
}

export default App;
