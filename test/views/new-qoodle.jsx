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

/*  it('set state providing new title', () =>
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


  it('renders a button to add Column', () =>
  {
      const element = shallow (<NewQoodle />);
      expect(
          element.find(Button)).to.exist;
      expect(element.find(Button).findWhere(n => n.prop('className') == 'cent')).to.have.length(1);


  });

  it('calls open function when click Button', () =>
  {
    const element = shallow(<NewQoodle />);
    element.find(Button).simulate('click');

    expect(element.state('showColumnModal')).to.be.true

  });

  describe('update state when calls addNewColumn()', () => {

    it('increment number of columns', () =>
    {
      const element = shallow(<NewQoodle />);
      const oldNrColumns = element.state('columns').length;
      element.instance().handleAddColumn('Name',
      1,
      12435,
      'um',
      'coin');
      expect(element.state('columns').length).to.be.equal(oldNrColumns + 1);

  });


  it('call of handleAddColumn have the correct parameters', () =>
  {
    const element = shallow(<NewQoodle />);
    const oldNrColumns = element.state('columns').length;
    element.instance().handleAddColumn = sinon.spy();
    element.instance().handleAddColumn('Name',
    1,
    12435,
    'um',
    'coin');

    expect(element.instance().handleAddColumn).calledWith('Name',
    1,
    12435,
    'um',
    'coin');

});


  it('changes value of showColumnModal over the time', () =>
  {
    const element = shallow(<NewQoodle />);
    expect(element.state('showColumnModal')).to.be.false;
    element.find(Button).simulate('click');
    expect(element.state('showColumnModal')).to.be.true;
    element.instance().handleAddColumn('Name',
    1,
    12435,
    'um',
    'coin');
    expect(element.state('showColumnModal')).to.be.false;



  });
});
*/
});
