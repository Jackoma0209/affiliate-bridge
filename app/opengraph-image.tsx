import { ImageResponse } from "next/og";

export const alt = "Get Your First Sale — practical Shopify launch guidance for beginners";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #ecfdf5 0%, #ffffff 50%, #f0fdfa 100%)",
          color: "#0f172a",
          padding: "72px 80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 58,
              height: 58,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "#059669",
              color: "white",
              fontSize: 31,
              fontWeight: 800,
            }}
          >
            ✓
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>Get Your First Sale</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#047857", marginBottom: 20 }}>
            PRACTICAL SHOPIFY LAUNCH GUIDANCE
          </div>
          <div style={{ fontSize: 66, lineHeight: 1.05, fontWeight: 800, letterSpacing: -2 }}>
            Launch with a plan — then learn from real visitors.
          </div>
          <div style={{ marginTop: 26, fontSize: 28, lineHeight: 1.35, color: "#475569" }}>
            Free 7-day checklist, beginner guides, and honest next steps. No income promises.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#64748b" }}>
          <span>getyourfirstsale.com</span>
          <span>Independent beginner guide</span>
        </div>
      </div>
    ),
    size
  );
}
