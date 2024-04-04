import Page from "./components/Page";
import { FavoriteContextProvider, WeatherContextProvider } from "./provider";

export default function App() {
  return (
    <WeatherContextProvider>
      <FavoriteContextProvider>
        <Page />
      </FavoriteContextProvider>
    </WeatherContextProvider>
  )
}