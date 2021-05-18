import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components'

const SideIcon = () => {
    return (
        <SideIcons>
            <SideIcons__top>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png" alt="Google Calendar" />
                <img src="https://assets.materialup.com/uploads/64f5506e-2577-4d19-9425-11a1e1fa31a8/0x0ss-85.jpg" alt="Google Keep" />
                <img src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png" alt="Google Tasks" />
            </SideIcons__top>

            <hr />

            <SideIcons__plusIcon>
                <AddIcon />
            </SideIcons__plusIcon>
        </SideIcons>
    )
}

export default SideIcon


const SideIcons = styled.div`
    width:50px;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-left:1px solid rgb(219,219,219);

    hr{
        margin:12px;
        width:90%;
    }

   

    
    `
const SideIcons__top = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

    img{
        width:30px;
        margin:10px 0;
        object-fit:contain;
        cursor:pointer;

    
    }

   

`
const SideIcons__plusIcon = styled.div`
    display:flex;
    align-items:center;
    color:rgb(85,78,78);

`
