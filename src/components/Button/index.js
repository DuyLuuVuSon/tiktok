import clsx from 'clsx'
import style from'./Button.module.css'
import {useState} from 'react'

export default function Button() {
    const [isActive, setIsActive] = useState(false)
    return (
        <button className={clsx(style.btn,{
            [style.active]:isActive
            })}
            onClick={e=>setIsActive(!isActive)}
        >
            Click me!!
        </button>
    )
}

