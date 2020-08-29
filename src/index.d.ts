import { Decorator } from 'final-form'

export type FieldName = string

export type FieldPattern = FieldName | RegExp | (FieldName | RegExp)[]

export type UpdatesByName<FormValues> = {
  [FieldName: string]: (value: any, allValues?: FormValues, prevValues?: FormValues) => any
}

export type UpdatesForAll<FormValues> = (
  value: any,
  field: string,
  allValues?: FormValues,
  prevValues?: FormValues,
) => { [FieldName: string]: any }

export type Updates<FormValues> = UpdatesByName<FormValues> | UpdatesForAll<FormValues>

export type Calculation<FormValues> = {
  field: FieldPattern,
  updates: Updates<FormValues>,
  isEqual?: (a: any, b: any) => boolean,
}

export default function createDecorator<FormValues = object>(
  ...calculations: Calculation<FormValues>[]
): Decorator<FormValues>
