"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function createPiece(scene: THREE.Scene, x: number, y: number, z: number, size: number, color: number, speed: { x: number; y: number; z: number; rx: number; ry: number; rz: number }) {
  const verts = new Float32Array([0,size,0, size*0.6,0,0, 0,-size,0, -size*0.6,0,0, 0,0,size*0.4, 0,0,-size*0.4]);
  const indices = [0,1,4, 1,2,4, 2,3,4, 3,0,4, 0,5,1, 1,5,2, 2,5,3, 3,5,0];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(verts, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ color, transparent: true, opacity: 0.15 + Math.random()*0.15, roughness: 0.8, metalness: 0.2, side: THREE.DoubleSide, wireframe: Math.random() > 0.6 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
  mesh.userData = { speed };
  scene.add(mesh);
  return mesh;
}

export default function OrigamiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 200);
    camera.position.z = 30;
    scene.add(new THREE.AmbientLight(0x6080ff, 0.4));
    const pl1 = new THREE.PointLight(0xd4a853, 2, 80);
    pl1.position.set(20, 20, 10);
    scene.add(pl1);
    scene.add(Object.assign(new THREE.PointLight(0x4060c0, 1, 60), { position: new THREE.Vector3(-20,-10,-10) }));
    const pieces: THREE.Mesh[] = [];
    const colors = [0xd4a853, 0xc94040, 0x6080c0, 0x80a0d0, 0xf0ebe1];
    for (let i = 0; i < 40; i++) {
      pieces.push(createPiece(scene, (Math.random()-0.5)*60, (Math.random()-0.5)*50, (Math.random()-0.5)*30-10, 0.4+Math.random()*1.8, colors[Math.floor(Math.random()*colors.length)], { x:(Math.random()-0.5)*0.002, y:(Math.random()-0.5)*0.003+0.001, z:(Math.random()-0.5)*0.001, rx:(Math.random()-0.5)*0.004, ry:(Math.random()-0.5)*0.005, rz:(Math.random()-0.5)*0.003 }));
    }
    let mx = 0, my = 0;
    const onMM = (e: MouseEvent) => { mx = (e.clientX/window.innerWidth-0.5)*2; my = (e.clientY/window.innerHeight-0.5)*2; };
    const onR = () => { camera.aspect = window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); };
    window.addEventListener("mousemove", onMM);
    window.addEventListener("resize", onR);
    let id: number;
    const animate = () => {
      id = requestAnimationFrame(animate);
      camera.position.x += (mx*3 - camera.position.x)*0.02;
      camera.position.y += (-my*2 - camera.position.y)*0.02;
      pieces.forEach(m => {
        const s = m.userData.speed;
        m.position.y += s.y; m.position.x += s.x + Math.sin(Date.now()*0.0003)*0.003;
        m.rotation.x += s.rx; m.rotation.y += s.ry; m.rotation.z += s.rz;
        if (m.position.y > 28) m.position.y = -28;
        if (m.position.y < -28) m.position.y = 28;
        if (m.position.x > 35) m.position.x = -35;
        if (m.position.x < -35) m.position.x = 35;
      });
      pl1.intensity = 1.5 + Math.sin(Date.now()*0.001)*0.5;
      renderer.render(scene, camera);
    };
    animate();
    return () => { cancelAnimationFrame(id); window.removeEventListener("mousemove", onMM); window.removeEventListener("resize", onR); renderer.dispose(); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
}
