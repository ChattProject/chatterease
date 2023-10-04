import rules from '../../json/rules.json';

import './Rules.scss';

export const Rules = ({}) => {

  return (
    <>
    <div className='rules'>
      
      <div className='rules__title'>Правила користування  Chatter easy</div>
      <ul className='rules__list'>
        {rules.map(rule => (
          <li className='rules__item' key={rule.id}>
            {rule.rule}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}