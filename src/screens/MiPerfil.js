import React from 'react';
import { View } from 'react-native';
import { Box, Avatar, Text, Button, VStack, HStack, Divider } from 'native-base';

const UserProfile = () => {
  return (
    <Box flex={1} safeArea bg="white" padding={4}>
      {/* Cabecera con avatar e información básica */}
      <VStack space={4} alignItems="center">
        <Avatar
          size="2xl"
          source={{
            uri: 'https://example.com/avatar.png', // Reemplaza con la URL de la imagen del usuario
          }}
        />
        <Text fontSize="xl" fontWeight="bold">
          Nombre del Usuario
        </Text>
        <Text color="gray.500">usuario@email.com</Text>
        <Text color="gray.400" fontStyle="italic">
          "Esta es una breve biografía del usuario."
        </Text>
      </VStack>

      {/* Sección de acciones */}
      <Divider my={4} />
      <VStack space={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="md" fontWeight="bold">
            Configuración
          </Text>
          <Button variant="ghost" onPress={() => alert('Configurar')}>
            Editar
          </Button>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="md" fontWeight="bold">
            Actividad reciente
          </Text>
          <Button variant="ghost" onPress={() => alert('Ver actividad')}>
            Ver
          </Button>
        </HStack>
      </VStack>

      {/* Botón de cerrar sesión */}
      <Divider my={4} />
      <Button colorScheme="red" onPress={() => alert('Sesión cerrada')}>
        Cerrar sesión
      </Button>
    </Box>
  );
};

export default UserProfile;