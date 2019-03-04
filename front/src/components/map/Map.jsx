import * as React from "react";
import { Map } from "@esri/react-arcgis";

export default props => (
  <Map
    style={{ width: "100vw", height: "100vh" }}
    mapProperties={{ basemap: 'dark-gray-vector' }}
    viewProperties={{
      center: [-3.70325, 40.4167],
      zoom: 7
    }}
  />
);
