import { Link } from "react-router-dom";

function ThankCom() {
  return (
    <div>
       <div>
  <section className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumbsCont">
            <h2>Order Completed</h2>
            <p>
              <Link to="/">Home </Link> <i className="fas fa-chevron-right" /> <Link to="/" className="active">Thank you Page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="sectionThank">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="thankyou-wrapper">
            <div className="thankyou-box">
              <div className="thankyou-icon">
                <img src="./assets/images/thanks.png" alt title />
              </div>
              <h2 className="thankyou-title">Your Order Is Completed!</h2>
              <p className="thankyou-message">
                Thank you for your order! Your order is being processed and will be completed within 3–6 hours. You will receive an email confirmation when your order is completed.
              </p>
              <button className="thankyou-btn btn PrimBtn">Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default ThankCom
