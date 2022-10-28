import React from 'react'

function Head() {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> +1 888 867-5309</label>
            <i className="fa fa-envelope"></i>
            <label>support@ui-lib.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Help?</label>
            <label>EN</label>
            <label>USD</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head