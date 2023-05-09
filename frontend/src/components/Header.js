import React from 'react'
import './Header.css'

function MenuIcon(props) {
    const setShowSidebar = props.setShowSidebar
    return (
        <div className='fw-bold cursor-pointer'
        onClick={e => setShowSidebar(prev => !prev)}>|||</div>
    )
}

function Logo() {
    return (
        <div classNmae='fw-bold'>LOGO</div>
    )
}

function SearchBar() {
    const [showDrop, setShowDrop] = React.useState(false)
    function toggleDropDown() {
        setShowDrop(prev => !prev)
    }
    return (
        <div className='d-flex gap-2 align-items-center position-relative'>
           <input type='text'></input> 
           <div className='fw-bold fs-5 cursor-pointer'
           onClick={toggleDropDown}>↓</div>
           {showDrop && <SearchBarDropDown />}
        </div>
    )
}

function SearchBarDropDown() {
    return (
        <div className='d-flex flex-column gap-2 position-absolute top-0 mt-5 p-1
        bg-body border'>
            <div className='d-flex gap-1'>
                <label>from</label>
                <input className=''></input> 
            </div>
            <div className='d-flex justify-content-between'>
                <label>to</label>
                <input className=''></input> 
            </div>
            <div className='btn btn-primary btn-sm w-25 mx-auto' type='submit'>Search</div>
        </div>
    )
}

function UserAvatar() {
    return (
        <div className>A</div>
    )
}


export default function Headers(props) {
    const setShowSidebar = props.setShowSidebar
    return (
        <navbar className='d-flex px-3 py-2 justify-content-between position-fixed w-100 
        top-0 start-0 bg-light'>
            <div className='d-flex gap-3'>
                <MenuIcon setShowSidebar={setShowSidebar} />
                <Logo />
            </div>
            <SearchBar />
            <UserAvatar />
        </navbar>
    )
}