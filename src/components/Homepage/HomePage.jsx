import './HomePage.css';
import githubIcon from '../../assets/github.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function HomePage(){
    return (
        <div className='homepage_container'>
            <div className='homepage_left'>
                <p className='homepage_p_h1'>
                    <span className='red'>HI</span> my name is
                </p>
                <p className='homepage_p_h2'>
                        Niranjan 
                </p>
                <p className='homepage_p_h3'>
                    Developer at <span className='red'>Amazon</span>
                </p>
                <p className='homepage_discription'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium minus eveniet, quos velit ullam molestias id sunt dolores minima aliquam.
                </p>
                <div>
                    <a href='#' target='_blank'>
                        <FaGithub className='homepage_logo'/>
                    </a>
                    <a href='#' target='_blank'>
                        <FaLinkedin className='homepage_logo'/>
                    </a>
                </div>
            </div>
            <div className='homepage_right'>
                <img src="data:image/png;base64,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" alt="GIF" />
            </div>
        </div>
    )
}

export default HomePage;