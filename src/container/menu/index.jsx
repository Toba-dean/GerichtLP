import "./menu.styles.css";
import { Subheading, MenuItem } from "../../components";
import { wines, cocktails } from "../../constants/data";
import { images } from "../../constants/images";

const Menu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <Subheading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>

          <div className="app__specialMenu_menu_items">
            {
              wines.map((wine, idx) => (
                <MenuItem
                  key={wine.title + idx}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              ))
            }
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>

          <div className="app__specialMenu_menu_items">
            {
              cocktails.map((cocktail, idx) => (
                <MenuItem
                  key={cocktail.title + idx}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              ))
            }
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>
    </div>
  )
}

export default Menu