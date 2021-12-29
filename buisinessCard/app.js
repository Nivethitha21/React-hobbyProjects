import React from 'react';
import Info from './components/info';
// import ContextBody from './components/contextBody';
import About from './components/about';
import Interests from './components/interests';
import Footer from './components/footer';
export default function App()
{
    return(
        <div>
        <Info/>
         <About/>
         <Interests/>
         <Footer/>
        </div>
    )
}