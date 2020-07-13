import React, { Component } from 'react';
import css from './minhas.module.css';

export default class Minhas extends Component {
  render() {
    return (
      <div>
        <div className={css.containerBox} >
          <div className={css.box1}>
            <div>
              <h5 className={css.title}>Massagem Relaxante</h5>
            </div>
          </div>
          <div className={css.box}>
            <h5 className={css.title}>Massagem Relaxante</h5>
          </div>
          <div className={css.box}>
            <h5 className={css.title}>Massagem com Pedras Quentes</h5>
          </div>
          <div className={css.box}>
            <h5 className={css.title}>Massagem com Aromaterapia</h5>
          </div>
          <div className={css.box}>
            <h5 className={css.title}>Massagem Ponto-gatilho</h5>
          </div>
          <div className={css.box}>
            <h5 className={css.title}>Massagem Pré-natal</h5>
          </div>
        </div>
      </div>
    )
  }
}
