import './ExpeCard.css';


function ExpeCard({
    companyName,
    designation,
    statements,
    iconImages,
}){
    const icons = iconImages.map((icon, index) => (
        <img key={icon} src={icon} alt={icon} />
      ));
    return (
        <div className='expecard_container'>
            <p className='expecard_title'>{companyName}</p>
            <p className='expecard_subtitle'>Designation:{designation}</p>
            {
                statements.map((items,index)=>(
                    <p key={items} className='expecard_sentance'>
                        {items}

                    </p>
                ))
            }
             <p className="expe_card_techstack">Tech Stack Used</p>
             <dir className="expe_card_icons">{icons}</dir>
        </div>
        
    )
}
export default ExpeCard;