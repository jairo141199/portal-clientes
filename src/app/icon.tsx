import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#0A1F44",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          paddingLeft: 7,
        }}
      >
        <div style={{ width: 11, height: 4, borderRadius: 2, background: "#FACC15" }} />
        <div style={{ width: 15, height: 4, borderRadius: 2, background: "#3B82F6" }} />
        <div style={{ width: 18, height: 4, borderRadius: 2, background: "#EF4444" }} />
      </div>
    ),
    { ...size },
  );
}
