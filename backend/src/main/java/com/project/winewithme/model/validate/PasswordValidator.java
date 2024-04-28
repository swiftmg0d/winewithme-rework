package com.project.winewithme.model.validate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
public class PasswordValidator {
    private boolean minLength;
    private boolean specialChars;
    private boolean uppercaseChars;
    private boolean numericChars;
    private boolean letters;
    private boolean matched;

    public PasswordValidator() {
        this.minLength=false;
        this.specialChars=false;
        this.uppercaseChars=false;
        this.numericChars=false;
        this.matched=false;
        this.letters=false;
    }
    public boolean isValid(){
        return minLength && specialChars && uppercaseChars && numericChars && matched && letters;
    }
}
