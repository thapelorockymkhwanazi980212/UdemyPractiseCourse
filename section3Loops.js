// for this file doing do while loop



    function promptLanguage()
    {
                let userInput;
        const target = 'JavaScript';

        do
        {
            userInput = prompt('Please guess the correct language: ');

        } while (userInput !== target)

            console.log('You have typed the correct language:', userInput)
    }