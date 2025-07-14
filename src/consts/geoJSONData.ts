import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson"

export const creerCrearGeoJSON: FeatureCollection<Geometry, GeoJsonProperties> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Centro Comercial La Estación",
        amenity: "Centro Comercial",
        popupContent: "Creer y Crear - Ibagué",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-75.231993, 4.442198], // esquina noroccidental
            [-75.23167, 4.442188], // noreste
            [-75.23165, 4.441931], // sureste
            [-75.231975, 4.441925], // suroeste
            [-75.231993, 4.442198], // cerrar polígono
          ],
        ],
      },
    },
  ],
}
