import React from 'react'



const tempscreen = () =>
{
    return (
        <div className="py-3">
            <OwlCarousel items={3} margin={8} autoplay={true} autoplayTimeout={2000} >
                <div><img className="img" src={'/images/banners/a.jpg'} /></div>
                <div><img className="img" src={'/images/banners/a.jpg'} /></div>
                <div><img className="img" src={'/images/banners/a.jpg'} /></div>
                <div><img className="img" src={'/images/banners/a.jpg'} /></div>
                <div><img className="img" src={'/images/banners/a.jpg'} /></div>
                <div><img className="img" src={'/images/banners/a.jpg'} /></div>
            </OwlCarousel>
        </div>
    )
}

export default tempscreen
