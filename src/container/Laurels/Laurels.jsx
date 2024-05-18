import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import PropTypes from "prop-types"
import './Laurels.css';

const AwardCard = ({award: {imgUrl, title, subtitle}}) =>{
  return(
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="award" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color: "#DCCA67"}} title={title}></p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </div>
  )
}

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & recognition'/>
      <h1 className='headtext__cormorant'>Our Laurels</h1>

      <div className='app__laurels_awards'>
        {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
      </div>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;

AwardCard.propTypes = {
  award: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};