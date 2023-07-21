import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
          <footer>
    <h5 className='footer-h5'>Developed by Robert Generation</h5>
    <p className='copy-p'> @ 2023</p>
    <><img src="img/facebook-wrap.png" alt="facebook logo" />
    <i className="fas fa-cloud" />
    <img src="img/twitter-wrap.png" alt="twitter logo" /></>
  </footer>
      </div>
    )
  }
}

export default Footer