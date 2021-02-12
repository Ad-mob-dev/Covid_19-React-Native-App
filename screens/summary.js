import React ,{useEffect,useState} from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Body, Icon, Text, Card, CardItem, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Summary = (props) => {
    const [Countries,setCountries] = useState('');

    useEffect(()=>{

        fetch('https://api.covid19api.com/summary').then( res => res.json()).then( data => setCountries(data.Countries)).catch(e=> console.log(e))

      },[]);


    return (
      <Container>
        <Header 
        androidStatusBarColor = 'gray'
        style={{backgroundColor:'black',color:'white'}}
        > 
        <Left style={{flex:0}}>
       <Icon  name='menu' style={{height:'auto',color:'white'}} onPress={()=>{props.navigation.openDrawer()}}/>
        </Left>
       
       <Body style={{flex:1}}>
       <Image style={{ alignSelf: 'center' , width: 100, height: 100 }} source={require('../assets/logocovid.png')} resizeMode='contain' />
       </Body>
        
        </Header>
        <Content>
            { Countries === '' ? <TouchableOpacity style={{marginTop:250}}>
              <Spinner color='blue' animating={true} size='large' />
              <Text style={{alignSelf:'center'}}>Loading Data</Text>
               </TouchableOpacity> :
           <ScrollView indicatorStyle='black' keyboardDismissMode='interactive' overScrollMode='auto' style={{flex:1,}}>
            <Text style={{alignSelf:'center',fontSize:17,fontWeight:'bold'}}>Covid-19  Cases Summary</Text>
            { Object.keys(Countries).map((v,i)=>{
              return <Card key={i} style={{backgroundColor:'gray'}} bordered>
                
                <CardItem Header style={{justifyContent:'space-around',backgroundColor:'black'}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>{'Country: '+Countries[i].Country}</Text>
                </CardItem>
                
                <CardItem>
                  <Body>
                    <CardItem style={{backgroundColor:'gray',borderColor:'black' ,borderStyle:'solid',borderWidth:1,width:"100%",flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>{'Total Confirmed: '+ Countries[i].TotalConfirmed}</Text>
                    </CardItem>  
                                      
              
                    <CardItem style={{backgroundColor:'gray',borderColor:'black' ,borderStyle:'solid',borderWidth:1,width:"100%",flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
                      <Text style={{color:'white',fontWeight:'bold'}}>{'Total Death: '+ Countries[i].TotalDeaths}</Text>
                    </CardItem>  
                    
                    <CardItem style={{backgroundColor:'gray',borderColor:'black' ,borderStyle:'solid',borderWidth:1,width:"100%",flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
                      <Text style={{color:'white',fontWeight:'bold'}}>{'New Confirmed: '+ Countries[i].NewConfirmed}</Text>
                    </CardItem>  
              
                    <CardItem style={{backgroundColor:'gray',borderColor:'black' ,borderStyle:'solid',borderWidth:1,width:"100%",flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
                      <Text style={{color:'white',fontWeight:'bold'}}>{'New Death: '+ Countries[i].NewDeaths}</Text>
                    </CardItem>  
              
                    <CardItem style={{backgroundColor:'gray',borderColor:'black' ,borderStyle:'solid',borderWidth:1,width:"100%",flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
                    <Text style={{color:'white',fontWeight:'bold'}}>{'Total Recovered: '+ Countries[i].TotalRecovered}</Text>
                     </CardItem>

                     <CardItem style={{backgroundColor:'gray',borderColor:'black' ,borderStyle:'solid',borderWidth:1,width:"100%",flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
                     <Text style={{color:'white',fontWeight:'bold'}}>{'New Recovered: '+ Countries[i].NewRecovered}</Text>
                    </CardItem>
                    </Body>
                </CardItem>
            
                <CardItem Footer style={{justifyContent:'space-around',backgroundColor:'black'}}>
                <Text style={{color:'white',fontWeight:'bold'}}>{'Up-Dated @: '+ Countries[i].Date.slice(0,10)}</Text>
                </CardItem>

              
                </Card>            
              }) 
            } 
           </ScrollView> 
          }
        </Content>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footertab}>
           <Button androidRippleColor="red" onPress={()=>{props.navigation.navigate('Home')}}><Icon name='home' style={styles.iconcolor} ></Icon></Button> 
          </FooterTab>
          <FooterTab style={styles.footertab} >
          <Button  androidRippleColor="red" onPress={()=>{props.navigation.navigate('Analytics By Country')}}><Icon name='search' style={styles.iconcolor} ></Icon></Button>
          </FooterTab>
          <FooterTab style={styles.footertab}>
          <Button  active={true} androidRippleColor="red" onPress={()=>{props.navigation.navigate('Summary')}}><Icon name='analytics' style={styles.iconcolor} ></Icon></Button>
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

export default Summary;
