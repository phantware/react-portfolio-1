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
          Front End Engineer having a track record of developing React-based
          front-end web apps. I hold a Higher National Diploma with a
          concentration in computer engineering. Furthermore, I am adept at
          converting figma designs into responsive web sites that work on any
          device. At this point in my career, I am looking forward to working in
          a remote, competitive, and demanding atmosphere.
        </p>
        {/* <div className='a-award'>
          <img src={Award} alt='' className='a-award-img' />
          <div className='a-award-texts'>
            <h4 className='a-award-title'>International Design Awards 2021</h4>
            <p className='a-award-desc'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default About
