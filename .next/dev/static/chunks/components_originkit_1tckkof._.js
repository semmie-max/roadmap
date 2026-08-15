(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/originkit/hero-23.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$sec1$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/originkit/ui/hero-23/sec1-hero.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const Hero23 = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$sec1$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sec1Hero"], {}, void 0, false, {
        fileName: "[project]/components/originkit/hero-23.tsx",
        lineNumber: 6,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0));
_c = Hero23;
const __TURBOPACK__default__export__ = Hero23;
var _c;
__turbopack_context__.k.register(_c, "Hero23");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/originkit/ui/hero-23/globe.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Globe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$equirectangular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoEquirectangular$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/projection/equirectangular.js [app-client] (ecmascript) <export default as geoEquirectangular>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$path$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoPath$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/path/index.js [app-client] (ecmascript) <export default as geoPath>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function parseColorToRgba(input) {
    if (!input || input.trim() === "") return {
        r: 0,
        g: 0,
        b: 0,
        a: 0
    };
    const str = input.trim();
    const rgbaMatch = str.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i);
    if (rgbaMatch) {
        const r = Math.max(0, Math.min(255, parseFloat(rgbaMatch[1]))) / 255;
        const g = Math.max(0, Math.min(255, parseFloat(rgbaMatch[2]))) / 255;
        const b = Math.max(0, Math.min(255, parseFloat(rgbaMatch[3]))) / 255;
        const a = rgbaMatch[4] !== undefined ? Math.max(0, Math.min(1, parseFloat(rgbaMatch[4]))) : 1;
        return {
            r,
            g,
            b,
            a
        };
    }
    const hex = str.replace(/^#/, "");
    if (hex.length === 8) {
        return {
            r: parseInt(hex.slice(0, 2), 16) / 255,
            g: parseInt(hex.slice(2, 4), 16) / 255,
            b: parseInt(hex.slice(4, 6), 16) / 255,
            a: parseInt(hex.slice(6, 8), 16) / 255
        };
    }
    if (hex.length === 6) {
        return {
            r: parseInt(hex.slice(0, 2), 16) / 255,
            g: parseInt(hex.slice(2, 4), 16) / 255,
            b: parseInt(hex.slice(4, 6), 16) / 255,
            a: 1
        };
    }
    if (hex.length === 4) {
        return {
            r: parseInt(hex[0] + hex[0], 16) / 255,
            g: parseInt(hex[1] + hex[1], 16) / 255,
            b: parseInt(hex[2] + hex[2], 16) / 255,
            a: parseInt(hex[3] + hex[3], 16) / 255
        };
    }
    if (hex.length === 3) {
        return {
            r: parseInt(hex[0] + hex[0], 16) / 255,
            g: parseInt(hex[1] + hex[1], 16) / 255,
            b: parseInt(hex[2] + hex[2], 16) / 255,
            a: 1
        };
    }
    return {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    };
}
function mapLinear(value, inMin, inMax, outMin, outMax) {
    if (inMax === inMin) return outMin;
    const t = (value - inMin) / (inMax - inMin);
    return outMin + t * (outMax - outMin);
}
function mapSpeedUiToInternal(ui) {
    if (ui === 0) return 0;
    const clamped = Math.max(0, Math.min(10, ui));
    return mapLinear(clamped, 0, 10, 0, 0.9);
}
function mapDensityUiToSpacing(ui) {
    const clamped = Math.max(1, Math.min(10, ui));
    return mapLinear(clamped, 1, 10, 24, 8);
}
function mapScaleUiToMultiplier(ui) {
    const clamped = Math.max(1, Math.min(20, ui));
    return mapLinear(clamped, 1, 20, 0.2, 2);
}
function mapDotSizeUiToMultiplier(ui) {
    const clamped = Math.max(1, Math.min(10, ui));
    return mapLinear(clamped, 1, 10, 0.1, 0.5);
}
function mapMarkerDotSizeUiToMultiplier(ui) {
    const clamped = Math.max(0, Math.min(100, ui));
    return mapLinear(clamped, 0, 100, 0.1, 2.5);
}
function normalizeSmoothing(ui) {
    return Math.max(0, Math.min(1, ui / 10));
}
function mapDragSpeedUiToSensitivity(ui) {
    return mapLinear(Math.max(0, Math.min(10, ui)), 0, 10, 0.001, 0.02);
}
function mapDetailToStepSize(ui) {
    const clamped = Math.max(1, Math.min(10, ui));
    return mapLinear(clamped, 1, 10, 10, 1);
}
function simplifyRing(ring, detail) {
    if (ring.length < 2) return ring;
    if (detail >= 10) return ring;
    const stepSize = Math.max(1, Math.floor(mapDetailToStepSize(detail)));
    const simplified = [];
    simplified.push(ring[0]);
    for(let i = stepSize; i < ring.length - 1; i += stepSize){
        const idx = Math.min(i, ring.length - 1);
        simplified.push(ring[idx]);
    }
    const lastPoint = ring[ring.length - 1];
    const firstPoint = ring[0];
    const isClosed = Math.abs(lastPoint[0] - firstPoint[0]) < 1e-4 && Math.abs(lastPoint[1] - firstPoint[1]) < 1e-4;
    if (!isClosed) {
        simplified.push(lastPoint);
    }
    return simplified.length >= 2 ? simplified : ring;
}
function latLngToPosition(lat, lng) {
    const latRad = lat * (Math.PI / 180);
    const lngRad = lng * (Math.PI / 180);
    const x = Math.cos(latRad) * Math.sin(lngRad);
    const y = Math.sin(latRad);
    const z = Math.cos(latRad) * Math.cos(lngRad);
    return {
        x,
        y,
        z
    };
}
function Globe({ speed = 2, smoothing = 8, dots = {
    color: "#ffffff",
    size: 5,
    density: 8,
    allDots: false
}, fill = "dots", fillColor = "#ffffff", scale = 8, stopOnHover = true, markerConfig = {
    markers: [],
    color: "#00f7ff",
    size: 40
}, direction = "left", initialLatitude = 23, initialLongitude = -23, oceanColor = "#000000", outlineColor = "#ffffff", showOutline = true, graticuleColor = "#D4D4D4", showGrid = true, outlineWidth = 1, dragSpeed = 5, detail = 5, style }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dotColor = dots.color;
    const dotSize = dots.size;
    const density = dots.density;
    const allDots = dots.allDots;
    const gridWidth = 1;
    const smoothingN = normalizeSmoothing(smoothing);
    const baseRotationSpeed = mapSpeedUiToInternal(speed);
    const rotationSpeed = direction === "left" ? -baseRotationSpeed : baseRotationSpeed;
    const dotSpacing = mapDensityUiToSpacing(density);
    const dotSizeMultiplier = mapDotSizeUiToMultiplier(dotSize);
    const markerRadiusMultiplier = mapMarkerDotSizeUiToMultiplier(markerConfig.size);
    const scaleMultiplier = mapScaleUiToMultiplier(scale);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Globe.useEffect": ()=>{
            if (!containerRef.current) return;
            const container = containerRef.current;
            const containerWidth = container.clientWidth || container.offsetWidth || 800;
            const containerHeight = container.clientHeight || container.offsetHeight || 600;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](50, containerWidth / containerHeight, 0.1, 1e3);
            const baseRadius = 1;
            const globeRadius = baseRadius * scaleMultiplier;
            const cameraDistance = 2.5 / scaleMultiplier;
            camera.position.set(0, 0, cameraDistance);
            camera.lookAt(0, 0, 0);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setSize(containerWidth, containerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.outputColorSpace = "srgb";
            const canvas = renderer.domElement;
            canvas.style.position = "absolute";
            canvas.style.inset = "0";
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.style.display = "block";
            canvas.style.opacity = "0";
            canvas.style.visibility = "hidden";
            container.appendChild(canvas);
            const resolvedOceanColor = oceanColor;
            const resolvedOutlineColor = outlineColor;
            const resolvedDotColor = dotColor;
            const resolvedMarkerColor = markerConfig.color;
            const resolvedGraticuleColor = graticuleColor;
            const resolvedFillColor = fillColor;
            const oceanRgba = parseColorToRgba(resolvedOceanColor);
            const outlineRgba = parseColorToRgba(resolvedOutlineColor);
            const dotRgba = parseColorToRgba(resolvedDotColor);
            const markerRgba = parseColorToRgba(resolvedMarkerColor);
            const graticuleRgba = parseColorToRgba(resolvedGraticuleColor);
            const fillRgba = parseColorToRgba(resolvedFillColor);
            void markerRgba;
            const oceanGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](globeRadius, 64, 64);
            const oceanColorObj = resolvedOceanColor ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](resolvedOceanColor) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0, 0, 0);
            const oceanMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: oceanColorObj,
                transparent: oceanRgba.a < 1 || oceanRgba.a === 0,
                opacity: oceanRgba.a
            });
            const oceanMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](oceanGeometry, oceanMaterial);
            scene.add(oceanMesh);
            let globeOutlineMesh = null;
            if (showOutline && outlineColor && outlineRgba.a > 0) {
                const outlinePositions = [];
                const segments = 128;
                for(let i = 0; i <= segments; i++){
                    const angle = i / segments * Math.PI * 2;
                    const x = Math.cos(angle) * globeRadius;
                    const y = Math.sin(angle) * globeRadius;
                    const z = 0;
                    outlinePositions.push(x, y, z);
                }
                const outlinePoints = [];
                for(let i = 0; i < outlinePositions.length; i += 3){
                    outlinePoints.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](outlinePositions[i], outlinePositions[i + 1], outlinePositions[i + 2]));
                }
                if (outlinePoints.length >= 2) {
                    outlinePoints.push(outlinePoints[0].clone());
                    const outlineColorObj = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](resolvedOutlineColor);
                    const outlineMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: outlineColorObj,
                        transparent: outlineRgba.a < 1,
                        opacity: outlineRgba.a
                    });
                    const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](outlinePoints);
                    const radius = outlineWidth / 10 * 0.01;
                    const tubeGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](curve, outlinePoints.length * 2, radius, 8, false);
                    globeOutlineMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](tubeGeometry, outlineMaterial);
                }
            }
            void globeOutlineMesh;
            const continentOutlineGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            const graticuleGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            if (showGrid && resolvedGraticuleColor && graticuleRgba.a > 0) {
                const graticuleColorObj = resolvedGraticuleColor ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](resolvedGraticuleColor) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](1, 1, 1);
                const graticuleMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    color: graticuleColorObj,
                    transparent: graticuleRgba.a < 1 || graticuleRgba.a === 0,
                    opacity: graticuleRgba.a
                });
                const gridSpacing = 15;
                for(let lat = -90; lat <= 90; lat += gridSpacing){
                    const positions = [];
                    const segments = 64;
                    for(let i = 0; i <= segments; i++){
                        const lng = i / segments * 360 - 180;
                        const pos = latLngToPosition(lat, lng);
                        positions.push(pos.x * globeRadius, pos.y * globeRadius, pos.z * globeRadius);
                    }
                    if (positions && positions.length >= 6) {
                        const points = [];
                        for(let i = 0; i < positions.length; i += 3){
                            points.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](positions[i], positions[i + 1], positions[i + 2]));
                        }
                        if (points.length >= 2) {
                            const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](points);
                            const radius = gridWidth / 10 * 0.01;
                            const tubeGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](curve, points.length * 2, radius, 8, false);
                            const tubeMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](tubeGeometry, graticuleMaterial);
                            tubeMesh.renderOrder = 0;
                            graticuleGroup.add(tubeMesh);
                        }
                    }
                }
                for(let lng = -180; lng < 180; lng += gridSpacing){
                    const positions = [];
                    const segments = 64;
                    for(let i = 0; i <= segments; i++){
                        const lat = i / segments * 180 - 90;
                        const pos = latLngToPosition(lat, lng);
                        positions.push(pos.x * globeRadius, pos.y * globeRadius, pos.z * globeRadius);
                    }
                    if (positions && positions.length >= 6) {
                        const points = [];
                        for(let i = 0; i < positions.length; i += 3){
                            points.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](positions[i], positions[i + 1], positions[i + 2]));
                        }
                        if (points.length >= 2) {
                            const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](points);
                            const radius = gridWidth / 10 * 0.01;
                            const tubeGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](curve, points.length * 2, radius, 8, false);
                            const tubeMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](tubeGeometry, graticuleMaterial);
                            tubeMesh.renderOrder = 0;
                            graticuleGroup.add(tubeMesh);
                        }
                    }
                }
            }
            let dotInstances = null;
            let markerMeshes = [];
            const loadWorldData = {
                "Globe.useEffect.loadWorldData": async ()=>{
                    try {
                        setIsLoading(true);
                        const response = await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/50m/physical/ne_50m_land.json");
                        if (!response.ok) throw new Error("Failed to load land data");
                        const landFeatures = await response.json();
                        while(continentOutlineGroup.children.length > 0){
                            continentOutlineGroup.remove(continentOutlineGroup.children[0]);
                        }
                        if (showOutline && outlineColor && outlineRgba.a > 0) {
                            const outlineColorObj = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](resolvedOutlineColor);
                            const outlineMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                                color: outlineColorObj,
                                transparent: outlineRgba.a < 1,
                                opacity: outlineRgba.a,
                                depthTest: true,
                                depthWrite: true
                            });
                            const projection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$equirectangular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoEquirectangular$3e$__["geoEquirectangular"])();
                            const pathGenerator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$path$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoPath$3e$__["geoPath"])().projection(projection);
                            let processedCount = 0;
                            let skippedCount = 0;
                            landFeatures.features.forEach({
                                "Globe.useEffect.loadWorldData": (feature)=>{
                                    const featureType = feature.properties?.featurecla || feature.properties?.type || "";
                                    const featureName = feature.properties?.name || "";
                                    if (featureType.toLowerCase().includes("graticule") || featureType.toLowerCase().includes("grid") || featureType.toLowerCase().includes("line") || featureName.toLowerCase().includes("graticule") || featureName.toLowerCase().includes("grid") || featureName.toLowerCase().includes("line")) {
                                        skippedCount++;
                                        return;
                                    }
                                    processedCount++;
                                    const pathString = pathGenerator(feature);
                                    if (!pathString) return;
                                    const commands = pathString.match(/[ML][^MLZ]*/g) || [];
                                    if (commands.length === 0) return;
                                    const geometry = feature.geometry;
                                    if (!geometry || !geometry.coordinates) return;
                                    const processRing = {
                                        "Globe.useEffect.loadWorldData.processRing": (ring)=>{
                                            if (ring.length < 2) return;
                                            const simplifiedRing = simplifyRing(ring, detail);
                                            const positions = [];
                                            simplifiedRing.forEach({
                                                "Globe.useEffect.loadWorldData.processRing": (coord)=>{
                                                    const [lng, lat] = coord;
                                                    const pos = latLngToPosition(lat, lng);
                                                    positions.push(pos.x * globeRadius, pos.y * globeRadius, pos.z * globeRadius);
                                                }
                                            }["Globe.useEffect.loadWorldData.processRing"]);
                                            if (positions && positions.length >= 6) {
                                                const points = [];
                                                for(let i = 0; i < positions.length; i += 3){
                                                    points.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](positions[i], positions[i + 1], positions[i + 2]));
                                                }
                                                if (points.length > 0 && points[0].distanceTo(points[points.length - 1]) > 0.001) {
                                                    points.push(points[0].clone());
                                                }
                                                if (points.length >= 2) {
                                                    const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"](points);
                                                    const radius = outlineWidth / 10 * 0.01;
                                                    const tubeGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TubeGeometry"](curve, points.length * 2, radius, 8, false);
                                                    const tubeMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](tubeGeometry, outlineMaterial);
                                                    tubeMesh.renderOrder = 0;
                                                    continentOutlineGroup.add(tubeMesh);
                                                }
                                            }
                                        }
                                    }["Globe.useEffect.loadWorldData.processRing"];
                                    if (geometry.type === "Polygon" && geometry.coordinates.length > 0) {
                                        processRing(geometry.coordinates[0]);
                                    } else if (geometry.type === "MultiPolygon") {
                                        geometry.coordinates.forEach({
                                            "Globe.useEffect.loadWorldData": (polygon)=>{
                                                if (polygon.length > 0) {
                                                    processRing(polygon[0]);
                                                }
                                            }
                                        }["Globe.useEffect.loadWorldData"]);
                                    }
                                }
                            }["Globe.useEffect.loadWorldData"]);
                            console.log(`[Globe] Processed ${processedCount} land features, skipped ${skippedCount} grid features`);
                        }
                        const bitmapWidth = 2048;
                        const bitmapHeight = 1024;
                        const offscreenCanvas = document.createElement("canvas");
                        offscreenCanvas.width = bitmapWidth;
                        offscreenCanvas.height = bitmapHeight;
                        const ctx = offscreenCanvas.getContext("2d", {
                            willReadFrequently: true
                        });
                        if (!ctx) throw new Error("Canvas not supported");
                        const projection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$equirectangular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoEquirectangular$3e$__["geoEquirectangular"])().fitSize([
                            bitmapWidth,
                            bitmapHeight
                        ], {
                            type: "Sphere"
                        });
                        const pathGenerator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$path$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoPath$3e$__["geoPath"])().projection(projection).context(ctx);
                        ctx.fillStyle = "#000";
                        ctx.fillRect(0, 0, bitmapWidth, bitmapHeight);
                        ctx.fillStyle = "#fff";
                        ctx.beginPath();
                        landFeatures.features.forEach({
                            "Globe.useEffect.loadWorldData": (feature)=>{
                                pathGenerator(feature);
                            }
                        }["Globe.useEffect.loadWorldData"]);
                        ctx.fill();
                        const imageData = ctx.getImageData(0, 0, bitmapWidth, bitmapHeight);
                        const pixels = imageData.data;
                        const isOnLand = {
                            "Globe.useEffect.loadWorldData.isOnLand": (lng, lat)=>{
                                const x = Math.round((lng + 180) / 360 * bitmapWidth) % bitmapWidth;
                                const y = Math.round((90 - lat) / 180 * bitmapHeight);
                                const clampedY = Math.max(0, Math.min(bitmapHeight - 1, y));
                                const idx = (clampedY * bitmapWidth + x) * 4;
                                return pixels[idx] > 128;
                            }
                        }["Globe.useEffect.loadWorldData.isOnLand"];
                        if (fill === "solid") {
                            const texW = 1024;
                            const texH = 512;
                            const fillCanvas = document.createElement("canvas");
                            fillCanvas.width = texW;
                            fillCanvas.height = texH;
                            const fctx = fillCanvas.getContext("2d");
                            const img = fctx.createImageData(texW, texH);
                            const data = img.data;
                            const fr = Math.round(fillRgba.r * 255);
                            const fg = Math.round(fillRgba.g * 255);
                            const fb = Math.round(fillRgba.b * 255);
                            const fa = Math.round((fillRgba.a || 1) * 255);
                            for(let ty = 0; ty < texH; ty++){
                                for(let tx = 0; tx < texW; tx++){
                                    const u = tx / texW;
                                    const v = ty / texH;
                                    let lng = (u - 0.25) * 360;
                                    lng = ((lng + 180) % 360 + 360) % 360 - 180;
                                    const lat = (v - 0.5) * 180;
                                    const onLand = allDots || isOnLand(lng, lat);
                                    const idx = (ty * texW + tx) * 4;
                                    if (onLand) {
                                        data[idx] = fr;
                                        data[idx + 1] = fg;
                                        data[idx + 2] = fb;
                                        data[idx + 3] = fa;
                                    } else {
                                        data[idx + 3] = 0;
                                    }
                                }
                            }
                            fctx.putImageData(img, 0, 0);
                            const fillTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](fillCanvas);
                            fillTexture.flipY = false;
                            fillTexture.needsUpdate = true;
                            const fillGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](globeRadius * 1.002, 64, 64);
                            const fillMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                                map: fillTexture,
                                transparent: true
                            });
                            dotInstances = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](fillGeometry, fillMaterial);
                            globeGroup.add(dotInstances);
                        } else {
                            const dotCoordinates = [];
                            const baseStep = dotSpacing * 0.08;
                            for(let lat = -90; lat <= 90; lat += baseStep){
                                const latRad = Math.abs(lat) * Math.PI / 180;
                                const cosLat = Math.cos(latRad);
                                const lngStep = cosLat > 0.01 ? baseStep / Math.max(0.3, cosLat) : 360;
                                for(let lng = -180; lng < 180; lng += lngStep){
                                    if (allDots || isOnLand(lng, lat)) {
                                        dotCoordinates.push([
                                            lng,
                                            lat
                                        ]);
                                    }
                                }
                            }
                            if (dotCoordinates.length > 0) {
                                const dotGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.01 * dotSizeMultiplier, 4, 4);
                                const dotColorObj = resolvedDotColor ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](resolvedDotColor) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0.6, 0.6, 0.6);
                                const dotMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                                    color: dotColorObj,
                                    transparent: dotRgba.a < 1 || dotRgba.a === 0,
                                    opacity: dotRgba.a
                                });
                                const instanced = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancedMesh"](dotGeometry, dotMaterial, dotCoordinates.length);
                                const matrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
                                for(let i = 0; i < dotCoordinates.length; i++){
                                    const [lng, lat] = dotCoordinates[i];
                                    const pos = latLngToPosition(lat, lng);
                                    matrix.makeScale(1, 1, 1);
                                    matrix.setPosition(pos.x * globeRadius, pos.y * globeRadius, pos.z * globeRadius);
                                    instanced.setMatrixAt(i, matrix);
                                }
                                instanced.instanceMatrix.needsUpdate = true;
                                dotInstances = instanced;
                                globeGroup.add(dotInstances);
                            }
                        }
                        updateMarkers();
                        renderer.render(scene, camera);
                        canvas.style.opacity = "1";
                        canvas.style.visibility = "visible";
                        setIsLoading(false);
                    } catch (err) {
                        setError("Failed to load land map data");
                        setIsLoading(false);
                    }
                }
            }["Globe.useEffect.loadWorldData"];
            const updateMarkers = {
                "Globe.useEffect.updateMarkers": ()=>{
                    markerMeshes.forEach({
                        "Globe.useEffect.updateMarkers": (mesh)=>globeGroup.remove(mesh)
                    }["Globe.useEffect.updateMarkers"]);
                    markerMeshes = [];
                    if (markerConfig.markers && markerConfig.markers.length > 0) {
                        const markerSize = 0.01 * markerRadiusMultiplier;
                        const markerGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](markerSize, 16, 16);
                        const markerColorObj = resolvedMarkerColor ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](resolvedMarkerColor) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](1, 1, 1);
                        const markerMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                            color: markerColorObj
                        });
                        markerConfig.markers.forEach({
                            "Globe.useEffect.updateMarkers": (marker)=>{
                                if (!marker || typeof marker.lat !== "number" || typeof marker.lng !== "number") return;
                                const pos = latLngToPosition(marker.lat, marker.lng);
                                const markerMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](markerGeometry, markerMaterial.clone());
                                markerMesh.position.set(pos.x * globeRadius, pos.y * globeRadius, pos.z * globeRadius);
                                globeGroup.add(markerMesh);
                                markerMeshes.push(markerMesh);
                            }
                        }["Globe.useEffect.updateMarkers"]);
                    }
                }
            }["Globe.useEffect.updateMarkers"];
            const initialLongitudeRad = initialLongitude * Math.PI / 180;
            const initialLatitudeRad = initialLatitude * Math.PI / 180;
            const rotation = {
                x: initialLongitudeRad,
                y: initialLatitudeRad
            };
            const targetRotation = {
                x: initialLongitudeRad,
                y: initialLatitudeRad
            };
            const velocity = {
                x: 0,
                y: 0
            };
            let isDragging = false;
            let isHovering = false;
            let lastMouseX = 0;
            let lastMouseY = 0;
            let animationFrameId = null;
            const lerpFactor = smoothingN === 0 ? 1 : mapLinear(smoothingN, 0, 1, 0.4, 0.03);
            const velocityDecay = mapLinear(smoothingN, 0, 1, 0.7, 0.96);
            const globeGroup = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
            globeGroup.rotation.y = initialLongitudeRad;
            globeGroup.rotation.x = initialLatitudeRad;
            scene.add(globeGroup);
            globeGroup.add(oceanMesh);
            if (showGrid && graticuleColor && graticuleRgba.a > 0) {
                globeGroup.add(graticuleGroup);
            }
            globeGroup.add(continentOutlineGroup);
            markerMeshes.forEach({
                "Globe.useEffect": (mesh)=>globeGroup.add(mesh)
            }["Globe.useEffect"]);
            const animate = {
                "Globe.useEffect.animate": ()=>{
                    let needsRender = false;
                    const threshold = 0.01;
                    if (!isDragging && rotationSpeed !== 0 && (!stopOnHover || !isHovering)) {
                        targetRotation.x += rotationSpeed * 0.01;
                    }
                    if (!isDragging && smoothingN > 0) {
                        if (Math.abs(velocity.x) > threshold || Math.abs(velocity.y) > threshold) {
                            targetRotation.x += velocity.x;
                            targetRotation.y += velocity.y;
                            targetRotation.y = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotation.y));
                            velocity.x *= velocityDecay;
                            velocity.y *= velocityDecay;
                        } else {
                            velocity.x = 0;
                            velocity.y = 0;
                        }
                    }
                    const dx = targetRotation.x - rotation.x;
                    const dy = targetRotation.y - rotation.y;
                    if (Math.abs(dx) > threshold || Math.abs(dy) > threshold || rotationSpeed !== 0 || isDragging) {
                        rotation.x += dx * lerpFactor;
                        rotation.y += dy * lerpFactor;
                        rotation.y = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotation.y));
                        needsRender = true;
                    }
                    if (needsRender || rotationSpeed !== 0 || isDragging) {
                        globeGroup.rotation.y = rotation.x;
                        globeGroup.rotation.x = rotation.y;
                        renderer.render(scene, camera);
                    }
                    const hasVelocity = Math.abs(velocity.x) > threshold || Math.abs(velocity.y) > threshold;
                    const hasLerpDelta = Math.abs(dx) > threshold || Math.abs(dy) > threshold;
                    const needsContinue = isDragging || rotationSpeed !== 0 || hasVelocity || hasLerpDelta;
                    if (needsContinue) {
                        animationFrameId = requestAnimationFrame(animate);
                    } else {
                        animationFrameId = null;
                    }
                }
            }["Globe.useEffect.animate"];
            const startAnimation = {
                "Globe.useEffect.startAnimation": ()=>{
                    if (animationFrameId === null) {
                        animationFrameId = requestAnimationFrame(animate);
                    }
                }
            }["Globe.useEffect.startAnimation"];
            if (rotationSpeed !== 0) {
                startAnimation();
            }
            const handleMouseDown = {
                "Globe.useEffect.handleMouseDown": (event)=>{
                    isDragging = true;
                    velocity.x = 0;
                    velocity.y = 0;
                    lastMouseX = event.clientX;
                    lastMouseY = event.clientY;
                    startAnimation();
                    const handleMouseMoveDrag = {
                        "Globe.useEffect.handleMouseDown.handleMouseMoveDrag": (moveEvent)=>{
                            const sensitivity = mapDragSpeedUiToSensitivity(dragSpeed);
                            const dx = moveEvent.clientX - lastMouseX;
                            const dy = moveEvent.clientY - lastMouseY;
                            targetRotation.x += dx * sensitivity;
                            targetRotation.y += dy * sensitivity;
                            targetRotation.y = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotation.y));
                            velocity.x = dx * sensitivity * 0.3;
                            velocity.y = dy * sensitivity * 0.3;
                            lastMouseX = moveEvent.clientX;
                            lastMouseY = moveEvent.clientY;
                        }
                    }["Globe.useEffect.handleMouseDown.handleMouseMoveDrag"];
                    const handleMouseUp = {
                        "Globe.useEffect.handleMouseDown.handleMouseUp": ()=>{
                            document.removeEventListener("mousemove", handleMouseMoveDrag);
                            document.removeEventListener("mouseup", handleMouseUp);
                            isDragging = false;
                        }
                    }["Globe.useEffect.handleMouseDown.handleMouseUp"];
                    document.addEventListener("mousemove", handleMouseMoveDrag);
                    document.addEventListener("mouseup", handleMouseUp);
                }
            }["Globe.useEffect.handleMouseDown"];
            canvas.addEventListener("mousedown", handleMouseDown);
            const raycaster = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raycaster"]();
            const mouse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
            const handleMouseMove = {
                "Globe.useEffect.handleMouseMove": (event)=>{
                    if (!stopOnHover) return;
                    const rect = canvas.getBoundingClientRect();
                    mouse.x = (event.clientX - rect.left) / rect.width * 2 - 1;
                    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
                    raycaster.setFromCamera(mouse, camera);
                    const intersects = raycaster.intersectObject(oceanMesh);
                    isHovering = intersects.length > 0;
                }
            }["Globe.useEffect.handleMouseMove"];
            canvas.addEventListener("mousemove", handleMouseMove);
            const resizeObserver = new ResizeObserver({
                "Globe.useEffect": ()=>{
                    const newWidth = container.clientWidth || container.offsetWidth || 800;
                    const newHeight = container.clientHeight || container.offsetHeight || 600;
                    camera.aspect = newWidth / newHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(newWidth, newHeight);
                    const newCameraDistance = 2.5 / scaleMultiplier;
                    camera.position.set(0, 0, newCameraDistance);
                    camera.lookAt(0, 0, 0);
                    renderer.render(scene, camera);
                }
            }["Globe.useEffect"]);
            resizeObserver.observe(container);
            loadWorldData();
            return ({
                "Globe.useEffect": ()=>{
                    if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
                    canvas.removeEventListener("mousedown", handleMouseDown);
                    canvas.removeEventListener("mousemove", handleMouseMove);
                    resizeObserver.disconnect();
                    renderer.dispose();
                    container.removeChild(canvas);
                }
            })["Globe.useEffect"];
        }
    }["Globe.useEffect"], [
        speed,
        smoothing,
        dots,
        fill,
        fillColor,
        allDots,
        density,
        dotSize,
        dotColor,
        scale,
        stopOnHover,
        markerConfig,
        direction,
        initialLatitude,
        initialLongitude,
        oceanColor,
        outlineColor,
        showOutline,
        graticuleColor,
        showGrid,
        outlineWidth,
        dragSpeed,
        detail,
        rotationSpeed,
        dotSpacing,
        dotSizeMultiplier,
        markerRadiusMultiplier,
        scaleMultiplier
    ]);
    const containerStyle = {
        ...style,
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: containerStyle,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    minWidth: 0,
                    minHeight: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    textAlign: "center",
                    padding: "16px",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "16px",
                            fontWeight: 600
                        },
                        children: "Error loading Earth visualization"
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/globe.tsx",
                        lineNumber: 985,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "13px",
                            opacity: 0.7,
                            marginTop: "4px"
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/globe.tsx",
                        lineNumber: 988,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/originkit/ui/hero-23/globe.tsx",
                lineNumber: 967,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/globe.tsx",
            lineNumber: 966,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: containerStyle
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/globe.tsx",
        lineNumber: 996,
        columnNumber: 12
    }, this);
}
_s(Globe, "UNr1+OlNf6gVKhMdeG4KmGmkMHs=");
_c = Globe;
var _c;
__turbopack_context__.k.register(_c, "Globe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/originkit/ui/hero-23/media-globe.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaGlobe",
    ()=>MediaGlobe,
    "MediaStardust",
    ()=>MediaStardust
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/originkit/ui/hero-23/globe.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$stardust$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/originkit/ui/hero-23/stardust.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";
"use client";
;
;
;
const useMediaQuery = (query)=>{
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            const mql = window.matchMedia(query);
            const update = {
                "useMediaQuery.useEffect.update": ()=>setMatches(mql.matches)
            }["useMediaQuery.useEffect.update"];
            update();
            mql.addEventListener("change", update);
            return ({
                "useMediaQuery.useEffect": ()=>mql.removeEventListener("change", update)
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        query
    ]);
    return matches;
};
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
const MediaGlobe = ({ query })=>{
    _s1();
    if (!useMediaQuery(query)) return null;
    // Component defaults stay as authored; only the framing scale is overridden
    // here so the sphere's silhouette exactly fills its box (370.4px mobile /
    // 898px desktop), matching Figma node 2001:21604.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        scale: 9.7,
        initialLatitude: 12,
        style: {
            width: "100%",
            height: "100%"
        }
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/media-globe.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(MediaGlobe, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
_c = MediaGlobe;
const MediaStardust = ({ query, ...props })=>{
    _s2();
    if (!useMediaQuery(query)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$stardust$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        style: {
            width: "100%",
            height: "100%"
        }
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/media-globe.tsx",
        lineNumber: 49,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(MediaStardust, "AGUsWXV/IGWEYGrGyhqugaEb9zc=", false, function() {
    return [
        useMediaQuery
    ];
});
_c1 = MediaStardust;
var _c, _c1;
__turbopack_context__.k.register(_c, "MediaGlobe");
__turbopack_context__.k.register(_c1, "MediaStardust");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/originkit/ui/hero-23/scale-frame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScaleFrame",
    ()=>ScaleFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";
"use client";
;
/** Sizing has to happen before the first paint, otherwise the frame shows at
 *  1× for a frame or two and then snaps to its real scale. React can't do that
 *  during SSR, so this runs inline right after the markup — the browser applies
 *  it while still parsing, and the effect below only keeps it in sync. */ const inlineScale = (id, frameWidth)=>`(function(){var o=document.getElementById(${JSON.stringify(id)});if(!o)return;` + `var i=o.firstElementChild;if(!i)return;var w=o.clientWidth;if(!w)return;` + `var s=w/${frameWidth};i.style.transform='scale('+s+')';` + `i.style.setProperty('--frame-scale',String(s));` + `o.style.height=(i.offsetHeight*s)+'px';})()`;
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"];
const ScaleFrame = ({ frameWidth, className, children })=>{
    _s();
    const outerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** devicePixelRatio as it was before the user zoomed anything */ const baseDprRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [measured, setMeasured] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    useIsomorphicLayoutEffect({
        "ScaleFrame.useIsomorphicLayoutEffect": ()=>{
            const outer = outerRef.current;
            const inner = innerRef.current;
            if (!outer || !inner) return;
            const measure = {
                "ScaleFrame.useIsomorphicLayoutEffect.measure": ()=>{
                    const width = outer.clientWidth;
                    if (!width) return;
                    // Ctrl +/− works by shrinking the CSS viewport, which is the same signal
                    // this component scales from — so without compensation the frame scales
                    // down by exactly the amount you zoomed in and nothing appears to change.
                    // devicePixelRatio moves with zoom by the same factor, so measuring it
                    // against its value on mount recovers the zoom level and cancels the
                    // cancellation. Baseline is captured once: a page loaded at 150% starts
                    // fit-to-width as before, and zooming from there behaves normally.
                    if (baseDprRef.current === null) {
                        baseDprRef.current = window.devicePixelRatio || 1;
                    }
                    const zoom = (window.devicePixelRatio || 1) / baseDprRef.current;
                    const scale = width / frameWidth * zoom;
                    inner.style.transform = `scale(${scale})`;
                    // published so a child can opt out of the scaling (see the tablet header
                    // in sec3, which counter-scales to keep its native height)
                    inner.style.setProperty("--frame-scale", String(scale));
                    outer.style.height = `${inner.offsetHeight * scale}px`;
                    // Zoomed in, the frame is now wider than its container — the sections clip
                    // overflow, so without this the extra would simply be cropped off with no
                    // way to reach it. Zoomed out it is narrower, so centre it rather than
                    // leaving the gap on one side. Both are no-ops at 100%.
                    const scaledWidth = frameWidth * scale;
                    outer.style.overflowX = scaledWidth > width + 1 ? "auto" : "";
                    inner.style.marginLeft = scaledWidth < width - 1 ? `${(width - scaledWidth) / 2}px` : "";
                    setMeasured(true);
                }
            }["ScaleFrame.useIsomorphicLayoutEffect.measure"];
            const observer = new ResizeObserver(measure);
            observer.observe(outer);
            observer.observe(inner);
            measure();
            // Zoom usually changes the viewport width too, so the observer covers it —
            // but not when the frame's box is pinned by something else, so watch the
            // pixel ratio directly as well.
            const dprWatch = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
            dprWatch.addEventListener("change", measure);
            return ({
                "ScaleFrame.useIsomorphicLayoutEffect": ()=>{
                    observer.disconnect();
                    dprWatch.removeEventListener("change", measure);
                }
            })["ScaleFrame.useIsomorphicLayoutEffect"];
        }
    }["ScaleFrame.useIsomorphicLayoutEffect"], [
        frameWidth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: outerRef,
                id: id,
                className: className,
                suppressHydrationWarning: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: innerRef,
                    suppressHydrationWarning: true,
                    style: {
                        width: frameWidth,
                        transformOrigin: "top left",
                        "--frame-scale": 1
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/scale-frame.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/scale-frame.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !measured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                dangerouslySetInnerHTML: {
                    __html: inlineScale(id, frameWidth)
                }
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/scale-frame.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/scale-frame.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScaleFrame, "uq+2+VAdEXJHBFRnr+jrHD4ue94=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        useIsomorphicLayoutEffect
    ];
});
_c = ScaleFrame;
var _c;
__turbopack_context__.k.register(_c, "ScaleFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/originkit/ui/hero-23/sec1-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sec1Hero",
    ()=>Sec1Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$media$2d$globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/originkit/ui/hero-23/media-globe.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$scale$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/originkit/ui/hero-23/scale-frame.tsx [app-client] (ecmascript)");
// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";
"use client";
;
;
;
const A = "/originkit/hero-23";
const HELVETICA = '"Helvetica Neue", Helvetica, Arial, sans-serif';
const NAV_LINKS = [
    {
        label: "Home",
        active: true
    },
    {
        label: "Pricing",
        active: false
    },
    {
        label: "About",
        active: false
    },
    {
        label: "Tools",
        active: false
    }
];
const FLAGS = [
    {
        src: `${A}/flag-canada.svg`,
        alt: "Canada"
    },
    {
        src: `${A}/flag-sweden.svg`,
        alt: "Sweden"
    },
    {
        src: `${A}/flag-brazil.svg`,
        alt: "Brazil"
    },
    {
        src: `${A}/flag-taiwan.svg`,
        alt: "Taiwan"
    },
    {
        src: `${A}/flag-liberia.svg`,
        alt: "Liberia"
    },
    {
        src: `${A}/flag-ireland.svg`,
        alt: "Ireland"
    }
];
const AVATARS = [
    1,
    2,
    3
];
/** Entrance stagger. `hero-reveal` (globals.css) fades + lifts, and collapses to
 *  a plain fade under prefers-reduced-motion. */ const REVEAL = "animate-hero-reveal";
const delay = (ms)=>({
        animationDelay: `${ms}ms`
    });
/** Linearly interpolates a Figma value between two viewport widths, clamped at
 *  both ends — used to grow the tablet frame into the desktop one. */ const interpolate = (from, to)=>{
    const [fromVw, fromPx] = from;
    const [toVw, toPx] = to;
    const slope = (toPx - fromPx) / (toVw - fromVw);
    const intercept = fromPx - slope * fromVw;
    const sign = intercept < 0 ? "-" : "+";
    const track = `calc(${(slope * 100).toFixed(3)}vw ${sign} ${Math.abs(intercept).toFixed(3)}px)`;
    const [min, max] = fromPx < toPx ? [
        fromPx,
        toPx
    ] : [
        toPx,
        fromPx
    ];
    return `clamp(${min}px, ${track}, ${max}px)`;
};
/** Tablet → desktop band (744px → 1280px). */ const fluidLg = (atTablet, atDesktop)=>interpolate([
        744,
        atTablet
    ], [
        1280,
        atDesktop
    ]);
const STARDUST = {
    particleDensity: 10,
    minSize: 1,
    maxSize: 1,
    speed: 10,
    particleSpeed: 1,
    movement: 6,
    angle: 184,
    particleColor: "#FFFFFF33",
    background: "#0F0F0F"
};
const BUTTON_SHADOW = "drop-shadow-[0px_53px_7.5px_rgba(0,0,0,0),0px_34px_7px_rgba(0,0,0,0.01),0px_19px_6px_rgba(0,0,0,0.05),0px_9px_4.5px_rgba(0,0,0,0.09),0px_2px_2.5px_rgba(0,0,0,0.1)]";
const BUTTON_GRADIENT = "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(229, 229, 229) 0%, rgb(229, 229, 229) 100%)";
const LightButton = ({ label, className, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: `relative flex shrink-0 cursor-pointer items-center justify-center rounded-[3px] transition-opacity duration-200 hover:opacity-80 ${className} ${BUTTON_SHADOW}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 rounded-[3px]",
                style: {
                    backgroundImage: BUTTON_GRADIENT
                }
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 85,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "relative shrink-0 whitespace-nowrap text-[16px] leading-normal tracking-[-0.32px] text-[#060e08]",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 90,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_2px_0px_white,inset_0px_-1.5px_0px_0px_rgba(0,0,0,0.23)]"
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 93,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = LightButton;
const DarkButton = ({ label, className, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: `relative flex shrink-0 cursor-pointer items-center justify-center rounded-[3px] border border-solid border-[rgba(255,255,255,0.1)] bg-[#292929] transition-opacity duration-200 hover:opacity-80 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "relative shrink-0 whitespace-nowrap text-[16px] leading-normal tracking-[-0.32px] text-white",
            children: label
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 110,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = DarkButton;
const Badge = ({ step })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: delay(step),
        className: `${REVEAL} relative flex shrink-0 items-center justify-center gap-[10px] overflow-clip rounded-[3px] border border-solid border-[rgba(255,255,255,0.1)] bg-[#282828] px-[12px] py-[8px]`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative size-[6px] shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "",
                    className: "absolute inset-0 block size-full max-w-none",
                    src: `${A}/dot.svg`
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 122,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 121,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "relative shrink-0 whitespace-nowrap text-[12px] leading-normal tracking-[-0.24px] text-white",
                children: "$20M raised led by Sequoia Capital"
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 124,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = Badge;
const Corners = ({ size = "size-[10px]" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute left-0 top-0 ${size}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "",
                    className: "block size-full max-w-none",
                    src: `${A}/corner-tl.svg`
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute right-0 top-0 flex items-center justify-center ${size}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-none rotate-180 -scale-y-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative ${size}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "",
                            className: "block size-full max-w-none",
                            src: `${A}/corner-tr.svg`
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 136,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 135,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 right-0 flex items-center justify-center ${size}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-none rotate-180",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative ${size}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "",
                            className: "block size-full max-w-none",
                            src: `${A}/corner-tr.svg`
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 143,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 142,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-0 flex items-center justify-center ${size}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-none -scale-y-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative ${size}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "",
                            className: "block size-full max-w-none",
                            src: `${A}/corner-tl.svg`
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 150,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 149,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 131,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Corners;
/** Every size below is a raw CSS length, so a caller can hand it a fixed px
 *  value (iPad / desktop frames) or a fluid clamp() (phones). */ const StatCard = ({ className, shadow, media, value, caption, width, padding, gap, radius, border, valueSize, captionSize, tracking, position })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${REVEAL} absolute flex flex-col items-center border-solid border-[rgba(255,255,255,0.1)] bg-[#292929] ${className} ${shadow}`,
        style: {
            ...position,
            width,
            padding,
            gap,
            borderRadius: radius,
            borderWidth: border
        },
        children: [
            media,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full shrink-0 text-center",
                style: {
                    letterSpacing: tracking
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-0 font-bold leading-[1.15] text-[rgba(255,255,255,0.8)]",
                        style: {
                            fontSize: valueSize
                        },
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 207,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "leading-[1.15] text-[rgba(255,255,255,0.6)]",
                        style: {
                            fontSize: captionSize
                        },
                        children: caption
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 213,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 206,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 192,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = StatCard;
const Avatars = ({ size, overlap })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex shrink-0 items-center",
        children: AVATARS.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative shrink-0",
                style: {
                    width: size,
                    height: size,
                    marginRight: n < 3 ? `calc(-1 * ${overlap})` : undefined
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "",
                    className: "absolute inset-0 block size-full max-w-none",
                    src: `${A}/avatar-${n}.png`
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, n, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 221,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = Avatars;
const FlagRow = ({ size, gap, maskSize, maskPosition, offsetX = "0px", offsetY = "0px" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative col-start-1 row-start-1 flex items-center",
            style: {
                gap,
                marginLeft: `calc(-1 * ${offsetX})`,
                marginTop: offsetY,
                maskImage: `url("${A}/flags-mask.svg")`,
                WebkitMaskImage: `url("${A}/flags-mask.svg")`,
                maskMode: "alpha",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskSize,
                WebkitMaskSize: maskSize,
                ...maskPosition ? {
                    maskPosition,
                    WebkitMaskPosition: maskPosition
                } : {}
            },
            children: FLAGS.map((flag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative shrink-0",
                    style: {
                        width: size,
                        height: size
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        alt: flag.alt,
                        className: "absolute inset-0 block size-full max-w-none",
                        src: flag.src
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, flag.alt, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 258,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 257,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = FlagRow;
// iPad and desktop share one card size (Figma 2001:35156 / 2001:58408).
const BIG_CARD = {
    className: "overflow-clip",
    padding: "12px",
    gap: "8px",
    radius: "6px",
    border: "1px",
    valueSize: "28px",
    captionSize: "16px",
    tracking: "-0.4px"
};
const BIG_CARD_LEFT = {
    ...BIG_CARD,
    width: "156px",
    value: "300K+",
    caption: "users globally",
    media: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatars, {
        size: "24px",
        overlap: "12px"
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 308,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0))
};
const BIG_CARD_RIGHT = {
    ...BIG_CARD,
    width: "171px",
    value: "120+",
    caption: "countries supported",
    media: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagRow, {
        size: "24px",
        gap: "8px",
        maskSize: "184px 24px"
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 316,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0))
};
const CARD_SHADOW_LEFT_DESKTOP = "shadow-[0px_86px_24px_0px_rgba(186,186,186,0),0px_55px_22px_0px_rgba(186,186,186,0.01),0px_31px_19px_0px_rgba(186,186,186,0.05),0px_14px_14px_0px_rgba(186,186,186,0.09),0px_3px_8px_0px_rgba(186,186,186,0.1)]";
const CARD_SHADOW_RIGHT_DESKTOP = "shadow-[0px_86px_24px_0px_rgba(186,186,186,0),0px_55px_22px_0px_rgba(186,186,186,0.01),0px_31px_19px_0px_rgba(186,186,186,0.05),0px_14px_14px_0px_rgba(186,186,186,0.09),0px_3px_8px_0px_rgba(186,186,186,0.1)]";
const CARD_SHADOW_LEFT_MOBILE = "shadow-[0px_35.467px_9.898px_0px_rgba(186,186,186,0),0px_22.683px_9.073px_0px_rgba(186,186,186,0.01),0px_12.785px_7.836px_0px_rgba(186,186,186,0.05),0px_5.774px_5.774px_0px_rgba(186,186,186,0.09),0px_1.237px_3.299px_0px_rgba(186,186,186,0.1)]";
const CARD_SHADOW_RIGHT_MOBILE = "shadow-[0px_35.467px_9.898px_0px_rgba(186,186,186,0),0px_22.683px_9.073px_0px_rgba(186,186,186,0.01),0px_12.785px_7.836px_0px_rgba(186,186,186,0.05),0px_5.774px_5.774px_0px_rgba(186,186,186,0.09),0px_1.237px_3.299px_0px_rgba(186,186,186,0.1)]";
const BRAND_ART = {
    one: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-[10.01%_0.01%_7.49%_24.08%]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "",
                    className: "absolute inset-0 block size-full max-w-none",
                    src: `${A}/brand-1-type.svg`
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-[0_78.9%_0_-0.01%]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    alt: "",
                    className: "absolute inset-0 block size-full max-w-none",
                    src: `${A}/brand-1-mark.svg`
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 339,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 330,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    two: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-[0_0_-0.01%_0]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            alt: "",
            className: "absolute inset-0 block size-full max-w-none",
            src: `${A}/brand-2.svg`
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 349,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 348,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    three: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-[-0.02%_0_0.02%_0]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            alt: "",
            className: "absolute inset-0 block size-full max-w-none",
            src: `${A}/brand-3.svg`
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 354,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 353,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    four: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-[0_-0.01%_0_0.01%]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            alt: "",
            className: "absolute inset-0 block size-full max-w-none",
            src: `${A}/brand-4.svg`
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 359,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 358,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
// Logo box sizes are identical on iPad and desktop; only mobile shrinks them.
const BRAND_SIZE = {
    one: "h-[23.741px] w-[130.577px]",
    two: "h-[19.975px] w-[84.396px]",
    three: "h-[34.569px] w-[86.421px]",
    four: "h-[22.045px] w-[97px]"
};
const MOBILE_CELLS = [
    {
        art: "one",
        size: "h-[17.806px] w-[97.933px]"
    },
    {
        art: "two",
        size: "h-[14.982px] w-[63.297px]"
    },
    {
        art: "three",
        size: "h-[25.926px] w-[64.816px]"
    }
];
const IPAD_CELLS = [
    {
        art: "one",
        size: BRAND_SIZE.one
    },
    {
        art: "three",
        size: BRAND_SIZE.three
    },
    {
        art: "four",
        size: BRAND_SIZE.four
    },
    {
        art: "two",
        size: BRAND_SIZE.two
    }
];
const DESKTOP_CELLS = [
    {
        art: "one",
        size: BRAND_SIZE.one
    },
    {
        art: "two",
        size: BRAND_SIZE.two
    },
    {
        art: "three",
        size: BRAND_SIZE.three
    },
    {
        art: "four",
        size: BRAND_SIZE.four
    },
    {
        art: "two",
        size: BRAND_SIZE.two
    }
];
const LogoStrip = ({ className, cells, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${REVEAL} flex items-center border border-solid border-[rgba(255,255,255,0.1)] bg-[#0f0f0f] ${className}`,
        style: style,
        children: [
            cells.map((cell, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative h-full min-w-px flex-[1_0_0] overflow-clip ${index < cells.length - 1 ? "border-r border-solid border-[rgba(255,255,255,0.1)]" : ""}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip ${cell.size}`,
                        children: BRAND_ART[cell.art]
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 409,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {}, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 422,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 404,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = LogoStrip;
/* ------------------------------- mobile ------------------------------- */ const MobileLayout = ()=>// The whole 402px Figma frame is scaled as one unit, so every ratio — line
    // breaks included — matches the design at any phone width while the layout
    // still grows with the screen. Hands over to the tablet frame at 640px,
    // where the scaled type has reached its 56px size.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$scale$2d$frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScaleFrame"], {
        frameWidth: 402,
        className: "w-full overflow-hidden min-[640px]:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-start gap-[16px] p-[16px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: delay(0),
                    className: `${REVEAL} relative flex h-[59px] w-full shrink-0 items-center justify-center gap-[121px] border border-solid border-[rgba(255,255,255,0.1)] bg-[#0f0f0f] px-[32px] py-[15.5px]`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex min-w-px flex-[1_0_0] items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#home",
                                    className: "relative h-[28px] w-[40px] shrink-0 overflow-clip",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        alt: "Logo",
                                        className: "absolute inset-0 block size-full max-w-none",
                                        src: `${A}/logo.svg`
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 442,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 441,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative size-[24px] shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-70",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        alt: "Menu",
                                        className: "absolute inset-0 block size-full max-w-none",
                                        src: `${A}/menu.svg`
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 445,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 444,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 440,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {}, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 448,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 436,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-[628px] w-full shrink-0 overflow-clip border border-solid border-[rgba(255,255,255,0.1)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 overflow-clip",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute left-[-1px] top-[-3px] h-[631px] w-[372px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$media$2d$globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStardust"], {
                                    query: "(max-width: 639px)",
                                    ...STARDUST
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 455,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 454,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 453,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-[12px] right-[12px] top-[32px] flex h-[304px] flex-col items-center gap-[24px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex w-full shrink-0 flex-col items-center gap-[12px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            step: 80
                                        }, void 0, false, {
                                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                            lineNumber: 462,
                                            columnNumber: 11
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex w-full shrink-0 flex-col items-start gap-[8px] text-center text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    style: delay(160),
                                                    className: `${REVEAL} relative w-[340px] max-w-full shrink-0 text-[35px] leading-[40px] tracking-[-1.4px]`,
                                                    children: "Ther world is your AUDIENCE."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 13
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: delay(240),
                                                    className: `${REVEAL} relative w-full shrink-0 text-[14px] leading-[1.5] text-[rgba(255,255,255,0.6)]`,
                                                    children: "Hire exceptional talent across 180+ countries, automate compliance, & manage international payroll."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 13
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                            lineNumber: 463,
                                            columnNumber: 11
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 461,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: delay(320),
                                    className: `${REVEAL} relative flex w-full shrink-0 flex-col items-start justify-center gap-[16px] overflow-clip`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightButton, {
                                            label: "Get started",
                                            href: "#start",
                                            className: "w-full px-[24px] py-[14px]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                            lineNumber: 480,
                                            columnNumber: 11
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkButton, {
                                            label: "Book a call",
                                            href: "#book",
                                            className: "w-full px-[24px] py-[14px]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                            lineNumber: 481,
                                            columnNumber: 11
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 476,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 460,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 h-[224px] w-full overflow-clip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: delay(400),
                                    className: `${REVEAL} absolute left-1/2 top-0 h-[371.127px] w-[370.391px] -translate-x-1/2 overflow-clip rounded-[412px]`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$media$2d$globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaGlobe"], {
                                        query: "(max-width: 639px)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 491,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 487,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    className: "overflow-clip",
                                    shadow: CARD_SHADOW_LEFT_MOBILE,
                                    position: {
                                        ...delay(480),
                                        left: "20.02px",
                                        top: "20.41px"
                                    },
                                    value: "300K+",
                                    caption: "users globally",
                                    width: "107.1px",
                                    padding: "8.007px",
                                    gap: "6.006px",
                                    radius: "4.004px",
                                    border: "1.001px",
                                    valueSize: "18.017px",
                                    captionSize: "14.013px",
                                    tracking: "-0.165px",
                                    media: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatars, {
                                        size: "20.019px",
                                        overlap: "4.949px"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 508,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 494,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    className: "overflow-clip",
                                    shadow: CARD_SHADOW_RIGHT_MOBILE,
                                    position: {
                                        ...delay(560),
                                        right: "12.01px",
                                        top: "131.52px"
                                    },
                                    value: "120+",
                                    caption: "countries supported",
                                    width: "143.134px",
                                    padding: "8.007px",
                                    gap: "6.006px",
                                    radius: "4.004px",
                                    border: "0.412px",
                                    valueSize: "18.017px",
                                    captionSize: "14.013px",
                                    tracking: "-0.165px",
                                    media: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagRow, {
                                        size: "20.019px",
                                        gap: "6.006px",
                                        maskSize: "145.137px 21.02px",
                                        maskPosition: "2.76px -1.07px",
                                        offsetX: "2.76px",
                                        offsetY: "1.07px"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 511,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 486,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {
                            size: "size-[9.326px]"
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 538,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 452,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoStrip, {
                    className: "relative h-[80px] w-full shrink-0",
                    style: delay(640),
                    cells: MOBILE_CELLS
                }, void 0, false, {
                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                    lineNumber: 542,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
            lineNumber: 434,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 433,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = MobileLayout;
/* -------------------------------- iPad -------------------------------- */ const IpadLayout = ()=>// Figma frame is 744 wide (680 content + 32 gutters); widths stay fluid above
    // that so the same layout carries up to the 1280px desktop breakpoint.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden flex-col items-start gap-[16px] p-[16px_32px] min-[640px]:flex desktop-sm:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: delay(0),
                className: `${REVEAL} relative flex h-[59px] w-full shrink-0 items-center justify-center border border-solid border-[rgba(255,255,255,0.1)] bg-[#0f0f0f] px-[32px] py-[15.5px]`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex min-w-px flex-[1_0_0] items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#home",
                                className: "relative h-[28px] w-[40px] shrink-0 overflow-clip",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: "Logo",
                                    className: "absolute inset-0 block size-full max-w-none",
                                    src: `${A}/logo.svg`
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 561,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 560,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative size-[24px] shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-70",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: "Menu",
                                    className: "absolute inset-0 block size-full max-w-none",
                                    src: `${A}/menu.svg`
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 564,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 563,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 559,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {}, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 567,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 558,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full shrink-0 overflow-clip border border-solid border-[rgba(255,255,255,0.1)]",
                style: {
                    height: fluidLg(770, 857)
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-clip",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute left-[-1px] top-[-1px] h-[calc(100%+90px)] w-[calc(100%+2px)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$media$2d$globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStardust"], {
                                query: "(min-width: 640px) and (max-width: 1279px)",
                                ...STARDUST
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 577,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 576,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 575,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-[48px] flex w-[468px] max-w-[calc(100%-48px)] -translate-x-1/2 flex-col items-center gap-[32px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex w-full shrink-0 flex-col items-center gap-[24px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                        step: 80
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 584,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex w-full shrink-0 flex-col items-start gap-[16px] text-center text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                style: delay(160),
                                                className: `${REVEAL} relative w-full shrink-0 text-[56px] leading-[55px] tracking-[-2.24px]`,
                                                children: "Build Your Global Team. Effortlessly."
                                            }, void 0, false, {
                                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                lineNumber: 586,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: delay(240),
                                                className: `${REVEAL} relative w-full shrink-0 text-[16px] leading-[1.5] text-[rgba(255,255,255,0.6)]`,
                                                children: "Hire exceptional talent across 180+ countries, automate compliance, and manage international payroll."
                                            }, void 0, false, {
                                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                lineNumber: 589,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 585,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 583,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: delay(320),
                                className: `${REVEAL} relative flex shrink-0 items-center gap-[16px] overflow-clip`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightButton, {
                                        label: "Get started",
                                        href: "#start",
                                        className: "px-[24px] py-[14px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 602,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkButton, {
                                        label: "Book a call",
                                        href: "#book",
                                        className: "px-[24px] py-[14px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 603,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 598,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 582,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-full overflow-clip",
                        style: {
                            height: fluidLg(360, 447)
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${REVEAL} absolute left-1/2 top-0 aspect-[680/681.433] -translate-x-1/2 overflow-clip rounded-[999px]`,
                                style: {
                                    ...delay(400),
                                    width: fluidLg(680, 898),
                                    maxWidth: "100%"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$media$2d$globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaGlobe"], {
                                    query: "(min-width: 640px) and (max-width: 1279px)"
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 617,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 613,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                ...BIG_CARD_LEFT,
                                position: {
                                    ...delay(480),
                                    left: fluidLg(32, 85),
                                    top: "8.3%"
                                },
                                shadow: CARD_SHADOW_LEFT_DESKTOP
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 620,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                ...BIG_CARD_RIGHT,
                                position: {
                                    ...delay(560),
                                    right: fluidLg(32, 51),
                                    top: "61.6%"
                                },
                                shadow: CARD_SHADOW_RIGHT_DESKTOP
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 626,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 609,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {
                        size: "size-[9.479px]"
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 633,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 571,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoStrip, {
                className: "relative h-[95px] w-full shrink-0",
                style: delay(640),
                cells: IPAD_CELLS
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 637,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 556,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = IpadLayout;
/* ------------------------------ desktop ------------------------------- */ const DesktopLayout = ()=>// Exact at 1280; above that every box keeps its proportion of the content
    // width (1184 = 100vw − 96) so the whole section grows with the screen.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden w-full flex-col items-start gap-[16px] p-[16px_48px] desktop-sm:flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: delay(0),
                className: `${REVEAL} relative flex w-full items-center justify-center border border-solid border-[rgba(255,255,255,0.1)] bg-[#0f0f0f] px-[32px] py-[16px]`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto flex min-w-px max-w-[1600px] flex-[1_0_0] items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#home",
                                className: "relative h-[28px] w-[40px] shrink-0 overflow-clip",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    alt: "Logo",
                                    className: "absolute inset-0 block size-full max-w-none",
                                    src: `${A}/logo.svg`
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 660,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 659,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightButton, {
                                label: "Get started",
                                href: "#start",
                                className: "px-[16px] py-[12px]"
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 662,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-1/2 top-[calc(50%-0.5px)] flex -translate-x-1/2 -translate-y-1/2 items-center gap-[24px] whitespace-nowrap text-[16px] leading-normal text-white",
                                children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `#${link.label.toLowerCase()}`,
                                        className: `relative shrink-0 cursor-pointer transition-opacity duration-200 ${link.active ? "hover:opacity-80" : "opacity-60 hover:opacity-100"}`,
                                        children: link.label
                                    }, link.label, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 665,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 663,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 658,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Corners, {}, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 677,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 652,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full shrink-0 overflow-clip border border-solid border-[rgba(255,255,255,0.1)]",
                style: {
                    height: "clamp(857px, calc(72.38vw - 69.5px), 1100px)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-clip",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute left-[-75px] top-[-3px] h-[calc(100%+6px)] w-[calc(100%+150px)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$media$2d$globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaStardust"], {
                                query: "(min-width: 1280px)",
                                ...STARDUST
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 687,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 686,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 685,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "",
                            className: "absolute inset-0 block size-full max-w-none",
                            src: `${A}/corners.svg`
                        }, void 0, false, {
                            fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                            lineNumber: 691,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 690,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-[48px] flex w-[468px] -translate-x-1/2 flex-col items-center gap-[32px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex w-full shrink-0 flex-col items-center gap-[24px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                        step: 80
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 697,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex w-full shrink-0 flex-col items-start gap-[16px] text-center text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                style: delay(160),
                                                className: `${REVEAL} relative w-full shrink-0 text-[56px] leading-[64px] tracking-[-2.24px]`,
                                                children: "Build Your Global Team. Effortlessly."
                                            }, void 0, false, {
                                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                lineNumber: 699,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: delay(240),
                                                className: `${REVEAL} relative w-full shrink-0 text-[16px] leading-[1.5] text-[rgba(255,255,255,0.6)]`,
                                                children: "Hire exceptional talent across 180+ countries, automate compliance, and manage international payroll."
                                            }, void 0, false, {
                                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                                lineNumber: 702,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 698,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 696,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: delay(320),
                                className: `${REVEAL} relative flex shrink-0 items-center gap-[16px] overflow-clip`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LightButton, {
                                        label: "Get started",
                                        href: "#start",
                                        className: "px-[24px] py-[14px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 715,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkButton, {
                                        label: "Book a call",
                                        href: "#book",
                                        className: "px-[24px] py-[14px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                        lineNumber: 716,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 711,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 695,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-1/2 aspect-[898/447] w-[75.84%] -translate-x-1/2 overflow-clip full-hd:w-[62%] ultrawide:w-[54%]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: delay(400),
                                className: `${REVEAL} absolute left-1/2 top-0 aspect-[898/900] w-full -translate-x-1/2 overflow-clip rounded-[999px]`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$originkit$2f$ui$2f$hero$2d$23$2f$media$2d$globe$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaGlobe"], {
                                    query: "(min-width: 1280px)"
                                }, void 0, false, {
                                    fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                    lineNumber: 726,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 722,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                ...BIG_CARD_LEFT,
                                position: {
                                    ...delay(480),
                                    left: "9.47%",
                                    top: "7.38%"
                                },
                                shadow: CARD_SHADOW_LEFT_DESKTOP
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 729,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                ...BIG_CARD_RIGHT,
                                position: {
                                    ...delay(560),
                                    right: "5.68%",
                                    top: "61.52%"
                                },
                                shadow: CARD_SHADOW_RIGHT_DESKTOP
                            }, void 0, false, {
                                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                                lineNumber: 735,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                        lineNumber: 721,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 681,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoStrip, {
                className: "relative h-[95px] w-full shrink-0",
                style: delay(640),
                cells: DESKTOP_CELLS
            }, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 744,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 650,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = DesktopLayout;
const Sec1Hero = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full bg-[#181818]",
        style: {
            fontFamily: HELVETICA
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileLayout, {}, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 754,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IpadLayout, {}, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 755,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopLayout, {}, void 0, false, {
                fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
                lineNumber: 756,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/originkit/ui/hero-23/sec1-hero.tsx",
        lineNumber: 753,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = Sec1Hero;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "LightButton");
__turbopack_context__.k.register(_c1, "DarkButton");
__turbopack_context__.k.register(_c2, "Badge");
__turbopack_context__.k.register(_c3, "Corners");
__turbopack_context__.k.register(_c4, "StatCard");
__turbopack_context__.k.register(_c5, "Avatars");
__turbopack_context__.k.register(_c6, "FlagRow");
__turbopack_context__.k.register(_c7, "LogoStrip");
__turbopack_context__.k.register(_c8, "MobileLayout");
__turbopack_context__.k.register(_c9, "IpadLayout");
__turbopack_context__.k.register(_c10, "DesktopLayout");
__turbopack_context__.k.register(_c11, "Sec1Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/originkit/ui/hero-23/stardust.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sparkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function parseColorToRgba(input) {
    if (!input) return {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    };
    const str = input.trim();
    const rgbaMatch = str.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i);
    if (rgbaMatch) {
        const r = Math.max(0, Math.min(255, parseFloat(rgbaMatch[1]))) / 255;
        const g = Math.max(0, Math.min(255, parseFloat(rgbaMatch[2]))) / 255;
        const b = Math.max(0, Math.min(255, parseFloat(rgbaMatch[3]))) / 255;
        const a = rgbaMatch[4] !== undefined ? Math.max(0, Math.min(1, parseFloat(rgbaMatch[4]))) : 1;
        return {
            r,
            g,
            b,
            a
        };
    }
    const hex = str.replace(/^#/, "");
    if (hex.length === 8) {
        return {
            r: parseInt(hex.slice(0, 2), 16) / 255,
            g: parseInt(hex.slice(2, 4), 16) / 255,
            b: parseInt(hex.slice(4, 6), 16) / 255,
            a: parseInt(hex.slice(6, 8), 16) / 255
        };
    }
    if (hex.length === 6) {
        return {
            r: parseInt(hex.slice(0, 2), 16) / 255,
            g: parseInt(hex.slice(2, 4), 16) / 255,
            b: parseInt(hex.slice(4, 6), 16) / 255,
            a: 1
        };
    }
    if (hex.length === 4) {
        return {
            r: parseInt(hex[0] + hex[0], 16) / 255,
            g: parseInt(hex[1] + hex[1], 16) / 255,
            b: parseInt(hex[2] + hex[2], 16) / 255,
            a: parseInt(hex[3] + hex[3], 16) / 255
        };
    }
    if (hex.length === 3) {
        return {
            r: parseInt(hex[0] + hex[0], 16) / 255,
            g: parseInt(hex[1] + hex[1], 16) / 255,
            b: parseInt(hex[2] + hex[2], 16) / 255,
            a: 1
        };
    }
    return {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    };
}
function rgbaToCanvasColor(rgba) {
    const r = Math.round(rgba.r * 255);
    const g = Math.round(rgba.g * 255);
    const b = Math.round(rgba.b * 255);
    if (rgba.a === 1) return `rgb(${r}, ${g}, ${b})`;
    return `rgba(${r}, ${g}, ${b}, ${rgba.a})`;
}
const DEFAULTS = {
    background: "#000000",
    particleColor: "#FFFFFF",
    particleDensity: 4,
    minSize: 1.5,
    maxSize: 1,
    speed: 10,
    particleSpeed: 1,
    movement: 6,
    angle: 180
};
// UI 1..10 → internal 0.5..12 (flicker rate)
function mapFlickerUiToInternal(ui) {
    const clamped = Math.max(1, Math.min(10, ui));
    const t = (clamped - 1) / 9;
    return 0.5 + t * 11.5;
}
// UI 1..10 → internal 5..60 (density)
function mapDensityUiToInternal(ui) {
    const clamped = Math.max(1, Math.min(10, ui));
    const t = (clamped - 1) / 9;
    return 5 + t * 55;
}
// Angle (deg) → unit drift vector.
// 0° = up, 90° = right, 180° = down, 270° = left — clockwise from top.
function angleToDrift(angleDeg) {
    const rad = (angleDeg - 90) * Math.PI / 180;
    return {
        vx: Math.cos(rad),
        vy: Math.sin(rad)
    };
}
function Sparkles({ background = DEFAULTS.background, particleColor = DEFAULTS.particleColor, particleDensity = DEFAULTS.particleDensity, minSize = DEFAULTS.minSize, maxSize = DEFAULTS.maxSize, speed = DEFAULTS.speed, particleSpeed = DEFAULTS.particleSpeed, movement = DEFAULTS.movement, angle = DEFAULTS.angle, style }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initParticles = (width, height)=>{
        const particles = [];
        const area = width * height;
        const mappedDensity = mapDensityUiToInternal(particleDensity);
        const count = Math.floor(area / 1e4 * mappedDensity);
        const velocityMultiplier = particleSpeed / 10 * 0.5; // 0-10 → 0-0.5
        for(let i = 0; i < count; i++){
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * velocityMultiplier,
                vy: (Math.random() - 0.5) * velocityMultiplier,
                size: minSize + Math.random() * (maxSize - minSize),
                opacity: Math.random(),
                opacityVel: (Math.random() - 0.5) * 0.04
            });
        }
        particlesRef.current = particles;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sparkles.useEffect": ()=>{
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const resize = {
                "Sparkles.useEffect.resize": ()=>{
                    const dpr = window.devicePixelRatio || 1;
                    const width = container.clientWidth || container.offsetWidth || 1;
                    const height = container.clientHeight || container.offsetHeight || 1;
                    canvas.width = width * dpr;
                    canvas.height = height * dpr;
                    canvas.style.width = `${width}px`;
                    canvas.style.height = `${height}px`;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                    initParticles(width, height);
                }
            }["Sparkles.useEffect.resize"];
            resize();
            const mappedSpeed = mapFlickerUiToInternal(speed);
            // Movement 0..10 → 0..1 px/frame drift magnitude
            const driftMag = movement * 0.1;
            const { vx: driftDirX, vy: driftDirY } = angleToDrift(angle);
            const driftVx = driftDirX * driftMag;
            const driftVy = driftDirY * driftMag;
            const backgroundRgba = parseColorToRgba(background);
            const backgroundColor = rgbaToCanvasColor(backgroundRgba);
            const particleColorRgba = parseColorToRgba(particleColor);
            const particleColorBase = rgbaToCanvasColor({
                ...particleColorRgba,
                a: 1
            });
            const drawParticles = {
                "Sparkles.useEffect.drawParticles": (width, height)=>{
                    ctx.clearRect(0, 0, width, height);
                    ctx.fillStyle = backgroundColor;
                    ctx.fillRect(0, 0, width, height);
                    ctx.fillStyle = particleColorBase;
                    for (const particle of particlesRef.current){
                        ctx.globalAlpha = particleColorRgba.a * particle.opacity;
                        ctx.beginPath();
                        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    ctx.globalAlpha = 1;
                }
            }["Sparkles.useEffect.drawParticles"];
            const animate = {
                "Sparkles.useEffect.animate": ()=>{
                    const dpr = window.devicePixelRatio || 1;
                    const width = canvas.width / dpr;
                    const height = canvas.height / dpr;
                    for (const particle of particlesRef.current){
                        particle.x += particle.vx + driftVx;
                        particle.y += particle.vy + driftVy;
                        // Wrap around edges
                        if (particle.x < 0) particle.x = width;
                        if (particle.x > width) particle.x = 0;
                        if (particle.y < 0) particle.y = height;
                        if (particle.y > height) particle.y = 0;
                        // Flicker
                        particle.opacity += particle.opacityVel * mappedSpeed * 0.5;
                        if (particle.opacity <= 0.1 || particle.opacity >= 1) {
                            particle.opacityVel *= -1;
                        }
                        particle.opacity = Math.max(0.1, Math.min(1, particle.opacity));
                    }
                    drawParticles(width, height);
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["Sparkles.useEffect.animate"];
            animate();
            window.addEventListener("resize", resize);
            return ({
                "Sparkles.useEffect": ()=>{
                    if (animationRef.current) cancelAnimationFrame(animationRef.current);
                    window.removeEventListener("resize", resize);
                }
            })["Sparkles.useEffect"];
        }
    }["Sparkles.useEffect"], [
        background,
        particleColor,
        particleDensity,
        minSize,
        maxSize,
        speed,
        particleSpeed,
        movement,
        angle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            ...style,
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                display: "block"
            }
        }, void 0, false, {
            fileName: "[project]/components/originkit/ui/hero-23/stardust.tsx",
            lineNumber: 272,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/originkit/ui/hero-23/stardust.tsx",
        lineNumber: 262,
        columnNumber: 9
    }, this);
}
_s(Sparkles, "fTHO3BvvK7JXJQWTAGDvYr2UceM=");
_c = Sparkles;
Sparkles.displayName = "Sparkles";
var _c;
__turbopack_context__.k.register(_c, "Sparkles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_originkit_1tckkof._.js.map