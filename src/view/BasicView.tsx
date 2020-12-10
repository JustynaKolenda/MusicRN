import React from 'react' 
import { Dimensions,} from 'react-native'
import styled from 'styled-components/native';

const widthB = Dimensions.get('window')

const BasicView = () => {

   return(
        <SafeArea>
                <ViewArea>
                    <Title>Muzyka</Title>  
                </ViewArea>
                 <ViewGroup>
                    <ViewBox>
                        <MusicType>
                            <TitleM>WARM</TitleM>  
                        </MusicType>
                        <MusicType>
                            <TitleM>EXCITED</TitleM>  
                        </MusicType>
                    </ViewBox>
                    <ViewBox>
                        <MusicType>
                            <TitleM>RELAXED</TitleM>  
                        </MusicType>
                        <MusicType>
                            <TitleM>BRIGHT</TitleM>  
                        </MusicType>
                    </ViewBox>
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
    marginTop: 10,
})
const SafeArea = styled.SafeAreaView({
    backgroundColor: '#29292e'
})
const ViewArea = styled.View({
    backgroundColor: '#000000',
    height: 180,
})

const ViewGroup = styled.View({
    flexDirection: 'row', 
    flexWrap: 'wrap',
})

const MusicType = styled.TouchableOpacity({
    backgroundColor: '#29292e',
    height: 300,
    width: '100%',
    borderColor: '#000000',
    border: 'solid 1px',
    alignItems: 'center',
})

const ViewBox = styled.View({
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
})


export default BasicView