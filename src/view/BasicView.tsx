import React, { useCallback, useState } from 'react' 
import { Animated, Dimensions, TouchableOpacity, View, } from 'react-native'
import styled from 'styled-components/native';
import MusicCafel from './MusicCafel';

const {width, height} = Dimensions.get('window')

const BasicView = () => {

    const [active, setActive] = useState();

    const onPress = useCallback(()=>{
        // setActive();
    },[])

   return(
        <SafeArea>
                <ViewArea>
                    <GroupImage>
                        <TouchImage onPress={onPress}>
                            <ImageM source={{uri: 'consol'}}/>
                        </TouchImage>
                        <Title>Korg Per</Title>
                    </GroupImage>
                    <GroupImage>
                        <TouchImage  >
                            <ImageM source={{uri: 'electricPiano'}}/>
                        </TouchImage>
                        <Title>Korg 20</Title>
                    </GroupImage>
                </ViewArea>
                 <ViewGroup>
                     <MusicCafel titlePosition={"top"} title={'WARM'} color={'#2d2925'} horizontal={"right"} vertical={"bottom"}/>
                     <MusicCafel titlePosition="top" title={'EXCITED'}  color={'#59302d'} horizontal={"left"} vertical={"bottom"}/>
                     <MusicCafel titlePosition={"bottom"} title={'RELAXED'} color={'#293231'} horizontal={"right"} vertical={"top"}/>
                     <MusicCafel titlePosition={"bottom"} title={'BRIGHT'} color={'#564c3d'} horizontal={"left"} vertical={"top"}/>
                </ViewGroup>
        </SafeArea>
   ) 
}

const ViewArea = styled.View({
    backgroundColor: '#000000',
    height: 180,
    flexDirection: 'row',
})

const Title = styled.Text({
    fontWeight: 'bold',
    fontSize: 15,
    color: '#636160',
    marginTop: 10
})

const GroupImage = styled.View({
    alignItems: 'center',
    justifyContent:'center'
})


const TouchImage = styled.TouchableOpacity({},()=>{
    return({
        
    })
}
)

const widthImage = (width/3)-10

const ImageM = styled.Image({
    width: widthImage,
    height: widthImage-10,
    marginLeft: 20,
    marginTop: 20,
}) 

const SafeArea = styled.SafeAreaView({
    backgroundColor: '#29292e'
})

const heightGroup = height -250
const ViewGroup = styled.View({
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: heightGroup,
})


export default BasicView