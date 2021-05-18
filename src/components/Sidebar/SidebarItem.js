import React from 'react'
import styled from 'styled-components'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const SidebarItem = ({ arrow, icon, label }) => {
    return (
        <Item>
            <SidebarItem__arrow>
                {arrow && (<ArrowRightIcon />)}
            </SidebarItem__arrow>
            
            <SidebarItem__main>
                {icon}
                <p>{label}</p>
            </SidebarItem__main>
        </Item>

    )
}

export default SidebarItem

const Item= styled.div`
    display:flex;
    padding:10px 0;
    border-radius:0 100px 100px 0;
    font-weight:500;

    &:hover{
        background-color:rgba(0,0,0,0.04);    
    }
`
const SidebarItem__arrow= styled.div`
    width:28px;
    margin-left:12px;
    
`
const SidebarItem__main= styled.div`
   
    display:flex;
    margin-left:12px;

    p{
        margin-left:12px;
    }
`
