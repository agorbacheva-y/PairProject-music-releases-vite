import heart from "../assets/icons/heart.svg";
import play from "../assets/icons/play.svg";
import dots from "../assets/icons/dots.svg";

const Overlay = () => {
  return (
    <div className='overlay'>
      <img src={heart} className="heart"/>
      <img src={play} className="play" />
      <img src={dots} className="dots" />
    </div>
  );
};

export default Overlay;
