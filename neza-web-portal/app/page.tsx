'use client'
import Image from 'next/image'
import SideBar from './components/Sidebar'
import Dashboard from './dashboard/page'
import Details from './details/page'

export default function Home() {
  return (
    <main>

    <div>
      <Dashboard/>
   
    </div>
    </main>
  )
}
