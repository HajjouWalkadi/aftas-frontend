import { IdentityDocumentType } from "./IdentityDocumentType";

export interface Member {
    referenceNumber: number;
    name: string;
    familyName: string;
    accessionDate: Date;
    nationality: string;
    IdentityDocumentType: IdentityDocumentType;
    identityNumber: string;
  }
  
