import React from 'react'
import '../assets/css/main.css'
import photoProfile from '../assets/images/profile.png'

import instagramLogo from '../assets/images/instagram.svg'
import twitterLogo from '../assets/images/twitter.svg'
import youtubeLogo from '../assets/images/youtube.svg'
import twitchLogo from '../assets/images/twitch.svg'
import facebookLogo from '../assets/images/facebook.svg'

const profileName = 'Profile Name'
const pageTitle = profileName + ' | Social Media Links'

const githubLink = 'https://github.com/mribeirogabriel/opentree'

const linkList = {
    'Instagram': ['https://instagram.com', instagramLogo],
    'Twitter': ['https://twitter.com', twitterLogo],
    'Youtube': ['https://youtube.com', youtubeLogo],
    'Twitch': ['https://twitch.com', twitchLogo],
    'Facebook':['https://facebook.com', facebookLogo]
}
const links = []
const logos = []
function loadLinks(){
    for (const socialMedia in linkList) {
        const mediaLink = linkList[socialMedia][0]
        const logoLink = linkList[socialMedia][1]
        links.push(<div key={socialMedia} id='link'><a href={mediaLink} target='_blank' rel="noopener noreferrer">{socialMedia}</a></div>)
        logos.push(<a key={mediaLink} href={mediaLink} target='_blank' rel="noopener noreferrer"><img src={logoLink} alt={socialMedia}></img></a>)
    }
}
loadLinks()
function Main(){
    return(
        <>
        <title>{pageTitle}</title>
        <div id='main-container'>
            <div id='main-photo'>
                <img src={photoProfile} alt=''></img>
                <h3>{profileName}</h3>
            </div>
            <div id='main-links'>
                {links}
            </div>
            <div id='main-media'>
                {logos}
            </div>
            <div id='main-footer'>
                <span>OpenTree </span><a href={githubLink} target='_blank' rel="noopener noreferrer">GitHub</a> {pageTitle}
            </div>
        </div>
        </>
    )
}

export default Main