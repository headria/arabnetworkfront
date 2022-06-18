import React from 'react'
import { Link } from 'react-router-dom'
import { NavItem } from './NavItem'

const NavLists = ({ t, usetranslation }) => {

  const menusLinks = t('menus', { returnObjects: true });

  return (
    <ul className="navigation-text-Light">
      {Object.values(menusLinks).map((link, i) => (
        <NavItem key={i} url="#" text={link} />
      ))}
    </ul>
  )
}

export default NavLists;


{/* <li>
                    <Link to="#">
                      {t("menus.ecosystem")}
                      <i className="fal fa-angle-down" />
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="#">Eco 1</Link>
                      </li>
                      <li>
                        <Link to="#">Eco 2</Link>
                      </li>
                    </ul>
                  </li> */}
{/* <li>
                    <Link to="/community">{t("menus.community")}</Link>
                  </li> */}