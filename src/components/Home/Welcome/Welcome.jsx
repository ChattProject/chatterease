import '../Welcome/Welcome.scss';
import BgWelcome from '../../../images/welcome/people.svg'

export const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <img className='welcome__bg' src={BgWelcome} alt='people'/>
        <div className="welcome__text">
          Ласкаво просимо!
        </div>
      </div>
    </>
  );
};
