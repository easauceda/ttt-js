
var Map = React.createClass({
  initialize: function() {
    var lat = parseFloat(33.9953056);
    var lng = parseFloat(-118.4766201); 
    var myPosition = new google.maps.LatLng(lat,lng);
    var mapOptions = { 
     center: myPosition,
     zoom: 8
    };
    var map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
  },
  componentDidMount: function(){
this.initialize();
  },
  render:function(){
    return <div className="map"/>
  }
});

ReactDOM.render(
    <Map />,
    document.getElementById('map')
    );