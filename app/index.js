import React from 'react'
import { createRoot } from 'react-dom/client'
const container = document.getElementById('app')
const root = createRoot(container)

const Form = () => {
    return (
      <div id='container'>
        <div id='navbar'>
          Form.js
        </div>
        <form>
          {/* your form fields here */}
        </form>
      </div>
    )
}

root.render(<Form />)
