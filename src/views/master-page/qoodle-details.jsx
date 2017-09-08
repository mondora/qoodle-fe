import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';




export default class QoodleDetails extends Component {



  constructor(){
    super();

    this.state =
    {
      nome : "",//nome qoodle che mi hanno passato
      usrname: "",
      realName: "",
      elements: null
    }
  }




  componentDidMount()
  {
    var id;
    if (typeof window !== 'undefined')
      id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

    var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/details/' + id;
    var myInit = {
          method: 'get',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
        };

        var nameLogged = "exampleUser"; var realNameLogged = "realExample";
        if (typeof(Storage) !== "undefined")
        {
          nameLogged = localStorage.getItem("email");
          realNameLogged = localStorage.getItem("name");
        }


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
          username: nameLogged,
          realName: realNameLogged
          });
    }
    .bind(this))
    .catch((error) => { console.error(error); });;

  }




  renderPeople(whos)
  {
    return (   whos.map( (who) => <div key={who.name}> - {who.realName}  ne ha scelti: {who.count}  </div>)   );
  }


  renderElement()
  {
    var detailsList= "questo qoodle non ha elementi";
    if(this.state.elements != null)
      detailsList = (this.state.elements.map( (ele) => <div id="detailsElement" key={ele.what}> <div className="elements"> l'elemento ( {ele.what} ) è stato scelto scelto complessivamente:  {ele.whos.reduce( (pv, cv) => pv + cv.count , 0)}  volte</div> <div>{this.renderPeople(ele.whos)}</div>  </div> ));

    return (
    <div>
      {detailsList}
    </div>);
  }

  render()
  {
    return(
        <div>
          {this.renderElement()}
        </div>
    )
  }


}
