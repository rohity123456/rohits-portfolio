'use client';
import useScrollTransition from '@/hooks/useScrollTransition';

const ContactSection = () => {
  const { isVisible, domRef } = useScrollTransition();

  return (
    <section
      id='contactSection'
      className={`transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      ref={domRef}
    >
      <div className='container mx-auto px-6 pb-20'>
        <form className='mt-8 max-w-md mx-auto'>
          <div className='flex flex-col mb-2'>
            <label
              htmlFor='name'
              className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'
            >
              Name:
            </label>
            <input
              id='name'
              type='text'
              name='name'
              className='text-sm sm:text-base placeholder-gray-500 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400'
            />
          </div>
          <div className='flex flex-col mb-2'>
            <label
              htmlFor='email'
              className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'
            >
              Email:
            </label>
            <input
              id='email'
              type='email'
              name='email'
              className='text-sm sm:text-base placeholder-gray-500 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400'
            />
          </div>
          <div className='flex flex-col mb-6'>
            <label
              htmlFor='message'
              className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'
            >
              Message:
            </label>
            <textarea
              id='message'
              name='message'
              className='text-sm sm:text-base placeholder-gray-500 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400'
              rows={3}
            ></textarea>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
