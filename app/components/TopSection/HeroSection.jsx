import React from 'react'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="text">
                <h1>
                    Hi, I am
                    <div className="red">
                        Judah Oyedele.
                    </div>
                </h1>
                <p>A <span className='red'>frontend web developer</span> based in Nigeria. 
                    <br /> I make <span className='red'>responsive</span>, user-friendly and <span className='red'>interactive</span> websites.</p>
            </div>
        </div>
    )
}

export default HeroSection