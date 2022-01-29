import './about.css'
import Award from '../../img/award.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img
            src='https://media.istockphoto.com/photos/japanese-male-businessman-working-from-home-in-plain-clothes-picture-id1275746020?b=1&k=20&m=1275746020&s=170667a&w=0&h=DDZBhVjGsZ-FFdrTXZHk1WvA_vakmB8oD_s4C0l3BK0='
            alt=''
            className='a-img'
          />
        </div>
      </div>
      <div className='about-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-sub'>
          We love what we do and we do what our clients love & work with great
          clients all over the world to create thoughtful and purposeful
          websites.
        </p>
        <p className='a-desc'>
          Experienced Dynamic 365 BC/NAV Functional Expert with a demonstrated
          history of working in the information technology and services
          industry. Skilled in Web Technologies (HTML, CSS, Javascript, React
          and Node), Microsoft Office, Microsoft PowerPoint, Microsoft Excel
          (Desktop Publishing), Artificial Intelligence (AI), Electronics, Cisco
          IT Essential, CCNA, and Window Administrator. Strong engineering
          professional with a Higher National Diploma focused in Computer
          Engineering from Yaba college of technology and National Diploma from
          D.S. Adegbenro ICT Polytechnic.
        </p>
        <div className='a-award'>
          <img src={Award} alt='' className='a-award-img' />
          <div className='a-award-texts'>
            <h4 className='a-award-title'>International Design Awards 2021</h4>
            <p className='a-award-desc'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
