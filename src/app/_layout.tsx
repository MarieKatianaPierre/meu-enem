
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      {/* Mantém os ícones da barra de status claros no tema escuro */}
      <StatusBar style="light" />

      {/* Gerenciador de navegação entre as telas */}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        {/* Telas do aplicativo Meu ENEM */}
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="cadastro" />
        <Stack.Screen name="recuperar" />
        <Stack.Screen name="home" />
        <Stack.Screen name="estudo" />
        <Stack.Screen name="comentarios" />
      </Stack>
    </>
  );
}
