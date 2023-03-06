describe('Verify successful login & logout', () => {
    it('Insert the host name and click save', async() => {
        //Find and enter the value for host value
        // const Txtj5host = await $('//*[@id="settingsHost-inner"]');
        const Txtj5host = await $('//android.widget.EditText[@id="settingsHost-inner"]');
        await Txtj5host.addValue('https://cpt-ppm-j5qa01.ingrnet.com/');

        //Verify the value text field is populated with expected value
        await expect (Txtj5host).toHaveText('https://cpt-ppm-j5qa01.ingrnet.com/')
        
        // await driver.pause(5000);

        //Find Elements by UIAutomator
        // await $('android=new UiSelector().textContains("Save")').click();
    });
    
});