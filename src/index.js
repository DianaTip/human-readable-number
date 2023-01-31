module.exports = function toReadable (number) {
    var num = 0
    var num2 = 0
    var keyNumber1 = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'};
    
    var keyNumber4 = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    var keyNumber2 = {
        
        20: 'twenty',
        30 : 'thirty',
        40 : 'forty',
        50 : 'fifty',
        60 : 'sixty',
        70 : 'seventy',
        80 : 'eighty',
        90 : 'ninety'
    };
    var keyNumber3 = {
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred'
    }
    var num1= number%10;
     if (number < 10)
        return keyNumber1[number]
    else 
        if (9 < number && number< 20)
        return keyNumber4[number]
          else
        if ((19 < number && number< 100) && (number%10 == 0))
        return keyNumber2[number]
        else
           if (String(number).length == 2)
           {num = Math.trunc(number/10)*10;
           return (keyNumber2[num]+ ' '+ keyNumber1[num1]);}
          else
           if ((99 < number && number< 901) && (number%100 == 0))
            return keyNumber3[number]
                       else 
                           if (String(number).at(1) == 0)
                            {num = Math.trunc(number/100)*100;       
                            return (keyNumber3[num]+ ' '+ keyNumber1[num1]);}
    else 
      {num2 = (number%100-number%10);
       num = Math.trunc(number/100)*100;}
      if (String(number).at(1) == 1)
      return (keyNumber3[num]+ ' '+keyNumber4[number%100])
       else   
         if (String(number).at(-1) == 0)
         return (keyNumber3[num]+ ' '+keyNumber2[num2])
         else    
         return (keyNumber3[num]+ ' '+keyNumber2[num2]+' '+keyNumber1[num1])       
}
