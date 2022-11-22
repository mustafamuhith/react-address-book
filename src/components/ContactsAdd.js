import { useState } from "react"
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: '',
  lastName: '',
  street: '',
  city:'',
}

function ContactsAdd(props) {

  // setContacts and contacts must be passed as props
  // to this component so new contacts can be added to the
  // state
  const { setContacts, contacts } = props

  const [addedContact, setAddedContact] = useState(initialState)

  //TODO: Implement controlled form
  //send POST to json server on form submit

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:4000/contacts')
    .then((res) => res.json())
    .then((data) => setContacts([...contacts, data]))
    setContacts(initialState)
  }

  const handleChange = (event) => {
    const targetName = event.target.name
    const targetValue = event.target.targetValue

    if(targetName === 'firstName') {
      setAddedContact({...addedContact, firstName: targetValue})
    }
    if(targetName === 'lastName') {
      setAddedContact({...addedContact, lastName: targetValue})
    }
    if(targetName === 'street') {
      setAddedContact({...addedContact, street: targetValue})
    }
    if(targetName === 'city') {
      setAddedContact({...addedContact, city: targetValue})
    }
  }
  console.log(addedContact)
  
  return (
    <form className="form-stack contact-form" onSubmit={handleSubmit}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" required onChange={handleChange}/>

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" required onChange={handleChange}/>

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" required onChange={handleChange}/>

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" required onChange={handleChange}/>

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default ContactsAdd
