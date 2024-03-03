import React from 'react';
import '../index.css';
import { Navbar } from '../components/Navbar';
import Saajha from '../components/Saajha';

function Home (){

    return (
        <>
        <Navbar />
        {/* Version 2 */}
        <Saajha/>
        

        
        </>
    );
}
export default Home;