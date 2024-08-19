import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Component/Nav'
import Foter from './Component/foter'
import Listname from './Component/listname'
import Navv from './Component/navv'

function Member() {

  return (
    <>
     <section class="bg-center bg-cover  bg-[url('https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/428235992_873721034549153_3054917207289248474_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=YdTGpznz3_cQ7kNvgGEGI6s&_nc_ht=scontent.fcnx3-1.fna&oh=00_AYAfQRxXraEWxZgQBSaDDP68ZgsosJR3xey1eSccgPck3g&oe=66C82949')] bg-gray-900 bg-blend-multiply">
        <Navv/>
        <Listname/>
        <div class="mt-7"><Foter/></div>
      </section>
    </>
  )
}

export default Member
