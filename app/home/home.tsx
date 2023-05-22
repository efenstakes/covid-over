"use client"
import { Box, Environment, Float, Html, OrbitControls, Text3D, Text } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { useIntersect, ScrollControls, Scroll } from '@react-three/drei'
import { useScroll } from 'react-spring'

// components
import CovidModel from '../components/Covid'
import MaskModel from '../components/Mask'
import HeartModel from '../components/Heart'
import GiftModel from '../components/Gift'
import EarthModel from '../components/Earth'


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

    return (
        <div className='page'>
            <Canvas shadows style={{ height: '100vh' }}>
                <ambientLight color={'pink'} />

                {/* <hemisphereLight color={'black'} /> */}
                {/* <OrbitControls /> */}

                <color args={['#F2D0D0']} attach='background' />

                
                <ScrollControls pages={8.2}>

                    <Scroll>

                        {/* covid came */}
                        <Section position={-2}>
                            <group position-z={-3} position-y={5}>
                                <Text
                                    font="/fonts/Rubik Light_Regular.json"
                                    fontSize={8}
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
                                    font="/fonts/Rubik Light_Regular.json"
                                    fontSize={8}
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
                            <group position-z={-6} position-y={-2}>
                                <Text
                                    font="/fonts/Rubik Light_Regular.json"
                                    fontSize={11}
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
                        <Section position={-38}>
                            <group position-z={-3} position-y={1}>
                                <Text
                                    font="/fonts/Rubik Light_Regular.json"
                                    fontSize={8}
                                >
                                    Tribute
                                    <meshBasicMaterial color="pink" />
                                    <meshBasicMaterial color="#F2ACB9" />
                                </Text>
                            </group>
                            <group position-z={-3}>
                                <Float floatIntensity={1}>
                                    <HeartModel />
                                </Float>
                            </group>
                            {
                                names.map((name)=> {

                                    return (
                                        <Float floatIntensity={.5}>
                                            <group
                                                position={[
                                                    // Math.floor(Math.random() * 13) * Math.random() > .5 ? -1 : 1,
                                                    generateRandomFloatInRange(-11, 10),
                                                    generateRandomFloatInRange(5, -15),
                                                    // Math.floor(Math.random() * 13) - 38,
                                                    generateRandomFloatInRange(1, -5),
                                                ]}
                                            >
                                                <Text3D
                                                    font="/fonts/Rubik Light_Regular.json"
                                                    bevelEnabled
                                                    size={ .2 }
                                                    bevelThickness={0}
                                                >
                                                    {name}.
                                                    <meshBasicMaterial color="#368ABF" />
                                                </Text3D>
                                            </group>
                                        </Float>
                                    )
                                })
                            }
                        </Section>

                        {/* to survivors */}
                        <Section position={-60}>
                            <group position-z={-3} position-y={5}>
                                <Text
                                    font="/fonts/Rubik Light_Regular.json"
                                    fontSize={6}
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

                </ScrollControls>
            </Canvas>
        </div>
    )
}


export default HomePage
