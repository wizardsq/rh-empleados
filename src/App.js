import { Rutas } from "./routes/Rutas";
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </div>
  );
}

export default App;
