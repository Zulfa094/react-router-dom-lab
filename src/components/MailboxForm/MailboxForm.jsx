import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MailboxForm = ({ addBox }) => {
  const [box, setbox] = useState({
    boxOwner: '',
    boxSize: 'Small'
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setbox({
      ...box,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addBox(box)
    navigate('/mailboxes')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a Boxholder:
        <input
          type="text"
          name="boxOwner"
          value={box.boxOwner}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Select a Box Size:
        <select name="boxSize" value={box.boxSize} onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default MailboxForm
