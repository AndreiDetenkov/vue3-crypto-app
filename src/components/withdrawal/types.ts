export interface WithdrawFormData {
  address: string
  network: string
  amount: string
  comment: string
}

export type FormRules = { [key: string]: any }
