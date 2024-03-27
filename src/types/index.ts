export type User = {
  U_USER_NAME: string,
  U_FIRST_NAME: string,
  U_LAST_NAME: string,
  U_MAIL: string,
  U_PHONE: number
}

export type Offer = {
  O_TITLE: string,
  O_DESCRIPTION: string,
  O_WORK_STEPS: [],
  O_START: Date,
  O_END: Date,
  O_CREATED: Date,
  O_MATERIALS: [],
  O_PRICING: number,
  O_STATE: string
}

export type Customer = {
  C_FIRST_NAME: string,
  C_LAST_NAME: string,
  C_ADDRESS: CustomerAddress,
  C_PHONE: string,
  C_MAIL: string
}

export type CustomerAddress = {
  C_STREET: string,
  C_ZIPCODE: number,
  C_CITY: string
}

export type Material = {
  M_NAME: string,
  M_PRODUCER: string,
  M_UNIT: string,
  M_PRICE: number
}

export type WorkStep = {
  WS_NAME: string,
  WS_DESCRIPTION: string,
  WS_AMOUNT: number
}
