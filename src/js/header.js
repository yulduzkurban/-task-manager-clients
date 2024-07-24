import Back from "../images/svg/back.svg";
import Logo from "../images/svg/site-logo.svg";

class Header {
  render() {
    return `
        <header class="header">
         <div class="container">
            <div class="header__container">
            <a class="header__block" href="index.html">
              <img
               width="20"
               height="20"
               src=${Logo}
               alt="site logo"
               class="header__block-logo"
              />
              <span class="header__block-logo-text">
               TaskTrack
              </span>
            </a>
            <a target="__blank" href="#">
              <img
               width="24"
               src=${Back}
               height="24" 
               alt="back logo" 
               class="header-back-icon"
              />
            </a>
          </div>
         </div>
        </header>
    `;
  }
}

const header = new Header().render();

export default header;
