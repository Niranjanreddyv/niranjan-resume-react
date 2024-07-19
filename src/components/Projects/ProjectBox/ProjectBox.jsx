import './ProjectBox.css';


function ProjectBox(
    {
    image,title,sentances,link
    }
){
    return(
        <div className='projectbox_container'>
            <div className='project_box_image_container'>
                <img src={image} alt={title} />

            </div>
            <div className='projectbox_description_container'>
                <div className='projectbax_title'>{title}</div>
                <div className='projectbox_sentances_container'>
                    {
                        sentances.map((sentance,index)=>(
                            <p key={sentance}>{sentance}</p>
                        ))
                    }
                </div>
                <p className='projectbox_link'>
                    <span>Link</span>
                    <a href={link} target='_blank'>
                        {link}
                    </a>
                </p>

            </div>
        </div>
    )
}



export default ProjectBox;