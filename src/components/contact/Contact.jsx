import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useContext, useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../Context'
// import { Link } from 'react-router-dom'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_8nifixh',
        'template_6hvj88o',
        formRef.current,
        'user_Wb6SlQHvG8Z6a1qkndl9j'
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's discuss your project</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <a href='tel:+2348187273154'>
                <img src={Phone} alt='phone icon' className='c-icon' />
                (+234) 8187 273154
              </a>
            </div>
            <div className='c-info-item'>
              <a href='mailto:phantmoney2011@gmail.com'>
                <img className='c-icon' src={Email} alt='' />
                phantmoney2011@gmail.com
              </a>
            </div>
            <div className='c-info-item'>
              <img className='c-icon' src={Address} alt='' />
              112 Isiba Oluwo Street, Egbeda, Lagos Nigeria
            </div>
            <div className='c-info-item'>
              <a
                class='cv'
                tabindex='0'
                download
                href='/assets/ISMAIL_JAMIU_SE.docx'
              >
                Download my CV
              </a>
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              type='text'
              placeholder='Name'
              name='user_name'
              required
            />
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              type='text'
              placeholder='Subject'
              name='user_subject'
              required
            />
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              type='text'
              placeholder='Email'
              name='user_email'
              required
            />
            <textarea
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              placeholder='Message'
              name='message'
              rows='5'
              required
            ></textarea>
            <button>Submit</button>
            {done && 'Thank you...'}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
