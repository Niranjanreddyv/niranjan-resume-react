import './TechStack.css';
import githubIcon from '../../assets/github.png';
import TechStackIconContainer from './TechStackIconContainer/TechStackIconContainer';
import c from '../../assets/c.png';
import html from '../../assets/html.png';
import js from '../../assets/javascript.png';
function TechStack(){

    const techstackRowOne = [
        {
            iconName: 'c++',
            iconImage: c,
            iconAltProperty: 'cImage'
        },
        {
            iconName: 'htm',
            iconImage: html,
            iconAltProperty: 'htmlImage'
        },
        {
            iconName: 'javascript',
            iconImage: js,
            iconAltProperty: 'jsImage'
        },
    ];


    return (
        <div className='techstack_container'>
            <p className='techstack_title'>TechStack</p>
            <div className='techstack_iocn_containers'>

                {
                    techstackRowOne.map(function(element,index){
                        return (
                            <TechStackIconContainer 
                            title = {element.iconName}
                            altProperty = {element.iconAltProperty}
                            image = {element.iconImage}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
 export default TechStack;
