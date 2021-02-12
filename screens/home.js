import React ,{useEffect,useState} from 'react';
import { Image,View,FlatList ,ScrollView} from 'react-native';
import { Container,DeckSwiper, Header,Thumbnail, Title, Content, Footer, FooterTab, Item,Button, Left, Right, Body, Icon, Text, Card, CardItem, Separator, Spinner, CardSwiper } from 'native-base';
import { StyleSheet ,Dimensions } from 'react-native';
import {WebView} from 'react-native-webview';

const Home = (props) => {
  const [NewsArticles,SetNewsArticles] = useState([]);

  useEffect(()=>{
   fetchNews();
  },[])

  async function fetchNews()  {
    await  fetch('https://newsapi.org/v2/everything?q=Pakistan-covid19&apiKey=88fd01b5cd5a4991979a1c77b5b3efa3').then( 
      (res) => res.json()).then(
     (data)=> SetNewsArticles(data),
        ).catch(
          (e)=>console.log(e))
  }

  const cards = [
    {
      text: 'card1',
      name: 'One',
      image: require('../assets/logocovid.png'),
    },
    {
      text: 'Card two',
      name: 'two',
      image: require('../assets/logocovid.png'),
    },
    {
      text: 'Card 3',
      name: 'three',
      image: require('../assets/logocovid.png'),
    },
    {
      text: 'Card 4',
      name: 'four',
      image: require('../assets/logocovid.png'),
    },

  ];
    const render = (news) =>{
        console.log('news',news.index)
    }

    return (
      <Container>
        <Header 
        androidStatusBarColor = 'gray'
        style={{backgroundColor:'black',color:'white'}}
        > 
        <Left>
       <Icon  name='menu' style={{height:'auto',color:'white'}} onPress={()=>{props.navigation.openDrawer()}}/>
        </Left>
       <Body style={{flex:1}}>
       <Image style={{ alignSelf: 'center' , width: 100, height: 100 }} source={require('../assets/logocovid.png')} resizeMode='contain' />
       </Body>    
        </Header>

        <Content style={{backgroundColor:'gray'}}>
        {/* <Image source={require('../assets/logocovid.png')} accessibilityLabel="Image" style={{marginTop:30,width:'auto',height:100}} resizeMode='contain' />
        {console.log(NewsArticles)} */}
        <ScrollView>
          <WebView  javaScriptEnabled={true} source={{uri:'https://datastudio.google.com/embed/u/0/reporting/1PLVi5amcc_R5Gh928gTE8-8r8-fLXJQF/page/g8oJB'}}
          style={{marginTop:0,flex:1,width:Dimensions.get('screen').width,height:5500}}/> 
         </ScrollView>
       
 
         </Content>
        <Footer style={styles.footer}>
          <FooterTab active  style={styles.footertab}>
           <Button active={true} androidRippleColor="red" onPress={()=>{props.navigation.navigate('Home')}}><Icon name='home' style={styles.iconcolor} ></Icon></Button> 
          </FooterTab>
          <FooterTab style={styles.footertab} >
          <Button androidRippleColor="red" onPress={()=>{props.navigation.navigate('Analytics By Country')}}><Icon name='search' style={styles.iconcolor} ></Icon></Button>
          </FooterTab>
          <FooterTab style={styles.footertab}>
          <Button androidRippleColor="red" onPress={()=>{props.navigation.navigate('Summary')}}><Icon name='analytics' style={styles.iconcolor} ></Icon></Button>
          </FooterTab>
        </Footer>
      </Container>
        
   );
};


const styles = StyleSheet.create({

iconcolor: {
  color:'white',
},
footertab:{
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'black',
},
footer:{
  justifyContent:'center',
  alignItems:'center',  
}

});

export default Home;
