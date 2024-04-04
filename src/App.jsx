import Page from "./components/Page";
import { FavoriteContextProvider, LocationContextProvider, WeatherContextProvider } from "./provider";

export default function App() {
  return (
    <LocationContextProvider>
      <WeatherContextProvider>
        <FavoriteContextProvider>
          <Page />
        </FavoriteContextProvider>
      </WeatherContextProvider>
    </LocationContextProvider>
  )
}