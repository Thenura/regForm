export interface IUser {
  firstName: string,
  lastName: string,
  email: string
}

export interface IDictionary<T> {
  [key: string]: T
}