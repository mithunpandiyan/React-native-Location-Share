import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Container, Content, Card, CardItem, Item} from 'native-base';
import styles from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../common/Header/index';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {getLocations} from '../../services/location.js';
const Location = ({navigation}) => {
  const [shareData, setShareData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLocation, setCurrentLocation] = useState();
  const [currentLocationMarker, setcurrentLocationMarker] = useState();

  useEffect(async () => {
    const id = await AsyncStorage.getItem('user');
    getLocations
      .locations(id)
      .then(res => {
        setShareData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <ScrollView>
      <Container>
        <Header title={'Location'} navigation={navigation}></Header>
        <Content padder>
          <Card>
            <CardItem header>
              <Text style={styles.titleName}>Users List</Text>
            </CardItem>
            {shareData.map((item, index) => (
              <View style={styles.card} key={index}>
                <View>
                  <Text style={styles.mailtext}>{item.to.email}</Text>
                </View>
                <TouchableOpacity style={styles.viewBtn}>
                  <Text style={styles.viewBtnText}>View</Text>
                </TouchableOpacity>
              </View>
            ))}
          </Card>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <MapView
                  style={{height: 300, width: '100%'}}
                  initialRegion={currentLocation}
                  mapType="standard"
                  enableHighAccuracy
                  pitchEnabled={true}
                  zoomTapEnabled={true}
                  showsScale={true}
                  zoomEnabled={true}
                  scrollEnabled={true}
                  onMapReady={() => {
                    setWidthOfMap(widthOfMap - 1);
                  }}
                  region={currentLocation}>
                  <Marker
                    zoomTapEnabled={true}
                    coordinate={currentLocationMarker}
                    title={'Location'}
                  />
                </MapView>
                <View style={styles.btnadjust}>
                  <TouchableOpacity
                    style={styles.viewBtn}
                    onPress={() => setModalVisible(false)}>
                    <Text style={styles.viewBtnText}>Close</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.viewBtn}
                    onPress={() => getLocations(setShareData)}>
                    <Text style={styles.viewBtnText}>Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </Content>
      </Container>
    </ScrollView>
  );
};

export default Location;
