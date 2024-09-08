import React from 'react'
import Business from './Business'
import Contact from './Contact'
import Overview from './Overview'
import PastEvents from './PastEvents'
import Gallery from './Gallery'
import Files from './Files'
import Members from './Members'
import GalleryGrid from './Gallery'

const Info = () => {
  // const images = [
  //   { id: 1, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg', alt: 'Image 1' },
  //   { id: 2, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', alt: 'Image 2' },
  //   { id: 3, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg', alt: 'Image 3' },
  //   { id: 4, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg', alt: 'Image 4' },
  //   { id: 5, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg', alt: 'Image 5' },
  //   { id: 6, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg', alt: 'Image 6' },
  //   { id: 7, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg', alt: 'Image 7' },
  //   { id: 8, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg', alt: 'Image 8' },
  //   { id: 9, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg', alt: 'Image 9' },
  //   { id: 10, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg', alt: 'Image 10' },
  //   { id: 11, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg', alt: 'Image 11' },
  //   { id: 12, src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg', alt: 'Image 12' },
  // ];


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


    <main className='bg-brandSecondary px-2 lg:px-16 xl:px-32 overflow-x-clip max-w-[99.1vw] h-full flex flex-col sm:flex-row md:space-x-4'>
        <section className='flex flex-col space-y-4 md:basis-2/3'>
            <Business></Business>
            <Overview></Overview>
            {/* <GalleryGrid images = {images}></GalleryGrid> */}
            <Files></Files>
        </section>

        <section className='flex flex-col space-y-4 md:basis-1/3'>
            <Contact></Contact>
            <PastEvents></PastEvents>
            <Members></Members>
        </section>

        
        
    </main>
  )
}

export default Info