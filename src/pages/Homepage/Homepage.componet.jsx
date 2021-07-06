import React from 'react';
import './Homepage.styles.scss';
import Directory from '../../componets/directory/directory.componet';
import Header from '../../componets/Header/header.componet';


const HomePage =() =>(
    <div className='Homepage'>
        <Header/>
        <Directory/>
    </div>
)

export default HomePage;