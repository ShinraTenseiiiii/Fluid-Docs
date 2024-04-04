import React, { useRef,useState } from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload, MdScale } from "react-icons/md"; 
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"


function Card({data,reference}) {
  
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.4}} whileTap={{ scale: 0.7 }} whileFocus={{ scale: 1.2 }}  whileHover={{ scale: 1.1 }} dragTransition={{bounceStiffness:500, bounceDamping:25}}
    className='relative w-60 h-80 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt/>
        <p className='text-m mt-5 leading-6 font-semibold'>{data.description}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between py-3 px-5 mb-2'>
                <h5>{data.filesize}</h5>
<span className='w-8 h-7 bg-slate-600 rounded-full flex items-center justify-center'> 
{data.close ? <IoMdCloseCircle/> : <MdOutlineFileDownload/>}
</span>
               
            </div>
            {data.tag.isOpen ? ( <div className={`tag w-full h-10 ${data.tag.tagColor === "Blue"? "bg-blue-500" : "bg-green-600" } flex items-center justify-center`}>
               <h3 className='text-lg'>{data.tag.tagTitle}</h3>
            </div>):null}
           
        </div>
    </motion.div>
  )
}

export default Card