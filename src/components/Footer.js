
import { Link } from "react-router-dom";
 
export default function Footer() {
  
  return (
   
   <div>
  <section className="sectionFooter">
    <div className="container">
      <footer className="footerCont">
        <div className="row">
          <div className="col-md-3 mb-3 logoWhite">
            <a href="javascript:void(0);" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
              <img src="./assets/images/logo.png" alt title className="img-fluid" />
            </a>
            <a href="javascript:void(0)">Contact Us</a>
            <p>47 W 13th St, New York, NY 10011, USA</p>
          </div>
          <div className="col-md-3 mb-3 footerShop">
            <h5>Catagories</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Laptops &amp; Computers</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Cameras &amp; Photography</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Smart Phones &amp; Tablets</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Video Games &amp; Consoles</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Waterproof Headphones</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3 footerService">
            <h5>Customer Care</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">My Account</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Discount</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Orders History</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Returns</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Orders History</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Pages</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Category</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Product Pages</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Checkout</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Blog</Link></li>
              <li className="nav-item mb-2"><Link to="/"  className="nav-link p-0 text-body-secondary">Product Details</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </section>
  <section className="footerBottom">
    <div className="container">
      <div className="d-flex flex-column flex-sm-row justify-content-between py-3 footerBottom">
        <p>© 2025 CodeClouds. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li>
            <a href="javascript:void(0)"> <i className="fab fa-instagram" /> </a>
          </li>
          <li>
            <a href="javascript:void(0)"> <i className="fab fa-facebook-f" /> </a>
          </li>
          <li>
            <a href="javascript:void(0)"> <i className="fa-brands fa-x-twitter" /> </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <button id="scrollToTop" className="btn btn-primary rounded-circle shadow">
    <i className="fas fa-arrow-up" />
  </button>
</div>

  );
}

 
