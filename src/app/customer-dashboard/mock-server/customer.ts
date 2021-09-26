export interface Customer {
  address: {
    geolocation?: { lat: string; long: string };
    city: string;
    street: string;
    number: number;
    zipcode: any;
  };
  id?: number;
  email: string;
  username: string;
  password: string;
  name: { firstname: string; lastname: string };
  phone: any;
  __v?: number;
}