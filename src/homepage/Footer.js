import React, { Component } from 'react'
import  '../css/homepage/Footer.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
  render() {
    return (
      <footer id="footer" className="container">
    <div className="title-footer">
      <h5 className="h4">Title Here</h5>
      <p className="p">Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Aliquam at dignissim <br />nunc, id maximus ex. Etiam nec<br /> dignissim elit, at dignissim enim.</p>
      <div className="icon-footer">
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-square-instagram" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-square-whatsapp" />
      </div>
    </div>
    <div className="danhmuc-footer">
      <div className="danhmuc">
        <h5 className="h4">About</h5>
        <p className="p">History</p>
        <p className="p">Our Team</p>
        <p className="p">Brand Guidelines</p>
        <p className="p">Terms &amp; Condition</p>
        <p className="p">Privacy Policy</p>
      </div>
      <div className="danhmuc" style={{marginLeft: '4rem'}}>
        <h5 className="h4">Services</h5>
        <p className="p">How to Order</p>
        <p className="p">Our Product</p>
        <p className="p">Order Status</p>
        <p className="p">Promo</p>
        <p className="p">Payment Method</p>
      </div>
      <div className="danhmuc" style={{marginLeft: '4rem'}}>
        <h5 className="h4">Other</h5>
        <p className="p">Contact Us</p>
        <p className="p">Help</p>
        <p className="p">Privacy</p>
      </div>
    </div>
  </footer>
    )
  }
}

