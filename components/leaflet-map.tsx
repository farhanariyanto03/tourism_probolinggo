"use client"

import { useEffect, useMemo, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

export type MarkerData = {
  id: number
  name: string
  position: [number, number]
  description?: string
  category?: string
}

type Props = {
  markers: MarkerData[]
  height?: number
}

export default function LeafletMap({ markers, height = 460 }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window !== "undefined") {
      // Set default marker icon paths from CDN
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      })

      setMounted(true)
    }
  }, [])

  // Compute bounds to fit all markers
  const bounds = useMemo(() => {
    if (!markers?.length) return null
    const b = L.latLngBounds(markers.map((m) => m.position))
    return b
  }, [markers])

  if (!mounted) {
    return (
      <div
        style={{ height }}
        className="w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse"
        aria-label="Peta sedang dimuat"
      />
    )
  }

  // Default center: Probolinggo City
  const defaultCenter: [number, number] = [-7.754, 113.215]

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
      <MapContainer
        center={defaultCenter}
        zoom={12}
        bounds={bounds ?? undefined}
        className="w-full"
        style={{ height }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution={'Data peta © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> kontributor'}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((m) => (
          <Marker key={m.id} position={m.position}>
            <Popup>
              <div className="text-sm">
                <div className="font-semibold">{m.name}</div>
                {m.category && <div className="text-gray-600">{m.category}</div>}
                {m.description && <div className="mt-1 text-gray-700">{m.description}</div>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
