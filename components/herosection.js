import React from 'react';
import styles from '../src/styles/Home.module.css'

const HeroSection = () => {
   
    return (
        <section className='container mx-auto px-4 '>
        <div className='md:flex justify-between items-center'>
        <div>
        <div >
            <h1 style={{fontSize:"72px",fontWeight:"700px",}}>Healthy in side <span style={{color:'#8382EB'}}>fresh</span> out side</h1>
            <p style={{width:'492px'}}>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
            
            </div>
            <div style={{marginTop:'40px'}} className='flex justify-between items-center '>
                <button className={styles.getstarted}>Get started <img src="./images/CaretCircleRight.png" alt="" /></button>
                <button className={styles.learnmore}> <img src="./images/Vector.png" alt="" /> Learn more </button>    
            </div>
        </div>
            <div className='w-full' >
                <img  className={`w-full `} src="./images/heroimg.png" alt="" />
            </div>
          
        </div>
        {/* Brands  */}
        <div>
                brands: 
                <div>
                    <img src="./images/Group 3888.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;