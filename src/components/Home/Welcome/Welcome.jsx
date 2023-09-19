import '../Welcome/Welcome.scss';
import BgWelcome from '../../../images/welcome/bgAll.jpg'

export const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <img className='welcome__bg' src={BgWelcome} alt='Welcome!'/>
        <div className="welcome__text">
          Ласкаво просимо!
        </div>
      </div>
    </>
  );
};
