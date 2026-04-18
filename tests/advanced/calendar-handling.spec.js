const { test, expect } = require('@playwright/test');

test.describe('Calendar Handling - All Types', () => {

    // =====================================================
    // 🧩 1. Input type="date" (HTML default)
//     // =====================================================
//     test('Handle input type=date', async ({ page }) => {
//
//         await page.goto('https://demoqa.com/date-picker');
//
//         // Direct input
//         await page.fill('#datePickerMonthYearInput', '04/15/2026');
//
//         await page.waitForTimeout(5000);
//         await expect(page.locator('#datePickerMonthYearInput'))
//             .toHaveValue('04/15/2026');
//
//         await page.waitForTimeout(5000);
//     });}
//
// )
//     =====================================================
//     🧩 2. Custom Calendar (React Date Picker)
//     =====================================================
//     test('Handle React calendar', async ({ page }) => {
//
//         await page.goto('https://demoqa.com/date-picker');
//
//         await page.click('#datePickerMonthYearInput');
//
//         await page.waitForTimeout(5000);
//         // Select Month
//         await page.locator('.react-datepicker__month-select')
//             .selectOption('January');
//
//         await page.waitForTimeout(5000);
//         // Select Year
//         await page.locator('.react-datepicker__year-select')
//             .selectOption('2024');
//
//         await page.waitForTimeout(5000);
//         // Select Day (15)
//         await page.locator('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)')
//             .click();
//
//         await page.waitForTimeout(5000);
//         await expect(page.locator('#datePickerMonthYearInput'))
//             .toHaveValue('04/15/2026');
//         await page.waitForTimeout(5000);
//     });})


//     // =====================================================
//     // 🧩 3. Month/Year Dropdown Calendar
//     // =====================================================
//      test('Handle dropdown calendar', async ({ page }) => {
//
//          await page.goto('https://demoqa.com/date-picker');
//          await page.waitForTimeout(5000);
//          await page.click('#datePickerMonthYearInput');
//
//          await page.waitForTimeout(5000);
//         await page.locator('.react-datepicker__month-select')
//             .selectOption('December');
//
//          await page.waitForTimeout(5000);
//         await page.locator('.react-datepicker__year-select')
//             .selectOption('2025');
//
//          await page.waitForTimeout(5000);
//         await page.locator('.react-datepicker__day--025:not(.outside-month)')
//             .click();
//          await page.waitForTimeout(5000);
//     });})


//     // =====================================================
//     // 🧩 4. Dynamic Calendar (Loop Logic)
//     // =====================================================
//     test('Handle dynamic calendar with loop', async ({ page }) => {
//
//         await page.goto('https://www.redbus.in/');
//         await page.waitForTimeout(5000);
//
//         //await page.click('#onwardCal');
//         await page.click('text=Date of Journey');
//
//         await page.waitForTimeout(5000);
//
//         const targetMonth = 'Jun 2026';
//
//         while (true) {
//             const currentMonth = await page.locator('.DayNavigator__CalendarHeader-qj8jdz-1').textContent();
//
//             if (currentMonth.includes(targetMonth)) break;
//
//             await page.click('//span[contains(@class,"next")]');
//         }
//
//         await page.click('//span[text()="15"]');
//     });})
//

//     // =====================================================
//     // 🧩 5. Multi-Month Calendar (Travel Sites)
//     // =====================================================
//     test('Handle multi-month calendar', async ({ page }) => {
//
//         await page.goto('https://www.makemytrip.com/');
//
//         // Close login popup if appears
//         await page.locator('body').click();
//
//         await page.click('//label[@for="departure"]');
//
//         const targetMonth = 'June 2026';
//         const targetDate = '20';
//
//         while (true) {
//             const monthText = await page.locator('//div[contains(@class,"DayPicker-Caption")]').first().textContent();
//
//             if (monthText.includes(targetMonth)) break;
//
//             await page.click('//span[@aria-label="Next Month"]');
//         }
//
//         await page.click(`//p[text()="${targetDate}"]`);
//     });
//
// });