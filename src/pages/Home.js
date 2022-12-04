import { useSelector, useDispatch } from 'react-redux'
import { setHobby, addHobby } from '../redux/actions/hobby'
import { setNewUser, addNewUser } from '../redux/actions/user'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css'
import { Avatar, Image,Button } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import './Home.css'


function HomePage() {
    const hobbyList = useSelector(state => state.hobby.list)
    const hobby = useSelector(state => state.hobby.hobbyItem)
    const userList = useSelector(state => state.user.listUsers)
    const user = useSelector(state => state.user.userSet)
    const inputHobbyElement = useRef()
    const inputUserElement = useRef()

    const addNewHobby = () => {
        disPatch(addHobby(hobby))
        disPatch(setHobby(''))
        inputHobbyElement.current.focus()
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const disPatch = useDispatch()

    return (
        <div>
            {/* Toast mesage */}
            <Avatar src="https://joeschmoe.io/api/v1/random" className={'colorRed'}/>

            <Avatar size={80} style={{ backgroundColor: '#237804', }} icon={<UserOutlined />} />

            <Button type="primary" danger style={{ backgroundColor: '#237804', }}>Primary</Button>

            <ToastContainer 
                theme="colored"
            />

            {/* Page */}
            <label>Hobies</label>
            <input
                ref={inputHobbyElement}
                onChange={e => {
                    disPatch(setHobby(e.target.value))
                }}
                type="text"
                value={hobby}
            />
            <br />
            <button onClick={addNewHobby}>Add hobby</button>
            <ul>
                {hobbyList.map((hobby, index) => (
                    <li key={index}>
                        {hobby}
                    </li>
                ))}
            </ul>

            <label>Users</label>
            <input
                ref={inputUserElement}
                onChange={e => {
                    disPatch(setNewUser(e.target.value))
                }}
                type="text"
                value={user}
            />
            <br />
            <button onClick={e => {
                disPatch(addNewUser(user))
                disPatch(setNewUser(''))
                inputUserElement.current.focus()
            }}
            >Add user
            </button>
            <ul>
                {userList.map((user, index) => (
                    <li key={index}>
                        {user}
                    </li>
                ))}
            </ul>

            <div>
                <div id='item1' style={{ height: 1000 }}>Item 1</div>
                <div id="item2" style={{ height: 1000 }}>Item 2</div>
            </div>

        </div>
    )
}


export default HomePage