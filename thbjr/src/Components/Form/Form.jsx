import { useState } from 'react';
import "Form.css"

const Form = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  const handleChangebox = (event) => {
    setTextarea(event.target.value)
  }

  const [textarea, setTextarea] = useState()
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Message
        <textarea value={textarea} onChange={handleChangebox} />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form