"use client";

import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image from "next/image";

export type MarkerData = {
  id: number;
  name: string;
  position: [number, number];
  description?: string;
  category?: string;
  image?: string;
};

type Props = {
  markers: MarkerData[];
  height?: number;
};

function MyLocationMarker({ position }: { position: [number, number] | null }) {
  if (!position) return null;

  return (
    <Marker
      position={position}
      icon={L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [35, 35],
        iconAnchor: [17, 35],
      })}
    >
      <Popup>
        <div className="p-2 text-center">
          <div className="text-2xl">📍</div>
          <div className="font-bold text-lg text-blue-700">Lokasi Anda</div>
          <div className="mt-1 text-sm text-gray-600">
            <strong>Lat:</strong> {position[0].toFixed(5)} <br />
            <strong>Lng:</strong> {position[1].toFixed(5)}
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

function LocateButton({ position }: { position: [number, number] | null }) {
  const map = useMap();
  return (
    <button
      onClick={() =>
        position
          ? map.setView(position, 12)
          : alert("Lokasi belum tersedia. Aktifkan izin lokasi.")
      }
      className="absolute z-[1000] top-4 right-4 bg-white shadow-md px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
    >
      📍 Lokasi Saya
    </button>
  );
}

export default function LeafletMap({ markers, height = 460 }: Props) {
  const [mounted, setMounted] = useState(false);
  const [userPosition, setUserPosition] = useState<[number, number] | null>(
    null
  );
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setUserPosition([pos.coords.latitude, pos.coords.longitude]);
          },
          (err) => {
            console.warn("Gagal ambil lokasi:", err.message);
          }
        );
      }
      setMounted(true);
    }
  }, []);

  const bounds = useMemo(() => {
    if (!markers?.length) return null;
    const b = L.latLngBounds(markers.map((m) => m.position));
    if (userPosition) b.extend(userPosition);
    return b;
  }, [markers, userPosition]);

  if (!mounted) {
    return (
      <div
        style={{ height }}
        className="w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse"
      />
    );
  }

  const defaultCenter: [number, number] = [-7.754, 113.215];

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 z-[1]">
      <MapContainer
        center={defaultCenter}
        zoom={12}
        bounds={bounds ?? undefined}
        className="w-full"
        style={{ height }}
      >
        <TileLayer
          attribution={
            'Data peta © <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          }
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((m) => (
          <Marker
            key={m.id}
            position={m.position}
            eventHandlers={{
              click: () => setSelectedMarker(m),
            }}
          />
        ))}

        <MyLocationMarker position={userPosition} />
        <LocateButton position={userPosition} />
      </MapContainer>

      {/* Modal Detail Wisata */}
      {selectedMarker && (
        <div className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-md w-full shadow-lg overflow-hidden relative">
            {/* Tombol close di pojok */}
            <button
              onClick={() => setSelectedMarker(null)}
              className="absolute top-2 right-2 bg-white rounded-full shadow-md w-8 h-8 flex items-center justify-center hover:bg-gray-100"
            >
              ✕
            </button>

            {selectedMarker.image && (
              <div className="relative w-full h-48">
                <Image
                  src={selectedMarker.image}
                  alt={selectedMarker.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-4">
              <h2 className="text-xl font-bold">{selectedMarker.name}</h2>
              {selectedMarker.category && (
                <p className="text-sm text-gray-500">
                  {selectedMarker.category}
                </p>
              )}
              {selectedMarker.description && (
                <p className="mt-2 text-gray-700">
                  {selectedMarker.description}
                </p>
              )}
              <p className="mt-2 text-xs text-gray-500">
                Koordinat: {selectedMarker.position[0].toFixed(5)},{" "}
                {selectedMarker.position[1].toFixed(5)}
              </p>

              <button
                onClick={() => setSelectedMarker(null)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
