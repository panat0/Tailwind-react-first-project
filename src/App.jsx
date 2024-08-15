import React from 'react'
import "./App.css"
import Nav from './Component/Nav'
import Footer from './Component/foter'
import Listname from './Component/listname'
import Button from './Component/Button'

function App() {

  return (
    <> 
      <section class="bg-cover bg-[url('https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/428395299_873721081215815_6431220037437957079_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=azBpjVl5g9kQ7kNvgGHR-df&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYDpTfNlw_vEhpSTjY66NF1C6dc3GADTNdOS3AR2aCVfHg&oe=66C236B4')] bg-gray-700 bg-blend-multiply"> 
        <Nav />
        <Button/>
        <Listname/>
        <Footer />
      </section>
    </>
  )
}

export default App
