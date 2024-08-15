import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Component/Nav'
import Foter from './Component/foter'
import Listname from './Component/listname'

function App() {

  return (
    <>
     <section class="bg-cover bg-[url('https://lh3.googleusercontent.com/proxy/GHegynVtGPRiRxy0D1kmnnqE_wvJaK34SD97aLJFVVIU4urd9BP3MdwMsjMESSqnZHRAue542-GISaobUA')] bg-gray-700 bg-blend-multiply">
        <Nav/>
        <Listname/>
        <Foter/>
      </section>
    </>
  )
}

export default App
