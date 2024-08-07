function convertToRoman(num) {

const romanNumerals = [
    { roman: 'M', value: 1000 },
    { roman: 'CM', value: 900 },
    { roman: 'D', value: 500 },
    { roman: 'CD', value: 400 },
    { roman: 'C', value: 100 },
    { roman: 'XC', value: 90 },
    { roman: 'L', value: 50 },
    { roman: 'XL', value: 40 },
    { roman: 'X', value: 10 },
    { roman: 'IX', value: 9 },
    { roman: 'V', value: 5 },
    { roman: 'IV', value: 4 },
    { roman: 'I', value: 1 }
  ];

  let res = "";

   for (const { roman, value } of romanNumerals) {
     while(num>=value){
       res+=roman;
       num-= value;
     }
   }

 return res;
}

convertToRoman(36);
