import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const Login = () => {
    const navigation = useNavigation(); // Obtén el objeto de navegación

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
                <TouchableOpacity style={styles.loginButton}>
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
        width: 150, // Logo más grande
        height: 150,
        marginBottom: 10,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    form: {
        marginTop: 20, // Ajustar campos más arriba
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
        backgroundColor: '#FF0000', // Botón rojo
        paddingVertical: 15,
        paddingHorizontal: 0, // Ajusta el ancho del botón
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
        color: '#fff',  // Color del texto en blanco
        fontSize: 16,
        marginVertical: 10,
        fontWeight: 'bold',
        backgroundColor: '#FF0000',  // Fondo rojo para el botón
        borderRadius: 20,  // Redondea las esquinas
        paddingVertical: 5,  // Espaciado vertical para que el texto no esté pegado a los bordes
        paddingHorizontal: 20,  // Espaciado horizontal para que el texto no esté pegado a los bordes
        textAlign: 'center',  // Centra el texto dentro del botón
        width: 'auto',  // El ancho será automático según el tamaño del texto
        alignSelf: 'center',  // Centra el botón horizontalmente
    },
    forgotPassword: {
        color: '#007AFF',  // Color azul
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',  // Subrayado
    },
    footer: {
        backgroundColor: '#007AFF',
        height: 50, // Ajusta la altura de la línea azul inferior
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default Login;
