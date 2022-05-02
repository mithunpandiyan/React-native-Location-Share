import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  PermissionsAndroid,
  Platform,
  Modal,
} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Button,
  Left,
  Right,
} from 'native-base';
import styles from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../common/Header/index';
import {users} from '../../services/users';
import MapView from 'react-native-maps';
import close from 'react-native-vector-icons';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Location} from '../../services/location.js';
const Home = ({navigation}) => {
  const [userList, setUserList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLocation, setCurrentLocation] = useState();
  const [currentLocationMarker, setcurrentLocationMarker] = useState();
  const [userData, setuserData] = useState({});
  let {width, height} = Dimensions.get('window');
  const [widthOfMap, setWidthOfMap] = useState(width);
  const LATITUDE_DELTA = 0.0922;
  const ASPECT_RATIO = width / height;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  useEffect(() => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        console.log(position.coords);
        setCurrentLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
        setcurrentLocationMarker({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => console.log(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
    users
      .list()
      .then(res => {
        setUserList(res.data);
      })
      .catch(err => {
        setUserList([]);
      });
  }, []);

  const shareLocation = async item => {
    setuserData(item);
    setModalVisible(true);
  };

  const shareLocationUser = async () => {
    const userId = await AsyncStorage.getItem('user');
    Location.location({userId, userData}, currentLocation)
      .then(res => {
        console.log(res.data);
        setModalVisible(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ScrollView>
      <Container>
        <Header title={'Home'} navigation={navigation}></Header>
        <Content padder>
          <Card>
            <CardItem header>
              <Text style={styles.titleName}>Users List</Text>
            </CardItem>
            {userList.map((item, index) => (
              <View style={styles.card} key={index}>
                <View>
                  <Text style={styles.mailtext}>
                    {item.email}
                    {index.email}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => shareLocation(item)}
                  style={styles.viewBtn}>
                  <Text style={styles.viewBtnText}>Share</Text>
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
                    onPress={() => shareLocationUser()}>
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

export default Home;
