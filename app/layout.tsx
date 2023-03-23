'use client'

import './globals.css'
import React, {useState} from "react";
import Link from "next/link";
import logo_image from "../public/logo.png"
import Image from "next/image";
import { usePathname } from 'next/navigation';

const links = [
  {
    text: "Home",
    url: "/"
  },
  {
    text: "Contact",
    url: "/contact"
  },
  {
    text: "About",
    url: "/about"
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarClosing, setSidebarClosing] = useState(false);

  const handleSidebarTrigger = () => {
    if(showSidebar) {
      setSidebarClosing(true)
      setTimeout(() => {
        setShowSidebar(false);
        setSidebarClosing(false);
      }, 200);
    } else {
      setShowSidebar(true);
    }
  }
  return (
    <html lang="en">
      <body className={`relative ${showSidebar ? 'overflow-hidden' : ''}`}>
        <div className={'bg-lightBlue text-white h-8 py-4 flex justify-center items-center'}>
          Welcome to Best American Medical Supplies!
        </div>
        <nav className={'h-[90px] border-b border-b-gray-300 flex justify-center z-50 bg-white top-0'}>
          <div className={'relative w-full grid grid-cols-[fit-content(100%)_auto] sm:grid-cols-[1fr_2fr_1fr] md:grid-cols-[auto_auto_1fr] items-center top-0 font-serif max-w-[120rem] px-4 sm:px-20'}>
            <button onClick={handleSidebarTrigger} className={'md:hidden justify-self-start text-2xl'}>☰</button>
            <Link className={'justify-self-center self-center  '} href={'/'}>
              <Image src={logo_image} height={82} alt={'Best American Medical Supplies Logo'}/>
            </Link>
            <div className={'hidden md:block'}>
              {
                links.map(link =>
                  <Link
                    className={`my-4 px-6 text-xl relative after:transition after:absolute after:w-1/2 after:right-1/2
                      after:translate-x-[50%] after:hover:h-[2px] after:top-[100%] after:left-0 after:hover:bg-black
                      ${pathname === link.url ? 'after:h-[2px] after:bg-black' : 'after:h-[1px] after:bg-gray-500'}`}
                    key={link.text} href={link.url}
                  >
                    {link.text}
                  </Link>
                )
              }
            </div>
            <div className={'hidden sm:block'}/>
          </div>
        </nav>
        {
          showSidebar &&
          <div  onClick={handleSidebarTrigger} className={'relative z-50'}>
            <div className={`absolute top-0 w-screen h-screen ${sidebarClosing ? 'bg-transparent' : 'bg-[rgba(0,0,0,.7)]'}`}>
              <div className={`h-full w-52 top-0 left-0 bg-white p-4 text-2xl transition-all duration-500 ${showSidebar ? 'animate-[fromLeft_500ms]' : ''} ${sidebarClosing ? 'left-[-300px]' : ''} absolute z-20`}>
                {
                  links.map(link =>
                    <div key={link.text} className={'my-4'}>
                      <Link
                        className={`relative after:transition after:absolute after:w-full after:right-1/2
                          after:translate-x-[0%] after:hover:h-[2px] after:top-[100%] after:left-0 after:hover:bg-black
                          ${pathname === link.url ? 'after:h-[2px] after:bg-black' : 'after:h-[1px] after:bg-gray-500'}`}
                            href={link.url}
                      >
                        {link.text}
                      </Link
                    ></div>
                  )
                }
              </div>
            </div>
          </div>
        }
        <main>{children}</main>
        <footer className={' px-4 border-t border-gray-300'}>
          <div className={'grid grid-cols-1 md:grid-cols-3'}>
            <div className={'mt-4 px-4'}>
              <h4 className={'font-serif'}>Quick Links</h4>
              <div className={'flex flex-col justify-center mt-4 pl-4'}>
              {
                links.map(link =>
                  <Link
                    href={link.url}
                    key={link.text}
                    className={'my-2 underline hover:opacity-90'}>{link.text}</Link>)
              }
              </div>
            </div>
            <div className={'mt-4 px-4'}>
              <h4 className={'font-serif'}>Our mission</h4>
              <p className={'mt-4 pl-4'}>
                Best American Medical Supplies is dedicated to providing the highest quality medical equipment at a fair price to improve the quality of life of our customers.
              </p>
            </div>
            <div className={'flex flex-col items-center w-full text-center mt-4 px-4'}>
              <button
                className={'my-4'}
                onClick={() => window.open("https://www.rapidscansecure.com/siteseal/Verify.aspx?code=42,71004FACBB1C2C00DC382F8BFBF54BB637987249", "Verification",  "location=no, toolbar=no, resizable=no, scrollbars=yes, directories=no, status=no,top=100,left=100, width=960, height=526")}>
                <Image width={160} height={69} alt="CompliAssure SiteSeal" src="https://www.rapidscansecure.com/siteseal/Seal.aspx?code=42,71004FACBB1C2C00DC382F8BFBF54BB637987249"/>
              </button>
              <div className={'my-2'}>
                (919) 896-7222</div>
              <div className={'my-2'}>
                1100 Navaho Dr Ste 121, Raleigh, NC 27609
              </div>
              <div className={'my-2'}>
                Monday - Friday: 8:00 AM - 5:00 PM
              </div>
            </div>
          </div>
          <div className={'w-full justify-center flex'}>
            © {new Date().getFullYear()} American Medical Supplies | Website by &nbsp;<a className={'underline text-lightBlue'} href={'https://twinsilverdesign.com'}>Twin Silver Web Design</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
