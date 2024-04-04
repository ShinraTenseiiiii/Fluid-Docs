import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
const data =[ {description: "Atomic Habits",
filesize: "7.4 mb",
close: true,
tag:{isOpen:false, tagTitle:"Download", tagColor:"Green"},
},{description: "The Da Vinci Code",
filesize: "0.4 mb",
close: false,
tag:{isOpen:true, tagTitle:"Download", tagColor:"Green"},
},{description: "The Lord of the Rings ",
filesize: "5.2 mb",
close: false,
tag:{isOpen:true, tagTitle:"Upload", tagColor:"Blue"},
},]
    return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-stone-800/50 flex gap-9 flex-wrap p-6'>
{data.map((item,index)=> (

<Card data={item} reference={ref}/>
    
))}

    </div>

  )
}

export default Foreground