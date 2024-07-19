import './Expe.css';
import ExpeCard from './ExpeCard/ExpeCard';
import c from '../../assets/c.png';
import js from '../../assets/javascript.png';
import html from '../../assets/html.png';

function Expe(){
    const statements = [
        "1.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam? ",
        "2.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam? ",
        "3.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam? ",
        "4.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam? ",
        "5.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, nemo nihil ut repellendus ipsa dignissimos perferendis fuga non vero neque nisi deserunt dolore, sunt asperiores voluptatibus delectus assumenda. Quibusdam? ",
    ];


    const iconImages = [js, c, html];
    return (
        <div className='expe_container'>
            <p className='expe_title'>Experience</p>
            <div className='expe_card_container'>
                <ExpeCard
                companyName = "ABC Pvt Ltd"
                designation = 'SDE 2'
                statements={statements}
                iconImages={iconImages}
                />
                <ExpeCard
                companyName = "XYZ Pvt Ltd"
                designation = 'SDE 1'
                statements={statements}
                iconImages={iconImages}
                />
                <ExpeCard
                companyName = "hgf Pvt Ltd"
                designation = 'SDE 3'
                statements={statements}
                iconImages={iconImages}
                />
            </div>
           
        </div>
    )
}
export default Expe;