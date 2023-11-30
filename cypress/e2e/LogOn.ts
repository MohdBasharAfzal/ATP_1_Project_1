//24-11-2023
class LogOn{
    
    //Checkpoint 1 for Logon Page
    checkContinueButtonStatus(){
        //Checking "Continue" button should have disabled initially
        cy.get('button[name="continue"]').should('be.disabled');
    }

    getUsername(){
        return (cy.get('input[name="name"]'));
    }

    //Checkpoint 2 for Logon Page
    checkUsernameIsBlank(){
        //Checking username should have black initially
        // cy.get('input[name="name"]').should('have.value','');

        //Use the getUsername function instead to get the username textbox by making calling the function locally.
        const un = this.getUsername();
        un.should('have.value', '');
    }

    //Checkpoint 3 for Logon Page
    checkRememberCheckboxIsUnchecked(){
        //Check the checkbox should on be checked initially
        cy.get('[type="checkbox"]').should('not.be.checked');
    }

    //Checkpoint 4 for Logon Page
    checkHelpBuuton(){
        //hecking that the help button is available
        cy.get('span[class="icon icon-circle-help-solid help-icon"]');
    }

    clickToOpenHelp(){
        cy.get('span[class="icon icon-circle-help-solid help-icon"]').click();
    }

    clickToCloseHelp(){
        cy.get('span[class="icon icon-delete"]').click();
    }

    enterUsername(username : any){
        // cy.get('input[name="name"]').type(username); 
        const un = this.getUsername();
        un.type(username);
    }

    checkEnterName(){
        cy.get('input[name="name"]');
    }

}

export default LogOn;