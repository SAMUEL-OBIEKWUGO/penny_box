import React from 'react'

const Footer = () => {
  return (
    <>
    <footer style={{ backgroundColor: '#7e295b', color: '#f4c542', padding: '20px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <i className="bi bi-instagram" style={{ fontSize: '24px' }}></i>
        <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
        <i className="bi bi-twitter" style={{ fontSize: '24px' }}></i>
      </div>
      <p style={{ marginTop: '10px' }}>© Pennybox Finance Ltd. All rights reserved</p>
    </footer>
    </>
  )
}

export default Footer
