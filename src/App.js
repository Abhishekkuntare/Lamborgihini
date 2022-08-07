import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Model from "./Model";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Huracan from "./cars/Huracan";
import Footer from "./Footer";
import Aventodor from "./cars/Aventodor";
import { Urus } from "./cars/Urus";
import Terzo from "./cars/Terzo";
import LoginScreen from "./LoginScreen";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import ProfileScreen from "./ProfileScreen";
import Sports from "./cars/Sports";
import Customization from "./cars/Customization";
import AllCars from "./cars/AllCars";
import Contact from "./cars/Contact";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Loged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}

        <Route exact path="/model">
          <Nav />
          <Model />
          <Footer />
        </Route>

        <Route exact path="/huracan">
          <Nav />
          <Huracan />
          <Footer />
        </Route>

        <Route exact path="/aventodor">
          <Nav />
          <Aventodor />
          <Footer />
        </Route>

        <Route exact path="/urus">
          <Nav />
          <Urus />
          <Footer />
        </Route>

        <Route exact path="/terzo">
          <Nav />
          <Terzo />
          <Footer />
        </Route>

        <Route exact path="/sports">
          <Nav />
          <Sports
            video="/videos/huracan2.mp4"
            h3="MODELS"

            img1="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/05_27_esport/esports_cover.jpg"
            h1="SPORTS"
            img2="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/05_27_esport/esport_gallery_03.jpg"
            img3="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/05_27_esport/esport_gallery_08.jpg"
            img4="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/05_27_esport/esport_gallery_01.jpg"

            SportsCar="CHOOSE YOUR SPORTS CAR"
          />
          <Footer />
        </Route>

        <Route exact path="/proflieScreen">
          <Nav />
          <ProfileScreen />
          <Footer />
        </Route>

        <Route exact path="/AllCars">
          <Nav />
          <AllCars img1="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2UvY7cNhDHZV_s2I2NJIXbVIcABjyUllppERwCB24CuAhwQRoXl-GXyBX1RVLSnh4kT2HkNdK6SxfkBVylSZmRE4D4_3aGHzPiDPf9x-zRHLIX796eccFXbnh1q4ND7zYUXn_724en72__-PjDwyy7jFmWPaC1D999__7vF_88fvLTX_-7H_2SXY1984AWqIdPXYeNBrKfZ5-TJ3tE_gf3u_xK8vhrkqsi2_Ww7zjvMx92-_GfV1n2nFxP9lBZ9uzZHPyIAbtXMgxj_8U3uc5ZyY0WQvGiFAUqiYYfsT4apWTBuTKHU1XxL7Pss9_Re-hinwOvKjEZBgUrCsj5S1_6Esrjy9MJEGddakAxHC0jhHy0gFpVPhICG8nZdJVEQCf4bAB9M2lyRn280L7YaNwtX8YzIZRhBpzVaU2EiDWdsuG2kapPqj-p7em8rTtbEGgL3RCW3CsQlIa5gNCWdwyEQUYRhReCIUG3fQliWPNIcwmre9q-YWdBYr_rIGVREv4zNiYZyFG4eYdyKyEICizDSEnITZAq1EU3gtLuYJDQNomBMpTFAdQQKEE1Gn5pQKu1Qg_a2SpZQjudBGGeaprrXB8q0KOtLgyMkLTNSIEbqez23-6TzjaC0fORLsy4dAwKjI91y8Ek1B2YJVZNDmZ1dgGzWUrPbNHQpzfdkPgETW84fUwT0iJ3LCVyaOLY5BYstnzLwSpPoayO5bkGazS3DViHjC7Ouu7Yb2DjWmsFro8zM4TEew4uRO6P0KJmLRJCW8_QioV1JbQh5pRxG7GUO9yhIcy2bQ_QbvY45oTluObgUZZtQWiNqMCLlVLxcpwm8mn0zBP6vK_BG7PsCwMWG4KPug4afJoP1oCfu8pS36LquwI6FQ11QmfwNOXQWUX161x7cOQ7b-6efEPqTjP0uFQUZ6A-9zmM2DVjCaPsacAYogk1TDPixCCg4mUgDDWeCfPpjBDkoBXNqbZqcwh7mTUh5E0NwRgqRUQsNSeowgqIIlEmUQ5NA1E7Kng0sWgZRKuoytGJ_mgI-kAvLTrL8QDR65oeYezQLDt0I8nZY0U3H6NfJrLiyEqKleR-errsugz0DCBuMyMrKSyokdPoRc4hBVOqClIce2rbFBeOHaRFT8sB0v2Y6wssos1pbqHraAwsQ5xyBUtaTtsFVpbTgBXFQt--ykD1Wl1fRfLFuaTG20QoVgLVIEnYnOabIiQa3-l-cYHemu7TzW2alRvu3mInhtBY17vr1alkb_JTwa6tdo1NNzmr2TX60eJNCrO-ltjpgDevf_6xeHP3-q64Y-xwjT39eyY39PHmDd77feNXV7TkX1LvpwunBQAA.webp?viewPort=930,350,insert"

            img2="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Uva4dNRDHN7kkJE0ioEhLdYUUKePds59CVygoDVIKpItoUlzGa3vts_Z-2N7dc_dBeIqI16BNR4d4gVQ0lMwGJOv_OzP-mFnP-Lz_mDxafPLi3dszrvjKjK9upTdozY7cym9_-_D0_e0fH394mCSXKUmSB7T24bvv3__94p_HT37663_3o1-Sq2noHtAC8fCpcdhJIPt58jl5kkfkf3B_yK8kj78mucqSQ0_HjvMx8-GwH_95lSTPyfXkCJUkz54t3k7o0b1q_TgNX3wjRFPyEkXN2yqTWSOb9iTq4iRUkbM8L1XeZJjJ5ssk-ex3tBZcGFLIq4rPikHGsgzS_GXFqgqK8mXTAOIiCwnIx1Izgk8nDShFZQPBs4mcnataBDQ8XxSg7WZJziDLC-0LncTDskU4E3zhF8BFNFskBKzplB33nVR8UvlJ9UDn7e6sgaPO5JmwplYBpzTUBbjUuWPAFTKKyC3nDAmyHwrg45YGmotY3dP2HZ2GFodDx7bNCsJ_xs5aBu3EzXJAmI3gOQVu_URJtDvnAwiUmZtASHNSSOi7yEAoyuIEYvSUoJhUfulAiq1CC9LoKmpCPzecsMw1zTkz-ArkpKsLA8Vb2qZajjtp647f5pMuOoCSS0kXpkwsvQBlQ93noCJKB2oNVZeC2oxeQe2aklR7UPTpnRtjPkM3qJw-pvNxbQ-sBebQhalLNWjs8z0FLSyF0jIU5xq0krnuQBtkdHHauHLYQYetlgLMEBamCDEfcjA-5LaEHiXrkeD7eoGer8wV0PuQUsZ9wKI9YE4dYdF9f4J-1-WUEtZyS8FiW_QZoVe8Ass3SsW20zyTT6JlljCkQw1WqbUvwXrMdgQbZO0l2LictAK7uEpT36IYXAZOBEWd4BQ2cwpOC6qfM_3JkO-8m3vyjdE1Cwy4VhRnpD63KUzouqmAyQfla5hCpAHzgjgz8CjKXBLGGs-EpTkj-HaUguZEX_Up-KPMtET6tKvBK0WlCIiFzAgi0xwCj5RJaMeugyANFTyokPUMghZU5WD4UCqCPNmCoHM8QbCypkcYHKr1gOxacg5Y0c2HYNeZrDCxgmLF9jg9Xg5dR3oGEPaFkRUFZtTIcbI8zSF6VYgKYpgGatsY1hwdxFXO6wni_ZTKC6y8T2lupevoFKxjmFMBa1yb_QIbS2nAhnylb99aT_XazFAF8oWloMbbuc82AtUgtrAbme8TIdL4Tg6r8fTW5BBvbuMizHj3Fh0ffafNYK43I6K-SZuMXWtpOh1vUlaza7STxpvoF3ndopMeb17__GP25u71XXbH2OkaB_r3jGYcws0bvLfHxq-uaMm_JLPWLacFAAA.webp?viewPort=860,330,insert"

            img3="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Uza7dNBDH015a2k0RsOiW1RVSpY7zdZIIXaGibpC6QCpi08XV-Cv2iZ3k2E5ybx6Ep6h4FNQdO8QLdMWGJZOCZP1_x2OPZ-IZn_cfs0dLyJ6_e3PGFV_a6eVbFSw6uyN36rvfPjx9__aPjz8-zLK7OcuyB7T34bsf3v_9_J_HT37-63_zoz67msf-AW2QD59aj70Cmn-RfU6W7BHZH9wf8ivJ429Irors0PLwOB8rH4754z-vsuwLMj05QmXZs2dLcDMG9C9FmObxy2_LIsdOVXlRyaJAIWXHKyZViWWHTDV1W-cSOya-yrLPfkfnwMcxh6op-EUzKFhRQF69aFheQ3160XWAuKhaAfLpZBgh5LMBVLJxkRDYTMbeNwIBLa8WDej6iyJjVKc78ou9wmPm6ngmhDosgIvstkSI2NIpO-47qfyk6pOakc7b_dkAR1MoT1hzNwCnNPQGXJnKM-AaGUXkjnOGBDWMNfBpyyOtJWzuyX1Hb0DgeOgkRFET_pvsTDAQM7fLAWk3QuAUWISZkhA7N_cgURV-BqlsqZEw9ImB1JRFCXIKlKCcdXXXg5Jbgw6UNU0yhOHSccJyaWnN2zE0oGbT3DHQXJCbFhx3UuGP3_aTLiaCVsuJLkzbdAoStIvtUIFOSHeg19j0OejNYgK9G0pS71HTp_d-StUF-lFX9DF9SKs4sNZYQR_nPjdgcKj2HIx0FMqoWJ9bMFpVpgdjkdHFGetP4wgmbq2SYMe4ME1I1ViBDbFyJxhQsQEJYWgvMPCV-RqGEHPKeIhYiwO27AmLGYYSht2c5pywnrYcHIp6KAiD5g04vlEqTsyXC9kUOuYIYz624LReB9oRsNgRXFRtUODSUhoNbvGNob5FOfoCvIyaOsFr7C45eCOpft4OpSXbebf3ZJuS7xYYcW0ozkR97nKY0fdzDTOVWgSYfaIBc4g6tHBZEC8MAkoROsLU4pmwdGeEICYlaU0OzZBDOKqtCCHvWwhaU0UiYq1KgiwMh8gTJRTF1PcQlaW6Rx2LgUE0MniIlo8nTVClqwmmQnJ1qqW3GD3q9YDqBRlHbKgAMbqK0844s5piJXGcnu4OXSd6DRD3hdEsSSyon9PseF5BCrqWDaQ4j9S9Ka4VekiruqwlpPs5V3ew8iGntZVupd9hneIll7CmtdvvYGM5DdiQr_TtmwhUts2ODb2yLS419d_OQ7ERqBRJwG5VtQdCovG9Glcb6MmpMd28TYu00-0b9HwKvbGjvd6sTOYm7wp2bZTtTbrJWcuu0c0Gb1JY1LVArwLevPrlp-L17avb4pax8hpH-hNNdhrjzWu8d4fj11e05V-Lnj-orgUAAA.webp?viewPort=860,330,insert"

            img4="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2UvY7cNhDHZV98sRsbSQq3qQ4BDHhIfe7COAQO3ARwEeCCNC4OQ_FzRX2RlHZPD5KnMPIs7tIFeQFXaVJmZAQQ_r-dGQ5nOKL24-fsyRKylx_en3DF1258faeCQ-82FF69-ePTs493f37--XGWXaYsyx7R2scffvr4z8t_r5_--vf_7ifX2dU0mEe0QD5-5no0Csh-kX1NnuwJ-R897PI7yfX3JFd5tmuxZ5z2yKfdvv7rKstekOvpXirLnj9fgp8wYP-6DeM0fPNDLnija8w1U4iy5rUoWVO2uW55oXN-KKVUvGL5t1n2VY_eQx8HDmXTMKM55CznwMtXM5McqvrV8QiIi2IIKMbaloTAJwuoZOMjIbCJAZq-aWmJE-WiAb2ZFTmjqi-KYBTulq_iiRCqsAAu8nimhCXigXbZpJlI1baR2i_aRwsCba4MYeVegqAGtAKhbNkzEBrZcgLhhaDm6D10QwViPPNIsYTNA6VviBu0OOw6tm1eEAbatx031jJoJ-nOhCCookSV9xNI5QqNhM4kBlJTyQLkGChLTrq8GFDy3KAH5WzVd4RuPgrCMh8o1rshNKAm21wYaNFSZd22YiV1X34vxoBWS00T0S7VoQXt46ErQSdUHeg1NoaDPjtqSX8Zhd6iphOafkzlDGbQ5cLAhLS2O9YKSzBxMtyCxa7cGFjpqVurYnU6gtWqtAasQ0bzsa6vhw1sPB-UBDfEhWlCKocaXIilZ9ChYt0DIXSHBTqxsr6CLkROHXcRq3aHKwxhsV1XQLfZeuKEtT5z8NhWXU7otGjAt9M8M_AKPfOEgQ8H8FqvXQU-IL_M4KM6BAU-LYXtwC99YwX0KIe-gV7jcebQu66QZJ0290DWmHo62IBrM-cwYW-mEqa2ogemEHU4wLwgUtmAsg1HwnjAE2E5nhBCOypJMdk1HYdAr7FRhMDNAYLWE0JEHBZOkDm1EkUayKcczTTqmHcMohNDLQmq8LtlS5pN9OqgCT3qdYcybQFxwMbXEKMvBe0YJ1ZtEFO77XrZdR31nrwtjKqkyQteQgq6ovOmOA10B1NcC3-BtKp5LSA9TFxdYBUdp9hqpspoWMc48xOsaT3SfT6jWOmE5zbQjTu7oYkcNhFy-t423bOkYXOq3BQh0fOjGlYXxqFXQ7q9S4t04_177MUYjHWDuzk7mewtP-bsxipnbLrl7MBu0E8Wb1NY1E2LvQp4-_a3X_J392_v83vGihsc6D8uOfrebt_hg98Tv7uiJf8BOYVt_E0FAAA.webp?viewPort=930,380,insert"

            img5="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2UvY7cNhDHZV98sRsbSQq3qQ4BDHior5UWxiFw4CaAiwAXpHFxGIqkyBVJSSSl3dOD5CmMPIu7dEFewFWalBkZAYT_TzPkcIYjUh8_Z0-WkL388P6EK7424-s7GQxasyG38s0fn559vPvz88-Ps-wyZVn2iOY-_vDTx39e_nv99Ne__3c_uc6uJt8_ogni8TPjsJdA9ovsa_JkT8j_6GGX30muvye5KrJdyz3itI982u3rv66y7AW5nu6psuz58yXYCQO6110YJ__ND6IpKy7rYytayQ-qaQTrWs7KAoVEFHgQMkdeld9m2VcOrQUXfQ5VU7Be5VCwIoe8ejUzV0F9eHU8AuIiGQLy8aArQsgnDShFYyMhsIkB9q7paIrh1aIAbT9LckZ5uEhCL3G3bB1PhFCHBXARxzMFLBFbWmUT_UQqt41Uf1EXNXDUhXSENbcDcCpASeBSV44BV8iWE3DLORVH32HwNfDxnEcaS9g8UPiGuEGHftex64qS4GndbtxYx6CbhDkTAqeMAmXhJhDSlAoJQ58YCEUpSxBjoCgxqerSgxTnBi1Io2s3EIb5yAnL3NKYMz40ICfdXBgo3lFm1XV8JTVf3pe-ByWXA3VEmXQIHSgb26EClVAOoNbY9Dmos6GS1JdWqC0q2mHvxlTN0HtVLQz6kNZux1pjBX2c-lyDxqHaGGhhqVotY306glay0g60QUb90cYdvAcdz60UYHxcmCKkyh_AhFjZEgaUbHgghKGdYeArczUMIeZU8RCx7naYsicsehgoYNOHKSesh3MOFrt6KAiD4g3YbppnBlaiZZbgc9-CVWodarAB88sMNso2SLBpKfUAdnGN5uBQeNeAU3icc3BmKAVZp808kDUmRxvzuDZzARO6fqpg6nJ6YApRhRbmBZHSBhRdOBLGFk-E5XhCCN0oBY2JoRlyCPQZG0kIed9CUOpygYjol5wgCiol8uQRojTU06hiMTCIhvuDIMjS7pauqDfRylYRHKp1h-y7EqLHxh4gRltxWjFOrN4gpm7b9bLrOqo9eFsYZUmT5XkFKaia9pvi5OkMpriW9gJplfNaQnqYcnmBlQ85ja39VPcbrGOc8xOsaT3SeT4jX2mH5y7QiTsb39CN2Hgo6L5tyrGkYDOy2iQh0fOj9KsJo3fSp9u7tAgz3r9Hx8fQa-PNzdmIpG_zY8FutDS9Trc5a9kN2knjbQqLvOnQyYC3b3_7pXh3__a-uGesvEFP_7hk6L7dvsMHuwd-d0VT_gMySGWFTQUAAA.webp?viewPort=930,380,insert"

            img6="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Uu47dNhBAZS_82MZGHoDbVIsABnao15WEYBE4cBPARQAHaVwsRiIp8pKSeElKulcfkG9ImQ8w0ucv0qXND7hKkzKjTYDBHHBe5IxIffyUPJl98urDuyMueKun2_fCa7R6w9aKb3774_rj-z8_ff84Sc4uSZJHFPv4w3cf_371z9PnP_71v_nJ78mVG_tHFMAfX-sBewG0fpk8I0vyhOyPftnVz6SeXpO6uk12DXuG3D2_7utnX14lyUsyPd-3SpIXL2ZvHXocbjs_ufGzr-uK15lsEKu8KFleI5N11VUci4bnRVV3WSc6JsvPadev0FoYwpjCds4YlwwylmWQFq8rVmVQHl43DSDOgiFgOx1USvCpU4CCl9oQPHMMsB-qjkJ0W8wS0IR8KwCd60MO6GWg-CAOZ0HoBVJ8sGU4EnzpZ8CI6TkDnHmzUpE5YB0AN9w20vxBiwc9HBW0qDLRE-KRtYQltRxaoYqBQWvblk7aTmsaUmgjVhdKWHkTabXhoKDDcdcKM1VBNz0sHOrICK2ed3C9EnxLO3LEjApxFNkwEmYK53I6yBz45Gkh-FohgtCqjDPBnBpJsNWQEuZTrUEMevQMxMbVEWTbUZbs_tP6Qc96BCnmA41FWjzYnhCargAZETeQS6j6FOSqO_I8DEVu6kEfZSAdJLXc8yFfD9CLse4V9GoP641ilx0LOxKGKcYa-lEW1GbvsY474tIRguszA4pbOpESoTzWoDSysSQMh3EEZbBBighrLc6gx1iQT_tQ2AMYFMwsBG_qE5h2YdS9sRu7EHxIMQMTsKR9TNB5v2M21K2ZlTE5mE0dHEVuy2FNwaKRbQW2XakD27nTiYEVaJkFK-ViKEJjTUWsp0uDhIWuANggai_AxjlXZFx9TXkDhoPIYeBB0uUYJDanFAbFaaqDNjmvYTBzvZVAo-EjBfq2sQxGXKpTBg6H3pXgupEEHM9ICAUJuOVAAu7ckYBHXlaWMOl6JMzNEcF3k_ApIdDt99xU1KoX-pgVBJ9SB15K6cCHJT-1EBDHOYfQxhEhiP1jh940dIBAB-YQtMidIaiCRhdMLGm6wYrKU9KAciHjiJWtCarefdNM1UOwRUuu4Fi5QYgyO1KReN4rLpPcS9GszoTNZ5cdM3MWolkKnUF0fUPZ0dk2LSB6WfIKYnAjXZ24iNOSQ1xtuowQLy6VHSytScm3TOFUOFji0mxnWJkhgRW9oJe1dp7mv4ZQ0A_w0gUSuARGQkASQktC6Ehgo28XA2xaFJshRJJvxbhoT69XjPHufZy5nu7f4dBOvld61Der5lHdpU3GbpTQvYp3KavZDVqn8C76Wdx0OAiPd29--iF7e__mPrtnLL_BkX7LUU9juHuLF7snfnFFIf8CX2I4LwAGAAA.webp?viewPort=930,380,insert"

            img7="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Vz47eNBDA065a2ksr4MAbrJAq7Tj_E6EVKqqEkHpAKuLSw2ocO4k_O44_20m-zXNw4CGq3nkLblx5gZ64cODAZEGy5peZzIzHYzv58Cl5svjkq_dvT7jijZpv3kmv0KgduZHffPz9-Yd3f3z64XGSXFySJI_I9_H77z789dXfT5_99Of_5qffJ1fODo_IQTx-riYcJJD-MvmMLMkTsj_69RC_kHj6nMTVTXJIOCLs8ea3Q3_6z1WSvCTTs2OqJHnxYvHGocfppvOzs59_3dUty4QsOGtQpAUrZJOjLNKyzHpZMMYzrHIsmi9o1o9oDEzBplDEPArJIGNZCmnxqmZVDmX1qm0BcZFVBORzNRYEn7oRUIp6P-CZY4D9uAwp4DDVHQIqXiw9oOappAAd8p1ghrPMAZ0bAmm-nyg6yOoiCYNEShJMGU4EX_qFcM80GSOmF8q8iHajzEvAJgDuuO8kxUmQlA_PE-XjOGZyIMQT44Q1NQI41d0jcDkWEwNuOGekzVsaUuAR63uK20QbSduRknRoDyl8fUboRszGmuDPJwbd3HXswIOHQxVJcVwtGUGojTTPqZrOO4sgEDOaQ6DMJktYKEhIPVCQ6KmmHMTsySbFVqMBqcYydgR9bjnB1FNKWM5ND3JS1tcg3VhfMpAhLH0NPe9olr77TyrK1HfL8SyXitrZG6zMQAhtV0Af-DKm0K-hpo3qN0Vl9g9t7PfxQZ4eZOipO4OY8q2CQdpmGGEYD7dBj-z-wMpOhGmOsYHB9sXCYPDYxIwQ1-7Q1hILGIIbUg2jMFTZKEN5KmBUyGxJmCp7hlFji-QRtkZeQNmwsI4QC3JRPhSmAo2SaSR43XSg-cqoKdrs7J7gz2whFx9SzEAHLGlyHVQ-HFg09UAvo9Y56H2sHAXsa7WlYLArdUbQPa_B8I1WZzp3PjMwEg0zBJvaBozChnIZj5nrCSsdKDBBNl6CiUs-IphlqkcOZvMNhU8oLNU3YajoqE8i9HTiph7bMxlHQXszKZ2LBqbTrmgFk16avQTqpbDk73lrGFhc63MGs4iWUrospQEOp8EV4LqSBjgfet-CWysacF4QydOjKFpHmFVjCUt7QvDdLH1KCLQJXuiauuHppGUlwadDA77vLxfwITJJfmHNzxwCol1SwpLpAIH7JiAh0gKCVIfsQ6bJYdAt9TU8LC0objNPkLmbCGNBGxDUWgp6p2NJ6w1G1j6HYLE2DWFsDmMwBT_gWLlDiKLmGaHP6MKFeDkyr3N_5KImXwi7z-4ZRL0WKoPohpaT5gxPC4i-L0UNMThLtyzSakyAuMrzmkPcTLpaiPcupdO2cp2SyzqHc-FgjWu7X2BjSAM29HLLYeuO27kpWwcGWwgFfbF32lG6pLuSxe4Jkca30q7K0zdB2nj7Li5CzXdvceKzH0Zl1fWmRBxv0zZj16NUwxhvU9awazRuxNvoF3nd4SQ93r7--cfszd3ru-yOsfwaLf0kopptuH2D9-YI_PKKXP4FbAPurI4GAAA.webp?viewPort=930,380,insert"

            img8="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Vva7lNBDHz-6KhW1AQMEbXCGttON8nSRCV2gRDdIWSItoKFbjxI594uQktpOcm-eg4CFW9IiXoKPlBahoKCj4Z0Gy5qexZ-zxZMZ5--fpvcWfPvvh1YVXfmGvL14rb9nZnaVTX_z827O3r3__85vHp9NtOp1Oj2D7-Iev3v712d9PP_juj_-nn353ejKN3SMYtI-f2YE7RdA_Or2PmdN7mH_00yF-hHj6DOLJi9Mh6fAYj5VfDv3pP09Op48w9cFx1On04YeLdxN7Hl40_jqNH3-epee6TfJK1KXO5bmuuS3ySpdZIwtdnLOilUqkrD_Bqb-yczSEMaE81kmjBaUiTSnJn89iKKg4P69rYl6UYGJ5PZsc8MkETbXlbgAvJkGszdIlxN1QNlizMl80cS8TBYc-ZDvgulllxNPUBTh4fYF3UOebAjrFmAuuCBfAF34BHkSPycjJLSVe2nq7AYGrQLwzH7Ldd0j1Tg7YT7JJ1YF4ERJYE6dIIm7NJJXJB0HSSYnLyOuWhIRk5PIBDltbR2g7D4YaHg_Z-nJmagyn5gz4-SKouTaNOPDOYmIboUzSLgnQ2g2al4im8ZM21DKnIQNUOlyABRG2qu_g1GrEhKWrx0aq3Up2pKwpYgP0cy0BVw4JsMyVJjXY0UObTIlkqBAWXZKWzcikm_-kxU66WcYrabWckU7t-Ow6INRNTjrIxSSk43FFvYYSn0tvlhfSOyNkvZt38vJOBo0cde2QbWfq1Fh1hjpzmHW9EQ8HVnEBhmuMFXWjzhdBnecqHohrc2AtOKcuTF3ak2kdzjUqFJecjGWBkjN2OI8jmZ5rhkXYKnUjO4ZFNEDMx4KsD7k7U89K9Az4vtqol6tAanq3iwfAz2KBiQ8Jp9QHLnB4H2zWHVh6ZKJfTN9n1O_mPMFhX89bQo6bok-BXsuSnNxwO9dM8yzIKXbCAeO8Y8ly1cHQczppYEVZkQuq8opcXDLTkluG0jTkNl_NGQ3cjohv4HBWJQ1t0Ki7QXM9Y9K0-FqD7TML5bJb3GDol2ovCLlsLby9rJ2gkddyTunaxnHOaeKhmwqaZI1BU5Ni0OSD9jXNCzOC9kebS-BqqxFY6guTb64KdeObgNrzbV8iDV7Z-Qx7LHQVea1vN_IhCgW7sGazpMA8oqQDL2kfKEhfBQYiIg_KHlKHtIdB19dIaDAtujFYORYboDJVASZH5oNdixb2fSweoDlV-ozCwHqFNnLpYDmaCkkIweXywCSKnUJsS5kCOkXbhXg7Dl2v-tgSSb4Bu0-xZezX3KYUp66W0CYnk5yi10VbUgzTiHqMuJQLFFc1rxnFzSXrSPFhSlBtq-wTmKzXMCctrXGt9xttAp1saWOv0NFbc_ToZscS78UWQo53e4spBu34sOjY3ap8H4CI8aUaV-vxQKgx3r-OS2uvb17xIK--M3a0d5tto7lP6lTcGWU7E-8TUYk7dpPh--gXddfwoDzfv_z-2_TrNy_fpG-EyO54xB8j2usY7r_mB3c4fvoEJv8Cx1zVBpsGAAA.webp?viewPort=930,380,insert"

            img9="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Vz-7cthHH1zbs2BcHTQ5-gx8CBPBQ_1YSgh-KBL4EyKGAi15yMEYiKXJFaSWSknb1HD3kIYzc8xa55Vb0BXzqpYce-pVbYDAfkJwhZ4ZD6eOn0_PFn978_NOFV35rr2_fK2_Z2Z0bp7779fdXH9__8enHp6fTbTqdTk9g-_TnHz7-682_X7z86z__P_1iOz2bxu4JDOTTV3bgThHGX56-wMzpOeaf_HKov0O9eAX17O3p0HR4jMfKb8f4xX-enU5fYurlcdTp9Pr14t3Enoe3rb9O45--yWqd5CqtRFnXSmktVKVVU1d5oWQu9JlbLtIiyb7Cqf9g52gIY0J5zJJWC0pFmlKSfzuLMafi_G1dE_OiBBM317MpAJ9MmljJcjeAF5Mg1mbpEuJuKFtY2iZfYNI3icqBkO2A62Z1Jp6mLsDB6wu8gzrfFNApxlxwRbgAvvALcBc9JiMnt5R4kfV2AwJXgXjnLkLLfYdWn_WA_Ro2qZJAvIgGWBPH1CBuDSiTD4Ia1zRIprluSUioiVze4bfJOmK082Co5fHQ0pczU2s4NWfAzxdB7bVtxYHPFhPbiMHU2CUBpN0w8g2iaf2kDUnmFGdIVknDwIIIpeo7OEmNmDKSV4-NlNxKZlLWFLEF-rluAFcOGbDMlSU12NEnpCZT3gSpEBZdkm7akUm3_9MWO-l2QV20Ws4op3Z8dh0Q6jYnHZrFJKTjkaJeQ4nr0pvlifTOCFnv5rO-fNZBo0adHLLtTJ0aq85QZw6zrjfifmAVF2C4xlhRN-p8EdR5ruKBuLYH1oJz6sLUpT0Z6XCuUaG4FGQsC7ScscN5HMn0XDMswlapG9kxLKIFYj4WZH3I3Zl6VqJnwPdVS32ziiGh3u3iDvhZLDDxIeGU-sAFDu-DzboDS49K9Ivp-4z63ZwnOOzreUvIcVv0KdDrpiTXbMjOtdM8C3KKnXDAOO9YslxhL-fRiC2woq3IBVV5RS4umZHklqE0WNt8BfeB5TikQDij_QcZNPpu0FzPCQ1G4rYG22cWFpfdIoOhX6q9INRS2owG39QuoZHXck7pKuM4FzSVCYQmHroJo6aG0CQTCE06g9Dkg_aYXM8QmhdmhOJZ5vUAXG01Akt9YfLtVaGZfBvQkF72JWrj0X1dCfikq8hrfbuRD1Eo2IU1mxsKzOOSAUvaBwqNrwIDsb1TUBZJBR3SPqHQ9TWqHIxEKwbbjGUPqGwaAJPjOoJdCwn7PhbIPjhVeuw7sF6xNnLpKsBUx1pweXNgEsVOIcqySQGdXhBPvB2Hrld9bInK42GE3ad3QbFfc5Q3Tl3dYDS5Jskpel3IkmKYRjRpRFIuUFzVvGYUN5esI8X7lKAF16ZPYLJew5xPtMa13m-0iQuEtkRAaGOv8Nq39ni_mx1LfNK2EHJ80-9tgNBdJhDacfd41LtV-X4gQv6sxtV6fEPUGB_fx0Xa64efeGiuvjN2tA-bldE8JnUqHoyynYmPiajEA7vJ8GP0i3poeVCeH7__21_Sdx--_5B-ECJ74BE_lWivY3h8x3d3OH79DCb_BVotrZq-BgAA.webp?viewPort=930,380,insert"

            img10="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Vsa7lNBCGz-6KhW1AQMEbXCEh7Tg5yUkidIVANEggIS2ioViNYzvxieOTYzvJuXkOCh5iRUXDW9DR8gJUNBQU_LkgRfNpJv-M7YntvPnz8NYcDh_98PWZF35pLy9f6WDZ2Y2l05_-_NuLN69-__Orp4fDbTocDk-gffrDF2_--ujv5-9898f_4effHJ5NvnsCgXr6wo7caYL_3uFtRA5vIf7kp938CPP8Bcyzl4fd0p7h9ze_7v7zf54dDu8h9M4-1OHw7rtzcBMHHl-24TL59z9uZctlecoKVcosE7lWed2yzNumLJUqq0YKIaU-foBRf2HnaIw-oyI1mdKCcpHnlBWfXIXPqTx90jTEPGvBxPJy6gsgZJMh1qraeiCISRCbfu4y4m6sWiitLGZIBplpJAzxuAGuu-oj8TR1EQnBjMiO-nTTQKcZsejKeAZCGWbgQQwIJs5uqDyrZkXlOXIdiTfeNlj1aPWjHVFPcp8NCkhnIYElw_Ik5m2YpO6LUZB0UmIx8rJmMSOZuHpA3qqaBG9jFGnZ71aF6srU9pz3FRCuZ0HtpW3FjkfFxDbBmaSdc0DZFV6QmE0bJtOTYs7jEdD56IEZSUoPHZKUwZzw6hIQ02qt2JG2fZlaYLg2EnDVmAHztTakR-sDvKmvbjnpGGdTkZGtZzLtf9aikmlnfyGj5xPaaRyfXAfEpi3IRDn3GZm0L9EsscLnMqvFZM1jM83WP9rzo40GPerUeFxP1Glfdz11_S7rhl487FjEGRgvKdXUeVPMgrrAdcqBtLS7t5RcUBenLhuoVw7j9jqW54J6y8KXwHjyV-oHbhiKuNb6RtbHWbRAKiCxIRbuRANrMTAQhnqlQS4CrRncJh6AcBUzJCFmnNMQucTgQ7THbsc8oBPD3A_DkYatP01I2JbTmpHjthxyYDCyIidXrM610_UqyGl2wgE-8zU5yzVqucA59r0LC7YVuajroMml-dgzuXmsekluDTXSR1Ye8xs5nrDhRxUN9t1ouLki2Ct8rdEOR1XTeN4sVjAOc72VhF4qD32QjRPkeamuOV1U8ig5VRkemnjsppImc8JDU4gmNHSdmSEJrIpmBC629sDcnJlCe9HYN6GN6H5QQ4U2BGy0vARC1tUUjLndKMQkNHRxOV4lRWY_Z8CcD5GiDHVkIGHmUdvdmpgPEHRDg4bGxzVFK30eAH3UNdAX6Hy0S6nwbkjlAzynq3CkOLJZ4HmuHJS-r9GEGF0hd0yi3CgmVckcMDmOXUy3fYDlYvaSaPIN2EKOkmlYCptTmjpca4CTWUEpmFJVlOLkcdYSFuUipUVflyOl1WWLp_QwZdhtixwySJZLvGaKlrQ0241WwXho5aDXI63tfkZX6ytcW2uMBe7tDV8UR3WzuthGIOH5TPvFBtwM2qf7V2lW9vL6ax7lJXS99fZutSr191mTi7te265P95moxR27qef7FGZ91_KoA99__v23-ZevP3-dvxbieMcev4pkLz7ef8kPbk_88Bkk_wL8_W0GlAYAAA.webp?viewPort=930,380,insert"

            img11="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Vv47cNhDG1z7YsRsbSYq8wSGAgRv9XUkIDoEDNwEcIICDNC4OQ4mUuKIoLUlJe3qOFHkII1WavEW6tHkBV2lSpMinSwBifpjZb4bkiOR--Hh4MrvDF-_fnnjhGz3evJNOs9EbCyO_-uX35x_e_fHx28eHw2U6HA6PoH38_psPf33x99NnP_z5f_jpd4erybaPIGgeP9cDt5Lgvzx8gsjhCeKPft7NTzBPn8Nc3Rx2S3uG3X_5bfef_nN1OLxE6Nk-1eHw4sXszMSOh5vajZP99EuuuVCqLKOSZXSMyqiqj3mapKpSR8m5zOKyquOj-Ayz_srG0OBtTFlI40ZGlERJQnH26hwNJeXHV1VFzLOMmFiMxy4DXDx1xLIpth0umiJi1c1tTNwORQ2lFtmsiHsRSyT0Pt0A055lSjxNrUeCUwOyvTxeJNBKRsyb3J8Al7sZuI96BAPHF1Sem2pF5dlz6Yk33jbY5sHKBzugnuAukS0QTpEAltg0JLBuxSRklw0RCSMENiPGNfYxicDFPfLWpgrwNkaRmu1uG1ecmeqOk64A3PkUUT3WdbTjQTGxDnAmoecEaPQKzwmspnaT6qhhTjBHwzIZLDAjqZF9i6RGYU0pNaNDTDZrwYak7vJQA_25EoAphhiYz6UiOWjr4E1dcUlIej-rgpSoLZOq_7MalVQ925GUnI9opzJ8NC3gqzoj5cXcxaTCvkW1-AKfS60ai1UPzVRb92BPD9Yr9KhthnQ9Uitt2XbUdrus7bvofscSnYBhDKGk1qpsjqh1XIYECEu9e0vOGbV-auOeusZg3k76_JRRpzmyOTAc7Zm6niuGwq-lvJC2fo5qIGSQaOczc6QeJ7lnwPVlTb1YIrSmN1t0D7hzNEPifMwJ9Z5zTN57nbY75h6d6Oeu71Pqt-44IWFbjmtMhuu8T4BeiYKMWLE7U0_nc0RGsokMYGNbktFcopZxnEwKWHCsyHhZOkkmzGnHZOah6ASZ1ZVIH7ixWN_A_ogDPzRe4dwNiqszgl2DrzXoPm1KGk6bxg6Gfi63nNDLxkLvRGUisrwU54TGJliUnJIYgyYe2imnqc4xaHJeuYrOMzMkjpusmoBRlxaYqxOTq0eJc-Nqj-67pi_QBoeDluSAi9uSnFKXCzkfIgmdX9KzIM9s5xiYk96TF670DASs3Eu9W-WTHoK2r9BQ_7Anr4VNHCDTqQe6DJ33eskb_NaH_B6ekYVLyQ-sFniWC1MCXYkmeG8ysWOK8o18aAqRACrBtfPhsk-wjGoviSZfgM0lKBn6JdMJhamtBLzJiDij4FTeFBT8ZHHXAjZlPIVFnpeUwmrixVK4n2KctkX0MSTL6M9xQ0tYqu1Ca8QYtLKTa0prvd_RVdsCz9bqfYZ3e8MXxVXdtMy2AQgYX0u7aIeXQdpw-y7MjR7v3vIgRtd22urrVTehu42rJLrupG67cBvjbb5mM3V8G9wsr2sepOPb1z9-n7y5e32X3EVRes0WfxVBj9bfvuF7syd-fgXJv-iYDgWUBgAA.webp?viewPort=930,380,insert"

            img12="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2Tz4rcRhDGe3fY2L7YJDn4DYZAYKv1f0QYgmNfDD4YNuTiw1JSd6t71N3SdEszO3qGPIlZ8gZ5h9x8zQuYGHLJMaUQEN-vq_R91QVCj5_ZzRzYyw_vDnjCWzPc3slg0JoFGyt_-O2PZ493nz6_vWbsYWSMXZH3-sNPj3-__Oerpz__-X9785ptRt9dkUFcPzMOOwlUv2BPqMNuqH_16yo5yc0Xkk3OVi3WxHpif6365PcNYy-oerpexdjz53OwIwZ0t20YRv_1d1ld1Hmt0qZQnDdZmddNlQhel1XRcqVSUSteYZt_w9j1R7QWXPQJLDbjOfKLs_RAytMUkvz7imccUIbklADqE40BnEV9bgGX3mlSd9DQoE76A-GUWAdNM5QqQLMgGVr0q2pMdUIIhia0g6dQG0Z6IzBkkRPmtZAmU0jouykHMQTqSaOL6UToj3VHsJVLQDrjQwVy1NVDCqppaZ5qW7fq7BHUtN6tFlzPS_OfamGg00jOLuBu2oEWlkxaxuJQgDau9J4QMy9Bx_POTKBn0dNyvYs5rd3HuUfC3JW9hn45lecULPaqITQ66wThTCNt65eFdDweOViJlluwAdNRgY1yFxwhpm0Bdpoz3YDDWMocnBa0qDN9JkoYxOSPCYwdqolDQFGkDkIbaf0QT9mxgYhYUCo2E6WiimnPIWrReYim8VUP0SpaJo5zdUkgBl2aEmLUed8SbN5QNobsQqlJpQdJeFj957B7oN55qUeE6bKkSwWnIR4TAed2_SKLcnwSsBiZL4cfpT-ZMHgn_bS_m2Zhhvt36JohdNp4sz0bMel9Uqd8q6Xp9LRP-I5v0Y4a91OY5bZFJwPuX_3yPn1z_-o-vec826KnH2Qyg4_7N3ixa_DbDVn-BSVH2ZWKAwAA.webp?viewPort=930,380,insert"

            img13="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2TwYrdNhSGNXOZJtkktF3kDS6Fwhxb9rU9lEtJk00hi8CUbrIYjizZ0rUk-0q271w_Q58kDH2DvEN23fYFQgPddNnjacF8n3T4j3RA-OEzu5oCe_n-7QFnvDb99a0KBq1ZUFj1w--fnj3c_vH550vG7gfG2AVlL9__9PD3y3--evrLn_-XN6_ZZvDtBQXk5TPjsFVA-xfsCVXYFdUvfluRE66-EDY5W7lbO9YV-2vlk48bxl7Q7ul6FWPPn0_BDhjQXdehH_zX3-U7wXlSYF7mRVUi1mldlrzM61zISvC6yoqkyIryG8YuP6C14KJPYbFZkmNy1i19wBPOIc2_xww5oArpnADqOZWkSd6casClc5roDhoEaq4caU6tBCH6ojmAWJACNfqVGrlOScHQCXX_WAsDUWLIYkKa1o0yWYOkrh1zkH2gmjJ696jueKNItnQpKGd8KEENurzn0IiaEk39HyffQzOudzcLeiSKR-pGQasxamgDVmMFWloKaRV3hwK0cYX3pJh5BTqeKjOCnmRHw3Uu5jR2F6cOSVNbdBq6ZS5OHCx2jSAJnbWSdKIjbe2XhTgcjwlYhTaxYAPyoQEbVRUcKfJ6B3acMi3AYSxUAU5LGtSZLpMF9HL0xxSGFpsxgYByxx2EOtL4Ic7ZUUBE3CkOUYzUFZvIuwSilnMD0Qhfeoi2oWHiMJXnFGLQhSmA-vOuJtlcUDyG7EwaG35YSPdr_hSqe6qdlpsBYTwvfClh7uMxlXCq1xdZGpeMEhaj8kX8qPxsAj2o8uP-dpyk6e_eohN9aLXxZnsyctT79IYnW61Mq8d9mlTJFu2gcT-GSW1rdCrg_tWv7_ibu1d3_C5Jsi16-kFG0_u4f4NnuzZ-u6HIv2cJ0V-KAwAA.webp?viewPort=930,380,insert"


            img14="https://configuratormedia.lamborghini.com/renderservice/media/fast/H4sIAAAAAAAAAC2TvY7cNhDHebe42G5sJCn8BosAAW6oj9VqESwCB24CuAhwQRoXhyFFiTyRlJakVnt6hjyGy4PfIO-QLm1ewEiANCkzMtL8f5rRfz5ESU-f2M0U2Ov37x7wjLdmuL1TwaA1Cwqrvvv4-4unuz8-_XjN2GVkjF2R9_r9D0__vP73i-c___l_enNkm9F3V2Rorl8Yh50Cil-xZ5RhN5S_-nWVkuTmb5JNyVbdrRXrFftr1We_bRh7RdHzdRRjL19OwY4Y0N3KMIz-y2-KfS1ltRcVFvuiLnLF81Icml1ViVryos7qg2pQ8a8Yu_6A1oKLPoPFFrxEDjnPc8jKb21mM0AV-FgD6nPWcMCpOcwScOmdJnVRg0Cd9S3hnFEjIYaq9SAWJINEv6rGXGeEYKiDHDwVyTB2CRoMReSEiWyNMkU7EfouZdAMgXLK6J2zhP50EAS7dwUoZ3zYgxr1_pJDKyQZWynjqhN1bdM6u13QI6n4rHpZoNNrvgtYpxp0YynQKu4eKDCu8p4QC69Ax7k2CfTU9LRc72JJa_dx6ulo-qmr6GH75VzNOVjsW0EQuug8YaaWVnqaZeV4OtEdhZZbsAGzyww2qjq0hJjLHdg0FVqAw1ipCpxuaFFn-qKpYGiSP2UwdtgmDgGbXe4gyEjtQzwXJwER0U8lRJGoKrYx73OIn1tEI3ylINqW3HGc9o8ZxKArU0GMuuwlwZaCE0LxSEht_rDiQkcX51BfyD8vh7GF9LjkSw3nIZ6yBma5vpGldTwpWIwqF_298mcTBu-UT8e7NDVmuH-HTgyh08ab7WyapI_ZIedbrUyn0zHjNd-iHTUeU5jUVqJTAY9vfvkpf3v_5j6_57zYoqdfIxn6UI5v8dGuhV9vyPIft8U3LYQDAAA.webp?viewPort=930,380,insert"
          />
          <Footer />
        </Route>

        <Route exact path="/customization">
          <Nav />
          <Customization video="/videos/huracan2.mp4"
            h3="CUSOMIZATION"

            img1="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/ad-personam/2020/s/ad_personam_s_03.jpg"
            h1="AD PERSONAM"
            img2="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/ad-personam/2020/s/ad_personam_s_02.jpg"
            img3="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/ad-personam/2020/gallery/ad_personam_01.jpg"
            img4="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-models/countach/rds_02_0.jpg"
          />
          <Footer />
        </Route>

        <Route exact path="/contact">
          <Nav />
          <Contact />
          <Footer />
        </Route>

        <Route exact path="/loginscreen">
          <LoginScreen />
        </Route>
      </Router>
    </div>
  );
}

export default App;
