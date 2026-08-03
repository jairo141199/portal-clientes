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
          borderRadius: 9,
          background: "#0A1F44",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 14,
            height: 11,
            borderTop: "2.5px solid white",
            borderLeft: "2.5px solid white",
            borderRight: "2.5px solid white",
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
