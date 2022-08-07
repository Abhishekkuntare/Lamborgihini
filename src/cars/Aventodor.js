import React from 'react'
import "./Huracan.css"
import Bounce from 'react-reveal/Bounce';
function Aventodor() {
    return (
        <div className="huracan">

            <video autoPlay loop muted controls >
                <source src="/videos/Aventador3.mp4" type="video/mp4" />
            </video>
      
            <img className="width" src="https://logodix.com/logo/1675374.jpg" alt="" />

            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_s_01.jpg" alt="" />


            <Bounce top cascade>
                <h1>AVENTADOR</h1>
            </Bounce>

        
                <p className="huracan__des">DESIGNED TO PUSH BEYOND PERFORMANCE
                    Revolutionary thinking is at the heart of every idea from Automobili Lamborghini. Whether it is aerospace-inspired design or technologies applied to the naturally aspirated V12 engine or carbon-fiber structure, going beyond accepted limits is part of our philosophy. The Aventador advances every concept of performance, immediately establishing itself as the benchmark for the super sports car sector. Giving a glimpse of the future today, it comes from a family of supercars already considered legendary.</p>

            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_s_02.jpg" alt="" />

            <Bounce top cascade>
                <h1>DESIGN</h1>
            </Bounce>

                <p className="huracan__des">
                    Sculptured and sensual, the Huracán’s design is based on the spiky hexagonal forms of the carbon atom, while the seamless roof profile is an unmistakable mark of the Lamborghini DNA. The Huracán is unique even in the dark, thanks to the alluringly “technological” light of its full-LED lighting system. Choose your favourite Lamborghini Huracán and discover its technical specifications.</p>

            <img className="huracan__inner" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/images-s/aventador/CENTER%20LEFT%201920x880.jpg" alt="" />

            <Bounce top cascade>
                <h1>CHOOSE YOUR AVENTADOR</h1>
            </Bounce>

            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_01.jpg" alt="" />



            <video autoPlay loop muted controls >
                <source src="/videos/Aventador2.mp4" type="video/mp4" />
            </video>

        </div>
    )
}

export default Aventodor
