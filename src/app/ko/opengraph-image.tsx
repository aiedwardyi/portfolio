import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "에드워드 이. 아이디어와 구현 사이, 완성된 가치를 전달합니다.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [pretendardBold, profileImg] = await Promise.all([
    fetch(
      "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Bold.otf"
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
          fontFamily: "Pretendard",
          padding: "0 80px",
        }}
      >
        {/* Profile photo - circular, secondary to text */}
        <div
          style={{
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            marginRight: "60px",
            display: "flex",
          }}
        >
          <img
            src={profileImg}
            width={260}
            height={260}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text content - dominant */}
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

          {/* Headline (Korean: looser leading, no negative tracking) */}
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: "#e8e8e8",
              lineHeight: 1.2,
            }}
          >
            아이디어와 구현 사이,
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.2,
              display: "flex",
            }}
          >
            <span style={{ color: "#e8e8e8" }}>완성된 가치를{"\u00A0"}</span>
            <span style={{ color: "#c9a84c" }}>전달합니다.</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pretendard",
          data: pretendardBold,
          style: "normal" as const,
          weight: 800 as const,
        },
      ],
    }
  );
}
