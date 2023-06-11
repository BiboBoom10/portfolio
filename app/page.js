import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillInstagram, AiFillFacebook} from 'react-icons/ai';
import Image from 'next/image';
import bibo1 from '../public/Images/Bibo1.jpg';

export default function Home() {
  return (
    <div>
      <main className=' px-10'>
        <section className=' h-screen'>
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl'>Bibo Boom</h1>
            <ul className=' flex items-center'>
              <li><BsFillMoonStarsFill className=' cursor-pointer' /></li>
              <li className=' bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white ml-5 rounded-md'><a href="#">Resume</a></li>
            </ul>
          </nav>
          <div className=' text-center p-5'>
            <h2 className=' text-5xl py-2 text-teal-600 font-medium'>Bibo Boom</h2>
            <h3 className=' text-2xl py-2'>Designer & Developer</h3>
            <p className=' leading-8 text-gray-700 py-2'>A versatile professional with a unique blend of creative design skills and technical expertise. </p>
          </div>
          <div className=' text-3xl flex justify-center gap-5 text-gray-600 pb-4'>
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillTwitterCircle />
          </div>
          <div className=' relative py-4 flex justify-center'>
            <Image src={bibo1} className=" rounded-full h-60 w-60"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className=' text-2xl font-medium pb-2'>Services I Offer</h3>
            <p className=' text-gray-700 leading-8'>Since the beginning of the journey as a Designer and Developer, I've worked on: </p>
          </div>
        </section>

      </main>
    </div>
  )
}
