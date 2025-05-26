
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model Seat
 * 
 */
export type Seat = $Result.DefaultSelection<Prisma.$SeatPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseItem
 * 
 */
export type CourseItem = $Result.DefaultSelection<Prisma.$CourseItemPayload>
/**
 * Model MenuCategory
 * 
 */
export type MenuCategory = $Result.DefaultSelection<Prisma.$MenuCategoryPayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
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
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model InventoryCategory
 * 
 */
export type InventoryCategory = $Result.DefaultSelection<Prisma.$InventoryCategoryPayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model MenuItemIngredient
 * 
 */
export type MenuItemIngredient = $Result.DefaultSelection<Prisma.$MenuItemIngredientPayload>
/**
 * Model InventoryTransaction
 * 
 */
export type InventoryTransaction = $Result.DefaultSelection<Prisma.$InventoryTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  OWNER: 'OWNER',
  MANAGER: 'MANAGER',
  STAFF: 'STAFF'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const TableStatus: {
  AVAILABLE: 'AVAILABLE',
  RESERVED: 'RESERVED',
  OCCUPIED: 'OCCUPIED'
};

export type TableStatus = (typeof TableStatus)[keyof typeof TableStatus]


export const OrderStatus: {
  PENDING: 'PENDING',
  PREPARING: 'PREPARING',
  SERVED: 'SERVED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  CREDIT_CARD: 'CREDIT_CARD',
  DEBIT_CARD: 'DEBIT_CARD',
  QR_CODE: 'QR_CODE',
  MOBILE_BANKING: 'MOBILE_BANKING'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  REFUNDED: 'REFUNDED',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const TransactionType: {
  STOCK_IN: 'STOCK_IN',
  STOCK_OUT: 'STOCK_OUT',
  ADJUSTMENT: 'ADJUSTMENT'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type TableStatus = $Enums.TableStatus

export const TableStatus: typeof $Enums.TableStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seat`: Exposes CRUD operations for the **Seat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seat.findMany()
    * ```
    */
  get seat(): Prisma.SeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseItem`: Exposes CRUD operations for the **CourseItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseItems
    * const courseItems = await prisma.courseItem.findMany()
    * ```
    */
  get courseItem(): Prisma.CourseItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuCategory`: Exposes CRUD operations for the **MenuCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuCategories
    * const menuCategories = await prisma.menuCategory.findMany()
    * ```
    */
  get menuCategory(): Prisma.MenuCategoryDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryCategory`: Exposes CRUD operations for the **InventoryCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryCategories
    * const inventoryCategories = await prisma.inventoryCategory.findMany()
    * ```
    */
  get inventoryCategory(): Prisma.InventoryCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItemIngredient`: Exposes CRUD operations for the **MenuItemIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItemIngredients
    * const menuItemIngredients = await prisma.menuItemIngredient.findMany()
    * ```
    */
  get menuItemIngredient(): Prisma.MenuItemIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryTransaction`: Exposes CRUD operations for the **InventoryTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryTransactions
    * const inventoryTransactions = await prisma.inventoryTransaction.findMany()
    * ```
    */
  get inventoryTransaction(): Prisma.InventoryTransactionDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Table: 'Table',
    Seat: 'Seat',
    Reservation: 'Reservation',
    Course: 'Course',
    CourseItem: 'CourseItem',
    MenuCategory: 'MenuCategory',
    MenuItem: 'MenuItem',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Payment: 'Payment',
    InventoryCategory: 'InventoryCategory',
    InventoryItem: 'InventoryItem',
    MenuItemIngredient: 'MenuItemIngredient',
    InventoryTransaction: 'InventoryTransaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "table" | "seat" | "reservation" | "course" | "courseItem" | "menuCategory" | "menuItem" | "order" | "orderItem" | "payment" | "inventoryCategory" | "inventoryItem" | "menuItemIngredient" | "inventoryTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      Seat: {
        payload: Prisma.$SeatPayload<ExtArgs>
        fields: Prisma.SeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findFirst: {
            args: Prisma.SeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findMany: {
            args: Prisma.SeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          create: {
            args: Prisma.SeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          createMany: {
            args: Prisma.SeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          update: {
            args: Prisma.SeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          deleteMany: {
            args: Prisma.SeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          aggregate: {
            args: Prisma.SeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat>
          }
          groupBy: {
            args: Prisma.SeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatCountArgs<ExtArgs>
            result: $Utils.Optional<SeatCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseItem: {
        payload: Prisma.$CourseItemPayload<ExtArgs>
        fields: Prisma.CourseItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseItemPayload>
          }
          findFirst: {
            args: Prisma.CourseItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseItemPayload>
          }
          findMany: {
            args: Prisma.CourseItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseItemPayload>[]
          }
          create: {
            args: Prisma.CourseItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseItemPayload>
          }
          createMany: {
            args: Prisma.CourseItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseItemPayload>
          }
          update: {
            args: Prisma.CourseItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseItemPayload>
          }
          deleteMany: {
            args: Prisma.CourseItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseItemPayload>
          }
          aggregate: {
            args: Prisma.CourseItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseItem>
          }
          groupBy: {
            args: Prisma.CourseItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseItemCountArgs<ExtArgs>
            result: $Utils.Optional<CourseItemCountAggregateOutputType> | number
          }
        }
      }
      MenuCategory: {
        payload: Prisma.$MenuCategoryPayload<ExtArgs>
        fields: Prisma.MenuCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          findFirst: {
            args: Prisma.MenuCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          findMany: {
            args: Prisma.MenuCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>[]
          }
          create: {
            args: Prisma.MenuCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          createMany: {
            args: Prisma.MenuCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MenuCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          update: {
            args: Prisma.MenuCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MenuCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          aggregate: {
            args: Prisma.MenuCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuCategory>
          }
          groupBy: {
            args: Prisma.MenuCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCategoryCountAggregateOutputType> | number
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
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      InventoryCategory: {
        payload: Prisma.$InventoryCategoryPayload<ExtArgs>
        fields: Prisma.InventoryCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          findMany: {
            args: Prisma.InventoryCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          update: {
            args: Prisma.InventoryCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCategoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryCategory>
          }
          groupBy: {
            args: Prisma.InventoryCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCategoryCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      MenuItemIngredient: {
        payload: Prisma.$MenuItemIngredientPayload<ExtArgs>
        fields: Prisma.MenuItemIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemIngredientPayload>
          }
          findFirst: {
            args: Prisma.MenuItemIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemIngredientPayload>
          }
          findMany: {
            args: Prisma.MenuItemIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemIngredientPayload>[]
          }
          create: {
            args: Prisma.MenuItemIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemIngredientPayload>
          }
          createMany: {
            args: Prisma.MenuItemIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MenuItemIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemIngredientPayload>
          }
          update: {
            args: Prisma.MenuItemIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemIngredientPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuItemIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemIngredientPayload>
          }
          aggregate: {
            args: Prisma.MenuItemIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItemIngredient>
          }
          groupBy: {
            args: Prisma.MenuItemIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemIngredientCountAggregateOutputType> | number
          }
        }
      }
      InventoryTransaction: {
        payload: Prisma.$InventoryTransactionPayload<ExtArgs>
        fields: Prisma.InventoryTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          findFirst: {
            args: Prisma.InventoryTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          findMany: {
            args: Prisma.InventoryTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>[]
          }
          create: {
            args: Prisma.InventoryTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          createMany: {
            args: Prisma.InventoryTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          update: {
            args: Prisma.InventoryTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          deleteMany: {
            args: Prisma.InventoryTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          aggregate: {
            args: Prisma.InventoryTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryTransaction>
          }
          groupBy: {
            args: Prisma.InventoryTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransactionCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    table?: TableOmit
    seat?: SeatOmit
    reservation?: ReservationOmit
    course?: CourseOmit
    courseItem?: CourseItemOmit
    menuCategory?: MenuCategoryOmit
    menuItem?: MenuItemOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    payment?: PaymentOmit
    inventoryCategory?: InventoryCategoryOmit
    inventoryItem?: InventoryItemOmit
    menuItemIngredient?: MenuItemIngredientOmit
    inventoryTransaction?: InventoryTransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    seats: number
    reservations: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | TableCountOutputTypeCountSeatsArgs
    reservations?: boolean | TableCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type SeatCountOutputType
   */

  export type SeatCountOutputType = {
    orders: number
  }

  export type SeatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | SeatCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatCountOutputType
     */
    select?: SeatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    courseItems: number
    orders: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseItems?: boolean | CourseCountOutputTypeCountCourseItemsArgs
    orders?: boolean | CourseCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseItemWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type MenuCategoryCountOutputType
   */

  export type MenuCategoryCountOutputType = {
    menuItems: number
  }

  export type MenuCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItems?: boolean | MenuCategoryCountOutputTypeCountMenuItemsArgs
  }

  // Custom InputTypes
  /**
   * MenuCategoryCountOutputType without action
   */
  export type MenuCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategoryCountOutputType
     */
    select?: MenuCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCategoryCountOutputType without action
   */
  export type MenuCategoryCountOutputTypeCountMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }


  /**
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    courseItems: number
    orderItems: number
    ingredients: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseItems?: boolean | MenuItemCountOutputTypeCountCourseItemsArgs
    orderItems?: boolean | MenuItemCountOutputTypeCountOrderItemsArgs
    ingredients?: boolean | MenuItemCountOutputTypeCountIngredientsArgs
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
  export type MenuItemCountOutputTypeCountCourseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseItemWhereInput
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemIngredientWhereInput
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
   * Count Type InventoryCategoryCountOutputType
   */

  export type InventoryCategoryCountOutputType = {
    inventoryItems: number
  }

  export type InventoryCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItems?: boolean | InventoryCategoryCountOutputTypeCountInventoryItemsArgs
  }

  // Custom InputTypes
  /**
   * InventoryCategoryCountOutputType without action
   */
  export type InventoryCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategoryCountOutputType
     */
    select?: InventoryCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCategoryCountOutputType without action
   */
  export type InventoryCategoryCountOutputTypeCountInventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }


  /**
   * Count Type InventoryItemCountOutputType
   */

  export type InventoryItemCountOutputType = {
    inventory: number
    inventoryTransactions: number
  }

  export type InventoryItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryItemCountOutputTypeCountInventoryArgs
    inventoryTransactions?: boolean | InventoryItemCountOutputTypeCountInventoryTransactionsArgs
  }

  // Custom InputTypes
  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItemCountOutputType
     */
    select?: InventoryItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemIngredientWhereInput
  }

  /**
   * InventoryItemCountOutputType without action
   */
  export type InventoryItemCountOutputTypeCountInventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    pin: string | null
    role: $Enums.UserRole | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    pin: string | null
    role: $Enums.UserRole | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    pin: number
    role: number
    fullName: number
    email: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    active: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    pin?: true
    role?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    active?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    pin?: true
    role?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    active?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    pin?: true
    role?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    pin: string
    role: $Enums.UserRole
    fullName: string
    email: string | null
    phoneNumber: string | null
    createdAt: Date
    updatedAt: Date
    active: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    pin?: boolean
    role?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    pin?: boolean
    role?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "pin" | "role" | "fullName" | "email" | "phoneNumber" | "createdAt" | "updatedAt" | "active", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      pin: string
      role: $Enums.UserRole
      fullName: string
      email: string | null
      phoneNumber: string | null
      createdAt: Date
      updatedAt: Date
      active: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly pin: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly active: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    capacity: number | null
  }

  export type TableSumAggregateOutputType = {
    capacity: number | null
  }

  export type TableMinAggregateOutputType = {
    id: string | null
    tableNumber: string | null
    capacity: number | null
    status: $Enums.TableStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
  }

  export type TableMaxAggregateOutputType = {
    id: string | null
    tableNumber: string | null
    capacity: number | null
    status: $Enums.TableStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    tableNumber: number
    capacity: number
    status: number
    createdAt: number
    updatedAt: number
    active: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    capacity?: true
  }

  export type TableSumAggregateInputType = {
    capacity?: true
  }

  export type TableMinAggregateInputType = {
    id?: true
    tableNumber?: true
    capacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    active?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    tableNumber?: true
    capacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    active?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    tableNumber?: true
    capacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: string
    tableNumber: string
    capacity: number
    status: $Enums.TableStatus
    createdAt: Date
    updatedAt: Date
    active: boolean
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableNumber?: boolean
    capacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    seats?: boolean | Table$seatsArgs<ExtArgs>
    reservations?: boolean | Table$reservationsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>



  export type TableSelectScalar = {
    id?: boolean
    tableNumber?: boolean
    capacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
  }

  export type TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableNumber" | "capacity" | "status" | "createdAt" | "updatedAt" | "active", ExtArgs["result"]["table"]>
  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | Table$seatsArgs<ExtArgs>
    reservations?: boolean | Table$reservationsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      seats: Prisma.$SeatPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableNumber: string
      capacity: number
      status: $Enums.TableStatus
      createdAt: Date
      updatedAt: Date
      active: boolean
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableFindUniqueArgs>(args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(args: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableFindFirstArgs>(args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableFindManyArgs>(args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends TableCreateArgs>(args: SelectSubset<T, TableCreateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {TableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableCreateManyArgs>(args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends TableDeleteArgs>(args: SelectSubset<T, TableDeleteArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableUpdateArgs>(args: SelectSubset<T, TableUpdateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableDeleteManyArgs>(args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableUpdateManyArgs>(args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends TableUpsertArgs>(args: SelectSubset<T, TableUpsertArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
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
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seats<T extends Table$seatsArgs<ExtArgs> = {}>(args?: Subset<T, Table$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Table$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Table$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Table model
   */
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'String'>
    readonly tableNumber: FieldRef<"Table", 'String'>
    readonly capacity: FieldRef<"Table", 'Int'>
    readonly status: FieldRef<"Table", 'TableStatus'>
    readonly createdAt: FieldRef<"Table", 'DateTime'>
    readonly updatedAt: FieldRef<"Table", 'DateTime'>
    readonly active: FieldRef<"Table", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }

  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
  }

  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }

  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to delete.
     */
    limit?: number
  }

  /**
   * Table.seats
   */
  export type Table$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    cursor?: SeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Table.reservations
   */
  export type Table$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
  }


  /**
   * Model Seat
   */

  export type AggregateSeat = {
    _count: SeatCountAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  export type SeatMinAggregateOutputType = {
    id: string | null
    seatNumber: string | null
    status: $Enums.TableStatus | null
    tableId: string | null
  }

  export type SeatMaxAggregateOutputType = {
    id: string | null
    seatNumber: string | null
    status: $Enums.TableStatus | null
    tableId: string | null
  }

  export type SeatCountAggregateOutputType = {
    id: number
    seatNumber: number
    status: number
    tableId: number
    _all: number
  }


  export type SeatMinAggregateInputType = {
    id?: true
    seatNumber?: true
    status?: true
    tableId?: true
  }

  export type SeatMaxAggregateInputType = {
    id?: true
    seatNumber?: true
    status?: true
    tableId?: true
  }

  export type SeatCountAggregateInputType = {
    id?: true
    seatNumber?: true
    status?: true
    tableId?: true
    _all?: true
  }

  export type SeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seat to aggregate.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seats
    **/
    _count?: true | SeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMaxAggregateInputType
  }

  export type GetSeatAggregateType<T extends SeatAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat[P]>
      : GetScalarType<T[P], AggregateSeat[P]>
  }




  export type SeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithAggregationInput | SeatOrderByWithAggregationInput[]
    by: SeatScalarFieldEnum[] | SeatScalarFieldEnum
    having?: SeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatCountAggregateInputType | true
    _min?: SeatMinAggregateInputType
    _max?: SeatMaxAggregateInputType
  }

  export type SeatGroupByOutputType = {
    id: string
    seatNumber: string
    status: $Enums.TableStatus
    tableId: string
    _count: SeatCountAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  type GetSeatGroupByPayload<T extends SeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatGroupByOutputType[P]>
            : GetScalarType<T[P], SeatGroupByOutputType[P]>
        }
      >
    >


  export type SeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seatNumber?: boolean
    status?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    orders?: boolean | Seat$ordersArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>



  export type SeatSelectScalar = {
    id?: boolean
    seatNumber?: boolean
    status?: boolean
    tableId?: boolean
  }

  export type SeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seatNumber" | "status" | "tableId", ExtArgs["result"]["seat"]>
  export type SeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    orders?: boolean | Seat$ordersArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seat"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seatNumber: string
      status: $Enums.TableStatus
      tableId: string
    }, ExtArgs["result"]["seat"]>
    composites: {}
  }

  type SeatGetPayload<S extends boolean | null | undefined | SeatDefaultArgs> = $Result.GetResult<Prisma.$SeatPayload, S>

  type SeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeatCountAggregateInputType | true
    }

  export interface SeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seat'], meta: { name: 'Seat' } }
    /**
     * Find zero or one Seat that matches the filter.
     * @param {SeatFindUniqueArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatFindUniqueArgs>(args: SelectSubset<T, SeatFindUniqueArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeatFindUniqueOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatFindFirstArgs>(args?: SelectSubset<T, SeatFindFirstArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seat.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatWithIdOnly = await prisma.seat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeatFindManyArgs>(args?: SelectSubset<T, SeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seat.
     * @param {SeatCreateArgs} args - Arguments to create a Seat.
     * @example
     * // Create one Seat
     * const Seat = await prisma.seat.create({
     *   data: {
     *     // ... data to create a Seat
     *   }
     * })
     * 
     */
    create<T extends SeatCreateArgs>(args: SelectSubset<T, SeatCreateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seats.
     * @param {SeatCreateManyArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatCreateManyArgs>(args?: SelectSubset<T, SeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seat.
     * @param {SeatDeleteArgs} args - Arguments to delete one Seat.
     * @example
     * // Delete one Seat
     * const Seat = await prisma.seat.delete({
     *   where: {
     *     // ... filter to delete one Seat
     *   }
     * })
     * 
     */
    delete<T extends SeatDeleteArgs>(args: SelectSubset<T, SeatDeleteArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seat.
     * @param {SeatUpdateArgs} args - Arguments to update one Seat.
     * @example
     * // Update one Seat
     * const seat = await prisma.seat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatUpdateArgs>(args: SelectSubset<T, SeatUpdateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seats.
     * @param {SeatDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatDeleteManyArgs>(args?: SelectSubset<T, SeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatUpdateManyArgs>(args: SelectSubset<T, SeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seat.
     * @param {SeatUpsertArgs} args - Arguments to update or create a Seat.
     * @example
     * // Update or create a Seat
     * const seat = await prisma.seat.upsert({
     *   create: {
     *     // ... data to create a Seat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat we want to update
     *   }
     * })
     */
    upsert<T extends SeatUpsertArgs>(args: SelectSubset<T, SeatUpsertArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seat.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends SeatCountArgs>(
      args?: Subset<T, SeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeatAggregateArgs>(args: Subset<T, SeatAggregateArgs>): Prisma.PrismaPromise<GetSeatAggregateType<T>>

    /**
     * Group by Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatGroupByArgs} args - Group by arguments.
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
      T extends SeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatGroupByArgs['orderBy'] }
        : { orderBy?: SeatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seat model
   */
  readonly fields: SeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends Seat$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Seat$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Seat model
   */
  interface SeatFieldRefs {
    readonly id: FieldRef<"Seat", 'String'>
    readonly seatNumber: FieldRef<"Seat", 'String'>
    readonly status: FieldRef<"Seat", 'TableStatus'>
    readonly tableId: FieldRef<"Seat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Seat findUnique
   */
  export type SeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findUniqueOrThrow
   */
  export type SeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findFirst
   */
  export type SeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findFirstOrThrow
   */
  export type SeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findMany
   */
  export type SeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seats to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat create
   */
  export type SeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to create a Seat.
     */
    data: XOR<SeatCreateInput, SeatUncheckedCreateInput>
  }

  /**
   * Seat createMany
   */
  export type SeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seat update
   */
  export type SeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to update a Seat.
     */
    data: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
    /**
     * Choose, which Seat to update.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat updateMany
   */
  export type SeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seats.
     */
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyInput>
    /**
     * Filter which Seats to update
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to update.
     */
    limit?: number
  }

  /**
   * Seat upsert
   */
  export type SeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The filter to search for the Seat to update in case it exists.
     */
    where: SeatWhereUniqueInput
    /**
     * In case the Seat found by the `where` argument doesn't exist, create a new Seat with this data.
     */
    create: XOR<SeatCreateInput, SeatUncheckedCreateInput>
    /**
     * In case the Seat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
  }

  /**
   * Seat delete
   */
  export type SeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter which Seat to delete.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat deleteMany
   */
  export type SeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seats to delete
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to delete.
     */
    limit?: number
  }

  /**
   * Seat.orders
   */
  export type Seat$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Seat without action
   */
  export type SeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    partySize: number | null
  }

  export type ReservationSumAggregateOutputType = {
    partySize: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    customerName: string | null
    phoneNumber: string | null
    partySize: number | null
    reservationTime: Date | null
    notes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    customerName: string | null
    phoneNumber: string | null
    partySize: number | null
    reservationTime: Date | null
    notes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    customerName: number
    phoneNumber: number
    partySize: number
    reservationTime: number
    notes: number
    status: number
    createdAt: number
    updatedAt: number
    tableId: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    partySize?: true
  }

  export type ReservationSumAggregateInputType = {
    partySize?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    customerName?: true
    phoneNumber?: true
    partySize?: true
    reservationTime?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    customerName?: true
    phoneNumber?: true
    partySize?: true
    reservationTime?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    customerName?: true
    phoneNumber?: true
    partySize?: true
    reservationTime?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    customerName: string
    phoneNumber: string
    partySize: number
    reservationTime: Date
    notes: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    tableId: string
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    phoneNumber?: boolean
    partySize?: boolean
    reservationTime?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>



  export type ReservationSelectScalar = {
    id?: boolean
    customerName?: boolean
    phoneNumber?: boolean
    partySize?: boolean
    reservationTime?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerName" | "phoneNumber" | "partySize" | "reservationTime" | "notes" | "status" | "createdAt" | "updatedAt" | "tableId", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerName: string
      phoneNumber: string
      partySize: number
      reservationTime: Date
      notes: string | null
      status: string
      createdAt: Date
      updatedAt: Date
      tableId: string
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly customerName: FieldRef<"Reservation", 'String'>
    readonly phoneNumber: FieldRef<"Reservation", 'String'>
    readonly partySize: FieldRef<"Reservation", 'Int'>
    readonly reservationTime: FieldRef<"Reservation", 'DateTime'>
    readonly notes: FieldRef<"Reservation", 'String'>
    readonly status: FieldRef<"Reservation", 'String'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
    readonly tableId: FieldRef<"Reservation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type CourseSumAggregateOutputType = {
    price: Decimal | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: Decimal
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseItems?: boolean | Course$courseItemsArgs<ExtArgs>
    orders?: boolean | Course$ordersArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>



  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseItems?: boolean | Course$courseItemsArgs<ExtArgs>
    orders?: boolean | Course$ordersArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      courseItems: Prisma.$CourseItemPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: Prisma.Decimal
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseItems<T extends Course$courseItemsArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Course$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Course$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Decimal'>
    readonly isActive: FieldRef<"Course", 'Boolean'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.courseItems
   */
  export type Course$courseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
    where?: CourseItemWhereInput
    orderBy?: CourseItemOrderByWithRelationInput | CourseItemOrderByWithRelationInput[]
    cursor?: CourseItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseItemScalarFieldEnum | CourseItemScalarFieldEnum[]
  }

  /**
   * Course.orders
   */
  export type Course$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseItem
   */

  export type AggregateCourseItem = {
    _count: CourseItemCountAggregateOutputType | null
    _avg: CourseItemAvgAggregateOutputType | null
    _sum: CourseItemSumAggregateOutputType | null
    _min: CourseItemMinAggregateOutputType | null
    _max: CourseItemMaxAggregateOutputType | null
  }

  export type CourseItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type CourseItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type CourseItemMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    courseId: string | null
    menuItemId: string | null
  }

  export type CourseItemMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    courseId: string | null
    menuItemId: string | null
  }

  export type CourseItemCountAggregateOutputType = {
    id: number
    quantity: number
    courseId: number
    menuItemId: number
    _all: number
  }


  export type CourseItemAvgAggregateInputType = {
    quantity?: true
  }

  export type CourseItemSumAggregateInputType = {
    quantity?: true
  }

  export type CourseItemMinAggregateInputType = {
    id?: true
    quantity?: true
    courseId?: true
    menuItemId?: true
  }

  export type CourseItemMaxAggregateInputType = {
    id?: true
    quantity?: true
    courseId?: true
    menuItemId?: true
  }

  export type CourseItemCountAggregateInputType = {
    id?: true
    quantity?: true
    courseId?: true
    menuItemId?: true
    _all?: true
  }

  export type CourseItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseItem to aggregate.
     */
    where?: CourseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseItems to fetch.
     */
    orderBy?: CourseItemOrderByWithRelationInput | CourseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseItems
    **/
    _count?: true | CourseItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseItemMaxAggregateInputType
  }

  export type GetCourseItemAggregateType<T extends CourseItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseItem[P]>
      : GetScalarType<T[P], AggregateCourseItem[P]>
  }




  export type CourseItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseItemWhereInput
    orderBy?: CourseItemOrderByWithAggregationInput | CourseItemOrderByWithAggregationInput[]
    by: CourseItemScalarFieldEnum[] | CourseItemScalarFieldEnum
    having?: CourseItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseItemCountAggregateInputType | true
    _avg?: CourseItemAvgAggregateInputType
    _sum?: CourseItemSumAggregateInputType
    _min?: CourseItemMinAggregateInputType
    _max?: CourseItemMaxAggregateInputType
  }

  export type CourseItemGroupByOutputType = {
    id: string
    quantity: number
    courseId: string
    menuItemId: string
    _count: CourseItemCountAggregateOutputType | null
    _avg: CourseItemAvgAggregateOutputType | null
    _sum: CourseItemSumAggregateOutputType | null
    _min: CourseItemMinAggregateOutputType | null
    _max: CourseItemMaxAggregateOutputType | null
  }

  type GetCourseItemGroupByPayload<T extends CourseItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseItemGroupByOutputType[P]>
            : GetScalarType<T[P], CourseItemGroupByOutputType[P]>
        }
      >
    >


  export type CourseItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    courseId?: boolean
    menuItemId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseItem"]>



  export type CourseItemSelectScalar = {
    id?: boolean
    quantity?: boolean
    courseId?: boolean
    menuItemId?: boolean
  }

  export type CourseItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "courseId" | "menuItemId", ExtArgs["result"]["courseItem"]>
  export type CourseItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }

  export type $CourseItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseItem"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      courseId: string
      menuItemId: string
    }, ExtArgs["result"]["courseItem"]>
    composites: {}
  }

  type CourseItemGetPayload<S extends boolean | null | undefined | CourseItemDefaultArgs> = $Result.GetResult<Prisma.$CourseItemPayload, S>

  type CourseItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseItemCountAggregateInputType | true
    }

  export interface CourseItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseItem'], meta: { name: 'CourseItem' } }
    /**
     * Find zero or one CourseItem that matches the filter.
     * @param {CourseItemFindUniqueArgs} args - Arguments to find a CourseItem
     * @example
     * // Get one CourseItem
     * const courseItem = await prisma.courseItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseItemFindUniqueArgs>(args: SelectSubset<T, CourseItemFindUniqueArgs<ExtArgs>>): Prisma__CourseItemClient<$Result.GetResult<Prisma.$CourseItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseItemFindUniqueOrThrowArgs} args - Arguments to find a CourseItem
     * @example
     * // Get one CourseItem
     * const courseItem = await prisma.courseItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseItemClient<$Result.GetResult<Prisma.$CourseItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseItemFindFirstArgs} args - Arguments to find a CourseItem
     * @example
     * // Get one CourseItem
     * const courseItem = await prisma.courseItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseItemFindFirstArgs>(args?: SelectSubset<T, CourseItemFindFirstArgs<ExtArgs>>): Prisma__CourseItemClient<$Result.GetResult<Prisma.$CourseItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseItemFindFirstOrThrowArgs} args - Arguments to find a CourseItem
     * @example
     * // Get one CourseItem
     * const courseItem = await prisma.courseItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseItemClient<$Result.GetResult<Prisma.$CourseItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseItems
     * const courseItems = await prisma.courseItem.findMany()
     * 
     * // Get first 10 CourseItems
     * const courseItems = await prisma.courseItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseItemWithIdOnly = await prisma.courseItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseItemFindManyArgs>(args?: SelectSubset<T, CourseItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseItem.
     * @param {CourseItemCreateArgs} args - Arguments to create a CourseItem.
     * @example
     * // Create one CourseItem
     * const CourseItem = await prisma.courseItem.create({
     *   data: {
     *     // ... data to create a CourseItem
     *   }
     * })
     * 
     */
    create<T extends CourseItemCreateArgs>(args: SelectSubset<T, CourseItemCreateArgs<ExtArgs>>): Prisma__CourseItemClient<$Result.GetResult<Prisma.$CourseItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseItems.
     * @param {CourseItemCreateManyArgs} args - Arguments to create many CourseItems.
     * @example
     * // Create many CourseItems
     * const courseItem = await prisma.courseItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseItemCreateManyArgs>(args?: SelectSubset<T, CourseItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourseItem.
     * @param {CourseItemDeleteArgs} args - Arguments to delete one CourseItem.
     * @example
     * // Delete one CourseItem
     * const CourseItem = await prisma.courseItem.delete({
     *   where: {
     *     // ... filter to delete one CourseItem
     *   }
     * })
     * 
     */
    delete<T extends CourseItemDeleteArgs>(args: SelectSubset<T, CourseItemDeleteArgs<ExtArgs>>): Prisma__CourseItemClient<$Result.GetResult<Prisma.$CourseItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseItem.
     * @param {CourseItemUpdateArgs} args - Arguments to update one CourseItem.
     * @example
     * // Update one CourseItem
     * const courseItem = await prisma.courseItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseItemUpdateArgs>(args: SelectSubset<T, CourseItemUpdateArgs<ExtArgs>>): Prisma__CourseItemClient<$Result.GetResult<Prisma.$CourseItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseItems.
     * @param {CourseItemDeleteManyArgs} args - Arguments to filter CourseItems to delete.
     * @example
     * // Delete a few CourseItems
     * const { count } = await prisma.courseItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseItemDeleteManyArgs>(args?: SelectSubset<T, CourseItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseItems
     * const courseItem = await prisma.courseItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseItemUpdateManyArgs>(args: SelectSubset<T, CourseItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseItem.
     * @param {CourseItemUpsertArgs} args - Arguments to update or create a CourseItem.
     * @example
     * // Update or create a CourseItem
     * const courseItem = await prisma.courseItem.upsert({
     *   create: {
     *     // ... data to create a CourseItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseItem we want to update
     *   }
     * })
     */
    upsert<T extends CourseItemUpsertArgs>(args: SelectSubset<T, CourseItemUpsertArgs<ExtArgs>>): Prisma__CourseItemClient<$Result.GetResult<Prisma.$CourseItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseItemCountArgs} args - Arguments to filter CourseItems to count.
     * @example
     * // Count the number of CourseItems
     * const count = await prisma.courseItem.count({
     *   where: {
     *     // ... the filter for the CourseItems we want to count
     *   }
     * })
    **/
    count<T extends CourseItemCountArgs>(
      args?: Subset<T, CourseItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseItemAggregateArgs>(args: Subset<T, CourseItemAggregateArgs>): Prisma.PrismaPromise<GetCourseItemAggregateType<T>>

    /**
     * Group by CourseItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseItemGroupByArgs} args - Group by arguments.
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
      T extends CourseItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseItemGroupByArgs['orderBy'] }
        : { orderBy?: CourseItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseItem model
   */
  readonly fields: CourseItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CourseItem model
   */
  interface CourseItemFieldRefs {
    readonly id: FieldRef<"CourseItem", 'String'>
    readonly quantity: FieldRef<"CourseItem", 'Int'>
    readonly courseId: FieldRef<"CourseItem", 'String'>
    readonly menuItemId: FieldRef<"CourseItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseItem findUnique
   */
  export type CourseItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
    /**
     * Filter, which CourseItem to fetch.
     */
    where: CourseItemWhereUniqueInput
  }

  /**
   * CourseItem findUniqueOrThrow
   */
  export type CourseItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
    /**
     * Filter, which CourseItem to fetch.
     */
    where: CourseItemWhereUniqueInput
  }

  /**
   * CourseItem findFirst
   */
  export type CourseItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
    /**
     * Filter, which CourseItem to fetch.
     */
    where?: CourseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseItems to fetch.
     */
    orderBy?: CourseItemOrderByWithRelationInput | CourseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseItems.
     */
    cursor?: CourseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseItems.
     */
    distinct?: CourseItemScalarFieldEnum | CourseItemScalarFieldEnum[]
  }

  /**
   * CourseItem findFirstOrThrow
   */
  export type CourseItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
    /**
     * Filter, which CourseItem to fetch.
     */
    where?: CourseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseItems to fetch.
     */
    orderBy?: CourseItemOrderByWithRelationInput | CourseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseItems.
     */
    cursor?: CourseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseItems.
     */
    distinct?: CourseItemScalarFieldEnum | CourseItemScalarFieldEnum[]
  }

  /**
   * CourseItem findMany
   */
  export type CourseItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
    /**
     * Filter, which CourseItems to fetch.
     */
    where?: CourseItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseItems to fetch.
     */
    orderBy?: CourseItemOrderByWithRelationInput | CourseItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseItems.
     */
    cursor?: CourseItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseItems.
     */
    skip?: number
    distinct?: CourseItemScalarFieldEnum | CourseItemScalarFieldEnum[]
  }

  /**
   * CourseItem create
   */
  export type CourseItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseItem.
     */
    data: XOR<CourseItemCreateInput, CourseItemUncheckedCreateInput>
  }

  /**
   * CourseItem createMany
   */
  export type CourseItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseItems.
     */
    data: CourseItemCreateManyInput | CourseItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseItem update
   */
  export type CourseItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseItem.
     */
    data: XOR<CourseItemUpdateInput, CourseItemUncheckedUpdateInput>
    /**
     * Choose, which CourseItem to update.
     */
    where: CourseItemWhereUniqueInput
  }

  /**
   * CourseItem updateMany
   */
  export type CourseItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseItems.
     */
    data: XOR<CourseItemUpdateManyMutationInput, CourseItemUncheckedUpdateManyInput>
    /**
     * Filter which CourseItems to update
     */
    where?: CourseItemWhereInput
    /**
     * Limit how many CourseItems to update.
     */
    limit?: number
  }

  /**
   * CourseItem upsert
   */
  export type CourseItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseItem to update in case it exists.
     */
    where: CourseItemWhereUniqueInput
    /**
     * In case the CourseItem found by the `where` argument doesn't exist, create a new CourseItem with this data.
     */
    create: XOR<CourseItemCreateInput, CourseItemUncheckedCreateInput>
    /**
     * In case the CourseItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseItemUpdateInput, CourseItemUncheckedUpdateInput>
  }

  /**
   * CourseItem delete
   */
  export type CourseItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
    /**
     * Filter which CourseItem to delete.
     */
    where: CourseItemWhereUniqueInput
  }

  /**
   * CourseItem deleteMany
   */
  export type CourseItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseItems to delete
     */
    where?: CourseItemWhereInput
    /**
     * Limit how many CourseItems to delete.
     */
    limit?: number
  }

  /**
   * CourseItem without action
   */
  export type CourseItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
  }


  /**
   * Model MenuCategory
   */

  export type AggregateMenuCategory = {
    _count: MenuCategoryCountAggregateOutputType | null
    _avg: MenuCategoryAvgAggregateOutputType | null
    _sum: MenuCategorySumAggregateOutputType | null
    _min: MenuCategoryMinAggregateOutputType | null
    _max: MenuCategoryMaxAggregateOutputType | null
  }

  export type MenuCategoryAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type MenuCategorySumAggregateOutputType = {
    displayOrder: number | null
  }

  export type MenuCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    displayOrder: number | null
    active: boolean | null
  }

  export type MenuCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    displayOrder: number | null
    active: boolean | null
  }

  export type MenuCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    displayOrder: number
    active: number
    _all: number
  }


  export type MenuCategoryAvgAggregateInputType = {
    displayOrder?: true
  }

  export type MenuCategorySumAggregateInputType = {
    displayOrder?: true
  }

  export type MenuCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    displayOrder?: true
    active?: true
  }

  export type MenuCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    displayOrder?: true
    active?: true
  }

  export type MenuCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    displayOrder?: true
    active?: true
    _all?: true
  }

  export type MenuCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuCategory to aggregate.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuCategories
    **/
    _count?: true | MenuCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuCategoryMaxAggregateInputType
  }

  export type GetMenuCategoryAggregateType<T extends MenuCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuCategory[P]>
      : GetScalarType<T[P], AggregateMenuCategory[P]>
  }




  export type MenuCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuCategoryWhereInput
    orderBy?: MenuCategoryOrderByWithAggregationInput | MenuCategoryOrderByWithAggregationInput[]
    by: MenuCategoryScalarFieldEnum[] | MenuCategoryScalarFieldEnum
    having?: MenuCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCategoryCountAggregateInputType | true
    _avg?: MenuCategoryAvgAggregateInputType
    _sum?: MenuCategorySumAggregateInputType
    _min?: MenuCategoryMinAggregateInputType
    _max?: MenuCategoryMaxAggregateInputType
  }

  export type MenuCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    displayOrder: number
    active: boolean
    _count: MenuCategoryCountAggregateOutputType | null
    _avg: MenuCategoryAvgAggregateOutputType | null
    _sum: MenuCategorySumAggregateOutputType | null
    _min: MenuCategoryMinAggregateOutputType | null
    _max: MenuCategoryMaxAggregateOutputType | null
  }

  type GetMenuCategoryGroupByPayload<T extends MenuCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MenuCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MenuCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    displayOrder?: boolean
    active?: boolean
    menuItems?: boolean | MenuCategory$menuItemsArgs<ExtArgs>
    _count?: boolean | MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuCategory"]>



  export type MenuCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    displayOrder?: boolean
    active?: boolean
  }

  export type MenuCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "displayOrder" | "active", ExtArgs["result"]["menuCategory"]>
  export type MenuCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItems?: boolean | MenuCategory$menuItemsArgs<ExtArgs>
    _count?: boolean | MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MenuCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuCategory"
    objects: {
      menuItems: Prisma.$MenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      displayOrder: number
      active: boolean
    }, ExtArgs["result"]["menuCategory"]>
    composites: {}
  }

  type MenuCategoryGetPayload<S extends boolean | null | undefined | MenuCategoryDefaultArgs> = $Result.GetResult<Prisma.$MenuCategoryPayload, S>

  type MenuCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCategoryCountAggregateInputType | true
    }

  export interface MenuCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuCategory'], meta: { name: 'MenuCategory' } }
    /**
     * Find zero or one MenuCategory that matches the filter.
     * @param {MenuCategoryFindUniqueArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuCategoryFindUniqueArgs>(args: SelectSubset<T, MenuCategoryFindUniqueArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuCategoryFindUniqueOrThrowArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindFirstArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuCategoryFindFirstArgs>(args?: SelectSubset<T, MenuCategoryFindFirstArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindFirstOrThrowArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuCategories
     * const menuCategories = await prisma.menuCategory.findMany()
     * 
     * // Get first 10 MenuCategories
     * const menuCategories = await prisma.menuCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuCategoryWithIdOnly = await prisma.menuCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuCategoryFindManyArgs>(args?: SelectSubset<T, MenuCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuCategory.
     * @param {MenuCategoryCreateArgs} args - Arguments to create a MenuCategory.
     * @example
     * // Create one MenuCategory
     * const MenuCategory = await prisma.menuCategory.create({
     *   data: {
     *     // ... data to create a MenuCategory
     *   }
     * })
     * 
     */
    create<T extends MenuCategoryCreateArgs>(args: SelectSubset<T, MenuCategoryCreateArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuCategories.
     * @param {MenuCategoryCreateManyArgs} args - Arguments to create many MenuCategories.
     * @example
     * // Create many MenuCategories
     * const menuCategory = await prisma.menuCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCategoryCreateManyArgs>(args?: SelectSubset<T, MenuCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MenuCategory.
     * @param {MenuCategoryDeleteArgs} args - Arguments to delete one MenuCategory.
     * @example
     * // Delete one MenuCategory
     * const MenuCategory = await prisma.menuCategory.delete({
     *   where: {
     *     // ... filter to delete one MenuCategory
     *   }
     * })
     * 
     */
    delete<T extends MenuCategoryDeleteArgs>(args: SelectSubset<T, MenuCategoryDeleteArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuCategory.
     * @param {MenuCategoryUpdateArgs} args - Arguments to update one MenuCategory.
     * @example
     * // Update one MenuCategory
     * const menuCategory = await prisma.menuCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuCategoryUpdateArgs>(args: SelectSubset<T, MenuCategoryUpdateArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuCategories.
     * @param {MenuCategoryDeleteManyArgs} args - Arguments to filter MenuCategories to delete.
     * @example
     * // Delete a few MenuCategories
     * const { count } = await prisma.menuCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuCategoryDeleteManyArgs>(args?: SelectSubset<T, MenuCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuCategories
     * const menuCategory = await prisma.menuCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuCategoryUpdateManyArgs>(args: SelectSubset<T, MenuCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuCategory.
     * @param {MenuCategoryUpsertArgs} args - Arguments to update or create a MenuCategory.
     * @example
     * // Update or create a MenuCategory
     * const menuCategory = await prisma.menuCategory.upsert({
     *   create: {
     *     // ... data to create a MenuCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuCategory we want to update
     *   }
     * })
     */
    upsert<T extends MenuCategoryUpsertArgs>(args: SelectSubset<T, MenuCategoryUpsertArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryCountArgs} args - Arguments to filter MenuCategories to count.
     * @example
     * // Count the number of MenuCategories
     * const count = await prisma.menuCategory.count({
     *   where: {
     *     // ... the filter for the MenuCategories we want to count
     *   }
     * })
    **/
    count<T extends MenuCategoryCountArgs>(
      args?: Subset<T, MenuCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuCategoryAggregateArgs>(args: Subset<T, MenuCategoryAggregateArgs>): Prisma.PrismaPromise<GetMenuCategoryAggregateType<T>>

    /**
     * Group by MenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryGroupByArgs} args - Group by arguments.
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
      T extends MenuCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MenuCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuCategory model
   */
  readonly fields: MenuCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuItems<T extends MenuCategory$menuItemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuCategory$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MenuCategory model
   */
  interface MenuCategoryFieldRefs {
    readonly id: FieldRef<"MenuCategory", 'String'>
    readonly name: FieldRef<"MenuCategory", 'String'>
    readonly description: FieldRef<"MenuCategory", 'String'>
    readonly displayOrder: FieldRef<"MenuCategory", 'Int'>
    readonly active: FieldRef<"MenuCategory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MenuCategory findUnique
   */
  export type MenuCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory findUniqueOrThrow
   */
  export type MenuCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory findFirst
   */
  export type MenuCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuCategories.
     */
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory findFirstOrThrow
   */
  export type MenuCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuCategories.
     */
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory findMany
   */
  export type MenuCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategories to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory create
   */
  export type MenuCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuCategory.
     */
    data: XOR<MenuCategoryCreateInput, MenuCategoryUncheckedCreateInput>
  }

  /**
   * MenuCategory createMany
   */
  export type MenuCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuCategories.
     */
    data: MenuCategoryCreateManyInput | MenuCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuCategory update
   */
  export type MenuCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuCategory.
     */
    data: XOR<MenuCategoryUpdateInput, MenuCategoryUncheckedUpdateInput>
    /**
     * Choose, which MenuCategory to update.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory updateMany
   */
  export type MenuCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuCategories.
     */
    data: XOR<MenuCategoryUpdateManyMutationInput, MenuCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MenuCategories to update
     */
    where?: MenuCategoryWhereInput
    /**
     * Limit how many MenuCategories to update.
     */
    limit?: number
  }

  /**
   * MenuCategory upsert
   */
  export type MenuCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuCategory to update in case it exists.
     */
    where: MenuCategoryWhereUniqueInput
    /**
     * In case the MenuCategory found by the `where` argument doesn't exist, create a new MenuCategory with this data.
     */
    create: XOR<MenuCategoryCreateInput, MenuCategoryUncheckedCreateInput>
    /**
     * In case the MenuCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuCategoryUpdateInput, MenuCategoryUncheckedUpdateInput>
  }

  /**
   * MenuCategory delete
   */
  export type MenuCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter which MenuCategory to delete.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory deleteMany
   */
  export type MenuCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuCategories to delete
     */
    where?: MenuCategoryWhereInput
    /**
     * Limit how many MenuCategories to delete.
     */
    limit?: number
  }

  /**
   * MenuCategory.menuItems
   */
  export type MenuCategory$menuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * MenuCategory without action
   */
  export type MenuCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
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
  }

  export type MenuItemSumAggregateOutputType = {
    price: Decimal | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    imageUrl: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    imageUrl: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    imageUrl: number
    active: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    price?: true
  }

  export type MenuItemSumAggregateInputType = {
    price?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
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
    name: string
    description: string | null
    price: Decimal
    imageUrl: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    categoryId: string
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
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | MenuCategoryDefaultArgs<ExtArgs>
    courseItems?: boolean | MenuItem$courseItemsArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    ingredients?: boolean | MenuItem$ingredientsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>



  export type MenuItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
  }

  export type MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "imageUrl" | "active" | "createdAt" | "updatedAt" | "categoryId", ExtArgs["result"]["menuItem"]>
  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MenuCategoryDefaultArgs<ExtArgs>
    courseItems?: boolean | MenuItem$courseItemsArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    ingredients?: boolean | MenuItem$ingredientsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      category: Prisma.$MenuCategoryPayload<ExtArgs>
      courseItems: Prisma.$CourseItemPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      ingredients: Prisma.$MenuItemIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: Prisma.Decimal
      imageUrl: string | null
      active: boolean
      createdAt: Date
      updatedAt: Date
      categoryId: string
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
    category<T extends MenuCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuCategoryDefaultArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseItems<T extends MenuItem$courseItemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$courseItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends MenuItem$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ingredients<T extends MenuItem$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"MenuItem", 'String'>
    readonly description: FieldRef<"MenuItem", 'String'>
    readonly price: FieldRef<"MenuItem", 'Decimal'>
    readonly imageUrl: FieldRef<"MenuItem", 'String'>
    readonly active: FieldRef<"MenuItem", 'Boolean'>
    readonly createdAt: FieldRef<"MenuItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItem", 'DateTime'>
    readonly categoryId: FieldRef<"MenuItem", 'String'>
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
   * MenuItem.courseItems
   */
  export type MenuItem$courseItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseItem
     */
    select?: CourseItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseItem
     */
    omit?: CourseItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseItemInclude<ExtArgs> | null
    where?: CourseItemWhereInput
    orderBy?: CourseItemOrderByWithRelationInput | CourseItemOrderByWithRelationInput[]
    cursor?: CourseItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseItemScalarFieldEnum | CourseItemScalarFieldEnum[]
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
   * MenuItem.ingredients
   */
  export type MenuItem$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
    where?: MenuItemIngredientWhereInput
    orderBy?: MenuItemIngredientOrderByWithRelationInput | MenuItemIngredientOrderByWithRelationInput[]
    cursor?: MenuItemIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemIngredientScalarFieldEnum | MenuItemIngredientScalarFieldEnum[]
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
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    status: $Enums.OrderStatus | null
    notes: string | null
    hasCourse: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    seatId: string | null
    courseId: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    status: $Enums.OrderStatus | null
    notes: string | null
    hasCourse: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    seatId: string | null
    courseId: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    status: number
    notes: number
    hasCourse: number
    createdAt: number
    updatedAt: number
    userId: number
    seatId: number
    courseId: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    status?: true
    notes?: true
    hasCourse?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    seatId?: true
    courseId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    status?: true
    notes?: true
    hasCourse?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    seatId?: true
    courseId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    status?: true
    notes?: true
    hasCourse?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    seatId?: true
    courseId?: true
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
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    status: $Enums.OrderStatus
    notes: string | null
    hasCourse: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    seatId: string
    courseId: string | null
    _count: OrderCountAggregateOutputType | null
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
    orderNumber?: boolean
    status?: boolean
    notes?: boolean
    hasCourse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    seatId?: boolean
    courseId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
    course?: boolean | Order$courseArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    status?: boolean
    notes?: boolean
    hasCourse?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    seatId?: boolean
    courseId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "status" | "notes" | "hasCourse" | "createdAt" | "updatedAt" | "userId" | "seatId" | "courseId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
    course?: boolean | Order$courseArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      seat: Prisma.$SeatPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs> | null
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      status: $Enums.OrderStatus
      notes: string | null
      hasCourse: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
      seatId: string
      courseId: string | null
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends SeatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeatDefaultArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends Order$courseArgs<ExtArgs> = {}>(args?: Subset<T, Order$courseArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Order$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly hasCourse: FieldRef<"Order", 'Boolean'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly seatId: FieldRef<"Order", 'String'>
    readonly courseId: FieldRef<"Order", 'String'>
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
   * Order.course
   */
  export type Order$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
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
   * Order.payment
   */
  export type Order$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
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
    price: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    price: Decimal | null
    notes: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: string | null
    menuItemId: string | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    price: Decimal | null
    notes: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: string | null
    menuItemId: string | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    quantity: number
    price: number
    notes: number
    status: number
    createdAt: number
    updatedAt: number
    orderId: number
    menuItemId: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    menuItemId?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    menuItemId?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    quantity?: true
    price?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    menuItemId?: true
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
    quantity: number
    price: Decimal
    notes: string | null
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    orderId: string
    menuItemId: string
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
    quantity?: boolean
    price?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    menuItemId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>



  export type OrderItemSelectScalar = {
    id?: boolean
    quantity?: boolean
    price?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    menuItemId?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "price" | "notes" | "status" | "createdAt" | "updatedAt" | "orderId" | "menuItemId", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      price: Prisma.Decimal
      notes: string | null
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
      orderId: string
      menuItemId: string
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
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly price: FieldRef<"OrderItem", 'Decimal'>
    readonly notes: FieldRef<"OrderItem", 'String'>
    readonly status: FieldRef<"OrderItem", 'OrderStatus'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItem", 'DateTime'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly menuItemId: FieldRef<"OrderItem", 'String'>
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
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    receiptNumber: string | null
    amount: Decimal | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    transactionRef: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: string | null
    userId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    receiptNumber: string | null
    amount: Decimal | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    transactionRef: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: string | null
    userId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    receiptNumber: number
    amount: number
    method: number
    status: number
    transactionRef: number
    notes: number
    createdAt: number
    updatedAt: number
    orderId: number
    userId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    receiptNumber?: true
    amount?: true
    method?: true
    status?: true
    transactionRef?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    userId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    receiptNumber?: true
    amount?: true
    method?: true
    status?: true
    transactionRef?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    userId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    receiptNumber?: true
    amount?: true
    method?: true
    status?: true
    transactionRef?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    userId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    receiptNumber: string
    amount: Decimal
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    transactionRef: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    orderId: string
    userId: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiptNumber?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    transactionRef?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    userId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    receiptNumber?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    transactionRef?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    userId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "receiptNumber" | "amount" | "method" | "status" | "transactionRef" | "notes" | "createdAt" | "updatedAt" | "orderId" | "userId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      receiptNumber: string
      amount: Prisma.Decimal
      method: $Enums.PaymentMethod
      status: $Enums.PaymentStatus
      transactionRef: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
      orderId: string
      userId: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly receiptNumber: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly transactionRef: FieldRef<"Payment", 'String'>
    readonly notes: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model InventoryCategory
   */

  export type AggregateInventoryCategory = {
    _count: InventoryCategoryCountAggregateOutputType | null
    _min: InventoryCategoryMinAggregateOutputType | null
    _max: InventoryCategoryMaxAggregateOutputType | null
  }

  export type InventoryCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type InventoryCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type InventoryCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type InventoryCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type InventoryCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type InventoryCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type InventoryCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryCategory to aggregate.
     */
    where?: InventoryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCategories to fetch.
     */
    orderBy?: InventoryCategoryOrderByWithRelationInput | InventoryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryCategories
    **/
    _count?: true | InventoryCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryCategoryMaxAggregateInputType
  }

  export type GetInventoryCategoryAggregateType<T extends InventoryCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryCategory[P]>
      : GetScalarType<T[P], AggregateInventoryCategory[P]>
  }




  export type InventoryCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCategoryWhereInput
    orderBy?: InventoryCategoryOrderByWithAggregationInput | InventoryCategoryOrderByWithAggregationInput[]
    by: InventoryCategoryScalarFieldEnum[] | InventoryCategoryScalarFieldEnum
    having?: InventoryCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCategoryCountAggregateInputType | true
    _min?: InventoryCategoryMinAggregateInputType
    _max?: InventoryCategoryMaxAggregateInputType
  }

  export type InventoryCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: InventoryCategoryCountAggregateOutputType | null
    _min: InventoryCategoryMinAggregateOutputType | null
    _max: InventoryCategoryMaxAggregateOutputType | null
  }

  type GetInventoryCategoryGroupByPayload<T extends InventoryCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryCategoryGroupByOutputType[P]>
        }
      >
    >


  export type InventoryCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    inventoryItems?: boolean | InventoryCategory$inventoryItemsArgs<ExtArgs>
    _count?: boolean | InventoryCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryCategory"]>



  export type InventoryCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type InventoryCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["inventoryCategory"]>
  export type InventoryCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItems?: boolean | InventoryCategory$inventoryItemsArgs<ExtArgs>
    _count?: boolean | InventoryCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InventoryCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryCategory"
    objects: {
      inventoryItems: Prisma.$InventoryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["inventoryCategory"]>
    composites: {}
  }

  type InventoryCategoryGetPayload<S extends boolean | null | undefined | InventoryCategoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryCategoryPayload, S>

  type InventoryCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCategoryCountAggregateInputType | true
    }

  export interface InventoryCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryCategory'], meta: { name: 'InventoryCategory' } }
    /**
     * Find zero or one InventoryCategory that matches the filter.
     * @param {InventoryCategoryFindUniqueArgs} args - Arguments to find a InventoryCategory
     * @example
     * // Get one InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryCategoryFindUniqueArgs>(args: SelectSubset<T, InventoryCategoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryCategoryFindUniqueOrThrowArgs} args - Arguments to find a InventoryCategory
     * @example
     * // Get one InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryFindFirstArgs} args - Arguments to find a InventoryCategory
     * @example
     * // Get one InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryCategoryFindFirstArgs>(args?: SelectSubset<T, InventoryCategoryFindFirstArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryFindFirstOrThrowArgs} args - Arguments to find a InventoryCategory
     * @example
     * // Get one InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryCategories
     * const inventoryCategories = await prisma.inventoryCategory.findMany()
     * 
     * // Get first 10 InventoryCategories
     * const inventoryCategories = await prisma.inventoryCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryCategoryWithIdOnly = await prisma.inventoryCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryCategoryFindManyArgs>(args?: SelectSubset<T, InventoryCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryCategory.
     * @param {InventoryCategoryCreateArgs} args - Arguments to create a InventoryCategory.
     * @example
     * // Create one InventoryCategory
     * const InventoryCategory = await prisma.inventoryCategory.create({
     *   data: {
     *     // ... data to create a InventoryCategory
     *   }
     * })
     * 
     */
    create<T extends InventoryCategoryCreateArgs>(args: SelectSubset<T, InventoryCategoryCreateArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryCategories.
     * @param {InventoryCategoryCreateManyArgs} args - Arguments to create many InventoryCategories.
     * @example
     * // Create many InventoryCategories
     * const inventoryCategory = await prisma.inventoryCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCategoryCreateManyArgs>(args?: SelectSubset<T, InventoryCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryCategory.
     * @param {InventoryCategoryDeleteArgs} args - Arguments to delete one InventoryCategory.
     * @example
     * // Delete one InventoryCategory
     * const InventoryCategory = await prisma.inventoryCategory.delete({
     *   where: {
     *     // ... filter to delete one InventoryCategory
     *   }
     * })
     * 
     */
    delete<T extends InventoryCategoryDeleteArgs>(args: SelectSubset<T, InventoryCategoryDeleteArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryCategory.
     * @param {InventoryCategoryUpdateArgs} args - Arguments to update one InventoryCategory.
     * @example
     * // Update one InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryCategoryUpdateArgs>(args: SelectSubset<T, InventoryCategoryUpdateArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryCategories.
     * @param {InventoryCategoryDeleteManyArgs} args - Arguments to filter InventoryCategories to delete.
     * @example
     * // Delete a few InventoryCategories
     * const { count } = await prisma.inventoryCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryCategoryDeleteManyArgs>(args?: SelectSubset<T, InventoryCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryCategories
     * const inventoryCategory = await prisma.inventoryCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryCategoryUpdateManyArgs>(args: SelectSubset<T, InventoryCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryCategory.
     * @param {InventoryCategoryUpsertArgs} args - Arguments to update or create a InventoryCategory.
     * @example
     * // Update or create a InventoryCategory
     * const inventoryCategory = await prisma.inventoryCategory.upsert({
     *   create: {
     *     // ... data to create a InventoryCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryCategory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryCategoryUpsertArgs>(args: SelectSubset<T, InventoryCategoryUpsertArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryCountArgs} args - Arguments to filter InventoryCategories to count.
     * @example
     * // Count the number of InventoryCategories
     * const count = await prisma.inventoryCategory.count({
     *   where: {
     *     // ... the filter for the InventoryCategories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCategoryCountArgs>(
      args?: Subset<T, InventoryCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryCategoryAggregateArgs>(args: Subset<T, InventoryCategoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryCategoryAggregateType<T>>

    /**
     * Group by InventoryCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCategoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryCategoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryCategory model
   */
  readonly fields: InventoryCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventoryItems<T extends InventoryCategory$inventoryItemsArgs<ExtArgs> = {}>(args?: Subset<T, InventoryCategory$inventoryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InventoryCategory model
   */
  interface InventoryCategoryFieldRefs {
    readonly id: FieldRef<"InventoryCategory", 'String'>
    readonly name: FieldRef<"InventoryCategory", 'String'>
    readonly description: FieldRef<"InventoryCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InventoryCategory findUnique
   */
  export type InventoryCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCategory
     */
    omit?: InventoryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCategory to fetch.
     */
    where: InventoryCategoryWhereUniqueInput
  }

  /**
   * InventoryCategory findUniqueOrThrow
   */
  export type InventoryCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCategory
     */
    omit?: InventoryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCategory to fetch.
     */
    where: InventoryCategoryWhereUniqueInput
  }

  /**
   * InventoryCategory findFirst
   */
  export type InventoryCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCategory
     */
    omit?: InventoryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCategory to fetch.
     */
    where?: InventoryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCategories to fetch.
     */
    orderBy?: InventoryCategoryOrderByWithRelationInput | InventoryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryCategories.
     */
    cursor?: InventoryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryCategories.
     */
    distinct?: InventoryCategoryScalarFieldEnum | InventoryCategoryScalarFieldEnum[]
  }

  /**
   * InventoryCategory findFirstOrThrow
   */
  export type InventoryCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCategory
     */
    omit?: InventoryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCategory to fetch.
     */
    where?: InventoryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCategories to fetch.
     */
    orderBy?: InventoryCategoryOrderByWithRelationInput | InventoryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryCategories.
     */
    cursor?: InventoryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryCategories.
     */
    distinct?: InventoryCategoryScalarFieldEnum | InventoryCategoryScalarFieldEnum[]
  }

  /**
   * InventoryCategory findMany
   */
  export type InventoryCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCategory
     */
    omit?: InventoryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCategoryInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCategories to fetch.
     */
    where?: InventoryCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryCategories to fetch.
     */
    orderBy?: InventoryCategoryOrderByWithRelationInput | InventoryCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryCategories.
     */
    cursor?: InventoryCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryCategories.
     */
    skip?: number
    distinct?: InventoryCategoryScalarFieldEnum | InventoryCategoryScalarFieldEnum[]
  }

  /**
   * InventoryCategory create
   */
  export type InventoryCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCategory
     */
    omit?: InventoryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryCategory.
     */
    data: XOR<InventoryCategoryCreateInput, InventoryCategoryUncheckedCreateInput>
  }

  /**
   * InventoryCategory createMany
   */
  export type InventoryCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryCategories.
     */
    data: InventoryCategoryCreateManyInput | InventoryCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryCategory update
   */
  export type InventoryCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCategory
     */
    omit?: InventoryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryCategory.
     */
    data: XOR<InventoryCategoryUpdateInput, InventoryCategoryUncheckedUpdateInput>
    /**
     * Choose, which InventoryCategory to update.
     */
    where: InventoryCategoryWhereUniqueInput
  }

  /**
   * InventoryCategory updateMany
   */
  export type InventoryCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryCategories.
     */
    data: XOR<InventoryCategoryUpdateManyMutationInput, InventoryCategoryUncheckedUpdateManyInput>
    /**
     * Filter which InventoryCategories to update
     */
    where?: InventoryCategoryWhereInput
    /**
     * Limit how many InventoryCategories to update.
     */
    limit?: number
  }

  /**
   * InventoryCategory upsert
   */
  export type InventoryCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCategory
     */
    omit?: InventoryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryCategory to update in case it exists.
     */
    where: InventoryCategoryWhereUniqueInput
    /**
     * In case the InventoryCategory found by the `where` argument doesn't exist, create a new InventoryCategory with this data.
     */
    create: XOR<InventoryCategoryCreateInput, InventoryCategoryUncheckedCreateInput>
    /**
     * In case the InventoryCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryCategoryUpdateInput, InventoryCategoryUncheckedUpdateInput>
  }

  /**
   * InventoryCategory delete
   */
  export type InventoryCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCategory
     */
    omit?: InventoryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCategoryInclude<ExtArgs> | null
    /**
     * Filter which InventoryCategory to delete.
     */
    where: InventoryCategoryWhereUniqueInput
  }

  /**
   * InventoryCategory deleteMany
   */
  export type InventoryCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryCategories to delete
     */
    where?: InventoryCategoryWhereInput
    /**
     * Limit how many InventoryCategories to delete.
     */
    limit?: number
  }

  /**
   * InventoryCategory.inventoryItems
   */
  export type InventoryCategory$inventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryCategory without action
   */
  export type InventoryCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCategory
     */
    select?: InventoryCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCategory
     */
    omit?: InventoryCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCategoryInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemAvgAggregateOutputType = {
    quantityInStock: Decimal | null
    alertThreshold: Decimal | null
    costPerUnit: Decimal | null
  }

  export type InventoryItemSumAggregateOutputType = {
    quantityInStock: Decimal | null
    alertThreshold: Decimal | null
    costPerUnit: Decimal | null
  }

  export type InventoryItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    unit: string | null
    quantityInStock: Decimal | null
    alertThreshold: Decimal | null
    costPerUnit: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    unit: string | null
    quantityInStock: Decimal | null
    alertThreshold: Decimal | null
    costPerUnit: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: string | null
  }

  export type InventoryItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    unit: number
    quantityInStock: number
    alertThreshold: number
    costPerUnit: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    quantityInStock?: true
    alertThreshold?: true
    costPerUnit?: true
  }

  export type InventoryItemSumAggregateInputType = {
    quantityInStock?: true
    alertThreshold?: true
    costPerUnit?: true
  }

  export type InventoryItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unit?: true
    quantityInStock?: true
    alertThreshold?: true
    costPerUnit?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unit?: true
    quantityInStock?: true
    alertThreshold?: true
    costPerUnit?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type InventoryItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    unit?: true
    quantityInStock?: true
    alertThreshold?: true
    costPerUnit?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _avg?: InventoryItemAvgAggregateInputType
    _sum?: InventoryItemSumAggregateInputType
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    id: string
    name: string
    description: string | null
    unit: string
    quantityInStock: Decimal
    alertThreshold: Decimal
    costPerUnit: Decimal
    createdAt: Date
    updatedAt: Date
    categoryId: string
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    quantityInStock?: boolean
    alertThreshold?: boolean
    costPerUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | InventoryCategoryDefaultArgs<ExtArgs>
    inventory?: boolean | InventoryItem$inventoryArgs<ExtArgs>
    inventoryTransactions?: boolean | InventoryItem$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>



  export type InventoryItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    unit?: boolean
    quantityInStock?: boolean
    alertThreshold?: boolean
    costPerUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
  }

  export type InventoryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "unit" | "quantityInStock" | "alertThreshold" | "costPerUnit" | "createdAt" | "updatedAt" | "categoryId", ExtArgs["result"]["inventoryItem"]>
  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | InventoryCategoryDefaultArgs<ExtArgs>
    inventory?: boolean | InventoryItem$inventoryArgs<ExtArgs>
    inventoryTransactions?: boolean | InventoryItem$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | InventoryItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      category: Prisma.$InventoryCategoryPayload<ExtArgs>
      inventory: Prisma.$MenuItemIngredientPayload<ExtArgs>[]
      inventoryTransactions: Prisma.$InventoryTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      unit: string
      quantityInStock: Prisma.Decimal
      alertThreshold: Prisma.Decimal
      costPerUnit: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
      categoryId: string
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
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
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends InventoryCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryCategoryDefaultArgs<ExtArgs>>): Prisma__InventoryCategoryClient<$Result.GetResult<Prisma.$InventoryCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventory<T extends InventoryItem$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryTransactions<T extends InventoryItem$inventoryTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItem$inventoryTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InventoryItem model
   */
  interface InventoryItemFieldRefs {
    readonly id: FieldRef<"InventoryItem", 'String'>
    readonly name: FieldRef<"InventoryItem", 'String'>
    readonly description: FieldRef<"InventoryItem", 'String'>
    readonly unit: FieldRef<"InventoryItem", 'String'>
    readonly quantityInStock: FieldRef<"InventoryItem", 'Decimal'>
    readonly alertThreshold: FieldRef<"InventoryItem", 'Decimal'>
    readonly costPerUnit: FieldRef<"InventoryItem", 'Decimal'>
    readonly createdAt: FieldRef<"InventoryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryItem", 'DateTime'>
    readonly categoryId: FieldRef<"InventoryItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to delete.
     */
    limit?: number
  }

  /**
   * InventoryItem.inventory
   */
  export type InventoryItem$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
    where?: MenuItemIngredientWhereInput
    orderBy?: MenuItemIngredientOrderByWithRelationInput | MenuItemIngredientOrderByWithRelationInput[]
    cursor?: MenuItemIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemIngredientScalarFieldEnum | MenuItemIngredientScalarFieldEnum[]
  }

  /**
   * InventoryItem.inventoryTransactions
   */
  export type InventoryItem$inventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    where?: InventoryTransactionWhereInput
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    cursor?: InventoryTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model MenuItemIngredient
   */

  export type AggregateMenuItemIngredient = {
    _count: MenuItemIngredientCountAggregateOutputType | null
    _avg: MenuItemIngredientAvgAggregateOutputType | null
    _sum: MenuItemIngredientSumAggregateOutputType | null
    _min: MenuItemIngredientMinAggregateOutputType | null
    _max: MenuItemIngredientMaxAggregateOutputType | null
  }

  export type MenuItemIngredientAvgAggregateOutputType = {
    quantityRequired: Decimal | null
  }

  export type MenuItemIngredientSumAggregateOutputType = {
    quantityRequired: Decimal | null
  }

  export type MenuItemIngredientMinAggregateOutputType = {
    id: string | null
    quantityRequired: Decimal | null
    menuItemId: string | null
    inventoryItemId: string | null
  }

  export type MenuItemIngredientMaxAggregateOutputType = {
    id: string | null
    quantityRequired: Decimal | null
    menuItemId: string | null
    inventoryItemId: string | null
  }

  export type MenuItemIngredientCountAggregateOutputType = {
    id: number
    quantityRequired: number
    menuItemId: number
    inventoryItemId: number
    _all: number
  }


  export type MenuItemIngredientAvgAggregateInputType = {
    quantityRequired?: true
  }

  export type MenuItemIngredientSumAggregateInputType = {
    quantityRequired?: true
  }

  export type MenuItemIngredientMinAggregateInputType = {
    id?: true
    quantityRequired?: true
    menuItemId?: true
    inventoryItemId?: true
  }

  export type MenuItemIngredientMaxAggregateInputType = {
    id?: true
    quantityRequired?: true
    menuItemId?: true
    inventoryItemId?: true
  }

  export type MenuItemIngredientCountAggregateInputType = {
    id?: true
    quantityRequired?: true
    menuItemId?: true
    inventoryItemId?: true
    _all?: true
  }

  export type MenuItemIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItemIngredient to aggregate.
     */
    where?: MenuItemIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemIngredients to fetch.
     */
    orderBy?: MenuItemIngredientOrderByWithRelationInput | MenuItemIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItemIngredients
    **/
    _count?: true | MenuItemIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemIngredientMaxAggregateInputType
  }

  export type GetMenuItemIngredientAggregateType<T extends MenuItemIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItemIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItemIngredient[P]>
      : GetScalarType<T[P], AggregateMenuItemIngredient[P]>
  }




  export type MenuItemIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemIngredientWhereInput
    orderBy?: MenuItemIngredientOrderByWithAggregationInput | MenuItemIngredientOrderByWithAggregationInput[]
    by: MenuItemIngredientScalarFieldEnum[] | MenuItemIngredientScalarFieldEnum
    having?: MenuItemIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemIngredientCountAggregateInputType | true
    _avg?: MenuItemIngredientAvgAggregateInputType
    _sum?: MenuItemIngredientSumAggregateInputType
    _min?: MenuItemIngredientMinAggregateInputType
    _max?: MenuItemIngredientMaxAggregateInputType
  }

  export type MenuItemIngredientGroupByOutputType = {
    id: string
    quantityRequired: Decimal
    menuItemId: string
    inventoryItemId: string
    _count: MenuItemIngredientCountAggregateOutputType | null
    _avg: MenuItemIngredientAvgAggregateOutputType | null
    _sum: MenuItemIngredientSumAggregateOutputType | null
    _min: MenuItemIngredientMinAggregateOutputType | null
    _max: MenuItemIngredientMaxAggregateOutputType | null
  }

  type GetMenuItemIngredientGroupByPayload<T extends MenuItemIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemIngredientGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantityRequired?: boolean
    menuItemId?: boolean
    inventoryItemId?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItemIngredient"]>



  export type MenuItemIngredientSelectScalar = {
    id?: boolean
    quantityRequired?: boolean
    menuItemId?: boolean
    inventoryItemId?: boolean
  }

  export type MenuItemIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantityRequired" | "menuItemId" | "inventoryItemId", ExtArgs["result"]["menuItemIngredient"]>
  export type MenuItemIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }

  export type $MenuItemIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItemIngredient"
    objects: {
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
      inventoryItem: Prisma.$InventoryItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantityRequired: Prisma.Decimal
      menuItemId: string
      inventoryItemId: string
    }, ExtArgs["result"]["menuItemIngredient"]>
    composites: {}
  }

  type MenuItemIngredientGetPayload<S extends boolean | null | undefined | MenuItemIngredientDefaultArgs> = $Result.GetResult<Prisma.$MenuItemIngredientPayload, S>

  type MenuItemIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemIngredientCountAggregateInputType | true
    }

  export interface MenuItemIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItemIngredient'], meta: { name: 'MenuItemIngredient' } }
    /**
     * Find zero or one MenuItemIngredient that matches the filter.
     * @param {MenuItemIngredientFindUniqueArgs} args - Arguments to find a MenuItemIngredient
     * @example
     * // Get one MenuItemIngredient
     * const menuItemIngredient = await prisma.menuItemIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemIngredientFindUniqueArgs>(args: SelectSubset<T, MenuItemIngredientFindUniqueArgs<ExtArgs>>): Prisma__MenuItemIngredientClient<$Result.GetResult<Prisma.$MenuItemIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItemIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemIngredientFindUniqueOrThrowArgs} args - Arguments to find a MenuItemIngredient
     * @example
     * // Get one MenuItemIngredient
     * const menuItemIngredient = await prisma.menuItemIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemIngredientClient<$Result.GetResult<Prisma.$MenuItemIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItemIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemIngredientFindFirstArgs} args - Arguments to find a MenuItemIngredient
     * @example
     * // Get one MenuItemIngredient
     * const menuItemIngredient = await prisma.menuItemIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemIngredientFindFirstArgs>(args?: SelectSubset<T, MenuItemIngredientFindFirstArgs<ExtArgs>>): Prisma__MenuItemIngredientClient<$Result.GetResult<Prisma.$MenuItemIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItemIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemIngredientFindFirstOrThrowArgs} args - Arguments to find a MenuItemIngredient
     * @example
     * // Get one MenuItemIngredient
     * const menuItemIngredient = await prisma.menuItemIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemIngredientClient<$Result.GetResult<Prisma.$MenuItemIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItemIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItemIngredients
     * const menuItemIngredients = await prisma.menuItemIngredient.findMany()
     * 
     * // Get first 10 MenuItemIngredients
     * const menuItemIngredients = await prisma.menuItemIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemIngredientWithIdOnly = await prisma.menuItemIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemIngredientFindManyArgs>(args?: SelectSubset<T, MenuItemIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItemIngredient.
     * @param {MenuItemIngredientCreateArgs} args - Arguments to create a MenuItemIngredient.
     * @example
     * // Create one MenuItemIngredient
     * const MenuItemIngredient = await prisma.menuItemIngredient.create({
     *   data: {
     *     // ... data to create a MenuItemIngredient
     *   }
     * })
     * 
     */
    create<T extends MenuItemIngredientCreateArgs>(args: SelectSubset<T, MenuItemIngredientCreateArgs<ExtArgs>>): Prisma__MenuItemIngredientClient<$Result.GetResult<Prisma.$MenuItemIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItemIngredients.
     * @param {MenuItemIngredientCreateManyArgs} args - Arguments to create many MenuItemIngredients.
     * @example
     * // Create many MenuItemIngredients
     * const menuItemIngredient = await prisma.menuItemIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemIngredientCreateManyArgs>(args?: SelectSubset<T, MenuItemIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MenuItemIngredient.
     * @param {MenuItemIngredientDeleteArgs} args - Arguments to delete one MenuItemIngredient.
     * @example
     * // Delete one MenuItemIngredient
     * const MenuItemIngredient = await prisma.menuItemIngredient.delete({
     *   where: {
     *     // ... filter to delete one MenuItemIngredient
     *   }
     * })
     * 
     */
    delete<T extends MenuItemIngredientDeleteArgs>(args: SelectSubset<T, MenuItemIngredientDeleteArgs<ExtArgs>>): Prisma__MenuItemIngredientClient<$Result.GetResult<Prisma.$MenuItemIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItemIngredient.
     * @param {MenuItemIngredientUpdateArgs} args - Arguments to update one MenuItemIngredient.
     * @example
     * // Update one MenuItemIngredient
     * const menuItemIngredient = await prisma.menuItemIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemIngredientUpdateArgs>(args: SelectSubset<T, MenuItemIngredientUpdateArgs<ExtArgs>>): Prisma__MenuItemIngredientClient<$Result.GetResult<Prisma.$MenuItemIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItemIngredients.
     * @param {MenuItemIngredientDeleteManyArgs} args - Arguments to filter MenuItemIngredients to delete.
     * @example
     * // Delete a few MenuItemIngredients
     * const { count } = await prisma.menuItemIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemIngredientDeleteManyArgs>(args?: SelectSubset<T, MenuItemIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItemIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItemIngredients
     * const menuItemIngredient = await prisma.menuItemIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemIngredientUpdateManyArgs>(args: SelectSubset<T, MenuItemIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuItemIngredient.
     * @param {MenuItemIngredientUpsertArgs} args - Arguments to update or create a MenuItemIngredient.
     * @example
     * // Update or create a MenuItemIngredient
     * const menuItemIngredient = await prisma.menuItemIngredient.upsert({
     *   create: {
     *     // ... data to create a MenuItemIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItemIngredient we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemIngredientUpsertArgs>(args: SelectSubset<T, MenuItemIngredientUpsertArgs<ExtArgs>>): Prisma__MenuItemIngredientClient<$Result.GetResult<Prisma.$MenuItemIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItemIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemIngredientCountArgs} args - Arguments to filter MenuItemIngredients to count.
     * @example
     * // Count the number of MenuItemIngredients
     * const count = await prisma.menuItemIngredient.count({
     *   where: {
     *     // ... the filter for the MenuItemIngredients we want to count
     *   }
     * })
    **/
    count<T extends MenuItemIngredientCountArgs>(
      args?: Subset<T, MenuItemIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItemIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemIngredientAggregateArgs>(args: Subset<T, MenuItemIngredientAggregateArgs>): Prisma.PrismaPromise<GetMenuItemIngredientAggregateType<T>>

    /**
     * Group by MenuItemIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemIngredientGroupByArgs} args - Group by arguments.
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
      T extends MenuItemIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemIngredientGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemIngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuItemIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItemIngredient model
   */
  readonly fields: MenuItemIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItemIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventoryItem<T extends InventoryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItemDefaultArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MenuItemIngredient model
   */
  interface MenuItemIngredientFieldRefs {
    readonly id: FieldRef<"MenuItemIngredient", 'String'>
    readonly quantityRequired: FieldRef<"MenuItemIngredient", 'Decimal'>
    readonly menuItemId: FieldRef<"MenuItemIngredient", 'String'>
    readonly inventoryItemId: FieldRef<"MenuItemIngredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MenuItemIngredient findUnique
   */
  export type MenuItemIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemIngredient to fetch.
     */
    where: MenuItemIngredientWhereUniqueInput
  }

  /**
   * MenuItemIngredient findUniqueOrThrow
   */
  export type MenuItemIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemIngredient to fetch.
     */
    where: MenuItemIngredientWhereUniqueInput
  }

  /**
   * MenuItemIngredient findFirst
   */
  export type MenuItemIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemIngredient to fetch.
     */
    where?: MenuItemIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemIngredients to fetch.
     */
    orderBy?: MenuItemIngredientOrderByWithRelationInput | MenuItemIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItemIngredients.
     */
    cursor?: MenuItemIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItemIngredients.
     */
    distinct?: MenuItemIngredientScalarFieldEnum | MenuItemIngredientScalarFieldEnum[]
  }

  /**
   * MenuItemIngredient findFirstOrThrow
   */
  export type MenuItemIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemIngredient to fetch.
     */
    where?: MenuItemIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemIngredients to fetch.
     */
    orderBy?: MenuItemIngredientOrderByWithRelationInput | MenuItemIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItemIngredients.
     */
    cursor?: MenuItemIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItemIngredients.
     */
    distinct?: MenuItemIngredientScalarFieldEnum | MenuItemIngredientScalarFieldEnum[]
  }

  /**
   * MenuItemIngredient findMany
   */
  export type MenuItemIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MenuItemIngredients to fetch.
     */
    where?: MenuItemIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItemIngredients to fetch.
     */
    orderBy?: MenuItemIngredientOrderByWithRelationInput | MenuItemIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItemIngredients.
     */
    cursor?: MenuItemIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItemIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItemIngredients.
     */
    skip?: number
    distinct?: MenuItemIngredientScalarFieldEnum | MenuItemIngredientScalarFieldEnum[]
  }

  /**
   * MenuItemIngredient create
   */
  export type MenuItemIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItemIngredient.
     */
    data: XOR<MenuItemIngredientCreateInput, MenuItemIngredientUncheckedCreateInput>
  }

  /**
   * MenuItemIngredient createMany
   */
  export type MenuItemIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItemIngredients.
     */
    data: MenuItemIngredientCreateManyInput | MenuItemIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItemIngredient update
   */
  export type MenuItemIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItemIngredient.
     */
    data: XOR<MenuItemIngredientUpdateInput, MenuItemIngredientUncheckedUpdateInput>
    /**
     * Choose, which MenuItemIngredient to update.
     */
    where: MenuItemIngredientWhereUniqueInput
  }

  /**
   * MenuItemIngredient updateMany
   */
  export type MenuItemIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItemIngredients.
     */
    data: XOR<MenuItemIngredientUpdateManyMutationInput, MenuItemIngredientUncheckedUpdateManyInput>
    /**
     * Filter which MenuItemIngredients to update
     */
    where?: MenuItemIngredientWhereInput
    /**
     * Limit how many MenuItemIngredients to update.
     */
    limit?: number
  }

  /**
   * MenuItemIngredient upsert
   */
  export type MenuItemIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItemIngredient to update in case it exists.
     */
    where: MenuItemIngredientWhereUniqueInput
    /**
     * In case the MenuItemIngredient found by the `where` argument doesn't exist, create a new MenuItemIngredient with this data.
     */
    create: XOR<MenuItemIngredientCreateInput, MenuItemIngredientUncheckedCreateInput>
    /**
     * In case the MenuItemIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemIngredientUpdateInput, MenuItemIngredientUncheckedUpdateInput>
  }

  /**
   * MenuItemIngredient delete
   */
  export type MenuItemIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
    /**
     * Filter which MenuItemIngredient to delete.
     */
    where: MenuItemIngredientWhereUniqueInput
  }

  /**
   * MenuItemIngredient deleteMany
   */
  export type MenuItemIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItemIngredients to delete
     */
    where?: MenuItemIngredientWhereInput
    /**
     * Limit how many MenuItemIngredients to delete.
     */
    limit?: number
  }

  /**
   * MenuItemIngredient without action
   */
  export type MenuItemIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemIngredient
     */
    select?: MenuItemIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItemIngredient
     */
    omit?: MenuItemIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIngredientInclude<ExtArgs> | null
  }


  /**
   * Model InventoryTransaction
   */

  export type AggregateInventoryTransaction = {
    _count: InventoryTransactionCountAggregateOutputType | null
    _avg: InventoryTransactionAvgAggregateOutputType | null
    _sum: InventoryTransactionSumAggregateOutputType | null
    _min: InventoryTransactionMinAggregateOutputType | null
    _max: InventoryTransactionMaxAggregateOutputType | null
  }

  export type InventoryTransactionAvgAggregateOutputType = {
    quantity: Decimal | null
  }

  export type InventoryTransactionSumAggregateOutputType = {
    quantity: Decimal | null
  }

  export type InventoryTransactionMinAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    quantity: Decimal | null
    notes: string | null
    createdAt: Date | null
    inventoryItemId: string | null
  }

  export type InventoryTransactionMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    quantity: Decimal | null
    notes: string | null
    createdAt: Date | null
    inventoryItemId: string | null
  }

  export type InventoryTransactionCountAggregateOutputType = {
    id: number
    type: number
    quantity: number
    notes: number
    createdAt: number
    inventoryItemId: number
    _all: number
  }


  export type InventoryTransactionAvgAggregateInputType = {
    quantity?: true
  }

  export type InventoryTransactionSumAggregateInputType = {
    quantity?: true
  }

  export type InventoryTransactionMinAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    notes?: true
    createdAt?: true
    inventoryItemId?: true
  }

  export type InventoryTransactionMaxAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    notes?: true
    createdAt?: true
    inventoryItemId?: true
  }

  export type InventoryTransactionCountAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    notes?: true
    createdAt?: true
    inventoryItemId?: true
    _all?: true
  }

  export type InventoryTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransaction to aggregate.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryTransactions
    **/
    _count?: true | InventoryTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryTransactionMaxAggregateInputType
  }

  export type GetInventoryTransactionAggregateType<T extends InventoryTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryTransaction[P]>
      : GetScalarType<T[P], AggregateInventoryTransaction[P]>
  }




  export type InventoryTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionWhereInput
    orderBy?: InventoryTransactionOrderByWithAggregationInput | InventoryTransactionOrderByWithAggregationInput[]
    by: InventoryTransactionScalarFieldEnum[] | InventoryTransactionScalarFieldEnum
    having?: InventoryTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryTransactionCountAggregateInputType | true
    _avg?: InventoryTransactionAvgAggregateInputType
    _sum?: InventoryTransactionSumAggregateInputType
    _min?: InventoryTransactionMinAggregateInputType
    _max?: InventoryTransactionMaxAggregateInputType
  }

  export type InventoryTransactionGroupByOutputType = {
    id: string
    type: $Enums.TransactionType
    quantity: Decimal
    notes: string | null
    createdAt: Date
    inventoryItemId: string
    _count: InventoryTransactionCountAggregateOutputType | null
    _avg: InventoryTransactionAvgAggregateOutputType | null
    _sum: InventoryTransactionSumAggregateOutputType | null
    _min: InventoryTransactionMinAggregateOutputType | null
    _max: InventoryTransactionMaxAggregateOutputType | null
  }

  type GetInventoryTransactionGroupByPayload<T extends InventoryTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryTransactionGroupByOutputType[P]>
        }
      >
    >


  export type InventoryTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    notes?: boolean
    createdAt?: boolean
    inventoryItemId?: boolean
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryTransaction"]>



  export type InventoryTransactionSelectScalar = {
    id?: boolean
    type?: boolean
    quantity?: boolean
    notes?: boolean
    createdAt?: boolean
    inventoryItemId?: boolean
  }

  export type InventoryTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "quantity" | "notes" | "createdAt" | "inventoryItemId", ExtArgs["result"]["inventoryTransaction"]>
  export type InventoryTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItem?: boolean | InventoryItemDefaultArgs<ExtArgs>
  }

  export type $InventoryTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryTransaction"
    objects: {
      inventoryItem: Prisma.$InventoryItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TransactionType
      quantity: Prisma.Decimal
      notes: string | null
      createdAt: Date
      inventoryItemId: string
    }, ExtArgs["result"]["inventoryTransaction"]>
    composites: {}
  }

  type InventoryTransactionGetPayload<S extends boolean | null | undefined | InventoryTransactionDefaultArgs> = $Result.GetResult<Prisma.$InventoryTransactionPayload, S>

  type InventoryTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryTransactionCountAggregateInputType | true
    }

  export interface InventoryTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryTransaction'], meta: { name: 'InventoryTransaction' } }
    /**
     * Find zero or one InventoryTransaction that matches the filter.
     * @param {InventoryTransactionFindUniqueArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryTransactionFindUniqueArgs>(args: SelectSubset<T, InventoryTransactionFindUniqueArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryTransactionFindUniqueOrThrowArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindFirstArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryTransactionFindFirstArgs>(args?: SelectSubset<T, InventoryTransactionFindFirstArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindFirstOrThrowArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransaction.findMany()
     * 
     * // Get first 10 InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryTransactionWithIdOnly = await prisma.inventoryTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryTransactionFindManyArgs>(args?: SelectSubset<T, InventoryTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryTransaction.
     * @param {InventoryTransactionCreateArgs} args - Arguments to create a InventoryTransaction.
     * @example
     * // Create one InventoryTransaction
     * const InventoryTransaction = await prisma.inventoryTransaction.create({
     *   data: {
     *     // ... data to create a InventoryTransaction
     *   }
     * })
     * 
     */
    create<T extends InventoryTransactionCreateArgs>(args: SelectSubset<T, InventoryTransactionCreateArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryTransactions.
     * @param {InventoryTransactionCreateManyArgs} args - Arguments to create many InventoryTransactions.
     * @example
     * // Create many InventoryTransactions
     * const inventoryTransaction = await prisma.inventoryTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryTransactionCreateManyArgs>(args?: SelectSubset<T, InventoryTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryTransaction.
     * @param {InventoryTransactionDeleteArgs} args - Arguments to delete one InventoryTransaction.
     * @example
     * // Delete one InventoryTransaction
     * const InventoryTransaction = await prisma.inventoryTransaction.delete({
     *   where: {
     *     // ... filter to delete one InventoryTransaction
     *   }
     * })
     * 
     */
    delete<T extends InventoryTransactionDeleteArgs>(args: SelectSubset<T, InventoryTransactionDeleteArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryTransaction.
     * @param {InventoryTransactionUpdateArgs} args - Arguments to update one InventoryTransaction.
     * @example
     * // Update one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryTransactionUpdateArgs>(args: SelectSubset<T, InventoryTransactionUpdateArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryTransactions.
     * @param {InventoryTransactionDeleteManyArgs} args - Arguments to filter InventoryTransactions to delete.
     * @example
     * // Delete a few InventoryTransactions
     * const { count } = await prisma.inventoryTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryTransactionDeleteManyArgs>(args?: SelectSubset<T, InventoryTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryTransactions
     * const inventoryTransaction = await prisma.inventoryTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryTransactionUpdateManyArgs>(args: SelectSubset<T, InventoryTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryTransaction.
     * @param {InventoryTransactionUpsertArgs} args - Arguments to update or create a InventoryTransaction.
     * @example
     * // Update or create a InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.upsert({
     *   create: {
     *     // ... data to create a InventoryTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryTransaction we want to update
     *   }
     * })
     */
    upsert<T extends InventoryTransactionUpsertArgs>(args: SelectSubset<T, InventoryTransactionUpsertArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionCountArgs} args - Arguments to filter InventoryTransactions to count.
     * @example
     * // Count the number of InventoryTransactions
     * const count = await prisma.inventoryTransaction.count({
     *   where: {
     *     // ... the filter for the InventoryTransactions we want to count
     *   }
     * })
    **/
    count<T extends InventoryTransactionCountArgs>(
      args?: Subset<T, InventoryTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryTransactionAggregateArgs>(args: Subset<T, InventoryTransactionAggregateArgs>): Prisma.PrismaPromise<GetInventoryTransactionAggregateType<T>>

    /**
     * Group by InventoryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionGroupByArgs} args - Group by arguments.
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
      T extends InventoryTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryTransactionGroupByArgs['orderBy'] }
        : { orderBy?: InventoryTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryTransaction model
   */
  readonly fields: InventoryTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventoryItem<T extends InventoryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItemDefaultArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InventoryTransaction model
   */
  interface InventoryTransactionFieldRefs {
    readonly id: FieldRef<"InventoryTransaction", 'String'>
    readonly type: FieldRef<"InventoryTransaction", 'TransactionType'>
    readonly quantity: FieldRef<"InventoryTransaction", 'Decimal'>
    readonly notes: FieldRef<"InventoryTransaction", 'String'>
    readonly createdAt: FieldRef<"InventoryTransaction", 'DateTime'>
    readonly inventoryItemId: FieldRef<"InventoryTransaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InventoryTransaction findUnique
   */
  export type InventoryTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction findUniqueOrThrow
   */
  export type InventoryTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction findFirst
   */
  export type InventoryTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransactions.
     */
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction findFirstOrThrow
   */
  export type InventoryTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransactions.
     */
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction findMany
   */
  export type InventoryTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction create
   */
  export type InventoryTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryTransaction.
     */
    data: XOR<InventoryTransactionCreateInput, InventoryTransactionUncheckedCreateInput>
  }

  /**
   * InventoryTransaction createMany
   */
  export type InventoryTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryTransactions.
     */
    data: InventoryTransactionCreateManyInput | InventoryTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryTransaction update
   */
  export type InventoryTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryTransaction.
     */
    data: XOR<InventoryTransactionUpdateInput, InventoryTransactionUncheckedUpdateInput>
    /**
     * Choose, which InventoryTransaction to update.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction updateMany
   */
  export type InventoryTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryTransactions.
     */
    data: XOR<InventoryTransactionUpdateManyMutationInput, InventoryTransactionUncheckedUpdateManyInput>
    /**
     * Filter which InventoryTransactions to update
     */
    where?: InventoryTransactionWhereInput
    /**
     * Limit how many InventoryTransactions to update.
     */
    limit?: number
  }

  /**
   * InventoryTransaction upsert
   */
  export type InventoryTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryTransaction to update in case it exists.
     */
    where: InventoryTransactionWhereUniqueInput
    /**
     * In case the InventoryTransaction found by the `where` argument doesn't exist, create a new InventoryTransaction with this data.
     */
    create: XOR<InventoryTransactionCreateInput, InventoryTransactionUncheckedCreateInput>
    /**
     * In case the InventoryTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryTransactionUpdateInput, InventoryTransactionUncheckedUpdateInput>
  }

  /**
   * InventoryTransaction delete
   */
  export type InventoryTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter which InventoryTransaction to delete.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction deleteMany
   */
  export type InventoryTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransactions to delete
     */
    where?: InventoryTransactionWhereInput
    /**
     * Limit how many InventoryTransactions to delete.
     */
    limit?: number
  }

  /**
   * InventoryTransaction without action
   */
  export type InventoryTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    pin: 'pin',
    role: 'role',
    fullName: 'fullName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    active: 'active'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    tableNumber: 'tableNumber',
    capacity: 'capacity',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    active: 'active'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const SeatScalarFieldEnum: {
    id: 'id',
    seatNumber: 'seatNumber',
    status: 'status',
    tableId: 'tableId'
  };

  export type SeatScalarFieldEnum = (typeof SeatScalarFieldEnum)[keyof typeof SeatScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    phoneNumber: 'phoneNumber',
    partySize: 'partySize',
    reservationTime: 'reservationTime',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tableId: 'tableId'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseItemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    courseId: 'courseId',
    menuItemId: 'menuItemId'
  };

  export type CourseItemScalarFieldEnum = (typeof CourseItemScalarFieldEnum)[keyof typeof CourseItemScalarFieldEnum]


  export const MenuCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    displayOrder: 'displayOrder',
    active: 'active'
  };

  export type MenuCategoryScalarFieldEnum = (typeof MenuCategoryScalarFieldEnum)[keyof typeof MenuCategoryScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    imageUrl: 'imageUrl',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    status: 'status',
    notes: 'notes',
    hasCourse: 'hasCourse',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    seatId: 'seatId',
    courseId: 'courseId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    price: 'price',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orderId: 'orderId',
    menuItemId: 'menuItemId'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    receiptNumber: 'receiptNumber',
    amount: 'amount',
    method: 'method',
    status: 'status',
    transactionRef: 'transactionRef',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orderId: 'orderId',
    userId: 'userId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const InventoryCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type InventoryCategoryScalarFieldEnum = (typeof InventoryCategoryScalarFieldEnum)[keyof typeof InventoryCategoryScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    unit: 'unit',
    quantityInStock: 'quantityInStock',
    alertThreshold: 'alertThreshold',
    costPerUnit: 'costPerUnit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const MenuItemIngredientScalarFieldEnum: {
    id: 'id',
    quantityRequired: 'quantityRequired',
    menuItemId: 'menuItemId',
    inventoryItemId: 'inventoryItemId'
  };

  export type MenuItemIngredientScalarFieldEnum = (typeof MenuItemIngredientScalarFieldEnum)[keyof typeof MenuItemIngredientScalarFieldEnum]


  export const InventoryTransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    quantity: 'quantity',
    notes: 'notes',
    createdAt: 'createdAt',
    inventoryItemId: 'inventoryItemId'
  };

  export type InventoryTransactionScalarFieldEnum = (typeof InventoryTransactionScalarFieldEnum)[keyof typeof InventoryTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    pin: 'pin',
    fullName: 'fullName',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TableOrderByRelevanceFieldEnum: {
    id: 'id',
    tableNumber: 'tableNumber'
  };

  export type TableOrderByRelevanceFieldEnum = (typeof TableOrderByRelevanceFieldEnum)[keyof typeof TableOrderByRelevanceFieldEnum]


  export const SeatOrderByRelevanceFieldEnum: {
    id: 'id',
    seatNumber: 'seatNumber',
    tableId: 'tableId'
  };

  export type SeatOrderByRelevanceFieldEnum = (typeof SeatOrderByRelevanceFieldEnum)[keyof typeof SeatOrderByRelevanceFieldEnum]


  export const ReservationOrderByRelevanceFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    phoneNumber: 'phoneNumber',
    notes: 'notes',
    status: 'status',
    tableId: 'tableId'
  };

  export type ReservationOrderByRelevanceFieldEnum = (typeof ReservationOrderByRelevanceFieldEnum)[keyof typeof ReservationOrderByRelevanceFieldEnum]


  export const CourseOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CourseOrderByRelevanceFieldEnum = (typeof CourseOrderByRelevanceFieldEnum)[keyof typeof CourseOrderByRelevanceFieldEnum]


  export const CourseItemOrderByRelevanceFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    menuItemId: 'menuItemId'
  };

  export type CourseItemOrderByRelevanceFieldEnum = (typeof CourseItemOrderByRelevanceFieldEnum)[keyof typeof CourseItemOrderByRelevanceFieldEnum]


  export const MenuCategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type MenuCategoryOrderByRelevanceFieldEnum = (typeof MenuCategoryOrderByRelevanceFieldEnum)[keyof typeof MenuCategoryOrderByRelevanceFieldEnum]


  export const MenuItemOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl',
    categoryId: 'categoryId'
  };

  export type MenuItemOrderByRelevanceFieldEnum = (typeof MenuItemOrderByRelevanceFieldEnum)[keyof typeof MenuItemOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    notes: 'notes',
    userId: 'userId',
    seatId: 'seatId',
    courseId: 'courseId'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  export const OrderItemOrderByRelevanceFieldEnum: {
    id: 'id',
    notes: 'notes',
    orderId: 'orderId',
    menuItemId: 'menuItemId'
  };

  export type OrderItemOrderByRelevanceFieldEnum = (typeof OrderItemOrderByRelevanceFieldEnum)[keyof typeof OrderItemOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    receiptNumber: 'receiptNumber',
    transactionRef: 'transactionRef',
    notes: 'notes',
    orderId: 'orderId',
    userId: 'userId'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const InventoryCategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type InventoryCategoryOrderByRelevanceFieldEnum = (typeof InventoryCategoryOrderByRelevanceFieldEnum)[keyof typeof InventoryCategoryOrderByRelevanceFieldEnum]


  export const InventoryItemOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    unit: 'unit',
    categoryId: 'categoryId'
  };

  export type InventoryItemOrderByRelevanceFieldEnum = (typeof InventoryItemOrderByRelevanceFieldEnum)[keyof typeof InventoryItemOrderByRelevanceFieldEnum]


  export const MenuItemIngredientOrderByRelevanceFieldEnum: {
    id: 'id',
    menuItemId: 'menuItemId',
    inventoryItemId: 'inventoryItemId'
  };

  export type MenuItemIngredientOrderByRelevanceFieldEnum = (typeof MenuItemIngredientOrderByRelevanceFieldEnum)[keyof typeof MenuItemIngredientOrderByRelevanceFieldEnum]


  export const InventoryTransactionOrderByRelevanceFieldEnum: {
    id: 'id',
    notes: 'notes',
    inventoryItemId: 'inventoryItemId'
  };

  export type InventoryTransactionOrderByRelevanceFieldEnum = (typeof InventoryTransactionOrderByRelevanceFieldEnum)[keyof typeof InventoryTransactionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'TableStatus'
   */
  export type EnumTableStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TableStatus'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pin?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    fullName?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    active?: BoolFilter<"User"> | boolean
    orders?: OrderListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    pin?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    fullName?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    active?: BoolFilter<"User"> | boolean
    orders?: OrderListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    pin?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    active?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: StringFilter<"Table"> | string
    tableNumber?: StringFilter<"Table"> | string
    capacity?: IntFilter<"Table"> | number
    status?: EnumTableStatusFilter<"Table"> | $Enums.TableStatus
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    active?: BoolFilter<"Table"> | boolean
    seats?: SeatListRelationFilter
    reservations?: ReservationListRelationFilter
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    seats?: SeatOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    _relevance?: TableOrderByRelevanceInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tableNumber?: string
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    capacity?: IntFilter<"Table"> | number
    status?: EnumTableStatusFilter<"Table"> | $Enums.TableStatus
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    active?: BoolFilter<"Table"> | boolean
    seats?: SeatListRelationFilter
    reservations?: ReservationListRelationFilter
  }, "id" | "tableNumber">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    _count?: TableCountOrderByAggregateInput
    _avg?: TableAvgOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
    _sum?: TableSumOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Table"> | string
    tableNumber?: StringWithAggregatesFilter<"Table"> | string
    capacity?: IntWithAggregatesFilter<"Table"> | number
    status?: EnumTableStatusWithAggregatesFilter<"Table"> | $Enums.TableStatus
    createdAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    active?: BoolWithAggregatesFilter<"Table"> | boolean
  }

  export type SeatWhereInput = {
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    id?: StringFilter<"Seat"> | string
    seatNumber?: StringFilter<"Seat"> | string
    status?: EnumTableStatusFilter<"Seat"> | $Enums.TableStatus
    tableId?: StringFilter<"Seat"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    orders?: OrderListRelationFilter
  }

  export type SeatOrderByWithRelationInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    table?: TableOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    _relevance?: SeatOrderByRelevanceInput
  }

  export type SeatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tableId_seatNumber?: SeatTableIdSeatNumberCompoundUniqueInput
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    seatNumber?: StringFilter<"Seat"> | string
    status?: EnumTableStatusFilter<"Seat"> | $Enums.TableStatus
    tableId?: StringFilter<"Seat"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    orders?: OrderListRelationFilter
  }, "id" | "tableId_seatNumber">

  export type SeatOrderByWithAggregationInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
    _count?: SeatCountOrderByAggregateInput
    _max?: SeatMaxOrderByAggregateInput
    _min?: SeatMinOrderByAggregateInput
  }

  export type SeatScalarWhereWithAggregatesInput = {
    AND?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    OR?: SeatScalarWhereWithAggregatesInput[]
    NOT?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Seat"> | string
    seatNumber?: StringWithAggregatesFilter<"Seat"> | string
    status?: EnumTableStatusWithAggregatesFilter<"Seat"> | $Enums.TableStatus
    tableId?: StringWithAggregatesFilter<"Seat"> | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    customerName?: StringFilter<"Reservation"> | string
    phoneNumber?: StringFilter<"Reservation"> | string
    partySize?: IntFilter<"Reservation"> | number
    reservationTime?: DateTimeFilter<"Reservation"> | Date | string
    notes?: StringNullableFilter<"Reservation"> | string | null
    status?: StringFilter<"Reservation"> | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    tableId?: StringFilter<"Reservation"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrder
    phoneNumber?: SortOrder
    partySize?: SortOrder
    reservationTime?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    table?: TableOrderByWithRelationInput
    _relevance?: ReservationOrderByRelevanceInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    customerName?: StringFilter<"Reservation"> | string
    phoneNumber?: StringFilter<"Reservation"> | string
    partySize?: IntFilter<"Reservation"> | number
    reservationTime?: DateTimeFilter<"Reservation"> | Date | string
    notes?: StringNullableFilter<"Reservation"> | string | null
    status?: StringFilter<"Reservation"> | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    tableId?: StringFilter<"Reservation"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrder
    phoneNumber?: SortOrder
    partySize?: SortOrder
    reservationTime?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    customerName?: StringWithAggregatesFilter<"Reservation"> | string
    phoneNumber?: StringWithAggregatesFilter<"Reservation"> | string
    partySize?: IntWithAggregatesFilter<"Reservation"> | number
    reservationTime?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    status?: StringWithAggregatesFilter<"Reservation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    tableId?: StringWithAggregatesFilter<"Reservation"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    price?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Course"> | boolean
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    courseItems?: CourseItemListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseItems?: CourseItemOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    _relevance?: CourseOrderByRelevanceInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    price?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Course"> | boolean
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    courseItems?: CourseItemListRelationFilter
    orders?: OrderListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    price?: DecimalWithAggregatesFilter<"Course"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"Course"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type CourseItemWhereInput = {
    AND?: CourseItemWhereInput | CourseItemWhereInput[]
    OR?: CourseItemWhereInput[]
    NOT?: CourseItemWhereInput | CourseItemWhereInput[]
    id?: StringFilter<"CourseItem"> | string
    quantity?: IntFilter<"CourseItem"> | number
    courseId?: StringFilter<"CourseItem"> | string
    menuItemId?: StringFilter<"CourseItem"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }

  export type CourseItemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    courseId?: SortOrder
    menuItemId?: SortOrder
    course?: CourseOrderByWithRelationInput
    menuItem?: MenuItemOrderByWithRelationInput
    _relevance?: CourseItemOrderByRelevanceInput
  }

  export type CourseItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_menuItemId?: CourseItemCourseIdMenuItemIdCompoundUniqueInput
    AND?: CourseItemWhereInput | CourseItemWhereInput[]
    OR?: CourseItemWhereInput[]
    NOT?: CourseItemWhereInput | CourseItemWhereInput[]
    quantity?: IntFilter<"CourseItem"> | number
    courseId?: StringFilter<"CourseItem"> | string
    menuItemId?: StringFilter<"CourseItem"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }, "id" | "courseId_menuItemId">

  export type CourseItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    courseId?: SortOrder
    menuItemId?: SortOrder
    _count?: CourseItemCountOrderByAggregateInput
    _avg?: CourseItemAvgOrderByAggregateInput
    _max?: CourseItemMaxOrderByAggregateInput
    _min?: CourseItemMinOrderByAggregateInput
    _sum?: CourseItemSumOrderByAggregateInput
  }

  export type CourseItemScalarWhereWithAggregatesInput = {
    AND?: CourseItemScalarWhereWithAggregatesInput | CourseItemScalarWhereWithAggregatesInput[]
    OR?: CourseItemScalarWhereWithAggregatesInput[]
    NOT?: CourseItemScalarWhereWithAggregatesInput | CourseItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseItem"> | string
    quantity?: IntWithAggregatesFilter<"CourseItem"> | number
    courseId?: StringWithAggregatesFilter<"CourseItem"> | string
    menuItemId?: StringWithAggregatesFilter<"CourseItem"> | string
  }

  export type MenuCategoryWhereInput = {
    AND?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    OR?: MenuCategoryWhereInput[]
    NOT?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    id?: StringFilter<"MenuCategory"> | string
    name?: StringFilter<"MenuCategory"> | string
    description?: StringNullableFilter<"MenuCategory"> | string | null
    displayOrder?: IntFilter<"MenuCategory"> | number
    active?: BoolFilter<"MenuCategory"> | boolean
    menuItems?: MenuItemListRelationFilter
  }

  export type MenuCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    active?: SortOrder
    menuItems?: MenuItemOrderByRelationAggregateInput
    _relevance?: MenuCategoryOrderByRelevanceInput
  }

  export type MenuCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    OR?: MenuCategoryWhereInput[]
    NOT?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    name?: StringFilter<"MenuCategory"> | string
    description?: StringNullableFilter<"MenuCategory"> | string | null
    displayOrder?: IntFilter<"MenuCategory"> | number
    active?: BoolFilter<"MenuCategory"> | boolean
    menuItems?: MenuItemListRelationFilter
  }, "id">

  export type MenuCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    displayOrder?: SortOrder
    active?: SortOrder
    _count?: MenuCategoryCountOrderByAggregateInput
    _avg?: MenuCategoryAvgOrderByAggregateInput
    _max?: MenuCategoryMaxOrderByAggregateInput
    _min?: MenuCategoryMinOrderByAggregateInput
    _sum?: MenuCategorySumOrderByAggregateInput
  }

  export type MenuCategoryScalarWhereWithAggregatesInput = {
    AND?: MenuCategoryScalarWhereWithAggregatesInput | MenuCategoryScalarWhereWithAggregatesInput[]
    OR?: MenuCategoryScalarWhereWithAggregatesInput[]
    NOT?: MenuCategoryScalarWhereWithAggregatesInput | MenuCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuCategory"> | string
    name?: StringWithAggregatesFilter<"MenuCategory"> | string
    description?: StringNullableWithAggregatesFilter<"MenuCategory"> | string | null
    displayOrder?: IntWithAggregatesFilter<"MenuCategory"> | number
    active?: BoolWithAggregatesFilter<"MenuCategory"> | boolean
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    active?: BoolFilter<"MenuItem"> | boolean
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    categoryId?: StringFilter<"MenuItem"> | string
    category?: XOR<MenuCategoryScalarRelationFilter, MenuCategoryWhereInput>
    courseItems?: CourseItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
    ingredients?: MenuItemIngredientListRelationFilter
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    category?: MenuCategoryOrderByWithRelationInput
    courseItems?: CourseItemOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    ingredients?: MenuItemIngredientOrderByRelationAggregateInput
    _relevance?: MenuItemOrderByRelevanceInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    active?: BoolFilter<"MenuItem"> | boolean
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    categoryId?: StringFilter<"MenuItem"> | string
    category?: XOR<MenuCategoryScalarRelationFilter, MenuCategoryWhereInput>
    courseItems?: CourseItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
    ingredients?: MenuItemIngredientListRelationFilter
  }, "id">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
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
    name?: StringWithAggregatesFilter<"MenuItem"> | string
    description?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    price?: DecimalWithAggregatesFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    active?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    categoryId?: StringWithAggregatesFilter<"MenuItem"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    notes?: StringNullableFilter<"Order"> | string | null
    hasCourse?: BoolFilter<"Order"> | boolean
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: StringFilter<"Order"> | string
    seatId?: StringFilter<"Order"> | string
    courseId?: StringNullableFilter<"Order"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    seat?: XOR<SeatScalarRelationFilter, SeatWhereInput>
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    orderItems?: OrderItemListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    hasCourse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    seatId?: SortOrder
    courseId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    seat?: SeatOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    payment?: PaymentOrderByWithRelationInput
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    notes?: StringNullableFilter<"Order"> | string | null
    hasCourse?: BoolFilter<"Order"> | boolean
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: StringFilter<"Order"> | string
    seatId?: StringFilter<"Order"> | string
    courseId?: StringNullableFilter<"Order"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    seat?: XOR<SeatScalarRelationFilter, SeatWhereInput>
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    orderItems?: OrderItemListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    hasCourse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    seatId?: SortOrder
    courseId?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    hasCourse?: BoolWithAggregatesFilter<"Order"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    seatId?: StringWithAggregatesFilter<"Order"> | string
    courseId?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"OrderItem"> | string | null
    status?: EnumOrderStatusFilter<"OrderItem"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    order?: OrderOrderByWithRelationInput
    menuItem?: MenuItemOrderByWithRelationInput
    _relevance?: OrderItemOrderByRelevanceInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"OrderItem"> | string | null
    status?: EnumOrderStatusFilter<"OrderItem"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
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
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    price?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"OrderItem"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    menuItemId?: StringWithAggregatesFilter<"OrderItem"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    receiptNumber?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionRef?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    orderId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transactionRef?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    order?: OrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    receiptNumber?: string
    orderId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionRef?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    userId?: StringFilter<"Payment"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "receiptNumber" | "orderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transactionRef?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    receiptNumber?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    transactionRef?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type InventoryCategoryWhereInput = {
    AND?: InventoryCategoryWhereInput | InventoryCategoryWhereInput[]
    OR?: InventoryCategoryWhereInput[]
    NOT?: InventoryCategoryWhereInput | InventoryCategoryWhereInput[]
    id?: StringFilter<"InventoryCategory"> | string
    name?: StringFilter<"InventoryCategory"> | string
    description?: StringNullableFilter<"InventoryCategory"> | string | null
    inventoryItems?: InventoryItemListRelationFilter
  }

  export type InventoryCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    inventoryItems?: InventoryItemOrderByRelationAggregateInput
    _relevance?: InventoryCategoryOrderByRelevanceInput
  }

  export type InventoryCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryCategoryWhereInput | InventoryCategoryWhereInput[]
    OR?: InventoryCategoryWhereInput[]
    NOT?: InventoryCategoryWhereInput | InventoryCategoryWhereInput[]
    name?: StringFilter<"InventoryCategory"> | string
    description?: StringNullableFilter<"InventoryCategory"> | string | null
    inventoryItems?: InventoryItemListRelationFilter
  }, "id">

  export type InventoryCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: InventoryCategoryCountOrderByAggregateInput
    _max?: InventoryCategoryMaxOrderByAggregateInput
    _min?: InventoryCategoryMinOrderByAggregateInput
  }

  export type InventoryCategoryScalarWhereWithAggregatesInput = {
    AND?: InventoryCategoryScalarWhereWithAggregatesInput | InventoryCategoryScalarWhereWithAggregatesInput[]
    OR?: InventoryCategoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryCategoryScalarWhereWithAggregatesInput | InventoryCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryCategory"> | string
    name?: StringWithAggregatesFilter<"InventoryCategory"> | string
    description?: StringNullableWithAggregatesFilter<"InventoryCategory"> | string | null
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    name?: StringFilter<"InventoryItem"> | string
    description?: StringNullableFilter<"InventoryItem"> | string | null
    unit?: StringFilter<"InventoryItem"> | string
    quantityInStock?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    categoryId?: StringFilter<"InventoryItem"> | string
    category?: XOR<InventoryCategoryScalarRelationFilter, InventoryCategoryWhereInput>
    inventory?: MenuItemIngredientListRelationFilter
    inventoryTransactions?: InventoryTransactionListRelationFilter
  }

  export type InventoryItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unit?: SortOrder
    quantityInStock?: SortOrder
    alertThreshold?: SortOrder
    costPerUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    category?: InventoryCategoryOrderByWithRelationInput
    inventory?: MenuItemIngredientOrderByRelationAggregateInput
    inventoryTransactions?: InventoryTransactionOrderByRelationAggregateInput
    _relevance?: InventoryItemOrderByRelevanceInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    name?: StringFilter<"InventoryItem"> | string
    description?: StringNullableFilter<"InventoryItem"> | string | null
    unit?: StringFilter<"InventoryItem"> | string
    quantityInStock?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    categoryId?: StringFilter<"InventoryItem"> | string
    category?: XOR<InventoryCategoryScalarRelationFilter, InventoryCategoryWhereInput>
    inventory?: MenuItemIngredientListRelationFilter
    inventoryTransactions?: InventoryTransactionListRelationFilter
  }, "id">

  export type InventoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    unit?: SortOrder
    quantityInStock?: SortOrder
    alertThreshold?: SortOrder
    costPerUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _avg?: InventoryItemAvgOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
    _sum?: InventoryItemSumOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryItem"> | string
    name?: StringWithAggregatesFilter<"InventoryItem"> | string
    description?: StringNullableWithAggregatesFilter<"InventoryItem"> | string | null
    unit?: StringWithAggregatesFilter<"InventoryItem"> | string
    quantityInStock?: DecimalWithAggregatesFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalWithAggregatesFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalWithAggregatesFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
    categoryId?: StringWithAggregatesFilter<"InventoryItem"> | string
  }

  export type MenuItemIngredientWhereInput = {
    AND?: MenuItemIngredientWhereInput | MenuItemIngredientWhereInput[]
    OR?: MenuItemIngredientWhereInput[]
    NOT?: MenuItemIngredientWhereInput | MenuItemIngredientWhereInput[]
    id?: StringFilter<"MenuItemIngredient"> | string
    quantityRequired?: DecimalFilter<"MenuItemIngredient"> | Decimal | DecimalJsLike | number | string
    menuItemId?: StringFilter<"MenuItemIngredient"> | string
    inventoryItemId?: StringFilter<"MenuItemIngredient"> | string
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    inventoryItem?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
  }

  export type MenuItemIngredientOrderByWithRelationInput = {
    id?: SortOrder
    quantityRequired?: SortOrder
    menuItemId?: SortOrder
    inventoryItemId?: SortOrder
    menuItem?: MenuItemOrderByWithRelationInput
    inventoryItem?: InventoryItemOrderByWithRelationInput
    _relevance?: MenuItemIngredientOrderByRelevanceInput
  }

  export type MenuItemIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    menuItemId_inventoryItemId?: MenuItemIngredientMenuItemIdInventoryItemIdCompoundUniqueInput
    AND?: MenuItemIngredientWhereInput | MenuItemIngredientWhereInput[]
    OR?: MenuItemIngredientWhereInput[]
    NOT?: MenuItemIngredientWhereInput | MenuItemIngredientWhereInput[]
    quantityRequired?: DecimalFilter<"MenuItemIngredient"> | Decimal | DecimalJsLike | number | string
    menuItemId?: StringFilter<"MenuItemIngredient"> | string
    inventoryItemId?: StringFilter<"MenuItemIngredient"> | string
    menuItem?: XOR<MenuItemScalarRelationFilter, MenuItemWhereInput>
    inventoryItem?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
  }, "id" | "menuItemId_inventoryItemId">

  export type MenuItemIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    quantityRequired?: SortOrder
    menuItemId?: SortOrder
    inventoryItemId?: SortOrder
    _count?: MenuItemIngredientCountOrderByAggregateInput
    _avg?: MenuItemIngredientAvgOrderByAggregateInput
    _max?: MenuItemIngredientMaxOrderByAggregateInput
    _min?: MenuItemIngredientMinOrderByAggregateInput
    _sum?: MenuItemIngredientSumOrderByAggregateInput
  }

  export type MenuItemIngredientScalarWhereWithAggregatesInput = {
    AND?: MenuItemIngredientScalarWhereWithAggregatesInput | MenuItemIngredientScalarWhereWithAggregatesInput[]
    OR?: MenuItemIngredientScalarWhereWithAggregatesInput[]
    NOT?: MenuItemIngredientScalarWhereWithAggregatesInput | MenuItemIngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuItemIngredient"> | string
    quantityRequired?: DecimalWithAggregatesFilter<"MenuItemIngredient"> | Decimal | DecimalJsLike | number | string
    menuItemId?: StringWithAggregatesFilter<"MenuItemIngredient"> | string
    inventoryItemId?: StringWithAggregatesFilter<"MenuItemIngredient"> | string
  }

  export type InventoryTransactionWhereInput = {
    AND?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    OR?: InventoryTransactionWhereInput[]
    NOT?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    id?: StringFilter<"InventoryTransaction"> | string
    type?: EnumTransactionTypeFilter<"InventoryTransaction"> | $Enums.TransactionType
    quantity?: DecimalFilter<"InventoryTransaction"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    inventoryItemId?: StringFilter<"InventoryTransaction"> | string
    inventoryItem?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
  }

  export type InventoryTransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    inventoryItemId?: SortOrder
    inventoryItem?: InventoryItemOrderByWithRelationInput
    _relevance?: InventoryTransactionOrderByRelevanceInput
  }

  export type InventoryTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    OR?: InventoryTransactionWhereInput[]
    NOT?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    type?: EnumTransactionTypeFilter<"InventoryTransaction"> | $Enums.TransactionType
    quantity?: DecimalFilter<"InventoryTransaction"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    inventoryItemId?: StringFilter<"InventoryTransaction"> | string
    inventoryItem?: XOR<InventoryItemScalarRelationFilter, InventoryItemWhereInput>
  }, "id">

  export type InventoryTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    inventoryItemId?: SortOrder
    _count?: InventoryTransactionCountOrderByAggregateInput
    _avg?: InventoryTransactionAvgOrderByAggregateInput
    _max?: InventoryTransactionMaxOrderByAggregateInput
    _min?: InventoryTransactionMinOrderByAggregateInput
    _sum?: InventoryTransactionSumOrderByAggregateInput
  }

  export type InventoryTransactionScalarWhereWithAggregatesInput = {
    AND?: InventoryTransactionScalarWhereWithAggregatesInput | InventoryTransactionScalarWhereWithAggregatesInput[]
    OR?: InventoryTransactionScalarWhereWithAggregatesInput[]
    NOT?: InventoryTransactionScalarWhereWithAggregatesInput | InventoryTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryTransaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"InventoryTransaction"> | $Enums.TransactionType
    quantity?: DecimalWithAggregatesFilter<"InventoryTransaction"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableWithAggregatesFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryTransaction"> | Date | string
    inventoryItemId?: StringWithAggregatesFilter<"InventoryTransaction"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    pin: string
    role: $Enums.UserRole
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    orders?: OrderCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    pin: string
    role: $Enums.UserRole
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    pin: string
    role: $Enums.UserRole
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TableCreateInput = {
    id?: string
    tableNumber: string
    capacity: number
    status?: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    seats?: SeatCreateNestedManyWithoutTableInput
    reservations?: ReservationCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    id?: string
    tableNumber: string
    capacity: number
    status?: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    seats?: SeatUncheckedCreateNestedManyWithoutTableInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    seats?: SeatUpdateManyWithoutTableNestedInput
    reservations?: ReservationUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    seats?: SeatUncheckedUpdateManyWithoutTableNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    id?: string
    tableNumber: string
    capacity: number
    status?: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
  }

  export type TableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeatCreateInput = {
    id?: string
    seatNumber: string
    status?: $Enums.TableStatus
    table: TableCreateNestedOneWithoutSeatsInput
    orders?: OrderCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateInput = {
    id?: string
    seatNumber: string
    status?: $Enums.TableStatus
    tableId: string
    orders?: OrderUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    table?: TableUpdateOneRequiredWithoutSeatsNestedInput
    orders?: OrderUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    tableId?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatCreateManyInput = {
    id?: string
    seatNumber: string
    status?: $Enums.TableStatus
    tableId: string
  }

  export type SeatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
  }

  export type SeatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateInput = {
    id?: string
    customerName: string
    phoneNumber: string
    partySize: number
    reservationTime: Date | string
    notes?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    customerName: string
    phoneNumber: string
    partySize: number
    reservationTime: Date | string
    notes?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationCreateManyInput = {
    id?: string
    customerName: string
    phoneNumber: string
    partySize: number
    reservationTime: Date | string
    notes?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courseItems?: CourseItemCreateNestedManyWithoutCourseInput
    orders?: OrderCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courseItems?: CourseItemUncheckedCreateNestedManyWithoutCourseInput
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseItems?: CourseItemUpdateManyWithoutCourseNestedInput
    orders?: OrderUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseItems?: CourseItemUncheckedUpdateManyWithoutCourseNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseItemCreateInput = {
    id?: string
    quantity: number
    course: CourseCreateNestedOneWithoutCourseItemsInput
    menuItem: MenuItemCreateNestedOneWithoutCourseItemsInput
  }

  export type CourseItemUncheckedCreateInput = {
    id?: string
    quantity: number
    courseId: string
    menuItemId: string
  }

  export type CourseItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutCourseItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutCourseItemsNestedInput
  }

  export type CourseItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseItemCreateManyInput = {
    id?: string
    quantity: number
    courseId: string
    menuItemId: string
  }

  export type CourseItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CourseItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type MenuCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    displayOrder: number
    active?: boolean
    menuItems?: MenuItemCreateNestedManyWithoutCategoryInput
  }

  export type MenuCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    displayOrder: number
    active?: boolean
    menuItems?: MenuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MenuCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    menuItems?: MenuItemUpdateManyWithoutCategoryNestedInput
  }

  export type MenuCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    menuItems?: MenuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MenuCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    displayOrder: number
    active?: boolean
  }

  export type MenuCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MenuCategoryCreateNestedOneWithoutMenuItemsInput
    courseItems?: CourseItemCreateNestedManyWithoutMenuItemInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
    ingredients?: MenuItemIngredientCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    courseItems?: CourseItemUncheckedCreateNestedManyWithoutMenuItemInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
    ingredients?: MenuItemIngredientUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MenuCategoryUpdateOneRequiredWithoutMenuItemsNestedInput
    courseItems?: CourseItemUpdateManyWithoutMenuItemNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
    ingredients?: MenuItemIngredientUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    courseItems?: CourseItemUncheckedUpdateManyWithoutMenuItemNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
    ingredients?: MenuItemIngredientUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
  }

  export type MenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    seat: SeatCreateNestedOneWithoutOrdersInput
    course?: CourseCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    seatId: string
    courseId?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    seat?: SeatUpdateOneRequiredWithoutOrdersNestedInput
    course?: CourseUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    seatId: string
    courseId?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
    menuItemId: string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
    menuItemId: string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    id?: string
    receiptNumber: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    receiptNumber: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
    userId: string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    receiptNumber: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
    userId: string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    inventoryItems?: InventoryItemCreateNestedManyWithoutCategoryInput
  }

  export type InventoryCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    inventoryItems?: InventoryItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type InventoryCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inventoryItems?: InventoryItemUpdateManyWithoutCategoryNestedInput
  }

  export type InventoryCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    inventoryItems?: InventoryItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type InventoryCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type InventoryCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    quantityInStock: Decimal | DecimalJsLike | number | string
    alertThreshold: Decimal | DecimalJsLike | number | string
    costPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: InventoryCategoryCreateNestedOneWithoutInventoryItemsInput
    inventory?: MenuItemIngredientCreateNestedManyWithoutInventoryItemInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    quantityInStock: Decimal | DecimalJsLike | number | string
    alertThreshold: Decimal | DecimalJsLike | number | string
    costPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    inventory?: MenuItemIngredientUncheckedCreateNestedManyWithoutInventoryItemInput
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    quantityInStock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: InventoryCategoryUpdateOneRequiredWithoutInventoryItemsNestedInput
    inventory?: MenuItemIngredientUpdateManyWithoutInventoryItemNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    quantityInStock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    inventory?: MenuItemIngredientUncheckedUpdateManyWithoutInventoryItemNestedInput
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    quantityInStock: Decimal | DecimalJsLike | number | string
    alertThreshold: Decimal | DecimalJsLike | number | string
    costPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
  }

  export type InventoryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    quantityInStock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    quantityInStock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type MenuItemIngredientCreateInput = {
    id?: string
    quantityRequired: Decimal | DecimalJsLike | number | string
    menuItem: MenuItemCreateNestedOneWithoutIngredientsInput
    inventoryItem: InventoryItemCreateNestedOneWithoutInventoryInput
  }

  export type MenuItemIngredientUncheckedCreateInput = {
    id?: string
    quantityRequired: Decimal | DecimalJsLike | number | string
    menuItemId: string
    inventoryItemId: string
  }

  export type MenuItemIngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityRequired?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menuItem?: MenuItemUpdateOneRequiredWithoutIngredientsNestedInput
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type MenuItemIngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityRequired?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
  }

  export type MenuItemIngredientCreateManyInput = {
    id?: string
    quantityRequired: Decimal | DecimalJsLike | number | string
    menuItemId: string
    inventoryItemId: string
  }

  export type MenuItemIngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityRequired?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MenuItemIngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityRequired?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryTransactionCreateInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    inventoryItem: InventoryItemCreateNestedOneWithoutInventoryTransactionsInput
  }

  export type InventoryTransactionUncheckedCreateInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    inventoryItemId: string
  }

  export type InventoryTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutInventoryTransactionsNestedInput
  }

  export type InventoryTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryTransactionCreateManyInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
    inventoryItemId: string
  }

  export type InventoryTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    pin?: SortOrder
    role?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumTableStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TableStatus | EnumTableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TableStatus[]
    notIn?: $Enums.TableStatus[]
    not?: NestedEnumTableStatusFilter<$PrismaModel> | $Enums.TableStatus
  }

  export type SeatListRelationFilter = {
    every?: SeatWhereInput
    some?: SeatWhereInput
    none?: SeatWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type SeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableOrderByRelevanceInput = {
    fields: TableOrderByRelevanceFieldEnum | TableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
  }

  export type TableAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
  }

  export type TableSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumTableStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TableStatus | EnumTableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TableStatus[]
    notIn?: $Enums.TableStatus[]
    not?: NestedEnumTableStatusWithAggregatesFilter<$PrismaModel> | $Enums.TableStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTableStatusFilter<$PrismaModel>
    _max?: NestedEnumTableStatusFilter<$PrismaModel>
  }

  export type TableScalarRelationFilter = {
    is?: TableWhereInput
    isNot?: TableWhereInput
  }

  export type SeatOrderByRelevanceInput = {
    fields: SeatOrderByRelevanceFieldEnum | SeatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SeatTableIdSeatNumberCompoundUniqueInput = {
    tableId: string
    seatNumber: string
  }

  export type SeatCountOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
  }

  export type SeatMaxOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
  }

  export type SeatMinOrderByAggregateInput = {
    id?: SortOrder
    seatNumber?: SortOrder
    status?: SortOrder
    tableId?: SortOrder
  }

  export type ReservationOrderByRelevanceInput = {
    fields: ReservationOrderByRelevanceFieldEnum | ReservationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    phoneNumber?: SortOrder
    partySize?: SortOrder
    reservationTime?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    partySize?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    phoneNumber?: SortOrder
    partySize?: SortOrder
    reservationTime?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    phoneNumber?: SortOrder
    partySize?: SortOrder
    reservationTime?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    partySize?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CourseItemListRelationFilter = {
    every?: CourseItemWhereInput
    some?: CourseItemWhereInput
    none?: CourseItemWhereInput
  }

  export type CourseItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelevanceInput = {
    fields: CourseOrderByRelevanceFieldEnum | CourseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type MenuItemScalarRelationFilter = {
    is?: MenuItemWhereInput
    isNot?: MenuItemWhereInput
  }

  export type CourseItemOrderByRelevanceInput = {
    fields: CourseItemOrderByRelevanceFieldEnum | CourseItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CourseItemCourseIdMenuItemIdCompoundUniqueInput = {
    courseId: string
    menuItemId: string
  }

  export type CourseItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    courseId?: SortOrder
    menuItemId?: SortOrder
  }

  export type CourseItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type CourseItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    courseId?: SortOrder
    menuItemId?: SortOrder
  }

  export type CourseItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    courseId?: SortOrder
    menuItemId?: SortOrder
  }

  export type CourseItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCategoryOrderByRelevanceInput = {
    fields: MenuCategoryOrderByRelevanceFieldEnum | MenuCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MenuCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    active?: SortOrder
  }

  export type MenuCategoryAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type MenuCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    active?: SortOrder
  }

  export type MenuCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    displayOrder?: SortOrder
    active?: SortOrder
  }

  export type MenuCategorySumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type MenuCategoryScalarRelationFilter = {
    is?: MenuCategoryWhereInput
    isNot?: MenuCategoryWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type MenuItemIngredientListRelationFilter = {
    every?: MenuItemIngredientWhereInput
    some?: MenuItemIngredientWhereInput
    none?: MenuItemIngredientWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemOrderByRelevanceInput = {
    fields: MenuItemOrderByRelevanceFieldEnum | MenuItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SeatScalarRelationFilter = {
    is?: SeatWhereInput
    isNot?: SeatWhereInput
  }

  export type CourseNullableScalarRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    hasCourse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    seatId?: SortOrder
    courseId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    hasCourse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    seatId?: SortOrder
    courseId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    hasCourse?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    seatId?: SortOrder
    courseId?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemOrderByRelevanceInput = {
    fields: OrderItemOrderByRelevanceFieldEnum | OrderItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transactionRef?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transactionRef?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    transactionRef?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type InventoryItemListRelationFilter = {
    every?: InventoryItemWhereInput
    some?: InventoryItemWhereInput
    none?: InventoryItemWhereInput
  }

  export type InventoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryCategoryOrderByRelevanceInput = {
    fields: InventoryCategoryOrderByRelevanceFieldEnum | InventoryCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InventoryCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type InventoryCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type InventoryCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type InventoryCategoryScalarRelationFilter = {
    is?: InventoryCategoryWhereInput
    isNot?: InventoryCategoryWhereInput
  }

  export type InventoryTransactionListRelationFilter = {
    every?: InventoryTransactionWhereInput
    some?: InventoryTransactionWhereInput
    none?: InventoryTransactionWhereInput
  }

  export type InventoryTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryItemOrderByRelevanceInput = {
    fields: InventoryItemOrderByRelevanceFieldEnum | InventoryItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InventoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    quantityInStock?: SortOrder
    alertThreshold?: SortOrder
    costPerUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type InventoryItemAvgOrderByAggregateInput = {
    quantityInStock?: SortOrder
    alertThreshold?: SortOrder
    costPerUnit?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    quantityInStock?: SortOrder
    alertThreshold?: SortOrder
    costPerUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    unit?: SortOrder
    quantityInStock?: SortOrder
    alertThreshold?: SortOrder
    costPerUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type InventoryItemSumOrderByAggregateInput = {
    quantityInStock?: SortOrder
    alertThreshold?: SortOrder
    costPerUnit?: SortOrder
  }

  export type InventoryItemScalarRelationFilter = {
    is?: InventoryItemWhereInput
    isNot?: InventoryItemWhereInput
  }

  export type MenuItemIngredientOrderByRelevanceInput = {
    fields: MenuItemIngredientOrderByRelevanceFieldEnum | MenuItemIngredientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MenuItemIngredientMenuItemIdInventoryItemIdCompoundUniqueInput = {
    menuItemId: string
    inventoryItemId: string
  }

  export type MenuItemIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    quantityRequired?: SortOrder
    menuItemId?: SortOrder
    inventoryItemId?: SortOrder
  }

  export type MenuItemIngredientAvgOrderByAggregateInput = {
    quantityRequired?: SortOrder
  }

  export type MenuItemIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    quantityRequired?: SortOrder
    menuItemId?: SortOrder
    inventoryItemId?: SortOrder
  }

  export type MenuItemIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    quantityRequired?: SortOrder
    menuItemId?: SortOrder
    inventoryItemId?: SortOrder
  }

  export type MenuItemIngredientSumOrderByAggregateInput = {
    quantityRequired?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type InventoryTransactionOrderByRelevanceInput = {
    fields: InventoryTransactionOrderByRelevanceFieldEnum | InventoryTransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InventoryTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    inventoryItemId?: SortOrder
  }

  export type InventoryTransactionAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    inventoryItemId?: SortOrder
  }

  export type InventoryTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    inventoryItemId?: SortOrder
  }

  export type InventoryTransactionSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SeatCreateNestedManyWithoutTableInput = {
    create?: XOR<SeatCreateWithoutTableInput, SeatUncheckedCreateWithoutTableInput> | SeatCreateWithoutTableInput[] | SeatUncheckedCreateWithoutTableInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTableInput | SeatCreateOrConnectWithoutTableInput[]
    createMany?: SeatCreateManyTableInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutTableInput = {
    create?: XOR<ReservationCreateWithoutTableInput, ReservationUncheckedCreateWithoutTableInput> | ReservationCreateWithoutTableInput[] | ReservationUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTableInput | ReservationCreateOrConnectWithoutTableInput[]
    createMany?: ReservationCreateManyTableInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type SeatUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<SeatCreateWithoutTableInput, SeatUncheckedCreateWithoutTableInput> | SeatCreateWithoutTableInput[] | SeatUncheckedCreateWithoutTableInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTableInput | SeatCreateOrConnectWithoutTableInput[]
    createMany?: SeatCreateManyTableInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<ReservationCreateWithoutTableInput, ReservationUncheckedCreateWithoutTableInput> | ReservationCreateWithoutTableInput[] | ReservationUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTableInput | ReservationCreateOrConnectWithoutTableInput[]
    createMany?: ReservationCreateManyTableInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTableStatusFieldUpdateOperationsInput = {
    set?: $Enums.TableStatus
  }

  export type SeatUpdateManyWithoutTableNestedInput = {
    create?: XOR<SeatCreateWithoutTableInput, SeatUncheckedCreateWithoutTableInput> | SeatCreateWithoutTableInput[] | SeatUncheckedCreateWithoutTableInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTableInput | SeatCreateOrConnectWithoutTableInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutTableInput | SeatUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: SeatCreateManyTableInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutTableInput | SeatUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutTableInput | SeatUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutTableNestedInput = {
    create?: XOR<ReservationCreateWithoutTableInput, ReservationUncheckedCreateWithoutTableInput> | ReservationCreateWithoutTableInput[] | ReservationUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTableInput | ReservationCreateOrConnectWithoutTableInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTableInput | ReservationUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ReservationCreateManyTableInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTableInput | ReservationUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTableInput | ReservationUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type SeatUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<SeatCreateWithoutTableInput, SeatUncheckedCreateWithoutTableInput> | SeatCreateWithoutTableInput[] | SeatUncheckedCreateWithoutTableInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutTableInput | SeatCreateOrConnectWithoutTableInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutTableInput | SeatUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: SeatCreateManyTableInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutTableInput | SeatUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutTableInput | SeatUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<ReservationCreateWithoutTableInput, ReservationUncheckedCreateWithoutTableInput> | ReservationCreateWithoutTableInput[] | ReservationUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTableInput | ReservationCreateOrConnectWithoutTableInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTableInput | ReservationUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ReservationCreateManyTableInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTableInput | ReservationUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTableInput | ReservationUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type TableCreateNestedOneWithoutSeatsInput = {
    create?: XOR<TableCreateWithoutSeatsInput, TableUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: TableCreateOrConnectWithoutSeatsInput
    connect?: TableWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutSeatInput = {
    create?: XOR<OrderCreateWithoutSeatInput, OrderUncheckedCreateWithoutSeatInput> | OrderCreateWithoutSeatInput[] | OrderUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSeatInput | OrderCreateOrConnectWithoutSeatInput[]
    createMany?: OrderCreateManySeatInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<OrderCreateWithoutSeatInput, OrderUncheckedCreateWithoutSeatInput> | OrderCreateWithoutSeatInput[] | OrderUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSeatInput | OrderCreateOrConnectWithoutSeatInput[]
    createMany?: OrderCreateManySeatInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TableUpdateOneRequiredWithoutSeatsNestedInput = {
    create?: XOR<TableCreateWithoutSeatsInput, TableUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: TableCreateOrConnectWithoutSeatsInput
    upsert?: TableUpsertWithoutSeatsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutSeatsInput, TableUpdateWithoutSeatsInput>, TableUncheckedUpdateWithoutSeatsInput>
  }

  export type OrderUpdateManyWithoutSeatNestedInput = {
    create?: XOR<OrderCreateWithoutSeatInput, OrderUncheckedCreateWithoutSeatInput> | OrderCreateWithoutSeatInput[] | OrderUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSeatInput | OrderCreateOrConnectWithoutSeatInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSeatInput | OrderUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: OrderCreateManySeatInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSeatInput | OrderUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSeatInput | OrderUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<OrderCreateWithoutSeatInput, OrderUncheckedCreateWithoutSeatInput> | OrderCreateWithoutSeatInput[] | OrderUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSeatInput | OrderCreateOrConnectWithoutSeatInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSeatInput | OrderUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: OrderCreateManySeatInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSeatInput | OrderUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSeatInput | OrderUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TableCreateNestedOneWithoutReservationsInput = {
    create?: XOR<TableCreateWithoutReservationsInput, TableUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: TableCreateOrConnectWithoutReservationsInput
    connect?: TableWhereUniqueInput
  }

  export type TableUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<TableCreateWithoutReservationsInput, TableUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: TableCreateOrConnectWithoutReservationsInput
    upsert?: TableUpsertWithoutReservationsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutReservationsInput, TableUpdateWithoutReservationsInput>, TableUncheckedUpdateWithoutReservationsInput>
  }

  export type CourseItemCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseItemCreateWithoutCourseInput, CourseItemUncheckedCreateWithoutCourseInput> | CourseItemCreateWithoutCourseInput[] | CourseItemUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseItemCreateOrConnectWithoutCourseInput | CourseItemCreateOrConnectWithoutCourseInput[]
    createMany?: CourseItemCreateManyCourseInputEnvelope
    connect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCourseInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CourseItemUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseItemCreateWithoutCourseInput, CourseItemUncheckedCreateWithoutCourseInput> | CourseItemCreateWithoutCourseInput[] | CourseItemUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseItemCreateOrConnectWithoutCourseInput | CourseItemCreateOrConnectWithoutCourseInput[]
    createMany?: CourseItemCreateManyCourseInputEnvelope
    connect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CourseItemUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseItemCreateWithoutCourseInput, CourseItemUncheckedCreateWithoutCourseInput> | CourseItemCreateWithoutCourseInput[] | CourseItemUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseItemCreateOrConnectWithoutCourseInput | CourseItemCreateOrConnectWithoutCourseInput[]
    upsert?: CourseItemUpsertWithWhereUniqueWithoutCourseInput | CourseItemUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseItemCreateManyCourseInputEnvelope
    set?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    disconnect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    delete?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    connect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    update?: CourseItemUpdateWithWhereUniqueWithoutCourseInput | CourseItemUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseItemUpdateManyWithWhereWithoutCourseInput | CourseItemUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseItemScalarWhereInput | CourseItemScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCourseInput | OrderUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCourseInput | OrderUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCourseInput | OrderUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CourseItemUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseItemCreateWithoutCourseInput, CourseItemUncheckedCreateWithoutCourseInput> | CourseItemCreateWithoutCourseInput[] | CourseItemUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseItemCreateOrConnectWithoutCourseInput | CourseItemCreateOrConnectWithoutCourseInput[]
    upsert?: CourseItemUpsertWithWhereUniqueWithoutCourseInput | CourseItemUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseItemCreateManyCourseInputEnvelope
    set?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    disconnect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    delete?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    connect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    update?: CourseItemUpdateWithWhereUniqueWithoutCourseInput | CourseItemUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseItemUpdateManyWithWhereWithoutCourseInput | CourseItemUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseItemScalarWhereInput | CourseItemScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput> | OrderCreateWithoutCourseInput[] | OrderUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCourseInput | OrderCreateOrConnectWithoutCourseInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCourseInput | OrderUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OrderCreateManyCourseInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCourseInput | OrderUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCourseInput | OrderUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutCourseItemsInput = {
    create?: XOR<CourseCreateWithoutCourseItemsInput, CourseUncheckedCreateWithoutCourseItemsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseItemsInput
    connect?: CourseWhereUniqueInput
  }

  export type MenuItemCreateNestedOneWithoutCourseItemsInput = {
    create?: XOR<MenuItemCreateWithoutCourseItemsInput, MenuItemUncheckedCreateWithoutCourseItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutCourseItemsInput
    connect?: MenuItemWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutCourseItemsNestedInput = {
    create?: XOR<CourseCreateWithoutCourseItemsInput, CourseUncheckedCreateWithoutCourseItemsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseItemsInput
    upsert?: CourseUpsertWithoutCourseItemsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseItemsInput, CourseUpdateWithoutCourseItemsInput>, CourseUncheckedUpdateWithoutCourseItemsInput>
  }

  export type MenuItemUpdateOneRequiredWithoutCourseItemsNestedInput = {
    create?: XOR<MenuItemCreateWithoutCourseItemsInput, MenuItemUncheckedCreateWithoutCourseItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutCourseItemsInput
    upsert?: MenuItemUpsertWithoutCourseItemsInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutCourseItemsInput, MenuItemUpdateWithoutCourseItemsInput>, MenuItemUncheckedUpdateWithoutCourseItemsInput>
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

  export type MenuCategoryCreateNestedOneWithoutMenuItemsInput = {
    create?: XOR<MenuCategoryCreateWithoutMenuItemsInput, MenuCategoryUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutMenuItemsInput
    connect?: MenuCategoryWhereUniqueInput
  }

  export type CourseItemCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<CourseItemCreateWithoutMenuItemInput, CourseItemUncheckedCreateWithoutMenuItemInput> | CourseItemCreateWithoutMenuItemInput[] | CourseItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: CourseItemCreateOrConnectWithoutMenuItemInput | CourseItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: CourseItemCreateManyMenuItemInputEnvelope
    connect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type MenuItemIngredientCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<MenuItemIngredientCreateWithoutMenuItemInput, MenuItemIngredientUncheckedCreateWithoutMenuItemInput> | MenuItemIngredientCreateWithoutMenuItemInput[] | MenuItemIngredientUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemIngredientCreateOrConnectWithoutMenuItemInput | MenuItemIngredientCreateOrConnectWithoutMenuItemInput[]
    createMany?: MenuItemIngredientCreateManyMenuItemInputEnvelope
    connect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
  }

  export type CourseItemUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<CourseItemCreateWithoutMenuItemInput, CourseItemUncheckedCreateWithoutMenuItemInput> | CourseItemCreateWithoutMenuItemInput[] | CourseItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: CourseItemCreateOrConnectWithoutMenuItemInput | CourseItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: CourseItemCreateManyMenuItemInputEnvelope
    connect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type MenuItemIngredientUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<MenuItemIngredientCreateWithoutMenuItemInput, MenuItemIngredientUncheckedCreateWithoutMenuItemInput> | MenuItemIngredientCreateWithoutMenuItemInput[] | MenuItemIngredientUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemIngredientCreateOrConnectWithoutMenuItemInput | MenuItemIngredientCreateOrConnectWithoutMenuItemInput[]
    createMany?: MenuItemIngredientCreateManyMenuItemInputEnvelope
    connect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
  }

  export type MenuCategoryUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: XOR<MenuCategoryCreateWithoutMenuItemsInput, MenuCategoryUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutMenuItemsInput
    upsert?: MenuCategoryUpsertWithoutMenuItemsInput
    connect?: MenuCategoryWhereUniqueInput
    update?: XOR<XOR<MenuCategoryUpdateToOneWithWhereWithoutMenuItemsInput, MenuCategoryUpdateWithoutMenuItemsInput>, MenuCategoryUncheckedUpdateWithoutMenuItemsInput>
  }

  export type CourseItemUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<CourseItemCreateWithoutMenuItemInput, CourseItemUncheckedCreateWithoutMenuItemInput> | CourseItemCreateWithoutMenuItemInput[] | CourseItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: CourseItemCreateOrConnectWithoutMenuItemInput | CourseItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: CourseItemUpsertWithWhereUniqueWithoutMenuItemInput | CourseItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: CourseItemCreateManyMenuItemInputEnvelope
    set?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    disconnect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    delete?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    connect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    update?: CourseItemUpdateWithWhereUniqueWithoutMenuItemInput | CourseItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: CourseItemUpdateManyWithWhereWithoutMenuItemInput | CourseItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: CourseItemScalarWhereInput | CourseItemScalarWhereInput[]
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

  export type MenuItemIngredientUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<MenuItemIngredientCreateWithoutMenuItemInput, MenuItemIngredientUncheckedCreateWithoutMenuItemInput> | MenuItemIngredientCreateWithoutMenuItemInput[] | MenuItemIngredientUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemIngredientCreateOrConnectWithoutMenuItemInput | MenuItemIngredientCreateOrConnectWithoutMenuItemInput[]
    upsert?: MenuItemIngredientUpsertWithWhereUniqueWithoutMenuItemInput | MenuItemIngredientUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: MenuItemIngredientCreateManyMenuItemInputEnvelope
    set?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    disconnect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    delete?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    connect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    update?: MenuItemIngredientUpdateWithWhereUniqueWithoutMenuItemInput | MenuItemIngredientUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: MenuItemIngredientUpdateManyWithWhereWithoutMenuItemInput | MenuItemIngredientUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: MenuItemIngredientScalarWhereInput | MenuItemIngredientScalarWhereInput[]
  }

  export type CourseItemUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<CourseItemCreateWithoutMenuItemInput, CourseItemUncheckedCreateWithoutMenuItemInput> | CourseItemCreateWithoutMenuItemInput[] | CourseItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: CourseItemCreateOrConnectWithoutMenuItemInput | CourseItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: CourseItemUpsertWithWhereUniqueWithoutMenuItemInput | CourseItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: CourseItemCreateManyMenuItemInputEnvelope
    set?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    disconnect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    delete?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    connect?: CourseItemWhereUniqueInput | CourseItemWhereUniqueInput[]
    update?: CourseItemUpdateWithWhereUniqueWithoutMenuItemInput | CourseItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: CourseItemUpdateManyWithWhereWithoutMenuItemInput | CourseItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: CourseItemScalarWhereInput | CourseItemScalarWhereInput[]
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

  export type MenuItemIngredientUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<MenuItemIngredientCreateWithoutMenuItemInput, MenuItemIngredientUncheckedCreateWithoutMenuItemInput> | MenuItemIngredientCreateWithoutMenuItemInput[] | MenuItemIngredientUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: MenuItemIngredientCreateOrConnectWithoutMenuItemInput | MenuItemIngredientCreateOrConnectWithoutMenuItemInput[]
    upsert?: MenuItemIngredientUpsertWithWhereUniqueWithoutMenuItemInput | MenuItemIngredientUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: MenuItemIngredientCreateManyMenuItemInputEnvelope
    set?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    disconnect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    delete?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    connect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    update?: MenuItemIngredientUpdateWithWhereUniqueWithoutMenuItemInput | MenuItemIngredientUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: MenuItemIngredientUpdateManyWithWhereWithoutMenuItemInput | MenuItemIngredientUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: MenuItemIngredientScalarWhereInput | MenuItemIngredientScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type SeatCreateNestedOneWithoutOrdersInput = {
    create?: XOR<SeatCreateWithoutOrdersInput, SeatUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: SeatCreateOrConnectWithoutOrdersInput
    connect?: SeatWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutOrdersInput
    connect?: CourseWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type SeatUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<SeatCreateWithoutOrdersInput, SeatUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: SeatCreateOrConnectWithoutOrdersInput
    upsert?: SeatUpsertWithoutOrdersInput
    connect?: SeatWhereUniqueInput
    update?: XOR<XOR<SeatUpdateToOneWithWhereWithoutOrdersInput, SeatUpdateWithoutOrdersInput>, SeatUncheckedUpdateWithoutOrdersInput>
  }

  export type CourseUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutOrdersInput
    upsert?: CourseUpsertWithoutOrdersInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutOrdersInput, CourseUpdateWithoutOrdersInput>, CourseUncheckedUpdateWithoutOrdersInput>
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

  export type PaymentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
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

  export type PaymentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
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

  export type OrderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    connect?: OrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type OrderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    upsert?: OrderUpsertWithoutPaymentInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentInput, OrderUpdateWithoutPaymentInput>, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type InventoryItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<InventoryItemCreateWithoutCategoryInput, InventoryItemUncheckedCreateWithoutCategoryInput> | InventoryItemCreateWithoutCategoryInput[] | InventoryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutCategoryInput | InventoryItemCreateOrConnectWithoutCategoryInput[]
    createMany?: InventoryItemCreateManyCategoryInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<InventoryItemCreateWithoutCategoryInput, InventoryItemUncheckedCreateWithoutCategoryInput> | InventoryItemCreateWithoutCategoryInput[] | InventoryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutCategoryInput | InventoryItemCreateOrConnectWithoutCategoryInput[]
    createMany?: InventoryItemCreateManyCategoryInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type InventoryItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<InventoryItemCreateWithoutCategoryInput, InventoryItemUncheckedCreateWithoutCategoryInput> | InventoryItemCreateWithoutCategoryInput[] | InventoryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutCategoryInput | InventoryItemCreateOrConnectWithoutCategoryInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutCategoryInput | InventoryItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: InventoryItemCreateManyCategoryInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutCategoryInput | InventoryItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutCategoryInput | InventoryItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<InventoryItemCreateWithoutCategoryInput, InventoryItemUncheckedCreateWithoutCategoryInput> | InventoryItemCreateWithoutCategoryInput[] | InventoryItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutCategoryInput | InventoryItemCreateOrConnectWithoutCategoryInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutCategoryInput | InventoryItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: InventoryItemCreateManyCategoryInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutCategoryInput | InventoryItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutCategoryInput | InventoryItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type InventoryCategoryCreateNestedOneWithoutInventoryItemsInput = {
    create?: XOR<InventoryCategoryCreateWithoutInventoryItemsInput, InventoryCategoryUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: InventoryCategoryCreateOrConnectWithoutInventoryItemsInput
    connect?: InventoryCategoryWhereUniqueInput
  }

  export type MenuItemIngredientCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<MenuItemIngredientCreateWithoutInventoryItemInput, MenuItemIngredientUncheckedCreateWithoutInventoryItemInput> | MenuItemIngredientCreateWithoutInventoryItemInput[] | MenuItemIngredientUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: MenuItemIngredientCreateOrConnectWithoutInventoryItemInput | MenuItemIngredientCreateOrConnectWithoutInventoryItemInput[]
    createMany?: MenuItemIngredientCreateManyInventoryItemInputEnvelope
    connect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
  }

  export type InventoryTransactionCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionCreateWithoutInventoryItemInput[] | InventoryTransactionUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryItemInput | InventoryTransactionCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryTransactionCreateManyInventoryItemInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type MenuItemIngredientUncheckedCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<MenuItemIngredientCreateWithoutInventoryItemInput, MenuItemIngredientUncheckedCreateWithoutInventoryItemInput> | MenuItemIngredientCreateWithoutInventoryItemInput[] | MenuItemIngredientUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: MenuItemIngredientCreateOrConnectWithoutInventoryItemInput | MenuItemIngredientCreateOrConnectWithoutInventoryItemInput[]
    createMany?: MenuItemIngredientCreateManyInventoryItemInputEnvelope
    connect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
  }

  export type InventoryTransactionUncheckedCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionCreateWithoutInventoryItemInput[] | InventoryTransactionUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryItemInput | InventoryTransactionCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryTransactionCreateManyInventoryItemInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type InventoryCategoryUpdateOneRequiredWithoutInventoryItemsNestedInput = {
    create?: XOR<InventoryCategoryCreateWithoutInventoryItemsInput, InventoryCategoryUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: InventoryCategoryCreateOrConnectWithoutInventoryItemsInput
    upsert?: InventoryCategoryUpsertWithoutInventoryItemsInput
    connect?: InventoryCategoryWhereUniqueInput
    update?: XOR<XOR<InventoryCategoryUpdateToOneWithWhereWithoutInventoryItemsInput, InventoryCategoryUpdateWithoutInventoryItemsInput>, InventoryCategoryUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type MenuItemIngredientUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<MenuItemIngredientCreateWithoutInventoryItemInput, MenuItemIngredientUncheckedCreateWithoutInventoryItemInput> | MenuItemIngredientCreateWithoutInventoryItemInput[] | MenuItemIngredientUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: MenuItemIngredientCreateOrConnectWithoutInventoryItemInput | MenuItemIngredientCreateOrConnectWithoutInventoryItemInput[]
    upsert?: MenuItemIngredientUpsertWithWhereUniqueWithoutInventoryItemInput | MenuItemIngredientUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: MenuItemIngredientCreateManyInventoryItemInputEnvelope
    set?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    disconnect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    delete?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    connect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    update?: MenuItemIngredientUpdateWithWhereUniqueWithoutInventoryItemInput | MenuItemIngredientUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: MenuItemIngredientUpdateManyWithWhereWithoutInventoryItemInput | MenuItemIngredientUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: MenuItemIngredientScalarWhereInput | MenuItemIngredientScalarWhereInput[]
  }

  export type InventoryTransactionUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionCreateWithoutInventoryItemInput[] | InventoryTransactionUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryItemInput | InventoryTransactionCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryTransactionCreateManyInventoryItemInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutInventoryItemInput | InventoryTransactionUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type MenuItemIngredientUncheckedUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<MenuItemIngredientCreateWithoutInventoryItemInput, MenuItemIngredientUncheckedCreateWithoutInventoryItemInput> | MenuItemIngredientCreateWithoutInventoryItemInput[] | MenuItemIngredientUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: MenuItemIngredientCreateOrConnectWithoutInventoryItemInput | MenuItemIngredientCreateOrConnectWithoutInventoryItemInput[]
    upsert?: MenuItemIngredientUpsertWithWhereUniqueWithoutInventoryItemInput | MenuItemIngredientUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: MenuItemIngredientCreateManyInventoryItemInputEnvelope
    set?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    disconnect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    delete?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    connect?: MenuItemIngredientWhereUniqueInput | MenuItemIngredientWhereUniqueInput[]
    update?: MenuItemIngredientUpdateWithWhereUniqueWithoutInventoryItemInput | MenuItemIngredientUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: MenuItemIngredientUpdateManyWithWhereWithoutInventoryItemInput | MenuItemIngredientUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: MenuItemIngredientScalarWhereInput | MenuItemIngredientScalarWhereInput[]
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionCreateWithoutInventoryItemInput[] | InventoryTransactionUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryItemInput | InventoryTransactionCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryTransactionCreateManyInventoryItemInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutInventoryItemInput | InventoryTransactionUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type MenuItemCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<MenuItemCreateWithoutIngredientsInput, MenuItemUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutIngredientsInput
    connect?: MenuItemWhereUniqueInput
  }

  export type InventoryItemCreateNestedOneWithoutInventoryInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput
    connect?: InventoryItemWhereUniqueInput
  }

  export type MenuItemUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<MenuItemCreateWithoutIngredientsInput, MenuItemUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutIngredientsInput
    upsert?: MenuItemUpsertWithoutIngredientsInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutIngredientsInput, MenuItemUpdateWithoutIngredientsInput>, MenuItemUncheckedUpdateWithoutIngredientsInput>
  }

  export type InventoryItemUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput
    upsert?: InventoryItemUpsertWithoutInventoryInput
    connect?: InventoryItemWhereUniqueInput
    update?: XOR<XOR<InventoryItemUpdateToOneWithWhereWithoutInventoryInput, InventoryItemUpdateWithoutInventoryInput>, InventoryItemUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryItemCreateNestedOneWithoutInventoryTransactionsInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryTransactionsInput, InventoryItemUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryTransactionsInput
    connect?: InventoryItemWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type InventoryItemUpdateOneRequiredWithoutInventoryTransactionsNestedInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryTransactionsInput, InventoryItemUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryTransactionsInput
    upsert?: InventoryItemUpsertWithoutInventoryTransactionsInput
    connect?: InventoryItemWhereUniqueInput
    update?: XOR<XOR<InventoryItemUpdateToOneWithWhereWithoutInventoryTransactionsInput, InventoryItemUpdateWithoutInventoryTransactionsInput>, InventoryItemUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTableStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TableStatus | EnumTableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TableStatus[]
    notIn?: $Enums.TableStatus[]
    not?: NestedEnumTableStatusFilter<$PrismaModel> | $Enums.TableStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTableStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TableStatus | EnumTableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TableStatus[]
    notIn?: $Enums.TableStatus[]
    not?: NestedEnumTableStatusWithAggregatesFilter<$PrismaModel> | $Enums.TableStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTableStatusFilter<$PrismaModel>
    _max?: NestedEnumTableStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seat: SeatCreateNestedOneWithoutOrdersInput
    course?: CourseCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seatId: string
    courseId?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    receiptNumber: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    receiptNumber: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    notes?: StringNullableFilter<"Order"> | string | null
    hasCourse?: BoolFilter<"Order"> | boolean
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: StringFilter<"Order"> | string
    seatId?: StringFilter<"Order"> | string
    courseId?: StringNullableFilter<"Order"> | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    receiptNumber?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionRef?: StringNullableFilter<"Payment"> | string | null
    notes?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    orderId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
  }

  export type SeatCreateWithoutTableInput = {
    id?: string
    seatNumber: string
    status?: $Enums.TableStatus
    orders?: OrderCreateNestedManyWithoutSeatInput
  }

  export type SeatUncheckedCreateWithoutTableInput = {
    id?: string
    seatNumber: string
    status?: $Enums.TableStatus
    orders?: OrderUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatCreateOrConnectWithoutTableInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutTableInput, SeatUncheckedCreateWithoutTableInput>
  }

  export type SeatCreateManyTableInputEnvelope = {
    data: SeatCreateManyTableInput | SeatCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutTableInput = {
    id?: string
    customerName: string
    phoneNumber: string
    partySize: number
    reservationTime: Date | string
    notes?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUncheckedCreateWithoutTableInput = {
    id?: string
    customerName: string
    phoneNumber: string
    partySize: number
    reservationTime: Date | string
    notes?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutTableInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutTableInput, ReservationUncheckedCreateWithoutTableInput>
  }

  export type ReservationCreateManyTableInputEnvelope = {
    data: ReservationCreateManyTableInput | ReservationCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type SeatUpsertWithWhereUniqueWithoutTableInput = {
    where: SeatWhereUniqueInput
    update: XOR<SeatUpdateWithoutTableInput, SeatUncheckedUpdateWithoutTableInput>
    create: XOR<SeatCreateWithoutTableInput, SeatUncheckedCreateWithoutTableInput>
  }

  export type SeatUpdateWithWhereUniqueWithoutTableInput = {
    where: SeatWhereUniqueInput
    data: XOR<SeatUpdateWithoutTableInput, SeatUncheckedUpdateWithoutTableInput>
  }

  export type SeatUpdateManyWithWhereWithoutTableInput = {
    where: SeatScalarWhereInput
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyWithoutTableInput>
  }

  export type SeatScalarWhereInput = {
    AND?: SeatScalarWhereInput | SeatScalarWhereInput[]
    OR?: SeatScalarWhereInput[]
    NOT?: SeatScalarWhereInput | SeatScalarWhereInput[]
    id?: StringFilter<"Seat"> | string
    seatNumber?: StringFilter<"Seat"> | string
    status?: EnumTableStatusFilter<"Seat"> | $Enums.TableStatus
    tableId?: StringFilter<"Seat"> | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutTableInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutTableInput, ReservationUncheckedUpdateWithoutTableInput>
    create: XOR<ReservationCreateWithoutTableInput, ReservationUncheckedCreateWithoutTableInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutTableInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutTableInput, ReservationUncheckedUpdateWithoutTableInput>
  }

  export type ReservationUpdateManyWithWhereWithoutTableInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutTableInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    customerName?: StringFilter<"Reservation"> | string
    phoneNumber?: StringFilter<"Reservation"> | string
    partySize?: IntFilter<"Reservation"> | number
    reservationTime?: DateTimeFilter<"Reservation"> | Date | string
    notes?: StringNullableFilter<"Reservation"> | string | null
    status?: StringFilter<"Reservation"> | string
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    tableId?: StringFilter<"Reservation"> | string
  }

  export type TableCreateWithoutSeatsInput = {
    id?: string
    tableNumber: string
    capacity: number
    status?: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    reservations?: ReservationCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutSeatsInput = {
    id?: string
    tableNumber: string
    capacity: number
    status?: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    reservations?: ReservationUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutSeatsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutSeatsInput, TableUncheckedCreateWithoutSeatsInput>
  }

  export type OrderCreateWithoutSeatInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    course?: CourseCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutSeatInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    courseId?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutSeatInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSeatInput, OrderUncheckedCreateWithoutSeatInput>
  }

  export type OrderCreateManySeatInputEnvelope = {
    data: OrderCreateManySeatInput | OrderCreateManySeatInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutSeatsInput = {
    update: XOR<TableUpdateWithoutSeatsInput, TableUncheckedUpdateWithoutSeatsInput>
    create: XOR<TableCreateWithoutSeatsInput, TableUncheckedCreateWithoutSeatsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutSeatsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutSeatsInput, TableUncheckedUpdateWithoutSeatsInput>
  }

  export type TableUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    reservations?: ReservationUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    reservations?: ReservationUncheckedUpdateManyWithoutTableNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutSeatInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutSeatInput, OrderUncheckedUpdateWithoutSeatInput>
    create: XOR<OrderCreateWithoutSeatInput, OrderUncheckedCreateWithoutSeatInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutSeatInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutSeatInput, OrderUncheckedUpdateWithoutSeatInput>
  }

  export type OrderUpdateManyWithWhereWithoutSeatInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutSeatInput>
  }

  export type TableCreateWithoutReservationsInput = {
    id?: string
    tableNumber: string
    capacity: number
    status?: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    seats?: SeatCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutReservationsInput = {
    id?: string
    tableNumber: string
    capacity: number
    status?: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    seats?: SeatUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutReservationsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutReservationsInput, TableUncheckedCreateWithoutReservationsInput>
  }

  export type TableUpsertWithoutReservationsInput = {
    update: XOR<TableUpdateWithoutReservationsInput, TableUncheckedUpdateWithoutReservationsInput>
    create: XOR<TableCreateWithoutReservationsInput, TableUncheckedCreateWithoutReservationsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutReservationsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutReservationsInput, TableUncheckedUpdateWithoutReservationsInput>
  }

  export type TableUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    seats?: SeatUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    seats?: SeatUncheckedUpdateManyWithoutTableNestedInput
  }

  export type CourseItemCreateWithoutCourseInput = {
    id?: string
    quantity: number
    menuItem: MenuItemCreateNestedOneWithoutCourseItemsInput
  }

  export type CourseItemUncheckedCreateWithoutCourseInput = {
    id?: string
    quantity: number
    menuItemId: string
  }

  export type CourseItemCreateOrConnectWithoutCourseInput = {
    where: CourseItemWhereUniqueInput
    create: XOR<CourseItemCreateWithoutCourseInput, CourseItemUncheckedCreateWithoutCourseInput>
  }

  export type CourseItemCreateManyCourseInputEnvelope = {
    data: CourseItemCreateManyCourseInput | CourseItemCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCourseInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    seat: SeatCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCourseInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    seatId: string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCourseInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput>
  }

  export type OrderCreateManyCourseInputEnvelope = {
    data: OrderCreateManyCourseInput | OrderCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseItemUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseItemWhereUniqueInput
    update: XOR<CourseItemUpdateWithoutCourseInput, CourseItemUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseItemCreateWithoutCourseInput, CourseItemUncheckedCreateWithoutCourseInput>
  }

  export type CourseItemUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseItemWhereUniqueInput
    data: XOR<CourseItemUpdateWithoutCourseInput, CourseItemUncheckedUpdateWithoutCourseInput>
  }

  export type CourseItemUpdateManyWithWhereWithoutCourseInput = {
    where: CourseItemScalarWhereInput
    data: XOR<CourseItemUpdateManyMutationInput, CourseItemUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseItemScalarWhereInput = {
    AND?: CourseItemScalarWhereInput | CourseItemScalarWhereInput[]
    OR?: CourseItemScalarWhereInput[]
    NOT?: CourseItemScalarWhereInput | CourseItemScalarWhereInput[]
    id?: StringFilter<"CourseItem"> | string
    quantity?: IntFilter<"CourseItem"> | number
    courseId?: StringFilter<"CourseItem"> | string
    menuItemId?: StringFilter<"CourseItem"> | string
  }

  export type OrderUpsertWithWhereUniqueWithoutCourseInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCourseInput, OrderUncheckedUpdateWithoutCourseInput>
    create: XOR<OrderCreateWithoutCourseInput, OrderUncheckedCreateWithoutCourseInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCourseInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCourseInput, OrderUncheckedUpdateWithoutCourseInput>
  }

  export type OrderUpdateManyWithWhereWithoutCourseInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutCourseItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourseItemsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseItemsInput, CourseUncheckedCreateWithoutCourseItemsInput>
  }

  export type MenuItemCreateWithoutCourseItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MenuCategoryCreateNestedOneWithoutMenuItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
    ingredients?: MenuItemIngredientCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutCourseItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
    ingredients?: MenuItemIngredientUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutCourseItemsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutCourseItemsInput, MenuItemUncheckedCreateWithoutCourseItemsInput>
  }

  export type CourseUpsertWithoutCourseItemsInput = {
    update: XOR<CourseUpdateWithoutCourseItemsInput, CourseUncheckedUpdateWithoutCourseItemsInput>
    create: XOR<CourseCreateWithoutCourseItemsInput, CourseUncheckedCreateWithoutCourseItemsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseItemsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseItemsInput, CourseUncheckedUpdateWithoutCourseItemsInput>
  }

  export type CourseUpdateWithoutCourseItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type MenuItemUpsertWithoutCourseItemsInput = {
    update: XOR<MenuItemUpdateWithoutCourseItemsInput, MenuItemUncheckedUpdateWithoutCourseItemsInput>
    create: XOR<MenuItemCreateWithoutCourseItemsInput, MenuItemUncheckedCreateWithoutCourseItemsInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutCourseItemsInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutCourseItemsInput, MenuItemUncheckedUpdateWithoutCourseItemsInput>
  }

  export type MenuItemUpdateWithoutCourseItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MenuCategoryUpdateOneRequiredWithoutMenuItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
    ingredients?: MenuItemIngredientUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutCourseItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
    ingredients?: MenuItemIngredientUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courseItems?: CourseItemCreateNestedManyWithoutMenuItemInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
    ingredients?: MenuItemIngredientCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courseItems?: CourseItemUncheckedCreateNestedManyWithoutMenuItemInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
    ingredients?: MenuItemIngredientUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemCreateManyCategoryInputEnvelope = {
    data: MenuItemCreateManyCategoryInput | MenuItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
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

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: DecimalFilter<"MenuItem"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    active?: BoolFilter<"MenuItem"> | boolean
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    categoryId?: StringFilter<"MenuItem"> | string
  }

  export type MenuCategoryCreateWithoutMenuItemsInput = {
    id?: string
    name: string
    description?: string | null
    displayOrder: number
    active?: boolean
  }

  export type MenuCategoryUncheckedCreateWithoutMenuItemsInput = {
    id?: string
    name: string
    description?: string | null
    displayOrder: number
    active?: boolean
  }

  export type MenuCategoryCreateOrConnectWithoutMenuItemsInput = {
    where: MenuCategoryWhereUniqueInput
    create: XOR<MenuCategoryCreateWithoutMenuItemsInput, MenuCategoryUncheckedCreateWithoutMenuItemsInput>
  }

  export type CourseItemCreateWithoutMenuItemInput = {
    id?: string
    quantity: number
    course: CourseCreateNestedOneWithoutCourseItemsInput
  }

  export type CourseItemUncheckedCreateWithoutMenuItemInput = {
    id?: string
    quantity: number
    courseId: string
  }

  export type CourseItemCreateOrConnectWithoutMenuItemInput = {
    where: CourseItemWhereUniqueInput
    create: XOR<CourseItemCreateWithoutMenuItemInput, CourseItemUncheckedCreateWithoutMenuItemInput>
  }

  export type CourseItemCreateManyMenuItemInputEnvelope = {
    data: CourseItemCreateManyMenuItemInput | CourseItemCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutMenuItemInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutMenuItemInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
  }

  export type OrderItemCreateOrConnectWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput>
  }

  export type OrderItemCreateManyMenuItemInputEnvelope = {
    data: OrderItemCreateManyMenuItemInput | OrderItemCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemIngredientCreateWithoutMenuItemInput = {
    id?: string
    quantityRequired: Decimal | DecimalJsLike | number | string
    inventoryItem: InventoryItemCreateNestedOneWithoutInventoryInput
  }

  export type MenuItemIngredientUncheckedCreateWithoutMenuItemInput = {
    id?: string
    quantityRequired: Decimal | DecimalJsLike | number | string
    inventoryItemId: string
  }

  export type MenuItemIngredientCreateOrConnectWithoutMenuItemInput = {
    where: MenuItemIngredientWhereUniqueInput
    create: XOR<MenuItemIngredientCreateWithoutMenuItemInput, MenuItemIngredientUncheckedCreateWithoutMenuItemInput>
  }

  export type MenuItemIngredientCreateManyMenuItemInputEnvelope = {
    data: MenuItemIngredientCreateManyMenuItemInput | MenuItemIngredientCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type MenuCategoryUpsertWithoutMenuItemsInput = {
    update: XOR<MenuCategoryUpdateWithoutMenuItemsInput, MenuCategoryUncheckedUpdateWithoutMenuItemsInput>
    create: XOR<MenuCategoryCreateWithoutMenuItemsInput, MenuCategoryUncheckedCreateWithoutMenuItemsInput>
    where?: MenuCategoryWhereInput
  }

  export type MenuCategoryUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: MenuCategoryWhereInput
    data: XOR<MenuCategoryUpdateWithoutMenuItemsInput, MenuCategoryUncheckedUpdateWithoutMenuItemsInput>
  }

  export type MenuCategoryUpdateWithoutMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuCategoryUncheckedUpdateWithoutMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displayOrder?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseItemUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: CourseItemWhereUniqueInput
    update: XOR<CourseItemUpdateWithoutMenuItemInput, CourseItemUncheckedUpdateWithoutMenuItemInput>
    create: XOR<CourseItemCreateWithoutMenuItemInput, CourseItemUncheckedCreateWithoutMenuItemInput>
  }

  export type CourseItemUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: CourseItemWhereUniqueInput
    data: XOR<CourseItemUpdateWithoutMenuItemInput, CourseItemUncheckedUpdateWithoutMenuItemInput>
  }

  export type CourseItemUpdateManyWithWhereWithoutMenuItemInput = {
    where: CourseItemScalarWhereInput
    data: XOR<CourseItemUpdateManyMutationInput, CourseItemUncheckedUpdateManyWithoutMenuItemInput>
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
    quantity?: IntFilter<"OrderItem"> | number
    price?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"OrderItem"> | string | null
    status?: EnumOrderStatusFilter<"OrderItem"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
  }

  export type MenuItemIngredientUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: MenuItemIngredientWhereUniqueInput
    update: XOR<MenuItemIngredientUpdateWithoutMenuItemInput, MenuItemIngredientUncheckedUpdateWithoutMenuItemInput>
    create: XOR<MenuItemIngredientCreateWithoutMenuItemInput, MenuItemIngredientUncheckedCreateWithoutMenuItemInput>
  }

  export type MenuItemIngredientUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: MenuItemIngredientWhereUniqueInput
    data: XOR<MenuItemIngredientUpdateWithoutMenuItemInput, MenuItemIngredientUncheckedUpdateWithoutMenuItemInput>
  }

  export type MenuItemIngredientUpdateManyWithWhereWithoutMenuItemInput = {
    where: MenuItemIngredientScalarWhereInput
    data: XOR<MenuItemIngredientUpdateManyMutationInput, MenuItemIngredientUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type MenuItemIngredientScalarWhereInput = {
    AND?: MenuItemIngredientScalarWhereInput | MenuItemIngredientScalarWhereInput[]
    OR?: MenuItemIngredientScalarWhereInput[]
    NOT?: MenuItemIngredientScalarWhereInput | MenuItemIngredientScalarWhereInput[]
    id?: StringFilter<"MenuItemIngredient"> | string
    quantityRequired?: DecimalFilter<"MenuItemIngredient"> | Decimal | DecimalJsLike | number | string
    menuItemId?: StringFilter<"MenuItemIngredient"> | string
    inventoryItemId?: StringFilter<"MenuItemIngredient"> | string
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    username: string
    password: string
    pin: string
    role: $Enums.UserRole
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    username: string
    password: string
    pin: string
    role: $Enums.UserRole
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type SeatCreateWithoutOrdersInput = {
    id?: string
    seatNumber: string
    status?: $Enums.TableStatus
    table: TableCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateWithoutOrdersInput = {
    id?: string
    seatNumber: string
    status?: $Enums.TableStatus
    tableId: string
  }

  export type SeatCreateOrConnectWithoutOrdersInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutOrdersInput, SeatUncheckedCreateWithoutOrdersInput>
  }

  export type CourseCreateWithoutOrdersInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courseItems?: CourseItemCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    courseItems?: CourseItemUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutOrdersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItemId: string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutOrderInput = {
    id?: string
    receiptNumber: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: string
    receiptNumber: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SeatUpsertWithoutOrdersInput = {
    update: XOR<SeatUpdateWithoutOrdersInput, SeatUncheckedUpdateWithoutOrdersInput>
    create: XOR<SeatCreateWithoutOrdersInput, SeatUncheckedCreateWithoutOrdersInput>
    where?: SeatWhereInput
  }

  export type SeatUpdateToOneWithWhereWithoutOrdersInput = {
    where?: SeatWhereInput
    data: XOR<SeatUpdateWithoutOrdersInput, SeatUncheckedUpdateWithoutOrdersInput>
  }

  export type SeatUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    table?: TableUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUpsertWithoutOrdersInput = {
    update: XOR<CourseUpdateWithoutOrdersInput, CourseUncheckedUpdateWithoutOrdersInput>
    create: XOR<CourseCreateWithoutOrdersInput, CourseUncheckedCreateWithoutOrdersInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutOrdersInput, CourseUncheckedUpdateWithoutOrdersInput>
  }

  export type CourseUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseItems?: CourseItemUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseItems?: CourseItemUncheckedUpdateManyWithoutCourseNestedInput
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

  export type PaymentUpsertWithoutOrderInput = {
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    seat: SeatCreateNestedOneWithoutOrdersInput
    course?: CourseCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    seatId: string
    courseId?: string | null
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type MenuItemCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MenuCategoryCreateNestedOneWithoutMenuItemsInput
    courseItems?: CourseItemCreateNestedManyWithoutMenuItemInput
    ingredients?: MenuItemIngredientCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    courseItems?: CourseItemUncheckedCreateNestedManyWithoutMenuItemInput
    ingredients?: MenuItemIngredientUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutOrderItemsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
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
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    seat?: SeatUpdateOneRequiredWithoutOrdersNestedInput
    course?: CourseUpdateOneWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
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
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MenuCategoryUpdateOneRequiredWithoutMenuItemsNestedInput
    courseItems?: CourseItemUpdateManyWithoutMenuItemNestedInput
    ingredients?: MenuItemIngredientUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    courseItems?: CourseItemUncheckedUpdateManyWithoutMenuItemNestedInput
    ingredients?: MenuItemIngredientUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type OrderCreateWithoutPaymentInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    seat: SeatCreateNestedOneWithoutOrdersInput
    course?: CourseCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    seatId: string
    courseId?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    username: string
    password: string
    pin: string
    role: $Enums.UserRole
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    username: string
    password: string
    pin: string
    role: $Enums.UserRole
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type OrderUpsertWithoutPaymentInput = {
    update: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    seat?: SeatUpdateOneRequiredWithoutOrdersNestedInput
    course?: CourseUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InventoryItemCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    quantityInStock: Decimal | DecimalJsLike | number | string
    alertThreshold: Decimal | DecimalJsLike | number | string
    costPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: MenuItemIngredientCreateNestedManyWithoutInventoryItemInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    quantityInStock: Decimal | DecimalJsLike | number | string
    alertThreshold: Decimal | DecimalJsLike | number | string
    costPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: MenuItemIngredientUncheckedCreateNestedManyWithoutInventoryItemInput
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemCreateOrConnectWithoutCategoryInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutCategoryInput, InventoryItemUncheckedCreateWithoutCategoryInput>
  }

  export type InventoryItemCreateManyCategoryInputEnvelope = {
    data: InventoryItemCreateManyCategoryInput | InventoryItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutCategoryInput, InventoryItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<InventoryItemCreateWithoutCategoryInput, InventoryItemUncheckedCreateWithoutCategoryInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutCategoryInput, InventoryItemUncheckedUpdateWithoutCategoryInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutCategoryInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type InventoryItemScalarWhereInput = {
    AND?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    OR?: InventoryItemScalarWhereInput[]
    NOT?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    id?: StringFilter<"InventoryItem"> | string
    name?: StringFilter<"InventoryItem"> | string
    description?: StringNullableFilter<"InventoryItem"> | string | null
    unit?: StringFilter<"InventoryItem"> | string
    quantityInStock?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFilter<"InventoryItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    categoryId?: StringFilter<"InventoryItem"> | string
  }

  export type InventoryCategoryCreateWithoutInventoryItemsInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type InventoryCategoryUncheckedCreateWithoutInventoryItemsInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type InventoryCategoryCreateOrConnectWithoutInventoryItemsInput = {
    where: InventoryCategoryWhereUniqueInput
    create: XOR<InventoryCategoryCreateWithoutInventoryItemsInput, InventoryCategoryUncheckedCreateWithoutInventoryItemsInput>
  }

  export type MenuItemIngredientCreateWithoutInventoryItemInput = {
    id?: string
    quantityRequired: Decimal | DecimalJsLike | number | string
    menuItem: MenuItemCreateNestedOneWithoutIngredientsInput
  }

  export type MenuItemIngredientUncheckedCreateWithoutInventoryItemInput = {
    id?: string
    quantityRequired: Decimal | DecimalJsLike | number | string
    menuItemId: string
  }

  export type MenuItemIngredientCreateOrConnectWithoutInventoryItemInput = {
    where: MenuItemIngredientWhereUniqueInput
    create: XOR<MenuItemIngredientCreateWithoutInventoryItemInput, MenuItemIngredientUncheckedCreateWithoutInventoryItemInput>
  }

  export type MenuItemIngredientCreateManyInventoryItemInputEnvelope = {
    data: MenuItemIngredientCreateManyInventoryItemInput | MenuItemIngredientCreateManyInventoryItemInput[]
    skipDuplicates?: boolean
  }

  export type InventoryTransactionCreateWithoutInventoryItemInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type InventoryTransactionUncheckedCreateWithoutInventoryItemInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type InventoryTransactionCreateOrConnectWithoutInventoryItemInput = {
    where: InventoryTransactionWhereUniqueInput
    create: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryTransactionCreateManyInventoryItemInputEnvelope = {
    data: InventoryTransactionCreateManyInventoryItemInput | InventoryTransactionCreateManyInventoryItemInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCategoryUpsertWithoutInventoryItemsInput = {
    update: XOR<InventoryCategoryUpdateWithoutInventoryItemsInput, InventoryCategoryUncheckedUpdateWithoutInventoryItemsInput>
    create: XOR<InventoryCategoryCreateWithoutInventoryItemsInput, InventoryCategoryUncheckedCreateWithoutInventoryItemsInput>
    where?: InventoryCategoryWhereInput
  }

  export type InventoryCategoryUpdateToOneWithWhereWithoutInventoryItemsInput = {
    where?: InventoryCategoryWhereInput
    data: XOR<InventoryCategoryUpdateWithoutInventoryItemsInput, InventoryCategoryUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type InventoryCategoryUpdateWithoutInventoryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryCategoryUncheckedUpdateWithoutInventoryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenuItemIngredientUpsertWithWhereUniqueWithoutInventoryItemInput = {
    where: MenuItemIngredientWhereUniqueInput
    update: XOR<MenuItemIngredientUpdateWithoutInventoryItemInput, MenuItemIngredientUncheckedUpdateWithoutInventoryItemInput>
    create: XOR<MenuItemIngredientCreateWithoutInventoryItemInput, MenuItemIngredientUncheckedCreateWithoutInventoryItemInput>
  }

  export type MenuItemIngredientUpdateWithWhereUniqueWithoutInventoryItemInput = {
    where: MenuItemIngredientWhereUniqueInput
    data: XOR<MenuItemIngredientUpdateWithoutInventoryItemInput, MenuItemIngredientUncheckedUpdateWithoutInventoryItemInput>
  }

  export type MenuItemIngredientUpdateManyWithWhereWithoutInventoryItemInput = {
    where: MenuItemIngredientScalarWhereInput
    data: XOR<MenuItemIngredientUpdateManyMutationInput, MenuItemIngredientUncheckedUpdateManyWithoutInventoryItemInput>
  }

  export type InventoryTransactionUpsertWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryTransactionWhereUniqueInput
    update: XOR<InventoryTransactionUpdateWithoutInventoryItemInput, InventoryTransactionUncheckedUpdateWithoutInventoryItemInput>
    create: XOR<InventoryTransactionCreateWithoutInventoryItemInput, InventoryTransactionUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryTransactionUpdateWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryTransactionWhereUniqueInput
    data: XOR<InventoryTransactionUpdateWithoutInventoryItemInput, InventoryTransactionUncheckedUpdateWithoutInventoryItemInput>
  }

  export type InventoryTransactionUpdateManyWithWhereWithoutInventoryItemInput = {
    where: InventoryTransactionScalarWhereInput
    data: XOR<InventoryTransactionUpdateManyMutationInput, InventoryTransactionUncheckedUpdateManyWithoutInventoryItemInput>
  }

  export type InventoryTransactionScalarWhereInput = {
    AND?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
    OR?: InventoryTransactionScalarWhereInput[]
    NOT?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
    id?: StringFilter<"InventoryTransaction"> | string
    type?: EnumTransactionTypeFilter<"InventoryTransaction"> | $Enums.TransactionType
    quantity?: DecimalFilter<"InventoryTransaction"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    inventoryItemId?: StringFilter<"InventoryTransaction"> | string
  }

  export type MenuItemCreateWithoutIngredientsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MenuCategoryCreateNestedOneWithoutMenuItemsInput
    courseItems?: CourseItemCreateNestedManyWithoutMenuItemInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutIngredientsInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    courseItems?: CourseItemUncheckedCreateNestedManyWithoutMenuItemInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutIngredientsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutIngredientsInput, MenuItemUncheckedCreateWithoutIngredientsInput>
  }

  export type InventoryItemCreateWithoutInventoryInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    quantityInStock: Decimal | DecimalJsLike | number | string
    alertThreshold: Decimal | DecimalJsLike | number | string
    costPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: InventoryCategoryCreateNestedOneWithoutInventoryItemsInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    quantityInStock: Decimal | DecimalJsLike | number | string
    alertThreshold: Decimal | DecimalJsLike | number | string
    costPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemCreateOrConnectWithoutInventoryInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput>
  }

  export type MenuItemUpsertWithoutIngredientsInput = {
    update: XOR<MenuItemUpdateWithoutIngredientsInput, MenuItemUncheckedUpdateWithoutIngredientsInput>
    create: XOR<MenuItemCreateWithoutIngredientsInput, MenuItemUncheckedCreateWithoutIngredientsInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutIngredientsInput, MenuItemUncheckedUpdateWithoutIngredientsInput>
  }

  export type MenuItemUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MenuCategoryUpdateOneRequiredWithoutMenuItemsNestedInput
    courseItems?: CourseItemUpdateManyWithoutMenuItemNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    courseItems?: CourseItemUncheckedUpdateManyWithoutMenuItemNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type InventoryItemUpsertWithoutInventoryInput = {
    update: XOR<InventoryItemUpdateWithoutInventoryInput, InventoryItemUncheckedUpdateWithoutInventoryInput>
    create: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput>
    where?: InventoryItemWhereInput
  }

  export type InventoryItemUpdateToOneWithWhereWithoutInventoryInput = {
    where?: InventoryItemWhereInput
    data: XOR<InventoryItemUpdateWithoutInventoryInput, InventoryItemUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryItemUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    quantityInStock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: InventoryCategoryUpdateOneRequiredWithoutInventoryItemsNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    quantityInStock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemCreateWithoutInventoryTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    quantityInStock: Decimal | DecimalJsLike | number | string
    alertThreshold: Decimal | DecimalJsLike | number | string
    costPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: InventoryCategoryCreateNestedOneWithoutInventoryItemsInput
    inventory?: MenuItemIngredientCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemUncheckedCreateWithoutInventoryTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    quantityInStock: Decimal | DecimalJsLike | number | string
    alertThreshold: Decimal | DecimalJsLike | number | string
    costPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    inventory?: MenuItemIngredientUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemCreateOrConnectWithoutInventoryTransactionsInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutInventoryTransactionsInput, InventoryItemUncheckedCreateWithoutInventoryTransactionsInput>
  }

  export type InventoryItemUpsertWithoutInventoryTransactionsInput = {
    update: XOR<InventoryItemUpdateWithoutInventoryTransactionsInput, InventoryItemUncheckedUpdateWithoutInventoryTransactionsInput>
    create: XOR<InventoryItemCreateWithoutInventoryTransactionsInput, InventoryItemUncheckedCreateWithoutInventoryTransactionsInput>
    where?: InventoryItemWhereInput
  }

  export type InventoryItemUpdateToOneWithWhereWithoutInventoryTransactionsInput = {
    where?: InventoryItemWhereInput
    data: XOR<InventoryItemUpdateWithoutInventoryTransactionsInput, InventoryItemUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type InventoryItemUpdateWithoutInventoryTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    quantityInStock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: InventoryCategoryUpdateOneRequiredWithoutInventoryItemsNestedInput
    inventory?: MenuItemIngredientUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutInventoryTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    quantityInStock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    inventory?: MenuItemIngredientUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seatId: string
    courseId?: string | null
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    receiptNumber: string
    amount: Decimal | DecimalJsLike | number | string
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionRef?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seat?: SeatUpdateOneRequiredWithoutOrdersNestedInput
    course?: CourseUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seatId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seatId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiptNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionRef?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type SeatCreateManyTableInput = {
    id?: string
    seatNumber: string
    status?: $Enums.TableStatus
  }

  export type ReservationCreateManyTableInput = {
    id?: string
    customerName: string
    phoneNumber: string
    partySize: number
    reservationTime: Date | string
    notes?: string | null
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeatUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    orders?: OrderUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    orders?: OrderUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
  }

  export type ReservationUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManySeatInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    courseId?: string | null
  }

  export type OrderUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    course?: CourseUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseItemCreateManyCourseInput = {
    id?: string
    quantity: number
    menuItemId: string
  }

  export type OrderCreateManyCourseInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    notes?: string | null
    hasCourse?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    seatId: string
  }

  export type CourseItemUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    menuItem?: MenuItemUpdateOneRequiredWithoutCourseItemsNestedInput
  }

  export type CourseItemUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseItemUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    seat?: SeatUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    hasCourse?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
  }

  export type MenuItemCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseItems?: CourseItemUpdateManyWithoutMenuItemNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
    ingredients?: MenuItemIngredientUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseItems?: CourseItemUncheckedUpdateManyWithoutMenuItemNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
    ingredients?: MenuItemIngredientUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseItemCreateManyMenuItemInput = {
    id?: string
    quantity: number
    courseId: string
  }

  export type OrderItemCreateManyMenuItemInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
  }

  export type MenuItemIngredientCreateManyMenuItemInput = {
    id?: string
    quantityRequired: Decimal | DecimalJsLike | number | string
    inventoryItemId: string
  }

  export type CourseItemUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateOneRequiredWithoutCourseItemsNestedInput
  }

  export type CourseItemUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseItemUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type MenuItemIngredientUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityRequired?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventoryItem?: InventoryItemUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type MenuItemIngredientUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityRequired?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
  }

  export type MenuItemIngredientUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityRequired?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inventoryItemId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItemId: string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryItemCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    unit: string
    quantityInStock: Decimal | DecimalJsLike | number | string
    alertThreshold: Decimal | DecimalJsLike | number | string
    costPerUnit: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    quantityInStock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: MenuItemIngredientUpdateManyWithoutInventoryItemNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    quantityInStock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: MenuItemIngredientUncheckedUpdateManyWithoutInventoryItemNestedInput
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: StringFieldUpdateOperationsInput | string
    quantityInStock?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    alertThreshold?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    costPerUnit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemIngredientCreateManyInventoryItemInput = {
    id?: string
    quantityRequired: Decimal | DecimalJsLike | number | string
    menuItemId: string
  }

  export type InventoryTransactionCreateManyInventoryItemInput = {
    id?: string
    type: $Enums.TransactionType
    quantity: Decimal | DecimalJsLike | number | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type MenuItemIngredientUpdateWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityRequired?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menuItem?: MenuItemUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type MenuItemIngredientUncheckedUpdateWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityRequired?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type MenuItemIngredientUncheckedUpdateManyWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityRequired?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    menuItemId?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryTransactionUpdateWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutInventoryItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    quantity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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