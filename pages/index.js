import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../src/components/header'
import { SectionInitial } from '../src/components/SectionInitial'
import { Projects } from '../src/components/Projects'
import { About } from '../src/components/About'

export default function Home() {
  return (
    <>
    <Header></Header>
    <SectionInitial></SectionInitial>
    <Projects></Projects>
    <About></About>
    </>
  )
}
