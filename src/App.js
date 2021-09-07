import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/home/Home'

function App() {
  return (
    <BrowserRouter basename="/grand-mark">
      <Switch>
        <Route path={'/'} exact={true} component={Home}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
// basename="/grand-mark"
// "homepage": "http://domotswiri.github.io/grand-mark/",