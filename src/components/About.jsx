import React from 'react'

const aboutItems = [
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 10
  }
];

const About = () => {
  return (
    <section id='about'>
        <div className='container px-4 mx-auto md:px-8 xl:max-w-6xl pt-20'>
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
                <p className='text-zinc-300 mb-4 md:mb-8'>
                    Welcome! I&apos;m Mohamed Nabil, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
                </p>
                <div className='flex gap-20 '>
                    {
                        aboutItems.map((item, index) => (
                            <div key={index} className='md:mb-2'>
                                <div>
                                    
                                    <span className='font-semibold text-2xl md:text-4xl'>{item.number}</span>
                                    <span className='text-sky-400 md:text-3xl font-semibold'>+</span>
                                </div>
                                <p className='text-zinc-400 text-sm'><span className=''>{item.label}</span></p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default About