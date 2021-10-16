import { Route, Switch } from 'react-router-dom'

import { GlobalProvider } from './context/GlobalState'

import { Home } from './components/Home'
import { AddUser } from './components/AddUser'
import { EditUser } from './components/EditUser'

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddUser} exact />
          <Route path="/edit/:id" component={EditUser} exact />
        </Switch>
      </div>
    </GlobalProvider>
  )
}

export default App
