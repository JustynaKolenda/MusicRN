import React from 'react';
import { Animated, Dimensions, Platform, View } from 'react-native';
import styled from 'styled-components/native';
import Sound from 'react-native-sound';


const {width, height} = Dimensions.get('window')

interface IMusicCafel {
    color: string
    horizontal: "left" | "right"
    vertical: "top" | "bottom",
    onPress: (id:number)=>void,
    title: string,
    titlePosition: "top" | "bottom",
    active: boolean,
    id: number,
    soundFileName: string
}

const MusicCafel = (props:IMusicCafel) => {
    const PlayLocalSoundFile = (soundFileName:string) =>{

        Sound.setCategory('Playback');
        var mySound = new Sound(`${soundFileName}.mp3`, Sound.MAIN_BUNDLE ,( error )=>{
            if(error){
                console.log(error);
            }else{
                mySound.play((success)=>{
                if(success){
                    console.log('Sound playing')
            }else{
                console.log('Issue playing file');
                }})
            }
        });
            
        mySound.setVolume(1);
        mySound.release();
    }
    return(
        (!props.active)?
            <MusicType active={false} onPress={()=>props.onPress(props.id)}>
                <WrapText titlePosition={props.titlePosition}>
                    <TitleM >{props.title}</TitleM>
                </WrapText>
                <Circle color={props.color} horizontal={props.horizontal} vertical={props.vertical}/>
            </MusicType>
        : 
            <MusicType active={true}>
                 <WrapText titlePosition={props.titlePosition}>
                    <WrapT titlePosition={props.titlePosition}>
                       <TitleM >{props.title}</TitleM>
                    </WrapT> 
                </WrapText>
                <Circle color={props.color} horizontal={props.horizontal} vertical={props.vertical}/>
                <GroupSong onPress={()=>PlayLocalSoundFile(props.soundFileName)}> 
                    <SongCirleView>
                        <SongCirle source={{uri: 'ic_sound'}}/> 
                    </SongCirleView>
                </GroupSong>
            </MusicType>
    )
}

interface IMusicTypeP {
    active: boolean
}

const MusicType = styled.TouchableOpacity({},(props:IMusicTypeP)=>{
    return({
        backgroundColor:(props.active)?'#010101':'#1e1e1b',
        height: '50%',
        width: '50%',
        border: '2px solid #2c2a29',
        alignItems: 'center',
        overflow: 'hidden',
        justifyContent:(props.active)?'center':'',
    })
})

const TitleM = styled.Text({
        color: '#696970',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
})

interface IWrapTProps{
    titlePosition: "top" | "bottom",
}

const WrapT = styled.View({},(props:IWrapTProps)=>{
    let titlePosition;
    if(props.titlePosition == "top"){
        titlePosition= {
            marginTop: (Platform.OS)? 0 : 40,
            top: -70
        }
    }
    return({
        ...titlePosition
    })
}

)
interface IWrapTextProps {
    titlePosition: "top" | "bottom",
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


const songR = (width/2)/3; 
const GroupSong = styled.TouchableOpacity({
    border: '2px solid #4b5a56',
    width: (songR + 15),
    height: (songR + 15),
    borderRadius: songR,
    justifyContent: 'center',
    alignItems: 'center',
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