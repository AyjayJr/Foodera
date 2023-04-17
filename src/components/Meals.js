import { useState } from 'react';
import meal1 from '../assets/meal01.jpg';
import meal2 from '../assets/meal02.jpg';
import meal3 from '../assets/meal03.jpg';

export default function Meals() {
    return(
        <div className='meals'>
            <div className='container'>
                <h2>Explore our foods</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
            <div className='meals-items'>
                <img src={meal1} alt='meal1'/>
                <img src={meal2} alt='meal2'/>
                <img src={meal3} alt='meal3'/>
            </div>
        </div>
    );
}