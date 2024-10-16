
import banner from './assets/fachry-zella-devandra-bNSdIkCBJOs-unsplash.png'
import Card from './components/Card';

function App() {
  return (
    <div>
      <header>
        <h1>Solid Blog</h1>
      </header>
      <img src={banner}></img>

      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default App;
