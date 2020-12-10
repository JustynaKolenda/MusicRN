import React, { useState } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window')

interface IMusicCafel {
    color: string
    horizontal: "left" | "right"
    vertical: "top" | "bottom",
    onPress?: ()=>void,
    title: string,
    titlePosition: "top" | "bottom"
}

const MusicCafel = (props:IMusicCafel) => {
    const [active, setActive] = useState(true)


    return(
        (active)?
            <MusicType>
                <WrapText titlePosition={props.titlePosition}>
                    <TitleM>{props.title}</TitleM>
                </WrapText>
                <Circle color={props.color} horizontal={props.horizontal} vertical={props.vertical}/>
            </MusicType>
        : 
            <MusicTypeActiv>
                 <Circle color={props.color} horizontal={props.horizontal} vertical={props.vertical}/>
                <GroupSong> 
                    <SongCirleView>
                        <SongCirle source={{uri: 'ic_sound'}}/> 
                    </SongCirleView>
                </GroupSong>
                <WrapText titlePosition={"bottom"}>
                <TitleM>{props.title}</TitleM>
                </WrapText>
            </MusicTypeActiv>
    )
}

const MusicType = styled.TouchableOpacity({
    backgroundColor: '#1e1e1b',
    height: '50%',
    width: '50%',
    border: '2px solid #2c2a29',
    alignItems: 'center',
    overflow: 'hidden'
})
const TitleM = styled.Text({
    color: '#696970',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
})

interface IWrapTextProps {
    titlePosition: "top" | "bottom"
}

const WrapText = styled(Animated.View)({},(props:IWrapTextProps)=>{
    let titlePosition ;
    if(props.titlePosition == "bottom"){
        titlePosition = {
            position: "absolute",
            bottom: 20,
        }
    }
    return({
        ...titlePosition
    })
})

interface ICircleP {
    color: string
    horizontal: "left" | "right"
    vertical: "top" | "bottom",
}

const Circle = styled(Animated.View)({},(props:ICircleP)=>{
    const r = (width/2)/2;
    let horizontal , vertical, transform = "";

    if(props.vertical == 'top'){
        vertical = {
            top:0,
        }
        transform= `translateY(-${r/2}px) `;
    } else {
        vertical = {
            bottom:0,
        }
        transform= `translateY(${r/2}px) `;
    }

    if(props.horizontal == 'left'){
        horizontal = {
            left: 0
        }
        transform+= `translateX(-${r/2}px)`;
    } else {
        horizontal = {
            right: 0
        }
        transform+= `translateX(${r/2}px)`;
    }

    return(
        {
            width: r,
            height: r,
            borderRadius: r,
            borderColor: props.color,
            borderWidth: 14,
            position: "absolute",
            ...horizontal,
            ...vertical,
            transform
        }
    )
})

const MusicTypeActiv = styled.TouchableOpacity({
    backgroundColor: '#010101',
    height: '50%',
    width: '50%',
    border: '2px solid #2c2a29',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
})


const songR = (width/2)/3; 
const GroupSong = styled.TouchableOpacity({
    border: '2px solid #4b5a56',
    width: (songR + 15),
    height: (songR + 15),
    borderRadius: songR,
    justifyContent: 'center',
    alignItems: 'center'
})

const SongCirleView = styled(View)({
    width: songR,
    height: songR,
    borderRadius: songR,
    borderColor: '#97bab0',
    backgroundColor: '#b3dbd0',
    justifyContent: 'center',
    alignItems: 'center'
})

const SongCirle = styled(Animated.Image)({
    width: '60%',
    height: '60%',
    borderRadius: songR,
    backgroundColor: '#b3dbd0',
})

export default MusicCafel;