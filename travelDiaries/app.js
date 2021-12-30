import React from 'react';
import NavBar from './components/navBar';
import Card from './components/card';
import data from './data';
export default function App(){
   
    const Data = data.map(item =>{
        return <Card key = {item.id} item = {item}/>
    })
    return(
        <div>
        <NavBar/>
        {Data}
        </div>
    )
}