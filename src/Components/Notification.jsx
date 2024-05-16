
// eslint-disable-next-line react/prop-types
const Notification = ({ errorMessage, messageColor }) => {
  if (errorMessage) {
    return <div className={messageColor}>{errorMessage}</div>
  }
  return <div className="savingChanges" style={{ padding: 19 }}></div>
}

export default Notification
