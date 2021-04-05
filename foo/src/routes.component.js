import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

const PointBreaker = React.lazy(() => import('./pages/PointBreaker'))
const StrongestAvenger = React.lazy(() => import('./pages/StrongestAvenger'))
const Home = React.lazy(() => import('./pages/Home'))

const Routes = () => (
  <Suspense fallback={<h1>Carregando Vingadores...</h1>}>
    <BrowserRouter basename="foo">
      <Switch>
        <Route exact path="/point-breaker" component={PointBreaker}/>
        <Route exact path="/strongest-avenger" component={StrongestAvenger}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  </Suspense>
)

export default Routes