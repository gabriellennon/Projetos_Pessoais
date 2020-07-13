import React, { Component } from 'react';

import css from './footer.module.css';
import iconMap from '../../img/map2.svg';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="page-footer grey darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Rosi Masso</h5>
                <p class="grey-text text-lighten-4">Venha garantir o melhor para a sua saúde.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Endereço</h5>
                <ul>
                  <li>
                    <div className={css.containerFooter}>
                      <hr />
                      <p>
                        <img src={iconMap} alt="" />
                        <a href="https://www.google.com.br/maps/@-15.8317843,-47.8140272,3a,60.5y,327.04h,101.77t/data=!3m6!1e1!3m4!1sFu382TTdpefE86qnRB2Fxw!2e0!7i13312!8i6656?hl=en&authuser=0">
                          Ed. Serrano Center QI 26 Bloco B
                          <i class="fas fa-map-marker-alt icon-footer01" aria-hidden="true"></i>
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
              © 2020
              {/* Desenvolvido por
            <a class="grey-text text-lighten-4 right" href="#!">Gabriel Lennon</a> */}
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
