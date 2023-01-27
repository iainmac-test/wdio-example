import { Given, When, Then } from '@wdio/cucumber-framework';
import chai from 'chai';

Given(/^Google page is opened$/, async () => {
    await console.log(`before openning browser`)
    await browser.url("https://www.google.com")
    
    let ele = await $('#L2AGLb')
    ele.click()
    await console.log(`After closing browser`)
})

When(/^I search with (.*)$/, async function(searchItem){
    console.log(`>> search item: ${searchItem}`);
    let ele = await $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys('Enter')
})

Then(/^Click on search term$/, async() =>{
    await browser.pause(5000)
    let ele = await $(`<h3>`)
    ele.click()
})

Then(/^the URL should match (.*)$/, async function(expectedUrl) {
    // Chai Assertion
    console.log(`>> search item: ${expectedUrl}`);
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedUrl)
})