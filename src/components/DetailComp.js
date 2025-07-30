import { Link } from "react-router-dom";
import React from 'react';
import ExampleSlider from './ExampleSlider';
import SlickSlider from './ExampleSlider';

export default function DetailComp() {
  return (
    <div>
      
       <div>
  <section className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumbsCont">
            <h2>Products Details Page</h2>
            <p>
              <Link to="/">Home </Link> <i className="fas fa-chevron-right" /> <Link to="/" className="active">Shop Page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="sectionProDetails detailsSection py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ExampleSlider /> 
          {/* <div className="sectionProDetailsLeft pb-5 slider-wrapper">
            <div className="slider-nav">
              <div><img src="./assets/images/slider1.jpg" alt={1} /></div>
              <div><img src="./assets/images/slider2.jpg" alt={2} /></div>
              <div><img src="./assets/images/slider3.jpg" alt={3} /></div>
            </div>
            <div className="slider-for">
              <div><img src="./assets/images/slider1.jpg" alt={1} /></div>
              <div><img src="./assets/images/slider2.jpg" alt={2} /></div>
              <div><img src="./assets/images/slider3.jpg" alt={3} /></div>
            </div>
          </div> */}
        </div>
        <div className="col-md-6">
          <div className="sectionProDetailsRight">
            <form action="checkout.html" method="post">
              <h2>Playwood arm chair</h2>
              <div className="reviesStars">
                <h4><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /> (22)</h4>
                <h5>
                  <p>$32.00 <del>$64.00</del></p>
                </h5>
                <div className="mb-3 ColorChange">
                  <h6>Color :</h6>
                  <div className="d-flex gap-2 flex-wrap">
                    <input type="radio" className="btn-check" name="color" id="colorRed" autoComplete="off" defaultChecked />
                    <label className="btn color-swatch" style={{backgroundColor: '#5F44AB'}} htmlFor="colorRed" />
                    <input type="radio" className="btn-check" name="color" id="colorBlue" autoComplete="off" />
                    <label className="btn color-swatch" style={{backgroundColor: '#3D4B5C'}} htmlFor="colorBlue" />
                    <input type="radio" className="btn-check" name="color" id="colorGreen" autoComplete="off" />
                    <label className="btn color-swatch" style={{backgroundColor: '#28356A'}} htmlFor="colorGreen" />
                    <input type="radio" className="btn-check" name="color" id="colorBlack" autoComplete="off" />
                    <label className="btn color-swatch" style={{backgroundColor: '#000000'}} htmlFor="colorBlack" />
                  </div>
                </div>
                <div className="qualityArea pb-4">
                  <h6>Quantity</h6>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-row align-self-center product_data" id="qty_select">
                      <input type="hidden" defaultValue={ 1 } className="prod_id" />
                      <div className="input-group text-center" id="qty_selector">
                        <Link to="/" className="decrement-btn">
                          <i className="fa fa-minus" style={{paddingLeft: 9}} />
                        </Link>
                        <input type="text" readOnly="readonly" id="qty_display" className="qty-input text-center" defaultValue={1} />
                        <Link to="/" className="increment-btn">
                          <i className="fa fa-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                <div className="productsButtons">
                  <Link to="/" className="btn PrimBtn">Buy Now</Link>
                  <Link to="/" className="btn proBtn ms-4">Add to Cart</Link>
                </div>
              </div>
            </form></div>
        </div>
      </div>
    </div>
  </section>
  <section className="sectionTabs">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ul className="nav nav-tabs nav-tabs-custom justify-content-start" id="underlineTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                Additional Info
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                Reviews
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="tab4-tab" data-bs-toggle="tab" data-bs-target="#tab4" type="button" role="tab" aria-controls="tab4" aria-selected="false">
                Video
              </button>
            </li>
          </ul>
          <div className="tab-content" id="underlineTabContent">
            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
              <h2>Varius tempor.</h2>
              <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <Link to="/">More details</Link>
              <ul>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <Link to="/">More details</Link>
              <ul>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
              <p>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <Link to="/">More details</Link>
              <ul>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
              </ul>
            </div> 
            <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <Link to="/">More details</Link>
              <ul>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
                <li> <i className="fas fa-arrow-right" /> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui. </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="sectionRelatedPro py-5">
    <div className="relatedPro mb-3">
      <div className="container">
        <h2>Related Products</h2>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-3 my-3">
          <div className="relatedProCont">
            <img src="./assets/images/pro1.jpg" alt title />
            <div className="relatedProContArea">
              <div className="relatedProContAreaLeft">
                <h4>Italian Chair</h4>
              </div>
              <div className="relatedProContAreaRight">
                <ul>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star grayColor" /></li>
                </ul>
              </div>
            </div>
            <span>$43.00</span>
          </div>
        </div>
        <div className="col-md-3 my-3">
          <div className="relatedProCont">
            <img src="./assets/images/pro2.jpg" alt title />
            <div className="relatedProContArea">
              <div className="relatedProContAreaLeft">
                <h4>Italian Chair</h4>
              </div>
              <div className="relatedProContAreaRight">
                <ul>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                </ul>
              </div>
            </div>
            <span>$67.00</span>
          </div>
        </div>
        <div className="col-md-3 my-3">
          <div className="relatedProCont">
            <img src="./assets/images/pro3.jpg" alt title />
            <div className="relatedProContArea">
              <div className="relatedProContAreaLeft">
                <h4>Italian Chair</h4>
              </div>
              <div className="relatedProContAreaRight">
                <ul>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star grayColor" /></li>
                </ul>
              </div>
            </div>
            <span>$67.00</span>
          </div>
        </div>
        <div className="col-md-3 my-3">
          <div className="relatedProCont">
            <img src="./assets/images/pro4.jpg" alt title />
            <div className="relatedProContArea">
              <div className="relatedProContAreaLeft">
                <h4>Italian Chair</h4>
              </div>
              <div className="relatedProContAreaRight">
                <ul>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star grayColor" /></li>
                  <li><i className="fas fa-star grayColor" /></li>
                </ul>
              </div>
            </div>
            <span>$51.00</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


    </div>
  )
}

 
