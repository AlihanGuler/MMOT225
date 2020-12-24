import React from 'react';

import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';


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
            { name: "-NBA de Yeni sezon Heyecanı", cateId: 2 },
            { name: "NBA Corona Virüs tedbirleri kapsamında sezon başladı", cateId: 2 },
            { name: "-GOLDEN STATE WARRİORS AVA GİDERKEN AVLANDI!!", cateId: 2 },
            { name: "Golden State Warriors Stephen Curry liderliğinde ilk maçını kaybetti! ", cateId: 2 },
            { name: "-EROL BULUT İSTİFA EDECEK Mİ? ", cateId: 2 },
            { name: "Şampiyonluk favorisi Fenerbahçe ligde üst üste kaybetmeye başlayınca taraftarlardan tepki geldi  ", cateId: 2 },
            { name: "-COVİD 19?", cateId: 1 },
            { name: "COVİD 19 önlemleri arttı   ", cateId: 1 },
            { name: "-AŞI BULUNDU ! ", cateId: 1 },
            { name: "Aşı çalışmaları başlandı ilk siparişler verildi!", cateId: 1 },
            { name: "-YENİ YASAKLAR ! ", cateId: 1 },
            { name: "Haftasonu tam kapanma!", cateId: 1 },
            { name: "-NEW YORK BORSASI YÜKSELİŞLE AÇILDI ! ", cateId: 3 },
            { name: "-BORSA GÜNE YÜKSELİŞLE BAŞLADI ! ", cateId: 3 },
            { name: "-ALTIN YÜKSELİŞTE ! ", cateId: 3 },
            { name: "-JOE BİDEN SEÇİMLERİ KAZANDI! ", cateId: 4 },
            { name: "JOE BİDEN 270 delege alarak seçimi kazandı! ", cateId: 4 },
            
        ]

        if (this.state.selectedCategoryId < 1) {
            return <Text>Kategori seçilmediği için haberler gösterilemiyor.</Text>
        }


        let renderProductList = [];

        productList.map((v, k) => {

            if (v.cateId === this.state.selectedCategoryId) {

                renderProductList.push(<Text style={{minHeight:30}}>{v.name}</Text>)

            }


        })


        return renderProductList

    }

    render() {

        return (
            <View>
                <Text>HABER SAYFASI.</Text>

                <Text>Seçilen : {this.state.selectedCategoryId}</Text>

                <FlatList
                    style={{ backgroundColor: 'red' }}
                    data={[{ name: "SAĞLIK", id: 1 }, { name: "SPOR ", id: 2 } ,{name :"BORSA", id: 3},{name :"AMERİKA SEÇİMLERİ", id: 4}]}
                    renderItem={({ item }) => {

                        return (
                            <TouchableOpacity onPress={() => this.handlePress(item.id)} style={{ minHeight: 30, backgroundColor: 'blue' }}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )

                    }

                    }
                />

            <ScrollView style={{minHeight:200,backgroundColor:'skyblue'}}>
                {this.getProductListView()}
                </ScrollView>

            </View>
        )

    }


}