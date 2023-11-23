import React from 'react';

const Delivery = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-16 px-4 bg-white'>
      <h3 className='text-orange-500 text-center text-2xl font-bold'>Quick Delivery App</h3>
      <div className='md:grid md:grid-cols-2 gap-4'>
        <img
          className='w-full md:w-auto mx-auto my-4'
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
        />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>Get The App</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
            voluptate reprehenderit dolore autem cum ullam sed odit
            perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-[#00df9a] font-medium w-full md:w-[200px] my-6 mx-auto md:mx-0 py-3 rounded-md'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
