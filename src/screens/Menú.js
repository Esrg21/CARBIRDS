import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const InicioScreen = () => <View style={styles.screen}><Text>HOME</Text></View>;
const MiPerfilScreen = () => <View style={styles.screen}><Text>Mi Perfil</Text></View>;
const MisCarrosScreen = () => <View style={styles.screen}><Text>Mis Carros</Text></View>;
const MisFavoritosScreen = () => <View style={styles.screen}><Text>Mis Favoritos</Text></View>;
const MisOfertasScreen = () => <View style={styles.screen}><Text>Mis Ofertas</Text></View>;
const VenderScreen = () => <View style={styles.screen}><Text>Vender</Text></View>;
const SettingsScreen = () => <View style={styles.screen}><Text>Settings</Text></View>;
const ComentariosScreen = () => <View style={styles.screen}><Text>Comentarios</Text></View>;

const Drawer = createDrawerNavigator();

export default function Menú() {
    return (
        <Drawer.Navigator initialRouteName="Inicio">
            <Drawer.Screen name="Inicio" component={InicioScreen} />
            <Drawer.Screen name="Mi Perfil" component={MiPerfilScreen} />
            <Drawer.Screen name="Mis Carros" component={MisCarrosScreen} />
            <Drawer.Screen name="Mis Favoritos" component={MisFavoritosScreen} />
            <Drawer.Screen name="Mis Ofertas" component={MisOfertasScreen} />
            <Drawer.Screen name="Vender" component={VenderScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Comentarios" component={ComentariosScreen} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
