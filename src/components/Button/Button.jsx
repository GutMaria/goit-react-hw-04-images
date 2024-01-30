import css from './button.module.css'

const Button = ({onClick}) => {
  return (<div className={css.btnWraper}>
    <button type='button' className={css.button} onClick={onClick}>Load more</button>
  </div> )
}

export default Button;
