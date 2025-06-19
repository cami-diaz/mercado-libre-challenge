Feature: Búsqueda de iPhone 13 128gb en Mercado Libre

  Background:
    Given que soy un usuario interesado en comprar un iPhone 13 128gb
    And que ingreso al sitio web de Mercado Libre

  Scenario: Búsqueda exitosa de iPhone 13 128gb
    When busco "iPhone 13 128gb"
    Then los resultados deben contener "iPhone 13 128gb"
    Then debo poder verificar que puedo comprar el producto
    And se debe solicitar que ingrese mi usuario
    
  Scenario: Búsqueda con filtro de precio
    When busco "iPhone 13 128gb"
    And aplico filtro de precio entre "0" y "800000"
    Then debo ver resultados filtrados
  
  Scenario: Búsqueda fallida
    When busco "iPhone 13 128gb"
    Then debo ver un mensaje de "No encontramos"