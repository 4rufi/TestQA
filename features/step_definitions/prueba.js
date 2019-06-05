const {
    Given,
    When,
    Then
} = require('cucumber');
const Selector = require('testcafe').Selector;

Given('Navego a la pagina de google', async function () {
    await testController.navigateTo('https://google.com');
});

When('Ingreso en la busqueda tottus sucursales', async function () {
    await testController
        .typeText(Selector('[name="q"]'), 'tottus sucursales')
        .pressKey("enter")
});

When('Presiono la busqueda tottus nataniel', async function () {
    await testController
        .click(Selector('b').withText('nataniel'))
});

When('Presiono el link Sitio web', async function () {
    await testController
        .click(Selector('a').withText('Sitio web'))
});

When('Navego a Recetas', async function () {
    await testController
        .navigateTo('http://www.tottusrecetas.cl/')
});

When('Presiono Dificultad Alta', async function () {
    await testController
        .click(Selector('button').withText('ALTA'))
});

When('Presiono la receta CORONA DE ROLLITOS DE CANELA', async function () {
    await testController
        .click(Selector('h3').withText('CORONA DE ROLLITOS DE CANELA'))
});

Then('La receta contiene los ingredientes Azúcar rubia y canela', async function () {
    await testController
        .expect(Selector('#hero').find('p').with({ boundTestRun: testController }).innerText).contains("CORONA DE ROLLITOS DE CANELA", 'Azúcar rubia', 'Canela')
});
