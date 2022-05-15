import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { AppRouter } from "./router/AppRouter";
import "./css/styles.css";

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  )
}
