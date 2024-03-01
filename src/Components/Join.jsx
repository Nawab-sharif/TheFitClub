import  React,  {useRef} from 'react';
// import emailjs from '@emailjs/browser';

const Join = () => {

    // const form = useRef();
  return (
    <div className='join' id='join-us'>
      <div className="left-join">
      <hr />
        <div>
            <span className='stroke-text'>READY TO  </span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY </span>
            <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className="right-join">
        <form className="email-container">
            <input type="email" name='user_email' placeholder='Enter Your E-mail..' />
            <button className='btn btn-join'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
