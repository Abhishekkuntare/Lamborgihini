import React from 'react'
import "./Huracan.css";
import Roll from 'react-reveal/Roll';

function Huracan() {
    return (
        <div className="huracan">

            <video autoPlay loop muted controls >
                <source src="/videos/huracan2.mp4" type="video/mp4" />
            </video>

            <Roll top cascade>
                <h3 className="huracan__title">MODELS</h3>
            </Roll>


            <img className="width" src="https://logowiki.net/wp-content/uploads/imgp/Lamborghini-Huracan-Spyder-Logo-1-8870.jpg" alt="" />



            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/hero-banner/huracan/11_18_sto_lancio/huracan_sto_family_01.jpg" alt="" />


            <Roll top cascade>
                <h1>HURACÁN</h1>
            </Roll>

                <p className="huracan__des">Discover all the new models of this exclusive car family, created to shape to your deepest emotions. Combining the highest expression of Lamborghini’s power with the exclusive refinement of Italian handicraft, this series embodies authentic design and state-of-the-art mechanical technology. The Lamborghini Huracán is the perfect fusion of technology and design. With its crisp, streamlined lines, designed to cut through the air and tame the road, you’ll get a thrill just by looking at it. The only thing better than taking in this beauty from a distance is actually touching it. The finest Italian craftsmanship lavished on finishes of unprecedented prestige and quality.</p>

            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/images-s/10_10/top_2.jpg" alt="" />

            <Roll top cascade>
                <h1>DESIGN</h1>
            </Roll>

                <p className="huracan__des">
                    Sculptured and sensual, the Huracán’s design is based on the spiky hexagonal forms of the carbon atom, while the seamless roof profile is an unmistakable mark of the Lamborghini DNA. The Huracán is unique even in the dark, thanks to the alluringly “technological” light of its full-LED lighting system. Choose your favourite Lamborghini Huracán and discover its technical specifications.</p>
            <img className="huracan__inner" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/images-s/10_10/left_2.jpg" alt="" />

            <Roll top cascade>
                <h1>CHOOSE YOUR HURACÁN</h1>
            </Roll>

            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/images-s/10_10/right_2.jpg" alt="" />



            <video autoPlay loop muted controls >
                <source src="/videos/huracan3.mp4" type="video/mp4" />
            </video>

        </div>
    )
}

export default Huracan
