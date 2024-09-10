import {test, expect} from "@playwright/test"

test('purchase an item', async ({ page }) => {

    await page.goto ("https://www.saucedemo.com");

    await page.getByRole('textbox',{name:'Username'}).fill('standard_user');
    await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();

    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

    await page.locator('a.shopping_cart_link').click();

    await expect(page.getByRole('button', {name: 'Checkout'})).toBeVisible()

    const actualName = await page.locator('.inventory_item_name').innerText()
    const actualDescription = await page.locator('.inventory_item_desc').innerText()
    const actualPrice = await page.locator('.inventory_item_price').innerText()

    

    await page.getByRole('button', {name: 'Checkout'}).click()

    await page.getByRole('textbox', {name:'First Name'}).fill('Goku')
    await page.getByRole('textbox', {name:'Last Name'}).fill('Sayayin')
    await page.getByRole('textbox', {name:'Zip/Postal Code'}).fill('11000')

    expect(page.getByRole('button', {name:'Continue'})).toBeVisible()
    await page.getByRole('button', {name:'Continue'}).click()
    await page.getByRole('button', {name:'Finish'}).click()



await page.pause()
})
 