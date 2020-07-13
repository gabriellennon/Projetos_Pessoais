/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';

import css from './talk.module.css';
import IconTel from '../../img/iconTel.svg';
import IconEmail from '../../img/email1.svg';
import wpp from '../../img/wpp.svg';
import insta from '../../img/insta.svg';
import face from '../../img/face.svg';

export default class Talk extends Component {
  render() {
    return (
      <div className={css.containerFale}>
        <div className={css.faleComigo}>
          <h2>Vamos nessa? Fale comigo!</h2>
          <hr />
        </div>
        <div className={css.rowContact}>
          <div className={css.divTel}>
            <img src={IconTel} alt="" />
            <div>+55 (61) 91234-4567</div>
          </div>
          <div className={css.divEmail}>
            <img src={IconEmail} alt="" />
            <div>usuario@gmail.com</div>
          </div>
        </div>
        <div className={css.containerIcons}>
          <div className={css.divWpp}>
            <img src={wpp} alt="" />
          </div>
          <div className={css.divInsta}>
            <img src={insta} alt="" />
          </div>
          <div className={css.divFace}>
            <img src={face} alt="" />
          </div>
        </div>
      </div>
    )
  }
}
