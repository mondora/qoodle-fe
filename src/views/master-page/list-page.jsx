import React, {Component} from "react";
import ListQoodleElement from "../../components/ListQoodleElement";



class ListPage extends Component {

    constructor() {
        super();
        this.state = {
            Qoodle: [],
        };
    }


        componentDidMount()
    {

      console.log("test" + process.env.REACT_APP_SPECIFIC_ID );
      if(sessionStorage.getItem("email").includes("carlo"))
      {
        console.log(this.state.auth);

          var url = 'http://' + process.env.REACT_APP_SPECIFIC_ID + ':4567/qoodles';
          var myInit = {
                method: 'get',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json'
                },
              };

          fetch(url, myInit)
          .then((res) => {
            if (res.status >= 200 && res.status < 300) {
              return res.json();
            } else {
              throw new Error('Ooops...something went wrong.');
            }
            })
            .then(function(data) {
                data.forEach( (ele)=>
                ele.closingDate = new Date(ele.closingDate).toDateString());;
                 this.setState({ Qoodle: data });
            }
            .bind(this))
            .catch((error) => { console.error(error); });
        }
        else {
          alert("NON PUOI ACCEDERE");
          window.location = "/";
        }



    }





    open(link)
    {
         window.location = link
    }

    details(link)
    {
      window.location = link
    }

    renderListQoodleElements () {
      return this.state.Qoodle.map(element => (
        <div className="col" key={element.qoodlesId.toString()} id={element.qoodlesId}>
          <ListQoodleElement
            id={element.qoodlesId}
            title={element.title}
            partecipants={element.partecipants}
            description={element.description}
            closingDate={element.closingDate.toString()}
            backgroundImage={element.backgroundImage}
            openIt={this.open.bind(this, "#/qoodle/" + element.qoodlesId)}
            details={this.details.bind(this, "#/details/" + element.qoodlesId)}
            />
      </div>
      ));
    }






    render()
    {

      return (

        <div id="list">

          <div className="row">
            {this.renderListQoodleElements()}
          </div>

        </div>
        )
    }
}

export default ListPage;
