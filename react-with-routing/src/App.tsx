import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function App() {
  console.log('location', window.location)
  return (
    <>

      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><a href="/projects">Projects with a</a></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/projects">
              <div>
                Project route
              </div>
            </Route>
            <Route path="/about">
              <div>
                About route
              </div>
            </Route>
            <Route path="/">
              <div>
                Default route
              </div>
            </Route>
          </Switch>

        </main>
        <footer>
          This stays for any route
      </footer>

      </BrowserRouter>
    </>
  );
}

export default App;
