import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function ParticleText() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    /* ---------- SCENE ---------- */
    const scene = new THREE.Scene();

    /* ---------- CAMERA ---------- */
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      500
    );
    camera.position.z = 60;

    /* ---------- RENDERER ---------- */
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* ---------- INTERACTION ---------- */
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    let pointsMesh = null;
    let originalPositions = null;

    /* ---------- LOAD OBJ ---------- */
    const loader = new OBJLoader();
    loader.load("/src/assets/text.obj", (obj) => {
      obj.traverse((child) => {
        if (!child.isMesh) return;

        const geometry = child.geometry.clone();

        // Center geometry
        geometry.computeBoundingBox();
        const center = new THREE.Vector3();
        geometry.boundingBox.getCenter(center);
        geometry.translate(-center.x, -center.y, -center.z);

        const material = new THREE.PointsMaterial({
          color: 0xffffff,
          size: 1.1,
          sizeAttenuation: true,
        });

        const points = new THREE.Points(geometry, material);

        // Scale up text (IMPORTANT)
        points.scale.set(2.2, 2.2, 2.2);

        // Store original positions
        const pos = geometry.attributes.position.array;
        originalPositions = new Float32Array(pos.length);
        originalPositions.set(pos);

        pointsMesh = points;
        scene.add(points);
      });
    });

    /* ---------- MOUSE ---------- */
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    /* ---------- RESIZE ---------- */
    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    /* ---------- ANIMATION ---------- */
    const animate = () => {
      requestAnimationFrame(animate);

      if (pointsMesh && originalPositions) {
        raycaster.setFromCamera(mouse, camera);

        const positions = pointsMesh.geometry.attributes.position.array;
        const original = originalPositions;

        const mouseWorld = raycaster.ray.origin
          .clone()
          .add(raycaster.ray.direction.clone().multiplyScalar(60));

        const radius = 9;      // smaller, softer field
        const strength = 3;    // gentle push
        const returnEase = 0.12;

        for (let i = 0; i < positions.length; i += 3) {
          const px = positions[i];
          const py = positions[i + 1];
          const pz = positions[i + 2];

          const ox = original[i];
          const oy = original[i + 1];
          const oz = original[i + 2];

          const dx = px - mouseWorld.x;
          const dy = py - mouseWorld.y;
          const dz = pz - mouseWorld.z;

          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < radius) {
            const falloff = 1 - dist / radius;
            positions[i] += dx * falloff * strength * 0.015;
            positions[i + 1] += dy * falloff * strength * 0.015;
            positions[i + 2] += dz * falloff * strength * 0.015;
          }

          // Smooth elastic return
          positions[i] += (ox - px) * returnEase;
          positions[i + 1] += (oy - py) * returnEase;
          positions[i + 2] += (oz - pz) * returnEase;
        }

        pointsMesh.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    /* ---------- CLEANUP ---------- */
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-screen h-screen pointer-events-none"
    />
  );
}
