import React from 'react';
import { Component } from 'react';
import './navBar.css';

import Logo from '../../img/logo.svg';
import IconWpp from '../../img/wpp.svg';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav>
            <img src={Logo} alt="" />
            <a href="">Página Inicial</a>
            <a href="#quemSou">Quem sou</a>
            <a href="#minhasEspec">Minhas especialidades</a>
            <a href="#price">Preços e planos</a>
            <a href="#talk">Fale comigo</a>
            <img src={IconWpp} className="iconWpp" />
          </nav>
        </div>
      </div>
    )
  }
}
export default NavBar;