'use client';
import Snackbar from '@/components/snackbar';
import { EMAIL, GITHUB, LINKEDIN } from '@/constants';
import useScrollTransition from '@/hooks/useScrollTransition';
import { sendContact } from '@/service/contact';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const ContactSection = () => {
  const { isVisible, domRef } = useScrollTransition();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const validateInput = () => {
    const name = (
      document.getElementById('name') as HTMLInputElement
    ).value?.trim();
    if (!name || name.length < 1 || name.length > 50) {
      setError('Please enter your name between 1 and 50 characters');
      return;
    }
    const email =
      (document.getElementById('email') as HTMLInputElement).value || '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter your valid email address');
      return;
    }
    const message = (
      document.getElementById('message') as HTMLTextAreaElement
    ).value?.trim();
    if (!message || message.length < 1 || message.length > 1000) {
      setError('Please enter your message between 1 and 1000 characters');
      return;
    }
    return { name, email, message };
  };

  const clearInputs = () => {
    (document.getElementById('name') as HTMLInputElement).value = '';
    (document.getElementById('email') as HTMLInputElement).value = '';
    (document.getElementById('message') as HTMLTextAreaElement).value = '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const parsedData = validateInput();
      if (!parsedData) return;
      const { name, email, message } = parsedData;

      setError('');
      setLoading(true);
      const response = await sendContact({ name, email, message });
      if (!response.success) {
        setError(response?.error?.message || 'An error occurred');
        return;
      }
      setIsOpen(true);
      setLoading(false);
      clearInputs();
    } catch (error: any) {
      setError('Sorry, there was an error sending your message');
    }
  };

  return (
    <>
      <section
        id='contactSection'
        className={`transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        ref={domRef}
      >
        <div className='flex justify-center items-center flex-col sm:flex-row mx-auto'>
          <ContactForm
            handleSubmit={handleSubmit}
            loading={loading}
            error={error}
          />
          <h1 className='text-2xl'>OR</h1>
          <ContactDetails />
        </div>
      </section>
      <Snackbar
        message='Thank you for your message, I will get back to you soon!'
        isOpen={isOpen}
        duration={3000}
        type='success'
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

type ContactFormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  error: string;
};

const ContactForm: React.FC<ContactFormProps> = ({
  handleSubmit,
  loading,
  error
}) => {
  return (
    <div className='px-6 pb-6'>
      <form className='max-w-md' onSubmit={handleSubmit}>
        {error && (
          <div className='flex flex-col mb-2'>
            <div
              id='error'
              className='text-sm sm:text-base text-red-600 px-4 py-2 border border-red-400 rounded-lg'
            >
              {error}
            </div>
          </div>
        )}
        <div className='flex flex-col mb-2'>
          <label
            htmlFor='name'
            className='mb-1 text-xs sm:text-sm tracking-wide'
          >
            Name:
          </label>
          <input
            id='name'
            type='text'
            name='name'
            className='text-sm sm:text-base px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400'
          />
        </div>
        <div className='flex flex-col mb-2'>
          <label
            htmlFor='email'
            className='mb-1 text-xs sm:text-sm tracking-wide'
          >
            Email:
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='text-sm sm:text-base px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400'
          />
        </div>
        <div className='flex flex-col mb-6'>
          <label
            htmlFor='message'
            className='mb-1 text-xs sm:text-sm tracking-wide'
          >
            Message:
          </label>
          <textarea
            id='message'
            name='message'
            className='text-sm sm:text-base px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400'
            rows={3}
          ></textarea>
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className={`text-sm sm:text-base text-white bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
};

const ContactDetails: React.FC = () => {
  const ContactInfo = ({
    icon,
    text,
    link
  }: {
    icon: React.ReactNode;
    text: React.ReactNode;
    link?: string;
  }) => {
    return (
      <a
        href={link}
        target='_blank'
        className='flex items-center mb-4 dark:bg-gray-500 bg-gray-300 rounded px-2 py-4'
      >
        <div className='mr-3'>{icon}</div>
        <span className='text-sm sm:text-base'>{text}</span>
      </a>
    );
  };

  const contactList = [
    {
      icon: <FcGoogle size={25} />,
      item: <span className='text-[15px]'>{EMAIL}</span>,
      link: `mailto:${EMAIL}`
    },
    {
      icon: <FaLinkedin size={25} className='text-blue-500' />,
      item: <span className='text-[15px]'>LinkedIn</span>,
      link: LINKEDIN
    },
    {
      icon: <FaGithub size={25} className='text-black dark:text-white' />,
      item: <span className='text-[15px]'>Github</span>,
      link: GITHUB
    }
  ];

  return (
    <div className='px-6 pb-20 max-w-80'>
      <div className='mt-4'>
        {contactList.map((contact, index) => (
          <ContactInfo
            key={index}
            icon={contact.icon}
            text={contact.item}
            link={contact.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
