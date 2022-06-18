import "./App.css";
import LandingPage from "./Pages/LandingPage";

function App() {
  // if (!window.ethereum) {
  //   return <h1>Install Metamask</h1>;
  // } else {
  return (
    <div>
      <LandingPage></LandingPage>
    </div>
  );
  // }
}

export default App;
