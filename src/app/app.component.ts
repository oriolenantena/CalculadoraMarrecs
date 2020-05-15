import { Component } from '@angular/core';

// Quotes
const B12 = 215.75; // Escolarizacio basica
const C12 = 10.00; // Escolarizacio minima

// Servei Menjador
const B15 = 160.10; // Menjador complet basica
const C15 = 5.00; // Menjador complet minima

const B16 = 80.05; // Menjador lactants basica
const C16 = 5.00; // Menjador lactants minima

const B17 = 0.65; // berenar basica
const C17 = 0; // berenar minima

// Servei d'acollida
const B20 = 28.70; // setembre a juny basica
const C20 = 0; // setembre a juny minima


const B21 = 14.35; // juliol basica
const C21 = 0; // juliol minima


// Servei Menjador fix parcial
const B28 = 153.30; // 3 vegades setmana Menjador complet basica
const C28 = 3.00; // 3 vegades setmana Menjador complet minima

const B29 = 75.65; // 3 vegades setmana Menjador lactants basica
const C29 = 3.00; // 3 vegades setmana Menjador lactants minima

const B31 = 102.20; // 2 vegades setmana Menjador complet basica
const C31 = 2.00; // 2 vegades setmana Menjador complet minima

const B32 = 51.10; // 2 vegades setmana Menjador lactants basica
const C32 = 2.00; // 2 vegades setmana Menjador lactants minima

const B34 = 51.10; // 1 vegades setmana Menjador complet basica
const C34 = 1.00; // 1 vegades setmana Menjador complet minima

const B35 = 25.55; // 1 vegades setmana Menjador lactants basica
const C35 = 1.00; // 1 vegades setmana Menjador lactants minima

// Serveis esporadics
const B38 = 13.00; // Menjador complet basica
const C38 = 0.00; // Menjador complet minima

const B39 = 6.50; // Menjador lactants basica
const C39 = 0.00; // Menjador lactants minima

const B40 = 0.65; // Berenar basica
const C40 = 0.00; // Berenar minima

const B41 = 3.10; // esporadic 30 mins basica
const C41 = 0.00; // esporadic 30 mins minima
// Fi Quotes

// Taula rendes i coeficients
const F4 = 2; // membres unitat familiar
const H4 = Math.sqrt(F4)/Math.sqrt(2); // coeficient d'equivalencia a nucli familiar membres 2 x G4
const G4 = 7967.73; // Renda unitat familiar, membres: 2

const F5 = 3; // membres unitat familiar
const H5 = Math.sqrt(F5)/Math.sqrt(2); // coeficient d'equivalencia a nucli familiar membres 3 x G5
const G5 = G4*H5; // Renda unitat familiar, membres: 3

const F6 = 4; // membres unitat familiar
const H6 = Math.sqrt(F6)/Math.sqrt(2); // coeficient d'equivalencia a nucli familiar membres 4 x G6
const G6 = G4*H6; // Renda unitat familiar, membres: 4

const F7 = 5; // membres unitat familiar
const H7 = Math.sqrt(F7)/Math.sqrt(2); // coeficient d'equivalencia a nucli familiar membres 5 x G7
const G7 = G4*H7; // Renda unitat familiar, membres: 5

const F8 = 6; // membres unitat familiar
const H8 = Math.sqrt(F8)/Math.sqrt(2); // coeficient d'equivalencia a nucli familiar membres 6 x G8
const G8 = G4*H8; // Renda unitat familiar, membres: 6

const F9 = 7; // membres unitat familiar
const H9 = Math.sqrt(F9)/Math.sqrt(2); // coeficient d'equivalencia a nucli familiar membres 7 x G9
const G9 = G4*H9; // Renda unitat familiar, membres: 7

// Fi Taula rendes i coeficients

// Trams Renda consts
const K3 = G4 * 0;  // tram de renda inicial des de (de 0 a 1 IRSC)
const L3 = G4 * 1;  // tram de renda inicial fins (de 0 a 1 IRSC)
const M3 = 0.10; // %

const K4 = G4 * 1 + 0.01;  // tram de renda inicial des de (de 1 a 2 IRSC)
const L4 = G4 * 2;  // tram de renda inicial fins (de 1 a 2 IRSC)
const M4 = 0.30; // %

const K5 = G4 * 2 + 0.01;  // tram de renda inicial des de (de 2 a 3 IRSC)
const L5 = G4 * 3;  // tram de renda inicial fins (de 2 a 3 IRSC)
const M5 = 0.60; // %

const K6 = G4 * 3 + 0.01;  // tram de renda inicial des de (de 3 a 4 IRSC)
const L6 = G4 * 4;  // tram de renda inicial fins (de 3 a 4 IRSC)
const M6 = 0.90; // %

const K7 = G4 * 4 + 0.01;  // tram de renda inicial des de (de 4 a 5 IRSC)
const L7 = G4 * 5;  // tram de renda inicial fins (de 4 a 5 IRSC)
const M7 = 1.00; // %

const K8 = G4 * 5 + 0.01;  // tram de renda inicial des de (mes de 5 IRSC)
const M8 = 1.00; // %
// Fi Trams Renda consts


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  germans = false;
  discapacitat = false;
  regim_acolliment = false;

  C2 = 17000; // Renda mensual unitat familiar
  C3 = 3; // Membres de la unitat familiar

  B12 = B12;
  B15 = B15;
  B16 = B16;
  B17 = B17;

  B20 = B20;
  B21 = B21;

  B28 = B28;
  B29 = B29;

  B31 = B31;
  B32 = B32;

  B34 = B34;
  B35 = B35;

  B38 = B38;
  B39 = B39;
  B40 = B40;
  B41 = B41;
  
  // D12 = this.personal_quota(B12, C12); // quota escolarizacio personal
  D12() {return this.personal_quota(B12, C12);} // quota escolarizacio personal
  D15() {return this.personal_quota(B15, C15);} // quota menjador complert personal
  D16() {return this.personal_quota(B16, C16);} // quota menjador lactants personal
  D17() {return this.personal_quota(B17, C17);} // quota berenar personal

  D20() {return this.personal_quota(B20, C20);} // servei acollida set a juny personal
  D21() {return this.personal_quota(B21, C21);} // servei acollida juliol personal

  D28() {return this.personal_quota(B28, C28);} // menjador 3 cops setmana complert
  D29() {return this.personal_quota(B29, C29);} // menjador 3 cops setmana lactants
  
  D31() {return this.personal_quota(B31, C31);} // menjador 2 cops setmana complert
  D32() {return this.personal_quota(B32, C32);} // menjador 2 cops setmana lactants

  D34() {return this.personal_quota(B34, C34);} // menjador 1 cops setmana complert
  D35() {return this.personal_quota(B35, C35);} // menjador 1 cops setmana lactants

  D38() {return this.personal_quota(B38, C38);} // esporadic menjador complert
  D39() {return this.personal_quota(B39, C39);} // esporadic menjador lactants
  // D40() {return this.personal_quota(B40, B40);} // esporadic berenar
  D40() {return "0.65";} // hardcoded en sheet
  D41() {return this.personal_quota(B41, B41);} // esporadic 30 mins

  C5(): number {return this.C2/(Math.sqrt(this.C3)/Math.sqrt(2));} // Renda mensual equivalent

  personal_quota(basic: number, minim: number): string {
    let result = this.personal_quota_raw(basic, minim);

    let extra_discount = 0;
    if (this.germans) extra_discount = extra_discount + 0.2;
    if (this.discapacitat) extra_discount = extra_discount + 0.1;
    if (this.regim_acolliment) extra_discount = extra_discount + 0.1;

    if (extra_discount > 0.2) extra_discount = 0.2; // max discount

    const final_result = result-(result*extra_discount);

    if (final_result == -1) return " ";
    return final_result.toFixed(2);
  }

  personal_quota_raw(basic: number, minim: number): number {
    if (this.C5()>K8) return basic;
    if (K7<this.C5() && this.C5() < L7) return ((basic*M6)+((basic*M7)-(basic*M6))*(this.C5()-K7)/(L7-K7));
    if (K6<this.C5() && this.C5() < L6) return ((basic*M5)+((basic*M6)-(basic*M5))*(this.C5()-K6)/(L6-K6));
    if (K5<this.C5() && this.C5() < L5) return ((basic*M4)+((basic*M5)-(basic*M4))*(this.C5()-K5)/(L5-K5));
    if (K4<this.C5() && this.C5() < L4) return ((basic*M3)+((basic*M4)-(basic*M3))*(this.C5()-K4)/(L4-K4));
    if (this.C5() < L3) return minim;
    return -1;
  }
}
