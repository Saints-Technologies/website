"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
}

const NODE_COUNT = 80;
const CONNECTION_DISTANCE = 160;
const MOUSE_RADIUS = 200;
const MOUSE_FORCE = 0.025;
const DRIFT_SPEED = 0.15;
const RETURN_FORCE = 0.008;

export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  const initNodes = useCallback((w: number, h: number) => {
    const nodes: Node[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * DRIFT_SPEED,
        vy: (Math.random() - 0.5) * DRIFT_SPEED,
        baseX: x,
        baseY: y,
        radius: Math.random() * 1.5 + 0.5,
      });
    }
    nodesRef.current = nodes;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { w, h } = sizeRef.current;
    ctx.clearRect(0, 0, w, h);

    const nodes = nodesRef.current;
    const mouse = mouseRef.current;

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Mouse interaction
      const dxMouse = mouse.x - node.x;
      const dyMouse = mouse.y - node.y;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

      if (distMouse < MOUSE_RADIUS) {
        const force = (1 - distMouse / MOUSE_RADIUS) * MOUSE_FORCE;
        node.vx -= dxMouse * force;
        node.vy -= dyMouse * force;
      }

      // Drift back to base position
      node.vx += (node.baseX - node.x) * RETURN_FORCE;
      node.vy += (node.baseY - node.y) * RETURN_FORCE;

      // Damping
      node.vx *= 0.97;
      node.vy *= 0.97;

      node.x += node.vx;
      node.y += node.vy;

      // Wrap edges softly
      if (node.x < -20) node.x = w + 20;
      if (node.x > w + 20) node.x = -20;
      if (node.y < -20) node.y = h + 20;
      if (node.y > h + 20) node.y = -20;
    }

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.12;

          // Brighten lines near mouse
          let mouseBoost = 0;
          const midX = (nodes[i].x + nodes[j].x) / 2;
          const midY = (nodes[i].y + nodes[j].y) / 2;
          const dxM = mouse.x - midX;
          const dyM = mouse.y - midY;
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);
          if (distM < MOUSE_RADIUS) {
            mouseBoost = (1 - distM / MOUSE_RADIUS) * 0.15;
          }

          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(207, 199, 190, ${alpha + mouseBoost})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Glow near mouse
      const dxM = mouse.x - node.x;
      const dyM = mouse.y - node.y;
      const distM = Math.sqrt(dxM * dxM + dyM * dyM);
      let nodeAlpha = 0.2;
      let nodeRadius = node.radius;
      if (distM < MOUSE_RADIUS) {
        const proximity = 1 - distM / MOUSE_RADIUS;
        nodeAlpha += proximity * 0.5;
        nodeRadius += proximity * 1.5;
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(207, 199, 190, ${nodeAlpha})`;
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      sizeRef.current = { w, h };
      initNodes(w, h);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    handleResize();
    rafRef.current = requestAnimationFrame(draw);

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [draw, initNodes]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
}
