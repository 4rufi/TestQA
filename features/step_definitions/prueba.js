const {
    Given,
    When,
    Then
} = require('cucumber');
const Selector = require('testcafe').Selector;
const asd = null;

Given('Navego a la pagina de google', async function () {
    await testController.navigateTo('https://google.com');
});

When('Ingreso en la busqueda tottus sucursales', async function () {
    await testController
    asd = Selector('[name="q"]').with({
            boundTestRun: testController
        })
        .typeText(asd, 'tottus sucursales')
        .pressKey("enter")
        .expect(Selector('b').innerText).contains('nataniel')
});

When('Presiono la busqueda tottus nataniel', async function () {
    await testController
        .click(Selector('b').withText('nataniel'))
        .expect(Selector('a').innerText).contains('Sitio web')
});

When('Presiono el link Sitio web', async function () {
    await testController
        .click(Selector('a').withText('Sitio web'))
        .expect(Selector('#tottusLoadingPage').innerText).contains('tottus')
});

When('Navego a Recetas', async function () {
    await testController
        .navigateTo('http://www.tottusrecetas.cl/')
        .expect(Selector('button').innerText).contains('ALTA')
});

When('Presiono Dificultad Alta', async function () {
    await testController
        .click(pSelector('button').withText('ALTA'))
        .expect(Selector('h3').innerText).contains('CORONA DE ROLLITOS DE CANELA')
});

When('Presiono la receta CORONA DE ROLLITOS DE CANELA', async function () {
    await testController
        .click(pSelector('h3').withText('CORONA DE ROLLITOS DE CANELA'))
        .expect(Selector('#hero').find('p').innerText).contains('CORONA DE ROLLITOS DE CANELA')
});

Then('La receta contiene los ingredientes Azúcar rubia y canela', async function () {
    await testController
        .expect(Selector('#hero').find('p').innerText).contains("CORONA DE ROLLITOS DE CANELA", 'azúcar rubia', 'canela')
});