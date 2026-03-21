import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Edward Yi — I build AI systems that ship.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [soraBold, profileImg] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/sora/v17/xMQOuFFYT72X5wkB_18qmnndmSfSmX-K.ttf"
    ).then((res) => res.arrayBuffer()),
    readFile(join(process.cwd(), "public", "profile.png")).then(
      (buf) => `data:image/png;base64,${buf.toString("base64")}`
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#08080a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          fontFamily: "Sora",
          padding: "0 80px",
        }}
      >
        {/* Profile photo — circular, secondary to text */}
        <div
          style={{
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            marginRight: "60px",
            display: "flex",
          }}
        >
          <img
            src={profileImg}
            width={280}
            height={280}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text content — dominant */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          {/* Domain label */}
          <div
            style={{
              fontSize: 18,
              letterSpacing: "6px",
              color: "#c9a84c",
              textTransform: "uppercase" as const,
              marginBottom: "24px",
            }}
          >
            EDWARDYI.DEV
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: "#e8e8e8",
              lineHeight: 1.0,
              letterSpacing: "-3px",
            }}
          >
            I build AI systems
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-3px",
              display: "flex",
            }}
          >
            <span style={{ color: "#e8e8e8" }}>that{"\u00A0"}</span>
            <span style={{ color: "#c9a84c" }}>ship.</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Sora",
          data: soraBold,
          style: "normal" as const,
          weight: 800 as const,
        },
      ],
    }
  );
}
