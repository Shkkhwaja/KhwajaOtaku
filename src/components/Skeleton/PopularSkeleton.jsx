import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function PopularSkeleton() {
  return (
    <div className='w-full flex gap-2 mt-5'>
    <div className='h-full w-full aspect-[6/2] flex m-10'>
        <Skeleton borderRadius={0.5} className='h-[25em] w-[15em] ml-32' />
        <Skeleton borderRadius={0.5} className='h-10 w-[25em] ml-4' />
        <div className='flex gap-4 relative top-14 right-[24em] '>
        <Skeleton className='h-4 w-20 '/>
        <Skeleton className='h-4 w-20 '/>
        <Skeleton className='h-4 w-20 '/>
        <Skeleton className='h-4 w-20 '/>
        </div>
        <div className='relative right-[47em] top-24'>
        <Skeleton className='h-4 w-20'/>
        <Skeleton className='h-4 w-20'/>
        <Skeleton className='h-4 w-20'/>
        </div>
        <div className='flex gap-4 relative top-[11em] right-[52em]'>
        <Skeleton className='h-4 w-20 '/>
        <Skeleton className='h-4 w-20 '/>
        <Skeleton className='h-4 w-20 '/>
        </div>
        <Skeleton borderRadius={0.5} className='h-[9em] w-[30em] relative top-[13em] right-[69em]'/>
        <Skeleton className='h-[2.5em] w-[9em] relative top-[23em] right-[99em]'/>
    </div>
    
</div>
  )
}

export default PopularSkeleton
