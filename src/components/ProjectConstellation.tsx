"use client";

import { useRef, useEffect, useState } from "react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  description: string;
}

interface Edge {
  from: string;
  to: string;
}

const NODES: Node[] = [
  { id: "archon", label: "Archon", x: 0.2, y: 0.3, description: "Multi-agent platform" },
  { id: "medical-ai", label: "Medical AI", x: 0.8, y: 0.25, description: "Computer vision pathology" },
  { id: "quorum", label: "Quorum", x: 0.5, y: 0.52, description: "Multi-AI consensus" },
  { id: "pyithon", label: "Pyi-thon", x: 0.15, y: 0.72, description: "Python learning platform" },
  { id: "yi-labs", label: "Yi Labs", x: 0.5, y: 0.15, description: "Research hub" },
  { id: "weighted-edge", label: "Weighted Edge", x: 0.82, y: 0.7, description: "AI newsletter pipeline" },
  { id: "claude-monitor", label: "Claude Monitor", x: 0.5, y: 0.85, description: "API usage tracker" },
];

const EDGES: Edge[] = [
  { from: "yi-labs", to: "archon" },
  { from: "yi-labs", to: "medical-ai" },
  { from: "yi-labs", to: "quorum" },
  { from: "archon", to: "quorum" },
  { from: "quorum", to: "weighted-edge" },
  { from: "quorum", to: "claude-monitor" },
  { from: "pyithon", to: "quorum" },
  { from: "archon", to: "medical-ai" },
  { from: "weighted-edge", to: "claude-monitor" },
];

export default function ProjectConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; node: Node } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let t = 0;

    // Gold palette
    const GOLD = [201, 168, 76];
    const MUTED = [153, 153, 153];

    const liveNodes = NODES.map((n, i) => ({
      ...n,
      cx: 0, cy: 0,
      tx: 0, ty: 0,
      phase: (i * 1.37) % (Math.PI * 2),
    }));

    function resize() {
      const rect = container!.getBoundingClientRect();
      canvas!.width = rect.width;
      canvas!.height = rect.height;
      for (const n of liveNodes) {
        n.tx = n.x * rect.width;
        n.ty = n.y * rect.height;
        n.cx = n.tx;
        n.cy = n.ty;
      }
    }

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      t += 0.008;
      ctx!.clearRect(0, 0, w, h);

      // Float
      for (const n of liveNodes) {
        n.cx = n.tx + Math.sin(t + n.phase) * 5;
        n.cy = n.ty + Math.cos(t * 0.7 + n.phase) * 3;
      }

      // Edges
      for (const edge of EDGES) {
        const from = liveNodes.find(n => n.id === edge.from)!;
        const to = liveNodes.find(n => n.id === edge.to)!;
        const lit = hovered === edge.from || hovered === edge.to;
        const alpha = lit ? 0.5 : 0.08;

        const grad = ctx!.createLinearGradient(from.cx, from.cy, to.cx, to.cy);
        grad.addColorStop(0, `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${alpha})`);
        grad.addColorStop(1, `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${alpha * 0.6})`);

        ctx!.strokeStyle = grad;
        ctx!.lineWidth = lit ? 1.5 : 0.8;
        ctx!.beginPath();
        const midX = (from.cx + to.cx) / 2;
        const midY = (from.cy + to.cy) / 2 - 15;
        ctx!.moveTo(from.cx, from.cy);
        ctx!.quadraticCurveTo(midX, midY, to.cx, to.cy);
        ctx!.stroke();

        // Traveling particle
        if (lit) {
          const p = (t * 1.5) % 1;
          const px = from.cx + (to.cx - from.cx) * p;
          const py = from.cy + (to.cy - from.cy) * p - Math.sin(p * Math.PI) * 15;
          ctx!.beginPath();
          ctx!.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},0.7)`;
          ctx!.fill();
        }
      }

      // Nodes
      for (const n of liveNodes) {
        const lit = hovered === n.id;
        const pulse = Math.sin(t * 2 + n.phase) * 0.5 + 0.5;

        // Glow
        const glowR = lit ? 35 : 18 + pulse * 8;
        const glowA = lit ? 0.15 : 0.04 + pulse * 0.03;
        const glow = ctx!.createRadialGradient(n.cx, n.cy, 0, n.cx, n.cy, glowR);
        glow.addColorStop(0, `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${glowA})`);
        glow.addColorStop(1, `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},0)`);
        ctx!.fillStyle = glow;
        ctx!.beginPath();
        ctx!.arc(n.cx, n.cy, glowR, 0, Math.PI * 2);
        ctx!.fill();

        // Core
        const r = lit ? 6 : 4 + pulse * 1.5;
        ctx!.beginPath();
        ctx!.arc(n.cx, n.cy, r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${lit ? 1 : 0.6 + pulse * 0.3})`;
        ctx!.fill();

        // Ring on hover
        if (lit) {
          ctx!.beginPath();
          ctx!.arc(n.cx, n.cy, 14, 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},0.3)`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }

        // Label
        ctx!.font = `${lit ? 12 : 10}px 'JetBrains Mono', monospace`;
        ctx!.fillStyle = lit
          ? `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},1)`
          : `rgba(${MUTED[0]},${MUTED[1]},${MUTED[2]},0.7)`;
        ctx!.textAlign = "center";
        ctx!.fillText(n.label, n.cx, n.cy + (lit ? 24 : 20));
      }

      animId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      let found: string | null = null;
      for (const n of liveNodes) {
        const dx = mx - n.cx;
        const dy = my - n.cy;
        if (Math.sqrt(dx * dx + dy * dy) < 25) {
          found = n.id;
          setTooltip({ x: e.clientX, y: e.clientY, node: NODES.find(nd => nd.id === n.id)! });
          break;
        }
      }
      setHovered(found);
      if (!found) setTooltip(null);
    }

    function handleMouseLeave() {
      setHovered(null);
      setTooltip(null);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) cancelAnimationFrame(animId);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hovered]);

  return (
    <div ref={containerRef} className="relative w-full h-[420px] md:h-[500px]">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {tooltip && (
        <div
          className="fixed z-50 px-3 py-2 rounded-lg backdrop-blur-xl pointer-events-none"
          style={{
            left: tooltip.x + 16,
            top: tooltip.y - 10,
            background: "rgba(8,8,10,0.9)",
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <div className="font-mono text-[11px] font-bold" style={{ color: "var(--gold)" }}>
            {tooltip.node.label}
          </div>
          <div className="text-[11px] mt-0.5" style={{ color: "var(--text-muted)" }}>
            {tooltip.node.description}
          </div>
        </div>
      )}
    </div>
  );
}
