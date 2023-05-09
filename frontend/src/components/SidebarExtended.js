import React from "react";
import './SidebarExtended.css'

export default function SidebarExtended(props) {
    const show = props.showSidebar
    return (
        <div className="extended-sidebar-container bg-light"
        hidden={!show}>
            <div>hello</div>
            <div className="extended-sidebar position-fixed pt-4 d-flex flex-column gap-3 bg-light">
                <div className="cursor-pointer">Inbox</div>
                <div className="cursor-pointer">Starred</div>
                <div className="cursor-pointer">Snoozed</div>
            </div>
        </div>
    )
}