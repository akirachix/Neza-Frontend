'use client'
import Image from 'next/image'
import SideBar from './components/Sidebar'
import Dashboard from './dashboard/page'
import Signup from './signup/page'
export default function Home() {
  return (
    <main>

    <div>
     <Signup/>
    </div>
    </main>
  )
}
