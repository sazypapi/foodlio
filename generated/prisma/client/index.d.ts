
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model CarbOption
 * 
 */
export type CarbOption = $Result.DefaultSelection<Prisma.$CarbOptionPayload>
/**
 * Model PackType
 * 
 */
export type PackType = $Result.DefaultSelection<Prisma.$PackTypePayload>
/**
 * Model OrderItemCarb
 * 
 */
export type OrderItemCarb = $Result.DefaultSelection<Prisma.$OrderItemCarbPayload>
/**
 * Model SideOption
 * 
 */
export type SideOption = $Result.DefaultSelection<Prisma.$SideOptionPayload>
/**
 * Model OrderItemSide
 * 
 */
export type OrderItemSide = $Result.DefaultSelection<Prisma.$OrderItemSidePayload>
/**
 * Model ProteinOption
 * 
 */
export type ProteinOption = $Result.DefaultSelection<Prisma.$ProteinOptionPayload>
/**
 * Model Rider
 * 
 */
export type Rider = $Result.DefaultSelection<Prisma.$RiderPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VendorStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  REJECTED: 'REJECTED'
};

export type VendorStatus = (typeof VendorStatus)[keyof typeof VendorStatus]


export const RiderStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type RiderStatus = (typeof RiderStatus)[keyof typeof RiderStatus]


export const OrderStatus: {
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  PAID: 'PAID',
  PREPARING: 'PREPARING',
  READY_FOR_PICKUP: 'READY_FOR_PICKUP',
  PICKED_UP: 'PICKED_UP',
  OUT_FOR_DELIVERY: 'OUT_FOR_DELIVERY',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const VehicleType: {
  BICYCLE: 'BICYCLE',
  MOTORCYCLE: 'MOTORCYCLE',
  CAR: 'CAR'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]

}

export type VendorStatus = $Enums.VendorStatus

export const VendorStatus: typeof $Enums.VendorStatus

export type RiderStatus = $Enums.RiderStatus

export const RiderStatus: typeof $Enums.RiderStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Vendors
 * const vendors = await prisma.vendor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Vendors
   * const vendors = await prisma.vendor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carbOption`: Exposes CRUD operations for the **CarbOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarbOptions
    * const carbOptions = await prisma.carbOption.findMany()
    * ```
    */
  get carbOption(): Prisma.CarbOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packType`: Exposes CRUD operations for the **PackType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackTypes
    * const packTypes = await prisma.packType.findMany()
    * ```
    */
  get packType(): Prisma.PackTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItemCarb`: Exposes CRUD operations for the **OrderItemCarb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItemCarbs
    * const orderItemCarbs = await prisma.orderItemCarb.findMany()
    * ```
    */
  get orderItemCarb(): Prisma.OrderItemCarbDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sideOption`: Exposes CRUD operations for the **SideOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SideOptions
    * const sideOptions = await prisma.sideOption.findMany()
    * ```
    */
  get sideOption(): Prisma.SideOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItemSide`: Exposes CRUD operations for the **OrderItemSide** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItemSides
    * const orderItemSides = await prisma.orderItemSide.findMany()
    * ```
    */
  get orderItemSide(): Prisma.OrderItemSideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proteinOption`: Exposes CRUD operations for the **ProteinOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProteinOptions
    * const proteinOptions = await prisma.proteinOption.findMany()
    * ```
    */
  get proteinOption(): Prisma.ProteinOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rider`: Exposes CRUD operations for the **Rider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Riders
    * const riders = await prisma.rider.findMany()
    * ```
    */
  get rider(): Prisma.RiderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Vendor: 'Vendor',
    Category: 'Category',
    MenuItem: 'MenuItem',
    CarbOption: 'CarbOption',
    PackType: 'PackType',
    OrderItemCarb: 'OrderItemCarb',
    SideOption: 'SideOption',
    OrderItemSide: 'OrderItemSide',
    ProteinOption: 'ProteinOption',
    Rider: 'Rider',
    Order: 'Order',
    OrderItem: 'OrderItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "vendor" | "category" | "menuItem" | "carbOption" | "packType" | "orderItemCarb" | "sideOption" | "orderItemSide" | "proteinOption" | "rider" | "order" | "orderItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VendorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      CarbOption: {
        payload: Prisma.$CarbOptionPayload<ExtArgs>
        fields: Prisma.CarbOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarbOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarbOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbOptionPayload>
          }
          findFirst: {
            args: Prisma.CarbOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarbOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbOptionPayload>
          }
          findMany: {
            args: Prisma.CarbOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbOptionPayload>[]
          }
          create: {
            args: Prisma.CarbOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbOptionPayload>
          }
          createMany: {
            args: Prisma.CarbOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarbOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbOptionPayload>[]
          }
          delete: {
            args: Prisma.CarbOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbOptionPayload>
          }
          update: {
            args: Prisma.CarbOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbOptionPayload>
          }
          deleteMany: {
            args: Prisma.CarbOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarbOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarbOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbOptionPayload>[]
          }
          upsert: {
            args: Prisma.CarbOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarbOptionPayload>
          }
          aggregate: {
            args: Prisma.CarbOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarbOption>
          }
          groupBy: {
            args: Prisma.CarbOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarbOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarbOptionCountArgs<ExtArgs>
            result: $Utils.Optional<CarbOptionCountAggregateOutputType> | number
          }
        }
      }
      PackType: {
        payload: Prisma.$PackTypePayload<ExtArgs>
        fields: Prisma.PackTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackTypePayload>
          }
          findFirst: {
            args: Prisma.PackTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackTypePayload>
          }
          findMany: {
            args: Prisma.PackTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackTypePayload>[]
          }
          create: {
            args: Prisma.PackTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackTypePayload>
          }
          createMany: {
            args: Prisma.PackTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PackTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackTypePayload>[]
          }
          delete: {
            args: Prisma.PackTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackTypePayload>
          }
          update: {
            args: Prisma.PackTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackTypePayload>
          }
          deleteMany: {
            args: Prisma.PackTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PackTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackTypePayload>[]
          }
          upsert: {
            args: Prisma.PackTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackTypePayload>
          }
          aggregate: {
            args: Prisma.PackTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackType>
          }
          groupBy: {
            args: Prisma.PackTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackTypeCountArgs<ExtArgs>
            result: $Utils.Optional<PackTypeCountAggregateOutputType> | number
          }
        }
      }
      OrderItemCarb: {
        payload: Prisma.$OrderItemCarbPayload<ExtArgs>
        fields: Prisma.OrderItemCarbFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemCarbFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemCarbPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemCarbFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemCarbPayload>
          }
          findFirst: {
            args: Prisma.OrderItemCarbFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemCarbPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemCarbFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemCarbPayload>
          }
          findMany: {
            args: Prisma.OrderItemCarbFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemCarbPayload>[]
          }
          create: {
            args: Prisma.OrderItemCarbCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemCarbPayload>
          }
          createMany: {
            args: Prisma.OrderItemCarbCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCarbCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemCarbPayload>[]
          }
          delete: {
            args: Prisma.OrderItemCarbDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemCarbPayload>
          }
          update: {
            args: Prisma.OrderItemCarbUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemCarbPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemCarbDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemCarbUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemCarbUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemCarbPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemCarbUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemCarbPayload>
          }
          aggregate: {
            args: Prisma.OrderItemCarbAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItemCarb>
          }
          groupBy: {
            args: Prisma.OrderItemCarbGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCarbGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCarbCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCarbCountAggregateOutputType> | number
          }
        }
      }
      SideOption: {
        payload: Prisma.$SideOptionPayload<ExtArgs>
        fields: Prisma.SideOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SideOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SideOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SideOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SideOptionPayload>
          }
          findFirst: {
            args: Prisma.SideOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SideOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SideOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SideOptionPayload>
          }
          findMany: {
            args: Prisma.SideOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SideOptionPayload>[]
          }
          create: {
            args: Prisma.SideOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SideOptionPayload>
          }
          createMany: {
            args: Prisma.SideOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SideOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SideOptionPayload>[]
          }
          delete: {
            args: Prisma.SideOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SideOptionPayload>
          }
          update: {
            args: Prisma.SideOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SideOptionPayload>
          }
          deleteMany: {
            args: Prisma.SideOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SideOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SideOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SideOptionPayload>[]
          }
          upsert: {
            args: Prisma.SideOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SideOptionPayload>
          }
          aggregate: {
            args: Prisma.SideOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSideOption>
          }
          groupBy: {
            args: Prisma.SideOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SideOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SideOptionCountArgs<ExtArgs>
            result: $Utils.Optional<SideOptionCountAggregateOutputType> | number
          }
        }
      }
      OrderItemSide: {
        payload: Prisma.$OrderItemSidePayload<ExtArgs>
        fields: Prisma.OrderItemSideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemSideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemSidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemSideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemSidePayload>
          }
          findFirst: {
            args: Prisma.OrderItemSideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemSidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemSideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemSidePayload>
          }
          findMany: {
            args: Prisma.OrderItemSideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemSidePayload>[]
          }
          create: {
            args: Prisma.OrderItemSideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemSidePayload>
          }
          createMany: {
            args: Prisma.OrderItemSideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemSideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemSidePayload>[]
          }
          delete: {
            args: Prisma.OrderItemSideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemSidePayload>
          }
          update: {
            args: Prisma.OrderItemSideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemSidePayload>
          }
          deleteMany: {
            args: Prisma.OrderItemSideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemSideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemSideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemSidePayload>[]
          }
          upsert: {
            args: Prisma.OrderItemSideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemSidePayload>
          }
          aggregate: {
            args: Prisma.OrderItemSideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItemSide>
          }
          groupBy: {
            args: Prisma.OrderItemSideGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemSideGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemSideCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemSideCountAggregateOutputType> | number
          }
        }
      }
      ProteinOption: {
        payload: Prisma.$ProteinOptionPayload<ExtArgs>
        fields: Prisma.ProteinOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProteinOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProteinOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProteinOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProteinOptionPayload>
          }
          findFirst: {
            args: Prisma.ProteinOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProteinOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProteinOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProteinOptionPayload>
          }
          findMany: {
            args: Prisma.ProteinOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProteinOptionPayload>[]
          }
          create: {
            args: Prisma.ProteinOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProteinOptionPayload>
          }
          createMany: {
            args: Prisma.ProteinOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProteinOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProteinOptionPayload>[]
          }
          delete: {
            args: Prisma.ProteinOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProteinOptionPayload>
          }
          update: {
            args: Prisma.ProteinOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProteinOptionPayload>
          }
          deleteMany: {
            args: Prisma.ProteinOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProteinOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProteinOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProteinOptionPayload>[]
          }
          upsert: {
            args: Prisma.ProteinOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProteinOptionPayload>
          }
          aggregate: {
            args: Prisma.ProteinOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProteinOption>
          }
          groupBy: {
            args: Prisma.ProteinOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProteinOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProteinOptionCountArgs<ExtArgs>
            result: $Utils.Optional<ProteinOptionCountAggregateOutputType> | number
          }
        }
      }
      Rider: {
        payload: Prisma.$RiderPayload<ExtArgs>
        fields: Prisma.RiderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findFirst: {
            args: Prisma.RiderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findMany: {
            args: Prisma.RiderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          create: {
            args: Prisma.RiderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          createMany: {
            args: Prisma.RiderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          delete: {
            args: Prisma.RiderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          update: {
            args: Prisma.RiderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          deleteMany: {
            args: Prisma.RiderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          upsert: {
            args: Prisma.RiderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          aggregate: {
            args: Prisma.RiderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRider>
          }
          groupBy: {
            args: Prisma.RiderGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiderGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiderCountArgs<ExtArgs>
            result: $Utils.Optional<RiderCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    vendor?: VendorOmit
    category?: CategoryOmit
    menuItem?: MenuItemOmit
    carbOption?: CarbOptionOmit
    packType?: PackTypeOmit
    orderItemCarb?: OrderItemCarbOmit
    sideOption?: SideOptionOmit
    orderItemSide?: OrderItemSideOmit
    proteinOption?: ProteinOptionOmit
    rider?: RiderOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    menuItems: number
    categories: number
    orders: number
    packTypes: number
    proteinOptions: number
    sideOptions: number
    carbOptions: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItems?: boolean | VendorCountOutputTypeCountMenuItemsArgs
    categories?: boolean | VendorCountOutputTypeCountCategoriesArgs
    orders?: boolean | VendorCountOutputTypeCountOrdersArgs
    packTypes?: boolean | VendorCountOutputTypeCountPackTypesArgs
    proteinOptions?: boolean | VendorCountOutputTypeCountProteinOptionsArgs
    sideOptions?: boolean | VendorCountOutputTypeCountSideOptionsArgs
    carbOptions?: boolean | VendorCountOutputTypeCountCarbOptionsArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountPackTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackTypeWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountProteinOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProteinOptionWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountSideOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SideOptionWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountCarbOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarbOptionWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    menuItems: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItems?: boolean | CategoryCountOutputTypeCountMenuItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }


  /**
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    orderItems: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | MenuItemCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCountOutputType
     */
    select?: MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type CarbOptionCountOutputType
   */

  export type CarbOptionCountOutputType = {
    orderItemCarbs: number
  }

  export type CarbOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItemCarbs?: boolean | CarbOptionCountOutputTypeCountOrderItemCarbsArgs
  }

  // Custom InputTypes
  /**
   * CarbOptionCountOutputType without action
   */
  export type CarbOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOptionCountOutputType
     */
    select?: CarbOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarbOptionCountOutputType without action
   */
  export type CarbOptionCountOutputTypeCountOrderItemCarbsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemCarbWhereInput
  }


  /**
   * Count Type PackTypeCountOutputType
   */

  export type PackTypeCountOutputType = {
    orders: number
  }

  export type PackTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | PackTypeCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * PackTypeCountOutputType without action
   */
  export type PackTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackTypeCountOutputType
     */
    select?: PackTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackTypeCountOutputType without action
   */
  export type PackTypeCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type SideOptionCountOutputType
   */

  export type SideOptionCountOutputType = {
    orderItemSides: number
  }

  export type SideOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItemSides?: boolean | SideOptionCountOutputTypeCountOrderItemSidesArgs
  }

  // Custom InputTypes
  /**
   * SideOptionCountOutputType without action
   */
  export type SideOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOptionCountOutputType
     */
    select?: SideOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SideOptionCountOutputType without action
   */
  export type SideOptionCountOutputTypeCountOrderItemSidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemSideWhereInput
  }


  /**
   * Count Type ProteinOptionCountOutputType
   */

  export type ProteinOptionCountOutputType = {
    orderItems: number
  }

  export type ProteinOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | ProteinOptionCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * ProteinOptionCountOutputType without action
   */
  export type ProteinOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOptionCountOutputType
     */
    select?: ProteinOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProteinOptionCountOutputType without action
   */
  export type ProteinOptionCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type RiderCountOutputType
   */

  export type RiderCountOutputType = {
    orders: number
  }

  export type RiderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | RiderCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiderCountOutputType
     */
    select?: RiderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderItemCountOutputType
   */

  export type OrderItemCountOutputType = {
    orderItemSides: number
    orderItemCarbs: number
  }

  export type OrderItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItemSides?: boolean | OrderItemCountOutputTypeCountOrderItemSidesArgs
    orderItemCarbs?: boolean | OrderItemCountOutputTypeCountOrderItemCarbsArgs
  }

  // Custom InputTypes
  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCountOutputType
     */
    select?: OrderItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeCountOrderItemSidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemSideWhereInput
  }

  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeCountOrderItemCarbsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemCarbWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    minimumPrice: Decimal | null
  }

  export type VendorSumAggregateOutputType = {
    minimumPrice: Decimal | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    name: string | null
    slug: string | null
    description: string | null
    logo: string | null
    address: string | null
    state: string | null
    localGovernmentArea: string | null
    phoneNumber: string | null
    status: $Enums.VendorStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    backUpPhoneNumber: string | null
    email: string | null
    adminNote: string | null
    closeOpenStatus: boolean | null
    minimumPrice: Decimal | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    name: string | null
    slug: string | null
    description: string | null
    logo: string | null
    address: string | null
    state: string | null
    localGovernmentArea: string | null
    phoneNumber: string | null
    status: $Enums.VendorStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    backUpPhoneNumber: string | null
    email: string | null
    adminNote: string | null
    closeOpenStatus: boolean | null
    minimumPrice: Decimal | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    clerkUserId: number
    name: number
    slug: number
    description: number
    logo: number
    address: number
    state: number
    localGovernmentArea: number
    phoneNumber: number
    cuisineType: number
    status: number
    createdAt: number
    updatedAt: number
    images: number
    backUpPhoneNumber: number
    email: number
    adminNote: number
    closeOpenStatus: number
    minimumPrice: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    minimumPrice?: true
  }

  export type VendorSumAggregateInputType = {
    minimumPrice?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    name?: true
    slug?: true
    description?: true
    logo?: true
    address?: true
    state?: true
    localGovernmentArea?: true
    phoneNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    backUpPhoneNumber?: true
    email?: true
    adminNote?: true
    closeOpenStatus?: true
    minimumPrice?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    name?: true
    slug?: true
    description?: true
    logo?: true
    address?: true
    state?: true
    localGovernmentArea?: true
    phoneNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    backUpPhoneNumber?: true
    email?: true
    adminNote?: true
    closeOpenStatus?: true
    minimumPrice?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    name?: true
    slug?: true
    description?: true
    logo?: true
    address?: true
    state?: true
    localGovernmentArea?: true
    phoneNumber?: true
    cuisineType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    images?: true
    backUpPhoneNumber?: true
    email?: true
    adminNote?: true
    closeOpenStatus?: true
    minimumPrice?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType: string[]
    status: $Enums.VendorStatus
    createdAt: Date
    updatedAt: Date
    images: string[]
    backUpPhoneNumber: string | null
    email: string
    adminNote: string | null
    closeOpenStatus: boolean
    minimumPrice: Decimal | null
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logo?: boolean
    address?: boolean
    state?: boolean
    localGovernmentArea?: boolean
    phoneNumber?: boolean
    cuisineType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean
    backUpPhoneNumber?: boolean
    email?: boolean
    adminNote?: boolean
    closeOpenStatus?: boolean
    minimumPrice?: boolean
    menuItems?: boolean | Vendor$menuItemsArgs<ExtArgs>
    categories?: boolean | Vendor$categoriesArgs<ExtArgs>
    orders?: boolean | Vendor$ordersArgs<ExtArgs>
    packTypes?: boolean | Vendor$packTypesArgs<ExtArgs>
    proteinOptions?: boolean | Vendor$proteinOptionsArgs<ExtArgs>
    sideOptions?: boolean | Vendor$sideOptionsArgs<ExtArgs>
    carbOptions?: boolean | Vendor$carbOptionsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logo?: boolean
    address?: boolean
    state?: boolean
    localGovernmentArea?: boolean
    phoneNumber?: boolean
    cuisineType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean
    backUpPhoneNumber?: boolean
    email?: boolean
    adminNote?: boolean
    closeOpenStatus?: boolean
    minimumPrice?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logo?: boolean
    address?: boolean
    state?: boolean
    localGovernmentArea?: boolean
    phoneNumber?: boolean
    cuisineType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean
    backUpPhoneNumber?: boolean
    email?: boolean
    adminNote?: boolean
    closeOpenStatus?: boolean
    minimumPrice?: boolean
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    logo?: boolean
    address?: boolean
    state?: boolean
    localGovernmentArea?: boolean
    phoneNumber?: boolean
    cuisineType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean
    backUpPhoneNumber?: boolean
    email?: boolean
    adminNote?: boolean
    closeOpenStatus?: boolean
    minimumPrice?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "name" | "slug" | "description" | "logo" | "address" | "state" | "localGovernmentArea" | "phoneNumber" | "cuisineType" | "status" | "createdAt" | "updatedAt" | "images" | "backUpPhoneNumber" | "email" | "adminNote" | "closeOpenStatus" | "minimumPrice", ExtArgs["result"]["vendor"]>
  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItems?: boolean | Vendor$menuItemsArgs<ExtArgs>
    categories?: boolean | Vendor$categoriesArgs<ExtArgs>
    orders?: boolean | Vendor$ordersArgs<ExtArgs>
    packTypes?: boolean | Vendor$packTypesArgs<ExtArgs>
    proteinOptions?: boolean | Vendor$proteinOptionsArgs<ExtArgs>
    sideOptions?: boolean | Vendor$sideOptionsArgs<ExtArgs>
    carbOptions?: boolean | Vendor$carbOptionsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VendorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      menuItems: Prisma.$MenuItemPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      packTypes: Prisma.$PackTypePayload<ExtArgs>[]
      proteinOptions: Prisma.$ProteinOptionPayload<ExtArgs>[]
      sideOptions: Prisma.$SideOptionPayload<ExtArgs>[]
      carbOptions: Prisma.$CarbOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      name: string
      slug: string
      description: string
      logo: string
      address: string
      state: string
      localGovernmentArea: string
      phoneNumber: string
      cuisineType: string[]
      status: $Enums.VendorStatus
      createdAt: Date
      updatedAt: Date
      images: string[]
      backUpPhoneNumber: string | null
      email: string
      adminNote: string | null
      closeOpenStatus: boolean
      minimumPrice: Prisma.Decimal | null
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors and returns the data updated in the database.
     * @param {VendorUpdateManyAndReturnArgs} args - Arguments to update many Vendors.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(args: SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuItems<T extends Vendor$menuItemsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Vendor$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Vendor$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packTypes<T extends Vendor$packTypesArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$packTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proteinOptions<T extends Vendor$proteinOptionsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$proteinOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sideOptions<T extends Vendor$sideOptionsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$sideOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carbOptions<T extends Vendor$carbOptionsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$carbOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'String'>
    readonly clerkUserId: FieldRef<"Vendor", 'String'>
    readonly name: FieldRef<"Vendor", 'String'>
    readonly slug: FieldRef<"Vendor", 'String'>
    readonly description: FieldRef<"Vendor", 'String'>
    readonly logo: FieldRef<"Vendor", 'String'>
    readonly address: FieldRef<"Vendor", 'String'>
    readonly state: FieldRef<"Vendor", 'String'>
    readonly localGovernmentArea: FieldRef<"Vendor", 'String'>
    readonly phoneNumber: FieldRef<"Vendor", 'String'>
    readonly cuisineType: FieldRef<"Vendor", 'String[]'>
    readonly status: FieldRef<"Vendor", 'VendorStatus'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
    readonly updatedAt: FieldRef<"Vendor", 'DateTime'>
    readonly images: FieldRef<"Vendor", 'String[]'>
    readonly backUpPhoneNumber: FieldRef<"Vendor", 'String'>
    readonly email: FieldRef<"Vendor", 'String'>
    readonly adminNote: FieldRef<"Vendor", 'String'>
    readonly closeOpenStatus: FieldRef<"Vendor", 'Boolean'>
    readonly minimumPrice: FieldRef<"Vendor", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor updateManyAndReturn
   */
  export type VendorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor.menuItems
   */
  export type Vendor$menuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Vendor.categories
   */
  export type Vendor$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Vendor.orders
   */
  export type Vendor$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Vendor.packTypes
   */
  export type Vendor$packTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
    where?: PackTypeWhereInput
    orderBy?: PackTypeOrderByWithRelationInput | PackTypeOrderByWithRelationInput[]
    cursor?: PackTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackTypeScalarFieldEnum | PackTypeScalarFieldEnum[]
  }

  /**
   * Vendor.proteinOptions
   */
  export type Vendor$proteinOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
    where?: ProteinOptionWhereInput
    orderBy?: ProteinOptionOrderByWithRelationInput | ProteinOptionOrderByWithRelationInput[]
    cursor?: ProteinOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProteinOptionScalarFieldEnum | ProteinOptionScalarFieldEnum[]
  }

  /**
   * Vendor.sideOptions
   */
  export type Vendor$sideOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionInclude<ExtArgs> | null
    where?: SideOptionWhereInput
    orderBy?: SideOptionOrderByWithRelationInput | SideOptionOrderByWithRelationInput[]
    cursor?: SideOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SideOptionScalarFieldEnum | SideOptionScalarFieldEnum[]
  }

  /**
   * Vendor.carbOptions
   */
  export type Vendor$carbOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionInclude<ExtArgs> | null
    where?: CarbOptionWhereInput
    orderBy?: CarbOptionOrderByWithRelationInput | CarbOptionOrderByWithRelationInput[]
    cursor?: CarbOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarbOptionScalarFieldEnum | CarbOptionScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    vendorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    vendorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    vendorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    vendorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    vendorId: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    menuItems?: boolean | Category$menuItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    vendorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "vendorId" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    menuItems?: boolean | Category$menuItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      menuItems: Prisma.$MenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      vendorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menuItems<T extends Category$menuItemsArgs<ExtArgs> = {}>(args?: Subset<T, Category$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly vendorId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.menuItems
   */
  export type Category$menuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    price: Decimal | null
    discount: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    price: Decimal | null
    discount: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    categoryId: string | null
    name: string | null
    slug: string | null
    description: string | null
    price: Decimal | null
    image: string | null
    isAvailable: boolean | null
    discount: number | null
    addProteinOptions: boolean | null
    addCarbohydrateOptions: boolean | null
    addSides: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    categoryId: string | null
    name: string | null
    slug: string | null
    description: string | null
    price: Decimal | null
    image: string | null
    isAvailable: boolean | null
    discount: number | null
    addProteinOptions: boolean | null
    addCarbohydrateOptions: boolean | null
    addSides: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    vendorId: number
    categoryId: number
    name: number
    slug: number
    description: number
    price: number
    image: number
    isAvailable: number
    discount: number
    addProteinOptions: number
    addCarbohydrateOptions: number
    addSides: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    price?: true
    discount?: true
  }

  export type MenuItemSumAggregateInputType = {
    price?: true
    discount?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    vendorId?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    image?: true
    isAvailable?: true
    discount?: true
    addProteinOptions?: true
    addCarbohydrateOptions?: true
    addSides?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    vendorId?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    image?: true
    isAvailable?: true
    discount?: true
    addProteinOptions?: true
    addCarbohydrateOptions?: true
    addSides?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    vendorId?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    image?: true
    isAvailable?: true
    discount?: true
    addProteinOptions?: true
    addCarbohydrateOptions?: true
    addSides?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: string
    vendorId: string
    categoryId: string
    name: string
    slug: string
    description: string
    price: Decimal
    image: string
    isAvailable: boolean
    discount: number | null
    addProteinOptions: boolean
    addCarbohydrateOptions: boolean
    addSides: boolean
    createdAt: Date
    updatedAt: Date
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    isAvailable?: boolean
    discount?: boolean
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    isAvailable?: boolean
    discount?: boolean
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    isAvailable?: boolean
    discount?: boolean
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    vendorId?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    isAvailable?: boolean
    discount?: boolean
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "categoryId" | "name" | "slug" | "description" | "price" | "image" | "isAvailable" | "discount" | "addProteinOptions" | "addCarbohydrateOptions" | "addSides" | "createdAt" | "updatedAt", ExtArgs["result"]["menuItem"]>
  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      categoryId: string
      name: string
      slug: string
      description: string
      price: Prisma.Decimal
      image: string
      isAvailable: boolean
      discount: number | null
      addProteinOptions: boolean
      addCarbohydrateOptions: boolean
      addSides: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {MenuItemUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends MenuItem$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuItem model
   */
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'String'>
    readonly vendorId: FieldRef<"MenuItem", 'String'>
    readonly categoryId: FieldRef<"MenuItem", 'String'>
    readonly name: FieldRef<"MenuItem", 'String'>
    readonly slug: FieldRef<"MenuItem", 'String'>
    readonly description: FieldRef<"MenuItem", 'String'>
    readonly price: FieldRef<"MenuItem", 'Decimal'>
    readonly image: FieldRef<"MenuItem", 'String'>
    readonly isAvailable: FieldRef<"MenuItem", 'Boolean'>
    readonly discount: FieldRef<"MenuItem", 'Float'>
    readonly addProteinOptions: FieldRef<"MenuItem", 'Boolean'>
    readonly addCarbohydrateOptions: FieldRef<"MenuItem", 'Boolean'>
    readonly addSides: FieldRef<"MenuItem", 'Boolean'>
    readonly createdAt: FieldRef<"MenuItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem updateManyAndReturn
   */
  export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItem.orderItems
   */
  export type MenuItem$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model CarbOption
   */

  export type AggregateCarbOption = {
    _count: CarbOptionCountAggregateOutputType | null
    _avg: CarbOptionAvgAggregateOutputType | null
    _sum: CarbOptionSumAggregateOutputType | null
    _min: CarbOptionMinAggregateOutputType | null
    _max: CarbOptionMaxAggregateOutputType | null
  }

  export type CarbOptionAvgAggregateOutputType = {
    extraPrice: number | null
  }

  export type CarbOptionSumAggregateOutputType = {
    extraPrice: number | null
  }

  export type CarbOptionMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    extraPrice: number | null
    isAvailable: boolean | null
    vendorId: string | null
  }

  export type CarbOptionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    extraPrice: number | null
    isAvailable: boolean | null
    vendorId: string | null
  }

  export type CarbOptionCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    extraPrice: number
    isAvailable: number
    vendorId: number
    _all: number
  }


  export type CarbOptionAvgAggregateInputType = {
    extraPrice?: true
  }

  export type CarbOptionSumAggregateInputType = {
    extraPrice?: true
  }

  export type CarbOptionMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
  }

  export type CarbOptionMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
  }

  export type CarbOptionCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
    _all?: true
  }

  export type CarbOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarbOption to aggregate.
     */
    where?: CarbOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarbOptions to fetch.
     */
    orderBy?: CarbOptionOrderByWithRelationInput | CarbOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarbOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarbOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarbOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarbOptions
    **/
    _count?: true | CarbOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarbOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarbOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarbOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarbOptionMaxAggregateInputType
  }

  export type GetCarbOptionAggregateType<T extends CarbOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateCarbOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarbOption[P]>
      : GetScalarType<T[P], AggregateCarbOption[P]>
  }




  export type CarbOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarbOptionWhereInput
    orderBy?: CarbOptionOrderByWithAggregationInput | CarbOptionOrderByWithAggregationInput[]
    by: CarbOptionScalarFieldEnum[] | CarbOptionScalarFieldEnum
    having?: CarbOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarbOptionCountAggregateInputType | true
    _avg?: CarbOptionAvgAggregateInputType
    _sum?: CarbOptionSumAggregateInputType
    _min?: CarbOptionMinAggregateInputType
    _max?: CarbOptionMaxAggregateInputType
  }

  export type CarbOptionGroupByOutputType = {
    id: string
    name: string
    slug: string
    extraPrice: number
    isAvailable: boolean
    vendorId: string
    _count: CarbOptionCountAggregateOutputType | null
    _avg: CarbOptionAvgAggregateOutputType | null
    _sum: CarbOptionSumAggregateOutputType | null
    _min: CarbOptionMinAggregateOutputType | null
    _max: CarbOptionMaxAggregateOutputType | null
  }

  type GetCarbOptionGroupByPayload<T extends CarbOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarbOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarbOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarbOptionGroupByOutputType[P]>
            : GetScalarType<T[P], CarbOptionGroupByOutputType[P]>
        }
      >
    >


  export type CarbOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    orderItemCarbs?: boolean | CarbOption$orderItemCarbsArgs<ExtArgs>
    _count?: boolean | CarbOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carbOption"]>

  export type CarbOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carbOption"]>

  export type CarbOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carbOption"]>

  export type CarbOptionSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
  }

  export type CarbOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "extraPrice" | "isAvailable" | "vendorId", ExtArgs["result"]["carbOption"]>
  export type CarbOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    orderItemCarbs?: boolean | CarbOption$orderItemCarbsArgs<ExtArgs>
    _count?: boolean | CarbOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarbOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type CarbOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $CarbOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarbOption"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      orderItemCarbs: Prisma.$OrderItemCarbPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      extraPrice: number
      isAvailable: boolean
      vendorId: string
    }, ExtArgs["result"]["carbOption"]>
    composites: {}
  }

  type CarbOptionGetPayload<S extends boolean | null | undefined | CarbOptionDefaultArgs> = $Result.GetResult<Prisma.$CarbOptionPayload, S>

  type CarbOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarbOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarbOptionCountAggregateInputType | true
    }

  export interface CarbOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarbOption'], meta: { name: 'CarbOption' } }
    /**
     * Find zero or one CarbOption that matches the filter.
     * @param {CarbOptionFindUniqueArgs} args - Arguments to find a CarbOption
     * @example
     * // Get one CarbOption
     * const carbOption = await prisma.carbOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarbOptionFindUniqueArgs>(args: SelectSubset<T, CarbOptionFindUniqueArgs<ExtArgs>>): Prisma__CarbOptionClient<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarbOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarbOptionFindUniqueOrThrowArgs} args - Arguments to find a CarbOption
     * @example
     * // Get one CarbOption
     * const carbOption = await prisma.carbOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarbOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, CarbOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarbOptionClient<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarbOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbOptionFindFirstArgs} args - Arguments to find a CarbOption
     * @example
     * // Get one CarbOption
     * const carbOption = await prisma.carbOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarbOptionFindFirstArgs>(args?: SelectSubset<T, CarbOptionFindFirstArgs<ExtArgs>>): Prisma__CarbOptionClient<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarbOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbOptionFindFirstOrThrowArgs} args - Arguments to find a CarbOption
     * @example
     * // Get one CarbOption
     * const carbOption = await prisma.carbOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarbOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, CarbOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarbOptionClient<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarbOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarbOptions
     * const carbOptions = await prisma.carbOption.findMany()
     * 
     * // Get first 10 CarbOptions
     * const carbOptions = await prisma.carbOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carbOptionWithIdOnly = await prisma.carbOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarbOptionFindManyArgs>(args?: SelectSubset<T, CarbOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarbOption.
     * @param {CarbOptionCreateArgs} args - Arguments to create a CarbOption.
     * @example
     * // Create one CarbOption
     * const CarbOption = await prisma.carbOption.create({
     *   data: {
     *     // ... data to create a CarbOption
     *   }
     * })
     * 
     */
    create<T extends CarbOptionCreateArgs>(args: SelectSubset<T, CarbOptionCreateArgs<ExtArgs>>): Prisma__CarbOptionClient<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarbOptions.
     * @param {CarbOptionCreateManyArgs} args - Arguments to create many CarbOptions.
     * @example
     * // Create many CarbOptions
     * const carbOption = await prisma.carbOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarbOptionCreateManyArgs>(args?: SelectSubset<T, CarbOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarbOptions and returns the data saved in the database.
     * @param {CarbOptionCreateManyAndReturnArgs} args - Arguments to create many CarbOptions.
     * @example
     * // Create many CarbOptions
     * const carbOption = await prisma.carbOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarbOptions and only return the `id`
     * const carbOptionWithIdOnly = await prisma.carbOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarbOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, CarbOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarbOption.
     * @param {CarbOptionDeleteArgs} args - Arguments to delete one CarbOption.
     * @example
     * // Delete one CarbOption
     * const CarbOption = await prisma.carbOption.delete({
     *   where: {
     *     // ... filter to delete one CarbOption
     *   }
     * })
     * 
     */
    delete<T extends CarbOptionDeleteArgs>(args: SelectSubset<T, CarbOptionDeleteArgs<ExtArgs>>): Prisma__CarbOptionClient<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarbOption.
     * @param {CarbOptionUpdateArgs} args - Arguments to update one CarbOption.
     * @example
     * // Update one CarbOption
     * const carbOption = await prisma.carbOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarbOptionUpdateArgs>(args: SelectSubset<T, CarbOptionUpdateArgs<ExtArgs>>): Prisma__CarbOptionClient<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarbOptions.
     * @param {CarbOptionDeleteManyArgs} args - Arguments to filter CarbOptions to delete.
     * @example
     * // Delete a few CarbOptions
     * const { count } = await prisma.carbOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarbOptionDeleteManyArgs>(args?: SelectSubset<T, CarbOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarbOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarbOptions
     * const carbOption = await prisma.carbOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarbOptionUpdateManyArgs>(args: SelectSubset<T, CarbOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarbOptions and returns the data updated in the database.
     * @param {CarbOptionUpdateManyAndReturnArgs} args - Arguments to update many CarbOptions.
     * @example
     * // Update many CarbOptions
     * const carbOption = await prisma.carbOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarbOptions and only return the `id`
     * const carbOptionWithIdOnly = await prisma.carbOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarbOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, CarbOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarbOption.
     * @param {CarbOptionUpsertArgs} args - Arguments to update or create a CarbOption.
     * @example
     * // Update or create a CarbOption
     * const carbOption = await prisma.carbOption.upsert({
     *   create: {
     *     // ... data to create a CarbOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarbOption we want to update
     *   }
     * })
     */
    upsert<T extends CarbOptionUpsertArgs>(args: SelectSubset<T, CarbOptionUpsertArgs<ExtArgs>>): Prisma__CarbOptionClient<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarbOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbOptionCountArgs} args - Arguments to filter CarbOptions to count.
     * @example
     * // Count the number of CarbOptions
     * const count = await prisma.carbOption.count({
     *   where: {
     *     // ... the filter for the CarbOptions we want to count
     *   }
     * })
    **/
    count<T extends CarbOptionCountArgs>(
      args?: Subset<T, CarbOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarbOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarbOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarbOptionAggregateArgs>(args: Subset<T, CarbOptionAggregateArgs>): Prisma.PrismaPromise<GetCarbOptionAggregateType<T>>

    /**
     * Group by CarbOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarbOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarbOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarbOptionGroupByArgs['orderBy'] }
        : { orderBy?: CarbOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarbOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarbOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarbOption model
   */
  readonly fields: CarbOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarbOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarbOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItemCarbs<T extends CarbOption$orderItemCarbsArgs<ExtArgs> = {}>(args?: Subset<T, CarbOption$orderItemCarbsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarbOption model
   */
  interface CarbOptionFieldRefs {
    readonly id: FieldRef<"CarbOption", 'String'>
    readonly name: FieldRef<"CarbOption", 'String'>
    readonly slug: FieldRef<"CarbOption", 'String'>
    readonly extraPrice: FieldRef<"CarbOption", 'Int'>
    readonly isAvailable: FieldRef<"CarbOption", 'Boolean'>
    readonly vendorId: FieldRef<"CarbOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CarbOption findUnique
   */
  export type CarbOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionInclude<ExtArgs> | null
    /**
     * Filter, which CarbOption to fetch.
     */
    where: CarbOptionWhereUniqueInput
  }

  /**
   * CarbOption findUniqueOrThrow
   */
  export type CarbOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionInclude<ExtArgs> | null
    /**
     * Filter, which CarbOption to fetch.
     */
    where: CarbOptionWhereUniqueInput
  }

  /**
   * CarbOption findFirst
   */
  export type CarbOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionInclude<ExtArgs> | null
    /**
     * Filter, which CarbOption to fetch.
     */
    where?: CarbOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarbOptions to fetch.
     */
    orderBy?: CarbOptionOrderByWithRelationInput | CarbOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarbOptions.
     */
    cursor?: CarbOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarbOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarbOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarbOptions.
     */
    distinct?: CarbOptionScalarFieldEnum | CarbOptionScalarFieldEnum[]
  }

  /**
   * CarbOption findFirstOrThrow
   */
  export type CarbOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionInclude<ExtArgs> | null
    /**
     * Filter, which CarbOption to fetch.
     */
    where?: CarbOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarbOptions to fetch.
     */
    orderBy?: CarbOptionOrderByWithRelationInput | CarbOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarbOptions.
     */
    cursor?: CarbOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarbOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarbOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarbOptions.
     */
    distinct?: CarbOptionScalarFieldEnum | CarbOptionScalarFieldEnum[]
  }

  /**
   * CarbOption findMany
   */
  export type CarbOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionInclude<ExtArgs> | null
    /**
     * Filter, which CarbOptions to fetch.
     */
    where?: CarbOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarbOptions to fetch.
     */
    orderBy?: CarbOptionOrderByWithRelationInput | CarbOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarbOptions.
     */
    cursor?: CarbOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarbOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarbOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarbOptions.
     */
    distinct?: CarbOptionScalarFieldEnum | CarbOptionScalarFieldEnum[]
  }

  /**
   * CarbOption create
   */
  export type CarbOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a CarbOption.
     */
    data: XOR<CarbOptionCreateInput, CarbOptionUncheckedCreateInput>
  }

  /**
   * CarbOption createMany
   */
  export type CarbOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarbOptions.
     */
    data: CarbOptionCreateManyInput | CarbOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarbOption createManyAndReturn
   */
  export type CarbOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * The data used to create many CarbOptions.
     */
    data: CarbOptionCreateManyInput | CarbOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarbOption update
   */
  export type CarbOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a CarbOption.
     */
    data: XOR<CarbOptionUpdateInput, CarbOptionUncheckedUpdateInput>
    /**
     * Choose, which CarbOption to update.
     */
    where: CarbOptionWhereUniqueInput
  }

  /**
   * CarbOption updateMany
   */
  export type CarbOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarbOptions.
     */
    data: XOR<CarbOptionUpdateManyMutationInput, CarbOptionUncheckedUpdateManyInput>
    /**
     * Filter which CarbOptions to update
     */
    where?: CarbOptionWhereInput
    /**
     * Limit how many CarbOptions to update.
     */
    limit?: number
  }

  /**
   * CarbOption updateManyAndReturn
   */
  export type CarbOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * The data used to update CarbOptions.
     */
    data: XOR<CarbOptionUpdateManyMutationInput, CarbOptionUncheckedUpdateManyInput>
    /**
     * Filter which CarbOptions to update
     */
    where?: CarbOptionWhereInput
    /**
     * Limit how many CarbOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarbOption upsert
   */
  export type CarbOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the CarbOption to update in case it exists.
     */
    where: CarbOptionWhereUniqueInput
    /**
     * In case the CarbOption found by the `where` argument doesn't exist, create a new CarbOption with this data.
     */
    create: XOR<CarbOptionCreateInput, CarbOptionUncheckedCreateInput>
    /**
     * In case the CarbOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarbOptionUpdateInput, CarbOptionUncheckedUpdateInput>
  }

  /**
   * CarbOption delete
   */
  export type CarbOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionInclude<ExtArgs> | null
    /**
     * Filter which CarbOption to delete.
     */
    where: CarbOptionWhereUniqueInput
  }

  /**
   * CarbOption deleteMany
   */
  export type CarbOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarbOptions to delete
     */
    where?: CarbOptionWhereInput
    /**
     * Limit how many CarbOptions to delete.
     */
    limit?: number
  }

  /**
   * CarbOption.orderItemCarbs
   */
  export type CarbOption$orderItemCarbsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
    where?: OrderItemCarbWhereInput
    orderBy?: OrderItemCarbOrderByWithRelationInput | OrderItemCarbOrderByWithRelationInput[]
    cursor?: OrderItemCarbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemCarbScalarFieldEnum | OrderItemCarbScalarFieldEnum[]
  }

  /**
   * CarbOption without action
   */
  export type CarbOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarbOption
     */
    select?: CarbOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarbOption
     */
    omit?: CarbOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarbOptionInclude<ExtArgs> | null
  }


  /**
   * Model PackType
   */

  export type AggregatePackType = {
    _count: PackTypeCountAggregateOutputType | null
    _avg: PackTypeAvgAggregateOutputType | null
    _sum: PackTypeSumAggregateOutputType | null
    _min: PackTypeMinAggregateOutputType | null
    _max: PackTypeMaxAggregateOutputType | null
  }

  export type PackTypeAvgAggregateOutputType = {
    extraPrice: number | null
  }

  export type PackTypeSumAggregateOutputType = {
    extraPrice: number | null
  }

  export type PackTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    extraPrice: number | null
    isAvailable: boolean | null
    vendorId: string | null
  }

  export type PackTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    extraPrice: number | null
    isAvailable: boolean | null
    vendorId: string | null
  }

  export type PackTypeCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    extraPrice: number
    isAvailable: number
    vendorId: number
    _all: number
  }


  export type PackTypeAvgAggregateInputType = {
    extraPrice?: true
  }

  export type PackTypeSumAggregateInputType = {
    extraPrice?: true
  }

  export type PackTypeMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
  }

  export type PackTypeMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
  }

  export type PackTypeCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
    _all?: true
  }

  export type PackTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackType to aggregate.
     */
    where?: PackTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackTypes to fetch.
     */
    orderBy?: PackTypeOrderByWithRelationInput | PackTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackTypes
    **/
    _count?: true | PackTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackTypeMaxAggregateInputType
  }

  export type GetPackTypeAggregateType<T extends PackTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePackType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackType[P]>
      : GetScalarType<T[P], AggregatePackType[P]>
  }




  export type PackTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackTypeWhereInput
    orderBy?: PackTypeOrderByWithAggregationInput | PackTypeOrderByWithAggregationInput[]
    by: PackTypeScalarFieldEnum[] | PackTypeScalarFieldEnum
    having?: PackTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackTypeCountAggregateInputType | true
    _avg?: PackTypeAvgAggregateInputType
    _sum?: PackTypeSumAggregateInputType
    _min?: PackTypeMinAggregateInputType
    _max?: PackTypeMaxAggregateInputType
  }

  export type PackTypeGroupByOutputType = {
    id: string
    name: string
    slug: string
    extraPrice: number
    isAvailable: boolean
    vendorId: string
    _count: PackTypeCountAggregateOutputType | null
    _avg: PackTypeAvgAggregateOutputType | null
    _sum: PackTypeSumAggregateOutputType | null
    _min: PackTypeMinAggregateOutputType | null
    _max: PackTypeMaxAggregateOutputType | null
  }

  type GetPackTypeGroupByPayload<T extends PackTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PackTypeGroupByOutputType[P]>
        }
      >
    >


  export type PackTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    orders?: boolean | PackType$ordersArgs<ExtArgs>
    _count?: boolean | PackTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packType"]>

  export type PackTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packType"]>

  export type PackTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packType"]>

  export type PackTypeSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
  }

  export type PackTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "extraPrice" | "isAvailable" | "vendorId", ExtArgs["result"]["packType"]>
  export type PackTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    orders?: boolean | PackType$ordersArgs<ExtArgs>
    _count?: boolean | PackTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PackTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type PackTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $PackTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackType"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      extraPrice: number
      isAvailable: boolean
      vendorId: string
    }, ExtArgs["result"]["packType"]>
    composites: {}
  }

  type PackTypeGetPayload<S extends boolean | null | undefined | PackTypeDefaultArgs> = $Result.GetResult<Prisma.$PackTypePayload, S>

  type PackTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackTypeCountAggregateInputType | true
    }

  export interface PackTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackType'], meta: { name: 'PackType' } }
    /**
     * Find zero or one PackType that matches the filter.
     * @param {PackTypeFindUniqueArgs} args - Arguments to find a PackType
     * @example
     * // Get one PackType
     * const packType = await prisma.packType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackTypeFindUniqueArgs>(args: SelectSubset<T, PackTypeFindUniqueArgs<ExtArgs>>): Prisma__PackTypeClient<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackTypeFindUniqueOrThrowArgs} args - Arguments to find a PackType
     * @example
     * // Get one PackType
     * const packType = await prisma.packType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, PackTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackTypeClient<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackTypeFindFirstArgs} args - Arguments to find a PackType
     * @example
     * // Get one PackType
     * const packType = await prisma.packType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackTypeFindFirstArgs>(args?: SelectSubset<T, PackTypeFindFirstArgs<ExtArgs>>): Prisma__PackTypeClient<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackTypeFindFirstOrThrowArgs} args - Arguments to find a PackType
     * @example
     * // Get one PackType
     * const packType = await prisma.packType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, PackTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackTypeClient<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackTypes
     * const packTypes = await prisma.packType.findMany()
     * 
     * // Get first 10 PackTypes
     * const packTypes = await prisma.packType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packTypeWithIdOnly = await prisma.packType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackTypeFindManyArgs>(args?: SelectSubset<T, PackTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackType.
     * @param {PackTypeCreateArgs} args - Arguments to create a PackType.
     * @example
     * // Create one PackType
     * const PackType = await prisma.packType.create({
     *   data: {
     *     // ... data to create a PackType
     *   }
     * })
     * 
     */
    create<T extends PackTypeCreateArgs>(args: SelectSubset<T, PackTypeCreateArgs<ExtArgs>>): Prisma__PackTypeClient<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackTypes.
     * @param {PackTypeCreateManyArgs} args - Arguments to create many PackTypes.
     * @example
     * // Create many PackTypes
     * const packType = await prisma.packType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackTypeCreateManyArgs>(args?: SelectSubset<T, PackTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PackTypes and returns the data saved in the database.
     * @param {PackTypeCreateManyAndReturnArgs} args - Arguments to create many PackTypes.
     * @example
     * // Create many PackTypes
     * const packType = await prisma.packType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PackTypes and only return the `id`
     * const packTypeWithIdOnly = await prisma.packType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PackTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, PackTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PackType.
     * @param {PackTypeDeleteArgs} args - Arguments to delete one PackType.
     * @example
     * // Delete one PackType
     * const PackType = await prisma.packType.delete({
     *   where: {
     *     // ... filter to delete one PackType
     *   }
     * })
     * 
     */
    delete<T extends PackTypeDeleteArgs>(args: SelectSubset<T, PackTypeDeleteArgs<ExtArgs>>): Prisma__PackTypeClient<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackType.
     * @param {PackTypeUpdateArgs} args - Arguments to update one PackType.
     * @example
     * // Update one PackType
     * const packType = await prisma.packType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackTypeUpdateArgs>(args: SelectSubset<T, PackTypeUpdateArgs<ExtArgs>>): Prisma__PackTypeClient<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackTypes.
     * @param {PackTypeDeleteManyArgs} args - Arguments to filter PackTypes to delete.
     * @example
     * // Delete a few PackTypes
     * const { count } = await prisma.packType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackTypeDeleteManyArgs>(args?: SelectSubset<T, PackTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackTypes
     * const packType = await prisma.packType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackTypeUpdateManyArgs>(args: SelectSubset<T, PackTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackTypes and returns the data updated in the database.
     * @param {PackTypeUpdateManyAndReturnArgs} args - Arguments to update many PackTypes.
     * @example
     * // Update many PackTypes
     * const packType = await prisma.packType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PackTypes and only return the `id`
     * const packTypeWithIdOnly = await prisma.packType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PackTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, PackTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PackType.
     * @param {PackTypeUpsertArgs} args - Arguments to update or create a PackType.
     * @example
     * // Update or create a PackType
     * const packType = await prisma.packType.upsert({
     *   create: {
     *     // ... data to create a PackType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackType we want to update
     *   }
     * })
     */
    upsert<T extends PackTypeUpsertArgs>(args: SelectSubset<T, PackTypeUpsertArgs<ExtArgs>>): Prisma__PackTypeClient<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackTypeCountArgs} args - Arguments to filter PackTypes to count.
     * @example
     * // Count the number of PackTypes
     * const count = await prisma.packType.count({
     *   where: {
     *     // ... the filter for the PackTypes we want to count
     *   }
     * })
    **/
    count<T extends PackTypeCountArgs>(
      args?: Subset<T, PackTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PackTypeAggregateArgs>(args: Subset<T, PackTypeAggregateArgs>): Prisma.PrismaPromise<GetPackTypeAggregateType<T>>

    /**
     * Group by PackType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PackTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackTypeGroupByArgs['orderBy'] }
        : { orderBy?: PackTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PackTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackType model
   */
  readonly fields: PackTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends PackType$ordersArgs<ExtArgs> = {}>(args?: Subset<T, PackType$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PackType model
   */
  interface PackTypeFieldRefs {
    readonly id: FieldRef<"PackType", 'String'>
    readonly name: FieldRef<"PackType", 'String'>
    readonly slug: FieldRef<"PackType", 'String'>
    readonly extraPrice: FieldRef<"PackType", 'Int'>
    readonly isAvailable: FieldRef<"PackType", 'Boolean'>
    readonly vendorId: FieldRef<"PackType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PackType findUnique
   */
  export type PackTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
    /**
     * Filter, which PackType to fetch.
     */
    where: PackTypeWhereUniqueInput
  }

  /**
   * PackType findUniqueOrThrow
   */
  export type PackTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
    /**
     * Filter, which PackType to fetch.
     */
    where: PackTypeWhereUniqueInput
  }

  /**
   * PackType findFirst
   */
  export type PackTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
    /**
     * Filter, which PackType to fetch.
     */
    where?: PackTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackTypes to fetch.
     */
    orderBy?: PackTypeOrderByWithRelationInput | PackTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackTypes.
     */
    cursor?: PackTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackTypes.
     */
    distinct?: PackTypeScalarFieldEnum | PackTypeScalarFieldEnum[]
  }

  /**
   * PackType findFirstOrThrow
   */
  export type PackTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
    /**
     * Filter, which PackType to fetch.
     */
    where?: PackTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackTypes to fetch.
     */
    orderBy?: PackTypeOrderByWithRelationInput | PackTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackTypes.
     */
    cursor?: PackTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackTypes.
     */
    distinct?: PackTypeScalarFieldEnum | PackTypeScalarFieldEnum[]
  }

  /**
   * PackType findMany
   */
  export type PackTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
    /**
     * Filter, which PackTypes to fetch.
     */
    where?: PackTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackTypes to fetch.
     */
    orderBy?: PackTypeOrderByWithRelationInput | PackTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackTypes.
     */
    cursor?: PackTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackTypes.
     */
    distinct?: PackTypeScalarFieldEnum | PackTypeScalarFieldEnum[]
  }

  /**
   * PackType create
   */
  export type PackTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a PackType.
     */
    data: XOR<PackTypeCreateInput, PackTypeUncheckedCreateInput>
  }

  /**
   * PackType createMany
   */
  export type PackTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackTypes.
     */
    data: PackTypeCreateManyInput | PackTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackType createManyAndReturn
   */
  export type PackTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * The data used to create many PackTypes.
     */
    data: PackTypeCreateManyInput | PackTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackType update
   */
  export type PackTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a PackType.
     */
    data: XOR<PackTypeUpdateInput, PackTypeUncheckedUpdateInput>
    /**
     * Choose, which PackType to update.
     */
    where: PackTypeWhereUniqueInput
  }

  /**
   * PackType updateMany
   */
  export type PackTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackTypes.
     */
    data: XOR<PackTypeUpdateManyMutationInput, PackTypeUncheckedUpdateManyInput>
    /**
     * Filter which PackTypes to update
     */
    where?: PackTypeWhereInput
    /**
     * Limit how many PackTypes to update.
     */
    limit?: number
  }

  /**
   * PackType updateManyAndReturn
   */
  export type PackTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * The data used to update PackTypes.
     */
    data: XOR<PackTypeUpdateManyMutationInput, PackTypeUncheckedUpdateManyInput>
    /**
     * Filter which PackTypes to update
     */
    where?: PackTypeWhereInput
    /**
     * Limit how many PackTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PackType upsert
   */
  export type PackTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the PackType to update in case it exists.
     */
    where: PackTypeWhereUniqueInput
    /**
     * In case the PackType found by the `where` argument doesn't exist, create a new PackType with this data.
     */
    create: XOR<PackTypeCreateInput, PackTypeUncheckedCreateInput>
    /**
     * In case the PackType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackTypeUpdateInput, PackTypeUncheckedUpdateInput>
  }

  /**
   * PackType delete
   */
  export type PackTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
    /**
     * Filter which PackType to delete.
     */
    where: PackTypeWhereUniqueInput
  }

  /**
   * PackType deleteMany
   */
  export type PackTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackTypes to delete
     */
    where?: PackTypeWhereInput
    /**
     * Limit how many PackTypes to delete.
     */
    limit?: number
  }

  /**
   * PackType.orders
   */
  export type PackType$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * PackType without action
   */
  export type PackTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
  }


  /**
   * Model OrderItemCarb
   */

  export type AggregateOrderItemCarb = {
    _count: OrderItemCarbCountAggregateOutputType | null
    _min: OrderItemCarbMinAggregateOutputType | null
    _max: OrderItemCarbMaxAggregateOutputType | null
  }

  export type OrderItemCarbMinAggregateOutputType = {
    id: string | null
    orderItemId: string | null
    carbOptionId: string | null
  }

  export type OrderItemCarbMaxAggregateOutputType = {
    id: string | null
    orderItemId: string | null
    carbOptionId: string | null
  }

  export type OrderItemCarbCountAggregateOutputType = {
    id: number
    orderItemId: number
    carbOptionId: number
    _all: number
  }


  export type OrderItemCarbMinAggregateInputType = {
    id?: true
    orderItemId?: true
    carbOptionId?: true
  }

  export type OrderItemCarbMaxAggregateInputType = {
    id?: true
    orderItemId?: true
    carbOptionId?: true
  }

  export type OrderItemCarbCountAggregateInputType = {
    id?: true
    orderItemId?: true
    carbOptionId?: true
    _all?: true
  }

  export type OrderItemCarbAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemCarb to aggregate.
     */
    where?: OrderItemCarbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemCarbs to fetch.
     */
    orderBy?: OrderItemCarbOrderByWithRelationInput | OrderItemCarbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemCarbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemCarbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemCarbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItemCarbs
    **/
    _count?: true | OrderItemCarbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemCarbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemCarbMaxAggregateInputType
  }

  export type GetOrderItemCarbAggregateType<T extends OrderItemCarbAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItemCarb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItemCarb[P]>
      : GetScalarType<T[P], AggregateOrderItemCarb[P]>
  }




  export type OrderItemCarbGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemCarbWhereInput
    orderBy?: OrderItemCarbOrderByWithAggregationInput | OrderItemCarbOrderByWithAggregationInput[]
    by: OrderItemCarbScalarFieldEnum[] | OrderItemCarbScalarFieldEnum
    having?: OrderItemCarbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCarbCountAggregateInputType | true
    _min?: OrderItemCarbMinAggregateInputType
    _max?: OrderItemCarbMaxAggregateInputType
  }

  export type OrderItemCarbGroupByOutputType = {
    id: string
    orderItemId: string
    carbOptionId: string
    _count: OrderItemCarbCountAggregateOutputType | null
    _min: OrderItemCarbMinAggregateOutputType | null
    _max: OrderItemCarbMaxAggregateOutputType | null
  }

  type GetOrderItemCarbGroupByPayload<T extends OrderItemCarbGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemCarbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemCarbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemCarbGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemCarbGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemCarbSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    carbOptionId?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    carbOption?: boolean | CarbOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemCarb"]>

  export type OrderItemCarbSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    carbOptionId?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    carbOption?: boolean | CarbOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemCarb"]>

  export type OrderItemCarbSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    carbOptionId?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    carbOption?: boolean | CarbOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemCarb"]>

  export type OrderItemCarbSelectScalar = {
    id?: boolean
    orderItemId?: boolean
    carbOptionId?: boolean
  }

  export type OrderItemCarbOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderItemId" | "carbOptionId", ExtArgs["result"]["orderItemCarb"]>
  export type OrderItemCarbInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    carbOption?: boolean | CarbOptionDefaultArgs<ExtArgs>
  }
  export type OrderItemCarbIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    carbOption?: boolean | CarbOptionDefaultArgs<ExtArgs>
  }
  export type OrderItemCarbIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    carbOption?: boolean | CarbOptionDefaultArgs<ExtArgs>
  }

  export type $OrderItemCarbPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItemCarb"
    objects: {
      orderItem: Prisma.$OrderItemPayload<ExtArgs>
      carbOption: Prisma.$CarbOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderItemId: string
      carbOptionId: string
    }, ExtArgs["result"]["orderItemCarb"]>
    composites: {}
  }

  type OrderItemCarbGetPayload<S extends boolean | null | undefined | OrderItemCarbDefaultArgs> = $Result.GetResult<Prisma.$OrderItemCarbPayload, S>

  type OrderItemCarbCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemCarbFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCarbCountAggregateInputType | true
    }

  export interface OrderItemCarbDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItemCarb'], meta: { name: 'OrderItemCarb' } }
    /**
     * Find zero or one OrderItemCarb that matches the filter.
     * @param {OrderItemCarbFindUniqueArgs} args - Arguments to find a OrderItemCarb
     * @example
     * // Get one OrderItemCarb
     * const orderItemCarb = await prisma.orderItemCarb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemCarbFindUniqueArgs>(args: SelectSubset<T, OrderItemCarbFindUniqueArgs<ExtArgs>>): Prisma__OrderItemCarbClient<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItemCarb that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemCarbFindUniqueOrThrowArgs} args - Arguments to find a OrderItemCarb
     * @example
     * // Get one OrderItemCarb
     * const orderItemCarb = await prisma.orderItemCarb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemCarbFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemCarbFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemCarbClient<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItemCarb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCarbFindFirstArgs} args - Arguments to find a OrderItemCarb
     * @example
     * // Get one OrderItemCarb
     * const orderItemCarb = await prisma.orderItemCarb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemCarbFindFirstArgs>(args?: SelectSubset<T, OrderItemCarbFindFirstArgs<ExtArgs>>): Prisma__OrderItemCarbClient<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItemCarb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCarbFindFirstOrThrowArgs} args - Arguments to find a OrderItemCarb
     * @example
     * // Get one OrderItemCarb
     * const orderItemCarb = await prisma.orderItemCarb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemCarbFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemCarbFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemCarbClient<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItemCarbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCarbFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItemCarbs
     * const orderItemCarbs = await prisma.orderItemCarb.findMany()
     * 
     * // Get first 10 OrderItemCarbs
     * const orderItemCarbs = await prisma.orderItemCarb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemCarbWithIdOnly = await prisma.orderItemCarb.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemCarbFindManyArgs>(args?: SelectSubset<T, OrderItemCarbFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItemCarb.
     * @param {OrderItemCarbCreateArgs} args - Arguments to create a OrderItemCarb.
     * @example
     * // Create one OrderItemCarb
     * const OrderItemCarb = await prisma.orderItemCarb.create({
     *   data: {
     *     // ... data to create a OrderItemCarb
     *   }
     * })
     * 
     */
    create<T extends OrderItemCarbCreateArgs>(args: SelectSubset<T, OrderItemCarbCreateArgs<ExtArgs>>): Prisma__OrderItemCarbClient<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItemCarbs.
     * @param {OrderItemCarbCreateManyArgs} args - Arguments to create many OrderItemCarbs.
     * @example
     * // Create many OrderItemCarbs
     * const orderItemCarb = await prisma.orderItemCarb.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCarbCreateManyArgs>(args?: SelectSubset<T, OrderItemCarbCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItemCarbs and returns the data saved in the database.
     * @param {OrderItemCarbCreateManyAndReturnArgs} args - Arguments to create many OrderItemCarbs.
     * @example
     * // Create many OrderItemCarbs
     * const orderItemCarb = await prisma.orderItemCarb.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItemCarbs and only return the `id`
     * const orderItemCarbWithIdOnly = await prisma.orderItemCarb.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCarbCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCarbCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItemCarb.
     * @param {OrderItemCarbDeleteArgs} args - Arguments to delete one OrderItemCarb.
     * @example
     * // Delete one OrderItemCarb
     * const OrderItemCarb = await prisma.orderItemCarb.delete({
     *   where: {
     *     // ... filter to delete one OrderItemCarb
     *   }
     * })
     * 
     */
    delete<T extends OrderItemCarbDeleteArgs>(args: SelectSubset<T, OrderItemCarbDeleteArgs<ExtArgs>>): Prisma__OrderItemCarbClient<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItemCarb.
     * @param {OrderItemCarbUpdateArgs} args - Arguments to update one OrderItemCarb.
     * @example
     * // Update one OrderItemCarb
     * const orderItemCarb = await prisma.orderItemCarb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemCarbUpdateArgs>(args: SelectSubset<T, OrderItemCarbUpdateArgs<ExtArgs>>): Prisma__OrderItemCarbClient<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItemCarbs.
     * @param {OrderItemCarbDeleteManyArgs} args - Arguments to filter OrderItemCarbs to delete.
     * @example
     * // Delete a few OrderItemCarbs
     * const { count } = await prisma.orderItemCarb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemCarbDeleteManyArgs>(args?: SelectSubset<T, OrderItemCarbDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItemCarbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCarbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItemCarbs
     * const orderItemCarb = await prisma.orderItemCarb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemCarbUpdateManyArgs>(args: SelectSubset<T, OrderItemCarbUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItemCarbs and returns the data updated in the database.
     * @param {OrderItemCarbUpdateManyAndReturnArgs} args - Arguments to update many OrderItemCarbs.
     * @example
     * // Update many OrderItemCarbs
     * const orderItemCarb = await prisma.orderItemCarb.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItemCarbs and only return the `id`
     * const orderItemCarbWithIdOnly = await prisma.orderItemCarb.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemCarbUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemCarbUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItemCarb.
     * @param {OrderItemCarbUpsertArgs} args - Arguments to update or create a OrderItemCarb.
     * @example
     * // Update or create a OrderItemCarb
     * const orderItemCarb = await prisma.orderItemCarb.upsert({
     *   create: {
     *     // ... data to create a OrderItemCarb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItemCarb we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemCarbUpsertArgs>(args: SelectSubset<T, OrderItemCarbUpsertArgs<ExtArgs>>): Prisma__OrderItemCarbClient<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItemCarbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCarbCountArgs} args - Arguments to filter OrderItemCarbs to count.
     * @example
     * // Count the number of OrderItemCarbs
     * const count = await prisma.orderItemCarb.count({
     *   where: {
     *     // ... the filter for the OrderItemCarbs we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCarbCountArgs>(
      args?: Subset<T, OrderItemCarbCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCarbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItemCarb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCarbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemCarbAggregateArgs>(args: Subset<T, OrderItemCarbAggregateArgs>): Prisma.PrismaPromise<GetOrderItemCarbAggregateType<T>>

    /**
     * Group by OrderItemCarb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCarbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemCarbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemCarbGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemCarbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemCarbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemCarbGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItemCarb model
   */
  readonly fields: OrderItemCarbFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItemCarb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemCarbClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItem<T extends OrderItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderItemDefaultArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carbOption<T extends CarbOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarbOptionDefaultArgs<ExtArgs>>): Prisma__CarbOptionClient<$Result.GetResult<Prisma.$CarbOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItemCarb model
   */
  interface OrderItemCarbFieldRefs {
    readonly id: FieldRef<"OrderItemCarb", 'String'>
    readonly orderItemId: FieldRef<"OrderItemCarb", 'String'>
    readonly carbOptionId: FieldRef<"OrderItemCarb", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderItemCarb findUnique
   */
  export type OrderItemCarbFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemCarb to fetch.
     */
    where: OrderItemCarbWhereUniqueInput
  }

  /**
   * OrderItemCarb findUniqueOrThrow
   */
  export type OrderItemCarbFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemCarb to fetch.
     */
    where: OrderItemCarbWhereUniqueInput
  }

  /**
   * OrderItemCarb findFirst
   */
  export type OrderItemCarbFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemCarb to fetch.
     */
    where?: OrderItemCarbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemCarbs to fetch.
     */
    orderBy?: OrderItemCarbOrderByWithRelationInput | OrderItemCarbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItemCarbs.
     */
    cursor?: OrderItemCarbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemCarbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemCarbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemCarbs.
     */
    distinct?: OrderItemCarbScalarFieldEnum | OrderItemCarbScalarFieldEnum[]
  }

  /**
   * OrderItemCarb findFirstOrThrow
   */
  export type OrderItemCarbFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemCarb to fetch.
     */
    where?: OrderItemCarbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemCarbs to fetch.
     */
    orderBy?: OrderItemCarbOrderByWithRelationInput | OrderItemCarbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItemCarbs.
     */
    cursor?: OrderItemCarbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemCarbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemCarbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemCarbs.
     */
    distinct?: OrderItemCarbScalarFieldEnum | OrderItemCarbScalarFieldEnum[]
  }

  /**
   * OrderItemCarb findMany
   */
  export type OrderItemCarbFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemCarbs to fetch.
     */
    where?: OrderItemCarbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemCarbs to fetch.
     */
    orderBy?: OrderItemCarbOrderByWithRelationInput | OrderItemCarbOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItemCarbs.
     */
    cursor?: OrderItemCarbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemCarbs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemCarbs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemCarbs.
     */
    distinct?: OrderItemCarbScalarFieldEnum | OrderItemCarbScalarFieldEnum[]
  }

  /**
   * OrderItemCarb create
   */
  export type OrderItemCarbCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItemCarb.
     */
    data: XOR<OrderItemCarbCreateInput, OrderItemCarbUncheckedCreateInput>
  }

  /**
   * OrderItemCarb createMany
   */
  export type OrderItemCarbCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItemCarbs.
     */
    data: OrderItemCarbCreateManyInput | OrderItemCarbCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItemCarb createManyAndReturn
   */
  export type OrderItemCarbCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItemCarbs.
     */
    data: OrderItemCarbCreateManyInput | OrderItemCarbCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItemCarb update
   */
  export type OrderItemCarbUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItemCarb.
     */
    data: XOR<OrderItemCarbUpdateInput, OrderItemCarbUncheckedUpdateInput>
    /**
     * Choose, which OrderItemCarb to update.
     */
    where: OrderItemCarbWhereUniqueInput
  }

  /**
   * OrderItemCarb updateMany
   */
  export type OrderItemCarbUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItemCarbs.
     */
    data: XOR<OrderItemCarbUpdateManyMutationInput, OrderItemCarbUncheckedUpdateManyInput>
    /**
     * Filter which OrderItemCarbs to update
     */
    where?: OrderItemCarbWhereInput
    /**
     * Limit how many OrderItemCarbs to update.
     */
    limit?: number
  }

  /**
   * OrderItemCarb updateManyAndReturn
   */
  export type OrderItemCarbUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * The data used to update OrderItemCarbs.
     */
    data: XOR<OrderItemCarbUpdateManyMutationInput, OrderItemCarbUncheckedUpdateManyInput>
    /**
     * Filter which OrderItemCarbs to update
     */
    where?: OrderItemCarbWhereInput
    /**
     * Limit how many OrderItemCarbs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItemCarb upsert
   */
  export type OrderItemCarbUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItemCarb to update in case it exists.
     */
    where: OrderItemCarbWhereUniqueInput
    /**
     * In case the OrderItemCarb found by the `where` argument doesn't exist, create a new OrderItemCarb with this data.
     */
    create: XOR<OrderItemCarbCreateInput, OrderItemCarbUncheckedCreateInput>
    /**
     * In case the OrderItemCarb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemCarbUpdateInput, OrderItemCarbUncheckedUpdateInput>
  }

  /**
   * OrderItemCarb delete
   */
  export type OrderItemCarbDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
    /**
     * Filter which OrderItemCarb to delete.
     */
    where: OrderItemCarbWhereUniqueInput
  }

  /**
   * OrderItemCarb deleteMany
   */
  export type OrderItemCarbDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemCarbs to delete
     */
    where?: OrderItemCarbWhereInput
    /**
     * Limit how many OrderItemCarbs to delete.
     */
    limit?: number
  }

  /**
   * OrderItemCarb without action
   */
  export type OrderItemCarbDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
  }


  /**
   * Model SideOption
   */

  export type AggregateSideOption = {
    _count: SideOptionCountAggregateOutputType | null
    _avg: SideOptionAvgAggregateOutputType | null
    _sum: SideOptionSumAggregateOutputType | null
    _min: SideOptionMinAggregateOutputType | null
    _max: SideOptionMaxAggregateOutputType | null
  }

  export type SideOptionAvgAggregateOutputType = {
    extraPrice: number | null
  }

  export type SideOptionSumAggregateOutputType = {
    extraPrice: number | null
  }

  export type SideOptionMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    extraPrice: number | null
    isAvailable: boolean | null
    vendorId: string | null
  }

  export type SideOptionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    extraPrice: number | null
    isAvailable: boolean | null
    vendorId: string | null
  }

  export type SideOptionCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    extraPrice: number
    isAvailable: number
    vendorId: number
    _all: number
  }


  export type SideOptionAvgAggregateInputType = {
    extraPrice?: true
  }

  export type SideOptionSumAggregateInputType = {
    extraPrice?: true
  }

  export type SideOptionMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
  }

  export type SideOptionMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
  }

  export type SideOptionCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
    _all?: true
  }

  export type SideOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SideOption to aggregate.
     */
    where?: SideOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SideOptions to fetch.
     */
    orderBy?: SideOptionOrderByWithRelationInput | SideOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SideOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SideOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SideOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SideOptions
    **/
    _count?: true | SideOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SideOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SideOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SideOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SideOptionMaxAggregateInputType
  }

  export type GetSideOptionAggregateType<T extends SideOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSideOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSideOption[P]>
      : GetScalarType<T[P], AggregateSideOption[P]>
  }




  export type SideOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SideOptionWhereInput
    orderBy?: SideOptionOrderByWithAggregationInput | SideOptionOrderByWithAggregationInput[]
    by: SideOptionScalarFieldEnum[] | SideOptionScalarFieldEnum
    having?: SideOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SideOptionCountAggregateInputType | true
    _avg?: SideOptionAvgAggregateInputType
    _sum?: SideOptionSumAggregateInputType
    _min?: SideOptionMinAggregateInputType
    _max?: SideOptionMaxAggregateInputType
  }

  export type SideOptionGroupByOutputType = {
    id: string
    name: string
    slug: string
    extraPrice: number
    isAvailable: boolean
    vendorId: string
    _count: SideOptionCountAggregateOutputType | null
    _avg: SideOptionAvgAggregateOutputType | null
    _sum: SideOptionSumAggregateOutputType | null
    _min: SideOptionMinAggregateOutputType | null
    _max: SideOptionMaxAggregateOutputType | null
  }

  type GetSideOptionGroupByPayload<T extends SideOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SideOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SideOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SideOptionGroupByOutputType[P]>
            : GetScalarType<T[P], SideOptionGroupByOutputType[P]>
        }
      >
    >


  export type SideOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    orderItemSides?: boolean | SideOption$orderItemSidesArgs<ExtArgs>
    _count?: boolean | SideOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sideOption"]>

  export type SideOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sideOption"]>

  export type SideOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sideOption"]>

  export type SideOptionSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
  }

  export type SideOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "extraPrice" | "isAvailable" | "vendorId", ExtArgs["result"]["sideOption"]>
  export type SideOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    orderItemSides?: boolean | SideOption$orderItemSidesArgs<ExtArgs>
    _count?: boolean | SideOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SideOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type SideOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $SideOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SideOption"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      orderItemSides: Prisma.$OrderItemSidePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      extraPrice: number
      isAvailable: boolean
      vendorId: string
    }, ExtArgs["result"]["sideOption"]>
    composites: {}
  }

  type SideOptionGetPayload<S extends boolean | null | undefined | SideOptionDefaultArgs> = $Result.GetResult<Prisma.$SideOptionPayload, S>

  type SideOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SideOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SideOptionCountAggregateInputType | true
    }

  export interface SideOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SideOption'], meta: { name: 'SideOption' } }
    /**
     * Find zero or one SideOption that matches the filter.
     * @param {SideOptionFindUniqueArgs} args - Arguments to find a SideOption
     * @example
     * // Get one SideOption
     * const sideOption = await prisma.sideOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SideOptionFindUniqueArgs>(args: SelectSubset<T, SideOptionFindUniqueArgs<ExtArgs>>): Prisma__SideOptionClient<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SideOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SideOptionFindUniqueOrThrowArgs} args - Arguments to find a SideOption
     * @example
     * // Get one SideOption
     * const sideOption = await prisma.sideOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SideOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SideOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SideOptionClient<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SideOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideOptionFindFirstArgs} args - Arguments to find a SideOption
     * @example
     * // Get one SideOption
     * const sideOption = await prisma.sideOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SideOptionFindFirstArgs>(args?: SelectSubset<T, SideOptionFindFirstArgs<ExtArgs>>): Prisma__SideOptionClient<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SideOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideOptionFindFirstOrThrowArgs} args - Arguments to find a SideOption
     * @example
     * // Get one SideOption
     * const sideOption = await prisma.sideOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SideOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SideOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SideOptionClient<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SideOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SideOptions
     * const sideOptions = await prisma.sideOption.findMany()
     * 
     * // Get first 10 SideOptions
     * const sideOptions = await prisma.sideOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sideOptionWithIdOnly = await prisma.sideOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SideOptionFindManyArgs>(args?: SelectSubset<T, SideOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SideOption.
     * @param {SideOptionCreateArgs} args - Arguments to create a SideOption.
     * @example
     * // Create one SideOption
     * const SideOption = await prisma.sideOption.create({
     *   data: {
     *     // ... data to create a SideOption
     *   }
     * })
     * 
     */
    create<T extends SideOptionCreateArgs>(args: SelectSubset<T, SideOptionCreateArgs<ExtArgs>>): Prisma__SideOptionClient<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SideOptions.
     * @param {SideOptionCreateManyArgs} args - Arguments to create many SideOptions.
     * @example
     * // Create many SideOptions
     * const sideOption = await prisma.sideOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SideOptionCreateManyArgs>(args?: SelectSubset<T, SideOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SideOptions and returns the data saved in the database.
     * @param {SideOptionCreateManyAndReturnArgs} args - Arguments to create many SideOptions.
     * @example
     * // Create many SideOptions
     * const sideOption = await prisma.sideOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SideOptions and only return the `id`
     * const sideOptionWithIdOnly = await prisma.sideOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SideOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SideOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SideOption.
     * @param {SideOptionDeleteArgs} args - Arguments to delete one SideOption.
     * @example
     * // Delete one SideOption
     * const SideOption = await prisma.sideOption.delete({
     *   where: {
     *     // ... filter to delete one SideOption
     *   }
     * })
     * 
     */
    delete<T extends SideOptionDeleteArgs>(args: SelectSubset<T, SideOptionDeleteArgs<ExtArgs>>): Prisma__SideOptionClient<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SideOption.
     * @param {SideOptionUpdateArgs} args - Arguments to update one SideOption.
     * @example
     * // Update one SideOption
     * const sideOption = await prisma.sideOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SideOptionUpdateArgs>(args: SelectSubset<T, SideOptionUpdateArgs<ExtArgs>>): Prisma__SideOptionClient<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SideOptions.
     * @param {SideOptionDeleteManyArgs} args - Arguments to filter SideOptions to delete.
     * @example
     * // Delete a few SideOptions
     * const { count } = await prisma.sideOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SideOptionDeleteManyArgs>(args?: SelectSubset<T, SideOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SideOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SideOptions
     * const sideOption = await prisma.sideOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SideOptionUpdateManyArgs>(args: SelectSubset<T, SideOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SideOptions and returns the data updated in the database.
     * @param {SideOptionUpdateManyAndReturnArgs} args - Arguments to update many SideOptions.
     * @example
     * // Update many SideOptions
     * const sideOption = await prisma.sideOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SideOptions and only return the `id`
     * const sideOptionWithIdOnly = await prisma.sideOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SideOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SideOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SideOption.
     * @param {SideOptionUpsertArgs} args - Arguments to update or create a SideOption.
     * @example
     * // Update or create a SideOption
     * const sideOption = await prisma.sideOption.upsert({
     *   create: {
     *     // ... data to create a SideOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SideOption we want to update
     *   }
     * })
     */
    upsert<T extends SideOptionUpsertArgs>(args: SelectSubset<T, SideOptionUpsertArgs<ExtArgs>>): Prisma__SideOptionClient<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SideOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideOptionCountArgs} args - Arguments to filter SideOptions to count.
     * @example
     * // Count the number of SideOptions
     * const count = await prisma.sideOption.count({
     *   where: {
     *     // ... the filter for the SideOptions we want to count
     *   }
     * })
    **/
    count<T extends SideOptionCountArgs>(
      args?: Subset<T, SideOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SideOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SideOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SideOptionAggregateArgs>(args: Subset<T, SideOptionAggregateArgs>): Prisma.PrismaPromise<GetSideOptionAggregateType<T>>

    /**
     * Group by SideOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SideOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SideOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SideOptionGroupByArgs['orderBy'] }
        : { orderBy?: SideOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SideOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSideOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SideOption model
   */
  readonly fields: SideOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SideOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SideOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItemSides<T extends SideOption$orderItemSidesArgs<ExtArgs> = {}>(args?: Subset<T, SideOption$orderItemSidesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SideOption model
   */
  interface SideOptionFieldRefs {
    readonly id: FieldRef<"SideOption", 'String'>
    readonly name: FieldRef<"SideOption", 'String'>
    readonly slug: FieldRef<"SideOption", 'String'>
    readonly extraPrice: FieldRef<"SideOption", 'Int'>
    readonly isAvailable: FieldRef<"SideOption", 'Boolean'>
    readonly vendorId: FieldRef<"SideOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SideOption findUnique
   */
  export type SideOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionInclude<ExtArgs> | null
    /**
     * Filter, which SideOption to fetch.
     */
    where: SideOptionWhereUniqueInput
  }

  /**
   * SideOption findUniqueOrThrow
   */
  export type SideOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionInclude<ExtArgs> | null
    /**
     * Filter, which SideOption to fetch.
     */
    where: SideOptionWhereUniqueInput
  }

  /**
   * SideOption findFirst
   */
  export type SideOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionInclude<ExtArgs> | null
    /**
     * Filter, which SideOption to fetch.
     */
    where?: SideOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SideOptions to fetch.
     */
    orderBy?: SideOptionOrderByWithRelationInput | SideOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SideOptions.
     */
    cursor?: SideOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SideOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SideOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SideOptions.
     */
    distinct?: SideOptionScalarFieldEnum | SideOptionScalarFieldEnum[]
  }

  /**
   * SideOption findFirstOrThrow
   */
  export type SideOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionInclude<ExtArgs> | null
    /**
     * Filter, which SideOption to fetch.
     */
    where?: SideOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SideOptions to fetch.
     */
    orderBy?: SideOptionOrderByWithRelationInput | SideOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SideOptions.
     */
    cursor?: SideOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SideOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SideOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SideOptions.
     */
    distinct?: SideOptionScalarFieldEnum | SideOptionScalarFieldEnum[]
  }

  /**
   * SideOption findMany
   */
  export type SideOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionInclude<ExtArgs> | null
    /**
     * Filter, which SideOptions to fetch.
     */
    where?: SideOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SideOptions to fetch.
     */
    orderBy?: SideOptionOrderByWithRelationInput | SideOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SideOptions.
     */
    cursor?: SideOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SideOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SideOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SideOptions.
     */
    distinct?: SideOptionScalarFieldEnum | SideOptionScalarFieldEnum[]
  }

  /**
   * SideOption create
   */
  export type SideOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a SideOption.
     */
    data: XOR<SideOptionCreateInput, SideOptionUncheckedCreateInput>
  }

  /**
   * SideOption createMany
   */
  export type SideOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SideOptions.
     */
    data: SideOptionCreateManyInput | SideOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SideOption createManyAndReturn
   */
  export type SideOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * The data used to create many SideOptions.
     */
    data: SideOptionCreateManyInput | SideOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SideOption update
   */
  export type SideOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a SideOption.
     */
    data: XOR<SideOptionUpdateInput, SideOptionUncheckedUpdateInput>
    /**
     * Choose, which SideOption to update.
     */
    where: SideOptionWhereUniqueInput
  }

  /**
   * SideOption updateMany
   */
  export type SideOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SideOptions.
     */
    data: XOR<SideOptionUpdateManyMutationInput, SideOptionUncheckedUpdateManyInput>
    /**
     * Filter which SideOptions to update
     */
    where?: SideOptionWhereInput
    /**
     * Limit how many SideOptions to update.
     */
    limit?: number
  }

  /**
   * SideOption updateManyAndReturn
   */
  export type SideOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * The data used to update SideOptions.
     */
    data: XOR<SideOptionUpdateManyMutationInput, SideOptionUncheckedUpdateManyInput>
    /**
     * Filter which SideOptions to update
     */
    where?: SideOptionWhereInput
    /**
     * Limit how many SideOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SideOption upsert
   */
  export type SideOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the SideOption to update in case it exists.
     */
    where: SideOptionWhereUniqueInput
    /**
     * In case the SideOption found by the `where` argument doesn't exist, create a new SideOption with this data.
     */
    create: XOR<SideOptionCreateInput, SideOptionUncheckedCreateInput>
    /**
     * In case the SideOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SideOptionUpdateInput, SideOptionUncheckedUpdateInput>
  }

  /**
   * SideOption delete
   */
  export type SideOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionInclude<ExtArgs> | null
    /**
     * Filter which SideOption to delete.
     */
    where: SideOptionWhereUniqueInput
  }

  /**
   * SideOption deleteMany
   */
  export type SideOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SideOptions to delete
     */
    where?: SideOptionWhereInput
    /**
     * Limit how many SideOptions to delete.
     */
    limit?: number
  }

  /**
   * SideOption.orderItemSides
   */
  export type SideOption$orderItemSidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
    where?: OrderItemSideWhereInput
    orderBy?: OrderItemSideOrderByWithRelationInput | OrderItemSideOrderByWithRelationInput[]
    cursor?: OrderItemSideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemSideScalarFieldEnum | OrderItemSideScalarFieldEnum[]
  }

  /**
   * SideOption without action
   */
  export type SideOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SideOption
     */
    select?: SideOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SideOption
     */
    omit?: SideOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SideOptionInclude<ExtArgs> | null
  }


  /**
   * Model OrderItemSide
   */

  export type AggregateOrderItemSide = {
    _count: OrderItemSideCountAggregateOutputType | null
    _min: OrderItemSideMinAggregateOutputType | null
    _max: OrderItemSideMaxAggregateOutputType | null
  }

  export type OrderItemSideMinAggregateOutputType = {
    id: string | null
    orderItemId: string | null
    sideOptionId: string | null
  }

  export type OrderItemSideMaxAggregateOutputType = {
    id: string | null
    orderItemId: string | null
    sideOptionId: string | null
  }

  export type OrderItemSideCountAggregateOutputType = {
    id: number
    orderItemId: number
    sideOptionId: number
    _all: number
  }


  export type OrderItemSideMinAggregateInputType = {
    id?: true
    orderItemId?: true
    sideOptionId?: true
  }

  export type OrderItemSideMaxAggregateInputType = {
    id?: true
    orderItemId?: true
    sideOptionId?: true
  }

  export type OrderItemSideCountAggregateInputType = {
    id?: true
    orderItemId?: true
    sideOptionId?: true
    _all?: true
  }

  export type OrderItemSideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemSide to aggregate.
     */
    where?: OrderItemSideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemSides to fetch.
     */
    orderBy?: OrderItemSideOrderByWithRelationInput | OrderItemSideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemSideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemSides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemSides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItemSides
    **/
    _count?: true | OrderItemSideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemSideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemSideMaxAggregateInputType
  }

  export type GetOrderItemSideAggregateType<T extends OrderItemSideAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItemSide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItemSide[P]>
      : GetScalarType<T[P], AggregateOrderItemSide[P]>
  }




  export type OrderItemSideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemSideWhereInput
    orderBy?: OrderItemSideOrderByWithAggregationInput | OrderItemSideOrderByWithAggregationInput[]
    by: OrderItemSideScalarFieldEnum[] | OrderItemSideScalarFieldEnum
    having?: OrderItemSideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemSideCountAggregateInputType | true
    _min?: OrderItemSideMinAggregateInputType
    _max?: OrderItemSideMaxAggregateInputType
  }

  export type OrderItemSideGroupByOutputType = {
    id: string
    orderItemId: string
    sideOptionId: string
    _count: OrderItemSideCountAggregateOutputType | null
    _min: OrderItemSideMinAggregateOutputType | null
    _max: OrderItemSideMaxAggregateOutputType | null
  }

  type GetOrderItemSideGroupByPayload<T extends OrderItemSideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemSideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemSideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemSideGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemSideGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    sideOptionId?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    sideOption?: boolean | SideOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemSide"]>

  export type OrderItemSideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    sideOptionId?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    sideOption?: boolean | SideOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemSide"]>

  export type OrderItemSideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    sideOptionId?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    sideOption?: boolean | SideOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemSide"]>

  export type OrderItemSideSelectScalar = {
    id?: boolean
    orderItemId?: boolean
    sideOptionId?: boolean
  }

  export type OrderItemSideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderItemId" | "sideOptionId", ExtArgs["result"]["orderItemSide"]>
  export type OrderItemSideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    sideOption?: boolean | SideOptionDefaultArgs<ExtArgs>
  }
  export type OrderItemSideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    sideOption?: boolean | SideOptionDefaultArgs<ExtArgs>
  }
  export type OrderItemSideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    sideOption?: boolean | SideOptionDefaultArgs<ExtArgs>
  }

  export type $OrderItemSidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItemSide"
    objects: {
      orderItem: Prisma.$OrderItemPayload<ExtArgs>
      sideOption: Prisma.$SideOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderItemId: string
      sideOptionId: string
    }, ExtArgs["result"]["orderItemSide"]>
    composites: {}
  }

  type OrderItemSideGetPayload<S extends boolean | null | undefined | OrderItemSideDefaultArgs> = $Result.GetResult<Prisma.$OrderItemSidePayload, S>

  type OrderItemSideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemSideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemSideCountAggregateInputType | true
    }

  export interface OrderItemSideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItemSide'], meta: { name: 'OrderItemSide' } }
    /**
     * Find zero or one OrderItemSide that matches the filter.
     * @param {OrderItemSideFindUniqueArgs} args - Arguments to find a OrderItemSide
     * @example
     * // Get one OrderItemSide
     * const orderItemSide = await prisma.orderItemSide.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemSideFindUniqueArgs>(args: SelectSubset<T, OrderItemSideFindUniqueArgs<ExtArgs>>): Prisma__OrderItemSideClient<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItemSide that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemSideFindUniqueOrThrowArgs} args - Arguments to find a OrderItemSide
     * @example
     * // Get one OrderItemSide
     * const orderItemSide = await prisma.orderItemSide.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemSideFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemSideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemSideClient<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItemSide that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSideFindFirstArgs} args - Arguments to find a OrderItemSide
     * @example
     * // Get one OrderItemSide
     * const orderItemSide = await prisma.orderItemSide.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemSideFindFirstArgs>(args?: SelectSubset<T, OrderItemSideFindFirstArgs<ExtArgs>>): Prisma__OrderItemSideClient<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItemSide that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSideFindFirstOrThrowArgs} args - Arguments to find a OrderItemSide
     * @example
     * // Get one OrderItemSide
     * const orderItemSide = await prisma.orderItemSide.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemSideFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemSideFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemSideClient<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItemSides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItemSides
     * const orderItemSides = await prisma.orderItemSide.findMany()
     * 
     * // Get first 10 OrderItemSides
     * const orderItemSides = await prisma.orderItemSide.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemSideWithIdOnly = await prisma.orderItemSide.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemSideFindManyArgs>(args?: SelectSubset<T, OrderItemSideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItemSide.
     * @param {OrderItemSideCreateArgs} args - Arguments to create a OrderItemSide.
     * @example
     * // Create one OrderItemSide
     * const OrderItemSide = await prisma.orderItemSide.create({
     *   data: {
     *     // ... data to create a OrderItemSide
     *   }
     * })
     * 
     */
    create<T extends OrderItemSideCreateArgs>(args: SelectSubset<T, OrderItemSideCreateArgs<ExtArgs>>): Prisma__OrderItemSideClient<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItemSides.
     * @param {OrderItemSideCreateManyArgs} args - Arguments to create many OrderItemSides.
     * @example
     * // Create many OrderItemSides
     * const orderItemSide = await prisma.orderItemSide.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemSideCreateManyArgs>(args?: SelectSubset<T, OrderItemSideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItemSides and returns the data saved in the database.
     * @param {OrderItemSideCreateManyAndReturnArgs} args - Arguments to create many OrderItemSides.
     * @example
     * // Create many OrderItemSides
     * const orderItemSide = await prisma.orderItemSide.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItemSides and only return the `id`
     * const orderItemSideWithIdOnly = await prisma.orderItemSide.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemSideCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemSideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItemSide.
     * @param {OrderItemSideDeleteArgs} args - Arguments to delete one OrderItemSide.
     * @example
     * // Delete one OrderItemSide
     * const OrderItemSide = await prisma.orderItemSide.delete({
     *   where: {
     *     // ... filter to delete one OrderItemSide
     *   }
     * })
     * 
     */
    delete<T extends OrderItemSideDeleteArgs>(args: SelectSubset<T, OrderItemSideDeleteArgs<ExtArgs>>): Prisma__OrderItemSideClient<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItemSide.
     * @param {OrderItemSideUpdateArgs} args - Arguments to update one OrderItemSide.
     * @example
     * // Update one OrderItemSide
     * const orderItemSide = await prisma.orderItemSide.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemSideUpdateArgs>(args: SelectSubset<T, OrderItemSideUpdateArgs<ExtArgs>>): Prisma__OrderItemSideClient<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItemSides.
     * @param {OrderItemSideDeleteManyArgs} args - Arguments to filter OrderItemSides to delete.
     * @example
     * // Delete a few OrderItemSides
     * const { count } = await prisma.orderItemSide.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemSideDeleteManyArgs>(args?: SelectSubset<T, OrderItemSideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItemSides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItemSides
     * const orderItemSide = await prisma.orderItemSide.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemSideUpdateManyArgs>(args: SelectSubset<T, OrderItemSideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItemSides and returns the data updated in the database.
     * @param {OrderItemSideUpdateManyAndReturnArgs} args - Arguments to update many OrderItemSides.
     * @example
     * // Update many OrderItemSides
     * const orderItemSide = await prisma.orderItemSide.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItemSides and only return the `id`
     * const orderItemSideWithIdOnly = await prisma.orderItemSide.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemSideUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemSideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItemSide.
     * @param {OrderItemSideUpsertArgs} args - Arguments to update or create a OrderItemSide.
     * @example
     * // Update or create a OrderItemSide
     * const orderItemSide = await prisma.orderItemSide.upsert({
     *   create: {
     *     // ... data to create a OrderItemSide
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItemSide we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemSideUpsertArgs>(args: SelectSubset<T, OrderItemSideUpsertArgs<ExtArgs>>): Prisma__OrderItemSideClient<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItemSides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSideCountArgs} args - Arguments to filter OrderItemSides to count.
     * @example
     * // Count the number of OrderItemSides
     * const count = await prisma.orderItemSide.count({
     *   where: {
     *     // ... the filter for the OrderItemSides we want to count
     *   }
     * })
    **/
    count<T extends OrderItemSideCountArgs>(
      args?: Subset<T, OrderItemSideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemSideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItemSide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemSideAggregateArgs>(args: Subset<T, OrderItemSideAggregateArgs>): Prisma.PrismaPromise<GetOrderItemSideAggregateType<T>>

    /**
     * Group by OrderItemSide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemSideGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemSideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemSideGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemSideGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemSideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemSideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItemSide model
   */
  readonly fields: OrderItemSideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItemSide.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemSideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItem<T extends OrderItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderItemDefaultArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sideOption<T extends SideOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SideOptionDefaultArgs<ExtArgs>>): Prisma__SideOptionClient<$Result.GetResult<Prisma.$SideOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItemSide model
   */
  interface OrderItemSideFieldRefs {
    readonly id: FieldRef<"OrderItemSide", 'String'>
    readonly orderItemId: FieldRef<"OrderItemSide", 'String'>
    readonly sideOptionId: FieldRef<"OrderItemSide", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderItemSide findUnique
   */
  export type OrderItemSideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemSide to fetch.
     */
    where: OrderItemSideWhereUniqueInput
  }

  /**
   * OrderItemSide findUniqueOrThrow
   */
  export type OrderItemSideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemSide to fetch.
     */
    where: OrderItemSideWhereUniqueInput
  }

  /**
   * OrderItemSide findFirst
   */
  export type OrderItemSideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemSide to fetch.
     */
    where?: OrderItemSideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemSides to fetch.
     */
    orderBy?: OrderItemSideOrderByWithRelationInput | OrderItemSideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItemSides.
     */
    cursor?: OrderItemSideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemSides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemSides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemSides.
     */
    distinct?: OrderItemSideScalarFieldEnum | OrderItemSideScalarFieldEnum[]
  }

  /**
   * OrderItemSide findFirstOrThrow
   */
  export type OrderItemSideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemSide to fetch.
     */
    where?: OrderItemSideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemSides to fetch.
     */
    orderBy?: OrderItemSideOrderByWithRelationInput | OrderItemSideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItemSides.
     */
    cursor?: OrderItemSideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemSides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemSides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemSides.
     */
    distinct?: OrderItemSideScalarFieldEnum | OrderItemSideScalarFieldEnum[]
  }

  /**
   * OrderItemSide findMany
   */
  export type OrderItemSideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemSides to fetch.
     */
    where?: OrderItemSideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemSides to fetch.
     */
    orderBy?: OrderItemSideOrderByWithRelationInput | OrderItemSideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItemSides.
     */
    cursor?: OrderItemSideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemSides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemSides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemSides.
     */
    distinct?: OrderItemSideScalarFieldEnum | OrderItemSideScalarFieldEnum[]
  }

  /**
   * OrderItemSide create
   */
  export type OrderItemSideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItemSide.
     */
    data: XOR<OrderItemSideCreateInput, OrderItemSideUncheckedCreateInput>
  }

  /**
   * OrderItemSide createMany
   */
  export type OrderItemSideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItemSides.
     */
    data: OrderItemSideCreateManyInput | OrderItemSideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItemSide createManyAndReturn
   */
  export type OrderItemSideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItemSides.
     */
    data: OrderItemSideCreateManyInput | OrderItemSideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItemSide update
   */
  export type OrderItemSideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItemSide.
     */
    data: XOR<OrderItemSideUpdateInput, OrderItemSideUncheckedUpdateInput>
    /**
     * Choose, which OrderItemSide to update.
     */
    where: OrderItemSideWhereUniqueInput
  }

  /**
   * OrderItemSide updateMany
   */
  export type OrderItemSideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItemSides.
     */
    data: XOR<OrderItemSideUpdateManyMutationInput, OrderItemSideUncheckedUpdateManyInput>
    /**
     * Filter which OrderItemSides to update
     */
    where?: OrderItemSideWhereInput
    /**
     * Limit how many OrderItemSides to update.
     */
    limit?: number
  }

  /**
   * OrderItemSide updateManyAndReturn
   */
  export type OrderItemSideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * The data used to update OrderItemSides.
     */
    data: XOR<OrderItemSideUpdateManyMutationInput, OrderItemSideUncheckedUpdateManyInput>
    /**
     * Filter which OrderItemSides to update
     */
    where?: OrderItemSideWhereInput
    /**
     * Limit how many OrderItemSides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItemSide upsert
   */
  export type OrderItemSideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItemSide to update in case it exists.
     */
    where: OrderItemSideWhereUniqueInput
    /**
     * In case the OrderItemSide found by the `where` argument doesn't exist, create a new OrderItemSide with this data.
     */
    create: XOR<OrderItemSideCreateInput, OrderItemSideUncheckedCreateInput>
    /**
     * In case the OrderItemSide was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemSideUpdateInput, OrderItemSideUncheckedUpdateInput>
  }

  /**
   * OrderItemSide delete
   */
  export type OrderItemSideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
    /**
     * Filter which OrderItemSide to delete.
     */
    where: OrderItemSideWhereUniqueInput
  }

  /**
   * OrderItemSide deleteMany
   */
  export type OrderItemSideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemSides to delete
     */
    where?: OrderItemSideWhereInput
    /**
     * Limit how many OrderItemSides to delete.
     */
    limit?: number
  }

  /**
   * OrderItemSide without action
   */
  export type OrderItemSideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
  }


  /**
   * Model ProteinOption
   */

  export type AggregateProteinOption = {
    _count: ProteinOptionCountAggregateOutputType | null
    _avg: ProteinOptionAvgAggregateOutputType | null
    _sum: ProteinOptionSumAggregateOutputType | null
    _min: ProteinOptionMinAggregateOutputType | null
    _max: ProteinOptionMaxAggregateOutputType | null
  }

  export type ProteinOptionAvgAggregateOutputType = {
    extraPrice: number | null
  }

  export type ProteinOptionSumAggregateOutputType = {
    extraPrice: number | null
  }

  export type ProteinOptionMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    extraPrice: number | null
    isAvailable: boolean | null
    vendorId: string | null
  }

  export type ProteinOptionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    extraPrice: number | null
    isAvailable: boolean | null
    vendorId: string | null
  }

  export type ProteinOptionCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    extraPrice: number
    isAvailable: number
    vendorId: number
    _all: number
  }


  export type ProteinOptionAvgAggregateInputType = {
    extraPrice?: true
  }

  export type ProteinOptionSumAggregateInputType = {
    extraPrice?: true
  }

  export type ProteinOptionMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
  }

  export type ProteinOptionMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
  }

  export type ProteinOptionCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    extraPrice?: true
    isAvailable?: true
    vendorId?: true
    _all?: true
  }

  export type ProteinOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProteinOption to aggregate.
     */
    where?: ProteinOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProteinOptions to fetch.
     */
    orderBy?: ProteinOptionOrderByWithRelationInput | ProteinOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProteinOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProteinOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProteinOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProteinOptions
    **/
    _count?: true | ProteinOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProteinOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProteinOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProteinOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProteinOptionMaxAggregateInputType
  }

  export type GetProteinOptionAggregateType<T extends ProteinOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateProteinOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProteinOption[P]>
      : GetScalarType<T[P], AggregateProteinOption[P]>
  }




  export type ProteinOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProteinOptionWhereInput
    orderBy?: ProteinOptionOrderByWithAggregationInput | ProteinOptionOrderByWithAggregationInput[]
    by: ProteinOptionScalarFieldEnum[] | ProteinOptionScalarFieldEnum
    having?: ProteinOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProteinOptionCountAggregateInputType | true
    _avg?: ProteinOptionAvgAggregateInputType
    _sum?: ProteinOptionSumAggregateInputType
    _min?: ProteinOptionMinAggregateInputType
    _max?: ProteinOptionMaxAggregateInputType
  }

  export type ProteinOptionGroupByOutputType = {
    id: string
    name: string
    slug: string
    extraPrice: number
    isAvailable: boolean
    vendorId: string
    _count: ProteinOptionCountAggregateOutputType | null
    _avg: ProteinOptionAvgAggregateOutputType | null
    _sum: ProteinOptionSumAggregateOutputType | null
    _min: ProteinOptionMinAggregateOutputType | null
    _max: ProteinOptionMaxAggregateOutputType | null
  }

  type GetProteinOptionGroupByPayload<T extends ProteinOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProteinOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProteinOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProteinOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ProteinOptionGroupByOutputType[P]>
        }
      >
    >


  export type ProteinOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    orderItems?: boolean | ProteinOption$orderItemsArgs<ExtArgs>
    _count?: boolean | ProteinOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proteinOption"]>

  export type ProteinOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proteinOption"]>

  export type ProteinOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proteinOption"]>

  export type ProteinOptionSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    extraPrice?: boolean
    isAvailable?: boolean
    vendorId?: boolean
  }

  export type ProteinOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "extraPrice" | "isAvailable" | "vendorId", ExtArgs["result"]["proteinOption"]>
  export type ProteinOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    orderItems?: boolean | ProteinOption$orderItemsArgs<ExtArgs>
    _count?: boolean | ProteinOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProteinOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type ProteinOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $ProteinOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProteinOption"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      extraPrice: number
      isAvailable: boolean
      vendorId: string
    }, ExtArgs["result"]["proteinOption"]>
    composites: {}
  }

  type ProteinOptionGetPayload<S extends boolean | null | undefined | ProteinOptionDefaultArgs> = $Result.GetResult<Prisma.$ProteinOptionPayload, S>

  type ProteinOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProteinOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProteinOptionCountAggregateInputType | true
    }

  export interface ProteinOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProteinOption'], meta: { name: 'ProteinOption' } }
    /**
     * Find zero or one ProteinOption that matches the filter.
     * @param {ProteinOptionFindUniqueArgs} args - Arguments to find a ProteinOption
     * @example
     * // Get one ProteinOption
     * const proteinOption = await prisma.proteinOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProteinOptionFindUniqueArgs>(args: SelectSubset<T, ProteinOptionFindUniqueArgs<ExtArgs>>): Prisma__ProteinOptionClient<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProteinOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProteinOptionFindUniqueOrThrowArgs} args - Arguments to find a ProteinOption
     * @example
     * // Get one ProteinOption
     * const proteinOption = await prisma.proteinOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProteinOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProteinOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProteinOptionClient<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProteinOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProteinOptionFindFirstArgs} args - Arguments to find a ProteinOption
     * @example
     * // Get one ProteinOption
     * const proteinOption = await prisma.proteinOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProteinOptionFindFirstArgs>(args?: SelectSubset<T, ProteinOptionFindFirstArgs<ExtArgs>>): Prisma__ProteinOptionClient<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProteinOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProteinOptionFindFirstOrThrowArgs} args - Arguments to find a ProteinOption
     * @example
     * // Get one ProteinOption
     * const proteinOption = await prisma.proteinOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProteinOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProteinOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProteinOptionClient<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProteinOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProteinOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProteinOptions
     * const proteinOptions = await prisma.proteinOption.findMany()
     * 
     * // Get first 10 ProteinOptions
     * const proteinOptions = await prisma.proteinOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proteinOptionWithIdOnly = await prisma.proteinOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProteinOptionFindManyArgs>(args?: SelectSubset<T, ProteinOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProteinOption.
     * @param {ProteinOptionCreateArgs} args - Arguments to create a ProteinOption.
     * @example
     * // Create one ProteinOption
     * const ProteinOption = await prisma.proteinOption.create({
     *   data: {
     *     // ... data to create a ProteinOption
     *   }
     * })
     * 
     */
    create<T extends ProteinOptionCreateArgs>(args: SelectSubset<T, ProteinOptionCreateArgs<ExtArgs>>): Prisma__ProteinOptionClient<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProteinOptions.
     * @param {ProteinOptionCreateManyArgs} args - Arguments to create many ProteinOptions.
     * @example
     * // Create many ProteinOptions
     * const proteinOption = await prisma.proteinOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProteinOptionCreateManyArgs>(args?: SelectSubset<T, ProteinOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProteinOptions and returns the data saved in the database.
     * @param {ProteinOptionCreateManyAndReturnArgs} args - Arguments to create many ProteinOptions.
     * @example
     * // Create many ProteinOptions
     * const proteinOption = await prisma.proteinOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProteinOptions and only return the `id`
     * const proteinOptionWithIdOnly = await prisma.proteinOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProteinOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProteinOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProteinOption.
     * @param {ProteinOptionDeleteArgs} args - Arguments to delete one ProteinOption.
     * @example
     * // Delete one ProteinOption
     * const ProteinOption = await prisma.proteinOption.delete({
     *   where: {
     *     // ... filter to delete one ProteinOption
     *   }
     * })
     * 
     */
    delete<T extends ProteinOptionDeleteArgs>(args: SelectSubset<T, ProteinOptionDeleteArgs<ExtArgs>>): Prisma__ProteinOptionClient<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProteinOption.
     * @param {ProteinOptionUpdateArgs} args - Arguments to update one ProteinOption.
     * @example
     * // Update one ProteinOption
     * const proteinOption = await prisma.proteinOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProteinOptionUpdateArgs>(args: SelectSubset<T, ProteinOptionUpdateArgs<ExtArgs>>): Prisma__ProteinOptionClient<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProteinOptions.
     * @param {ProteinOptionDeleteManyArgs} args - Arguments to filter ProteinOptions to delete.
     * @example
     * // Delete a few ProteinOptions
     * const { count } = await prisma.proteinOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProteinOptionDeleteManyArgs>(args?: SelectSubset<T, ProteinOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProteinOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProteinOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProteinOptions
     * const proteinOption = await prisma.proteinOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProteinOptionUpdateManyArgs>(args: SelectSubset<T, ProteinOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProteinOptions and returns the data updated in the database.
     * @param {ProteinOptionUpdateManyAndReturnArgs} args - Arguments to update many ProteinOptions.
     * @example
     * // Update many ProteinOptions
     * const proteinOption = await prisma.proteinOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProteinOptions and only return the `id`
     * const proteinOptionWithIdOnly = await prisma.proteinOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProteinOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ProteinOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProteinOption.
     * @param {ProteinOptionUpsertArgs} args - Arguments to update or create a ProteinOption.
     * @example
     * // Update or create a ProteinOption
     * const proteinOption = await prisma.proteinOption.upsert({
     *   create: {
     *     // ... data to create a ProteinOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProteinOption we want to update
     *   }
     * })
     */
    upsert<T extends ProteinOptionUpsertArgs>(args: SelectSubset<T, ProteinOptionUpsertArgs<ExtArgs>>): Prisma__ProteinOptionClient<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProteinOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProteinOptionCountArgs} args - Arguments to filter ProteinOptions to count.
     * @example
     * // Count the number of ProteinOptions
     * const count = await prisma.proteinOption.count({
     *   where: {
     *     // ... the filter for the ProteinOptions we want to count
     *   }
     * })
    **/
    count<T extends ProteinOptionCountArgs>(
      args?: Subset<T, ProteinOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProteinOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProteinOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProteinOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProteinOptionAggregateArgs>(args: Subset<T, ProteinOptionAggregateArgs>): Prisma.PrismaPromise<GetProteinOptionAggregateType<T>>

    /**
     * Group by ProteinOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProteinOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProteinOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProteinOptionGroupByArgs['orderBy'] }
        : { orderBy?: ProteinOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProteinOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProteinOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProteinOption model
   */
  readonly fields: ProteinOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProteinOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProteinOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends ProteinOption$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, ProteinOption$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProteinOption model
   */
  interface ProteinOptionFieldRefs {
    readonly id: FieldRef<"ProteinOption", 'String'>
    readonly name: FieldRef<"ProteinOption", 'String'>
    readonly slug: FieldRef<"ProteinOption", 'String'>
    readonly extraPrice: FieldRef<"ProteinOption", 'Int'>
    readonly isAvailable: FieldRef<"ProteinOption", 'Boolean'>
    readonly vendorId: FieldRef<"ProteinOption", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProteinOption findUnique
   */
  export type ProteinOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProteinOption to fetch.
     */
    where: ProteinOptionWhereUniqueInput
  }

  /**
   * ProteinOption findUniqueOrThrow
   */
  export type ProteinOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProteinOption to fetch.
     */
    where: ProteinOptionWhereUniqueInput
  }

  /**
   * ProteinOption findFirst
   */
  export type ProteinOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProteinOption to fetch.
     */
    where?: ProteinOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProteinOptions to fetch.
     */
    orderBy?: ProteinOptionOrderByWithRelationInput | ProteinOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProteinOptions.
     */
    cursor?: ProteinOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProteinOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProteinOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProteinOptions.
     */
    distinct?: ProteinOptionScalarFieldEnum | ProteinOptionScalarFieldEnum[]
  }

  /**
   * ProteinOption findFirstOrThrow
   */
  export type ProteinOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProteinOption to fetch.
     */
    where?: ProteinOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProteinOptions to fetch.
     */
    orderBy?: ProteinOptionOrderByWithRelationInput | ProteinOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProteinOptions.
     */
    cursor?: ProteinOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProteinOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProteinOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProteinOptions.
     */
    distinct?: ProteinOptionScalarFieldEnum | ProteinOptionScalarFieldEnum[]
  }

  /**
   * ProteinOption findMany
   */
  export type ProteinOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
    /**
     * Filter, which ProteinOptions to fetch.
     */
    where?: ProteinOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProteinOptions to fetch.
     */
    orderBy?: ProteinOptionOrderByWithRelationInput | ProteinOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProteinOptions.
     */
    cursor?: ProteinOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProteinOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProteinOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProteinOptions.
     */
    distinct?: ProteinOptionScalarFieldEnum | ProteinOptionScalarFieldEnum[]
  }

  /**
   * ProteinOption create
   */
  export type ProteinOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ProteinOption.
     */
    data: XOR<ProteinOptionCreateInput, ProteinOptionUncheckedCreateInput>
  }

  /**
   * ProteinOption createMany
   */
  export type ProteinOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProteinOptions.
     */
    data: ProteinOptionCreateManyInput | ProteinOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProteinOption createManyAndReturn
   */
  export type ProteinOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * The data used to create many ProteinOptions.
     */
    data: ProteinOptionCreateManyInput | ProteinOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProteinOption update
   */
  export type ProteinOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ProteinOption.
     */
    data: XOR<ProteinOptionUpdateInput, ProteinOptionUncheckedUpdateInput>
    /**
     * Choose, which ProteinOption to update.
     */
    where: ProteinOptionWhereUniqueInput
  }

  /**
   * ProteinOption updateMany
   */
  export type ProteinOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProteinOptions.
     */
    data: XOR<ProteinOptionUpdateManyMutationInput, ProteinOptionUncheckedUpdateManyInput>
    /**
     * Filter which ProteinOptions to update
     */
    where?: ProteinOptionWhereInput
    /**
     * Limit how many ProteinOptions to update.
     */
    limit?: number
  }

  /**
   * ProteinOption updateManyAndReturn
   */
  export type ProteinOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * The data used to update ProteinOptions.
     */
    data: XOR<ProteinOptionUpdateManyMutationInput, ProteinOptionUncheckedUpdateManyInput>
    /**
     * Filter which ProteinOptions to update
     */
    where?: ProteinOptionWhereInput
    /**
     * Limit how many ProteinOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProteinOption upsert
   */
  export type ProteinOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ProteinOption to update in case it exists.
     */
    where: ProteinOptionWhereUniqueInput
    /**
     * In case the ProteinOption found by the `where` argument doesn't exist, create a new ProteinOption with this data.
     */
    create: XOR<ProteinOptionCreateInput, ProteinOptionUncheckedCreateInput>
    /**
     * In case the ProteinOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProteinOptionUpdateInput, ProteinOptionUncheckedUpdateInput>
  }

  /**
   * ProteinOption delete
   */
  export type ProteinOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
    /**
     * Filter which ProteinOption to delete.
     */
    where: ProteinOptionWhereUniqueInput
  }

  /**
   * ProteinOption deleteMany
   */
  export type ProteinOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProteinOptions to delete
     */
    where?: ProteinOptionWhereInput
    /**
     * Limit how many ProteinOptions to delete.
     */
    limit?: number
  }

  /**
   * ProteinOption.orderItems
   */
  export type ProteinOption$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * ProteinOption without action
   */
  export type ProteinOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
  }


  /**
   * Model Rider
   */

  export type AggregateRider = {
    _count: RiderCountAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  export type RiderMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    phone: string | null
    vehicleType: $Enums.VehicleType | null
    isAvailable: boolean | null
    status: $Enums.RiderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiderMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    phone: string | null
    vehicleType: $Enums.VehicleType | null
    isAvailable: boolean | null
    status: $Enums.RiderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiderCountAggregateOutputType = {
    id: number
    clerkUserId: number
    phone: number
    vehicleType: number
    isAvailable: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RiderMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    phone?: true
    vehicleType?: true
    isAvailable?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiderMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    phone?: true
    vehicleType?: true
    isAvailable?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiderCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    phone?: true
    vehicleType?: true
    isAvailable?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RiderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider to aggregate.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Riders
    **/
    _count?: true | RiderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiderMaxAggregateInputType
  }

  export type GetRiderAggregateType<T extends RiderAggregateArgs> = {
        [P in keyof T & keyof AggregateRider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRider[P]>
      : GetScalarType<T[P], AggregateRider[P]>
  }




  export type RiderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiderWhereInput
    orderBy?: RiderOrderByWithAggregationInput | RiderOrderByWithAggregationInput[]
    by: RiderScalarFieldEnum[] | RiderScalarFieldEnum
    having?: RiderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiderCountAggregateInputType | true
    _min?: RiderMinAggregateInputType
    _max?: RiderMaxAggregateInputType
  }

  export type RiderGroupByOutputType = {
    id: string
    clerkUserId: string
    phone: string
    vehicleType: $Enums.VehicleType
    isAvailable: boolean
    status: $Enums.RiderStatus
    createdAt: Date
    updatedAt: Date
    _count: RiderCountAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  type GetRiderGroupByPayload<T extends RiderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiderGroupByOutputType[P]>
            : GetScalarType<T[P], RiderGroupByOutputType[P]>
        }
      >
    >


  export type RiderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    phone?: boolean
    vehicleType?: boolean
    isAvailable?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Rider$ordersArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rider"]>

  export type RiderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    phone?: boolean
    vehicleType?: boolean
    isAvailable?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rider"]>

  export type RiderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    phone?: boolean
    vehicleType?: boolean
    isAvailable?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rider"]>

  export type RiderSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    phone?: boolean
    vehicleType?: boolean
    isAvailable?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RiderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "phone" | "vehicleType" | "isAvailable" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["rider"]>
  export type RiderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Rider$ordersArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RiderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RiderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RiderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rider"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      phone: string
      vehicleType: $Enums.VehicleType
      isAvailable: boolean
      status: $Enums.RiderStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rider"]>
    composites: {}
  }

  type RiderGetPayload<S extends boolean | null | undefined | RiderDefaultArgs> = $Result.GetResult<Prisma.$RiderPayload, S>

  type RiderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiderCountAggregateInputType | true
    }

  export interface RiderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rider'], meta: { name: 'Rider' } }
    /**
     * Find zero or one Rider that matches the filter.
     * @param {RiderFindUniqueArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiderFindUniqueArgs>(args: SelectSubset<T, RiderFindUniqueArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiderFindUniqueOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiderFindUniqueOrThrowArgs>(args: SelectSubset<T, RiderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiderFindFirstArgs>(args?: SelectSubset<T, RiderFindFirstArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiderFindFirstOrThrowArgs>(args?: SelectSubset<T, RiderFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Riders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Riders
     * const riders = await prisma.rider.findMany()
     * 
     * // Get first 10 Riders
     * const riders = await prisma.rider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riderWithIdOnly = await prisma.rider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiderFindManyArgs>(args?: SelectSubset<T, RiderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rider.
     * @param {RiderCreateArgs} args - Arguments to create a Rider.
     * @example
     * // Create one Rider
     * const Rider = await prisma.rider.create({
     *   data: {
     *     // ... data to create a Rider
     *   }
     * })
     * 
     */
    create<T extends RiderCreateArgs>(args: SelectSubset<T, RiderCreateArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Riders.
     * @param {RiderCreateManyArgs} args - Arguments to create many Riders.
     * @example
     * // Create many Riders
     * const rider = await prisma.rider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiderCreateManyArgs>(args?: SelectSubset<T, RiderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Riders and returns the data saved in the database.
     * @param {RiderCreateManyAndReturnArgs} args - Arguments to create many Riders.
     * @example
     * // Create many Riders
     * const rider = await prisma.rider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Riders and only return the `id`
     * const riderWithIdOnly = await prisma.rider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiderCreateManyAndReturnArgs>(args?: SelectSubset<T, RiderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rider.
     * @param {RiderDeleteArgs} args - Arguments to delete one Rider.
     * @example
     * // Delete one Rider
     * const Rider = await prisma.rider.delete({
     *   where: {
     *     // ... filter to delete one Rider
     *   }
     * })
     * 
     */
    delete<T extends RiderDeleteArgs>(args: SelectSubset<T, RiderDeleteArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rider.
     * @param {RiderUpdateArgs} args - Arguments to update one Rider.
     * @example
     * // Update one Rider
     * const rider = await prisma.rider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiderUpdateArgs>(args: SelectSubset<T, RiderUpdateArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Riders.
     * @param {RiderDeleteManyArgs} args - Arguments to filter Riders to delete.
     * @example
     * // Delete a few Riders
     * const { count } = await prisma.rider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiderDeleteManyArgs>(args?: SelectSubset<T, RiderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Riders
     * const rider = await prisma.rider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiderUpdateManyArgs>(args: SelectSubset<T, RiderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Riders and returns the data updated in the database.
     * @param {RiderUpdateManyAndReturnArgs} args - Arguments to update many Riders.
     * @example
     * // Update many Riders
     * const rider = await prisma.rider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Riders and only return the `id`
     * const riderWithIdOnly = await prisma.rider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RiderUpdateManyAndReturnArgs>(args: SelectSubset<T, RiderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rider.
     * @param {RiderUpsertArgs} args - Arguments to update or create a Rider.
     * @example
     * // Update or create a Rider
     * const rider = await prisma.rider.upsert({
     *   create: {
     *     // ... data to create a Rider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rider we want to update
     *   }
     * })
     */
    upsert<T extends RiderUpsertArgs>(args: SelectSubset<T, RiderUpsertArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderCountArgs} args - Arguments to filter Riders to count.
     * @example
     * // Count the number of Riders
     * const count = await prisma.rider.count({
     *   where: {
     *     // ... the filter for the Riders we want to count
     *   }
     * })
    **/
    count<T extends RiderCountArgs>(
      args?: Subset<T, RiderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiderAggregateArgs>(args: Subset<T, RiderAggregateArgs>): Prisma.PrismaPromise<GetRiderAggregateType<T>>

    /**
     * Group by Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiderGroupByArgs['orderBy'] }
        : { orderBy?: RiderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rider model
   */
  readonly fields: RiderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Rider$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Rider$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rider model
   */
  interface RiderFieldRefs {
    readonly id: FieldRef<"Rider", 'String'>
    readonly clerkUserId: FieldRef<"Rider", 'String'>
    readonly phone: FieldRef<"Rider", 'String'>
    readonly vehicleType: FieldRef<"Rider", 'VehicleType'>
    readonly isAvailable: FieldRef<"Rider", 'Boolean'>
    readonly status: FieldRef<"Rider", 'RiderStatus'>
    readonly createdAt: FieldRef<"Rider", 'DateTime'>
    readonly updatedAt: FieldRef<"Rider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rider findUnique
   */
  export type RiderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider findUniqueOrThrow
   */
  export type RiderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider findFirst
   */
  export type RiderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider findFirstOrThrow
   */
  export type RiderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider findMany
   */
  export type RiderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Riders to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider create
   */
  export type RiderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to create a Rider.
     */
    data: XOR<RiderCreateInput, RiderUncheckedCreateInput>
  }

  /**
   * Rider createMany
   */
  export type RiderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Riders.
     */
    data: RiderCreateManyInput | RiderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rider createManyAndReturn
   */
  export type RiderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * The data used to create many Riders.
     */
    data: RiderCreateManyInput | RiderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rider update
   */
  export type RiderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to update a Rider.
     */
    data: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
    /**
     * Choose, which Rider to update.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider updateMany
   */
  export type RiderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Riders.
     */
    data: XOR<RiderUpdateManyMutationInput, RiderUncheckedUpdateManyInput>
    /**
     * Filter which Riders to update
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to update.
     */
    limit?: number
  }

  /**
   * Rider updateManyAndReturn
   */
  export type RiderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * The data used to update Riders.
     */
    data: XOR<RiderUpdateManyMutationInput, RiderUncheckedUpdateManyInput>
    /**
     * Filter which Riders to update
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to update.
     */
    limit?: number
  }

  /**
   * Rider upsert
   */
  export type RiderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The filter to search for the Rider to update in case it exists.
     */
    where: RiderWhereUniqueInput
    /**
     * In case the Rider found by the `where` argument doesn't exist, create a new Rider with this data.
     */
    create: XOR<RiderCreateInput, RiderUncheckedCreateInput>
    /**
     * In case the Rider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
  }

  /**
   * Rider delete
   */
  export type RiderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter which Rider to delete.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider deleteMany
   */
  export type RiderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Riders to delete
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to delete.
     */
    limit?: number
  }

  /**
   * Rider.orders
   */
  export type Rider$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Rider without action
   */
  export type RiderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    vendorId: string | null
    riderId: string | null
    status: $Enums.OrderStatus | null
    totalAmount: Decimal | null
    deliveryAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
    packTypeId: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    vendorId: string | null
    riderId: string | null
    status: $Enums.OrderStatus | null
    totalAmount: Decimal | null
    deliveryAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
    packTypeId: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    clerkUserId: number
    vendorId: number
    riderId: number
    status: number
    totalAmount: number
    deliveryAddress: number
    createdAt: number
    updatedAt: number
    packTypeId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    totalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    vendorId?: true
    riderId?: true
    status?: true
    totalAmount?: true
    deliveryAddress?: true
    createdAt?: true
    updatedAt?: true
    packTypeId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    vendorId?: true
    riderId?: true
    status?: true
    totalAmount?: true
    deliveryAddress?: true
    createdAt?: true
    updatedAt?: true
    packTypeId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    vendorId?: true
    riderId?: true
    status?: true
    totalAmount?: true
    deliveryAddress?: true
    createdAt?: true
    updatedAt?: true
    packTypeId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    clerkUserId: string
    vendorId: string
    riderId: string | null
    status: $Enums.OrderStatus
    totalAmount: Decimal
    deliveryAddress: string
    createdAt: Date
    updatedAt: Date
    packTypeId: string | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    vendorId?: boolean
    riderId?: boolean
    status?: boolean
    totalAmount?: boolean
    deliveryAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    packTypeId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    rider?: boolean | Order$riderArgs<ExtArgs>
    packType?: boolean | Order$packTypeArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    vendorId?: boolean
    riderId?: boolean
    status?: boolean
    totalAmount?: boolean
    deliveryAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    packTypeId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    rider?: boolean | Order$riderArgs<ExtArgs>
    packType?: boolean | Order$packTypeArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    vendorId?: boolean
    riderId?: boolean
    status?: boolean
    totalAmount?: boolean
    deliveryAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    packTypeId?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    rider?: boolean | Order$riderArgs<ExtArgs>
    packType?: boolean | Order$packTypeArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    vendorId?: boolean
    riderId?: boolean
    status?: boolean
    totalAmount?: boolean
    deliveryAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    packTypeId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "vendorId" | "riderId" | "status" | "totalAmount" | "deliveryAddress" | "createdAt" | "updatedAt" | "packTypeId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    rider?: boolean | Order$riderArgs<ExtArgs>
    packType?: boolean | Order$packTypeArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    rider?: boolean | Order$riderArgs<ExtArgs>
    packType?: boolean | Order$packTypeArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    rider?: boolean | Order$riderArgs<ExtArgs>
    packType?: boolean | Order$packTypeArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      rider: Prisma.$RiderPayload<ExtArgs> | null
      packType: Prisma.$PackTypePayload<ExtArgs> | null
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      vendorId: string
      riderId: string | null
      status: $Enums.OrderStatus
      totalAmount: Prisma.Decimal
      deliveryAddress: string
      createdAt: Date
      updatedAt: Date
      packTypeId: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rider<T extends Order$riderArgs<ExtArgs> = {}>(args?: Subset<T, Order$riderArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    packType<T extends Order$packTypeArgs<ExtArgs> = {}>(args?: Subset<T, Order$packTypeArgs<ExtArgs>>): Prisma__PackTypeClient<$Result.GetResult<Prisma.$PackTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly clerkUserId: FieldRef<"Order", 'String'>
    readonly vendorId: FieldRef<"Order", 'String'>
    readonly riderId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly totalAmount: FieldRef<"Order", 'Decimal'>
    readonly deliveryAddress: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly packTypeId: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.rider
   */
  export type Order$riderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    where?: RiderWhereInput
  }

  /**
   * Order.packType
   */
  export type Order$packTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackType
     */
    select?: PackTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackType
     */
    omit?: PackTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackTypeInclude<ExtArgs> | null
    where?: PackTypeWhereInput
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    menuItemId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    proteinOptionId: string | null
    createdAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    menuItemId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    proteinOptionId: string | null
    createdAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    menuItemId: number
    quantity: number
    unitPrice: number
    proteinOptionId: number
    createdAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
    unitPrice?: true
    proteinOptionId?: true
    createdAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
    unitPrice?: true
    proteinOptionId?: true
    createdAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
    unitPrice?: true
    proteinOptionId?: true
    createdAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    menuItemId: string
    quantity: number
    unitPrice: Decimal
    proteinOptionId: string | null
    createdAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    proteinOptionId?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    proteinOption?: boolean | OrderItem$proteinOptionArgs<ExtArgs>
    orderItemSides?: boolean | OrderItem$orderItemSidesArgs<ExtArgs>
    orderItemCarbs?: boolean | OrderItem$orderItemCarbsArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    proteinOptionId?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    proteinOption?: boolean | OrderItem$proteinOptionArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    proteinOptionId?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    proteinOption?: boolean | OrderItem$proteinOptionArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    proteinOptionId?: boolean
    createdAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "menuItemId" | "quantity" | "unitPrice" | "proteinOptionId" | "createdAt", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    proteinOption?: boolean | OrderItem$proteinOptionArgs<ExtArgs>
    orderItemSides?: boolean | OrderItem$orderItemSidesArgs<ExtArgs>
    orderItemCarbs?: boolean | OrderItem$orderItemCarbsArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    proteinOption?: boolean | OrderItem$proteinOptionArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    proteinOption?: boolean | OrderItem$proteinOptionArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
      proteinOption: Prisma.$ProteinOptionPayload<ExtArgs> | null
      orderItemSides: Prisma.$OrderItemSidePayload<ExtArgs>[]
      orderItemCarbs: Prisma.$OrderItemCarbPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      menuItemId: string
      quantity: number
      unitPrice: Prisma.Decimal
      proteinOptionId: string | null
      createdAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proteinOption<T extends OrderItem$proteinOptionArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$proteinOptionArgs<ExtArgs>>): Prisma__ProteinOptionClient<$Result.GetResult<Prisma.$ProteinOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orderItemSides<T extends OrderItem$orderItemSidesArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$orderItemSidesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemSidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItemCarbs<T extends OrderItem$orderItemCarbsArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$orderItemCarbsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemCarbPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly menuItemId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly proteinOptionId: FieldRef<"OrderItem", 'String'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem.proteinOption
   */
  export type OrderItem$proteinOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProteinOption
     */
    select?: ProteinOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProteinOption
     */
    omit?: ProteinOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProteinOptionInclude<ExtArgs> | null
    where?: ProteinOptionWhereInput
  }

  /**
   * OrderItem.orderItemSides
   */
  export type OrderItem$orderItemSidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemSide
     */
    select?: OrderItemSideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemSide
     */
    omit?: OrderItemSideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemSideInclude<ExtArgs> | null
    where?: OrderItemSideWhereInput
    orderBy?: OrderItemSideOrderByWithRelationInput | OrderItemSideOrderByWithRelationInput[]
    cursor?: OrderItemSideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemSideScalarFieldEnum | OrderItemSideScalarFieldEnum[]
  }

  /**
   * OrderItem.orderItemCarbs
   */
  export type OrderItem$orderItemCarbsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCarb
     */
    select?: OrderItemCarbSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemCarb
     */
    omit?: OrderItemCarbOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemCarbInclude<ExtArgs> | null
    where?: OrderItemCarbWhereInput
    orderBy?: OrderItemCarbOrderByWithRelationInput | OrderItemCarbOrderByWithRelationInput[]
    cursor?: OrderItemCarbWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemCarbScalarFieldEnum | OrderItemCarbScalarFieldEnum[]
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VendorScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    logo: 'logo',
    address: 'address',
    state: 'state',
    localGovernmentArea: 'localGovernmentArea',
    phoneNumber: 'phoneNumber',
    cuisineType: 'cuisineType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    images: 'images',
    backUpPhoneNumber: 'backUpPhoneNumber',
    email: 'email',
    adminNote: 'adminNote',
    closeOpenStatus: 'closeOpenStatus',
    minimumPrice: 'minimumPrice'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    vendorId: 'vendorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    categoryId: 'categoryId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    price: 'price',
    image: 'image',
    isAvailable: 'isAvailable',
    discount: 'discount',
    addProteinOptions: 'addProteinOptions',
    addCarbohydrateOptions: 'addCarbohydrateOptions',
    addSides: 'addSides',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const CarbOptionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    extraPrice: 'extraPrice',
    isAvailable: 'isAvailable',
    vendorId: 'vendorId'
  };

  export type CarbOptionScalarFieldEnum = (typeof CarbOptionScalarFieldEnum)[keyof typeof CarbOptionScalarFieldEnum]


  export const PackTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    extraPrice: 'extraPrice',
    isAvailable: 'isAvailable',
    vendorId: 'vendorId'
  };

  export type PackTypeScalarFieldEnum = (typeof PackTypeScalarFieldEnum)[keyof typeof PackTypeScalarFieldEnum]


  export const OrderItemCarbScalarFieldEnum: {
    id: 'id',
    orderItemId: 'orderItemId',
    carbOptionId: 'carbOptionId'
  };

  export type OrderItemCarbScalarFieldEnum = (typeof OrderItemCarbScalarFieldEnum)[keyof typeof OrderItemCarbScalarFieldEnum]


  export const SideOptionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    extraPrice: 'extraPrice',
    isAvailable: 'isAvailable',
    vendorId: 'vendorId'
  };

  export type SideOptionScalarFieldEnum = (typeof SideOptionScalarFieldEnum)[keyof typeof SideOptionScalarFieldEnum]


  export const OrderItemSideScalarFieldEnum: {
    id: 'id',
    orderItemId: 'orderItemId',
    sideOptionId: 'sideOptionId'
  };

  export type OrderItemSideScalarFieldEnum = (typeof OrderItemSideScalarFieldEnum)[keyof typeof OrderItemSideScalarFieldEnum]


  export const ProteinOptionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    extraPrice: 'extraPrice',
    isAvailable: 'isAvailable',
    vendorId: 'vendorId'
  };

  export type ProteinOptionScalarFieldEnum = (typeof ProteinOptionScalarFieldEnum)[keyof typeof ProteinOptionScalarFieldEnum]


  export const RiderScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    phone: 'phone',
    vehicleType: 'vehicleType',
    isAvailable: 'isAvailable',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RiderScalarFieldEnum = (typeof RiderScalarFieldEnum)[keyof typeof RiderScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    vendorId: 'vendorId',
    riderId: 'riderId',
    status: 'status',
    totalAmount: 'totalAmount',
    deliveryAddress: 'deliveryAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    packTypeId: 'packTypeId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    menuItemId: 'menuItemId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    proteinOptionId: 'proteinOptionId',
    createdAt: 'createdAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'VendorStatus'
   */
  export type EnumVendorStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VendorStatus'>
    


  /**
   * Reference to a field of type 'VendorStatus[]'
   */
  export type ListEnumVendorStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VendorStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>
    


  /**
   * Reference to a field of type 'RiderStatus'
   */
  export type EnumRiderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiderStatus'>
    


  /**
   * Reference to a field of type 'RiderStatus[]'
   */
  export type ListEnumRiderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiderStatus[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: StringFilter<"Vendor"> | string
    clerkUserId?: StringFilter<"Vendor"> | string
    name?: StringFilter<"Vendor"> | string
    slug?: StringFilter<"Vendor"> | string
    description?: StringFilter<"Vendor"> | string
    logo?: StringFilter<"Vendor"> | string
    address?: StringFilter<"Vendor"> | string
    state?: StringFilter<"Vendor"> | string
    localGovernmentArea?: StringFilter<"Vendor"> | string
    phoneNumber?: StringFilter<"Vendor"> | string
    cuisineType?: StringNullableListFilter<"Vendor">
    status?: EnumVendorStatusFilter<"Vendor"> | $Enums.VendorStatus
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    images?: StringNullableListFilter<"Vendor">
    backUpPhoneNumber?: StringNullableFilter<"Vendor"> | string | null
    email?: StringFilter<"Vendor"> | string
    adminNote?: StringNullableFilter<"Vendor"> | string | null
    closeOpenStatus?: BoolFilter<"Vendor"> | boolean
    minimumPrice?: DecimalNullableFilter<"Vendor"> | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemListRelationFilter
    categories?: CategoryListRelationFilter
    orders?: OrderListRelationFilter
    packTypes?: PackTypeListRelationFilter
    proteinOptions?: ProteinOptionListRelationFilter
    sideOptions?: SideOptionListRelationFilter
    carbOptions?: CarbOptionListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    state?: SortOrder
    localGovernmentArea?: SortOrder
    phoneNumber?: SortOrder
    cuisineType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: SortOrder
    backUpPhoneNumber?: SortOrderInput | SortOrder
    email?: SortOrder
    adminNote?: SortOrderInput | SortOrder
    closeOpenStatus?: SortOrder
    minimumPrice?: SortOrderInput | SortOrder
    menuItems?: MenuItemOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    packTypes?: PackTypeOrderByRelationAggregateInput
    proteinOptions?: ProteinOptionOrderByRelationAggregateInput
    sideOptions?: SideOptionOrderByRelationAggregateInput
    carbOptions?: CarbOptionOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    name?: StringFilter<"Vendor"> | string
    slug?: StringFilter<"Vendor"> | string
    description?: StringFilter<"Vendor"> | string
    logo?: StringFilter<"Vendor"> | string
    address?: StringFilter<"Vendor"> | string
    state?: StringFilter<"Vendor"> | string
    localGovernmentArea?: StringFilter<"Vendor"> | string
    phoneNumber?: StringFilter<"Vendor"> | string
    cuisineType?: StringNullableListFilter<"Vendor">
    status?: EnumVendorStatusFilter<"Vendor"> | $Enums.VendorStatus
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    images?: StringNullableListFilter<"Vendor">
    backUpPhoneNumber?: StringNullableFilter<"Vendor"> | string | null
    email?: StringFilter<"Vendor"> | string
    adminNote?: StringNullableFilter<"Vendor"> | string | null
    closeOpenStatus?: BoolFilter<"Vendor"> | boolean
    minimumPrice?: DecimalNullableFilter<"Vendor"> | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemListRelationFilter
    categories?: CategoryListRelationFilter
    orders?: OrderListRelationFilter
    packTypes?: PackTypeListRelationFilter
    proteinOptions?: ProteinOptionListRelationFilter
    sideOptions?: SideOptionListRelationFilter
    carbOptions?: CarbOptionListRelationFilter
  }, "id" | "clerkUserId">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    state?: SortOrder
    localGovernmentArea?: SortOrder
    phoneNumber?: SortOrder
    cuisineType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: SortOrder
    backUpPhoneNumber?: SortOrderInput | SortOrder
    email?: SortOrder
    adminNote?: SortOrderInput | SortOrder
    closeOpenStatus?: SortOrder
    minimumPrice?: SortOrderInput | SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendor"> | string
    clerkUserId?: StringWithAggregatesFilter<"Vendor"> | string
    name?: StringWithAggregatesFilter<"Vendor"> | string
    slug?: StringWithAggregatesFilter<"Vendor"> | string
    description?: StringWithAggregatesFilter<"Vendor"> | string
    logo?: StringWithAggregatesFilter<"Vendor"> | string
    address?: StringWithAggregatesFilter<"Vendor"> | string
    state?: StringWithAggregatesFilter<"Vendor"> | string
    localGovernmentArea?: StringWithAggregatesFilter<"Vendor"> | string
    phoneNumber?: StringWithAggregatesFilter<"Vendor"> | string
    cuisineType?: StringNullableListFilter<"Vendor">
    status?: EnumVendorStatusWithAggregatesFilter<"Vendor"> | $Enums.VendorStatus
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    images?: StringNullableListFilter<"Vendor">
    backUpPhoneNumber?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    email?: StringWithAggregatesFilter<"Vendor"> | string
    adminNote?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    closeOpenStatus?: BoolWithAggregatesFilter<"Vendor"> | boolean
    minimumPrice?: DecimalNullableWithAggregatesFilter<"Vendor"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    vendorId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    menuItems?: MenuItemListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    menuItems?: MenuItemOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vendorId_name?: CategoryVendorIdNameCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    vendorId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    menuItems?: MenuItemListRelationFilter
  }, "id" | "vendorId_name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    vendorId?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    vendorId?: StringFilter<"MenuItem"> | string
    categoryId?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    slug?: StringFilter<"MenuItem"> | string
    description?: StringFilter<"MenuItem"> | string
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    image?: StringFilter<"MenuItem"> | string
    isAvailable?: BoolFilter<"MenuItem"> | boolean
    discount?: FloatNullableFilter<"MenuItem"> | number | null
    addProteinOptions?: BoolFilter<"MenuItem"> | boolean
    addCarbohydrateOptions?: BoolFilter<"MenuItem"> | boolean
    addSides?: BoolFilter<"MenuItem"> | boolean
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    orderItems?: OrderItemListRelationFilter
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    isAvailable?: SortOrder
    discount?: SortOrderInput | SortOrder
    addProteinOptions?: SortOrder
    addCarbohydrateOptions?: SortOrder
    addSides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    vendorId?: StringFilter<"MenuItem"> | string
    categoryId?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    slug?: StringFilter<"MenuItem"> | string
    description?: StringFilter<"MenuItem"> | string
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    image?: StringFilter<"MenuItem"> | string
    isAvailable?: BoolFilter<"MenuItem"> | boolean
    discount?: FloatNullableFilter<"MenuItem"> | number | null
    addProteinOptions?: BoolFilter<"MenuItem"> | boolean
    addCarbohydrateOptions?: BoolFilter<"MenuItem"> | boolean
    addSides?: BoolFilter<"MenuItem"> | boolean
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    isAvailable?: SortOrder
    discount?: SortOrderInput | SortOrder
    addProteinOptions?: SortOrder
    addCarbohydrateOptions?: SortOrder
    addSides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuItem"> | string
    vendorId?: StringWithAggregatesFilter<"MenuItem"> | string
    categoryId?: StringWithAggregatesFilter<"MenuItem"> | string
    name?: StringWithAggregatesFilter<"MenuItem"> | string
    slug?: StringWithAggregatesFilter<"MenuItem"> | string
    description?: StringWithAggregatesFilter<"MenuItem"> | string
    price?: DecimalWithAggregatesFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    image?: StringWithAggregatesFilter<"MenuItem"> | string
    isAvailable?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    discount?: FloatNullableWithAggregatesFilter<"MenuItem"> | number | null
    addProteinOptions?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    addCarbohydrateOptions?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    addSides?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
  }

  export type CarbOptionWhereInput = {
    AND?: CarbOptionWhereInput | CarbOptionWhereInput[]
    OR?: CarbOptionWhereInput[]
    NOT?: CarbOptionWhereInput | CarbOptionWhereInput[]
    id?: StringFilter<"CarbOption"> | string
    name?: StringFilter<"CarbOption"> | string
    slug?: StringFilter<"CarbOption"> | string
    extraPrice?: IntFilter<"CarbOption"> | number
    isAvailable?: BoolFilter<"CarbOption"> | boolean
    vendorId?: StringFilter<"CarbOption"> | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    orderItemCarbs?: OrderItemCarbListRelationFilter
  }

  export type CarbOptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    orderItemCarbs?: OrderItemCarbOrderByRelationAggregateInput
  }

  export type CarbOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarbOptionWhereInput | CarbOptionWhereInput[]
    OR?: CarbOptionWhereInput[]
    NOT?: CarbOptionWhereInput | CarbOptionWhereInput[]
    name?: StringFilter<"CarbOption"> | string
    slug?: StringFilter<"CarbOption"> | string
    extraPrice?: IntFilter<"CarbOption"> | number
    isAvailable?: BoolFilter<"CarbOption"> | boolean
    vendorId?: StringFilter<"CarbOption"> | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    orderItemCarbs?: OrderItemCarbListRelationFilter
  }, "id">

  export type CarbOptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
    _count?: CarbOptionCountOrderByAggregateInput
    _avg?: CarbOptionAvgOrderByAggregateInput
    _max?: CarbOptionMaxOrderByAggregateInput
    _min?: CarbOptionMinOrderByAggregateInput
    _sum?: CarbOptionSumOrderByAggregateInput
  }

  export type CarbOptionScalarWhereWithAggregatesInput = {
    AND?: CarbOptionScalarWhereWithAggregatesInput | CarbOptionScalarWhereWithAggregatesInput[]
    OR?: CarbOptionScalarWhereWithAggregatesInput[]
    NOT?: CarbOptionScalarWhereWithAggregatesInput | CarbOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CarbOption"> | string
    name?: StringWithAggregatesFilter<"CarbOption"> | string
    slug?: StringWithAggregatesFilter<"CarbOption"> | string
    extraPrice?: IntWithAggregatesFilter<"CarbOption"> | number
    isAvailable?: BoolWithAggregatesFilter<"CarbOption"> | boolean
    vendorId?: StringWithAggregatesFilter<"CarbOption"> | string
  }

  export type PackTypeWhereInput = {
    AND?: PackTypeWhereInput | PackTypeWhereInput[]
    OR?: PackTypeWhereInput[]
    NOT?: PackTypeWhereInput | PackTypeWhereInput[]
    id?: StringFilter<"PackType"> | string
    name?: StringFilter<"PackType"> | string
    slug?: StringFilter<"PackType"> | string
    extraPrice?: IntFilter<"PackType"> | number
    isAvailable?: BoolFilter<"PackType"> | boolean
    vendorId?: StringFilter<"PackType"> | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    orders?: OrderListRelationFilter
  }

  export type PackTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type PackTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackTypeWhereInput | PackTypeWhereInput[]
    OR?: PackTypeWhereInput[]
    NOT?: PackTypeWhereInput | PackTypeWhereInput[]
    name?: StringFilter<"PackType"> | string
    slug?: StringFilter<"PackType"> | string
    extraPrice?: IntFilter<"PackType"> | number
    isAvailable?: BoolFilter<"PackType"> | boolean
    vendorId?: StringFilter<"PackType"> | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    orders?: OrderListRelationFilter
  }, "id">

  export type PackTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
    _count?: PackTypeCountOrderByAggregateInput
    _avg?: PackTypeAvgOrderByAggregateInput
    _max?: PackTypeMaxOrderByAggregateInput
    _min?: PackTypeMinOrderByAggregateInput
    _sum?: PackTypeSumOrderByAggregateInput
  }

  export type PackTypeScalarWhereWithAggregatesInput = {
    AND?: PackTypeScalarWhereWithAggregatesInput | PackTypeScalarWhereWithAggregatesInput[]
    OR?: PackTypeScalarWhereWithAggregatesInput[]
    NOT?: PackTypeScalarWhereWithAggregatesInput | PackTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackType"> | string
    name?: StringWithAggregatesFilter<"PackType"> | string
    slug?: StringWithAggregatesFilter<"PackType"> | string
    extraPrice?: IntWithAggregatesFilter<"PackType"> | number
    isAvailable?: BoolWithAggregatesFilter<"PackType"> | boolean
    vendorId?: StringWithAggregatesFilter<"PackType"> | string
  }

  export type OrderItemCarbWhereInput = {
    AND?: OrderItemCarbWhereInput | OrderItemCarbWhereInput[]
    OR?: OrderItemCarbWhereInput[]
    NOT?: OrderItemCarbWhereInput | OrderItemCarbWhereInput[]
    id?: StringFilter<"OrderItemCarb"> | string
    orderItemId?: StringFilter<"OrderItemCarb"> | string
    carbOptionId?: StringFilter<"OrderItemCarb"> | string
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>
    carbOption?: XOR<CarbOptionScalarRelationFilter, CarbOptionWhereInput>
  }

  export type OrderItemCarbOrderByWithRelationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    carbOptionId?: SortOrder
    orderItem?: OrderItemOrderByWithRelationInput
    carbOption?: CarbOptionOrderByWithRelationInput
  }

  export type OrderItemCarbWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderItemId_carbOptionId?: OrderItemCarbOrderItemIdCarbOptionIdCompoundUniqueInput
    AND?: OrderItemCarbWhereInput | OrderItemCarbWhereInput[]
    OR?: OrderItemCarbWhereInput[]
    NOT?: OrderItemCarbWhereInput | OrderItemCarbWhereInput[]
    orderItemId?: StringFilter<"OrderItemCarb"> | string
    carbOptionId?: StringFilter<"OrderItemCarb"> | string
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>
    carbOption?: XOR<CarbOptionScalarRelationFilter, CarbOptionWhereInput>
  }, "id" | "orderItemId_carbOptionId">

  export type OrderItemCarbOrderByWithAggregationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    carbOptionId?: SortOrder
    _count?: OrderItemCarbCountOrderByAggregateInput
    _max?: OrderItemCarbMaxOrderByAggregateInput
    _min?: OrderItemCarbMinOrderByAggregateInput
  }

  export type OrderItemCarbScalarWhereWithAggregatesInput = {
    AND?: OrderItemCarbScalarWhereWithAggregatesInput | OrderItemCarbScalarWhereWithAggregatesInput[]
    OR?: OrderItemCarbScalarWhereWithAggregatesInput[]
    NOT?: OrderItemCarbScalarWhereWithAggregatesInput | OrderItemCarbScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItemCarb"> | string
    orderItemId?: StringWithAggregatesFilter<"OrderItemCarb"> | string
    carbOptionId?: StringWithAggregatesFilter<"OrderItemCarb"> | string
  }

  export type SideOptionWhereInput = {
    AND?: SideOptionWhereInput | SideOptionWhereInput[]
    OR?: SideOptionWhereInput[]
    NOT?: SideOptionWhereInput | SideOptionWhereInput[]
    id?: StringFilter<"SideOption"> | string
    name?: StringFilter<"SideOption"> | string
    slug?: StringFilter<"SideOption"> | string
    extraPrice?: IntFilter<"SideOption"> | number
    isAvailable?: BoolFilter<"SideOption"> | boolean
    vendorId?: StringFilter<"SideOption"> | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    orderItemSides?: OrderItemSideListRelationFilter
  }

  export type SideOptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    orderItemSides?: OrderItemSideOrderByRelationAggregateInput
  }

  export type SideOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SideOptionWhereInput | SideOptionWhereInput[]
    OR?: SideOptionWhereInput[]
    NOT?: SideOptionWhereInput | SideOptionWhereInput[]
    name?: StringFilter<"SideOption"> | string
    slug?: StringFilter<"SideOption"> | string
    extraPrice?: IntFilter<"SideOption"> | number
    isAvailable?: BoolFilter<"SideOption"> | boolean
    vendorId?: StringFilter<"SideOption"> | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    orderItemSides?: OrderItemSideListRelationFilter
  }, "id">

  export type SideOptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
    _count?: SideOptionCountOrderByAggregateInput
    _avg?: SideOptionAvgOrderByAggregateInput
    _max?: SideOptionMaxOrderByAggregateInput
    _min?: SideOptionMinOrderByAggregateInput
    _sum?: SideOptionSumOrderByAggregateInput
  }

  export type SideOptionScalarWhereWithAggregatesInput = {
    AND?: SideOptionScalarWhereWithAggregatesInput | SideOptionScalarWhereWithAggregatesInput[]
    OR?: SideOptionScalarWhereWithAggregatesInput[]
    NOT?: SideOptionScalarWhereWithAggregatesInput | SideOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SideOption"> | string
    name?: StringWithAggregatesFilter<"SideOption"> | string
    slug?: StringWithAggregatesFilter<"SideOption"> | string
    extraPrice?: IntWithAggregatesFilter<"SideOption"> | number
    isAvailable?: BoolWithAggregatesFilter<"SideOption"> | boolean
    vendorId?: StringWithAggregatesFilter<"SideOption"> | string
  }

  export type OrderItemSideWhereInput = {
    AND?: OrderItemSideWhereInput | OrderItemSideWhereInput[]
    OR?: OrderItemSideWhereInput[]
    NOT?: OrderItemSideWhereInput | OrderItemSideWhereInput[]
    id?: StringFilter<"OrderItemSide"> | string
    orderItemId?: StringFilter<"OrderItemSide"> | string
    sideOptionId?: StringFilter<"OrderItemSide"> | string
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>
    sideOption?: XOR<SideOptionScalarRelationFilter, SideOptionWhereInput>
  }

  export type OrderItemSideOrderByWithRelationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    sideOptionId?: SortOrder
    orderItem?: OrderItemOrderByWithRelationInput
    sideOption?: SideOptionOrderByWithRelationInput
  }

  export type OrderItemSideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderItemId_sideOptionId?: OrderItemSideOrderItemIdSideOptionIdCompoundUniqueInput
    AND?: OrderItemSideWhereInput | OrderItemSideWhereInput[]
    OR?: OrderItemSideWhereInput[]
    NOT?: OrderItemSideWhereInput | OrderItemSideWhereInput[]
    orderItemId?: StringFilter<"OrderItemSide"> | string
    sideOptionId?: StringFilter<"OrderItemSide"> | string
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>
    sideOption?: XOR<SideOptionScalarRelationFilter, SideOptionWhereInput>
  }, "id" | "orderItemId_sideOptionId">

  export type OrderItemSideOrderByWithAggregationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    sideOptionId?: SortOrder
    _count?: OrderItemSideCountOrderByAggregateInput
    _max?: OrderItemSideMaxOrderByAggregateInput
    _min?: OrderItemSideMinOrderByAggregateInput
  }

  export type OrderItemSideScalarWhereWithAggregatesInput = {
    AND?: OrderItemSideScalarWhereWithAggregatesInput | OrderItemSideScalarWhereWithAggregatesInput[]
    OR?: OrderItemSideScalarWhereWithAggregatesInput[]
    NOT?: OrderItemSideScalarWhereWithAggregatesInput | OrderItemSideScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItemSide"> | string
    orderItemId?: StringWithAggregatesFilter<"OrderItemSide"> | string
    sideOptionId?: StringWithAggregatesFilter<"OrderItemSide"> | string
  }

  export type ProteinOptionWhereInput = {
    AND?: ProteinOptionWhereInput | ProteinOptionWhereInput[]
    OR?: ProteinOptionWhereInput[]
    NOT?: ProteinOptionWhereInput | ProteinOptionWhereInput[]
    id?: StringFilter<"ProteinOption"> | string
    name?: StringFilter<"ProteinOption"> | string
    slug?: StringFilter<"ProteinOption"> | string
    extraPrice?: IntFilter<"ProteinOption"> | number
    isAvailable?: BoolFilter<"ProteinOption"> | boolean
    vendorId?: StringFilter<"ProteinOption"> | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    orderItems?: OrderItemListRelationFilter
  }

  export type ProteinOptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type ProteinOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProteinOptionWhereInput | ProteinOptionWhereInput[]
    OR?: ProteinOptionWhereInput[]
    NOT?: ProteinOptionWhereInput | ProteinOptionWhereInput[]
    name?: StringFilter<"ProteinOption"> | string
    slug?: StringFilter<"ProteinOption"> | string
    extraPrice?: IntFilter<"ProteinOption"> | number
    isAvailable?: BoolFilter<"ProteinOption"> | boolean
    vendorId?: StringFilter<"ProteinOption"> | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type ProteinOptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
    _count?: ProteinOptionCountOrderByAggregateInput
    _avg?: ProteinOptionAvgOrderByAggregateInput
    _max?: ProteinOptionMaxOrderByAggregateInput
    _min?: ProteinOptionMinOrderByAggregateInput
    _sum?: ProteinOptionSumOrderByAggregateInput
  }

  export type ProteinOptionScalarWhereWithAggregatesInput = {
    AND?: ProteinOptionScalarWhereWithAggregatesInput | ProteinOptionScalarWhereWithAggregatesInput[]
    OR?: ProteinOptionScalarWhereWithAggregatesInput[]
    NOT?: ProteinOptionScalarWhereWithAggregatesInput | ProteinOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProteinOption"> | string
    name?: StringWithAggregatesFilter<"ProteinOption"> | string
    slug?: StringWithAggregatesFilter<"ProteinOption"> | string
    extraPrice?: IntWithAggregatesFilter<"ProteinOption"> | number
    isAvailable?: BoolWithAggregatesFilter<"ProteinOption"> | boolean
    vendorId?: StringWithAggregatesFilter<"ProteinOption"> | string
  }

  export type RiderWhereInput = {
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    id?: StringFilter<"Rider"> | string
    clerkUserId?: StringFilter<"Rider"> | string
    phone?: StringFilter<"Rider"> | string
    vehicleType?: EnumVehicleTypeFilter<"Rider"> | $Enums.VehicleType
    isAvailable?: BoolFilter<"Rider"> | boolean
    status?: EnumRiderStatusFilter<"Rider"> | $Enums.RiderStatus
    createdAt?: DateTimeFilter<"Rider"> | Date | string
    updatedAt?: DateTimeFilter<"Rider"> | Date | string
    orders?: OrderListRelationFilter
  }

  export type RiderOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    isAvailable?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type RiderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    phone?: StringFilter<"Rider"> | string
    vehicleType?: EnumVehicleTypeFilter<"Rider"> | $Enums.VehicleType
    isAvailable?: BoolFilter<"Rider"> | boolean
    status?: EnumRiderStatusFilter<"Rider"> | $Enums.RiderStatus
    createdAt?: DateTimeFilter<"Rider"> | Date | string
    updatedAt?: DateTimeFilter<"Rider"> | Date | string
    orders?: OrderListRelationFilter
  }, "id" | "clerkUserId">

  export type RiderOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    isAvailable?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RiderCountOrderByAggregateInput
    _max?: RiderMaxOrderByAggregateInput
    _min?: RiderMinOrderByAggregateInput
  }

  export type RiderScalarWhereWithAggregatesInput = {
    AND?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    OR?: RiderScalarWhereWithAggregatesInput[]
    NOT?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rider"> | string
    clerkUserId?: StringWithAggregatesFilter<"Rider"> | string
    phone?: StringWithAggregatesFilter<"Rider"> | string
    vehicleType?: EnumVehicleTypeWithAggregatesFilter<"Rider"> | $Enums.VehicleType
    isAvailable?: BoolWithAggregatesFilter<"Rider"> | boolean
    status?: EnumRiderStatusWithAggregatesFilter<"Rider"> | $Enums.RiderStatus
    createdAt?: DateTimeWithAggregatesFilter<"Rider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rider"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    clerkUserId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
    riderId?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    packTypeId?: StringNullableFilter<"Order"> | string | null
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    rider?: XOR<RiderNullableScalarRelationFilter, RiderWhereInput> | null
    packType?: XOR<PackTypeNullableScalarRelationFilter, PackTypeWhereInput> | null
    orderItems?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    vendorId?: SortOrder
    riderId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    deliveryAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    packTypeId?: SortOrderInput | SortOrder
    vendor?: VendorOrderByWithRelationInput
    rider?: RiderOrderByWithRelationInput
    packType?: PackTypeOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    clerkUserId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
    riderId?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    packTypeId?: StringNullableFilter<"Order"> | string | null
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    rider?: XOR<RiderNullableScalarRelationFilter, RiderWhereInput> | null
    packType?: XOR<PackTypeNullableScalarRelationFilter, PackTypeWhereInput> | null
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    vendorId?: SortOrder
    riderId?: SortOrderInput | SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    deliveryAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    packTypeId?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    clerkUserId?: StringWithAggregatesFilter<"Order"> | string
    vendorId?: StringWithAggregatesFilter<"Order"> | string
    riderId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    packTypeId?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    proteinOptionId?: StringNullableFilter<"OrderItem"> | string | null
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    proteinOption?: XOR<ProteinOptionNullableScalarRelationFilter, ProteinOptionWhereInput> | null
    orderItemSides?: OrderItemSideListRelationFilter
    orderItemCarbs?: OrderItemCarbListRelationFilter
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    proteinOptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    menuItem?: MenuItemOrderByWithRelationInput
    proteinOption?: ProteinOptionOrderByWithRelationInput
    orderItemSides?: OrderItemSideOrderByRelationAggregateInput
    orderItemCarbs?: OrderItemCarbOrderByRelationAggregateInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    proteinOptionId?: StringNullableFilter<"OrderItem"> | string | null
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    proteinOption?: XOR<ProteinOptionNullableScalarRelationFilter, ProteinOptionWhereInput> | null
    orderItemSides?: OrderItemSideListRelationFilter
    orderItemCarbs?: OrderItemCarbListRelationFilter
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    proteinOptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    menuItemId?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    proteinOptionId?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type VendorCreateInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeUncheckedCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionUncheckedCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionUncheckedCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUpdateManyWithoutVendorNestedInput
    categories?: CategoryUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutVendorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUncheckedUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUncheckedUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUncheckedUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
  }

  export type VendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutCategoriesInput
    menuItems?: MenuItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    vendorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutCategoriesNestedInput
    menuItems?: MenuItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItems?: MenuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    vendorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    isAvailable?: boolean
    discount?: number | null
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutMenuItemsInput
    vendor: VendorCreateNestedOneWithoutMenuItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: string
    vendorId: string
    categoryId: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    isAvailable?: boolean
    discount?: number | null
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutMenuItemsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutMenuItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemCreateManyInput = {
    id?: string
    vendorId: string
    categoryId: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    isAvailable?: boolean
    discount?: number | null
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarbOptionCreateInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendor: VendorCreateNestedOneWithoutCarbOptionsInput
    orderItemCarbs?: OrderItemCarbCreateNestedManyWithoutCarbOptionInput
  }

  export type CarbOptionUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
    orderItemCarbs?: OrderItemCarbUncheckedCreateNestedManyWithoutCarbOptionInput
  }

  export type CarbOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutCarbOptionsNestedInput
    orderItemCarbs?: OrderItemCarbUpdateManyWithoutCarbOptionNestedInput
  }

  export type CarbOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    orderItemCarbs?: OrderItemCarbUncheckedUpdateManyWithoutCarbOptionNestedInput
  }

  export type CarbOptionCreateManyInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
  }

  export type CarbOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CarbOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type PackTypeCreateInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendor: VendorCreateNestedOneWithoutPackTypesInput
    orders?: OrderCreateNestedManyWithoutPackTypeInput
  }

  export type PackTypeUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
    orders?: OrderUncheckedCreateNestedManyWithoutPackTypeInput
  }

  export type PackTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutPackTypesNestedInput
    orders?: OrderUpdateManyWithoutPackTypeNestedInput
  }

  export type PackTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutPackTypeNestedInput
  }

  export type PackTypeCreateManyInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
  }

  export type PackTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PackTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCarbCreateInput = {
    id?: string
    orderItem: OrderItemCreateNestedOneWithoutOrderItemCarbsInput
    carbOption: CarbOptionCreateNestedOneWithoutOrderItemCarbsInput
  }

  export type OrderItemCarbUncheckedCreateInput = {
    id?: string
    orderItemId: string
    carbOptionId: string
  }

  export type OrderItemCarbUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItem?: OrderItemUpdateOneRequiredWithoutOrderItemCarbsNestedInput
    carbOption?: CarbOptionUpdateOneRequiredWithoutOrderItemCarbsNestedInput
  }

  export type OrderItemCarbUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    carbOptionId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCarbCreateManyInput = {
    id?: string
    orderItemId: string
    carbOptionId: string
  }

  export type OrderItemCarbUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCarbUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    carbOptionId?: StringFieldUpdateOperationsInput | string
  }

  export type SideOptionCreateInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendor: VendorCreateNestedOneWithoutSideOptionsInput
    orderItemSides?: OrderItemSideCreateNestedManyWithoutSideOptionInput
  }

  export type SideOptionUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
    orderItemSides?: OrderItemSideUncheckedCreateNestedManyWithoutSideOptionInput
  }

  export type SideOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutSideOptionsNestedInput
    orderItemSides?: OrderItemSideUpdateManyWithoutSideOptionNestedInput
  }

  export type SideOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    orderItemSides?: OrderItemSideUncheckedUpdateManyWithoutSideOptionNestedInput
  }

  export type SideOptionCreateManyInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
  }

  export type SideOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SideOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemSideCreateInput = {
    id?: string
    orderItem: OrderItemCreateNestedOneWithoutOrderItemSidesInput
    sideOption: SideOptionCreateNestedOneWithoutOrderItemSidesInput
  }

  export type OrderItemSideUncheckedCreateInput = {
    id?: string
    orderItemId: string
    sideOptionId: string
  }

  export type OrderItemSideUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItem?: OrderItemUpdateOneRequiredWithoutOrderItemSidesNestedInput
    sideOption?: SideOptionUpdateOneRequiredWithoutOrderItemSidesNestedInput
  }

  export type OrderItemSideUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    sideOptionId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemSideCreateManyInput = {
    id?: string
    orderItemId: string
    sideOptionId: string
  }

  export type OrderItemSideUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemSideUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    sideOptionId?: StringFieldUpdateOperationsInput | string
  }

  export type ProteinOptionCreateInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendor: VendorCreateNestedOneWithoutProteinOptionsInput
    orderItems?: OrderItemCreateNestedManyWithoutProteinOptionInput
  }

  export type ProteinOptionUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProteinOptionInput
  }

  export type ProteinOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutProteinOptionsNestedInput
    orderItems?: OrderItemUpdateManyWithoutProteinOptionNestedInput
  }

  export type ProteinOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProteinOptionNestedInput
  }

  export type ProteinOptionCreateManyInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
  }

  export type ProteinOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProteinOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type RiderCreateInput = {
    id?: string
    clerkUserId: string
    phone: string
    vehicleType: $Enums.VehicleType
    isAvailable?: boolean
    status?: $Enums.RiderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    phone: string
    vehicleType: $Enums.VehicleType
    isAvailable?: boolean
    status?: $Enums.RiderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRiderStatusFieldUpdateOperationsInput | $Enums.RiderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRiderStatusFieldUpdateOperationsInput | $Enums.RiderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type RiderCreateManyInput = {
    id?: string
    clerkUserId: string
    phone: string
    vehicleType: $Enums.VehicleType
    isAvailable?: boolean
    status?: $Enums.RiderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRiderStatusFieldUpdateOperationsInput | $Enums.RiderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRiderStatusFieldUpdateOperationsInput | $Enums.RiderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    clerkUserId: string
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutOrdersInput
    rider?: RiderCreateNestedOneWithoutOrdersInput
    packType?: PackTypeCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    vendorId: string
    riderId?: string | null
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    packTypeId?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutOrdersNestedInput
    rider?: RiderUpdateOneWithoutOrdersNestedInput
    packType?: PackTypeUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    riderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    clerkUserId: string
    vendorId: string
    riderId?: string | null
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    packTypeId?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    riderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packTypeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
    proteinOption?: ProteinOptionCreateNestedOneWithoutOrderItemsInput
    orderItemSides?: OrderItemSideCreateNestedManyWithoutOrderItemInput
    orderItemCarbs?: OrderItemCarbCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    menuItemId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    proteinOptionId?: string | null
    createdAt?: Date | string
    orderItemSides?: OrderItemSideUncheckedCreateNestedManyWithoutOrderItemInput
    orderItemCarbs?: OrderItemCarbUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
    proteinOption?: ProteinOptionUpdateOneWithoutOrderItemsNestedInput
    orderItemSides?: OrderItemSideUpdateManyWithoutOrderItemNestedInput
    orderItemCarbs?: OrderItemCarbUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proteinOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItemSides?: OrderItemSideUncheckedUpdateManyWithoutOrderItemNestedInput
    orderItemCarbs?: OrderItemCarbUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    menuItemId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    proteinOptionId?: string | null
    createdAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proteinOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumVendorStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorStatus | EnumVendorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VendorStatus[] | ListEnumVendorStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorStatus[] | ListEnumVendorStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorStatusFilter<$PrismaModel> | $Enums.VendorStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type PackTypeListRelationFilter = {
    every?: PackTypeWhereInput
    some?: PackTypeWhereInput
    none?: PackTypeWhereInput
  }

  export type ProteinOptionListRelationFilter = {
    every?: ProteinOptionWhereInput
    some?: ProteinOptionWhereInput
    none?: ProteinOptionWhereInput
  }

  export type SideOptionListRelationFilter = {
    every?: SideOptionWhereInput
    some?: SideOptionWhereInput
    none?: SideOptionWhereInput
  }

  export type CarbOptionListRelationFilter = {
    every?: CarbOptionWhereInput
    some?: CarbOptionWhereInput
    none?: CarbOptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProteinOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SideOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarbOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    state?: SortOrder
    localGovernmentArea?: SortOrder
    phoneNumber?: SortOrder
    cuisineType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: SortOrder
    backUpPhoneNumber?: SortOrder
    email?: SortOrder
    adminNote?: SortOrder
    closeOpenStatus?: SortOrder
    minimumPrice?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    minimumPrice?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    state?: SortOrder
    localGovernmentArea?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    backUpPhoneNumber?: SortOrder
    email?: SortOrder
    adminNote?: SortOrder
    closeOpenStatus?: SortOrder
    minimumPrice?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    state?: SortOrder
    localGovernmentArea?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    backUpPhoneNumber?: SortOrder
    email?: SortOrder
    adminNote?: SortOrder
    closeOpenStatus?: SortOrder
    minimumPrice?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    minimumPrice?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumVendorStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorStatus | EnumVendorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VendorStatus[] | ListEnumVendorStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorStatus[] | ListEnumVendorStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorStatusWithAggregatesFilter<$PrismaModel> | $Enums.VendorStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVendorStatusFilter<$PrismaModel>
    _max?: NestedEnumVendorStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type VendorScalarRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type CategoryVendorIdNameCompoundUniqueInput = {
    vendorId: string
    name: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    vendorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    isAvailable?: SortOrder
    discount?: SortOrder
    addProteinOptions?: SortOrder
    addCarbohydrateOptions?: SortOrder
    addSides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    isAvailable?: SortOrder
    discount?: SortOrder
    addProteinOptions?: SortOrder
    addCarbohydrateOptions?: SortOrder
    addSides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    isAvailable?: SortOrder
    discount?: SortOrder
    addProteinOptions?: SortOrder
    addCarbohydrateOptions?: SortOrder
    addSides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    price?: SortOrder
    discount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OrderItemCarbListRelationFilter = {
    every?: OrderItemCarbWhereInput
    some?: OrderItemCarbWhereInput
    none?: OrderItemCarbWhereInput
  }

  export type OrderItemCarbOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarbOptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type CarbOptionAvgOrderByAggregateInput = {
    extraPrice?: SortOrder
  }

  export type CarbOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type CarbOptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type CarbOptionSumOrderByAggregateInput = {
    extraPrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PackTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type PackTypeAvgOrderByAggregateInput = {
    extraPrice?: SortOrder
  }

  export type PackTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type PackTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type PackTypeSumOrderByAggregateInput = {
    extraPrice?: SortOrder
  }

  export type OrderItemScalarRelationFilter = {
    is?: OrderItemWhereInput
    isNot?: OrderItemWhereInput
  }

  export type CarbOptionScalarRelationFilter = {
    is?: CarbOptionWhereInput
    isNot?: CarbOptionWhereInput
  }

  export type OrderItemCarbOrderItemIdCarbOptionIdCompoundUniqueInput = {
    orderItemId: string
    carbOptionId: string
  }

  export type OrderItemCarbCountOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    carbOptionId?: SortOrder
  }

  export type OrderItemCarbMaxOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    carbOptionId?: SortOrder
  }

  export type OrderItemCarbMinOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    carbOptionId?: SortOrder
  }

  export type OrderItemSideListRelationFilter = {
    every?: OrderItemSideWhereInput
    some?: OrderItemSideWhereInput
    none?: OrderItemSideWhereInput
  }

  export type OrderItemSideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SideOptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type SideOptionAvgOrderByAggregateInput = {
    extraPrice?: SortOrder
  }

  export type SideOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type SideOptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type SideOptionSumOrderByAggregateInput = {
    extraPrice?: SortOrder
  }

  export type SideOptionScalarRelationFilter = {
    is?: SideOptionWhereInput
    isNot?: SideOptionWhereInput
  }

  export type OrderItemSideOrderItemIdSideOptionIdCompoundUniqueInput = {
    orderItemId: string
    sideOptionId: string
  }

  export type OrderItemSideCountOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    sideOptionId?: SortOrder
  }

  export type OrderItemSideMaxOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    sideOptionId?: SortOrder
  }

  export type OrderItemSideMinOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    sideOptionId?: SortOrder
  }

  export type ProteinOptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type ProteinOptionAvgOrderByAggregateInput = {
    extraPrice?: SortOrder
  }

  export type ProteinOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type ProteinOptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    extraPrice?: SortOrder
    isAvailable?: SortOrder
    vendorId?: SortOrder
  }

  export type ProteinOptionSumOrderByAggregateInput = {
    extraPrice?: SortOrder
  }

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type EnumRiderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RiderStatus | EnumRiderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RiderStatus[] | ListEnumRiderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiderStatus[] | ListEnumRiderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRiderStatusFilter<$PrismaModel> | $Enums.RiderStatus
  }

  export type RiderCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    isAvailable?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    isAvailable?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    isAvailable?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type EnumRiderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiderStatus | EnumRiderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RiderStatus[] | ListEnumRiderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiderStatus[] | ListEnumRiderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRiderStatusWithAggregatesFilter<$PrismaModel> | $Enums.RiderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiderStatusFilter<$PrismaModel>
    _max?: NestedEnumRiderStatusFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type RiderNullableScalarRelationFilter = {
    is?: RiderWhereInput | null
    isNot?: RiderWhereInput | null
  }

  export type PackTypeNullableScalarRelationFilter = {
    is?: PackTypeWhereInput | null
    isNot?: PackTypeWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    vendorId?: SortOrder
    riderId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    deliveryAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    packTypeId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    vendorId?: SortOrder
    riderId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    deliveryAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    packTypeId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    vendorId?: SortOrder
    riderId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    deliveryAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    packTypeId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type MenuItemScalarRelationFilter = {
    is?: MenuItemWhereInput
    isNot?: MenuItemWhereInput
  }

  export type ProteinOptionNullableScalarRelationFilter = {
    is?: ProteinOptionWhereInput | null
    isNot?: ProteinOptionWhereInput | null
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    proteinOptionId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    proteinOptionId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    proteinOptionId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type VendorCreatecuisineTypeInput = {
    set: string[]
  }

  export type VendorCreateimagesInput = {
    set: string[]
  }

  export type MenuItemCreateNestedManyWithoutVendorInput = {
    create?: XOR<MenuItemCreateWithoutVendorInput, MenuItemUncheckedCreateWithoutVendorInput> | MenuItemCreateWithoutVendorInput[] | MenuItemUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutVendorInput | MenuItemCreateOrConnectWithoutVendorInput[]
    createMany?: MenuItemCreateManyVendorInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutVendorInput = {
    create?: XOR<CategoryCreateWithoutVendorInput, CategoryUncheckedCreateWithoutVendorInput> | CategoryCreateWithoutVendorInput[] | CategoryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutVendorInput | CategoryCreateOrConnectWithoutVendorInput[]
    createMany?: CategoryCreateManyVendorInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutVendorInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PackTypeCreateNestedManyWithoutVendorInput = {
    create?: XOR<PackTypeCreateWithoutVendorInput, PackTypeUncheckedCreateWithoutVendorInput> | PackTypeCreateWithoutVendorInput[] | PackTypeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PackTypeCreateOrConnectWithoutVendorInput | PackTypeCreateOrConnectWithoutVendorInput[]
    createMany?: PackTypeCreateManyVendorInputEnvelope
    connect?: PackTypeWhereUniqueInput | PackTypeWhereUniqueInput[]
  }

  export type ProteinOptionCreateNestedManyWithoutVendorInput = {
    create?: XOR<ProteinOptionCreateWithoutVendorInput, ProteinOptionUncheckedCreateWithoutVendorInput> | ProteinOptionCreateWithoutVendorInput[] | ProteinOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProteinOptionCreateOrConnectWithoutVendorInput | ProteinOptionCreateOrConnectWithoutVendorInput[]
    createMany?: ProteinOptionCreateManyVendorInputEnvelope
    connect?: ProteinOptionWhereUniqueInput | ProteinOptionWhereUniqueInput[]
  }

  export type SideOptionCreateNestedManyWithoutVendorInput = {
    create?: XOR<SideOptionCreateWithoutVendorInput, SideOptionUncheckedCreateWithoutVendorInput> | SideOptionCreateWithoutVendorInput[] | SideOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SideOptionCreateOrConnectWithoutVendorInput | SideOptionCreateOrConnectWithoutVendorInput[]
    createMany?: SideOptionCreateManyVendorInputEnvelope
    connect?: SideOptionWhereUniqueInput | SideOptionWhereUniqueInput[]
  }

  export type CarbOptionCreateNestedManyWithoutVendorInput = {
    create?: XOR<CarbOptionCreateWithoutVendorInput, CarbOptionUncheckedCreateWithoutVendorInput> | CarbOptionCreateWithoutVendorInput[] | CarbOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: CarbOptionCreateOrConnectWithoutVendorInput | CarbOptionCreateOrConnectWithoutVendorInput[]
    createMany?: CarbOptionCreateManyVendorInputEnvelope
    connect?: CarbOptionWhereUniqueInput | CarbOptionWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<MenuItemCreateWithoutVendorInput, MenuItemUncheckedCreateWithoutVendorInput> | MenuItemCreateWithoutVendorInput[] | MenuItemUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutVendorInput | MenuItemCreateOrConnectWithoutVendorInput[]
    createMany?: MenuItemCreateManyVendorInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<CategoryCreateWithoutVendorInput, CategoryUncheckedCreateWithoutVendorInput> | CategoryCreateWithoutVendorInput[] | CategoryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutVendorInput | CategoryCreateOrConnectWithoutVendorInput[]
    createMany?: CategoryCreateManyVendorInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PackTypeUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<PackTypeCreateWithoutVendorInput, PackTypeUncheckedCreateWithoutVendorInput> | PackTypeCreateWithoutVendorInput[] | PackTypeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PackTypeCreateOrConnectWithoutVendorInput | PackTypeCreateOrConnectWithoutVendorInput[]
    createMany?: PackTypeCreateManyVendorInputEnvelope
    connect?: PackTypeWhereUniqueInput | PackTypeWhereUniqueInput[]
  }

  export type ProteinOptionUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ProteinOptionCreateWithoutVendorInput, ProteinOptionUncheckedCreateWithoutVendorInput> | ProteinOptionCreateWithoutVendorInput[] | ProteinOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProteinOptionCreateOrConnectWithoutVendorInput | ProteinOptionCreateOrConnectWithoutVendorInput[]
    createMany?: ProteinOptionCreateManyVendorInputEnvelope
    connect?: ProteinOptionWhereUniqueInput | ProteinOptionWhereUniqueInput[]
  }

  export type SideOptionUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<SideOptionCreateWithoutVendorInput, SideOptionUncheckedCreateWithoutVendorInput> | SideOptionCreateWithoutVendorInput[] | SideOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SideOptionCreateOrConnectWithoutVendorInput | SideOptionCreateOrConnectWithoutVendorInput[]
    createMany?: SideOptionCreateManyVendorInputEnvelope
    connect?: SideOptionWhereUniqueInput | SideOptionWhereUniqueInput[]
  }

  export type CarbOptionUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<CarbOptionCreateWithoutVendorInput, CarbOptionUncheckedCreateWithoutVendorInput> | CarbOptionCreateWithoutVendorInput[] | CarbOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: CarbOptionCreateOrConnectWithoutVendorInput | CarbOptionCreateOrConnectWithoutVendorInput[]
    createMany?: CarbOptionCreateManyVendorInputEnvelope
    connect?: CarbOptionWhereUniqueInput | CarbOptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type VendorUpdatecuisineTypeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumVendorStatusFieldUpdateOperationsInput = {
    set?: $Enums.VendorStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VendorUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type MenuItemUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MenuItemCreateWithoutVendorInput, MenuItemUncheckedCreateWithoutVendorInput> | MenuItemCreateWithoutVendorInput[] | MenuItemUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutVendorInput | MenuItemCreateOrConnectWithoutVendorInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutVendorInput | MenuItemUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MenuItemCreateManyVendorInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutVendorInput | MenuItemUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutVendorInput | MenuItemUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutVendorNestedInput = {
    create?: XOR<CategoryCreateWithoutVendorInput, CategoryUncheckedCreateWithoutVendorInput> | CategoryCreateWithoutVendorInput[] | CategoryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutVendorInput | CategoryCreateOrConnectWithoutVendorInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutVendorInput | CategoryUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: CategoryCreateManyVendorInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutVendorInput | CategoryUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutVendorInput | CategoryUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutVendorNestedInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVendorInput | OrderUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVendorInput | OrderUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVendorInput | OrderUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PackTypeUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PackTypeCreateWithoutVendorInput, PackTypeUncheckedCreateWithoutVendorInput> | PackTypeCreateWithoutVendorInput[] | PackTypeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PackTypeCreateOrConnectWithoutVendorInput | PackTypeCreateOrConnectWithoutVendorInput[]
    upsert?: PackTypeUpsertWithWhereUniqueWithoutVendorInput | PackTypeUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PackTypeCreateManyVendorInputEnvelope
    set?: PackTypeWhereUniqueInput | PackTypeWhereUniqueInput[]
    disconnect?: PackTypeWhereUniqueInput | PackTypeWhereUniqueInput[]
    delete?: PackTypeWhereUniqueInput | PackTypeWhereUniqueInput[]
    connect?: PackTypeWhereUniqueInput | PackTypeWhereUniqueInput[]
    update?: PackTypeUpdateWithWhereUniqueWithoutVendorInput | PackTypeUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PackTypeUpdateManyWithWhereWithoutVendorInput | PackTypeUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PackTypeScalarWhereInput | PackTypeScalarWhereInput[]
  }

  export type ProteinOptionUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ProteinOptionCreateWithoutVendorInput, ProteinOptionUncheckedCreateWithoutVendorInput> | ProteinOptionCreateWithoutVendorInput[] | ProteinOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProteinOptionCreateOrConnectWithoutVendorInput | ProteinOptionCreateOrConnectWithoutVendorInput[]
    upsert?: ProteinOptionUpsertWithWhereUniqueWithoutVendorInput | ProteinOptionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ProteinOptionCreateManyVendorInputEnvelope
    set?: ProteinOptionWhereUniqueInput | ProteinOptionWhereUniqueInput[]
    disconnect?: ProteinOptionWhereUniqueInput | ProteinOptionWhereUniqueInput[]
    delete?: ProteinOptionWhereUniqueInput | ProteinOptionWhereUniqueInput[]
    connect?: ProteinOptionWhereUniqueInput | ProteinOptionWhereUniqueInput[]
    update?: ProteinOptionUpdateWithWhereUniqueWithoutVendorInput | ProteinOptionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ProteinOptionUpdateManyWithWhereWithoutVendorInput | ProteinOptionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ProteinOptionScalarWhereInput | ProteinOptionScalarWhereInput[]
  }

  export type SideOptionUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SideOptionCreateWithoutVendorInput, SideOptionUncheckedCreateWithoutVendorInput> | SideOptionCreateWithoutVendorInput[] | SideOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SideOptionCreateOrConnectWithoutVendorInput | SideOptionCreateOrConnectWithoutVendorInput[]
    upsert?: SideOptionUpsertWithWhereUniqueWithoutVendorInput | SideOptionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SideOptionCreateManyVendorInputEnvelope
    set?: SideOptionWhereUniqueInput | SideOptionWhereUniqueInput[]
    disconnect?: SideOptionWhereUniqueInput | SideOptionWhereUniqueInput[]
    delete?: SideOptionWhereUniqueInput | SideOptionWhereUniqueInput[]
    connect?: SideOptionWhereUniqueInput | SideOptionWhereUniqueInput[]
    update?: SideOptionUpdateWithWhereUniqueWithoutVendorInput | SideOptionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SideOptionUpdateManyWithWhereWithoutVendorInput | SideOptionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SideOptionScalarWhereInput | SideOptionScalarWhereInput[]
  }

  export type CarbOptionUpdateManyWithoutVendorNestedInput = {
    create?: XOR<CarbOptionCreateWithoutVendorInput, CarbOptionUncheckedCreateWithoutVendorInput> | CarbOptionCreateWithoutVendorInput[] | CarbOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: CarbOptionCreateOrConnectWithoutVendorInput | CarbOptionCreateOrConnectWithoutVendorInput[]
    upsert?: CarbOptionUpsertWithWhereUniqueWithoutVendorInput | CarbOptionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: CarbOptionCreateManyVendorInputEnvelope
    set?: CarbOptionWhereUniqueInput | CarbOptionWhereUniqueInput[]
    disconnect?: CarbOptionWhereUniqueInput | CarbOptionWhereUniqueInput[]
    delete?: CarbOptionWhereUniqueInput | CarbOptionWhereUniqueInput[]
    connect?: CarbOptionWhereUniqueInput | CarbOptionWhereUniqueInput[]
    update?: CarbOptionUpdateWithWhereUniqueWithoutVendorInput | CarbOptionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: CarbOptionUpdateManyWithWhereWithoutVendorInput | CarbOptionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: CarbOptionScalarWhereInput | CarbOptionScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MenuItemCreateWithoutVendorInput, MenuItemUncheckedCreateWithoutVendorInput> | MenuItemCreateWithoutVendorInput[] | MenuItemUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutVendorInput | MenuItemCreateOrConnectWithoutVendorInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutVendorInput | MenuItemUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MenuItemCreateManyVendorInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutVendorInput | MenuItemUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutVendorInput | MenuItemUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<CategoryCreateWithoutVendorInput, CategoryUncheckedCreateWithoutVendorInput> | CategoryCreateWithoutVendorInput[] | CategoryUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutVendorInput | CategoryCreateOrConnectWithoutVendorInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutVendorInput | CategoryUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: CategoryCreateManyVendorInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutVendorInput | CategoryUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutVendorInput | CategoryUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput> | OrderCreateWithoutVendorInput[] | OrderUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVendorInput | OrderCreateOrConnectWithoutVendorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVendorInput | OrderUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: OrderCreateManyVendorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVendorInput | OrderUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVendorInput | OrderUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PackTypeUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PackTypeCreateWithoutVendorInput, PackTypeUncheckedCreateWithoutVendorInput> | PackTypeCreateWithoutVendorInput[] | PackTypeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PackTypeCreateOrConnectWithoutVendorInput | PackTypeCreateOrConnectWithoutVendorInput[]
    upsert?: PackTypeUpsertWithWhereUniqueWithoutVendorInput | PackTypeUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PackTypeCreateManyVendorInputEnvelope
    set?: PackTypeWhereUniqueInput | PackTypeWhereUniqueInput[]
    disconnect?: PackTypeWhereUniqueInput | PackTypeWhereUniqueInput[]
    delete?: PackTypeWhereUniqueInput | PackTypeWhereUniqueInput[]
    connect?: PackTypeWhereUniqueInput | PackTypeWhereUniqueInput[]
    update?: PackTypeUpdateWithWhereUniqueWithoutVendorInput | PackTypeUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PackTypeUpdateManyWithWhereWithoutVendorInput | PackTypeUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PackTypeScalarWhereInput | PackTypeScalarWhereInput[]
  }

  export type ProteinOptionUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ProteinOptionCreateWithoutVendorInput, ProteinOptionUncheckedCreateWithoutVendorInput> | ProteinOptionCreateWithoutVendorInput[] | ProteinOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProteinOptionCreateOrConnectWithoutVendorInput | ProteinOptionCreateOrConnectWithoutVendorInput[]
    upsert?: ProteinOptionUpsertWithWhereUniqueWithoutVendorInput | ProteinOptionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ProteinOptionCreateManyVendorInputEnvelope
    set?: ProteinOptionWhereUniqueInput | ProteinOptionWhereUniqueInput[]
    disconnect?: ProteinOptionWhereUniqueInput | ProteinOptionWhereUniqueInput[]
    delete?: ProteinOptionWhereUniqueInput | ProteinOptionWhereUniqueInput[]
    connect?: ProteinOptionWhereUniqueInput | ProteinOptionWhereUniqueInput[]
    update?: ProteinOptionUpdateWithWhereUniqueWithoutVendorInput | ProteinOptionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ProteinOptionUpdateManyWithWhereWithoutVendorInput | ProteinOptionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ProteinOptionScalarWhereInput | ProteinOptionScalarWhereInput[]
  }

  export type SideOptionUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SideOptionCreateWithoutVendorInput, SideOptionUncheckedCreateWithoutVendorInput> | SideOptionCreateWithoutVendorInput[] | SideOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SideOptionCreateOrConnectWithoutVendorInput | SideOptionCreateOrConnectWithoutVendorInput[]
    upsert?: SideOptionUpsertWithWhereUniqueWithoutVendorInput | SideOptionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SideOptionCreateManyVendorInputEnvelope
    set?: SideOptionWhereUniqueInput | SideOptionWhereUniqueInput[]
    disconnect?: SideOptionWhereUniqueInput | SideOptionWhereUniqueInput[]
    delete?: SideOptionWhereUniqueInput | SideOptionWhereUniqueInput[]
    connect?: SideOptionWhereUniqueInput | SideOptionWhereUniqueInput[]
    update?: SideOptionUpdateWithWhereUniqueWithoutVendorInput | SideOptionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SideOptionUpdateManyWithWhereWithoutVendorInput | SideOptionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SideOptionScalarWhereInput | SideOptionScalarWhereInput[]
  }

  export type CarbOptionUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<CarbOptionCreateWithoutVendorInput, CarbOptionUncheckedCreateWithoutVendorInput> | CarbOptionCreateWithoutVendorInput[] | CarbOptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: CarbOptionCreateOrConnectWithoutVendorInput | CarbOptionCreateOrConnectWithoutVendorInput[]
    upsert?: CarbOptionUpsertWithWhereUniqueWithoutVendorInput | CarbOptionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: CarbOptionCreateManyVendorInputEnvelope
    set?: CarbOptionWhereUniqueInput | CarbOptionWhereUniqueInput[]
    disconnect?: CarbOptionWhereUniqueInput | CarbOptionWhereUniqueInput[]
    delete?: CarbOptionWhereUniqueInput | CarbOptionWhereUniqueInput[]
    connect?: CarbOptionWhereUniqueInput | CarbOptionWhereUniqueInput[]
    update?: CarbOptionUpdateWithWhereUniqueWithoutVendorInput | CarbOptionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: CarbOptionUpdateManyWithWhereWithoutVendorInput | CarbOptionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: CarbOptionScalarWhereInput | CarbOptionScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<VendorCreateWithoutCategoriesInput, VendorUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutCategoriesInput
    connect?: VendorWhereUniqueInput
  }

  export type MenuItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type VendorUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<VendorCreateWithoutCategoriesInput, VendorUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutCategoriesInput
    upsert?: VendorUpsertWithoutCategoriesInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutCategoriesInput, VendorUpdateWithoutCategoriesInput>, VendorUncheckedUpdateWithoutCategoriesInput>
  }

  export type MenuItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutMenuItemsInput = {
    create?: XOR<CategoryCreateWithoutMenuItemsInput, CategoryUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMenuItemsInput
    connect?: CategoryWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutMenuItemsInput = {
    create?: XOR<VendorCreateWithoutMenuItemsInput, VendorUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMenuItemsInput
    connect?: VendorWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: XOR<CategoryCreateWithoutMenuItemsInput, CategoryUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMenuItemsInput
    upsert?: CategoryUpsertWithoutMenuItemsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMenuItemsInput, CategoryUpdateWithoutMenuItemsInput>, CategoryUncheckedUpdateWithoutMenuItemsInput>
  }

  export type VendorUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: XOR<VendorCreateWithoutMenuItemsInput, VendorUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMenuItemsInput
    upsert?: VendorUpsertWithoutMenuItemsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutMenuItemsInput, VendorUpdateWithoutMenuItemsInput>, VendorUncheckedUpdateWithoutMenuItemsInput>
  }

  export type OrderItemUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuItemInput | OrderItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuItemInput | OrderItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuItemInput | OrderItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuItemInput | OrderItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuItemInput | OrderItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuItemInput | OrderItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutCarbOptionsInput = {
    create?: XOR<VendorCreateWithoutCarbOptionsInput, VendorUncheckedCreateWithoutCarbOptionsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutCarbOptionsInput
    connect?: VendorWhereUniqueInput
  }

  export type OrderItemCarbCreateNestedManyWithoutCarbOptionInput = {
    create?: XOR<OrderItemCarbCreateWithoutCarbOptionInput, OrderItemCarbUncheckedCreateWithoutCarbOptionInput> | OrderItemCarbCreateWithoutCarbOptionInput[] | OrderItemCarbUncheckedCreateWithoutCarbOptionInput[]
    connectOrCreate?: OrderItemCarbCreateOrConnectWithoutCarbOptionInput | OrderItemCarbCreateOrConnectWithoutCarbOptionInput[]
    createMany?: OrderItemCarbCreateManyCarbOptionInputEnvelope
    connect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
  }

  export type OrderItemCarbUncheckedCreateNestedManyWithoutCarbOptionInput = {
    create?: XOR<OrderItemCarbCreateWithoutCarbOptionInput, OrderItemCarbUncheckedCreateWithoutCarbOptionInput> | OrderItemCarbCreateWithoutCarbOptionInput[] | OrderItemCarbUncheckedCreateWithoutCarbOptionInput[]
    connectOrCreate?: OrderItemCarbCreateOrConnectWithoutCarbOptionInput | OrderItemCarbCreateOrConnectWithoutCarbOptionInput[]
    createMany?: OrderItemCarbCreateManyCarbOptionInputEnvelope
    connect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorUpdateOneRequiredWithoutCarbOptionsNestedInput = {
    create?: XOR<VendorCreateWithoutCarbOptionsInput, VendorUncheckedCreateWithoutCarbOptionsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutCarbOptionsInput
    upsert?: VendorUpsertWithoutCarbOptionsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutCarbOptionsInput, VendorUpdateWithoutCarbOptionsInput>, VendorUncheckedUpdateWithoutCarbOptionsInput>
  }

  export type OrderItemCarbUpdateManyWithoutCarbOptionNestedInput = {
    create?: XOR<OrderItemCarbCreateWithoutCarbOptionInput, OrderItemCarbUncheckedCreateWithoutCarbOptionInput> | OrderItemCarbCreateWithoutCarbOptionInput[] | OrderItemCarbUncheckedCreateWithoutCarbOptionInput[]
    connectOrCreate?: OrderItemCarbCreateOrConnectWithoutCarbOptionInput | OrderItemCarbCreateOrConnectWithoutCarbOptionInput[]
    upsert?: OrderItemCarbUpsertWithWhereUniqueWithoutCarbOptionInput | OrderItemCarbUpsertWithWhereUniqueWithoutCarbOptionInput[]
    createMany?: OrderItemCarbCreateManyCarbOptionInputEnvelope
    set?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    disconnect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    delete?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    connect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    update?: OrderItemCarbUpdateWithWhereUniqueWithoutCarbOptionInput | OrderItemCarbUpdateWithWhereUniqueWithoutCarbOptionInput[]
    updateMany?: OrderItemCarbUpdateManyWithWhereWithoutCarbOptionInput | OrderItemCarbUpdateManyWithWhereWithoutCarbOptionInput[]
    deleteMany?: OrderItemCarbScalarWhereInput | OrderItemCarbScalarWhereInput[]
  }

  export type OrderItemCarbUncheckedUpdateManyWithoutCarbOptionNestedInput = {
    create?: XOR<OrderItemCarbCreateWithoutCarbOptionInput, OrderItemCarbUncheckedCreateWithoutCarbOptionInput> | OrderItemCarbCreateWithoutCarbOptionInput[] | OrderItemCarbUncheckedCreateWithoutCarbOptionInput[]
    connectOrCreate?: OrderItemCarbCreateOrConnectWithoutCarbOptionInput | OrderItemCarbCreateOrConnectWithoutCarbOptionInput[]
    upsert?: OrderItemCarbUpsertWithWhereUniqueWithoutCarbOptionInput | OrderItemCarbUpsertWithWhereUniqueWithoutCarbOptionInput[]
    createMany?: OrderItemCarbCreateManyCarbOptionInputEnvelope
    set?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    disconnect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    delete?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    connect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    update?: OrderItemCarbUpdateWithWhereUniqueWithoutCarbOptionInput | OrderItemCarbUpdateWithWhereUniqueWithoutCarbOptionInput[]
    updateMany?: OrderItemCarbUpdateManyWithWhereWithoutCarbOptionInput | OrderItemCarbUpdateManyWithWhereWithoutCarbOptionInput[]
    deleteMany?: OrderItemCarbScalarWhereInput | OrderItemCarbScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutPackTypesInput = {
    create?: XOR<VendorCreateWithoutPackTypesInput, VendorUncheckedCreateWithoutPackTypesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPackTypesInput
    connect?: VendorWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutPackTypeInput = {
    create?: XOR<OrderCreateWithoutPackTypeInput, OrderUncheckedCreateWithoutPackTypeInput> | OrderCreateWithoutPackTypeInput[] | OrderUncheckedCreateWithoutPackTypeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPackTypeInput | OrderCreateOrConnectWithoutPackTypeInput[]
    createMany?: OrderCreateManyPackTypeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutPackTypeInput = {
    create?: XOR<OrderCreateWithoutPackTypeInput, OrderUncheckedCreateWithoutPackTypeInput> | OrderCreateWithoutPackTypeInput[] | OrderUncheckedCreateWithoutPackTypeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPackTypeInput | OrderCreateOrConnectWithoutPackTypeInput[]
    createMany?: OrderCreateManyPackTypeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type VendorUpdateOneRequiredWithoutPackTypesNestedInput = {
    create?: XOR<VendorCreateWithoutPackTypesInput, VendorUncheckedCreateWithoutPackTypesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPackTypesInput
    upsert?: VendorUpsertWithoutPackTypesInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutPackTypesInput, VendorUpdateWithoutPackTypesInput>, VendorUncheckedUpdateWithoutPackTypesInput>
  }

  export type OrderUpdateManyWithoutPackTypeNestedInput = {
    create?: XOR<OrderCreateWithoutPackTypeInput, OrderUncheckedCreateWithoutPackTypeInput> | OrderCreateWithoutPackTypeInput[] | OrderUncheckedCreateWithoutPackTypeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPackTypeInput | OrderCreateOrConnectWithoutPackTypeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPackTypeInput | OrderUpsertWithWhereUniqueWithoutPackTypeInput[]
    createMany?: OrderCreateManyPackTypeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPackTypeInput | OrderUpdateWithWhereUniqueWithoutPackTypeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPackTypeInput | OrderUpdateManyWithWhereWithoutPackTypeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutPackTypeNestedInput = {
    create?: XOR<OrderCreateWithoutPackTypeInput, OrderUncheckedCreateWithoutPackTypeInput> | OrderCreateWithoutPackTypeInput[] | OrderUncheckedCreateWithoutPackTypeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPackTypeInput | OrderCreateOrConnectWithoutPackTypeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPackTypeInput | OrderUpsertWithWhereUniqueWithoutPackTypeInput[]
    createMany?: OrderCreateManyPackTypeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPackTypeInput | OrderUpdateWithWhereUniqueWithoutPackTypeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPackTypeInput | OrderUpdateManyWithWhereWithoutPackTypeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderItemCreateNestedOneWithoutOrderItemCarbsInput = {
    create?: XOR<OrderItemCreateWithoutOrderItemCarbsInput, OrderItemUncheckedCreateWithoutOrderItemCarbsInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderItemCarbsInput
    connect?: OrderItemWhereUniqueInput
  }

  export type CarbOptionCreateNestedOneWithoutOrderItemCarbsInput = {
    create?: XOR<CarbOptionCreateWithoutOrderItemCarbsInput, CarbOptionUncheckedCreateWithoutOrderItemCarbsInput>
    connectOrCreate?: CarbOptionCreateOrConnectWithoutOrderItemCarbsInput
    connect?: CarbOptionWhereUniqueInput
  }

  export type OrderItemUpdateOneRequiredWithoutOrderItemCarbsNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderItemCarbsInput, OrderItemUncheckedCreateWithoutOrderItemCarbsInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderItemCarbsInput
    upsert?: OrderItemUpsertWithoutOrderItemCarbsInput
    connect?: OrderItemWhereUniqueInput
    update?: XOR<XOR<OrderItemUpdateToOneWithWhereWithoutOrderItemCarbsInput, OrderItemUpdateWithoutOrderItemCarbsInput>, OrderItemUncheckedUpdateWithoutOrderItemCarbsInput>
  }

  export type CarbOptionUpdateOneRequiredWithoutOrderItemCarbsNestedInput = {
    create?: XOR<CarbOptionCreateWithoutOrderItemCarbsInput, CarbOptionUncheckedCreateWithoutOrderItemCarbsInput>
    connectOrCreate?: CarbOptionCreateOrConnectWithoutOrderItemCarbsInput
    upsert?: CarbOptionUpsertWithoutOrderItemCarbsInput
    connect?: CarbOptionWhereUniqueInput
    update?: XOR<XOR<CarbOptionUpdateToOneWithWhereWithoutOrderItemCarbsInput, CarbOptionUpdateWithoutOrderItemCarbsInput>, CarbOptionUncheckedUpdateWithoutOrderItemCarbsInput>
  }

  export type VendorCreateNestedOneWithoutSideOptionsInput = {
    create?: XOR<VendorCreateWithoutSideOptionsInput, VendorUncheckedCreateWithoutSideOptionsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSideOptionsInput
    connect?: VendorWhereUniqueInput
  }

  export type OrderItemSideCreateNestedManyWithoutSideOptionInput = {
    create?: XOR<OrderItemSideCreateWithoutSideOptionInput, OrderItemSideUncheckedCreateWithoutSideOptionInput> | OrderItemSideCreateWithoutSideOptionInput[] | OrderItemSideUncheckedCreateWithoutSideOptionInput[]
    connectOrCreate?: OrderItemSideCreateOrConnectWithoutSideOptionInput | OrderItemSideCreateOrConnectWithoutSideOptionInput[]
    createMany?: OrderItemSideCreateManySideOptionInputEnvelope
    connect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
  }

  export type OrderItemSideUncheckedCreateNestedManyWithoutSideOptionInput = {
    create?: XOR<OrderItemSideCreateWithoutSideOptionInput, OrderItemSideUncheckedCreateWithoutSideOptionInput> | OrderItemSideCreateWithoutSideOptionInput[] | OrderItemSideUncheckedCreateWithoutSideOptionInput[]
    connectOrCreate?: OrderItemSideCreateOrConnectWithoutSideOptionInput | OrderItemSideCreateOrConnectWithoutSideOptionInput[]
    createMany?: OrderItemSideCreateManySideOptionInputEnvelope
    connect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
  }

  export type VendorUpdateOneRequiredWithoutSideOptionsNestedInput = {
    create?: XOR<VendorCreateWithoutSideOptionsInput, VendorUncheckedCreateWithoutSideOptionsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSideOptionsInput
    upsert?: VendorUpsertWithoutSideOptionsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutSideOptionsInput, VendorUpdateWithoutSideOptionsInput>, VendorUncheckedUpdateWithoutSideOptionsInput>
  }

  export type OrderItemSideUpdateManyWithoutSideOptionNestedInput = {
    create?: XOR<OrderItemSideCreateWithoutSideOptionInput, OrderItemSideUncheckedCreateWithoutSideOptionInput> | OrderItemSideCreateWithoutSideOptionInput[] | OrderItemSideUncheckedCreateWithoutSideOptionInput[]
    connectOrCreate?: OrderItemSideCreateOrConnectWithoutSideOptionInput | OrderItemSideCreateOrConnectWithoutSideOptionInput[]
    upsert?: OrderItemSideUpsertWithWhereUniqueWithoutSideOptionInput | OrderItemSideUpsertWithWhereUniqueWithoutSideOptionInput[]
    createMany?: OrderItemSideCreateManySideOptionInputEnvelope
    set?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    disconnect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    delete?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    connect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    update?: OrderItemSideUpdateWithWhereUniqueWithoutSideOptionInput | OrderItemSideUpdateWithWhereUniqueWithoutSideOptionInput[]
    updateMany?: OrderItemSideUpdateManyWithWhereWithoutSideOptionInput | OrderItemSideUpdateManyWithWhereWithoutSideOptionInput[]
    deleteMany?: OrderItemSideScalarWhereInput | OrderItemSideScalarWhereInput[]
  }

  export type OrderItemSideUncheckedUpdateManyWithoutSideOptionNestedInput = {
    create?: XOR<OrderItemSideCreateWithoutSideOptionInput, OrderItemSideUncheckedCreateWithoutSideOptionInput> | OrderItemSideCreateWithoutSideOptionInput[] | OrderItemSideUncheckedCreateWithoutSideOptionInput[]
    connectOrCreate?: OrderItemSideCreateOrConnectWithoutSideOptionInput | OrderItemSideCreateOrConnectWithoutSideOptionInput[]
    upsert?: OrderItemSideUpsertWithWhereUniqueWithoutSideOptionInput | OrderItemSideUpsertWithWhereUniqueWithoutSideOptionInput[]
    createMany?: OrderItemSideCreateManySideOptionInputEnvelope
    set?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    disconnect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    delete?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    connect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    update?: OrderItemSideUpdateWithWhereUniqueWithoutSideOptionInput | OrderItemSideUpdateWithWhereUniqueWithoutSideOptionInput[]
    updateMany?: OrderItemSideUpdateManyWithWhereWithoutSideOptionInput | OrderItemSideUpdateManyWithWhereWithoutSideOptionInput[]
    deleteMany?: OrderItemSideScalarWhereInput | OrderItemSideScalarWhereInput[]
  }

  export type OrderItemCreateNestedOneWithoutOrderItemSidesInput = {
    create?: XOR<OrderItemCreateWithoutOrderItemSidesInput, OrderItemUncheckedCreateWithoutOrderItemSidesInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderItemSidesInput
    connect?: OrderItemWhereUniqueInput
  }

  export type SideOptionCreateNestedOneWithoutOrderItemSidesInput = {
    create?: XOR<SideOptionCreateWithoutOrderItemSidesInput, SideOptionUncheckedCreateWithoutOrderItemSidesInput>
    connectOrCreate?: SideOptionCreateOrConnectWithoutOrderItemSidesInput
    connect?: SideOptionWhereUniqueInput
  }

  export type OrderItemUpdateOneRequiredWithoutOrderItemSidesNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderItemSidesInput, OrderItemUncheckedCreateWithoutOrderItemSidesInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderItemSidesInput
    upsert?: OrderItemUpsertWithoutOrderItemSidesInput
    connect?: OrderItemWhereUniqueInput
    update?: XOR<XOR<OrderItemUpdateToOneWithWhereWithoutOrderItemSidesInput, OrderItemUpdateWithoutOrderItemSidesInput>, OrderItemUncheckedUpdateWithoutOrderItemSidesInput>
  }

  export type SideOptionUpdateOneRequiredWithoutOrderItemSidesNestedInput = {
    create?: XOR<SideOptionCreateWithoutOrderItemSidesInput, SideOptionUncheckedCreateWithoutOrderItemSidesInput>
    connectOrCreate?: SideOptionCreateOrConnectWithoutOrderItemSidesInput
    upsert?: SideOptionUpsertWithoutOrderItemSidesInput
    connect?: SideOptionWhereUniqueInput
    update?: XOR<XOR<SideOptionUpdateToOneWithWhereWithoutOrderItemSidesInput, SideOptionUpdateWithoutOrderItemSidesInput>, SideOptionUncheckedUpdateWithoutOrderItemSidesInput>
  }

  export type VendorCreateNestedOneWithoutProteinOptionsInput = {
    create?: XOR<VendorCreateWithoutProteinOptionsInput, VendorUncheckedCreateWithoutProteinOptionsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutProteinOptionsInput
    connect?: VendorWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutProteinOptionInput = {
    create?: XOR<OrderItemCreateWithoutProteinOptionInput, OrderItemUncheckedCreateWithoutProteinOptionInput> | OrderItemCreateWithoutProteinOptionInput[] | OrderItemUncheckedCreateWithoutProteinOptionInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProteinOptionInput | OrderItemCreateOrConnectWithoutProteinOptionInput[]
    createMany?: OrderItemCreateManyProteinOptionInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProteinOptionInput = {
    create?: XOR<OrderItemCreateWithoutProteinOptionInput, OrderItemUncheckedCreateWithoutProteinOptionInput> | OrderItemCreateWithoutProteinOptionInput[] | OrderItemUncheckedCreateWithoutProteinOptionInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProteinOptionInput | OrderItemCreateOrConnectWithoutProteinOptionInput[]
    createMany?: OrderItemCreateManyProteinOptionInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type VendorUpdateOneRequiredWithoutProteinOptionsNestedInput = {
    create?: XOR<VendorCreateWithoutProteinOptionsInput, VendorUncheckedCreateWithoutProteinOptionsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutProteinOptionsInput
    upsert?: VendorUpsertWithoutProteinOptionsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutProteinOptionsInput, VendorUpdateWithoutProteinOptionsInput>, VendorUncheckedUpdateWithoutProteinOptionsInput>
  }

  export type OrderItemUpdateManyWithoutProteinOptionNestedInput = {
    create?: XOR<OrderItemCreateWithoutProteinOptionInput, OrderItemUncheckedCreateWithoutProteinOptionInput> | OrderItemCreateWithoutProteinOptionInput[] | OrderItemUncheckedCreateWithoutProteinOptionInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProteinOptionInput | OrderItemCreateOrConnectWithoutProteinOptionInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProteinOptionInput | OrderItemUpsertWithWhereUniqueWithoutProteinOptionInput[]
    createMany?: OrderItemCreateManyProteinOptionInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProteinOptionInput | OrderItemUpdateWithWhereUniqueWithoutProteinOptionInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProteinOptionInput | OrderItemUpdateManyWithWhereWithoutProteinOptionInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProteinOptionNestedInput = {
    create?: XOR<OrderItemCreateWithoutProteinOptionInput, OrderItemUncheckedCreateWithoutProteinOptionInput> | OrderItemCreateWithoutProteinOptionInput[] | OrderItemUncheckedCreateWithoutProteinOptionInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProteinOptionInput | OrderItemCreateOrConnectWithoutProteinOptionInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProteinOptionInput | OrderItemUpsertWithWhereUniqueWithoutProteinOptionInput[]
    createMany?: OrderItemCreateManyProteinOptionInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProteinOptionInput | OrderItemUpdateWithWhereUniqueWithoutProteinOptionInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProteinOptionInput | OrderItemUpdateManyWithWhereWithoutProteinOptionInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutRiderInput = {
    create?: XOR<OrderCreateWithoutRiderInput, OrderUncheckedCreateWithoutRiderInput> | OrderCreateWithoutRiderInput[] | OrderUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRiderInput | OrderCreateOrConnectWithoutRiderInput[]
    createMany?: OrderCreateManyRiderInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutRiderInput = {
    create?: XOR<OrderCreateWithoutRiderInput, OrderUncheckedCreateWithoutRiderInput> | OrderCreateWithoutRiderInput[] | OrderUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRiderInput | OrderCreateOrConnectWithoutRiderInput[]
    createMany?: OrderCreateManyRiderInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType
  }

  export type EnumRiderStatusFieldUpdateOperationsInput = {
    set?: $Enums.RiderStatus
  }

  export type OrderUpdateManyWithoutRiderNestedInput = {
    create?: XOR<OrderCreateWithoutRiderInput, OrderUncheckedCreateWithoutRiderInput> | OrderCreateWithoutRiderInput[] | OrderUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRiderInput | OrderCreateOrConnectWithoutRiderInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRiderInput | OrderUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: OrderCreateManyRiderInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRiderInput | OrderUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRiderInput | OrderUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: XOR<OrderCreateWithoutRiderInput, OrderUncheckedCreateWithoutRiderInput> | OrderCreateWithoutRiderInput[] | OrderUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRiderInput | OrderCreateOrConnectWithoutRiderInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRiderInput | OrderUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: OrderCreateManyRiderInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRiderInput | OrderUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRiderInput | OrderUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutOrdersInput = {
    create?: XOR<VendorCreateWithoutOrdersInput, VendorUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: VendorCreateOrConnectWithoutOrdersInput
    connect?: VendorWhereUniqueInput
  }

  export type RiderCreateNestedOneWithoutOrdersInput = {
    create?: XOR<RiderCreateWithoutOrdersInput, RiderUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RiderCreateOrConnectWithoutOrdersInput
    connect?: RiderWhereUniqueInput
  }

  export type PackTypeCreateNestedOneWithoutOrdersInput = {
    create?: XOR<PackTypeCreateWithoutOrdersInput, PackTypeUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PackTypeCreateOrConnectWithoutOrdersInput
    connect?: PackTypeWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type VendorUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<VendorCreateWithoutOrdersInput, VendorUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: VendorCreateOrConnectWithoutOrdersInput
    upsert?: VendorUpsertWithoutOrdersInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutOrdersInput, VendorUpdateWithoutOrdersInput>, VendorUncheckedUpdateWithoutOrdersInput>
  }

  export type RiderUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<RiderCreateWithoutOrdersInput, RiderUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RiderCreateOrConnectWithoutOrdersInput
    upsert?: RiderUpsertWithoutOrdersInput
    disconnect?: RiderWhereInput | boolean
    delete?: RiderWhereInput | boolean
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutOrdersInput, RiderUpdateWithoutOrdersInput>, RiderUncheckedUpdateWithoutOrdersInput>
  }

  export type PackTypeUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<PackTypeCreateWithoutOrdersInput, PackTypeUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PackTypeCreateOrConnectWithoutOrdersInput
    upsert?: PackTypeUpsertWithoutOrdersInput
    disconnect?: PackTypeWhereInput | boolean
    delete?: PackTypeWhereInput | boolean
    connect?: PackTypeWhereUniqueInput
    update?: XOR<XOR<PackTypeUpdateToOneWithWhereWithoutOrdersInput, PackTypeUpdateWithoutOrdersInput>, PackTypeUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type MenuItemCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrderItemsInput
    connect?: MenuItemWhereUniqueInput
  }

  export type ProteinOptionCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProteinOptionCreateWithoutOrderItemsInput, ProteinOptionUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProteinOptionCreateOrConnectWithoutOrderItemsInput
    connect?: ProteinOptionWhereUniqueInput
  }

  export type OrderItemSideCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderItemSideCreateWithoutOrderItemInput, OrderItemSideUncheckedCreateWithoutOrderItemInput> | OrderItemSideCreateWithoutOrderItemInput[] | OrderItemSideUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemSideCreateOrConnectWithoutOrderItemInput | OrderItemSideCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderItemSideCreateManyOrderItemInputEnvelope
    connect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
  }

  export type OrderItemCarbCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderItemCarbCreateWithoutOrderItemInput, OrderItemCarbUncheckedCreateWithoutOrderItemInput> | OrderItemCarbCreateWithoutOrderItemInput[] | OrderItemCarbUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemCarbCreateOrConnectWithoutOrderItemInput | OrderItemCarbCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderItemCarbCreateManyOrderItemInputEnvelope
    connect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
  }

  export type OrderItemSideUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderItemSideCreateWithoutOrderItemInput, OrderItemSideUncheckedCreateWithoutOrderItemInput> | OrderItemSideCreateWithoutOrderItemInput[] | OrderItemSideUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemSideCreateOrConnectWithoutOrderItemInput | OrderItemSideCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderItemSideCreateManyOrderItemInputEnvelope
    connect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
  }

  export type OrderItemCarbUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderItemCarbCreateWithoutOrderItemInput, OrderItemCarbUncheckedCreateWithoutOrderItemInput> | OrderItemCarbCreateWithoutOrderItemInput[] | OrderItemCarbUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemCarbCreateOrConnectWithoutOrderItemInput | OrderItemCarbCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderItemCarbCreateManyOrderItemInputEnvelope
    connect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrderItemsInput
    upsert?: MenuItemUpsertWithoutOrderItemsInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutOrderItemsInput, MenuItemUpdateWithoutOrderItemsInput>, MenuItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProteinOptionUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<ProteinOptionCreateWithoutOrderItemsInput, ProteinOptionUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProteinOptionCreateOrConnectWithoutOrderItemsInput
    upsert?: ProteinOptionUpsertWithoutOrderItemsInput
    disconnect?: ProteinOptionWhereInput | boolean
    delete?: ProteinOptionWhereInput | boolean
    connect?: ProteinOptionWhereUniqueInput
    update?: XOR<XOR<ProteinOptionUpdateToOneWithWhereWithoutOrderItemsInput, ProteinOptionUpdateWithoutOrderItemsInput>, ProteinOptionUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderItemSideUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderItemSideCreateWithoutOrderItemInput, OrderItemSideUncheckedCreateWithoutOrderItemInput> | OrderItemSideCreateWithoutOrderItemInput[] | OrderItemSideUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemSideCreateOrConnectWithoutOrderItemInput | OrderItemSideCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderItemSideUpsertWithWhereUniqueWithoutOrderItemInput | OrderItemSideUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderItemSideCreateManyOrderItemInputEnvelope
    set?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    disconnect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    delete?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    connect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    update?: OrderItemSideUpdateWithWhereUniqueWithoutOrderItemInput | OrderItemSideUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderItemSideUpdateManyWithWhereWithoutOrderItemInput | OrderItemSideUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderItemSideScalarWhereInput | OrderItemSideScalarWhereInput[]
  }

  export type OrderItemCarbUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderItemCarbCreateWithoutOrderItemInput, OrderItemCarbUncheckedCreateWithoutOrderItemInput> | OrderItemCarbCreateWithoutOrderItemInput[] | OrderItemCarbUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemCarbCreateOrConnectWithoutOrderItemInput | OrderItemCarbCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderItemCarbUpsertWithWhereUniqueWithoutOrderItemInput | OrderItemCarbUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderItemCarbCreateManyOrderItemInputEnvelope
    set?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    disconnect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    delete?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    connect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    update?: OrderItemCarbUpdateWithWhereUniqueWithoutOrderItemInput | OrderItemCarbUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderItemCarbUpdateManyWithWhereWithoutOrderItemInput | OrderItemCarbUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderItemCarbScalarWhereInput | OrderItemCarbScalarWhereInput[]
  }

  export type OrderItemSideUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderItemSideCreateWithoutOrderItemInput, OrderItemSideUncheckedCreateWithoutOrderItemInput> | OrderItemSideCreateWithoutOrderItemInput[] | OrderItemSideUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemSideCreateOrConnectWithoutOrderItemInput | OrderItemSideCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderItemSideUpsertWithWhereUniqueWithoutOrderItemInput | OrderItemSideUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderItemSideCreateManyOrderItemInputEnvelope
    set?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    disconnect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    delete?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    connect?: OrderItemSideWhereUniqueInput | OrderItemSideWhereUniqueInput[]
    update?: OrderItemSideUpdateWithWhereUniqueWithoutOrderItemInput | OrderItemSideUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderItemSideUpdateManyWithWhereWithoutOrderItemInput | OrderItemSideUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderItemSideScalarWhereInput | OrderItemSideScalarWhereInput[]
  }

  export type OrderItemCarbUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderItemCarbCreateWithoutOrderItemInput, OrderItemCarbUncheckedCreateWithoutOrderItemInput> | OrderItemCarbCreateWithoutOrderItemInput[] | OrderItemCarbUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemCarbCreateOrConnectWithoutOrderItemInput | OrderItemCarbCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderItemCarbUpsertWithWhereUniqueWithoutOrderItemInput | OrderItemCarbUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderItemCarbCreateManyOrderItemInputEnvelope
    set?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    disconnect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    delete?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    connect?: OrderItemCarbWhereUniqueInput | OrderItemCarbWhereUniqueInput[]
    update?: OrderItemCarbUpdateWithWhereUniqueWithoutOrderItemInput | OrderItemCarbUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderItemCarbUpdateManyWithWhereWithoutOrderItemInput | OrderItemCarbUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderItemCarbScalarWhereInput | OrderItemCarbScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumVendorStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorStatus | EnumVendorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VendorStatus[] | ListEnumVendorStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorStatus[] | ListEnumVendorStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorStatusFilter<$PrismaModel> | $Enums.VendorStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumVendorStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VendorStatus | EnumVendorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VendorStatus[] | ListEnumVendorStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VendorStatus[] | ListEnumVendorStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVendorStatusWithAggregatesFilter<$PrismaModel> | $Enums.VendorStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVendorStatusFilter<$PrismaModel>
    _max?: NestedEnumVendorStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type NestedEnumRiderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RiderStatus | EnumRiderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RiderStatus[] | ListEnumRiderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiderStatus[] | ListEnumRiderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRiderStatusFilter<$PrismaModel> | $Enums.RiderStatus
  }

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type NestedEnumRiderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiderStatus | EnumRiderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RiderStatus[] | ListEnumRiderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiderStatus[] | ListEnumRiderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRiderStatusWithAggregatesFilter<$PrismaModel> | $Enums.RiderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiderStatusFilter<$PrismaModel>
    _max?: NestedEnumRiderStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type MenuItemCreateWithoutVendorInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    isAvailable?: boolean
    discount?: number | null
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutMenuItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutVendorInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    isAvailable?: boolean
    discount?: number | null
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutVendorInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutVendorInput, MenuItemUncheckedCreateWithoutVendorInput>
  }

  export type MenuItemCreateManyVendorInputEnvelope = {
    data: MenuItemCreateManyVendorInput | MenuItemCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutVendorInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItems?: MenuItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutVendorInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutVendorInput, CategoryUncheckedCreateWithoutVendorInput>
  }

  export type CategoryCreateManyVendorInputEnvelope = {
    data: CategoryCreateManyVendorInput | CategoryCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutVendorInput = {
    id?: string
    clerkUserId: string
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rider?: RiderCreateNestedOneWithoutOrdersInput
    packType?: PackTypeCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutVendorInput = {
    id?: string
    clerkUserId: string
    riderId?: string | null
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    packTypeId?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutVendorInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput>
  }

  export type OrderCreateManyVendorInputEnvelope = {
    data: OrderCreateManyVendorInput | OrderCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type PackTypeCreateWithoutVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    orders?: OrderCreateNestedManyWithoutPackTypeInput
  }

  export type PackTypeUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    orders?: OrderUncheckedCreateNestedManyWithoutPackTypeInput
  }

  export type PackTypeCreateOrConnectWithoutVendorInput = {
    where: PackTypeWhereUniqueInput
    create: XOR<PackTypeCreateWithoutVendorInput, PackTypeUncheckedCreateWithoutVendorInput>
  }

  export type PackTypeCreateManyVendorInputEnvelope = {
    data: PackTypeCreateManyVendorInput | PackTypeCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type ProteinOptionCreateWithoutVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    orderItems?: OrderItemCreateNestedManyWithoutProteinOptionInput
  }

  export type ProteinOptionUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProteinOptionInput
  }

  export type ProteinOptionCreateOrConnectWithoutVendorInput = {
    where: ProteinOptionWhereUniqueInput
    create: XOR<ProteinOptionCreateWithoutVendorInput, ProteinOptionUncheckedCreateWithoutVendorInput>
  }

  export type ProteinOptionCreateManyVendorInputEnvelope = {
    data: ProteinOptionCreateManyVendorInput | ProteinOptionCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type SideOptionCreateWithoutVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    orderItemSides?: OrderItemSideCreateNestedManyWithoutSideOptionInput
  }

  export type SideOptionUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    orderItemSides?: OrderItemSideUncheckedCreateNestedManyWithoutSideOptionInput
  }

  export type SideOptionCreateOrConnectWithoutVendorInput = {
    where: SideOptionWhereUniqueInput
    create: XOR<SideOptionCreateWithoutVendorInput, SideOptionUncheckedCreateWithoutVendorInput>
  }

  export type SideOptionCreateManyVendorInputEnvelope = {
    data: SideOptionCreateManyVendorInput | SideOptionCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type CarbOptionCreateWithoutVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    orderItemCarbs?: OrderItemCarbCreateNestedManyWithoutCarbOptionInput
  }

  export type CarbOptionUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    orderItemCarbs?: OrderItemCarbUncheckedCreateNestedManyWithoutCarbOptionInput
  }

  export type CarbOptionCreateOrConnectWithoutVendorInput = {
    where: CarbOptionWhereUniqueInput
    create: XOR<CarbOptionCreateWithoutVendorInput, CarbOptionUncheckedCreateWithoutVendorInput>
  }

  export type CarbOptionCreateManyVendorInputEnvelope = {
    data: CarbOptionCreateManyVendorInput | CarbOptionCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemUpsertWithWhereUniqueWithoutVendorInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutVendorInput, MenuItemUncheckedUpdateWithoutVendorInput>
    create: XOR<MenuItemCreateWithoutVendorInput, MenuItemUncheckedCreateWithoutVendorInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutVendorInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutVendorInput, MenuItemUncheckedUpdateWithoutVendorInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutVendorInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutVendorInput>
  }

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    vendorId?: StringFilter<"MenuItem"> | string
    categoryId?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    slug?: StringFilter<"MenuItem"> | string
    description?: StringFilter<"MenuItem"> | string
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    image?: StringFilter<"MenuItem"> | string
    isAvailable?: BoolFilter<"MenuItem"> | boolean
    discount?: FloatNullableFilter<"MenuItem"> | number | null
    addProteinOptions?: BoolFilter<"MenuItem"> | boolean
    addCarbohydrateOptions?: BoolFilter<"MenuItem"> | boolean
    addSides?: BoolFilter<"MenuItem"> | boolean
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutVendorInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutVendorInput, CategoryUncheckedUpdateWithoutVendorInput>
    create: XOR<CategoryCreateWithoutVendorInput, CategoryUncheckedCreateWithoutVendorInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutVendorInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutVendorInput, CategoryUncheckedUpdateWithoutVendorInput>
  }

  export type CategoryUpdateManyWithWhereWithoutVendorInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutVendorInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    vendorId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutVendorInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutVendorInput, OrderUncheckedUpdateWithoutVendorInput>
    create: XOR<OrderCreateWithoutVendorInput, OrderUncheckedCreateWithoutVendorInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutVendorInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutVendorInput, OrderUncheckedUpdateWithoutVendorInput>
  }

  export type OrderUpdateManyWithWhereWithoutVendorInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutVendorInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    clerkUserId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
    riderId?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    packTypeId?: StringNullableFilter<"Order"> | string | null
  }

  export type PackTypeUpsertWithWhereUniqueWithoutVendorInput = {
    where: PackTypeWhereUniqueInput
    update: XOR<PackTypeUpdateWithoutVendorInput, PackTypeUncheckedUpdateWithoutVendorInput>
    create: XOR<PackTypeCreateWithoutVendorInput, PackTypeUncheckedCreateWithoutVendorInput>
  }

  export type PackTypeUpdateWithWhereUniqueWithoutVendorInput = {
    where: PackTypeWhereUniqueInput
    data: XOR<PackTypeUpdateWithoutVendorInput, PackTypeUncheckedUpdateWithoutVendorInput>
  }

  export type PackTypeUpdateManyWithWhereWithoutVendorInput = {
    where: PackTypeScalarWhereInput
    data: XOR<PackTypeUpdateManyMutationInput, PackTypeUncheckedUpdateManyWithoutVendorInput>
  }

  export type PackTypeScalarWhereInput = {
    AND?: PackTypeScalarWhereInput | PackTypeScalarWhereInput[]
    OR?: PackTypeScalarWhereInput[]
    NOT?: PackTypeScalarWhereInput | PackTypeScalarWhereInput[]
    id?: StringFilter<"PackType"> | string
    name?: StringFilter<"PackType"> | string
    slug?: StringFilter<"PackType"> | string
    extraPrice?: IntFilter<"PackType"> | number
    isAvailable?: BoolFilter<"PackType"> | boolean
    vendorId?: StringFilter<"PackType"> | string
  }

  export type ProteinOptionUpsertWithWhereUniqueWithoutVendorInput = {
    where: ProteinOptionWhereUniqueInput
    update: XOR<ProteinOptionUpdateWithoutVendorInput, ProteinOptionUncheckedUpdateWithoutVendorInput>
    create: XOR<ProteinOptionCreateWithoutVendorInput, ProteinOptionUncheckedCreateWithoutVendorInput>
  }

  export type ProteinOptionUpdateWithWhereUniqueWithoutVendorInput = {
    where: ProteinOptionWhereUniqueInput
    data: XOR<ProteinOptionUpdateWithoutVendorInput, ProteinOptionUncheckedUpdateWithoutVendorInput>
  }

  export type ProteinOptionUpdateManyWithWhereWithoutVendorInput = {
    where: ProteinOptionScalarWhereInput
    data: XOR<ProteinOptionUpdateManyMutationInput, ProteinOptionUncheckedUpdateManyWithoutVendorInput>
  }

  export type ProteinOptionScalarWhereInput = {
    AND?: ProteinOptionScalarWhereInput | ProteinOptionScalarWhereInput[]
    OR?: ProteinOptionScalarWhereInput[]
    NOT?: ProteinOptionScalarWhereInput | ProteinOptionScalarWhereInput[]
    id?: StringFilter<"ProteinOption"> | string
    name?: StringFilter<"ProteinOption"> | string
    slug?: StringFilter<"ProteinOption"> | string
    extraPrice?: IntFilter<"ProteinOption"> | number
    isAvailable?: BoolFilter<"ProteinOption"> | boolean
    vendorId?: StringFilter<"ProteinOption"> | string
  }

  export type SideOptionUpsertWithWhereUniqueWithoutVendorInput = {
    where: SideOptionWhereUniqueInput
    update: XOR<SideOptionUpdateWithoutVendorInput, SideOptionUncheckedUpdateWithoutVendorInput>
    create: XOR<SideOptionCreateWithoutVendorInput, SideOptionUncheckedCreateWithoutVendorInput>
  }

  export type SideOptionUpdateWithWhereUniqueWithoutVendorInput = {
    where: SideOptionWhereUniqueInput
    data: XOR<SideOptionUpdateWithoutVendorInput, SideOptionUncheckedUpdateWithoutVendorInput>
  }

  export type SideOptionUpdateManyWithWhereWithoutVendorInput = {
    where: SideOptionScalarWhereInput
    data: XOR<SideOptionUpdateManyMutationInput, SideOptionUncheckedUpdateManyWithoutVendorInput>
  }

  export type SideOptionScalarWhereInput = {
    AND?: SideOptionScalarWhereInput | SideOptionScalarWhereInput[]
    OR?: SideOptionScalarWhereInput[]
    NOT?: SideOptionScalarWhereInput | SideOptionScalarWhereInput[]
    id?: StringFilter<"SideOption"> | string
    name?: StringFilter<"SideOption"> | string
    slug?: StringFilter<"SideOption"> | string
    extraPrice?: IntFilter<"SideOption"> | number
    isAvailable?: BoolFilter<"SideOption"> | boolean
    vendorId?: StringFilter<"SideOption"> | string
  }

  export type CarbOptionUpsertWithWhereUniqueWithoutVendorInput = {
    where: CarbOptionWhereUniqueInput
    update: XOR<CarbOptionUpdateWithoutVendorInput, CarbOptionUncheckedUpdateWithoutVendorInput>
    create: XOR<CarbOptionCreateWithoutVendorInput, CarbOptionUncheckedCreateWithoutVendorInput>
  }

  export type CarbOptionUpdateWithWhereUniqueWithoutVendorInput = {
    where: CarbOptionWhereUniqueInput
    data: XOR<CarbOptionUpdateWithoutVendorInput, CarbOptionUncheckedUpdateWithoutVendorInput>
  }

  export type CarbOptionUpdateManyWithWhereWithoutVendorInput = {
    where: CarbOptionScalarWhereInput
    data: XOR<CarbOptionUpdateManyMutationInput, CarbOptionUncheckedUpdateManyWithoutVendorInput>
  }

  export type CarbOptionScalarWhereInput = {
    AND?: CarbOptionScalarWhereInput | CarbOptionScalarWhereInput[]
    OR?: CarbOptionScalarWhereInput[]
    NOT?: CarbOptionScalarWhereInput | CarbOptionScalarWhereInput[]
    id?: StringFilter<"CarbOption"> | string
    name?: StringFilter<"CarbOption"> | string
    slug?: StringFilter<"CarbOption"> | string
    extraPrice?: IntFilter<"CarbOption"> | number
    isAvailable?: BoolFilter<"CarbOption"> | boolean
    vendorId?: StringFilter<"CarbOption"> | string
  }

  export type VendorCreateWithoutCategoriesInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutCategoriesInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeUncheckedCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionUncheckedCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionUncheckedCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutCategoriesInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutCategoriesInput, VendorUncheckedCreateWithoutCategoriesInput>
  }

  export type MenuItemCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    isAvailable?: boolean
    discount?: number | null
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutMenuItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    vendorId: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    isAvailable?: boolean
    discount?: number | null
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemCreateManyCategoryInputEnvelope = {
    data: MenuItemCreateManyCategoryInput | MenuItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithoutCategoriesInput = {
    update: XOR<VendorUpdateWithoutCategoriesInput, VendorUncheckedUpdateWithoutCategoriesInput>
    create: XOR<VendorCreateWithoutCategoriesInput, VendorUncheckedCreateWithoutCategoriesInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutCategoriesInput, VendorUncheckedUpdateWithoutCategoriesInput>
  }

  export type VendorUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUncheckedUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUncheckedUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUncheckedUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type MenuItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutCategoryInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutMenuItemsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutMenuItemsInput = {
    id?: string
    name: string
    slug: string
    vendorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutMenuItemsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMenuItemsInput, CategoryUncheckedCreateWithoutMenuItemsInput>
  }

  export type VendorCreateWithoutMenuItemsInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    categories?: CategoryCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutMenuItemsInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeUncheckedCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionUncheckedCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionUncheckedCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutMenuItemsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutMenuItemsInput, VendorUncheckedCreateWithoutMenuItemsInput>
  }

  export type OrderItemCreateWithoutMenuItemInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    proteinOption?: ProteinOptionCreateNestedOneWithoutOrderItemsInput
    orderItemSides?: OrderItemSideCreateNestedManyWithoutOrderItemInput
    orderItemCarbs?: OrderItemCarbCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutMenuItemInput = {
    id?: string
    orderId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    proteinOptionId?: string | null
    createdAt?: Date | string
    orderItemSides?: OrderItemSideUncheckedCreateNestedManyWithoutOrderItemInput
    orderItemCarbs?: OrderItemCarbUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput>
  }

  export type OrderItemCreateManyMenuItemInputEnvelope = {
    data: OrderItemCreateManyMenuItemInput | OrderItemCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutMenuItemsInput = {
    update: XOR<CategoryUpdateWithoutMenuItemsInput, CategoryUncheckedUpdateWithoutMenuItemsInput>
    create: XOR<CategoryCreateWithoutMenuItemsInput, CategoryUncheckedCreateWithoutMenuItemsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMenuItemsInput, CategoryUncheckedUpdateWithoutMenuItemsInput>
  }

  export type CategoryUpdateWithoutMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUpsertWithoutMenuItemsInput = {
    update: XOR<VendorUpdateWithoutMenuItemsInput, VendorUncheckedUpdateWithoutMenuItemsInput>
    create: XOR<VendorCreateWithoutMenuItemsInput, VendorUncheckedCreateWithoutMenuItemsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutMenuItemsInput, VendorUncheckedUpdateWithoutMenuItemsInput>
  }

  export type VendorUpdateWithoutMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categories?: CategoryUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categories?: CategoryUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUncheckedUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUncheckedUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUncheckedUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutMenuItemInput, OrderItemUncheckedUpdateWithoutMenuItemInput>
    create: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutMenuItemInput, OrderItemUncheckedUpdateWithoutMenuItemInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutMenuItemInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    proteinOptionId?: StringNullableFilter<"OrderItem"> | string | null
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type VendorCreateWithoutCarbOptionsInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutCarbOptionsInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeUncheckedCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionUncheckedCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutCarbOptionsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutCarbOptionsInput, VendorUncheckedCreateWithoutCarbOptionsInput>
  }

  export type OrderItemCarbCreateWithoutCarbOptionInput = {
    id?: string
    orderItem: OrderItemCreateNestedOneWithoutOrderItemCarbsInput
  }

  export type OrderItemCarbUncheckedCreateWithoutCarbOptionInput = {
    id?: string
    orderItemId: string
  }

  export type OrderItemCarbCreateOrConnectWithoutCarbOptionInput = {
    where: OrderItemCarbWhereUniqueInput
    create: XOR<OrderItemCarbCreateWithoutCarbOptionInput, OrderItemCarbUncheckedCreateWithoutCarbOptionInput>
  }

  export type OrderItemCarbCreateManyCarbOptionInputEnvelope = {
    data: OrderItemCarbCreateManyCarbOptionInput | OrderItemCarbCreateManyCarbOptionInput[]
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithoutCarbOptionsInput = {
    update: XOR<VendorUpdateWithoutCarbOptionsInput, VendorUncheckedUpdateWithoutCarbOptionsInput>
    create: XOR<VendorCreateWithoutCarbOptionsInput, VendorUncheckedCreateWithoutCarbOptionsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutCarbOptionsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutCarbOptionsInput, VendorUncheckedUpdateWithoutCarbOptionsInput>
  }

  export type VendorUpdateWithoutCarbOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUpdateManyWithoutVendorNestedInput
    categories?: CategoryUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutCarbOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutVendorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUncheckedUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUncheckedUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderItemCarbUpsertWithWhereUniqueWithoutCarbOptionInput = {
    where: OrderItemCarbWhereUniqueInput
    update: XOR<OrderItemCarbUpdateWithoutCarbOptionInput, OrderItemCarbUncheckedUpdateWithoutCarbOptionInput>
    create: XOR<OrderItemCarbCreateWithoutCarbOptionInput, OrderItemCarbUncheckedCreateWithoutCarbOptionInput>
  }

  export type OrderItemCarbUpdateWithWhereUniqueWithoutCarbOptionInput = {
    where: OrderItemCarbWhereUniqueInput
    data: XOR<OrderItemCarbUpdateWithoutCarbOptionInput, OrderItemCarbUncheckedUpdateWithoutCarbOptionInput>
  }

  export type OrderItemCarbUpdateManyWithWhereWithoutCarbOptionInput = {
    where: OrderItemCarbScalarWhereInput
    data: XOR<OrderItemCarbUpdateManyMutationInput, OrderItemCarbUncheckedUpdateManyWithoutCarbOptionInput>
  }

  export type OrderItemCarbScalarWhereInput = {
    AND?: OrderItemCarbScalarWhereInput | OrderItemCarbScalarWhereInput[]
    OR?: OrderItemCarbScalarWhereInput[]
    NOT?: OrderItemCarbScalarWhereInput | OrderItemCarbScalarWhereInput[]
    id?: StringFilter<"OrderItemCarb"> | string
    orderItemId?: StringFilter<"OrderItemCarb"> | string
    carbOptionId?: StringFilter<"OrderItemCarb"> | string
  }

  export type VendorCreateWithoutPackTypesInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutPackTypesInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionUncheckedCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionUncheckedCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutPackTypesInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutPackTypesInput, VendorUncheckedCreateWithoutPackTypesInput>
  }

  export type OrderCreateWithoutPackTypeInput = {
    id?: string
    clerkUserId: string
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutOrdersInput
    rider?: RiderCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPackTypeInput = {
    id?: string
    clerkUserId: string
    vendorId: string
    riderId?: string | null
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPackTypeInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPackTypeInput, OrderUncheckedCreateWithoutPackTypeInput>
  }

  export type OrderCreateManyPackTypeInputEnvelope = {
    data: OrderCreateManyPackTypeInput | OrderCreateManyPackTypeInput[]
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithoutPackTypesInput = {
    update: XOR<VendorUpdateWithoutPackTypesInput, VendorUncheckedUpdateWithoutPackTypesInput>
    create: XOR<VendorCreateWithoutPackTypesInput, VendorUncheckedCreateWithoutPackTypesInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutPackTypesInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutPackTypesInput, VendorUncheckedUpdateWithoutPackTypesInput>
  }

  export type VendorUpdateWithoutPackTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUpdateManyWithoutVendorNestedInput
    categories?: CategoryUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutPackTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutVendorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUncheckedUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUncheckedUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutPackTypeInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPackTypeInput, OrderUncheckedUpdateWithoutPackTypeInput>
    create: XOR<OrderCreateWithoutPackTypeInput, OrderUncheckedCreateWithoutPackTypeInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPackTypeInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPackTypeInput, OrderUncheckedUpdateWithoutPackTypeInput>
  }

  export type OrderUpdateManyWithWhereWithoutPackTypeInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPackTypeInput>
  }

  export type OrderItemCreateWithoutOrderItemCarbsInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
    proteinOption?: ProteinOptionCreateNestedOneWithoutOrderItemsInput
    orderItemSides?: OrderItemSideCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderItemCarbsInput = {
    id?: string
    orderId: string
    menuItemId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    proteinOptionId?: string | null
    createdAt?: Date | string
    orderItemSides?: OrderItemSideUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutOrderItemCarbsInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderItemCarbsInput, OrderItemUncheckedCreateWithoutOrderItemCarbsInput>
  }

  export type CarbOptionCreateWithoutOrderItemCarbsInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendor: VendorCreateNestedOneWithoutCarbOptionsInput
  }

  export type CarbOptionUncheckedCreateWithoutOrderItemCarbsInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
  }

  export type CarbOptionCreateOrConnectWithoutOrderItemCarbsInput = {
    where: CarbOptionWhereUniqueInput
    create: XOR<CarbOptionCreateWithoutOrderItemCarbsInput, CarbOptionUncheckedCreateWithoutOrderItemCarbsInput>
  }

  export type OrderItemUpsertWithoutOrderItemCarbsInput = {
    update: XOR<OrderItemUpdateWithoutOrderItemCarbsInput, OrderItemUncheckedUpdateWithoutOrderItemCarbsInput>
    create: XOR<OrderItemCreateWithoutOrderItemCarbsInput, OrderItemUncheckedCreateWithoutOrderItemCarbsInput>
    where?: OrderItemWhereInput
  }

  export type OrderItemUpdateToOneWithWhereWithoutOrderItemCarbsInput = {
    where?: OrderItemWhereInput
    data: XOR<OrderItemUpdateWithoutOrderItemCarbsInput, OrderItemUncheckedUpdateWithoutOrderItemCarbsInput>
  }

  export type OrderItemUpdateWithoutOrderItemCarbsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
    proteinOption?: ProteinOptionUpdateOneWithoutOrderItemsNestedInput
    orderItemSides?: OrderItemSideUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderItemCarbsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proteinOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItemSides?: OrderItemSideUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type CarbOptionUpsertWithoutOrderItemCarbsInput = {
    update: XOR<CarbOptionUpdateWithoutOrderItemCarbsInput, CarbOptionUncheckedUpdateWithoutOrderItemCarbsInput>
    create: XOR<CarbOptionCreateWithoutOrderItemCarbsInput, CarbOptionUncheckedCreateWithoutOrderItemCarbsInput>
    where?: CarbOptionWhereInput
  }

  export type CarbOptionUpdateToOneWithWhereWithoutOrderItemCarbsInput = {
    where?: CarbOptionWhereInput
    data: XOR<CarbOptionUpdateWithoutOrderItemCarbsInput, CarbOptionUncheckedUpdateWithoutOrderItemCarbsInput>
  }

  export type CarbOptionUpdateWithoutOrderItemCarbsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutCarbOptionsNestedInput
  }

  export type CarbOptionUncheckedUpdateWithoutOrderItemCarbsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type VendorCreateWithoutSideOptionsInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutSideOptionsInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeUncheckedCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionUncheckedCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutSideOptionsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutSideOptionsInput, VendorUncheckedCreateWithoutSideOptionsInput>
  }

  export type OrderItemSideCreateWithoutSideOptionInput = {
    id?: string
    orderItem: OrderItemCreateNestedOneWithoutOrderItemSidesInput
  }

  export type OrderItemSideUncheckedCreateWithoutSideOptionInput = {
    id?: string
    orderItemId: string
  }

  export type OrderItemSideCreateOrConnectWithoutSideOptionInput = {
    where: OrderItemSideWhereUniqueInput
    create: XOR<OrderItemSideCreateWithoutSideOptionInput, OrderItemSideUncheckedCreateWithoutSideOptionInput>
  }

  export type OrderItemSideCreateManySideOptionInputEnvelope = {
    data: OrderItemSideCreateManySideOptionInput | OrderItemSideCreateManySideOptionInput[]
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithoutSideOptionsInput = {
    update: XOR<VendorUpdateWithoutSideOptionsInput, VendorUncheckedUpdateWithoutSideOptionsInput>
    create: XOR<VendorCreateWithoutSideOptionsInput, VendorUncheckedCreateWithoutSideOptionsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutSideOptionsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutSideOptionsInput, VendorUncheckedUpdateWithoutSideOptionsInput>
  }

  export type VendorUpdateWithoutSideOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUpdateManyWithoutVendorNestedInput
    categories?: CategoryUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutSideOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutVendorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUncheckedUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUncheckedUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderItemSideUpsertWithWhereUniqueWithoutSideOptionInput = {
    where: OrderItemSideWhereUniqueInput
    update: XOR<OrderItemSideUpdateWithoutSideOptionInput, OrderItemSideUncheckedUpdateWithoutSideOptionInput>
    create: XOR<OrderItemSideCreateWithoutSideOptionInput, OrderItemSideUncheckedCreateWithoutSideOptionInput>
  }

  export type OrderItemSideUpdateWithWhereUniqueWithoutSideOptionInput = {
    where: OrderItemSideWhereUniqueInput
    data: XOR<OrderItemSideUpdateWithoutSideOptionInput, OrderItemSideUncheckedUpdateWithoutSideOptionInput>
  }

  export type OrderItemSideUpdateManyWithWhereWithoutSideOptionInput = {
    where: OrderItemSideScalarWhereInput
    data: XOR<OrderItemSideUpdateManyMutationInput, OrderItemSideUncheckedUpdateManyWithoutSideOptionInput>
  }

  export type OrderItemSideScalarWhereInput = {
    AND?: OrderItemSideScalarWhereInput | OrderItemSideScalarWhereInput[]
    OR?: OrderItemSideScalarWhereInput[]
    NOT?: OrderItemSideScalarWhereInput | OrderItemSideScalarWhereInput[]
    id?: StringFilter<"OrderItemSide"> | string
    orderItemId?: StringFilter<"OrderItemSide"> | string
    sideOptionId?: StringFilter<"OrderItemSide"> | string
  }

  export type OrderItemCreateWithoutOrderItemSidesInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
    proteinOption?: ProteinOptionCreateNestedOneWithoutOrderItemsInput
    orderItemCarbs?: OrderItemCarbCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderItemSidesInput = {
    id?: string
    orderId: string
    menuItemId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    proteinOptionId?: string | null
    createdAt?: Date | string
    orderItemCarbs?: OrderItemCarbUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutOrderItemSidesInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderItemSidesInput, OrderItemUncheckedCreateWithoutOrderItemSidesInput>
  }

  export type SideOptionCreateWithoutOrderItemSidesInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendor: VendorCreateNestedOneWithoutSideOptionsInput
  }

  export type SideOptionUncheckedCreateWithoutOrderItemSidesInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
  }

  export type SideOptionCreateOrConnectWithoutOrderItemSidesInput = {
    where: SideOptionWhereUniqueInput
    create: XOR<SideOptionCreateWithoutOrderItemSidesInput, SideOptionUncheckedCreateWithoutOrderItemSidesInput>
  }

  export type OrderItemUpsertWithoutOrderItemSidesInput = {
    update: XOR<OrderItemUpdateWithoutOrderItemSidesInput, OrderItemUncheckedUpdateWithoutOrderItemSidesInput>
    create: XOR<OrderItemCreateWithoutOrderItemSidesInput, OrderItemUncheckedCreateWithoutOrderItemSidesInput>
    where?: OrderItemWhereInput
  }

  export type OrderItemUpdateToOneWithWhereWithoutOrderItemSidesInput = {
    where?: OrderItemWhereInput
    data: XOR<OrderItemUpdateWithoutOrderItemSidesInput, OrderItemUncheckedUpdateWithoutOrderItemSidesInput>
  }

  export type OrderItemUpdateWithoutOrderItemSidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
    proteinOption?: ProteinOptionUpdateOneWithoutOrderItemsNestedInput
    orderItemCarbs?: OrderItemCarbUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderItemSidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proteinOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItemCarbs?: OrderItemCarbUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type SideOptionUpsertWithoutOrderItemSidesInput = {
    update: XOR<SideOptionUpdateWithoutOrderItemSidesInput, SideOptionUncheckedUpdateWithoutOrderItemSidesInput>
    create: XOR<SideOptionCreateWithoutOrderItemSidesInput, SideOptionUncheckedCreateWithoutOrderItemSidesInput>
    where?: SideOptionWhereInput
  }

  export type SideOptionUpdateToOneWithWhereWithoutOrderItemSidesInput = {
    where?: SideOptionWhereInput
    data: XOR<SideOptionUpdateWithoutOrderItemSidesInput, SideOptionUncheckedUpdateWithoutOrderItemSidesInput>
  }

  export type SideOptionUpdateWithoutOrderItemSidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutSideOptionsNestedInput
  }

  export type SideOptionUncheckedUpdateWithoutOrderItemSidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type VendorCreateWithoutProteinOptionsInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    orders?: OrderCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutProteinOptionsInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    orders?: OrderUncheckedCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeUncheckedCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionUncheckedCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutProteinOptionsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutProteinOptionsInput, VendorUncheckedCreateWithoutProteinOptionsInput>
  }

  export type OrderItemCreateWithoutProteinOptionInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
    orderItemSides?: OrderItemSideCreateNestedManyWithoutOrderItemInput
    orderItemCarbs?: OrderItemCarbCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutProteinOptionInput = {
    id?: string
    orderId: string
    menuItemId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    orderItemSides?: OrderItemSideUncheckedCreateNestedManyWithoutOrderItemInput
    orderItemCarbs?: OrderItemCarbUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutProteinOptionInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProteinOptionInput, OrderItemUncheckedCreateWithoutProteinOptionInput>
  }

  export type OrderItemCreateManyProteinOptionInputEnvelope = {
    data: OrderItemCreateManyProteinOptionInput | OrderItemCreateManyProteinOptionInput[]
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithoutProteinOptionsInput = {
    update: XOR<VendorUpdateWithoutProteinOptionsInput, VendorUncheckedUpdateWithoutProteinOptionsInput>
    create: XOR<VendorCreateWithoutProteinOptionsInput, VendorUncheckedCreateWithoutProteinOptionsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutProteinOptionsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutProteinOptionsInput, VendorUncheckedUpdateWithoutProteinOptionsInput>
  }

  export type VendorUpdateWithoutProteinOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUpdateManyWithoutVendorNestedInput
    categories?: CategoryUpdateManyWithoutVendorNestedInput
    orders?: OrderUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutProteinOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutVendorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUncheckedUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUncheckedUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProteinOptionInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProteinOptionInput, OrderItemUncheckedUpdateWithoutProteinOptionInput>
    create: XOR<OrderItemCreateWithoutProteinOptionInput, OrderItemUncheckedCreateWithoutProteinOptionInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProteinOptionInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProteinOptionInput, OrderItemUncheckedUpdateWithoutProteinOptionInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProteinOptionInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProteinOptionInput>
  }

  export type OrderCreateWithoutRiderInput = {
    id?: string
    clerkUserId: string
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutOrdersInput
    packType?: PackTypeCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutRiderInput = {
    id?: string
    clerkUserId: string
    vendorId: string
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    packTypeId?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutRiderInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRiderInput, OrderUncheckedCreateWithoutRiderInput>
  }

  export type OrderCreateManyRiderInputEnvelope = {
    data: OrderCreateManyRiderInput | OrderCreateManyRiderInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutRiderInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutRiderInput, OrderUncheckedUpdateWithoutRiderInput>
    create: XOR<OrderCreateWithoutRiderInput, OrderUncheckedCreateWithoutRiderInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutRiderInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutRiderInput, OrderUncheckedUpdateWithoutRiderInput>
  }

  export type OrderUpdateManyWithWhereWithoutRiderInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutRiderInput>
  }

  export type VendorCreateWithoutOrdersInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemCreateNestedManyWithoutVendorInput
    categories?: CategoryCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutOrdersInput = {
    id?: string
    clerkUserId: string
    name: string
    slug: string
    description: string
    logo: string
    address: string
    state: string
    localGovernmentArea: string
    phoneNumber: string
    cuisineType?: VendorCreatecuisineTypeInput | string[]
    status?: $Enums.VendorStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VendorCreateimagesInput | string[]
    backUpPhoneNumber?: string | null
    email: string
    adminNote?: string | null
    closeOpenStatus?: boolean
    minimumPrice?: Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutVendorInput
    categories?: CategoryUncheckedCreateNestedManyWithoutVendorInput
    packTypes?: PackTypeUncheckedCreateNestedManyWithoutVendorInput
    proteinOptions?: ProteinOptionUncheckedCreateNestedManyWithoutVendorInput
    sideOptions?: SideOptionUncheckedCreateNestedManyWithoutVendorInput
    carbOptions?: CarbOptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutOrdersInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutOrdersInput, VendorUncheckedCreateWithoutOrdersInput>
  }

  export type RiderCreateWithoutOrdersInput = {
    id?: string
    clerkUserId: string
    phone: string
    vehicleType: $Enums.VehicleType
    isAvailable?: boolean
    status?: $Enums.RiderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiderUncheckedCreateWithoutOrdersInput = {
    id?: string
    clerkUserId: string
    phone: string
    vehicleType: $Enums.VehicleType
    isAvailable?: boolean
    status?: $Enums.RiderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiderCreateOrConnectWithoutOrdersInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutOrdersInput, RiderUncheckedCreateWithoutOrdersInput>
  }

  export type PackTypeCreateWithoutOrdersInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendor: VendorCreateNestedOneWithoutPackTypesInput
  }

  export type PackTypeUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
  }

  export type PackTypeCreateOrConnectWithoutOrdersInput = {
    where: PackTypeWhereUniqueInput
    create: XOR<PackTypeCreateWithoutOrdersInput, PackTypeUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
    proteinOption?: ProteinOptionCreateNestedOneWithoutOrderItemsInput
    orderItemSides?: OrderItemSideCreateNestedManyWithoutOrderItemInput
    orderItemCarbs?: OrderItemCarbCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    menuItemId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    proteinOptionId?: string | null
    createdAt?: Date | string
    orderItemSides?: OrderItemSideUncheckedCreateNestedManyWithoutOrderItemInput
    orderItemCarbs?: OrderItemCarbUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithoutOrdersInput = {
    update: XOR<VendorUpdateWithoutOrdersInput, VendorUncheckedUpdateWithoutOrdersInput>
    create: XOR<VendorCreateWithoutOrdersInput, VendorUncheckedCreateWithoutOrdersInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutOrdersInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutOrdersInput, VendorUncheckedUpdateWithoutOrdersInput>
  }

  export type VendorUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUpdateManyWithoutVendorNestedInput
    categories?: CategoryUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    localGovernmentArea?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    cuisineType?: VendorUpdatecuisineTypeInput | string[]
    status?: EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VendorUpdateimagesInput | string[]
    backUpPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    adminNote?: NullableStringFieldUpdateOperationsInput | string | null
    closeOpenStatus?: BoolFieldUpdateOperationsInput | boolean
    minimumPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    menuItems?: MenuItemUncheckedUpdateManyWithoutVendorNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutVendorNestedInput
    packTypes?: PackTypeUncheckedUpdateManyWithoutVendorNestedInput
    proteinOptions?: ProteinOptionUncheckedUpdateManyWithoutVendorNestedInput
    sideOptions?: SideOptionUncheckedUpdateManyWithoutVendorNestedInput
    carbOptions?: CarbOptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type RiderUpsertWithoutOrdersInput = {
    update: XOR<RiderUpdateWithoutOrdersInput, RiderUncheckedUpdateWithoutOrdersInput>
    create: XOR<RiderCreateWithoutOrdersInput, RiderUncheckedCreateWithoutOrdersInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutOrdersInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutOrdersInput, RiderUncheckedUpdateWithoutOrdersInput>
  }

  export type RiderUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRiderStatusFieldUpdateOperationsInput | $Enums.RiderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumRiderStatusFieldUpdateOperationsInput | $Enums.RiderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackTypeUpsertWithoutOrdersInput = {
    update: XOR<PackTypeUpdateWithoutOrdersInput, PackTypeUncheckedUpdateWithoutOrdersInput>
    create: XOR<PackTypeCreateWithoutOrdersInput, PackTypeUncheckedCreateWithoutOrdersInput>
    where?: PackTypeWhereInput
  }

  export type PackTypeUpdateToOneWithWhereWithoutOrdersInput = {
    where?: PackTypeWhereInput
    data: XOR<PackTypeUpdateWithoutOrdersInput, PackTypeUncheckedUpdateWithoutOrdersInput>
  }

  export type PackTypeUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutPackTypesNestedInput
  }

  export type PackTypeUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    clerkUserId: string
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutOrdersInput
    rider?: RiderCreateNestedOneWithoutOrdersInput
    packType?: PackTypeCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    clerkUserId: string
    vendorId: string
    riderId?: string | null
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    packTypeId?: string | null
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type MenuItemCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    isAvailable?: boolean
    discount?: number | null
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutMenuItemsInput
    vendor: VendorCreateNestedOneWithoutMenuItemsInput
  }

  export type MenuItemUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    vendorId: string
    categoryId: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    isAvailable?: boolean
    discount?: number | null
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemCreateOrConnectWithoutOrderItemsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProteinOptionCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendor: VendorCreateNestedOneWithoutProteinOptionsInput
  }

  export type ProteinOptionUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
    vendorId: string
  }

  export type ProteinOptionCreateOrConnectWithoutOrderItemsInput = {
    where: ProteinOptionWhereUniqueInput
    create: XOR<ProteinOptionCreateWithoutOrderItemsInput, ProteinOptionUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderItemSideCreateWithoutOrderItemInput = {
    id?: string
    sideOption: SideOptionCreateNestedOneWithoutOrderItemSidesInput
  }

  export type OrderItemSideUncheckedCreateWithoutOrderItemInput = {
    id?: string
    sideOptionId: string
  }

  export type OrderItemSideCreateOrConnectWithoutOrderItemInput = {
    where: OrderItemSideWhereUniqueInput
    create: XOR<OrderItemSideCreateWithoutOrderItemInput, OrderItemSideUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderItemSideCreateManyOrderItemInputEnvelope = {
    data: OrderItemSideCreateManyOrderItemInput | OrderItemSideCreateManyOrderItemInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCarbCreateWithoutOrderItemInput = {
    id?: string
    carbOption: CarbOptionCreateNestedOneWithoutOrderItemCarbsInput
  }

  export type OrderItemCarbUncheckedCreateWithoutOrderItemInput = {
    id?: string
    carbOptionId: string
  }

  export type OrderItemCarbCreateOrConnectWithoutOrderItemInput = {
    where: OrderItemCarbWhereUniqueInput
    create: XOR<OrderItemCarbCreateWithoutOrderItemInput, OrderItemCarbUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderItemCarbCreateManyOrderItemInputEnvelope = {
    data: OrderItemCarbCreateManyOrderItemInput | OrderItemCarbCreateManyOrderItemInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutOrdersNestedInput
    rider?: RiderUpdateOneWithoutOrdersNestedInput
    packType?: PackTypeUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    riderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packTypeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenuItemUpsertWithoutOrderItemsInput = {
    update: XOR<MenuItemUpdateWithoutOrderItemsInput, MenuItemUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutOrderItemsInput, MenuItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MenuItemUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutMenuItemsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutMenuItemsNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProteinOptionUpsertWithoutOrderItemsInput = {
    update: XOR<ProteinOptionUpdateWithoutOrderItemsInput, ProteinOptionUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProteinOptionCreateWithoutOrderItemsInput, ProteinOptionUncheckedCreateWithoutOrderItemsInput>
    where?: ProteinOptionWhereInput
  }

  export type ProteinOptionUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProteinOptionWhereInput
    data: XOR<ProteinOptionUpdateWithoutOrderItemsInput, ProteinOptionUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProteinOptionUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutProteinOptionsNestedInput
  }

  export type ProteinOptionUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vendorId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemSideUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: OrderItemSideWhereUniqueInput
    update: XOR<OrderItemSideUpdateWithoutOrderItemInput, OrderItemSideUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderItemSideCreateWithoutOrderItemInput, OrderItemSideUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderItemSideUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: OrderItemSideWhereUniqueInput
    data: XOR<OrderItemSideUpdateWithoutOrderItemInput, OrderItemSideUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderItemSideUpdateManyWithWhereWithoutOrderItemInput = {
    where: OrderItemSideScalarWhereInput
    data: XOR<OrderItemSideUpdateManyMutationInput, OrderItemSideUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type OrderItemCarbUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: OrderItemCarbWhereUniqueInput
    update: XOR<OrderItemCarbUpdateWithoutOrderItemInput, OrderItemCarbUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderItemCarbCreateWithoutOrderItemInput, OrderItemCarbUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderItemCarbUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: OrderItemCarbWhereUniqueInput
    data: XOR<OrderItemCarbUpdateWithoutOrderItemInput, OrderItemCarbUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderItemCarbUpdateManyWithWhereWithoutOrderItemInput = {
    where: OrderItemCarbScalarWhereInput
    data: XOR<OrderItemCarbUpdateManyMutationInput, OrderItemCarbUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type MenuItemCreateManyVendorInput = {
    id?: string
    categoryId: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    isAvailable?: boolean
    discount?: number | null
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateManyVendorInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyVendorInput = {
    id?: string
    clerkUserId: string
    riderId?: string | null
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    packTypeId?: string | null
  }

  export type PackTypeCreateManyVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
  }

  export type ProteinOptionCreateManyVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
  }

  export type SideOptionCreateManyVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
  }

  export type CarbOptionCreateManyVendorInput = {
    id?: string
    name: string
    slug: string
    extraPrice?: number
    isAvailable?: boolean
  }

  export type MenuItemUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutMenuItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItems?: MenuItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItems?: MenuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneWithoutOrdersNestedInput
    packType?: PackTypeUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    riderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    riderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packTypeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PackTypeUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUpdateManyWithoutPackTypeNestedInput
  }

  export type PackTypeUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUncheckedUpdateManyWithoutPackTypeNestedInput
  }

  export type PackTypeUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProteinOptionUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    orderItems?: OrderItemUpdateManyWithoutProteinOptionNestedInput
  }

  export type ProteinOptionUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    orderItems?: OrderItemUncheckedUpdateManyWithoutProteinOptionNestedInput
  }

  export type ProteinOptionUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SideOptionUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    orderItemSides?: OrderItemSideUpdateManyWithoutSideOptionNestedInput
  }

  export type SideOptionUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    orderItemSides?: OrderItemSideUncheckedUpdateManyWithoutSideOptionNestedInput
  }

  export type SideOptionUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CarbOptionUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    orderItemCarbs?: OrderItemCarbUpdateManyWithoutCarbOptionNestedInput
  }

  export type CarbOptionUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    orderItemCarbs?: OrderItemCarbUncheckedUpdateManyWithoutCarbOptionNestedInput
  }

  export type CarbOptionUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    extraPrice?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuItemCreateManyCategoryInput = {
    id?: string
    vendorId: string
    name: string
    slug: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    image: string
    isAvailable?: boolean
    discount?: number | null
    addProteinOptions?: boolean
    addCarbohydrateOptions?: boolean
    addSides?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutMenuItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    addProteinOptions?: BoolFieldUpdateOperationsInput | boolean
    addCarbohydrateOptions?: BoolFieldUpdateOperationsInput | boolean
    addSides?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyMenuItemInput = {
    id?: string
    orderId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    proteinOptionId?: string | null
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    proteinOption?: ProteinOptionUpdateOneWithoutOrderItemsNestedInput
    orderItemSides?: OrderItemSideUpdateManyWithoutOrderItemNestedInput
    orderItemCarbs?: OrderItemCarbUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proteinOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItemSides?: OrderItemSideUncheckedUpdateManyWithoutOrderItemNestedInput
    orderItemCarbs?: OrderItemCarbUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proteinOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCarbCreateManyCarbOptionInput = {
    id?: string
    orderItemId: string
  }

  export type OrderItemCarbUpdateWithoutCarbOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItem?: OrderItemUpdateOneRequiredWithoutOrderItemCarbsNestedInput
  }

  export type OrderItemCarbUncheckedUpdateWithoutCarbOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCarbUncheckedUpdateManyWithoutCarbOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateManyPackTypeInput = {
    id?: string
    clerkUserId: string
    vendorId: string
    riderId?: string | null
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutPackTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutOrdersNestedInput
    rider?: RiderUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPackTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    riderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutPackTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    riderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemSideCreateManySideOptionInput = {
    id?: string
    orderItemId: string
  }

  export type OrderItemSideUpdateWithoutSideOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItem?: OrderItemUpdateOneRequiredWithoutOrderItemSidesNestedInput
  }

  export type OrderItemSideUncheckedUpdateWithoutSideOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemSideUncheckedUpdateManyWithoutSideOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyProteinOptionInput = {
    id?: string
    orderId: string
    menuItemId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutProteinOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
    orderItemSides?: OrderItemSideUpdateManyWithoutOrderItemNestedInput
    orderItemCarbs?: OrderItemCarbUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProteinOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItemSides?: OrderItemSideUncheckedUpdateManyWithoutOrderItemNestedInput
    orderItemCarbs?: OrderItemCarbUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutProteinOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyRiderInput = {
    id?: string
    clerkUserId: string
    vendorId: string
    status?: $Enums.OrderStatus
    totalAmount: Decimal | DecimalJsLike | number | string
    deliveryAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    packTypeId?: string | null
  }

  export type OrderUpdateWithoutRiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutOrdersNestedInput
    packType?: PackTypeUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutRiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutRiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packTypeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    menuItemId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    proteinOptionId?: string | null
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
    proteinOption?: ProteinOptionUpdateOneWithoutOrderItemsNestedInput
    orderItemSides?: OrderItemSideUpdateManyWithoutOrderItemNestedInput
    orderItemCarbs?: OrderItemCarbUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proteinOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItemSides?: OrderItemSideUncheckedUpdateManyWithoutOrderItemNestedInput
    orderItemCarbs?: OrderItemCarbUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proteinOptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemSideCreateManyOrderItemInput = {
    id?: string
    sideOptionId: string
  }

  export type OrderItemCarbCreateManyOrderItemInput = {
    id?: string
    carbOptionId: string
  }

  export type OrderItemSideUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sideOption?: SideOptionUpdateOneRequiredWithoutOrderItemSidesNestedInput
  }

  export type OrderItemSideUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sideOptionId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemSideUncheckedUpdateManyWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sideOptionId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCarbUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    carbOption?: CarbOptionUpdateOneRequiredWithoutOrderItemCarbsNestedInput
  }

  export type OrderItemCarbUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    carbOptionId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCarbUncheckedUpdateManyWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    carbOptionId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}