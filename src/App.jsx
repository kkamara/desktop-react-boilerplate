import { HashRouter } from "react-router-dom"
import Routes from "./Routes"

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes/>
      </div>
    </HashRouter>
  )
}

export default App
