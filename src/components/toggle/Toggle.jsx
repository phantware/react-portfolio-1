import './toggle.css'
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../Context'

const Toggle = () => {
  const theme = useContext(ThemeContext)
  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' })
  }
  return (
    <div className='t' onClick={handleClick}>
      <img src={Sun} alt='sun icon' className='t-icon' />
      <img src={Moon} alt='moon icon' className='t-icon' />
      <div
        className='t-button'
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  )
}

export default Toggle
