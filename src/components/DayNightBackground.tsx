import {useRef, useMemo, useState} from "react"
import styles from "../styles/components/DayNightBackground.module.css"
import * as THREE from "three"
import {Canvas, useFrame} from "@react-three/fiber"
import {PerspectiveCamera, Stars, useTexture, PerformanceMonitor} from "@react-three/drei"

const sunRadius: number = 0.6
const sunOrbitRadius: number = 6.5
const sunZ: number = 2.5

const sphereRotationSpeed: number = 0.05
const secPerDay: number = 1800
const baseTime: Date = new Date()
const sec: number = baseTime.getSeconds()
const min: number = baseTime.getMinutes() * 60
const hour: number = baseTime.getHours() * 3600
const baseProgress: number = sec + min + hour

const vertexShader = `
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform vec3 sunDirection;
  uniform vec3 sunsetColor;
  uniform vec3 nightColor;
  uniform vec3 dayColor;
  uniform float sunsetIntensity;
  uniform float nightIntensity;

  varying vec3 vWorldPosition;

  void main() {
    vec3 rayDir = normalize(vWorldPosition - cameraPosition);

    // 1. Calculate the horizon-based vertical gradient
    float verticalGradient = smoothstep(-0.5, 0.5, rayDir.y);
    vec3 base = mix(nightColor, dayColor * nightIntensity, verticalGradient);

    // 2. Calculate the sun-aligned halo using fast multiplication
    float proximity = max(0.0, dot(rayDir, sunDirection));
    float p2 = proximity * proximity;
    float p4 = p2 * p2;
    float p8 = p4 * p4;
    float glow = p8 * p8;

    // 3. Final blend
    vec3 finalColor = mix(base, sunsetColor, glow * sunsetIntensity);

    gl_FragColor = vec4(finalColor, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`

const dayAmbient = new THREE.Color("#FFFFFF")
const dayColour = new THREE.Color("#5c9fed")
const sunsetColour = new THREE.Color("#FB9062")
const nightColour = new THREE.Color("#02070e")

const commonSphereGeo = new THREE.SphereGeometry(sunRadius, 16, 16)

function DayNightScene() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const sunRef = useRef<THREE.Mesh>(null)
    const moonRef = useRef<THREE.Mesh>(null)
    const starsRef = useRef<any>(null)
    const sphereRef = useRef<THREE.Mesh>(null)
    const sunlightRef = useRef<THREE.DirectionalLight>(null)
    const moonlightRef = useRef<THREE.DirectionalLight>(null)
    const skyMaterialRef = useRef<THREE.ShaderMaterial>(null)
    const ambientLightRef = useRef<THREE.AmbientLight>(null)
    
    const earthTexture = useTexture('/world_map_blob.jpg')
    
    const uniforms = useMemo(() => ({
        sunDirection: { value: new THREE.Vector3() },
        sunsetColor: { value: sunsetColour },
        nightColor: { value: nightColour },
        dayColor: { value: dayColour },
        sunsetIntensity: { value: 0 },
        nightIntensity: { value: 0 },
    }), [])
    
    useFrame((state, delta) => {
        const cycleProgress: number = ((state.clock.elapsedTime + baseProgress) % secPerDay) / secPerDay
        const angle: number = cycleProgress * (2 * Math.PI) - (Math.PI / 2)
        
        const elevation: number = Math.sin(angle)
        const sunX: number = -Math.cos(angle) * sunOrbitRadius
        const sunY: number = Math.sin(angle) * sunOrbitRadius
        
        if (skyMaterialRef.current) {
            skyMaterialRef.current.uniforms.sunDirection.value.set(sunX, sunY, sunZ).normalize()
            
            const haloPeak = 1.0 - Math.min(1.0, 4 * Math.abs(elevation))
            skyMaterialRef.current.uniforms.sunsetIntensity.value = THREE.MathUtils.lerp(
                skyMaterialRef.current.uniforms.sunsetIntensity.value,
                Math.max(0, haloPeak),
                0.05
            )
            
            const nightMode = elevation > 0 ? 1.0 : 0.0
            skyMaterialRef.current.uniforms.nightIntensity.value = THREE.MathUtils.lerp(
                skyMaterialRef.current.uniforms.nightIntensity.value,
                nightMode,
                0.05
            )
        }
        
        if (sunRef.current) {
            sunRef.current.rotation.z += delta * sphereRotationSpeed
            sunRef.current.position.set(sunX, sunY, sunZ)
        }
        if (moonRef.current) {
            moonRef.current.rotation.x += delta * sphereRotationSpeed
            moonRef.current.position.set(-sunX, -sunY, sunZ)
        }
        if (sphereRef.current) {
            sphereRef.current.rotation.x = 0.3
            sphereRef.current.rotation.y += delta * sphereRotationSpeed
        }
        
        if (sunlightRef.current) {
            sunlightRef.current.position.set(sunX, sunY, sunZ)
            sunlightRef.current.intensity = 2
        }
        
        if (moonlightRef.current) {
            moonlightRef.current.position.set(-sunX, -sunY, sunZ)
            moonlightRef.current.intensity = 0.5
        }
        
        if (ambientLightRef.current) {
            let targetAmbientColor = nightColour
            let targetAmbientIntensity = 0.02
            if (elevation > 0.1) {
                targetAmbientColor = dayAmbient
                targetAmbientIntensity = 0.02
            }
            else if (elevation > -0.1) {
                targetAmbientColor = sunsetColour
                targetAmbientIntensity = 0.3
            }
            
            ambientLightRef.current.color.lerp(targetAmbientColor, 0.05)
            ambientLightRef.current.intensity = THREE.MathUtils.lerp(
                ambientLightRef.current.intensity,
                targetAmbientIntensity,
                0.05
            )
        }
        
        if (starsRef.current) {
            starsRef.current.material.visible = elevation <= 0.1
            starsRef.current.material.opacity = THREE.MathUtils.clamp(-elevation * 5, 0, 1)
        }
    })
    
    return (
        <>
            <mesh scale={100}>
                <sphereGeometry args={[1, 32, 32]} />
                <shaderMaterial
                    ref={skyMaterialRef}
                    side={THREE.BackSide}
                    depthWrite={false}
                    uniforms={uniforms}
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                />
            </mesh>
            
            <Stars
                ref={starsRef}
                radius={1}
                depth={25}
                count={1000}
                factor={2}
                saturation={0.5}
                speed={3}
            />
            
            <ambientLight ref={ambientLightRef} color={"#FFFFFF"} position={[0, 3, -5]} />
            
            <directionalLight ref={sunlightRef} />
            <mesh ref={sunRef} geometry={commonSphereGeo}>
                <meshBasicMaterial color={"#fde088"} wireframe={true} />
            </mesh>
            
            <directionalLight ref={moonlightRef} intensity={0} />
            <mesh ref={moonRef} geometry={commonSphereGeo}>
                <meshBasicMaterial color={"#b6b1b1"} wireframe={true} />
            </mesh>
            
            <mesh ref={sphereRef} position={[0, 1, 0]}>
                <sphereGeometry args={[3, 32, 32]} />
                <meshStandardMaterial
                    map={earthTexture}
                    roughness={1}
                    metalness={0.01}
                    emissive={"#111111"}
                />
            </mesh>
            
            <PerspectiveCamera
                makeDefault position={[0, 3, -5.5]}
                onUpdate={(camera) => camera.lookAt(0, 4, 10)}
            />
        </>
    )
}

export default function DayNightBackground() {
    const [dpr, setDpr] = useState(1.5)
    
    return (
        <div className={styles.canvasWrapper}>
            <Canvas dpr={dpr}>
                <PerformanceMonitor
                    onDecline={() => setDpr(1)}
                    onIncline={() => setDpr(1.5)}
                >
                    <DayNightScene />
                </PerformanceMonitor>
            </Canvas>
        </div>
    )
}
