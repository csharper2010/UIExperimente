export enum Abgabebestimmung {
    Freiwahl,
    Sichtwahl,
    Rezeptpflicht,
}

export interface KundeVerkauf {
    oid: string;
    datum: Date;
    artikelPzn: number;
    artikelKurzbezeichnung: string;
    menge: number;
    einzelpreis: number;
    abgabebestimmung: Abgabebestimmung;
}

export interface Kunde {
    oid: string;
    name: string;
    vorname: string;
    verkaeufe: KundeVerkauf[];
}

export class KundeService {
    getKunde(): Kunde {
        return {
            oid: '1c8a371e-cc5e-458c-8588-39f2c536a70e',
            name: 'Mustermann',
            vorname: 'Klaus Dieter',
            verkaeufe: [
                {
                    oid: 'bffa1ade-1c57-4526-b1ef-b27d2fcdde68',
                    datum: new Date(2016, 12, 6, 15, 36),
                    artikelPzn: 313,
                    artikelKurzbezeichnung: 'Bambusa D1',
                    menge: 2,
                    einzelpreis: 8.35,
                    abgabebestimmung: Abgabebestimmung.Freiwahl,
                },
                {
                    oid: 'd0898a8e-90a1-4394-93e1-1b483d85c49e',
                    datum: new Date(2016, 12, 31, 9, 15),
                    artikelPzn: 5541338,
                    artikelKurzbezeichnung: 'MARCUMAR Tabletten',
                    menge: 1,
                    einzelpreis: 23.88,
                    abgabebestimmung: Abgabebestimmung.Rezeptpflicht,
                },
            ],
        };
    };
}