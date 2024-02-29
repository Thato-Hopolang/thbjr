import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="name-input">
        <input id="name" placeholder="Name"/>
      </div>
      <div className="message-input">
        <textarea name="message" id="message" placeholder="Enter your message"></textarea>
      </div>   
      <button className="btn">Send message</button>
    </div>
  )
}

export default ContactForm