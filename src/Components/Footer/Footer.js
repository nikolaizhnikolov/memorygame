import './footer.css';
import githubLogo from './github.png';

const Footer = () => {
    return <footer className='footer'>
            <div className='footer__text'>Copyright © 2022 nikolaizhnikolov </div>
            <a href="https://github.com/nikolaizhnikolov">
                <img className='footer__image' src={githubLogo} alt="Github"/>
            </a>
        </footer>
}

export default Footer;