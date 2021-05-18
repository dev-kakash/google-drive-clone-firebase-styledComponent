import React, { useState, useEffect } from 'react'  
import styled from 'styled-components'
import { db } from '../../firebase'
import FileCard from './FileCard'
import FileItem from './FileItem'

const FileView = () => {
    const [files, setFiles] = useState([])

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])



    return (
        <Container>
            <FileViewRow>
                   {
                       files.slice(0,5).map(({id,item}) =>(
                           <FileCard name={item.caption} fileUrl={item.fileUrl} />
                       ))
                   }
            </FileViewRow>

            <FileViewTitle>
                <TitleLeft>
                    <p>Name</p>
                </TitleLeft>
                <TitleRight>
                    <p>Last modified</p>
                    <p>Files size</p>
                </TitleRight>

            </FileViewTitle>
            {
                files.map(({ id, item }) => (
                    <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                ))
            }
        </Container>
    )
}

export default FileView
const Container = styled.div`
    width:90%;
    
    
    
    `
const FileViewRow = styled.div`
    height:250px;
    display:flex;
    align-items:center; 
    `
const FileViewTitle = styled.div`
    display:flex;
    margin-bottom:5px;
    color:rgb(85,78,78)
    

    
    `
const TitleLeft = styled.div`
    flex:1;    
    margin-left:18px;
`
const TitleRight = styled.div`
    display:flex;
    margin-right:10px;
    p{
        margin-right:20px;
    }
    `
