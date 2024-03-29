import { JSONSchema7Definition } from 'json-schema';

export interface Property {
  name: String;
  type?: String;
  isRequired?: boolean;
  isList?: boolean;
  isRelation?: boolean;
  enumValues?: Array<String>;
  default?: String | boolean | Array<String> | null | number | Array<number>;
  prismaOptions?: String;
  prismaType?: String;
}
export interface Model {
  name: String;
  properties: Array<Property>;
}

export type AnyOfType = { $ref: string; type: string };
export type DefinitionsPropertyType = {
  [key: string]: {
    type: string;
    $ref: string;
    default: any;
    prismaOptions?: String;
    prismaType?: string;
    anyOf: Array<AnyOfType>;
    enum: Array<string>;
    format: string;
    items: {
      $ref: string;
      type?: string;
      prismaType?: string;
    };
  };
};

export type DefinitionsType = {
  [key: string]: {
    type: string;
    properties: DefinitionsPropertyType;
  };
};

export type PropertiesType = {
  [key: string]: {
    $ref: string;
  };
};

export type JSONSchema7DefinitionCustom = JSONSchema7Definition & {
  definitions: DefinitionsType;
  properties: PropertiesType;
};
