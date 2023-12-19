'use client'
import React from 'react'
import HamWrapper from './HamWrapper'
import Image from 'next/image'
import Button from '../Button'
import useHamMenu from '@/app/hooks/useHamMenu'

const SideMenu = () => {
  const hammenu = useHamMenu();

  return (
    <HamWrapper>
      <div 
      className='
      flex
      justify-between
      items-center
      mb-4
      '
      >
      <Image
          src={"/assets/images/logo.png"}
          width={234}
          height={26}
          alt="logo of bhuvan"
        />
      <Button
        type={'ham'}
        label={'X'}
        bg={'bg-white'}
        size={'small'}
      />
      </div>
      <div className='h-[90%] flex flex-col justify-between'>
        <ul className='flex
        flex-col
        gap-2'>
          <Button
            label={"Home"}
            fw={"font-bold"}
            width={'w-full'}
            align={'left'}
            bg={'bg-[#212121]'}
            action={"/"}
            size={'small'}
            color={"text-white"}
          />
          <Button
            label={"Solution"}
            fw={"font-bold"}
            size={'small'}
            type={'dropdown'}
            action={'/'}
            icon={"/assets/icons/arrow.svg"}
            iconpos={"a"}
            btnSize={13}
            bg={'bg-[#212121]'}
            width={'w-full'}
            align={'left'}
            color={"text-white"}
          />
          <Button
            label={"Contact Us"}
            size={'small'}
            fw={"font-bold"}
            width={'w-full'}
            align={'left'}
            bg={'bg-[#212121]'}
            action={"/"}
            color={"text-white"}
          />
          <Button
            label={"Wiki"}
            size={'small'}
            fw={"font-bold"}
            width={'w-full'}
            align={'left'}
            bg={'bg-[#212121]'}
            action={"/"}
            color={"text-white"}
          />
        </ul>
        <Button
          label={"Register"}
          action={"/"}
          size={"small"}
          width={'w-full'}
            align={'left'}
          bg={"bg-[#0B5EB7]"}
          color={"text-white"}
        />
      </div>
    </HamWrapper>
  )
}

export default SideMenu