//Version 3
import '../../index.css'

//Version 2



function ApplicationItem({ application }) {
  
  return (
    <div className='application'>
      <div>{new Date(application.createdAt).toLocaleString('en-US')}</div>
      <div>{application.description}</div>
      <div className={`status status-${application.status}`}>{application.status}</div>
    </div>
  )
}

export default ApplicationItem