import React,{useEffect,useState} from 'react'
import { Dimensions, TouchableOpacity ,FlatList, View,Image} from 'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { PORTRAIT,OrientationLocker } from 'react-native-orientation-locker'

const Data=[
    {
        id:1,
        img:{uri:'data:image/jpeg;base64,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'},
        url:{uri:'https://www.youtube.com/embed/Q2sKMqB9QCg'},
    },
    {
        id:2,
        img:{uri:'https://i.ytimg.com/vi/T0F_hibWHlU/maxresdefault.jpg'},
        url:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}
    },   {
        id:3, 
        img:{uri:'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},    
         url:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}  
          },
         {
        id:4,
        img:{uri:'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        url:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}    }, 
          {
        id:5, 
        img:{uri:'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},       url:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}    },   {
        id:6,   
        img:{uri:'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},             url:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}    },   {
        id:7,     
           img:{uri:'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
           url:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'},   
         }, 
             {
        id:8,   
        img:{uri:'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'},
        url:{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'},
    },

]


const Label = styled.Text`
	color: #000;
	font-weight: 700;
	font-size: 23px;
	margin-right: 10px;
	margin-bottom: 15px;
	margin-left: 10px;
`
const MovieScroll = styled.ScrollView`
	padding-left: 10px;
`

const MoviePoster = styled.Image`
	width: ${Math.round((Dimensions.get('window').width * 35) / 100)}px;
	height: 200px;
	border-radius: 10px;
`
const MovieName = styled.Text`
color: #fff;
font-weight: 500;
font-size: 15px;
 margin-top: 10px;
justify-content: center;
align-self: center
`
const MovieCard = styled.View`
	padding-right: 9px;
	padding-left: 5px;
	justify-content: center;
`
const Videos = ({ label, item }) => {
	const navigation = useNavigation();
    // useEffect(() => {
    //     console.log(Data,'');
        
    //   },[]);
	return (
		<View style={{flex:1}}>
			<Label>Videos</Label>
			<OrientationLocker orientation={PORTRAIT} />
			<FlatList
          style={{paddingleft:10}}
          data={Data}
		  keyExtractor={(item, index) => item.id}
          renderItem={({item}) => {
            return (
						<TouchableOpacity activeOpacity={0.5} onPress={() => {
							navigation.navigate("Player", {
								url: item.url
							})
						}}>
							<View style={{alignSelf:'center',marginVertical:20,height:300,width:Dimensions.get('window').width-40,justifyContent:'center',alignContent:'center'}}>
								<Image style={{height:'100%',width:'100%',alignSelf:'center',borderRadius:20}} resizeMode='contain' source={item.img} />
								{/* <MovieName>{item?.name?.slice(0, 20)}</MovieName> */}
							</View>
						</TouchableOpacity>
					  );
					}}
				  />
		</View>
	)
}

export default Videos