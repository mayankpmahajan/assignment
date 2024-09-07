import React from 'react'
import Business from './Business'
import Contact from './Contact'
import Overview from './Overview'
import PastEvents from './PastEvents'
import Gallery from './Gallery'

const Info = () => {
  return (
    // <main className='bg-brand-secondary px-2 w-[99.1vw] h-screen flex flex-col'>
    //     <section className='flex flex-row space-x-4'>
    //         <Business></Business>
    //         <Contact></Contact>
            

    //     </section>

    //     <section className='flex flex-row space-x-4'>
    //         <Overview></Overview>
    //         <PastEvents></PastEvents>
    //     </section>

    //     <section className='flex flex-row space-x-4'>
            
    //     </section>
        
        
    // </main>


    <main className='bg-brand-secondary px-2 w-[99.1vw] h-screen flex flex-row space-x-4'>
        <section className='flex flex-col space-y-4'>
            <Business></Business>
            <Overview></Overview>
            <Gallery></Gallery>

        </section>

        <section className='flex flex-col space-y-4'>
            <Contact></Contact>
            <PastEvents></PastEvents>
        </section>

        
        
    </main>
  )
}

export default Info