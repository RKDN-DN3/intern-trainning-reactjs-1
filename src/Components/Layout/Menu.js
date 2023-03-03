import React, { useState, useEffect } from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import './Menu.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = (props) => {
    const [currentUser, setCurrentUser] = useState(null);

    // useEffect(() => {
    //     const fetchCurrentUser = async () => {
    //         // if(localStorage.key === email)
    //         await axios.get('http://localhost:3030/users/whoami').then((response) => {
    //             console.log(response);
    //         })
    //     };
    //     fetchCurrentUser();
    // }, []);

    const handleLogout = async () => {
        props.logout()
    };

    return (
        <Menubar.Root className="MenubarRoot">
            <div className="nav-menu">
                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger">
                        <Link className="item" to="/">
                            Home
                        </Link>
                    </Menubar.Trigger>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger">
                        <Link className="item" to="/mytodo">
                            AppTodo
                        </Link>
                    </Menubar.Trigger>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger">
                        <Link className="item" to="/profile">
                            Profile
                        </Link>
                    </Menubar.Trigger>
                </Menubar.Menu>
                {/* <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger">
                        <Link className="item" to="/todoReudx">
                            TodoRedux
                        </Link>
                    </Menubar.Trigger>
                </Menubar.Menu> */}

                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger">
                        <Link className="item btn-login" to="/dashboard">
                            Mydashboard
                        </Link>
                    </Menubar.Trigger>
                </Menubar.Menu>
                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger">
                        <Link onClick={handleLogout} className="item">
                            LogOut
                        </Link>
                    </Menubar.Trigger>
                </Menubar.Menu>
                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger">
                        {currentUser && (
                            <div className='wlc'>
                                <b> Hi <p>{`Logged in as ${currentUser.username}`}</p></b>
                            </div>
                        )}
                    </Menubar.Trigger>
                </Menubar.Menu>

            </div>

        </Menubar.Root>
    );
};

export default HomePage;
