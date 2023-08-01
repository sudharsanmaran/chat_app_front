import { Provider } from "react-redux";
import "./App.css";
import Home from "./components/Home/Home";
import { store } from "./redux-store/store";

function App() {
  return (
    <div className="outer-container">
      <div className="container">
      <Provider store={store}>
        <Home />
      </Provider>
      </div>
    </div>
  );
}

export default App;
