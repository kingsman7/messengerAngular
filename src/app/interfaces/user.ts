/* para declarar un parametro como opcional se le coloca un ? */
export interface User {
  nick: string;
  subnick?: string;
  age?: number;
  email: string;
  friend: boolean;
  uid: any;
  status: string;
}
