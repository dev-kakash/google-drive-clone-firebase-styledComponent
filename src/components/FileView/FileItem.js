import React from 'react'
import styled from 'styled-components'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {
    const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth() + 1]} ${timestamp?.toDate().getFullYear()}`

    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };

    return (
        <Container>
            <a href={fileUrl} target='_black' download>
            <FileItemLeft>
                <InsertDriveFileIcon/>
                <p>{caption}</p>
            </FileItemLeft>

           <FileItemRight>
               <p>{fileDate}</p>
               <p>{getReadableFileSizeString(size)}</p>
           </FileItemRight>

        </a>
        </Container>
    )
}

export default FileItem

const Container = styled.div`
    height:55px;
    border-bottom:1px solid rgb(219,219,219);
    border-top:1px solid rgb(219,219,219);
    width:100%;
  
    
    p{
        margin-left:8px;
    }
    
    a{
        height:100%;
        display:flex;
        text-decoration:none;
        color:rgb(85,78,78);
    }
    &:hover{
        background-color:rgba(0,0,0,0.04);    
    }
    }
  
`
const FileItemLeft = styled.div`
    display:flex;
    align-items:center;
    margin:10px;
  
    flex:1;
    
    
    
    `
const FileItemRight = styled.div`
    display:flex;
    align-items:center;
    margin:10px;
    

    p{
        margin-left:10px;
        margin-right:20px;
    }
    `
