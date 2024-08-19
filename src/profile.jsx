import Nav from './Component/Nav'
import Footer from './Component/foter'
import React from 'react'
import { Link } from "react-router-dom";
import Navv from './Component/navv';

function Profile() {
  return (
    <>
        <Navv/>

        <section class="bg-center bg-cover bg-[url('https://i.ytimg.com/vi/qRDjT0DXVuc/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDhh-Lm4CuVfi0aUqdqKTu4mEYkxg')] bg-gray-900 bg-blend-multiply">
            {/*<div class="flex justify-center">
                <div class="mt-5 flex justify-items-start w-full sm:w-2/3 md:w-3/3 lg:w-4/4 xl:w-4/5">
                    <Link to="/member"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    ย้อนกลับ
                    </button></Link>
                </div>     
            </div>'*/}
            <div class="mt-10 flex justify-center items-center min-h-screen">
                <div class="m-5 flex flex-col md:flex-row justify-between items-center bg-gray-800 rounded-3xl p-4 md:p-6 shadow-md w-[90%] md:w-[70%] h-auto md:h-[480px]">
                    <div id="profile" class="flex flex-col items-center bg-gray-900 flex-1 w-full sm:w-full md:max-w-[30%] h-auto md:h-[430px] p-4 rounded-2xl shadow-lg">
                        <img src="https://erp.mju.ac.th/picture/studentImg/66/6604101350.jpg" alt="Profile Image" class=" w-[200px] object-cover rounded-xl shadow-lg m-2"/>
                        <h2 class="text-2xl md:text-2xl mb-1 gradienttext text-white">นายปาณัสม์ บุญเลา</h2>
                        <p class="text-lg md:text-xl text-white mb-4">Full-stack developer</p>
                    </div>

                    <div id="data" class="m-5 flex flex-col items-center bg-gray-900 flex-1 w-full sm:w-full md:max-w-[70%] h-auto md:h-[430px] p-4 rounded-3xl shadow-lg">
                        <h3 class="m-3 text-3xl md:text-4xl text-center gradienttext text-white font-bold">Profile Details</h3>
                        <table class="text-white text-lg md:text-xl flex flex-col justify-center items-center w-full h-[280px] border-collapse">
                            <tr><td class="font-bold">ชื่อ-นามสกุล:</td><td class="pl-2">นายปาณัสม์ บุญเลา</td></tr>
                            <tr><td class="font-bold">Name :</td><td class="pl-2">Panat Boonlao</td></tr>
                            <tr><td class="font-bold">ชื่อเล่น :</td><td class="pl-2">ขนม</td></tr>
                            <tr><td class="font-bold">Nickname :</td><td class="pl-2">Kanom</td></tr>
                            <tr><td class="font-bold">อายุ :</td><td class="pl-2">20 ขวบ</td></tr>
                            <tr><td class="font-bold">Email :</td><td class="pl-2">panat9876@gmail.com</td></tr>
                        </table>
                        <div class="text-white text-center mt-2 font-bold">
                            Shabu ❤ Lover
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    
    </>
  )
}

export default Profile
