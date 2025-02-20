import { Link } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => {
  return (
    <div className="mailbox-page">
      <h1>Mailbox List</h1>
      <div className="mailbox-links">
        {mailboxes.map(mailbox => (
          <Link 
            to={`/mailboxes/${mailbox._id}`} 
            key={mailbox._id}
            className="mailbox-link"
          >
            Mailbox {mailbox._id}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MailboxList
