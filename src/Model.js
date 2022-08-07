import React from 'react'
import "./Model.css"
import { useHistory } from 'react-router';


function Model() {
    const history = useHistory();
    return (
        <>
            <body>
                <video autoPlay loop muted >
                    {/* <source src="/videos/banner.mp4" type="video/mp4" /> */}
                    <source src="/videos/ID_4560094.mp4" type="video/mp4" />
                </video>
                <ul className="honeycomb">
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src="https://c.tenor.com/nvQcdVvGHo0AAAAC/lamborghini-huracan.gif" />
                        <div onClick={() => history.push("/huracan")} className="honeycomb-cell_title">HURACÁN</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img"
                            src="https://i.pinimg.com/originals/f9/fd/b0/f9fdb0a5f829ce78544deb865f769a10.gif" />
                        <div onClick={() => history.push("/aventodor")}
                            className="honeycomb-cell_title">AVENTADOR</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img"
                            src="https://64.media.tumblr.com/b2974332afd82b1e232e5701182486f4/tumblr_pvscvd3UfR1qms0coo1_500.gifv" />
                        <div onClick={() => history.push("/urus")} className="honeycomb-cell_title">URUS</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img"
                            src="https://thumbs.gfycat.com/FarawayWideeyedAsiansmallclawedotter-size_restricted.gif" />
                        <div onClick={() => history.push("/terzo")} className="honeycomb-cell_title">TERZO MILLENNIO</div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img" src="https://notoriousluxury.files.wordpress.com/2014/09/reventon-3.jpg" />
                        <div className="honeycomb-cell_title">01<small>CONCEPTS</small></div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img"
                            src="https://www.yankodesign.com/images/design_news/2021/01/auto-draft/lamborghini_e_x_8.jpg" />
                        <div className="honeycomb-cell_title">02<small>CONCEPTS</small></div>
                    </li>
                    <li className="honeycomb-cell">
                        <img className="honeycomb-cell_img"
                            src="https://i.pinimg.com/originals/73/79/59/7379597c5ede38eb9c7f9f8783c7f49f.jpg" />
                        <div onClick={() => history.push("/sports")} className="honeycomb-cell_title">SPORTS</div>
                    </li>
                    <li className="honeycomb-cell honeycomb_Hidden">
                    </li>
                </ul>

            </body>

        </>


    )
}

export default Model
