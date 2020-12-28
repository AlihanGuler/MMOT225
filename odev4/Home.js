import React from 'react';

import { View, Text, FlatList, TouchableOpacity, ScrollView, _ScrollView } from 'react-native';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryId: 0
        }

    }


    handlePress = id => {
        this.setState({ selectedCategoryId: id })
    }

    getProductListView() {

        const productList = [
            { name: "Adana", cateId: 1 },
            { name: "Antalya", cateId: 1 },
            { name: "Burdur", cateId: 1 },
            { name: "Hatay", cateId: 1 },
            { name: "Isparta", cateId: 1 },
            { name: "Mersin", cateId: 1 },
            { name: "Osmaniye", cateId: 1 },
            { name: "Konya", cateId: 1 },
            { name: "Kahramanmaraş", cateId: 1 },
            { name: "İstanbul", cateId: 2 },
            { name: "Edirne", cateId: 2 },
            { name: "Kırklareli", cateId: 2 },
            { name: "Tekirdağ", cateId: 2 },
            { name: "Çanakkale", cateId: 2 },
            { name: "Kocaeli", cateId: 2 },
            { name: "Yalova", cateId: 2 },
            { name: "Sakarya", cateId: 2 },
            { name: "Bilecik", cateId: 2 },
            { name: "Bursa", cateId: 2 },
            { name: "Balıkesir", cateId: 2 },
            { name: "Ağrı", cateId: 3 },
            { name: "Ardahan", cateId: 3 },
            { name: "Bingöl", cateId: 3 },
            { name: "Bitlis", cateId: 3 },
            { name: "Elazığ", cateId: 3 },
            { name: "Erzincan", cateId: 3 },
            { name: "Erzurum", cateId: 3 },
            { name: "Hakkari", cateId: 3 },
            { name: "Iğdır", cateId: 3 },
            { name: "Kars", cateId: 3 },
            { name: "Malatya", cateId: 3 },
            { name: "Muş", cateId: 3 },
            { name: "Tunceli", cateId: 3 },
            { name: "Van", cateId: 3 },
            { name: "İzmir", cateId: 4 },
            { name: "Manisa", cateId: 4 },
            { name: "Aydın", cateId: 4 },
            { name: "Denizli", cateId: 4 },
            { name: "Muğla", cateId: 4 },
            { name: "Afyonkarahisar", cateId: 4 },
            { name: "Kütahya", cateId: 4 },
            { name: "Gaziantep", cateId: 5 },
            { name: "Diyarbakır", cateId: 5 },
            { name: "Şanlıurfa", cateId: 5 },
            { name: "Batman", cateId: 5 },
            { name: "Adıyaman", cateId: 5 },
            { name: "Siirt", cateId: 5 },
            { name: "Mardin", cateId: 5 },
            { name: "Kilis", cateId: 5 },
            { name: "Şırnak", cateId: 5 },
            { name: "Artvin", cateId: 6 },
            { name: "Rize", cateId: 6 },
            { name: "Bayburt", cateId: 6 },
            { name: "Trabzon", cateId: 6 },
            { name: "Gümüşhane", cateId: 6 },
            { name: "Giresun", cateId: 6 },
            { name: "Ordu", cateId: 6 },
            { name: "Tokat", cateId: 6 },
            { name: "Amasya", cateId: 6 },
            { name: "Samsun", cateId: 6 },
            { name: "Sinop", cateId: 6 },
            { name: "Çorum", cateId: 6 },
            { name: "Kastamonu", cateId: 6 },
            { name: "Bartın", cateId: 6 },
            { name: "Karabük", cateId: 6 },
            { name: "Zonguldak", cateId: 6 },
            { name: "Düzce", cateId: 6 },
            { name: "Bolu", cateId: 6 },
            { name: "Aksaray", cateId: 7 },
            { name: "Ankara", cateId: 7 },
            { name: "Çankırı", cateId: 7 },
            { name: "Eskişehir", cateId: 7 },
            { name: "Karaman", cateId: 7 },
            { name: "Kayseri", cateId: 7 },
            { name: "Kırıkkale", cateId: 7 },
            { name: "Kırşehir", cateId: 7 },
            { name: "Konya", cateId: 7 },
            { name: "Nevşehir", cateId: 7 },
            { name: "Niğde", cateId: 7 },
            { name: "Sivas", cateId: 7 },
            { name: "Yozgat", cateId: 7 },
            


           
            
            
        ]




        let renderProductList = [];
    
        productList.map((v, k) => {

            if (v.cateId === this.state.selectedCategoryId) {

                renderProductList.push(<Text style={{minHeight:5}}>{v.name}</Text>)

            }


        })


        return renderProductList

    }

    render() {

        return (
            <View>
                <Text>BÖLGELER</Text>

                <Text>Seçilen : {this.state.selectedCategoryId}</Text>

                <FlatList
                    style={{ backgroundColor: 'white' }}
                    data={[{ name: "AKDENİZ BÖLGESİ", id: 1 }, { name: "MARMARA BÖLGESİ ", id: 2 } ,{name :"DOĞU ANADOLU BÖLGESİ:", id: 3},{name :"EGE BÖLGESİ", id: 4},{ name: "GÜNEYDOĞU ANADOLU BÖLGESİ ", id: 5 },{name :"KARADENİZ BÖLGESİ:", id: 6},{name :"İÇ ANADOLU BÖLGESİ:", id: 7}]}
                    renderItem={({ item }) => {

                        return (
                            <TouchableOpacity onPress={() => this.handlePress(item.id)} style={{ minHeight: 30, backgroundColor: 'red' }}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )

                    }

                    }
                />

            <ScrollView style={{minHeight:200,backgroundColor:'white'}}>
                {this.getProductListView()}
                </ScrollView>

            </View>
        )

    }


}