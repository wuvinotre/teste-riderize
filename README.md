# Teste Riderize

## Bibliotecas usadas:

* react-native-maps.
* expo-location.
* react-native-vector-icons - **Ionicons**.
* styled-components.
* Hooks: useState, useEffect.

## Sobre: 

* Navegação entre as telas de Inicio e Gravador.
* App irá pedir permissão para acessar a localização do usuário.

## Resultado:

<div>
<img src="https://user-images.githubusercontent.com/48601030/151626017-63c31ec4-9e7d-455b-b775-536b4e5a754e.jpg" width="414px " height="896px" />
<img src="https://user-images.githubusercontent.com/48601030/151626064-891b6bcf-c4e6-4731-b409-323016236cb0.jpg" width="414px " height="896px" />
</div>

## Dificuldade:

* Queria armazenar a localização do usuário em um AsyncStorage para "espelhar" o mapa nas duas telas, já que é o recomendado em RN. Mas não obtive sucesso com o mesmo na implementação, já que o app sempre crashava.
* Então separei em um component funcional para uso, *funcionou*, mas não é performático. 
