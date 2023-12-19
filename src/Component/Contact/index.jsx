import './index.scss'
const Contact = () => {
  return (
    <div className="input-container" id='contact'>
      <h1>Contact Me</h1>
      <p></p>
        <div className="inputs">
          <input className="name" type="text" placeholder="Name" />
          <input className="email" type="text" placeholder="Email" /> <br />
          <textarea placeholder="Message" />
        </div>
      <button className="btn btn-primary">Send</button>
      <div className='footer'>
        <p>QZSEEKER @ 2023. ALL RIGHT RESERVED</p>
      </div>
    </div>
  )
}

export default Contact
