import React from 'react'
import "./Huracan.css"
import Rotate from 'react-reveal/Rotate';

export const Urus = () => {
    return (
        <div className="huracan">

            <video autoPlay loop muted controls >
                <source src="/videos/Urus3.mp4" type="video/mp4" />
            </video>
            <Rotate bottom right cascade>
                <h3 className="huracan__title">MODELS</h3>
            </Rotate>
            <img className="width" src="https://qph.fs.quoracdn.net/main-qimg-948becdd216c3bc7f877345d7ebcf32b" alt="" />

            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/09_26_graphite_lancio/09_26_slide_famiglia_graphite_01.jpg" alt="" />


            <Rotate bottom right cascade>
                <h1>URUS</h1>
            </Rotate>

                <p className="huracan__des">Lamborghini Urus is the first Super Sport Utility Vehicle in the world to merge the soul of a super sports car with the functionality of an SUV. Powered by a 4.0-liter twin-turbo V8 engine producing 650 CV and 850 Nm of torque, Urus accelerates from 0 to 62 mph in 3.6 seconds and reaches a top speed of 190 mph. The design, performance, driving dynamics and driving emotion flow effortlessly into this visionary approach to Lamborghini DNA.</p>

            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2021/09_21/s_gateway_urus_02.jpg" alt="" />

            <Rotate bottom right cascade>
                <h1>DESIGN</h1>
            </Rotate>

                <p className="huracan__des">
                    A declaration of freedom, Urus enables you to discover any terrain, from track to sand, ice, gravel or rocks. It is the absolute all-round super sports car and more. It allows you to explore new paths and new ways to express yourself—to accept challenges confidently and to live life to the fullest. You are not afraid to go far: this is what you aspire to. Unlock any road, unlock your personality.</p>

            <img className="huracan__inner" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/s/s_gateway_urus_03.jpg" alt="" />

            <Rotate bottom right cascade>
                <h1>CHOOSE YOUR URUS</h1>
            </Rotate>
            <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2021/09_21/s_gateway_urus_04.jpg" alt="" />



            <video autoPlay loop muted controls >
                <source src="/videos/Urus2.mp4" type="video/mp4" />
            </video>

        </div>
    )
}
