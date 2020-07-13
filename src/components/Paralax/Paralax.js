import React, { Component } from 'react';

import './Paralax.css';
import Cards from '../Cards/Cards';
import Plan from '../Plan/Plan';
import Talk from '../Talk/Talk';
import BtnTopo from '../../img/topo.png';
import Footer from '../Footer/Footer';
import Minhas from '../MinhasEspec/Minhas';

export default class Paralax extends Component {
  render() {
    return (
      <>
        <div class="parallax"></div>
        <div className="scrol" id="quemSou">
          <div className="quemSou">
            <h3>QUEM SOU</h3>
          </div>
          <Cards />
        </div>

        <div class="parallax"></div>
        <div className="scrol" id="minhasEspec">
          <div className="especialidades">
            <h3>MINHAS ESPECIALIDADES</h3>
          </div>
          <div className="cardContainer">
            <Minhas />
          </div>
        </div>

        <div class="parallax"></div>
        <div className="scrol2" id="price">
          <div className="priceandplan">
            <h3>PLANOS</h3>
            <div className="containerPrice">
              <Plan />
            </div>
          </div>
        </div>
        <div class="parallax"></div>
        <div className="scrol" id="talk">
          <div className="especialidades">
            <h3>FALE COMIGO</h3>
          </div>
          <Talk />
        </div>
        <a href="#"><img src={BtnTopo} id="ictopo" /></a>
        <Footer />
      </>
    )
  }
}
