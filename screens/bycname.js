import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Container, Header, Item, Content, Footer, FooterTab, Button, Left, Body, Icon, Text, Card, CardItem, Input, Label } from 'native-base';

const CountryByName = (props) => {
    const [CountryName, SetCountryName] = useState('');
    const [CountrySearch, SetCountrySearch] = useState('');
    const [EmptyError,setEmptyError] = useState(true);


    const fbyName = () => {
        fetch(`https://api.covid19api.com/total/country/${CountryName}`).then(data => data.json()).then(
            data => { if(data[0].Country.toLowerCase() === CountryName ){  SetCountrySearch(data[(data.length) - 1]) 
                setEmptyError(false)         
                 }else if(data[0].Country === 'undefinded'){ setEmptyError(true)  
                }else{setEmptyError(true)} }).catch(
                e =>{ console.log(e)
                SetCountrySearch('not found') 
                }
                );
             
        }
    return (

        <Container>
            <Header
                androidStatusBarColor='gray'
                style={{ backgroundColor: 'black', color: 'white' }}
            >
                <Left style={{ flex: 0 }}>
                    <Icon name='menu' style={{ height: 'auto', color: 'white' }} onPress={() => { props.navigation.openDrawer() }} />
                </Left>

                <Body style={{ flex: 1 }}>
                    <Image style={{ alignSelf: 'center' , width: 100, height: 100 }} source={require('../assets/logocovid.png')} resizeMode='contain' />
                </Body>
            </Header>
            <Content>
                <Item style={{ margin: 10 }} stackedLabel>
                    <Label style={{padding:4}}>Country Name</Label>
                    <Input onChangeText={(e) => { SetCountryName(e.toLowerCase()) }} value={CountryName} autoFocus={true} keyboardType='default'  underlineColorAndroid='red' />
                </Item>
                <Button onPress={() => { fbyName() }} style={{ alignSelf: 'center', marginTop: 10 }} rounded androidRippleColor='red' dark inputButton={true} ><Text>Search</Text></Button>
               { EmptyError === false ? 
                <Card style={{ marginTop: 30 }}>
                    <CardItem Header style={{ justifyContent: 'space-around', backgroundColor: 'black' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold',justifyContent:'space-around' }}>{'Country: ' + CountrySearch.Country}</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <CardItem style={{ backgroundColor: 'red', width: "100%", flexDirection: 'row', justifyContent: 'space-around'}}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{'Total Death: ' + CountrySearch.Deaths}</Text>
                            </CardItem>
                            <CardItem style={{ backgroundColor: 'orange', width: "100%", flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{'Total Active: ' + CountrySearch.Active}</Text>
                            </CardItem>
                            <CardItem style={{ backgroundColor: 'green', width: "100%", flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{'Total Recovered: ' + CountrySearch.Recovered}</Text>
                            </CardItem>
                            <CardItem style={{ backgroundColor: 'red', width: "100%", flexDirection: 'row', flexWrap:'wrap' ,justifyContent: 'space-around' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{'Total Confirmed: ' + CountrySearch.Confirmed}</Text>
                            </CardItem>


                        </Body>
                    </CardItem>
                    <CardItem Footer style={{ backgroundColor: 'black',justifyContent:'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{'Up-Dated @: ' + CountrySearch.Date.slice(0,10)}</Text>
                    </CardItem>
                </Card> :  CountrySearch === 'not found' ? <Text style={{ alignSelf:'center',backgroundColor:'red',color:'white',padding:10,marginTop:30,borderRadius:10,width:Dimensions.get('screen').width-30,textAlign:'center',fontWeight:'bold'}} >Not Found</Text> :
                <Text  style={{ alignSelf:'center',backgroundColor:'black',color:'white',padding:10,marginTop:30,borderRadius:10,width:Dimensions.get('screen').width-30,textAlign:'center',fontWeight:'bold'}}>Type Country Name to see Analytics</Text>
                }
            </Content>
            <Footer style={styles.footer}>
                <FooterTab style={styles.footertab}>
                <Button androidRippleColor="red" onPress={()=>{props.navigation.navigate('Home')}}><Icon name='home' style={styles.iconcolor} ></Icon></Button> 
                </FooterTab>
                <FooterTab style={styles.footertab} >
                <Button  active={true} androidRippleColor="red" onPress={()=>{props.navigation.navigate('Analytics By Country')}}><Icon name='search' style={styles.iconcolor} ></Icon></Button>
                </FooterTab>
                <FooterTab style={styles.footertab}>
                <Button androidRippleColor="red" onPress={()=>{props.navigation.navigate('Summary')}}><Icon name='analytics' style={styles.iconcolor} ></Icon></Button>
                </FooterTab>
            </Footer>

        </Container>

    );

}

const styles = StyleSheet.create({

    iconcolor: {
        color: 'white',
    },
    footertab: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
    }

});



export default CountryByName;