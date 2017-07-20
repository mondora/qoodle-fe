 import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import ListQoodleElement from "components/ListQoodleElement";
/////////////List Actions


class ListPage extends Component {

    constructor() {
        super();
        this.state = {
            Qoodle: []
        };
    }


        componentDidMount()
    {



    var url = 'http://localhost:4567/qoodles';
    var myInit = {
          method: 'get',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
        };

    fetch(url, myInit).
  then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw new Error('Ooops...something went wrong.');
    }
    })
    .then(function(data) {
        data.forEach( (ele)=>
        ele.dataChiusura = new Date(ele.dataChiusura).toDateString());;
        { this.setState({ Qoodle: data });}
    }
    .bind(this))
    .catch((error) => { console.error(error); });




    }





    open(){
      {alert("partecipa al qoodle")}
    }

    details()
    {
      {alert("visualizza dettagli")}
    }

    renderListQoodleElements () {
      return this.state.Qoodle.map(element => (
        <div className="col" key={element.id.toString()} id ={element.id}>
          <ListQoodleElement
            id={element.id}
            title={element.titolo}
            partecipants={element.partecipanti}
            description={element.descrizione}
            closingDate={element.dataChiusura.toString()}
            openIt={this.open.bind(this)}
            details={this.details.bind(this)}
            />
      </div>
      ));
    }






    render()
    {
      var d = new Date(2017, 5, 22);
      var n = d.toString();

      var testDate = new Date();
      testDate = new Date( (testDate.getTime() - 100000));



      return (

        <div id="list">
          <h1 ><center>Lista di tutti i Qoodle</center></h1>

          <div className="row">
            {this.renderListQoodleElements()}
          </div>

        </div>
        )
    }
}

export default ListPage;
