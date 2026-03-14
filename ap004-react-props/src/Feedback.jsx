//rafce
import React from 'react'

const Feedback = ({textoOk, textoNOK, funcaoOK, funcaoNOK}) => {
  return (
    <div
    className='d-flex justify-content-evenely m-2'>
        {/* button[type=button].btn.btn-*2 */}
        <button type="button" onClick={funcaoOK}
        className="btn btn-primary">
            {textoOk}
            </button>
        <button type="button" onClick={funcaoNOK}
        className="btn btn-danger">
            {textoNOK}
        </button>
    
    </div>
  )
}

export default Feedback