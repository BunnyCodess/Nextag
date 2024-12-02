document.getElementById('header').innerHTML=`
<nav class="navbar navbar-expand-sm justify-content-end topnav" style="background-color: black;">
<ul class="navbar-nav flex-row">
  <li class="nav-item ms-2 me-4"><a href="trackorder.html">Track Order</a></li>
  <li class="nav-item ms-2 me-4"><a href="about.html">About</a></li>
  <li class="nav-item ms-2 me-4"><a href="contact.html">Contact Us</a></li>
</ul>
</nav>

<nav>
<div class="container ">
  <div class="row">
    <div class="col-md-12 d-flex align-items-center justify-content-center">
      <div class="logo">
       <a href="Home.html"> <img src="assets/brand pics/logo/logo-removebg-preview.png" class="img-fluid" width="200px"  alt=""></a>
      </div>

    
      <input type="text" class="w-100 customfield" placeholder="Search for products">
      <button class="navbtn"><i class="fa fa-search " aria-hidden="true"></i>
      </button>
      <div class="d-flex m-4">
     <a href="login.html" style="text-decoration: none; color: black;"> <i class="fa-regular fa-user" style="font-size: 22px;"></i></a>
      <a href="cart.html" style="text-decoration: none; color: black;"> <i class="fa-solid fa-cart-shopping mx-4" style="font-size: 22px;"></i></a>
    </div>
    </div>
  </div>
</nav>


<nav class="navbar navbar-expand-lg bg-body-tertiary " id="nav-head">
<div class="container-fluid">

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse mt-3" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
      <li class="nav-item dropdown ">
        <a class="nav-link dropdown-toggle text-center" id="dropdown" href="#" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          Shop By Category
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item " href="gucci.html">Gucci</a></li>
          <li><a class="dropdown-item " href="louisvitton.html">Louis Vitton</a></li>
          <li><a class="dropdown-item " href="saintlauren.html">Saint Lauren</a></li>

        </ul>
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link" aria-current="page " href="home.html">Home</a>
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link" href="purses.html">Purses</a>
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link" href="wallet.html">Wallets</a>
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link" href="compare.html">Compare</a>
      </li>
      <li class="nav-item ps-2">
        <a class="nav-link" href="products.html">Products</a>
      </li>

    </ul>

  </div>
</div>
</nav>`

document.getElementById('footer').innerHTML = `
<div class="footer-top ps-5">
<div class="container-fluid">
  <div class="row">
    <div class="col-lg-3 col-md-6 footer-contact">
      <a href="home.html">
        <img src="assets/brand pics/logo/logo-removebg-preview.png" alt="" height="130" width="150">
      </a>
      <div class="footer-icon">
        <i class="fa-solid fa-phone"></i> <span class="footicon ps-2">+92 3312544599</span> <br>
        <i class="fa-brands fa-whatsapp"></i> <span class="footicon ps-2">+92 3312544599</span><br>
        <i class="fa-solid fa-mobile-screen"></i> <span class="footicon ps-2">-</span><br>
        <i class="fa-regular fa-envelope"></i> <span
          class="footicon ps-2">Aptech@gmail.com</span><br>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 footer-link">
      <h4>About Us</h4>
      <ul>
        <li><a href="about.html">About US</a></li>
        <li><a href="home.html">News & Blog</a></li>
        <li><a href="home.html">Brands</a></li>
        <li><a href="home.html">Press Center</a></li>
        <li><a href="home.html">Advertising</a></li>
        <li><a href="about.html">Investors</a></li>
      </ul>
    </div>


    <div class="col-lg-3 col-md-6 footer-link">
      <h4>Support</h4>
      <ul>
        <li><a href="contact.html">Support Center</a></li>
        <li><a href="about.html">Manage</a></li>
        <li><a href="about.html">Service</a></li>
        <li><a href="home.html">Haul Away</a></li>
        <li><a href="contact.html">Security Center</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

    <div class="col-lg-3 col-md-6 footer-link">
      <h4>Order</h4>
      <ul>
        <li><a href="trackorder.html">Check Order</a></li>
        <li><a href="contact.html">Delivery & Pickup</a></li>
        <li><a href="home.html">Returns</a></li>
        <li><a href="home.html">Exchanges</a></li>
        <li><a href="about.html">Developers</a></li>
        <li><a href="contact.html">Gift Cards</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
<hr>
<div class="container-fluid ">
<div class="row">
  <div class="col-md-4">
    <div class="social-links">
      <a href=""><i class="fa-brands fa-facebook ps-2 pe-3"></i></a>
      <a href=""><i class="fa-brands fa-instagram ps-2 pe-3"></i></a>
      <a href=""><i class="fa-brands fa-youtube ps-2 pe-3"></i></a>
      <a href=""><i class="fa-brands fa-tiktok ps-2 pe-3"></i></a>
    </div>
  </div>
  <div class="col-md-4">
    <div class="copyright">
     
    </div>
  </div>
  <div class="col-md-4">
    <div class="credits">
      <a href="#"><img src="assets/images/payment.png" alt=""> </a>
    </div>
  </div>
</div>
</div>
`