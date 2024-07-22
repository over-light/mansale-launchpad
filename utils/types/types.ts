export interface IRootContext {
  theme?: string;
}

export interface ITxContext {
  createToken?: () => void;
}

export type MenuItem = {
  label: string;
  icon: any;
  link?: string;
  resource: any;
  disabled?: boolean;
  subMenu?: MenuItem[];
  onClick?: any;
};

export type CreateTokenType = {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
  logoURL: string;
  website: string;
  telegram: string;
  discord: string;
  twitter: string;
  description: string;
  mintAuthority: string;
  freezeAuthority: string;
  updateAuthority: string;
};
<<<<<<< HEAD

export type TokenType = {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
  logoURI: string;
};
=======
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
