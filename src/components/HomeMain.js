import { Link } from "react-router-dom";
 

export default function HomeMain() {
 

  return (
     <div>
  <section className="hero">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="heroLeft">
            <span>Best Furniture For Your Castle....</span>
            <h1>A new collection of furniture is now available</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing</p>
            <Link to="/" className="PrimBtn">Shop Now</Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="heroRight">
            <img src="./assets/images/hero.png" alt title />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="sectionOne">
    <div className="sectionOneTop">
      <h2>Featured Products</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Link to="/" className="featurePro">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/feature1.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>Accent Chair</p>
                </h5>
                <p className="card-text">Code - Abc123</p>
                <h6>
                  <p>$112.00</p>
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/" className="featurePro">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/feature2.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>Accent Chair</p>
                </h5>
                <p className="card-text">Code - Abc123</p>
                <h6>
                  <p>$112.00</p>
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/" className="featurePro">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/feature3.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>Accent Chair</p>
                </h5>
                <p className="card-text">Code - Abc123</p>
                <h6>
                  <p>$112.00</p>
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/" className="featurePro">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/feature4.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>Accent Chair</p>
                </h5>
                <p className="card-text">Code - Abc123</p>
                <h6>
                  <p>$112.00</p>
                </h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
  <section className="sectionTwo">
    <div className="sectionTwoTop">
      <h2>What Shopex Offer!</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-3 my-3">
          <Link to="/" className="featurePro shopex">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/shopx1.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>24/7 Support</p>
                </h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="/" className="featurePro shopex">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/shopx2.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>24/7 Support</p>
                </h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="/" className="featurePro shopex">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/shopx3.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>24/7 Support</p>
                </h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <Link to="/" className="featurePro shopex">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/shopx4.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>24/7 Support</p>
                </h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
  <section className="sectionThree">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="sectionThreeLeft">
            <img src="./assets/images/trend.png" alt title />
          </div>
        </div>
        <div className="col-md-6">
          <div className="sectionThreeRight">
            <h2>The latest and trending<br /> products characteristics.</h2>
            <ul>
              <li>All frames constructed with hardwood solids and laminat</li>
              <li>Reinforced with double wood dowels, glue, screw - nails corner</li>
              <li>Arms, backs and seats are structurally reinforced</li>
            </ul>
            <div className="sectionThreeRightBtn">
              <Link to="/" className="PrimBtn">Add To Cart</Link>
              <p><strong>B&amp;B Italian Sofa</strong><span>$32.00</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="sectionFour">
    <div className="sectionFourTop mb-3">
      <h2>Trending Products</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-3 my-4">
          <Link to="/" className="featurePro trendPro">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/trend1.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>Dining Chair</p>
                </h5>
                <p className="card-text">$26.00<del>$42.00</del></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-4">
          <Link to="/" className="featurePro trendPro">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/trend2.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>Dining Chair</p>
                </h5>
                <p className="card-text">$26.00<del>$42.00</del></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-4">
          <Link to="/" className="featurePro trendPro">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/trend3.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>Dining Chair</p>
                </h5>
                <p className="card-text">$26.00<del>$42.00</del></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 my-4">
          <Link to="/" className="featurePro trendPro">
            <div className="card">
              <div className="featureProImage">
                <img src="./assets/images/trend4.png" className="card-img-top" alt="..." title />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  <p>Dining Chair</p>
                </h5>
                <p className="card-text">$26.00<del>$42.00</del></p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
  <section className="sectionFive">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Get Leatest Update By Subscribe 0ur Newslater</h2>
          <Link to="/" className="PrimBtn">Subscribe</Link>
        </div>
      </div>
    </div>
  </section>
</div>

  );
}

 
