import React from 'react'
import * as Menubar from '@radix-ui/react-menubar';
import './Menu.css'
import { Link } from "react-router-dom";

const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const HomePage = () => {
    const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

    return (
        <Menubar.Root className="MenubarRoot">
            <div className='nav-menu'>
                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger"><Link className='item' to="/">Home</Link></Menubar.Trigger>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger"><Link className='item' to="/mytodo">AppTodo</Link></Menubar.Trigger>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger"><Link className='item' to="/profile">Profile</Link></Menubar.Trigger>
                </Menubar.Menu>
                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger"><Link className='item' to="/todoReudx">TodoRedux</Link></Menubar.Trigger>
                </Menubar.Menu>

                <Menubar.Menu>
                    <Menubar.Trigger className="MenubarTrigger"><Link className='item' to="#">Account</Link></Menubar.Trigger>
                    <Menubar.Portal>
                        <Menubar.Content
                            className="MenubarContent"
                            align="start"
                            sideOffset={5}
                            alignOffset={-14}
                        >
                            <Menubar.RadioGroup value={radioSelection} onValueChange={setRadioSelection}>

                                <Menubar.Item className="MenubarItem inset btn-inset"><Link className=' item btn-login' to="/login">Login</Link></Menubar.Item>

                                <Menubar.Item className="MenubarItem inset btn-inset"><Link className=' item btn-register' to="/register">Register</Link></Menubar.Item>
                                <Menubar.Item className="MenubarItem inset btn-inset"><Link className=' item btn-forgot' to="/forgot">Forgot password</Link></Menubar.Item>
                            </Menubar.RadioGroup>
                        </Menubar.Content>
                    </Menubar.Portal>
                </Menubar.Menu>
            </div>
        </Menubar.Root>
    );
};

export default HomePage;
