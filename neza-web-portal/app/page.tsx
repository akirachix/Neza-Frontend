import Image from 'next/image'
// import Signup from './components/Signup'
import SideBar from './components/Sidebar'
import Signup from './components/Signup'
import Dashboard from './components/dashboard/page'

export default function Home() {
  return (
   <div>
    {/* <Signup/> */}
    <Dashboard/>
   </div>
  )
}
