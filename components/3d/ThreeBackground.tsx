"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * ThreeBackground — Cenário 3D interativo com Three.js.
 * - Campo de partículas com nós estelares e iluminação sutil (paleta Abismo / Lilás).
 * - Núcleo geométrico sutil (icosaedro em wireframe) representando o ecossistema integrado da IQON.
 * - Reação fluida ao scroll da página (parallax e rotação cinética da câmera).
 * - Interatividade suave com o ponteiro do mouse.
 * - Otimizado: pausa quando aba inativa, cap de pixel ratio e cleanup completo.
 */
export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respeito a acessibilidade
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Dimensões
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Cena, Câmera e Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparente para mesclar com o CSS
    container.appendChild(renderer.domElement);

    // 1. Campo de Partículas (Estrelas / Dados em suspensão)
    const particleCount = 750;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const palette = [
      new THREE.Color("#b99af0"), // lilas
      new THREE.Color("#dccbfb"), // lilas claro
      new THREE.Color("#6b21c8"), // violeta
      new THREE.Color("#8b5cf6"), // violeta neon
    ];

    for (let i = 0; i < particleCount; i++) {
      // Espalhamento em esfera e profundidade
      const radius = 18 + Math.random() * 32;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) - 10;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      scales[i] = Math.random() * 2.2 + 0.8;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Shader ou material de ponto suave
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 2. Núcleo Geométrico Wireframe (Ecosistema IQON)
    const coreGeometry = new THREE.IcosahedronGeometry(7.5, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreMesh.position.set(6, -2, -6);
    scene.add(coreMesh);

    // Aneis orbitais ao redor do núcleo
    const ringGeometry = new THREE.TorusGeometry(10.5, 0.04, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xb99af0,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.position.copy(coreMesh.position);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // Iluminação ambiente
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Scroll & Mouse Tracking
    let targetScrollY = 0;
    let currentScrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Loop de Animação com interpolação suave (lerp)
    let animationFrameId: number;
    let isVisible = true;

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Interpolação suave de scroll
      currentScrollY += (targetScrollY - currentScrollY) * 0.06;
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      if (!prefersReducedMotion) {
        // Rotação suave contínua + aceleração com scroll
        const scrollFactor = currentScrollY * 0.0008;

        particles.rotation.y = elapsedTime * 0.03 + scrollFactor * 0.8;
        particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1 + scrollFactor * 0.3;

        coreMesh.rotation.x = elapsedTime * 0.06 + scrollFactor;
        coreMesh.rotation.y = elapsedTime * 0.08 + scrollFactor * 1.2;

        ringMesh.rotation.z = -elapsedTime * 0.05 + scrollFactor * 0.6;
        ringMesh.rotation.y = elapsedTime * 0.04;

        // Câmera reage dinamicamente ao mouse e ao scroll
        camera.position.x = mouseX * 1.5;
        camera.position.y = mouseY * 1.2 - currentScrollY * 0.004;
        camera.lookAt(0, -currentScrollY * 0.003, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      geometry.dispose();
      particleMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
    />
  );
}

