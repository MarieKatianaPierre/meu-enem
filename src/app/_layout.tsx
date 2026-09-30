// src/app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      {/* Força a barra de bateria/horas do celular a ficar clara por causa do tema Dark */}
      <StatusBar style="light" />
      
      {/* Gerenciador de Pilha de Telas (Navegação) */}
      <Stack
        screenOptions={{
          headerShown: false, // Esconde aquela barra preta feia com o título no topo do app
          animation: 'fade',  // Transição suave estilo premium ao mudar de tela
        }}
      >
        {/* Define a ordem e a existência das telas no sistema */}
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="cadastro" />
        <Stack.Screen name="recuperar" />
        <Stack.Screen name="home" />
      </Stack>
    </>
  );
}
