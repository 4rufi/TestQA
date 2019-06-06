Feature: Como usuario quiero validar la receta Corona de Rollitos de Canela

    Prueba QA Falabella Financiero

    Scenario: Buscar y validar Receta Corona de Rollitos de Canela
        Given Navego a la pagina de google
        When Ingreso en la busqueda tottus sucursales
        When Presiono la busqueda tottus nataniel
        When Presiono el link Sitio web
        When Navego a Recetas
        When Presiono Dificultad Alta
        When Presiono la receta CORONA DE ROLLITOS DE CANELA
        Then La receta contiene los ingredientes Azúcar rubia y canela

