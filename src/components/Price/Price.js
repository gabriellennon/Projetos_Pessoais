import React, { Component } from 'react';

import css from './price.module.css';

export default class Price extends Component {
  render() {
    return (
      <div>
        <div className={css.containerPlano}>
          <div className={css.plano}>
            <h4>Plano Básico</h4>
            <div>R$ 500,00</div>
            <ul className={css.itensPlano}>
              <li>Aplicativos<span>1</span></li>
              <li>Manutenções Programadas<span>5</span></li>
              <li>Helpdesk 24hs<span className={css.iconex}></span></li>
              <li>App SEO<span className={css.iconeheck}></span></li>
              <li>Atendente Exclusivo<span className={css.iconex}></span></li>
              <li>Sistema Operacional<span>1</span></li>
            </ul>
            <a className={css.btnPadrao} href>Comprar</a>
          </div>
          <div className={css.plano}>
            <h4>Plano Enterprise</h4>
            <div>R$ 1500,00</div>
            <ul className={css.itensPlano}>
              <li>Aplicativos<span>3</span></li>
              <li>Manutenções Programadas<span>20</span></li>
              <li>Helpdesk 24hs<span className={css.iconeCheck}></span></li>
              <li>App SEO<span className={css.iconeCheck}></span></li>
              <li>Atendente Exclusivo<span className={css.iconex}></span></li>
              <li>Sistema Operacional<span>3</span></li>
            </ul>
            <a className={css.btnPadrao} href>Comprar</a>
          </div>
          <div className={css.plano}>
            <h4>Plano Corporation</h4>
            <div>R$ 9500,00</div>
            <ul className={css.itensPlano}>
              <li>Aplicativos<span>5</span></li>
              <li>Manutenções Programadas<span>∞</span></li>
              <li>Helpdesk 24hs<span className={css.iconeCheck}></span></li>
              <li>App SEO<span className={css.iconeCheck}></span></li>
              <li>Atendente Exclusivo<span className={css.iconex}></span></li>
              <li>Sistema Operacional<span>6</span></li>
            </ul>
            <a className={css.btnPadrao} href>Comprar</a>
          </div>
        </div>
      </div>
    )
  }
}
