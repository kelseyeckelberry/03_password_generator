This program will allow the user to generate a random password that meets selected requirements.

IF "Generate Password" button is clicked THEN
    
    Print "Enter a length between 8 and 128."

        IF INPUT is greater than or equal to 8 && less than or equal to 128 THEN
            
            Print "Your password will be INPUT characters long."
        
        ELSE print "Your selection does not meet the requirements."

            Print "Enter a length between 8 and 128."
    
    Print "Choose the types of characters you wish to include."

        Print "Lowercase letters?"

            IF true THEN

                include lowercase letters
            
            ELSE

                Do not include lowercase letters
        
        Print "Uppercase letters?"

            IF true THEN

                Include uppercase letters
            
            ELSE

                Do not include uppercase letters

        Print "Numbers?"

            IF true THEN

                Include numbers
            
            ELSE

                Do not include numbers

        Print "Special Characters?"

            IF true THEN

                Include special characters
            
            ELSE

                Do not include special characters
    
    IF INPUT is invalid THEN
    
        Print "Your selections do not meet the requirements."

    IF INPUT is valid THEN
    
        Print "Generate password?"

    IF INPUT is valid THEN

        Print generated password onto webpage.




