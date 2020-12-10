import React from 'react' 
import { Animated, Dimensions, View,} from 'react-native'
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('window')

const BasicView = () => {

   return(
        <SafeArea>
                <ViewArea>
                    <Title>Muzyka</Title>  
                </ViewArea>
                 <ViewGroup>
                    <MusicType>
                        <TitleM>WARM</TitleM>
                        <Circle color={'#2d2925'} horizontal={"right"} vertical={"bottom"}/>
                    </MusicType>
                    <MusicType>
                        <TitleM >EXCITED</TitleM>
                        <Circle color={'#59302d'} horizontal={"left"} vertical={"bottom"}/>
                    </MusicType>
                    <MusicTypeActiv>
                        <Circle color={'#293231'} horizontal={"right"} vertical={"top"}/> 
                        <GroupSong> 
                            <SongCirle source={{uri: 'ic_sound'}}/> 
                        </GroupSong>
                        <WrapTextBottom>
                            <TitleM >RELAXED</TitleM>
                        </WrapTextBottom>
                    </MusicTypeActiv>
                    <MusicType>
                        <Circle color={'#564c3d'} horizontal={"left"} vertical={"top"}/> 
                        <WrapTextBottom>
                            <TitleM>BRIGHT</TitleM>
                        </WrapTextBottom> 
                    </MusicType>
                </ViewGroup>
        </SafeArea>
   ) 
}

const Title = styled.Text({
    color: 'red',
    fontSize: 15,
})

const TitleM = styled.Text({
    color: '#696970',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
})

const WrapTextBottom = styled(Animated.View)({
    position: "absolute",
    bottom: 20,
})

const SafeArea = styled.SafeAreaView({
    backgroundColor: '#29292e'
})
const ViewArea = styled.View({
    backgroundColor: '#000000',
    height: 180,
})

const heightGroup = height -250
const ViewGroup = styled.View({
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: heightGroup,
})

const MusicType = styled.TouchableOpacity({
    backgroundColor: '#1e1e1b',
    height: '50%',
    width: '50%',
    border: '2px solid #2c2a29',
    alignItems: 'center',
    overflow: 'hidden'
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

interface ICircleProps{
    color: string,
    horizontal: "left" | "right"
    vertical: "top" | "bottom",
}

const Circle = styled(Animated.View)({},(props:ICircleProps)=>{
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
    alignItems: 'center'
})


const SongCirle = styled(Animated.Image)({
    width: songR,
    height: songR,
    borderRadius: songR,
    borderColor: '#97bab0',
    backgroundColor: '#b3dbd0',
   
})

export default BasicView