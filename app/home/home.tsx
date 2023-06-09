"use client"
import { Float, Html, OrbitControls, Text3D, Text, Loader } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { Suspense, useMemo, useRef, useState } from 'react'
import { useIntersect, ScrollControls, Scroll } from '@react-three/drei'
import { useScroll } from 'react-spring'
import * as THREE from 'three'
import { useWindowWidth, } from '@react-hook/window-size'

// components
import CovidModel from '../components/Covid'
import MaskModel from '../components/Mask'
import HeartModel from '../components/Heart'
import GiftModel from '../components/Gift'
import EarthModel from '../components/Earth'
import AppbarComponent from '../components/appbar/component'


// list of names
import { names } from './names'


// styles
import './home.scss'



type SectionProps = {
    position: number
    children: any
}
const Section = ({ position, children }: SectionProps)=> {
    const visible = useRef<boolean>(false)
    const [isVisible, setIsVisible] = useState(true)
    const ref = useIntersect((isVisible) => {
        console.log("isVisible: ", isVisible)
        visible.current = isVisible
    })

    useIntersect((isVisible) => {
        console.log('isVisible ', isVisible)
        setIsVisible(isVisible)
    })

    return (
        <group position={[ 0, position, -4 ]} visible={isVisible}>
            { children }
        </group>
    )
}


function generateRandomFloatInRange(min: number, max: number) {
    const num = (Math.random() * (max - min + 1)) + min
    // console.log("num ", num)
    return num;
}
const HomePage = () => {
    const width = useWindowWidth()
    const isMobile = width < 768

    const getNames = (num: number)=> {
        let iNames = []

        for (let currentCount = 0; currentCount < num; currentCount++) {
            iNames.push(names[Math.floor(generateRandomFloatInRange(0, names.length))])
        }

        return iNames
    }

    const iNames = useMemo(()=> getNames(80), [])
    // console.log("names ", names)
    // console.log("iNames ", iNames)
    console.log("isMobile ", isMobile)
    return (
        <div className='page'>
            
            {/* appbar */}
            <AppbarComponent />

            {/* 3d experience */}
            <Suspense fallback={<Loader />}>
                <Canvas shadows style={{ height: '100vh' }}>
                    <ambientLight color={'pink'} />

                    {/* <hemisphereLight color={'black'} /> */}
                    {/* <OrbitControls /> */}

                    <color args={['#F2D0D0']} attach='background' />

                    
                    <Suspense fallback={null}>
                        <ScrollControls pages={8.2}>

                            <Scroll>

                                {/* covid came */}
                                <Section position={-4}>
                                    <group position-z={-3} position-y={isMobile ? 6 : 5}>
                                        <Text
                                            font="/fonts/Rubik_Light_Regular.json"
                                            fontSize={isMobile ? 2.5 : 8}
                                        >
                                            An Era
                                            <meshBasicMaterial color="#F2ACB9" />
                                        </Text>
                                    </group>
                                    <Float floatIntensity={.5}>
                                        <CovidModel />
                                    </Float>
                                </Section>

                                {/* first responders */}
                                <Section position={-15}>
                                    <group position-z={-3} position-y={3}>
                                        <Text
                                            font="/fonts/Rubik_Light_Regular.json"
                                            fontSize={isMobile ? 3.2 : 8}
                                        >
                                            Hope
                                            <meshBasicMaterial color="#BBE8F2" />
                                            <meshBasicMaterial color="#F2ACB9" />
                                        </Text>
                                    </group>
                                    <MaskModel />
                                </Section>

                                {/* gift */}
                                <Section position={-24}>
                                    <group position-z={-6} position-y={isMobile ? 0 : -2}>
                                        <Text
                                            font="/fonts/Rubik_Light_Regular.json"
                                            fontSize={isMobile ? 4 : 11}
                                        >
                                            A Gift
                                            <meshBasicMaterial color="#EBF2B3" />
                                            <meshBasicMaterial color="#F2ACB9" />
                                        </Text>
                                    </group>
                                    <Float floatIntensity={.5}>
                                        <HeartModel />
                                    </Float>

                                    {/* left */}
                                    <group position={[ -4, -1, -2 ]}>
                                        <GiftModel />
                                    </group>
                                    <group position={[ -6, -1, -3 ]}>
                                        <GiftModel />
                                    </group>
                                    <group position={[ -8, -1, -4 ]}>
                                        <GiftModel />
                                    </group>

                                    {/* right */}
                                    <group position={[ 4, -1, -2 ]}>
                                        <GiftModel />
                                    </group>
                                    <group position={[ 6, -1, -3 ]}>
                                        <GiftModel />
                                    </group>
                                    <group position={[ 8, -1, -4 ]}>
                                        <GiftModel />
                                    </group>
                                </Section>

                                {/* tribute */}
                                <Section position={-40}>
                                    <group position-z={-4} position-y={isMobile ? 3 : 1}>
                                        <Text
                                            font="/fonts/Rubik_Light_Regular.json"
                                            fontSize={isMobile ? 2.6 : 8}
                                        >
                                            Tribute
                                            <meshBasicMaterial color="pink" />
                                            <meshBasicMaterial color="#F2ACB9" />
                                        </Text>
                                    </group>
                                    <group position-z={-3} scale={isMobile ? 1.2 : 2}>
                                        <Float floatIntensity={1}>
                                            <HeartModel />
                                        </Float>
                                    </group>
                                    {
                                        iNames.map((name, index)=> {

                                            return (
                                                <Float key={index} floatIntensity={.5}>
                                                    <group
                                                        position={[
                                                            // Math.floor(Math.random() * 13) * Math.random() > .5 ? -1 : 1,
                                                            generateRandomFloatInRange(-11, 10),
                                                            generateRandomFloatInRange(5, -15),
                                                            // Math.floor(Math.random() * 13) - 38,
                                                            generateRandomFloatInRange(1, -5),
                                                        ]}
                                                    >
                                                        <Text
                                                            font="/fonts/Rubik_Light_Regular.json"
                                                            fontSize={.4}
                                                        >
                                                            {name}.
                                                            <meshBasicMaterial
                                                                color={
                                                                    Object.keys(THREE.Color.NAMES)[Math.floor(generateRandomFloatInRange(0, Object.keys(THREE.Color.NAMES).length))]
                                                                }
                                                            />
                                                        </Text>
                                                    </group>
                                                </Float>
                                            )
                                        })
                                    }
                                </Section>

                                {/* to survivors */}
                                <Section position={-60}>
                                    <group position-z={-3} position-y={isMobile ? 7 : 5}>
                                        <Text
                                            font="/fonts/Rubik_Light_Regular.json"
                                            fontSize={isMobile ? 2 : 6}
                                        >
                                            Gratitude
                                            <meshBasicMaterial color="pink" />
                                            <meshBasicMaterial color="#F2ACB9" />
                                        </Text>
                                    </group>
                                    <Float floatIntensity={1.5}>
                                        <EarthModel />
                                    </Float>
                                </Section>

                            </Scroll>

                            {/* html scrolls */}
                            <Scrolls />

                        </ScrollControls>
                    </Suspense>
                </Canvas>
            </Suspense>
        </div>
    )
}


const Scrolls = ()=> {
    const scroll = useScroll()
    const { width: w, height: h } = useThree((state) => state.viewport)
    console.log("scroll ", scroll);
    console.log("w ", w);
    console.log("h ", h);
    

    return (
        <Scroll html>

            {/* covid came */}
            <div
                className='threed_section_container'
                style={{
                    top: '40vh',
                }}
            >
                <div className='threed_section_content_container threed_section_content_container_start'>
                    <h1 className='threed_section_content_container__title'> March 2020 </h1>
                    <p className='threed_section_content_container__text'>
                        Covid 19 was announced a pandemic and it changed our lives forever.
                    </p>
                </div>
            </div>

            {/* first responders */}
            <div
                className='threed_section_container'
                style={{
                    top: '190vh',
                    // backgroundColor: 'lightgreen',
                }}
            >
                <div className='threed_section_content_container threed_section_content_container__responders'>
                    <h1 className='threed_section_content_container__title'>
                        First Responders
                    </h1>
                    <p className='threed_section_content_container__text'>
                        Amidst the uncertainty of the COVID-19 pandemic, you, the brave first responders, stood tall as beacons of hope, selflessly putting yourselves on the front lines to protect and serve your communities. We express our deepest gratitude for your unwavering commitment, sacrifice, and tireless efforts during the pandemic.
                    </p>
                </div>
            </div>

            {/* gift */}
            <div
                className='threed_section_container'
                style={{
                    top: '340vh',
                    // backgroundColor: 'lightblue',
                }}
            >
                <div className='threed_section_content_container threed_section_content_container__gift'>
                    <h1 className='threed_section_content_container__title'> May 2023 </h1>
                    <p className='threed_section_content_container__text'>
                        We got our gift, WHO announced that COVID was not a pandemic anymore. Now we can breath.
                    </p>
                </div>
            </div>

            {/* tribute */}
            <div
                className='threed_section_container'
                style={{
                    top: '520vh',
                    // backgroundColor: 'lightblue',
                }}
            >
                <div className='threed_section_content_container threed_section_content_container__tribute'>
                    <h1 className='threed_section_content_container__title'>
                        And To Those We Lost
                    </h1>
                    <p className='threed_section_content_container__text'>
                        As we say our farewells, let&apos;s remember the lives that we lost. Each name etched in our memories represents a story of love, of laughter, of dreams, and of aspirations. They were our neighbors, our friends, our family members, and our fellow human beings. Their absence leaves an irreplaceable void in our lives, and their memories will forever be cherished.
                    </p>
                </div>
            </div>
            

            {/* survivors */}
            <div
                className='threed_section_container'
                style={{
                    top: '760vh',
                    // backgroundColor: 'lightblue',
                }}
            >
                <div className='threed_section_content_container threed_section_content_container__tribute'>
                    <h1 className='threed_section_content_container__title'>
                        And To Those Who Survived
                    </h1>
                    <p className='threed_section_content_container__text'>
                        Whether you are a long hauler, or otherwise, life is delicate. Make the difference you can now, be kind and stay positive.
                    </p>
                </div>
            </div>

        </Scroll>
    )

    return (
        <Scroll html>
            <div
                style={{
                    position: 'absolute',
                    top: '40vh',
                    left: '0',
                    backgroundColor: 'red',
                    width: '100%',
                }}
            >
                Covid
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '200vh',
                    left: '40vw',
                }}
            >
                Masks
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '360vh',
                    left: '40vw',
                }}
            >
                Gift
            </div>
        </Scroll>
    )

    return (
        <Scroll>
            <Html center position-z={0}>
                <h1> Covid </h1>
            </Html>
            <Html center position-z={-4}>
                <h1> Masks </h1>
            </Html>
            <Html center position-z={-8}>
                <h1> Gift </h1>
            </Html>
        </Scroll>
    )
}

export default HomePage
