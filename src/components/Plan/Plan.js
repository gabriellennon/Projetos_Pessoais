import React, { Component } from 'react';
import css from './plan.module.css';

import check from '../../img/check-circle.svg';
import iconX from '../../img/x-square.svg';

export default class Plan extends Component {
  render() {
    return (
      <div className={css.body}>
        <section className={css.priceComparison}>
          <div className={css.priceColumn}>
            <div className={css.priceHeader}>
              <div className={css.price}>
                <div className={css.dollarSign}>R$</div>
                10
                <div className={css.perMonth}>/mo</div>
              </div>
              <div className={css.planName}>Básico</div>
            </div>
            <div className={css.divider}></div>
            <div className={css.feature}>
              <img src={check} />
              Massagem A
            </div>
            <div className={css.feature}>
              <img src={check} />
              Massagem B
            </div>
            <div className={`${css.feature} ${css.inactive}`}>
              <img src={iconX} />
              Massagem C
            </div>
            <div className={`${css.feature} ${css.inactive}`}>
              <img src={iconX} />
              Massagem D
            </div>
            <div className={`${css.feature} ${css.inactive}`}>
              <img src={iconX} />
              Massagem E
            </div>
            <div className={`${css.feature} ${css.inactive}`}>
              <img src={iconX} />
              Massagem F
            </div>
            <button className={css.cta}>Contratar</button>
          </div>
          <div className={`${css.priceColumn} ${css.popular}"`}>
            <div className={css.priceHeader}>
              <div className={css.price}>
                <div className={css.dollarSign}>R$</div>
                20
                <div className={css.perMonth}>/mo</div>
              </div>
              <div className={css.planName}>Premium</div>
            </div>
            <div className={css.divider}></div>
            <div className={css.feature}>
              <img src={check} />
              Massagem A
            </div>
            <div className={css.feature}>
              <img src={check} />
              Massagem B
            </div>
            <div className={css.feature}>
              <img src={check} />
              Massagem C
            </div>
            <div className={css.feature}>
              <img src={check} />
              Massagem D
            </div>
            <div className={`${css.feature} ${css.inactive}`}>
              <img src={iconX} />
              Massagem E
            </div>
            <div className={`${css.feature} ${css.inactive}`}>
              <img src={iconX} />
              Massagem F
            </div>
            <button className={css.cta}>Contratar</button>
          </div>
          <div className={css.priceColumn}>
            <div className={css.priceHeader}>
              <div className={css.price}>
                <div className={css.dollarSign}>R$</div>
                50
                <div className={css.perMonth}>/mo</div>
              </div>
              <div className={css.planName}>Premium plus</div>
            </div>
            <div className={css.divider}></div>
            <div className={css.feature}>
              <img src={check} />
              Massagem A
            </div>
            <div className={css.feature}>
              <img src={check} />
              Massagem B
            </div>
            <div className={css.feature}>
              <img src={check} />
              Massagem C
            </div>
            <div className={css.feature}>
              <img src={check} />
              Massagem D
            </div>
            <div className={css.feature}>
              <img src={check} />
              Massagem E
            </div>
            <div className={css.feature}>
              <img src={check} />
              Massagem F
            </div>
            <button className={css.cta}>Contratar</button>
          </div>
        </section>
      </div>
    )
  }
}
