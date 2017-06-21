import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {Button, FormControl, Image} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import ListQoodleElement from 'components/ListQoodleElement';

chai.use(sinonChai);

describe('ListQoodleElement', () => {

    it('check default value of counter, and id', () =>
    {
      const element = shallow(
        <ListQoodleElement
          id={1}
          title={"Gas di Novembre"}
          partecipants={6}
          description={"quaququa anche la per un acquisto migliore"}
          closingDate={new Date(2017, 5, 22, 12).toString()}
          openIt={sinon.spy()}
          />);

      expect(element.find('h2').text()).to.be.equal("Gas di Novembre");
    });

    it('renders a p with number of partecipants', () =>
    {
      const element = shallow(
        <ListQoodleElement
          id={1}
          title={"Gas di Novembre"}
          partecipants={6}
          description={"quaququa anche la per un acquisto migliore"}
          closingDate={new Date(2017, 5, 22, 12).toString()}
          openIt={sinon.spy()}
          />);
        expect(element.find('#one').find('p').text()).to.be.equal("partecipanti: 6");
    });
/*
    it('renders i tag with specific id', () =>
    {
      const element = shallow(
        <QoodleElement
          name={'Banana'}
          price={13.5}
          coin={'$'}
          um={'kg'} />);
    expect(element.findWhere(n => n.prop('className') === 'fa fa-minus')).to.have.length(1);
    expect(element.findWhere(n => n.prop('className') === 'fa fa-plus')).to.have.length(1);
    expect(element.findWhere(n => n.prop('id') === 'counter')).to.have.length(1);

  });

  it('renders all i tag', () =>
  {
    const element = shallow(
      <QoodleElement
        name={'Banana'}
        price={13.5}
        coin={'$'} um={'kg'} />);
  expect(element.find('i')).to.have.length(3);
  });


  it('renders image tag', () =>
  {
    const element = shallow(
      <QoodleElement
        name={'Banana'}
        price={13.5}
        coin={'$'} um={'kg'} />);
  expect(element.find(Image)).to.have.length(1);
  });



  it('check counter ', () =>
  {
    const element = shallow(<QoodleElement imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);

    expect(element.instance().props.counter).to.be.equal(0);
  });

  it('renders a title of the element', () =>
  {
    const element = shallow(<QoodleElement imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);
    expect(element.findWhere(n => n.prop('id') === 'title').text()).to.be.equal('banana');

  });

  it('renders a price of the element', () =>
  {
    const element = shallow(<QoodleElement imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);
    expect(element.find('p').text()).to.be.equal('35 $ al kg');


  });

  it('renders a counter of the element', () =>
  {
    const element = shallow(<QoodleElement imgUrl="_assets/img/bana.png" name="banana" coin="$" um="kg" price={35} />);
    expect(element.findWhere(n => n.prop('id') === 'counter').text()).to.be.equal('0');
  });


  describe('when user clicks plus button', () => {

     it('calls increase function providing an id', () => {
        const Inc = sinon.spy();
        const element = shallow(<QoodleElement id="id value"
        imgUrl="_assets/img/bana.png" name="banana" coin="$"
        um="kg" um="kg" price={35} counter={10} onInc={Inc}/>);


        expect(element.findWhere(n => n.prop('className') === 'fa fa-plus')).to.have.length(1);

        element.findWhere(n => n.prop('className') === 'fa fa-plus').simulate('click', {target: {value: 'id cane'}});
  //qui praticamente simulando un click non ricambio lo stato.
  //quindi l'id vale sembre quello con cui ho creato l'elemento

        expect(Inc).has.been.calledWith('id value');
    });
  });

  describe('when user clicks plus button', () => {

    it('calls increase function providing an id', () => {
      const Dec = sinon.spy();
      const element = shallow(
      <QoodleElement
        id="id value"
        imgUrl="_assets/img/bana.png"
        name="banana"
        coin="$"
        um="kg"
        um="kg"
        price={35}
        counter={10}
        onDec={Dec}/>);


      expect(element.findWhere(n => n.prop('className') === 'fa fa-minus')).to.have.length(1);

      element.findWhere(n => n.prop('className') === 'fa fa-minus').simulate('click', {target: {value: 'id cane'}});
//qui praticamente simulando un click non ricambio lo stato.
//quindi l'id vale sembre quello con cui ho creato l'elemento

      expect(Dec).has.been.calledWith('id value');




    });


  });

*/
});