import React from 'react'
import "./Huracan.css"
import LightSpeed from 'react-reveal/LightSpeed';

function Terzo() {
    return (
        <div className="huracan">

            <video autoPlay loop muted controls >
                <source src="/videos/Terzo2.mp4" type="video/mp4" />
            </video>
      
            <img className="width" src="https://i.ytimg.com/vi/1EOIMX5cz40/maxresdefault.jpg" alt="" />

            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2019/10_10_Terzo_Millennio/01_TERZO_MILLENNIO.jpg" alt="" />


            <LightSpeed left cascade>
                <h1>TERZO MILLENNIO</h1>
            </LightSpeed>

                <p className="huracan__des">Automobili Lamborghini looks to the future with a visionary approach, carrying our core values to extremes. Dictating the requirements of the third millennium, the Terzo Millennio combines energy efficiency and innovative materials to forge a path in the electric super sports car segment, guaranteeing the purest driving experience.</p>
            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2019/10_10_Terzo_Millennio/COVER_TERZO_MILLENNIO.jpg" alt="" />

            <LightSpeed left cascade>
                <h1>DESIGN</h1>
            </LightSpeed>

                <p className="huracan__des">
                    The design objectives include a reduction in weight and an increase in the availability of electrical energy through the use of composite structural materials for storing electricity, such as a rechargeable battery. The goal is to perfect nanomaterial technology, distributing nanocharges into the CFK panels that comprise the vehicle’s body and components, which will therefore act as electrical storage devices</p>

            <img className="huracan__inner" src="https://cdn.wallpapersafari.com/63/38/ISH4DU.jpg" alt="" />

            <LightSpeed left cascade>
                <h1>CHOOSE YOUR TERZO MILLENNIO</h1>
            </LightSpeed>

            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/terzo-millennio/s/Lamborghini-Terzo-Millennio-s-3.jpg" alt="" />



            <video autoPlay loop muted controls >
                <source src="/videos/Terzo3.mp4" type="video/mp4" />
            </video>

        </div>
    )
}

export default Terzo
