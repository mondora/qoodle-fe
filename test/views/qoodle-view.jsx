import chai, {expect} from 'chai';
import {shallow, render} from 'enzyme';
import React from 'react';
import {Button, FormControl, Panel} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import QoodleElement from 'components/create-table';
import QoodleView from 'views/master-page/qoodle-view';
import Summary from 'components/Summary';

chai.use(sinonChai);

describe('QoodleView', () => {

  it('check state default number of elements',() =>{

    const element = shallow(<QoodleView />)
    expect(element.state('elements')).to.have.length(9);
  });

  it('check state default name of the first element',() =>{

    const element = shallow(<QoodleView />)
    expect(element.state('elements')[0].name).to.be.equal('Banana');

  });

/*
  it('render the Summary component',() =>{
  const element = shallow(<QoodleView />)
  expect(element.find(Summary)).to.have.length(1);
  });

  it('render Panel with resume',() =>
  {
    const element = shallow(<QoodleView />);
    expect(element.find(Panel).findWhere(n => n.prop('bsStyle') === 'success')).to.have.length(1);
    expect(element.find(Panel).findWhere(n => n.prop('header') === 'Riassunto scelte compiute:')).to.have.length(1);

  });


    it('render Panel content other panel',() =>
    {
      const element = shallow(<QoodleView />);
      //expect(
      element.findWhere(n => n.prop('header') === 'Riassunto scelte compiute:')
      .contains(
        <Panel header = "Procedi all &#39;acquisto" bsStyle="primary" id="BuyPanel">
          <Button bsStyle="primary" onClick={this.PurchaseEnded.bind(this)}>Totale</Button>
        </Panel>)
    //  ).to.equal(true);

      expect(element.findWhere(n => n.prop('header') === 'Riassunto scelte compiute:')
      .children().find(Panel)).to.have.length(1);

    });

    it('render Panel content other panel content Button',() =>{
      const element = shallow(<QoodleView />);
      expect(element.findWhere(n => n.prop('header') === 'Riassunto scelte compiute:')
      .children().find(Panel).find(Button)).to.have.length(1);

      console.log('MI ASPETTO COSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE: ',
      element.findWhere(n => n.prop('header') === 'Riassunto scelte compiute:')
      .children().find(Panel).find(Button).text());
    });
*/



  it('return QoodleElement from relative object using CreateQoodleElement',() =>{
  const element = shallow(<QoodleView />)
  var colonna = {
    name: 'Name',
    min: 0,
    max: 99999,
    umoption: 'kg',
    coinoption: '',
    price: 35,
    counter: 5,
    imgUrl: '_assets/img/bana.png'
  };


    var newQoodleElement = element.instance().Object2QoodleElement(colonna).props;

    expect(JSON.stringify(newQoodleElement) == JSON.stringify(<QoodleElement counter={5}
        id={'Name'}
        imgUrl={'_assets/img/bana.png'} name="Name" coin="€"
        price={35} um="kg" onInc={element.instance().Inc.bind(this)}
        onDec={element.instance().Dec.bind(this)}/>.props)).to.be.true;

    });


  describe('update state when calls Inc(Name)', () => {

    it('Render all QoodleElement',() =>{

      const element = shallow(<QoodleView />)
      expect(element.find('QoodleElement')).to.have.length(element.state('elements').length);
      //why not using find(QoodleElement);
    });
  });



  describe('update state when Inc(Name)', () => {

    it('Increment counter of specific element', () =>
    {
      const element = shallow(<QoodleView />);
      const oldCounter = element.state('elements')[0].counter;
      element.instance().Inc('Banana');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 1);

      element.instance().Inc('Banana');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter + 2);
  });



});

  describe('update state when Dec(Name)', () => {
    it('Decrement counter of specific element ', () =>
    {
      const element = shallow(<QoodleView />);
      const oldCounter = element.state('elements')[0].counter;
      element.instance().Dec('Banana');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -1);

      element.instance().Dec('Banana');
      expect(element.state('elements')[0]['counter']).to.be.equal(oldCounter -2);
    });

});



});
