import Page from "./components/Page";
import FavoriteProvider from "./provider/FavoriteProvider";
import WeatherContextProvider from './provider/WeatherProvider';

export default function App() {
  return (
    <WeatherContextProvider>
      <FavoriteProvider>
        <Page />
      </FavoriteProvider>
    </WeatherContextProvider>
  )
}