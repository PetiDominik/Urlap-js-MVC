
export const URLAP_LEIRO = {
    nev : {
        type : "text",
        value : "",
        placeholder : "Minta János",
        pattern : "[A-Z][a-z]{2,15}",
        extra : {
            label : "Név",
            validation : "Név nagy betűvel kezdődik és legalább 3 beetű!"
        }
    },
    szulEv : {
        type : "date",
        min : "1900-01-01",
        max : "2023-10-17",
        extra : {
            label : "Születési év",
            validation : "1900.01.01 - 2023.10.17 közötti érték"
        }
    },
}