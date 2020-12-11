import React from 'react'
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


export class optionsNavigation extends React.Component {

    static MusicCafle = () => {
        return{
            headerStyle: {
                backgroundColor: '#3c3935',
            },
            headerLeft: () =>  
                <TouchableOpacity>
                    <Arrow source={{uri:"arrow"}}/>
                </TouchableOpacity>,
            headerTitle: () => <Title>Massive reload</Title>,
        }
    }
} 

const Arrow = styled.Image({
    width: 28,
    height: 28,
    padding: 5,
    marginLeft:10
})

const Title = styled.Text({
    fontSize: 20,
    color: '#d0cecd'
})

export default optionsNavigation;