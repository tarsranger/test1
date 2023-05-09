import React from "react";

function MainTabs(props) {
    const setTab = props.setTab
    return (
        <div className="d-flex pt-4 p-2 justify-content-around border-bottom">
            <div onClick={e => setTab(0)}
            className="cursor-pointer">Primary</div>
            <div onClick={e => setTab(1)}
            className="cursor-pointer">Promotions</div>
            <div onClick={e => setTab(2)}
            className="cursor-pointer">Social</div>
        </div>
    )
}

function Email(props) {
    const email = props.email
    return (
        <div className='d-flex border-bottom'>
            <input className='ms-2' type='checkbox'></input>
            <div className="flex-grow-1">{email.sender_name}</div>
            <div className="flex-grow-1 ">{email.email_subject}</div>
            <div className="flex-grow-1 ">{email.received_at}</div>
        </div>
    )
}

function Primary() {
    const [emails, setEmails] = React.useState([])
    React.useEffect(() => {
        fetch('/emails/')
        .then(response => response.json())
        .then(response => setEmails(response))
    }, [])
    
    return (
        <div>
            {emails.map(
                email => (<Email email={email} />)
            )}
        </div>
    )
}

function Promotions() {
    return 
}

function Social() {
    return
}

export default function Main() {
    const [tab, setTab] = React.useState(0)
    return (
        <div className="flex-grow-1">
            <MainTabs setTab={setTab} />
            <div className="mt-3">
                {
                    tab === 0 ? <Primary /> :
                    tab === 1 ? <Promotions /> :
                    <Social />
                }
            </div>
            
        </div>
    )
}