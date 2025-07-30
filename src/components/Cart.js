import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div>
 
  <section className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumbsCont">
            <h2>Shopping Cart</h2>
            <p>
              <Link to="/">Home </Link> <i className="fas fa-chevron-right" /> <Link to="/" className="active">Shopping Cart Page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="sectionCart">
    <div className="container">
      <div className="row g-4 py-5">
        <div className="col-lg-8">
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="cart-table-header border-bottom">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="removeCart">
                        <img src="./assets/images/cart1.jpg" alt="product" className="cart-item-image" />
                        <button className="cart-remove-btn">×</button>
                      </div>
                      <div>
                        <div className="cart-item-title">
                          Ut diam consequat
                        </div>
                        <div className="cart-item-details">
                          Color: Brown<br />Size: XL
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$32.00</td>
                  <td>
                    <div className="cart-quantity-wrapper">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-row align-self-center product_data" id="qty_select">
                          <input type="hidden" defaultValue={ 1 } className="prod_id" />
                          <div className="input-group text-center" id="qty_selector">
                            <Link className="decrement-btn">
                              <i className="fa fa-minus" style={{paddingLeft: 9}} />
                            </Link>
                            <input type="text" readOnly="readonly" id="qty_display" className="qty-input text-center" defaultValue={1} />
                            <Link className="increment-btn">
                              <i className="fa fa-plus" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$219.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="removeCart">
                        <img src="./assets/images/cart1.jpg" alt="product" className="cart-item-image" />
                        <button className="cart-remove-btn">×</button>
                      </div>
                      <div>
                        <div className="cart-item-title">
                          Ut diam consequat
                        </div>
                        <div className="cart-item-details">
                          Color: Brown<br />Size: XL
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$32.00</td>
                  <td>
                    <div className="cart-quantity-wrapper">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-row align-self-center product_data" id="qty_select">
                          <input type="hidden" defaultValue={ 1 } className="prod_id" />
                          <div className="input-group text-center" id="qty_selector">
                            <Link className="decrement-btn">
                              <i className="fa fa-minus" style={{paddingLeft: 9}} />
                            </Link>
                            <input type="text" readOnly="readonly" id="qty_display" className="qty-input text-center" defaultValue={1} />
                            <Link className="increment-btn">
                              <i className="fa fa-plus" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$219.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-wrap justify-content-between gap-3 mt-3 cart-action-buttons">
            <button className="btn PrimBtn">Update Cart</button>
            <button className="btn PrimBtn">Clear Cart</button>
          </div>
        </div>
        <div className="col-lg-4">
          <h5 className="cart-summary-boxTop text-center pb-3">Cart Totals</h5>
          <div className="cart-summary-box">
            <div className="cart-summary-line">
              <span>Subtotals:</span>
              <span>$219.00</span>
            </div>
            <div className="cart-summary-line">
              <span>Totals:</span>
              <span>$325.00</span>
            </div>
            <p className="cart-summary-note form-check custom-checkbox-green">
              <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Shipping &amp; taxes calculated at checkout.
              </label>
            </p>
            <button className="btn btn-proceed-checkout w-100">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

 
  )
}
 
