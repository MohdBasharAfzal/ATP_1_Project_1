//24-11-2023
class Home{
    visit(){
        cy.visit('https://www.hsbc.co.in');
        //Log On button should be visible [Checkpoint]
    }

    //Home page checkpoint 1 [Checking for Title of the Page]
    checkTitleOfTheHomePage(){
        //Checking "Log On" button should exist on the home page
        cy.get('title').contains('HSBC India - Credit Cards, NRI Services, Saving and Deposit')
        return true;
    }

    //Home page checkpoint 2 [Checking for Log On button]
    checkLogOnButton(){
        //Checking "Log On" button should exist on the home page
        cy.get('.selected-item').contains(" Log On ");
        return true;
    }

    clickLogOnButton(){
        cy.get('.selected-item').contains(" Log On ").click({force: true});
    }

}

export default Home;