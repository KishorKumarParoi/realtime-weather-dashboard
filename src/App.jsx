import Page from "./components/Page";
import WeatherContextProvider from './provider/WeatherProvider';

export default function App() {
  return (
    <WeatherContextProvider>
      <Page />
    </WeatherContextProvider>
  )
}