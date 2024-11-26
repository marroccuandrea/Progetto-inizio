import Examples from "./components/Examples.jsx";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";

function App() {
  return (
    // L'elemento div serve per raggruppare i frammenti dell'output, la funzione infatti può renderizzare il tutto solo se incluso in un elemento genitore, un semplice div, che può essere sostiuito da <> </> oppure <Fragment> </Fragment>.
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
