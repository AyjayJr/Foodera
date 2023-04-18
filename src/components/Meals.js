import { useState } from 'react';
import meal1 from '../assets/meal01.jpg';
import meal2 from '../assets/meal02.jpg';
import meal3 from '../assets/meal03.jpg';

export default function Meals() {
    return(
        <div className='meals-section'>
            <div className='container'>
                <h2>Explore our foods</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
            <div className='meals-items'>
                <div className='meals'>
                    <img src={meal1} alt='meal1'/>
                    <p>Rainbow Vegetable Sandwich</p>
                    <p>Time: 15 - 20 Minutes | Serves: 1</p>
                    <p>$10.50 $11.70</p>
                    <button>Order Now</button>
                </div>
                <div className='meals'>
                    <img src={meal2} alt='meal2'/>
                </div>
                <div className='meals'>
                    <img src={meal3} alt='meal3'/>
                </div>
            </div>
        </div>
    );
}