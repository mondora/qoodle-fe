import chai, {expect} from 'chai';
import {shallow, render} from 'enzyme';
import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import CreateTable from 'components/create-table'
import NewQoodle from 'views/master-page/new-qoodle';
import QoodleElement from 'components/QoodleElement'
import ColumnCreationModal from 'components/ColumnCreationModal'

chai.use(sinonChai);

describe('NewQoodle', () => {

  it('check state default value of Modal',() =>{

    const element = shallow(<NewQoodle />)
    expect(element.state('showColumnModal')).to.be.false;

  });



  it('render 3 elements from state',() =>{

    const element = shallow(<NewQoodle />)

    expect(element.find(QoodleElement)).to.have.length(element.state('elements').length);

  });



  it('set state providing new title', () =>
  {

    const handleOnChangeTitle = sinon.spy();
    const element = shallow(<NewQoodle onAdd={handleOnChangeTitle} />);



    element
        .find(FormControl)
        .findWhere(n => n.prop('placeholder') === 'Title')
        .simulate('change', {target: {value: 'titlevalue'}});

    expect(element.state('title')).to.be.equal('titlevalue');

  });



  it('renders an input box fot Title', () => {
      const element = shallow(<NewQoodle />);
      expect(
          element.find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Title')
      ).to.have.length(1);
  });

  it('renders an input box fot Description', () => {
      const element = shallow(<NewQoodle />);
      expect(
          element.find(FormControl)
          .findWhere(n => n.prop('placeholder') === 'Description')
      ).to.have.length(1);
  });


  it('renders 2 button to add Column, and to save qoodle', () =>
  {
      const element = shallow (<NewQoodle />);
      expect(
          element.find(Button)).to.exist;
      expect(element.find(Button).findWhere(n => n.prop('className') == 'cent')).to.have.length(1);

  });

  it('calls open function when click Button', () =>
  {
    const element = shallow(<NewQoodle />);
    element.find('.cent').simulate('click');

    expect(element.state('showColumnModal')).to.be.true

  });


  describe('update state when calls addNewColumn()', () => {

    it('increment number of columns', () =>
    {
      const element = shallow(<NewQoodle />);
      const oldNrElements = element.state('elements').length;
      element.instance().handleAddElement('Name',
      1,
      12435,
      'um',
      9);
      expect(element.state('elements').length).to.be.equal(oldNrElements + 1);

  });

  it('call of handleAddElement have the correct parameters', () =>
  {
    const element = shallow(<NewQoodle />);
    const oldNrColumns = element.state('elements').length;
    element.instance().handleAddElement = sinon.spy();
    element.instance().handleAddElement('Name',
    1,
    12435,
    'um',
    1.8);

    expect(element.instance().handleAddElement).calledWith('Name',
    1,
    12435,
    'um',
    1.8);

});

/*
  it('changes value of showColumnModal over the time', () =>
  {
    const element = shallow(<NewQoodle />);
    expect(element.state('showColumnModal')).to.be.false;
    element.find(Button).simulate('click');
    expect(element.state('showColumnModal')).to.be.true;
    element.instance().handleAddElement('Name',
    1,
    12435,
    'um',
    20);
    expect(element.state('showColumnModal')).to.be.false;



  });
*/
  });

});
