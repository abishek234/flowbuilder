import { useEffect, useState } from 'react'

const Sidebar = () => {
  const [showUsage, setShowUsage] = useState(true) 

  useEffect(() => {
    setTimeout(() => {
      setShowUsage(false)
    }, 5000)
  }, [showUsage])

  const displayUsage = showUsage ? '' : 'none'

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <>
      <div className="description" style={{ display: displayUsage }}>
        Drag below node to the pane on the left to add new nodes.
      </div>
      <aside>
        <div
          className="appnode"
          onDragStart={(event) => onDragStart(event, 'default')}
          draggable
          style={{ paddingBottom: '10px' }} 
        >
          <span
            className="material-symbols-outlined"
            style={{ paddingBottom: 5 }}
          >
            maps_ugc
          </span>
          Message
          
        </div>
      </aside>
    </>
  )
}

export default Sidebar
