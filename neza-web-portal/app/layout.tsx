// import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import Nav from './components/layout'

// const inter = Inter({ subsets: ['latin'] })
// export const metadata: Metadata = {
//   title: 'Tinylife wellness',
//   description: 'Tinylife wellness user dashboard',
// }
// export default function RootLayout({

//   children,
// }: {

//   children: React.ReactNode
// }) {

//   return (
//     <html lang="en">

//       <body className={inter.className}>
//         <div className='flex'>
//         <Nav children={undefined}/>
//         {children}
//         </div>

//       </body>
//     </html>
//   )
// }


import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideBar from './components/Sidebar'
import Details from './details'
// import YourComponent from './StageTracking'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex'>
           {/* <SideBar/> */}
           <Details/>
         
          {/* <YourComponent/> */}
        </div>
      </body>
    </html>
  )
}
