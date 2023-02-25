import React, { useEffect, useRef } from "react";

const generateGrid = (origin, widthX, widthY) => {
  const { x, y } = origin;
  const centerDistX = widthX / 2;
  const centerDistY = widthY / 2;
  const plot1 = {
    pixels: [
      { lat: x + centerDistX, lng: y + centerDistY * 3 },
      {
        lat: x + centerDistX,
        lng: y + centerDistY * 5,
      },
    ],
    layout: [
      { lat: x, lng: y + widthY },
      { lat: x + widthX, lng: y + widthY },
      { lat: x + widthX, lng: y + 3 * widthY },
      { lat: x, lng: y + 3 * widthY },
    ],
  };
  const plot2 = {
    pixels: [
      {
        lat: x + centerDistX * 3,
        lng: y + centerDistY,
      },
    ],
    layout: [
      { lat: x + widthX, lng: y },
      { lat: x + 2 * widthX, lng: y },
      { lat: x + 2 * widthX, lng: y + widthY },
      { lat: x + widthX, lng: y + widthY },
    ],
  };
  const plot3 = {
    pixels: [
      {
        lat: x + centerDistX * 3,
        lng: y + centerDistY * 3,
      },
      {
        lat: x + centerDistX * 5,
        lng: y + centerDistY * 3,
      },
    ],
    layout: [
      { lat: x + widthX, lng: y + widthY },
      { lat: x + 3 * widthX, lng: y + widthY },
      { lat: x + 3 * widthX, lng: y + 2 * widthY },
      { lat: x + widthX, lng: y + 2 * widthY },
    ],
  };
  const plot4 = {
    pixels: [
      {
        lat: x + centerDistX * 3,
        lng: y + centerDistY * 5,
      },
    ],
    layout: [
      { lat: x + widthX, lng: y + 2 * widthY },
      { lat: x + 2 * widthX, lng: y + 2 * widthY },
      { lat: x + 2 * widthX, lng: y + 3 * widthY },
      { lat: x + widthX, lng: y + 3 * widthY },
    ],
  };
  const plot5 = {
    pixels: [
      { lat: x + centerDistX, lng: y + centerDistY * 7 },
      { lat: x + 3 * centerDistX, lng: y + centerDistY * 7 },
      { lat: x + 5 * centerDistX, lng: y + centerDistY * 7 },
      { lat: x + 5 * centerDistX, lng: y + centerDistY * 5 },
    ],
    layout: [
      { lat: x, lng: y + 3 * widthY },
      { lat: x + 2 * widthX, lng: y + 3 * widthY },
      { lat: x + 2 * widthX, lng: y + 2 * widthY },
      { lat: x + 3 * widthX, lng: y + 2 * widthY },
      { lat: x + 3 * widthX, lng: y + 4 * widthY },
      { lat: x, lng: y + 4 * widthY },
    ],
  };
  const plot6 = {
    pixels: [
      { lat: x + centerDistX * 7, lng: y + centerDistY * 7 },
      { lat: x + centerDistX * 7, lng: y + centerDistY * 5 },
      { lat: x + centerDistX * 7, lng: y + centerDistY * 3 },
      { lat: x + centerDistX * 7, lng: y + centerDistY },
    ],
    layout: [
      { lat: x + 3 * widthX, lng: y },
      { lat: x + 4 * widthX, lng: y },
      { lat: x + 4 * widthX, lng: y + 4 * widthY },
      { lat: x + 3 * widthX, lng: y + 4 * widthY },
    ],
  };
  const plots = [
    plot1.layout,
    plot2.layout,
    plot3.layout,
    plot4.layout,
    plot5.layout,
    plot6.layout,
  ];
  // const plotWithPixelHash = _.map(plots, (plot) => {
  //   const pixels = _.map(plot.pixels, (pixel) => {
  //     const { lat, lng } = pixel;
  //     const hash = getCoordinateHash(lat, lng);
  //     return { hash, lat, lng };
  //   });
  //   return { layout: plot.layout, pixels };
  // });
  // return plotWithPixelHash;
  return plots;
};

const generatePolygon = (path, color) => {
  return new window.google.maps.Polygon({
    paths: path,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.35,
  });
};
function Map() {
  const mapRef = useRef(null);
  useEffect(() => {
    const mapOptions = {
      center: { lat: 12.903105, lng: 77.652023 },
      zoom: 18,
      scaleControl: true,
    };
    const widthX = 0.00009;
    const widthY = 0.0001;
    const origin = {
      x: 12.903202,
      y: 77.651972,
    };
    const plots = generateGrid(origin, widthX, widthY);
    const map = new window.google.maps.Map(mapRef.current, mapOptions);
    const colors = [
      "#ffead0",
      "#fbadaf",
      "#f76f8e",
      "#96616b",
      "#37505c",
      "#113537",
    ];

    const polygon1 = generatePolygon(plots[1], colors[1]);
    const polygon2 = generatePolygon(plots[2], colors[2]);
    const polygon3 = generatePolygon(plots[3], colors[3]);
    const polygon4 = generatePolygon(plots[4], colors[4]);
    const polygon5 = generatePolygon(plots[5], colors[5]);
    const polygon6 = generatePolygon(plots[6], colors[6]);

    polygon1.setMap(map);
    polygon2.setMap(map);
    polygon3.setMap(map);
    polygon4.setMap(map);
    polygon5.setMap(map);
    polygon6.setMap(map);
  }, []);

  return <div ref={mapRef} style={{ height: "100%", width: "100%" }} />;
}

export default Map;
