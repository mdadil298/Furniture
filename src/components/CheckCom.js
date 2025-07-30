 import { Link } from "react-router-dom";

export default function CheckCom() {
  return (
    <div>
      
      <div>
  <section className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumbsCont">
            <h2>Checkout</h2>
            <p>
              <Link to="/">Home </Link> <i className="fas fa-chevron-right" /> <Link to="/" className="active">Checkout Page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="sectionCheckout">
    <div className="container checkout-container">
      <div className="row">
        <div className="col-lg-8">
          <h5 className="checkout-title mb-4">Shipping Details</h5>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control checkout-input" placeholder="First name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control checkout-input" placeholder="Last name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control checkout-input" placeholder="Email Address" />
              </div>
              <div className="col-md-6">
                <input type="tel" className="form-control checkout-input" placeholder="Phone Number" />
              </div>
              <div className="col-12">
                <input type="text" className="form-control checkout-input" placeholder="Street Address" />
              </div>
              <div className="col-12">
                <input type="text" className="form-control checkout-input" placeholder="Apartment, suite, etc (optional)" />
              </div>
              <div className="col-12">
                <input type="text" className="form-control checkout-input" placeholder="Country" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control checkout-input" placeholder="City" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control checkout-input" placeholder="Postal Code" />
              </div>
              <div className="col-12">
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" id="sameAddress" />
                  <label className="form-check-label small text-muted" htmlFor="sameAddress">
                    Billing is the same as shipping
                  </label>
                </div>
              </div>
              <div className="useSame" id="useSame" style={{display: 'none'}}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control checkout-input" placeholder="First name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control checkout-input" placeholder="Last name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control checkout-input" placeholder="Email Address" />
                  </div>
                  <div className="col-md-6">
                    <input type="tel" className="form-control checkout-input" placeholder="Phone Number" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control checkout-input" placeholder="Street Address" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control checkout-input" placeholder="Apartment, suite, etc (optional)" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control checkout-input" placeholder="Country" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control checkout-input" placeholder="City" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control checkout-input" placeholder="Postal Code" />
                  </div>
                </div>
              </div>
            </div>
            <h5 className="checkout-title mt-3 mb-3">Payment Details</h5>
            <div className="row g-3">
              <div className="col-12">
                <input type="text" className="form-control checkout-input" placeholder="Card Number" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control checkout-input" placeholder="Expiry Date" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control checkout-input" placeholder="CVV" />
              </div>
            </div>
            <button className="btn PrimBtn mt-4 chkBtn">Continue Shipping</button>
          </form>
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          <div className="mb-3">
            <div className="checkout-product-item d-flex align-items-center mb-3 border-bottom border-secondary pb-2">
              <img src="./assets/images/fancy1.jpg" alt title />
              <div className="ms-3">
                <div className="checkout-product-name">Fancy Chair</div>
                <div className="checkout-product-info">Color: Brown<br />Size: XL</div>
              </div>
              <div className="ms-auto fw-semibold">$32.00</div>
            </div>
            <div className="checkout-product-item d-flex align-items-center mb-3 border-bottom border-secondary pb-2">
              <img src="./assets/images/fancy2.jpg" alt title />
              <div className="ms-3">
                <div className="checkout-product-name">Fancy Chair</div>
                <div className="checkout-product-info">Color: Brown<br />Size: XL</div>
              </div>
              <div className="ms-auto fw-semibold">$32.00</div>
            </div>
            <div className="checkout-product-item d-flex align-items-center mb-3 border-bottom border-secondary pb-2">
              <img src="./assets/images/fancy3.jpg" alt title />
              <div className="ms-3">
                <div className="checkout-product-name">Fancy Chair</div>
                <div className="checkout-product-info">Color: Brown<br />Size: XL</div>
              </div>
              <div className="ms-auto fw-semibold">$32.00</div>
            </div>
            <div className="checkout-product-item d-flex align-items-center mb-3 border-bottom border-secondary pb-2">
              <img src="./assets/images/fancy4.jpg" alt title />
              <div className="ms-3">
                <div className="checkout-product-name">Fancy Chair</div>
                <div className="checkout-product-info">Color: Brown<br />Size: XL</div>
              </div>
              <div className="ms-auto fw-semibold">$32.00</div>
            </div>
            <div className="checkout-product-item d-flex align-items-center mb-3 pb-2">
              <img src="./assets/images/fancy5.jpg" alt title />
              <div className="ms-3">
                <div className="checkout-product-name">Fancy Chair</div>
                <div className="checkout-product-info">Color: Brown<br />Size: XL</div>
              </div>
              <div className="ms-auto fw-semibold">$32.00</div>
            </div>
          </div>
          <div className="checkout-summary-box">
            <div className="d-flex justify-content-between">
              <span className="checkout-summary-title">Subtotals:</span>
              <span>$219.00</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span className="checkout-summary-title">Totals:</span>
              <span>$325.00</span>
            </div>
            <button className="btn btn-checkout w-100 mt-4">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    </div>
  )
}
 
