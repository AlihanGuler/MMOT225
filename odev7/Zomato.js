import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Zomato extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            rstrnt: null
        }
        this.state = {
            menu: null
        }
    }



    componentDidMount() {

        fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=19431060"
            , {
                method: 'GET',
                headers: {
                    "user-key": "189479053aeb84da508b736992350a8d"
                }
            })
            .then(r => {
                return r.json();
            })
            .then(res => {
                this.setState({ rstrnt: res });
            }).catch(e => {
                console.warn("error zomato : ", e);
            });


          
        
    }



   

    render() {

        

        if (!this.state.rstrnt) {
            return null;
        }



        return (
            <View>
                <Text>ID : {this.state.rstrnt.id}</Text>
                <Text>....................................................................</Text>
                <Text>HİGHLİGHTS : {this.state.rstrnt.highlights}</Text>
                <Text>....................................................................</Text>
                 <Text>NAME : {this.state.rstrnt.name}</Text>
                <Text>....................................................................</Text>
                 <Text>ADDRESS : {this.state.rstrnt.location.address}</Text>
                <Text>....................................................................</Text>
                <Text>LOCALİTY : {this.state.rstrnt.location.locality}</Text>
                <Text>....................................................................</Text>
                <Text>URL : {this.state.rstrnt.url}</Text>

                
                
            </View>
        );
    }
}