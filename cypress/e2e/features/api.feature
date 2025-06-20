Feature: Consultas a la API pública y validaciones en Mercado Libre

  Scenario: Validar información de monedas desde la API
    When consulto el endpoint de monedas
    Then debo recibir una respuesta exitosa de monedas
    And la respuesta debe contener información de monedas válida

  Scenario: Validar información de países desde la API
    When consulto el endpoint de países
    Then debo recibir una respuesta exitosa de países
    And la respuesta debe contener información de países válida
