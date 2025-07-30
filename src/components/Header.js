 
import { Link } from "react-router-dom";


export default function Header() {
   
  return (
     
  
    <div>
  <div className="topHead">Todays Limited Offers Hurry !! </div>
  <header className="header">
    <nav className="navbar navbar-expand-lg bg-body-tertiary" aria-label="Thirteenth navbar example">
      <div className="container">
        <Link className="navbar-brand col-lg-3 me-0" to="/"><img className="logo" src="./assets/images/logo.png" alt title /></Link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /> </button> 
        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <ul className="navbar-nav ms-auto d-flex w-100 justify-content-end">
            <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/">Home</Link> </li>
            <li className="nav-item"> <Link className="nav-link" to="/">Pages</Link> </li>
            <li className="nav-item"> <Link className="nav-link" to="/">Products</Link> </li>
            <li className="nav-item"> <Link className="nav-link" to="/">Shop</Link> </li>
            <li className="nav-item"> <Link className="nav-link" to="/">Contact</Link> </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</div>


  );
}

 
