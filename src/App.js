import { Routes ,Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Auth from './routes/authentication/auth.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/check out/check out.component';

const App = () => {

  return(
    <Routes>
      <Route path='/' element = {<Navigation/>}>
        <Route index element = {<Home/>} />
        <Route path='shop/*' element = {<Shop/>} />
        <Route path='auth' element = {<Auth/>} />
        <Route path='cart' element = {<Home/>} />
        <Route path='checkout' element = {<CheckOut/>} />
        
      </Route>
    </Routes> 
   
  )

}

export default App;