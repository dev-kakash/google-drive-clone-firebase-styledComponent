import React from 'react'
import styled from 'styled-components'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const FileCard = ({ name,fileUrl }) => {
    return (
        <FCard>
            <a href={fileUrl} target='_black' download>
            <CardTop>
                <InsertDriveFileIcon style={{ fontSize: 130 }} />
            </CardTop>

            <CardBottom>
                <p>{name}</p>
            </CardBottom>

            </a>
        </FCard>
    )
}

export default FileCard

const FCard = styled.div`
    heignt:190px;
    width:240px;
    border-radius:10px;
    border:1px solid rgb(219,219,219);
    margin:5px;    
    color:rgb(85,78,78);

    a{
        text-decoration:none;
        color:rgb(85,78,78);
    }

    &:hover{
        background-color:rgba(0,0,0,0.04);    
    }
`
const CardTop = styled.div`
    hight:70%;
    border-bottom:1px solid rgb(219,219,219);
    display:flex;
    justify-content:center;
    align-items:center;
    `
const CardBottom = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:30%;
    padding:10px 0px;
    `

