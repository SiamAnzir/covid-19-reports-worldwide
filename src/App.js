import React,{lazy,Suspense,useState,useContext} from "react";
import './App.css';
import {HeaderComponent} from "./components/Header";
import {Loading} from "./components/Skeleton";
import {SelectCountry} from "./components/SelectCountry";
import {LineChart} from "./components/LineChart";
import {ThemeContext} from "./context/ThemeContext";

const Cards = lazy(() => import('./components/Cards'));

const App = () => {
  const theme = useContext(ThemeContext);
  const [themeState,setThemeState] = useState(theme.light);

  return (
    <section style={{
        backgroundColor: themeState.background,
        color: themeState.foreground
    }}>
        <HeaderComponent theme={theme} themeState={themeState} setThemeState={setThemeState}/>
        <div className="app-container">
            <SelectCountry themeState={themeState}/>
            <Suspense fallback={<Loading/>}>
                <Cards themeState={themeState}/>
            </Suspense>
            <LineChart themeState={themeState}/>
        </div>
    </section>
  );
}

export default App;
