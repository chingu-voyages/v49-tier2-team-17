import "./App.css";
import { Form } from "./Form/Form";
import { FormResults } from "./Form-Results/FormResults"
import { ColorResultsSquares } from "./ColorResultsSquares/ColorResultsSquares";


function App() {
  return (
    <div className="App">
      <Form />
      <FormResults />
      <ColorResultsSquares />
    </div>
  );
}

export default App;
