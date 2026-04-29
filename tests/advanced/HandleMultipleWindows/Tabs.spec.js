const { test, expect } = require('@playwright/test');

test('Handle Multiple Windows/Tabs', async ({ page, context }) => {

    // Step 1: Navigate to site
    await page.goto('https://vinothqaacademy.com/multiple-windows/');

    console.log('Parent Page Title:', await page.title());

    // ------------------------------
    // 🔹 Step 2: Click "New Browser Tab"
    // ------------------------------
    // const [newTab] = await Promise.all([
    //     context.waitForEvent('page'), // wait for new tab
    //     page.getByText('New Browser Tab').click()
    // ]);

    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('button', { name: 'New Browser Tab' }).click()
    ]);
    // Wait for new tab to load
    await newTab.waitForLoadState();

    console.log('Child Tab Title:', await newTab.title());

    // ------------------------------
    // 🔹 Step 3: Switch to child tab
    // ------------------------------
    await newTab.bringToFront();

    // Example validation
    await expect(newTab).toHaveURL(/.*/);

    // ------------------------------
    // 🔹 Step 4: Switch back to parent
    // ------------------------------
    await page.bringToFront();

    console.log('Back to Parent Tab');

    // ------------------------------
    // 🔹 Step 5: Open multiple tabs (3 more)
    // ------------------------------
    const tabs = [];

    for (let i = 0; i < 3; i++) {
        const [tab] = await Promise.all([
            context.waitForEvent('page'),
            page.getByRole('button', { name: 'New Browser Tab' }).click()
        ]);
        await tab.waitForLoadState();
        tabs.push(tab);
    }

    // ------------------------------
    // 🔹 Step 6: Get all tabs
    // ------------------------------
    const allTabs = context.pages();

    console.log('Total Tabs:', allTabs.length);

    // ------------------------------
    // 🔹 Step 7: Iterate & switch all tabs
    // ------------------------------
    for (const tab of allTabs) {
        await tab.bringToFront();
        console.log('Tab URL:', tab.url());
    }

    // ------------------------------
    // 🔹 Step 8: Close child tabs
    // ------------------------------
    for (let i = 1; i < allTabs.length; i++) {
        await allTabs[i].close();
    }

    // Back to parent
    await page.bringToFront();

});