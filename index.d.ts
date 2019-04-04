declare module "react-native-contacts" {
  export function getAll(callback: (error: any, contacts: Contact[]) => void): void;
  export function getAllWithoutPhotos(callback: (error: any, contacts: Contact[]) => void): void;
  // iOS only
  export function getAllWithFields(fields: FieldType[], callback: (error: any, contacts: Contact[]) => void): void;
  export function getPhotoForId(contactId: string, callback: (error: any, photoUri: string) => void): void;
  export function addContact(contact: Contact, callback: (error?: any) => void): void;
  export function openContactForm(contact: Contact, callback: (error?: any) => void): void;
  export function updateContact(contact: Contact, callback: (error?: any) => void): void;
  export function deleteContact(contact: Contact, callback: (error?: any) => void): void;
  export function getContactsMatchingString(str: string, callback: (error: any, contacts: Contact[]) => void): void;
  export function checkPermission(callback: (error: any, result: "authorized" | "denied" | "undefined") => void): void;
  export function requestPermission(callback: (error: any, result: "authorized" | "denied" | "undefined") => void): void;
  export function subscribeToUpdates(callback: (error: any, result: "authorized" | "denied" | "undefined") => void): void;
  export function unsubscribeFromUpdates(): void;

  export enum Fields {
    ID = "recordID",
    EmailAddresses =  "emailAddresses",
    PhoneNumbers =  "phoneNumbers",
    FamilyName = "familyName",
    GivenName =  "givenName",
    MiddleName =  "middleName",
    PostalAddresses = "postalAddresses",
    Company =  "company",
    ImageAvailable = "imageAvailable",
    Note =  "note",
    UrlAddresses =  "urlAddresses",
    Birthday =  "birthday",
    JobTitle = "jobTitle"
  }

  export type FieldType =
  | typeof Fields.ID
  | typeof Fields.EmailAddresses
  | typeof Fields.PhoneNumbers
  | typeof Fields.FamilyName
  | typeof Fields.GivenName
  | typeof Fields.MiddleName
  | typeof Fields.PostalAddresses
  | typeof Fields.Company
  | typeof Fields.ImageAvailable
  | typeof Fields.Birthday
  | typeof Fields.Note
  | typeof Fields.UrlAddresses
  | typeof Fields.JobTitle;

  export interface EmailAddress {
      label: string;
      email: string;
  }

  export interface PhoneNumber {
      label: string;
      number: string;
  }

  export interface PostalAddress {
      label: string;
      formattedAddress: string;
      street: string;
      pobox: string;
      neighborhood: string;
      city: string;
      region: string;
      state: string;
      postCode: string;
      country: string;
  }

  export interface Birthday {
      day: number;
      month: number;
      year: number;
  }

  export interface Contact {
      recordID: string;
      company?: string;
      emailAddresses?: EmailAddress[];
      familyName?: string;
      givenName?: string;
      middleName?: string;
      jobTitle?: string;
      phoneNumbers?: PhoneNumber[];
      hasThumbnail?: boolean;
      thumbnailPath?: string;
      postalAddresses?: PostalAddress[];
      prefix?: string;
      suffix?: string;
      department?: string;
      birthday?: Birthday;
  }
}
