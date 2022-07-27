import React from 'react'
import './SidebarOption.css'

//passing an icon and text as props for the sideOption icon and text in Twitter's sidebar like Home, Settings etc
//but icons are components (remember we're importin them here?) so we to use a capital first letter
//becasue of this we're destrcuturing the props object and writing them individually
//also: regarding the active: we want to a state (for active icons in the sidebar) so we're passing it in props

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption
