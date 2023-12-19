import React from 'react'
import Input from '../Input'
import Button from '../Button'

const NewsletterForm = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-2 w-[90%] sm:max-w-lg  m-auto sm:m-0 z-10'>
        <Input
            action={'/'}
            placeholder={'Eg: johndoe@gmail.com'}
        />
        <Button
            label={'Subscribe'}
            action={'/'}
            bg={'bg-[#0B5EB7]'}
            color={'text-white'}
            rounded={'rounded-md'}
        />
    </div>
  )
}

export default NewsletterForm