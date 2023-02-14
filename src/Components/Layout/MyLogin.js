import React from 'react'
import './MyLogin.css'
import * as Tabs from '@radix-ui/react-tabs';

export default function MyLogin() {
    return (
        <div className='container-login'>
            <div className='content-login'>
                <h5 className='title-login'>Login with me !</h5>
                <Tabs.Root className="TabsRoot" defaultValue="tab1">
                    <Tabs.List className="TabsList" aria-label="Manage your account">
                        <Tabs.Trigger className="TabsTrigger" value="tab1">
                            Login
                        </Tabs.Trigger>
                        <Tabs.Trigger className="TabsTrigger" value="tab2">
                            Reset password
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content className="TabsContent" value="tab1">
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="username">
                                Username
                            </label>
                            <input className="Input input-valid" id="username" defaultValue="jonh" pattern="[a-z, 0-9]*" />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="name">
                                Password
                            </label>
                            <input className="Input input-valid" id="name" type="password" defaultValue="pedro" pattern="[a-z, A-Z, 0-9]*" />
                        </fieldset>
                        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                            <button className="Button green">Login</button>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content className="TabsContent" value="tab2">
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="currentPassword">
                                Current password
                            </label>
                            <input className="Input" id="currentPassword" type="password" />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="newPassword">
                                New password
                            </label>
                            <input className="Input" id="newPassword" type="password" />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="confirmPassword">
                                Confirm password
                            </label>
                            <input className="Input" id="confirmPassword" type="password" />
                        </fieldset>
                        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                            <button className="Button green">Change password</button>
                        </div>
                    </Tabs.Content>
                </Tabs.Root>
                <div className='image-login'></div>
            </div>
        </div>
    )
}
