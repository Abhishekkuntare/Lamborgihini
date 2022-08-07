import React from 'react'
import styled from 'styled-components'

function Contact() {

    return (
        <>
            <Map>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31787727.12138872!2d64.78983852095436!3d18.40589930347758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x16e4271e084a515a!2sLamborghini%20Muscat!5e1!3m2!1sen!2sin!4v1632601144515!5m2!1sen!2sin" width="1500px" height="800px"></iframe>
            </Map>

        </>
    )

}

export default Contact


const Map = styled.div`

 @media all and (max-width:1000px){
    width:450px;
    height:455px;
    overflow-x: scroll;

 @media all and (max-width:447px){
    width:400px;
    height:455px;
    overflow-x: scroll;

 @media all and (max-width:399px){
    width:360px;
    height:455px;
    overflow-x: scroll;

 @media all and (max-width:359px){
    width:330px;
    height:455px;
    overflow-x: scroll;
 }
 @media all and (max-width:329px){
    width:300px;
    height:455px;
    overflow-x: scroll;
 }
`