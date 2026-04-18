import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Market Insight — Arabia Khaleej";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #020617 0%, #B8860B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "0.5em", opacity: 0.6, textTransform: "uppercase", marginBottom: "40px" }}>
           The GCC Standard
        </div>
        <div style={{ fontSize: 100, fontWeight: 900, letterSpacing: "-0.05em", marginBottom: "20px" }}>
          Market Insight
        </div>
        <div style={{ fontSize: 32, fontWeight: 500, letterSpacing: "0.1em", opacity: 0.8 }}>
          Stocks, Gold & Regional Currencies
        </div>
        
        <div style={{ 
          display: "flex", 
          gap: "20px", 
          marginTop: "60px" 
        }}>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px 24px", borderRadius: "100px", fontSize: 18, border: "1px solid rgba(255,255,255,0.2)" }}>
            📈 Live Indices
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px 24px", borderRadius: "100px", fontSize: 18, border: "1px solid rgba(255,255,255,0.2)" }}>
            💰 Gold Rates
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "12px 24px", borderRadius: "100px", fontSize: 18, border: "1px solid rgba(255,255,255,0.2)" }}>
            🌍 GCC FX
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
