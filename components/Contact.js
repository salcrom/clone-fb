import Image from 'next/image'
import React from 'react'

export const Contact = ({ src, name }) => {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 curosor-pointer p-2 rounded-xl">
            <Image
                className="rounded-full"
                objectfit="cover"
                alt=""
                src={src}
                width={50}
                height={50}
                layout="fixed"
            />
            <p>{name}</p>
            <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full' />
        </div>
    )
}
