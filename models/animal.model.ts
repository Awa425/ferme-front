import { Capteur } from "./capteur.model";
import { maladie } from "./maladie.model";

export interface Animal {
    age: number;
    capteurs: Capteur[]
    couleur: string
    etat: Boolean
    // ferme: {}
    maladie: maladie[]
    nomAnimal: string
    // troupeau: {}
}