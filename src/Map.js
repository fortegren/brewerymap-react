
// SET UP MAP
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Set the map variable
/*const myMap = L.map('map');

// Load the basemap
const myBasemap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'});


// Add basemap to map id
myBasemap.addTo(myMap);

// Set view of the map
myMap.setView([38.63988682268097,-90.26203421992685], 12);*/


const Map = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
        
    )
}

export default Map;


/*<div id="map">

            <button class="button filters" id="delivery" type="buttons">Delivery Only</button>
            
            <button class="button filters" id="open" type="buttons">Open Now</button>

            <div class="dropdown">
            <button class="dropbutton cuisinebutton">Cuisine</button>
                <div id="cuisineDropdown" class="dropdown-content">
                    <p class="cuisine filters" id="all">Show All</p>
                </div>
            </div>
            <div class="dropdown">
            <button class="dropbutton typebutton">Category</button>
                <div id="typeDropdown" class="dropdown-content">
                    <p class="type filters" id="all">Show All</p>
                    <p class="type filters" id="Restaurant">Restaurants</p>
                    <p class="type filters" id="College">Colleges</p>
                    <p class="type filters" id="Brewery">Breweries</p>
                </div>
            </div>
            <div class="resultList">
                <div id="heading">Results</div>
                    <ul class="results" id="result-list"></ul>
            </div>
        </div>*/