import './globals.css'

import {Syne, DM_Sans} from 'next/font/google'

type Props = {
  children: React.ReactNode;
}

const syne = Syne({
  variable: "--font-display"
})
const dmSans = DM_Sans({
  variable: "--font-body"
})
export default function RootLayout({children}:Props){
  return(
    <html lang='en' className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}