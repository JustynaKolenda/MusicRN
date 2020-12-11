import React from 'react'
import {  Dimensions,  } from 'react-native'
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window')

interface ICategoryViewProps{
    uri: string,
    title: string,
    active: boolean,
    onPress: (id:number)=>void,
    id: number
}

const CategoryView = (props:ICategoryViewProps) => (
    <GroupImage>
        <TouchImage active={props.active} onPress={()=>props.onPress(props.id)}> 
            <ImageM source={{uri: props.uri}}/>
        </TouchImage>
        <Title>{props.title}</Title>
    </GroupImage>
);

const Title = styled.Text({
    fontWeight: 'bold',
    fontSize: 15,
    color: '#636160',
    marginTop: 10,
})

const GroupImage = styled.View({
    alignItems: 'center',
    justifyContent:'center',
    width: '60%',
})

interface ITouchImageProps {
    active: boolean
}

const TouchImage = styled.TouchableOpacity({},(props:ITouchImageProps)=>{
    return({
        border: (props.active)? '1px solid #d9a85f': '1px solid #000000'
    })
})

const widthImage = (width/3)-10

const ImageM = styled.Image({
    width: widthImage,
    height: widthImage-10,
}) 

export default CategoryView