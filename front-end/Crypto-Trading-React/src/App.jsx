import { Button } from './components/ui/button'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Navbar from './pages/Navbar/Navbar'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Activity from './pages/Activity/Activity'
import Wallet from './pages/Wallet/userpaymenthistory'
import Withdrawal from './pages/Withdrawal/Withdrawal'
import PaymentDetails from './pages/Payment Details/PaymentDetails'
import StockDetails from './pages/Stock Details/StockDetails'
import WatchList from './pages/WatchList/WatchList'
import Profile from './pages/Profile/Profile'
import Search from './pages/Search/Search'
import NotFound from './pages/Not Found/NotFound'
import Auth from './pages/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from './State/Auth/Action'

function App() {
  
  const {auth} = useSelector(store=>store)
  const dispatch = useDispatch()

  useEffect( ()=> {
    dispatch (getUser(auth.jwt || localStorage.getItem("jwt")))
  },[auth.jwt])


  return (
    <>

      
      {auth.user ? <div>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/portfolio" element = { <Portfolio/>  } />
          <Route path = "/activity" element = {  <Activity /> } />
          <Route path = "/wallet" element = { <Wallet /> } />
          <Route path = "/withdrawal" element = { <Withdrawal /> } />
          <Route path = "/payment-details" element = { <PaymentDetails/> } />
          <Route path = "/market/:id" element = { <StockDetails/> } />
          <Route path = "/watchlist" element = { <WatchList /> } />
          <Route path = "/Profile" element = { <Profile/> } />
          <Route path = "/search" element = { <Search/> } />
          <Route path = "*" element = { <NotFound/> } />
        </Routes>
      </div> : 
      <Auth />}
    </>
  )
}

export default App
