import { Rutas } from "./routes/Routes";
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
