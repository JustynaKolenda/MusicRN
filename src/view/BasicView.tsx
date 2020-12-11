import React, { useCallback, useState } from 'react' 
import {  Dimensions, FlatList,  } from 'react-native'
import styled from 'styled-components/native';
import { CATEGORY } from '../variables/category';
import CategoryView from './CategoryView';
import MusicCafel from './MusicCafel';

const {width, height} = Dimensions.get('window')


const BasicView = () => {

    const [active, setActive] = useState(0);

    const onPress = useCallback((id:number)=>{
        setActive(id);
    },[])
    const [activeCategory, setActiveCategory] = useState(0);

    const onPressCategory = useCallback((id:number)=>{
        setActiveCategory(id);
    },[])

    const renderItem = ({ item }:any) => (
        <CategoryView id={item.id} onPress={onPressCategory} active={(activeCategory==item.id)} title={item.title} uri={item.uri} />
    );

   return(
        <SafeArea>
                <ViewArea>
                    <FlatList
                        data={CATEGORY}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={{paddingLeft:20}}
                    />
                </ViewArea>
                 <ViewGroup>
                    <MusicCafel id={0} onPress={onPress} active={(active==0)} titlePosition={"top"} title={'WARM'} color={'#2d2925'} horizontal={"right"} vertical={"bottom"}/>
                    <MusicCafel id={1} onPress={onPress} active={(active==1)} titlePosition="top" title={'EXCITED'}  color={'#59302d'} horizontal={"left"} vertical={"bottom"}/>
                    <MusicCafel id={2} onPress={onPress} active={(active==2)} titlePosition={"bottom"} title={'RELAXED'} color={'#293231'} horizontal={"right"} vertical={"top"}/>
                    <MusicCafel id={3} onPress={onPress} active={(active==3)} titlePosition={"bottom"} title={'BRIGHT'} color={'#564c3d'} horizontal={"left"} vertical={"top"}/>
                </ViewGroup>
        </SafeArea>
   ) 
}

const ViewArea = styled.View({
    backgroundColor: '#000000',
    height: 180,
    flexDirection: 'row',
    width: '100%',
    justifyContent: "center",
    paddingLeft: 10
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