import { IdentityDocumentType } from "./IdentityDocumentType";

export interface Member {
    id?: number;
    referenceNumber: number;
    name: string;
    familyName: string;
    accessionDate: Date;
    nationality: string;
    identityDocumentType: IdentityDocumentType;
    identityNumber: string;
  }
  
