import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Línea azul superior */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Iniciar Sesión</Text>
            </View>

            {/* Logo */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('./img/Logo1.jpeg')} // Cambia por la URL o archivo de tu logo
                    style={styles.logo}
                />
                <Text style={styles.logoText}>CARBIDS</Text>
            </View>

            {/* Campos de formulario */}
            <View style={styles.form}>
                <TextInput
                    placeholder="Username o Email"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Contraseña"
                    secureTextEntry
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Home')} // Navega al Home
                >
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>

            {/* Enlaces */}
            <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                    <Text style={styles.createAccountButton}>Crear Cuenta</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>
                </TouchableOpacity>
            </View>

            {/* Línea azul inferior */}
            <View style={styles.footer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        backgroundColor: '#007AFF',
        padding: 30,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    logoContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    form: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    loginButton: {
        backgroundColor: '#FF0000',
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linksContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    createAccountButton: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 10,
        fontWeight: 'bold',
        backgroundColor: '#FF0000',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        textAlign: 'center',
        alignSelf: 'center',
    },
    forgotPassword: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    footer: {
        backgroundColor: '#007AFF',
        height: 50,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default Login;
