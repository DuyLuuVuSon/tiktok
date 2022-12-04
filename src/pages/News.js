import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx'
import style from './News.module.css'
import { useState, useEffect } from 'react'
import { CKEditor } from 'ckeditor4-react'

export default function NewsPage() {
    const hobbyList = useSelector(state => state.hobby.list)
    const [level, setLevel] = useState(1)
    return <div>
        <h1
            className={clsx(style.title)}
            style={{ '--level': level }}
        >News Pages
        </h1>
        <input
            onChange={e => {
                setLevel(e.target.value)
                console.log(e.target.value)
            }}
            className="opacity Level"
            type="range"
            value={level}
            step="0.01"
            min="0"
            max="1"
        ></input>
        <ul>
            {hobbyList.map((hobby, index) => (
                <li key={index}>
                    {hobby}
                </li>
            ))}
        </ul>

        <CKEditor 
            initData={<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>}
            editorUrl= '/ckeditor/ckeditor.js'
        />
    </div>
}
