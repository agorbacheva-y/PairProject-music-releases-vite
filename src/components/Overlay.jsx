import heart from "../assets/icons/heart.svg";
import play from "../assets/icons/play.svg";
import dots from "../assets/icons/dots.svg";

const Overlay = () => {
  return (
    <div className='overlay'>
      <button className="heart">
        <img src={heart} />
      </button>
      <button className="play" >
        <img src={play} />
      </button>
      <button className="dots">
        <img src={dots} />
      </button>
    </div>
  );
};

export default Overlay;
