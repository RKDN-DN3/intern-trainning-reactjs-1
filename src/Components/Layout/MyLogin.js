import React, { useState } from 'react'
import './MyLogin.css'
import * as Tabs from '@radix-ui/react-tabs'
import PasswordChecklist from "react-password-checklist"

export default function MyLogin() {
    const [users, setUsers] = useState('')
    const [password, setPassword] = useState("")
    const [passwordAgain, setPasswordAgain] = useState("")
    const handleName = (e) => {
        const { password, value } = e.target
        setPassword({ ...password, [password]: value })
        console.log(value);
    }
    const onSubmit = () => {
        setPassword('cuong')
        setPassword('')
    }
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
                            <input
                                onChange={handleName}
                                className="Input input-valid" id="username"
                                defaultValue="manhcuong2603" pattern="[a-z, 0-9]*"
                            />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="name">
                                Password
                            </label>
                            <input
                                onChange={handleName}
                                className="Input input-valid" id="name"
                                type="password" pattern="[a-z, A-Z, 0-9]*"
                            />
                        </fieldset>
                        <div className='for-fun'>
                            <div className="spinner">
                                <div className="bubble-1"></div>
                                <div className="bubble-2"></div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                            <button onClick={() => onSubmit()} className="Button green">Login</button>
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
                            <input className="Input" id="newPassword" type="password" onChange={e => setPassword(e.target.value)} />
                        </fieldset>
                        <fieldset className="Fieldset">
                            <label className="Label" htmlFor="confirmPassword">
                                Confirm password
                            </label>
                            <input className="Input" id="confirmPassword" type="password" onChange={e => setPasswordAgain(e.target.value)} />
                        </fieldset>
                        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                            <button className="Button green">Change password</button>
                        </div>

                        <PasswordChecklist
                            rules={["minLength", "specialChar", "number", "capital", "match"]}
                            minLength={8}
                            value={password}
                            valueAgain={passwordAgain}
                            messages={{
                                minLength: "Password length more than 8 characters",
                                specialChar: "Password with special characters",
                                number: "Password with number",
                                capital: "Password has 1 capital letter",
                                match: "No password match",
                            }}
                        />
                    </Tabs.Content>
                </Tabs.Root>
                <span className="or-singin or-login">Or Sing In with ?</span>
                <div className="face face-login">
                    <div className="sing-or"><i className="fa-brands fa-facebook-f"></i>FaceBook</div>
                    <div className="sing-or"><i className="fa-brands fa-twitter"></i>Twitter</div>
                </div>
            </div>
        </div>
    )
}
