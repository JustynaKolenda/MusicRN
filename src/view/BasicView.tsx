import React from 'react' 
import { FlatList, SafeAreaView, ScrollView, View} from 'react-native'
import styled from 'styled-components/native';


const BasicView = () => {

   return(
        <SafeArea>
                <ViewArea>
                    <Title>Muzyka</Title>  
                </ViewArea>
                 <ViewGroup>
                    <MusicType>
                        <Title>WARM</Title>  
                    </MusicType>
                    <MusicType>
                        <Title>EXCITED</Title>  
                    </MusicType>
                    <MusicType>
                        <Title>RELAXED</Title>  
                    </MusicType>
                    <MusicType>
                        <Title>BRIGHT</Title>  
                    </MusicType>
                </ViewGroup>
        </SafeArea>
   ) 
}

const Title = styled.Text({
    color: 'red',
    fontSize: 15,
})
const SafeArea = styled.SafeAreaView({
    backgroundColor: '#29292e'
})
const ViewArea = styled.View({
    backgroundColor: '#000000',
    height: 180,
    width: '100%'
})

const ViewGroup = styled.View({
    flexDirection: 'row', 
    flexWrap: 'wrap' 
})

const MusicType = styled.TouchableOpacity({
    backgroundColor: '#29292e',
    height: 300,
    width: 200,
    borderColor: '#000000',
    border: 'solid 1px',
    flexWrap: 'wrap'
    
})


export default BasicView