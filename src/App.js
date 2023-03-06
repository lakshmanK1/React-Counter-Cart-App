import Counter from "./Components/Counter";
import ContextProvider from "./Store/ContextApi";
function App() {
  return (
    <div>
    <ContextProvider>
      <Counter/>
    </ContextProvider>
    </div>
  );
}

export default App;
