
export class Mission {
    id: number;
    nom: string;
    statut: string;
    fkcommercial: string;
    factures: Facture;
}
export class Facture {
    id: string;
    raison: string;
    dateNdf: any;
    comCommercial: string;
    remboursement: number;
    comComptable: string;
    montant: number;
    fkMission: number;
    photo?: string;
}
