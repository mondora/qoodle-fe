import React, {Component} from "react";
import PropTypes from 'prop-types';
import Pie from "../../components/Pie.jsx";






export default class QoodleDetails extends Component {



  constructor(){
    super();

    this.state =
    {
      nome : "",//nome qoodle che mi hanno passato
      email: "",
      realName: "",
      elements: [],
      sector: -1
    }
  }




  componentDidMount()
  {

    var token;
    var client;
    var email = "exampleMail";
    var realNameLogged = "exampleName";


    if (typeof(Storage) !== "undefined")
    {
      token = sessionStorage.getItem("Idtoken");
      client = sessionStorage.getItem("IdClient");
      email = sessionStorage.getItem("email");
      realNameLogged = localStorage.getItem("name");
    }

        var id;
        if (typeof window !== 'undefined')
          id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/details/' + id;
        var myInit = {
              method: 'get',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
                'id_token': token,
                'id_client': client,
                'email': email
              },
            };



        fetch(url, myInit)
        .then( function(response) {
          if(response.ok)
          return response.json();
          throw new Error("Network response was not ok")
        })
        .then(function(data)
            { this.setState({
              nome: data.nome,
              elements: data.elements,
              email: email,
              realName: realNameLogged
              });
        }
        .bind(this))
        .catch((error) => { console.error(error); });;

  }


  handleClickOnSector(sect) {
    console.log("DENTROPIE SETTORE:",sect);

    this.setState({sector: sect});
  }

  renderElementPie()
  {
    var sector = this.state.sector;//tipico
    var detailsList = this.renderPart();

    //console.log("PRIMA", detailsList[sector])

        //riduco il settore chi ha fatto quelle scelte
    var tot = detailsList[sector].whos.reduce( (pv, el) => pv + el.how , 0);
    console.log("TOTALE: ", tot);
    var sliceList = [];

    var palette=["#ff4e50", "#fc913a", "#f9d62e", "#eae374", "#e2f4c7"];

    if (detailsList[sector].whos.length > 0 && tot !== 0)
    {
            var i = 0;
            detailsList[sector].whos.forEach( (el) =>
               sliceList.push( {
                    label: el.who,
                    value: Math.round(el.how / tot * 100, -1),
                    color: palette[(i++) % detailsList[sector].whos.length]
                  }) );

            console.log("DOPO slice", sliceList);
            return(  <Pie data={sliceList} tot={tot} element={detailsList[sector].label} back={this.returnAtQoodle.bind(this)}/>  );
        }
        else{ return <center><h2>NESSUNO HA ANCORA EFFETTUATO SCELTE SIGNIFICATIVE</h2></center>}

  }

  renderQoodle()
  {

        var detailsList = this.renderPart();

        //console.log("PRIMA", detailsList)

        var tot = detailsList.reduce( (pv, el) => pv + el.value , 0);


        var sliceList = [];

        var palette=["#ff4e50", "#fc913a", "#f9d62e", "#eae374", "#e2f4c7"];

        if (detailsList.length > 0 && tot !== 0)
        {
                var i = 0;
                detailsList.forEach( (el) =>
                   sliceList.push( {
                        label: el.label,
                        value: Math.round(el.value / tot * 100, -1),
                        color: palette[(i++) % detailsList.length]
                      }) );

                //console.log("PRIMA", sliceList);
                return( <Pie data={sliceList} onSectorClick={this.handleClickOnSector.bind(this)} tot={tot} /> );
            }
            else{ return <center><h2>NESSUNO HA ANCORA EFFETTUATO SCELTE SIGNIFICATIVE</h2></center>}

  }

  renderPart(){
    var detailsList = [];
    console.log(this.state.elements);

    if(this.state.elements.length > 0)
      this.state.elements.forEach( (ele) =>
      detailsList.push( {
        label: ele.what,
        value: ele.whos.reduce( (pv, cv) => pv + cv.count , 0),
        whos: this.renderPeople(ele.whos),
      })
    );

    return detailsList;
  }




  renderPeople(whos)
  {
    var detailsList= [];

    whos.map( (who) =>
        detailsList.push(
              {
                who:  who.realName,
                how:  who.count
              }) );
    return (  detailsList  );
  }

  returnAtQoodle()
  {
    this.setState({ sector: -1});
  }


  render()
  {



    if(this.state.sector === -1)
      return <div className="body">{this.renderQoodle()}</div>;
    else
      return (
              <div className="body">
                {this.renderElementPie()}
              </div>
            );

  }




}
