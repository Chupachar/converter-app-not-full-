import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './modules/converter/pages/NotFoundPage/NotFoundPage';
import HomePage from './modules/converter/pages/HomePage/HomePage';
import ConverterModule from './modules/converter/ConverterModule';
import ExchangeList from './modules/exchange/conponents/ExchangeList/ExchangeList';
import Navigation from './modules/common/components/Navigation';
import useExchange from './hooks/useExchange';

function App() {

    const { exchange } = useExchange();

  return (
      <Router>
        <div className="App">
            <Navigation />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path={'/converter'}>
                    <ConverterModule exchange={exchange}/>
                </Route>
                <Route path={'/exchange'}>
                    <ExchangeList exchange={exchange}/>
                </Route>
                <Route path="/notfound">
                    <NotFoundPage />
                </Route>
                <Route path="*" exact>
                    <Redirect to="/notfound"/>
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
