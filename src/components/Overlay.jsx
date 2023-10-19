import heart from "../assets/icons/heart.svg";
import play from "../assets/icons/play.svg";

const Overlay = () => {
  return (
    <div className='overlay'>
      <img src={heart} className="heart"/>
      <img src={play} className="play" />
    </div>
  );
};

export default Overlay;
