class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <div class="logo">
    <a href="index.html">
      <img
        class="logo-image"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c9ed6c65228979.5aecb0f7e395d.jpg"
        alt="The Fashoin Store"
      />
    </a>
    <h1>Fashion</h1>
  </div>    <nav>
        <ul class="navlinks">
            <li class="items">  <a href="mens.html">Mens</a></li>
            <li class="items"> <a href="women.html">Women</a></li>
            <li class="items"> <a href="kid.html">Kids</a></li>
            <li class="items"> <a href="jewelary.html">Jewelary</a></li>
            <li class="items">  <a href="shoes.html">Shoes</a></li>
            <li class="items"> <a href="about.html">About</a></li>
            <li class="items"><a href="contact.html"><button>Contact Us</button></a></li>
            <li onclick="showSidebar()"><a href="#"><ion-icon name="menu-outline"></ion-icon></a></li>
        </ul>
        <ul class="sidebar">
            <li onclick="closeSidebar()"><a href="#"><ion-icon name="close-outline"></ion-icon></a></li>
            <li><a href="mens.html">Mens</a></li>
            <li><a href="women.html">Women</a></li>
            <li><a href="kid.html">Kids</a></li>
            <li><a href="jewelary.html">Jewelary</a></li>
            <li><a href="shoes.html">Shoes</a></li>
            <li><a href="about.html">Contact Us</a></li>
            <li><a href="about.html">About</a></li>
            <img
            class="logo-image"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c9ed6c65228979.5aecb0f7e395d.jpg"
            alt="The Fashoin Store"
          />        
          </ul>
    </nav>
</header>
      `;
  }
}
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
    <footer>
    <nav>
      <ul>
        <li>
          <a href="../html/privacyPolicy.html" class="footer-nav-link">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="../html//termsOfService.html" class="footer-nav-link">
            Terms of Service
          </a>
        </li>
      </ul>
    </nav>
    <p>&copy; 2024 Fashion Shop. All rights reserved.</p>
  </footer>`;
  }
}
customElements.define("custom-header", CustomHeader);
customElements.define("custom-footer", CustomFooter);

