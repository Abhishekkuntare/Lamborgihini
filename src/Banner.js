import React from 'react'
import { useHistory } from 'react-router';
import "./Banner.css";
import Footer from './Footer';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';


const Banner = () => {
    const history = useHistory();
    return (
        <header className="banner">
            <video autoPlay loop muted >
                <source src="/videos/banner.mp4" type="video/mp4" />
                {/* <source src="/videos/ID_4560094.mp4" type="video/mp4" /> */}
            </video>

            <div className="banner__contents">
                <Zoom left cascade>
                    <h1 className="banner__title">AVENTADOR LP 780-4 ULTIMAE</h1>

                    <h1 className="banner__title__two">FUTURE IS OUR LEGACY</h1>
                </Zoom>

                <Zoom left cascade>
                    <h3 onClick={() => history.push("/model")}><i class="fas fa-chevron-right"></i></h3>
                </Zoom>

                {/* aventador */}
                <Zoom left cascade>
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/aventador/ultimae/ar_ultimae.png" alt="" />
                </Zoom>




                {/* huracan */}

                <Zoom left cascade>
                    <h1 className="model">MODEL</h1>
                </Zoom>


                <Zoom left cascade>
                    <img className="width" src="https://logowiki.net/wp-content/uploads/imgp/Lamborghini-Huracan-Spyder-Logo-1-8870.jpg" alt="" />
                </Zoom>

                <Zoom left cascade>
                    <h1>BASED ON A TRUE STORY</h1>
                </Zoom>

                <Zoom left cascade>

                    <h3 onClick={() => history.push("/model")} ><i class="fas fa-chevron-right"></i></h3>
                </Zoom>


                <Zoom left cascade>
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/Configurator_Model_choose/2020_02_25/Homepage%20CC%20HURACAN_EVO_1920_706.png" alt="" />
                </Zoom>



                {/* urus */}

                <Zoom left cascade>
                    <h1 className="model">MODEL</h1>
                </Zoom>

                <Zoom left cascade>
                    <img className="width" src="https://qph.fs.quoracdn.net/main-qimg-948becdd216c3bc7f877345d7ebcf32b" alt="" />
                </Zoom>

                <Zoom left cascade>
                    <h1>CONFIGURATOR</h1>
                </Zoom>

                <Zoom left cascade>
                    <h3 onClick={() => history.push("/model")} ><i class="fas fa-chevron-right"></i></h3>
                </Zoom>


                <Zoom left cascade>
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/Configurator_Model_choose/2020_02_25/Homepage%20CC%20URUS_1920_706.png" alt="" />
                </Zoom>



                {/* aventador */}


                <Zoom left cascade>
                    <h1 className="model">MODEL</h1>
                </Zoom>

                <Zoom left cascade>
                    <img className="width" src="https://logodix.com/logo/1675374.jpg" alt="" />
                </Zoom>

                <Zoom left cascade>
                    <h1>CONFIGURATOR</h1>
                </Zoom>

                <Zoom left cascade>

                    <h3 onClick={() => history.push("/model")} ><i class="fas fa-chevron-right"></i></h3>
                </Zoom>



                <Zoom left cascade>
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/Homepage%20CC%20AVANZAMENTO_ultimae_1920_706.jpg" alt="" />
                </Zoom>


                {/* 4th */}
                <Zoom left cascade>
                    <h1 className="model"> DEALER LOCATOR</h1>
                    <h1>FIND YOUR COUNTRY DEALER</h1>
                </Zoom>

                <Zoom left cascade>

                    <h3 onClick={() => history.push("/model")} ><i class="fas fa-chevron-right"></i></h3>
                </Zoom>


                <img className="four" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/banner/533702.jpg" alt="" />

                {/* 5th */}
                <Zoom left cascade>
                    <h1 className="model"> NEWS</h1>
                    <h1 >LAMBORGHINI WORLD</h1>
                </Zoom>

                <Zoom left cascade>

                    <h3 onClick={() => history.push("/model")}  ><i class="fas fa-chevron-right"></i></h3>
                </Zoom>

                <img width="100%" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2021/09_21_cofango/cofango_cover.jpg" alt="" />

                <Zoom left cascade>
                    <p className="news">2021</p>
                    <button className="news_one" >HURACÁN</button>
                    <p className="news_two">HURACÁN STO: THE “COFANGO” </p>
                    <h6 className="read_more">READ MORE</h6>
                </Zoom>


                <p className="para">One of the elements that make the Huracán STO one of a kind is the signature Lamborghini “cofango.” The term is a hybrid between the Italian words </p>

                {/* 6th */}
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2021/09_13_seduta_countach/seduta_lamborghini_cover.jpg" alt="" />

                <Zoom left cascade>
                    <p className="news">2021</p>
                    <button className="news_one" >LIMITED SERIES</button>
                    <p className="news_two">GET READY TO LIVE THE PAST WITH LAMBORGHINI</p>
                    <h6 className="read_more">READ MORE</h6>
                </Zoom>



                {/* 7th */}
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/hero-banner/huracan/header_rwd_spy.jpg" alt="" />
                <Zoom left cascade>
                    <p className="news">2021</p>
                    <button className="news_one" >HURACÁN</button>
                    <p className="news_two">MONZA AND MILAN: LAMBORGHINI’S UNSTOPPABLE TRAVEL GUIDE</p>
                    <h6 className="read_more">READ MORE</h6>
                </Zoom>

                <LightSpeed right cascade>
                    <h6 className="see_all">SEE ALL</h6>
                </LightSpeed>

                <Footer />
            </div>
        </header>


    )
}

export default Banner
