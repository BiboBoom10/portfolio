import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <main className=' px-10'>
        <section className=' h-screen'>
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl'>Bibo Boom</h1>
            <ul className=' flex items-center'>
              <li><BsFillMoonStarsFill className=' cursor-pointer' /></li>
              <li><a href="#">Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}
