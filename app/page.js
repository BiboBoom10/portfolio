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
          <nav className=' py-10 mb-2 flex justify-between'>
            <h1 className=' text-xl'>Bibo Boom</h1>
            <ul className=' flex items-center'>
              <li><BsFillMoonStarsFill className=' cursor-pointer' /></li>
              <li className=' bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white ml-5 rounded-md'><a href="#">Resume</a></li>
            </ul>
          </nav>
          <div className=' text-center p-5 md:p-5 lg:pt-5'>
            <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Bibo Boom</h2>
            <h3 className=' text-2xl py-2 md:text-3xl'>Designer & Developer</h3>
            <p className=' leading-8 text-gray-700 py-2'>A versatile professional with a unique blend of creative design skills and technical expertise. </p>
          </div>
          <div className=' text-3xl flex justify-center gap-5 text-gray-600 pb-4 md:text-4xl'>
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillTwitterCircle />
          </div>
          <div className=' relative py-4 flex justify-center'>
            <Image src={bibo1} className=" rounded-full h-60 w-60 md:h-80 md:w-80"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className=' text-2xl font-medium pb-2 md:text-center md:pt-5'>Services I Offer</h3>
            <p className=' text-gray-700 leading-8 md:text-xl max-w-xl mx-auto py-5 md:text-center md:p-4'>Since the beginning of the journey as a <span className=' text-teal-500'>Designer</span> and <span className=' text-teal-500'>Developer</span>, I've worked for startups and collaborated with other talented people.</p>
          </div>
          <div className=' lg:flex lg:gap-20 lg:px-10 lg:justify-center lg:my-10'>
            <div className=' text-center shadow-lg p-10 rounded-xl my-5'>
              <Image />
              <h3 className=' text-lg font-medium pt-8 pb-2'>Elegant design</h3>
              <p className=' py-2'>Creating beautiful designs</p>
              <h4 className=' py-4 text-teal-600'>Design Tools</h4>
              <p className=' text-gray-700 py-1'>Photoshop</p>
              <p className=' text-gray-700 py-1'>Illustrator</p>
              <p className=' text-gray-700 py-1'>Figma</p>
            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl my-5'>
              <Image />
              <h3 className=' text-lg font-medium pt-8 pb-2'>Elegant design</h3>
              <p className=' py-2'>Creating beautiful designs</p>
              <h4 className=' py-4 text-teal-600'>Design Tools</h4>
              <p className=' text-gray-700 py-1'>Photoshop</p>
              <p className=' text-gray-700 py-1'>Illustrator</p>
              <p className=' text-gray-700 py-1'>Figma</p>
            </div>
            <div className=' text-center shadow-lg p-10 rounded-xl my-5'>
              <Image />
              <h3 className=' text-lg font-medium pt-8 pb-2'>Elegant design</h3>
              <p className=' py-2'>Creating beautiful designs</p>
              <h4 className=' py-4 text-teal-600'>Design Tools</h4>
              <p className=' text-gray-700 py-1'>Photoshop</p>
              <p className=' text-gray-700 py-1'>Illustrator</p>
              <p className=' text-gray-700 py-1'>Figma</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
