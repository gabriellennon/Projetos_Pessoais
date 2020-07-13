import React, { Component } from 'react';

import './Cards.css';
import Icon2 from '../../img/me.svg';
import Academico from '../../img/academico1.svg';
import Work from '../../img/work2.svg';


export default class Cards extends Component {
  render() {
    return (
      <div>
        <div className="containerCard">
          <div className="card">
            <div className="face face1">
              <div className="contentCard">
                <img src={Icon2} />
                <h3>Sobre mim</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="contentCard">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, facere sint vel labore dolorum facilis expedita dignissimos asperiores a amet distinctio ratione, eum eaque? Illo perferendis expedita harum aut qui!</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="contentCard">
                <img src={Academico} />
                <h3>Ensino</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="contentCard">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, facere sint vel labore dolorum facilis expedita dignissimos asperiores a amet distinctio ratione, eum eaque? Illo perferendis expedita harum aut qui!</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="contentCard">
                <img src={Work} />
                <h3>Prática</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="contentCard">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, facere sint vel labore dolorum facilis expedita dignissimos asperiores a amet distinctio ratione, eum eaque? Illo perferendis expedita harum aut qui!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
