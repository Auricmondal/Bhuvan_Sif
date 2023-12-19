import React from 'react'
import Button from '../Button'

const NavDropSection = ({
    label,
    linkLists,

}) => {
  return (
    <div>
        <h5 className='text-white'>{label}</h5>
        <hr />
        <div className='flex flex-col gap-2 pt-2'>
            {linkLists.map((linkList)=>(
                <Button 
                width={'w-full'}
                size={'small'}
                align={'left'}
                    action={'/'}
                    label={linkList}
                    bg={label=='Featured'?'bg-[#0B5EB7]':linkList=='Disaster Management'?'bg-[#A1160A]':linkList=='Explore'?'bg-[#004DC7]':'bg-[#212121]'}
                    color={'text-white'}
                />
            ))}
        </div>
    </div>
  )
}

export default NavDropSection