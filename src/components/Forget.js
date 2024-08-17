
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Forget = () => {
    const navigate=useNavigate();
  return (
    <div>
      <p>page not created yed</p>
      <button onClick={() => navigate(-1)} className="text-blue-500  hover:text-blue-700">
                                        Go Back
                                    </button>
    </div>
    https://dashboardcollage.netlify.app/
  )
}

export default Forget;