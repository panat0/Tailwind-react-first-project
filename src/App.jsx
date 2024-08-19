import React from 'react'
import "./App.css"
import Nav from './Component/Nav'
import Footer from './Component/foter'
import Listname from './Component/listname'
import Button from './Component/Button'
import News from './Component/News'
import Navv from './Component/navv'

function App() {

  return (
    <> 
        
        <Navv />
        <header class="bg-center bg-no-repeat bg-[url('https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/428395299_873721081215815_6431220037437957079_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=azBpjVl5g9kQ7kNvgGHR-df&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYDpTfNlw_vEhpSTjY66NF1C6dc3GADTNdOS3AR2aCVfHg&oe=66C236B4')] bg-gray-700 bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome to the Alumni Directory CSMJU</h1>
                <p class=" text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">ยินดีต้อนรับสู่ทำเนียบรุ่น CSMJU</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                </div>
            </div>
        </header>

        <section class="bg-cover bg-gray-700 bg-blend-multiply">
        <div class="p-2 flex justify-center">
          <div class=" w-full sm:w-2/3 md:w-2/3 lg:w-3/4 xl:w-4/5 ">
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full dark:border-gray-700 dark:bg-gray-800 ">
              <img class="object-cover h-auto w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="#" alt=""/>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ปรัชญาสาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้</h5>
                <p class="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">ปรัชญาการศึกษาของมหาวิทยาลัยแม่โจ้ จัดการศึกษาเพื่อเสริมสร้างปัญญาในรูปแบบการเรียนรู้จากการปฏิบัติที่บูรณาการกับการทํางานตามอมตะโอวาท งานหนักไม่เคยฆ่าคน มุ่งให้ผู้เรียน มีทักษะการเรียนรู้ตลอดชีวิต สามารถพัฒนาทักษะเดิม สร้างเสริมทักษะใหม่ มีวิธีคิดของการเป็นผู้ประกอบการ มีการใช้เทคโนโลยีดิจิทัลและการสื่อสาร มีความตระหนักต่อสังคมวัฒนธรรมและสิ่งแวดล้อม ยึดมั่นในความสัมพันธ์ระหว่างมหาวิทยาลัยกับชุมชน ตามจุดยืนของมหาวิทยาลัยแม่โจ้ ที่ว่า มหาวิทยาลัยแห่งชีวิต ปรัชญาหลักสูตรฯ จัดการศึกษาเพื่อการพัฒนาเทคโนโลยี และส่งเสริมการสร้างนวัตกรรม เรียนรู้จากการปฏิบัติที่บูรณาการกับการทำงาน มุ่งให้ผู้เรียนมีความสามารถด้านวิชาการและวิชาชีพทางด้านวิทยาการคอมพิวเตอร์ มีทักษะการเรียนรู้ตลอดชีวิต มีวิธีคิดของการเป็นผู้ประกอบการ มีความตระหนักต่อสังคม วัฒนธรรมและสิ่งแวดล้อม ตามจุดยืนของมหาวิทยาลัยแม่โจ้</p>
              </div>
            </div>
          </div>
        </div>
        <Button/>

        <div class="flex justify-center items-center">
            <div class=" w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5">
                <div class="block p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="ml-3 mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">ข่าว / News</h5>
                </div>
            </div>
        </div>

        <News/>
        <Footer />
        
      </section>
    </>
  )
}

export default App
