const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/">
            BSALE-Shop
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/energetica">
          Energeticas /
        </a>
        <a href="#/piscos">
          Piscos /
        </a>
        <a href="#/lic-ron">
          Ron /
        </a>
        <a href="#/bebidas">
          Bebidas /
        </a>
        <a href="#/snacks">
          Snacks /
        </a>
        <a href="#/cervezas">
          Cervezas /
        </a>
        <a href="#/vodka">
          Vodka
        </a>
      </div>      
    </div>
  `;
  return view;
};

export default Header;