
const ContactForm = () => {
  return (
    <div>
      <div className="">
        <label htmlFor="name">Name</label>
        <inpu id="name" placeholder="Enter your name"/>
      </div>
      <div className="">
        <label htmlFor="message">Message</label>
        <textarea name="" id="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
      </div>
      
      <button>Send message</button>
    </div>
  )
}

export default ContactForm