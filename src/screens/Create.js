import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Importa el ícono de la flecha

const CreateAccount = ({ navigation }) => {
    const handleBackToLogin = () => {
        // Navegar a la pantalla de login
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* Flecha para volver al login */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackToLogin} style={styles.backButton}>
                    <Icon name="arrow-left" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Crear Cuenta</Text>
            </View>

            {/* Logo al final */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('./img/Logo1.jpeg')} // Cambia por la URL o archivo de tu logo
                    style={styles.logo}
                />
            </View>

            {/* Campos de formulario */}
            <View style={styles.form}>
                <TextInput
                    placeholder="Nombre(s)"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Apellido Paterno"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Apellido Materno"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Correo Electrónico"
                    keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Username"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Contraseña"
                    secureTextEntry
                    style={styles.input}
                />
                <TextInput
                    placeholder="Confirmar Contraseña"
                    secureTextEntry
                    style={styles.input}
                />

                {/* Botón Registro */}
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Registrarse</Text>
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
        flexDirection: 'row', // Para que el texto y la flecha estén en la misma fila
        alignItems: 'center',
        justifyContent: 'center', // Centra el contenido horizontalmente
    },
    backButton: {
        position: 'absolute', // Posiciona la flecha fuera del centro
        left: 20, // Deja un espacio desde el borde izquierdo
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center', // Asegura que el texto esté centrado
        flex: 1, // Para que el texto ocupe el espacio restante
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
    registerButton: {
        backgroundColor: '#007AFF', // Botón azul
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 16,
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
    footer: {
        backgroundColor: '#007AFF',
        height: 50, // Ajusta la altura de la línea azul inferior
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default CreateAccount;
