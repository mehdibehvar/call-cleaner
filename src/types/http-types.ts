export interface BaseCustomerAddress {
  /**
   * The address's ID.
   */
  id: string;
  /**
   * The address's name.
   */
  address_name: string | null;
  /**
   * Whether the address is used by default for shipping.
   */
  is_default_shipping: boolean;
  /**
   * Whether the address is used by default for billing.
   */
  is_default_billing: boolean;
  /**
   * The ID of the customer this address belongs to.
   */
  customer_id: string;
  /**
   * The address's company.
   */
  company: string | null;
  /**
   * The address's first name.
   */
  first_name: string | null;
  /**
   * The address's last name.
   */
  last_name: string | null;
  /**
   * The address's first line.
   */
  address_1: string | null;
  /**
   * The address's second line.
   */
  address_2: string | null;
  /**
   * The address's city.
   */
  city: string | null;
  /**
   * The address's country code.
   *
   * @example
   * us
   */
  country_code: string | null;
  /**
   * The address's lower-case [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) province.
   */
  province: string | null;
  /**
   * The address's postal code.
   */
  postal_code: string | null;
  /**
   * The address's phone number.
   */
  phone: string | null;
  /**
   * Key-value pairs of custom data.
   */
  metadata: Record<string, unknown> | null;
  /**
   * The date the address was created.
   */
  created_at: string;
  /**
   * The date the address was updated.
   */
  updated_at: string;
}
export interface BaseCustomer {
  /**
   * The customer's ID.
   */
  id: string;
  /**
   * The customer's email.
   */
  email: string;
  /**
   * The ID of the customer's default billing address.
   */
  default_billing_address_id: string | null;
  /**
   * The ID of the customer's default shipping address.
   */
  default_shipping_address_id: string | null;
  /**
   * The customer's company name.
   */
  company_name: string | null;
  /**
   * The customer's first name.
   */
  first_name: string | null;
  /**
   * The customer's last name.
   */
  last_name: string | null;
  /**
   * The customer's addresses
   */
  addresses: BaseCustomerAddress[];
  /**
   * The customer's phone.
   */
  phone?: string | null;
  /**
   * Key-value pairs of custom data.
   */
  metadata?: Record<string, unknown>;
  /**
   * The ID of the user that created the customer.
   */
  created_by?: string | null;
  /**
   * The date the customer was deleted.
   */
  deleted_at?: Date | string | null;
  /**
   * The date the customer was created.
   */
  created_at?: Date | string;
  /**
   * The date the customer was updated.
   */
  updated_at?: Date | string;
}

export type UserHttp = {
  token: string;
  info: { name: string; phone: string; email: string; roles: string[] };
};

