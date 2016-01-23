//REALLY need to fix the way the map rerenders

var TravelForm = React.createClass({
    getInitialState: function() {
        return {
                email: '',
                origin: '16320 E. Clovermead St, Covina CA 91722',
                destination: '',
                phone_number: ''
        }
    },
    handleEmailChange: function(e) {
        this.setState({email: e.target.value});
    },
    handleOriginChange: function(e) {
        this.setState({origin: e.target.value});
    },
    handleDestinationChange: function(e) {
        this.setState({destination: e.target.value});
    },
    handlePhoneNumberChange: function(e) {
        this.setState({phone_number: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.setState({
            email: '',
            origin: '',
            destination: '',
            phone_number: ''
        })
    },
    render: function() {
        return (
          <div>
          <div className="col-md-6">
              <form className="travelForm">
                 <strong> Email: </strong>
                 <input 
                  type="text" 
                  placeholder="Your email" 
                  value={this.state.email}
                  className="form-control"
                  onChange={this.handleEmailChange} />
                  <br />
                  <strong> Origin: </strong>
                  <input 
                   type="text"
                   placeholder="Coming from?"
                   value={this.state.origin}
                   className="form-control"
                   id="origin" 
                   onChange={this.handleOriginChange} />
                   <br />
                  <strong> Destination: </strong>
                  <input
                   type="text"
                   placeholder="Going to?"
                   value={this.state.destination}
                   className="form-control" 
                   onChange={this.handleDestinationChange} />
                   <br />
                  <strong> Phone Number: </strong>
                  <input
                   type="text"
                   placeholder="Phone Number"
                   value={this.state.phone_number}
                   className="form-control" 
                   onChange={this.handlePhoneNumberChange} />
                   <br />
                   <strong>Choose Days to be Reminded:</strong>
                   <select multiple className="form-control">
                     <option>Monday</option>
                     <option>Tuesday</option>
                     <option>Wednesday</option>
                     <option>Thursday</option>
                     <option>Friday</option>
                     <option>Saturday</option>
                     <option>Sunday</option>
                   </select>
                   <br />
                   <strong> What Time? </strong>
                   <input 
                   type="time"
                   className="form-control" />
                   <br />
                  <input type="submit" className="btn btn-primary" value="Remind Me!" />
              </form>
            </div>
            <div className="col-md-6">
              <Map origin={this.state.origin} />
            </div>
          </div>
        );
    } 
});

var Map = React.createClass({
  getInitialState: function() {
    return {
      map: '',
      origin: '',
      destination: ''
    }
  },
  initialize: function() {
    var lat = parseFloat(33.9953056);
    var lng = parseFloat(-118.4766201); 
    var myPosition = new google.maps.LatLng(lat,lng);
    var mapOptions = { 
     center: myPosition,
     zoom: 16
    };
    this.state.map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
  },
  componentDidMount: function(){
    this.initialize();
  },
  componentWillUpdate: function() {
    var geocoder = new google.maps.Geocoder();
    var map = this.state.map;
    var origin = this.state.origin;
    // if (geocoder) {
    //   geocoder.geocode({'address': this.props.origin}, function(results, status) {
    //     if (status == google.maps.GeocoderStatus.OK){
    //       if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
    //         //map.setCenter(results[0].geometry.location);
    //         console.log(results[0].geometry);
    //       }
    //     }
    //   });
    // }
    geocoder.geocode( { 'address': this.props.origin}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0].partial_match){
          console.log(inaccurate);
        }
        var lat = parseFloat(results[0].geometry.viewport.R.R);
        var lng = parseFloat(results[0].geometry.viewport.j.R); 
        var myPosition = new google.maps.LatLng(lat,lng);
        console.log(results);
        map.setCenter(myPosition);
        map.setZoom(16);
        origin = new google.maps.Marker({
          position: myPosition,
          map: map,
          title: 'Hello World!'
        });
      }
    });
    //console.log(myPosition);
    //this.state.map.setCenter(myPosition);
  },
  render:function(){
    return <div className="map"/>
  }
});

ReactDOM.render(
    <TravelForm/>,
    document.getElementById('content')
);
