
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
 * Model Courses
 * 
 */
export type Courses = $Result.DefaultSelection<Prisma.$CoursesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model MenuItems
 * 
 */
export type MenuItems = $Result.DefaultSelection<Prisma.$MenuItemsPayload>
/**
 * Model Tables
 * 
 */
export type Tables = $Result.DefaultSelection<Prisma.$TablesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderSeats
 * 
 */
export type OrderSeats = $Result.DefaultSelection<Prisma.$OrderSeatsPayload>
/**
 * Model OrderItems
 * 
 */
export type OrderItems = $Result.DefaultSelection<Prisma.$OrderItemsPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model PaymentDetails
 * 
 */
export type PaymentDetails = $Result.DefaultSelection<Prisma.$PaymentDetailsPayload>
/**
 * Model InventoryItems
 * 
 */
export type InventoryItems = $Result.DefaultSelection<Prisma.$InventoryItemsPayload>
/**
 * Model InventoryTransactions
 * 
 */
export type InventoryTransactions = $Result.DefaultSelection<Prisma.$InventoryTransactionsPayload>
/**
 * Model Reservations
 * 
 */
export type Reservations = $Result.DefaultSelection<Prisma.$ReservationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  manager: 'manager',
  server: 'server',
  inventory_manager: 'inventory_manager'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const OrderStatus: {
  open: 'open',
  closed: 'closed',
  cancelled: 'cancelled'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const ItemStatus: {
  ordered: 'ordered',
  served: 'served',
  cancelled: 'cancelled'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]


export const PaymentType: {
  entire_order: 'entire_order',
  per_seat: 'per_seat',
  mixed: 'mixed'
};

export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType]


export const PaymentMethod: {
  qr_scan: 'qr_scan',
  cash: 'cash',
  card: 'card'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  pending: 'pending',
  completed: 'completed',
  failed: 'failed'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const TransactionType: {
  stock_in: 'stock_in',
  stock_out: 'stock_out',
  adjustment: 'adjustment'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TableStatus: {
  available: 'available',
  occupied: 'occupied',
  reserved: 'reserved'
};

export type TableStatus = (typeof TableStatus)[keyof typeof TableStatus]


export const ReservationStatus: {
  pending: 'pending',
  confirmed: 'confirmed',
  cancelled: 'cancelled',
  completed: 'completed'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

export type PaymentType = $Enums.PaymentType

export const PaymentType: typeof $Enums.PaymentType

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TableStatus = $Enums.TableStatus

export const TableStatus: typeof $Enums.TableStatus

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.courses.findMany()
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
   * // Fetch zero or more Courses
   * const courses = await prisma.courses.findMany()
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
   * `prisma.courses`: Exposes CRUD operations for the **Courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.CoursesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItems`: Exposes CRUD operations for the **MenuItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItems.findMany()
    * ```
    */
  get menuItems(): Prisma.MenuItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tables`: Exposes CRUD operations for the **Tables** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.tables.findMany()
    * ```
    */
  get tables(): Prisma.TablesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderSeats`: Exposes CRUD operations for the **OrderSeats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderSeats
    * const orderSeats = await prisma.orderSeats.findMany()
    * ```
    */
  get orderSeats(): Prisma.OrderSeatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItems`: Exposes CRUD operations for the **OrderItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItems.findMany()
    * ```
    */
  get orderItems(): Prisma.OrderItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentDetails`: Exposes CRUD operations for the **PaymentDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentDetails
    * const paymentDetails = await prisma.paymentDetails.findMany()
    * ```
    */
  get paymentDetails(): Prisma.PaymentDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryItems`: Exposes CRUD operations for the **InventoryItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItems.findMany()
    * ```
    */
  get inventoryItems(): Prisma.InventoryItemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryTransactions`: Exposes CRUD operations for the **InventoryTransactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryTransactions
    * const inventoryTransactions = await prisma.inventoryTransactions.findMany()
    * ```
    */
  get inventoryTransactions(): Prisma.InventoryTransactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservations`: Exposes CRUD operations for the **Reservations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservations.findMany()
    * ```
    */
  get reservations(): Prisma.ReservationsDelegate<ExtArgs, ClientOptions>;
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
    Courses: 'Courses',
    Categories: 'Categories',
    MenuItems: 'MenuItems',
    Tables: 'Tables',
    Users: 'Users',
    Orders: 'Orders',
    OrderSeats: 'OrderSeats',
    OrderItems: 'OrderItems',
    Payments: 'Payments',
    PaymentDetails: 'PaymentDetails',
    InventoryItems: 'InventoryItems',
    InventoryTransactions: 'InventoryTransactions',
    Reservations: 'Reservations'
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
      modelProps: "courses" | "categories" | "menuItems" | "tables" | "users" | "orders" | "orderSeats" | "orderItems" | "payments" | "paymentDetails" | "inventoryItems" | "inventoryTransactions" | "reservations"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Courses: {
        payload: Prisma.$CoursesPayload<ExtArgs>
        fields: Prisma.CoursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findFirst: {
            args: Prisma.CoursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findMany: {
            args: Prisma.CoursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          create: {
            args: Prisma.CoursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          createMany: {
            args: Prisma.CoursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CoursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          update: {
            args: Prisma.CoursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          deleteMany: {
            args: Prisma.CoursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.CoursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      MenuItems: {
        payload: Prisma.$MenuItemsPayload<ExtArgs>
        fields: Prisma.MenuItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          findFirst: {
            args: Prisma.MenuItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          findMany: {
            args: Prisma.MenuItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>[]
          }
          create: {
            args: Prisma.MenuItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          createMany: {
            args: Prisma.MenuItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MenuItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          update: {
            args: Prisma.MenuItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemsPayload>
          }
          aggregate: {
            args: Prisma.MenuItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItems>
          }
          groupBy: {
            args: Prisma.MenuItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemsCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemsCountAggregateOutputType> | number
          }
        }
      }
      Tables: {
        payload: Prisma.$TablesPayload<ExtArgs>
        fields: Prisma.TablesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TablesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TablesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablesPayload>
          }
          findFirst: {
            args: Prisma.TablesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TablesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablesPayload>
          }
          findMany: {
            args: Prisma.TablesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablesPayload>[]
          }
          create: {
            args: Prisma.TablesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablesPayload>
          }
          createMany: {
            args: Prisma.TablesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TablesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablesPayload>
          }
          update: {
            args: Prisma.TablesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablesPayload>
          }
          deleteMany: {
            args: Prisma.TablesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TablesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TablesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablesPayload>
          }
          aggregate: {
            args: Prisma.TablesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTables>
          }
          groupBy: {
            args: Prisma.TablesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TablesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TablesCountArgs<ExtArgs>
            result: $Utils.Optional<TablesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderSeats: {
        payload: Prisma.$OrderSeatsPayload<ExtArgs>
        fields: Prisma.OrderSeatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderSeatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSeatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderSeatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSeatsPayload>
          }
          findFirst: {
            args: Prisma.OrderSeatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSeatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderSeatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSeatsPayload>
          }
          findMany: {
            args: Prisma.OrderSeatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSeatsPayload>[]
          }
          create: {
            args: Prisma.OrderSeatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSeatsPayload>
          }
          createMany: {
            args: Prisma.OrderSeatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderSeatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSeatsPayload>
          }
          update: {
            args: Prisma.OrderSeatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSeatsPayload>
          }
          deleteMany: {
            args: Prisma.OrderSeatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderSeatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderSeatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSeatsPayload>
          }
          aggregate: {
            args: Prisma.OrderSeatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderSeats>
          }
          groupBy: {
            args: Prisma.OrderSeatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderSeatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderSeatsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderSeatsCountAggregateOutputType> | number
          }
        }
      }
      OrderItems: {
        payload: Prisma.$OrderItemsPayload<ExtArgs>
        fields: Prisma.OrderItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findFirst: {
            args: Prisma.OrderItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          findMany: {
            args: Prisma.OrderItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>[]
          }
          create: {
            args: Prisma.OrderItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          createMany: {
            args: Prisma.OrderItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          update: {
            args: Prisma.OrderItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemsPayload>
          }
          aggregate: {
            args: Prisma.OrderItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItems>
          }
          groupBy: {
            args: Prisma.OrderItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemsCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemsCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      PaymentDetails: {
        payload: Prisma.$PaymentDetailsPayload<ExtArgs>
        fields: Prisma.PaymentDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          findFirst: {
            args: Prisma.PaymentDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          findMany: {
            args: Prisma.PaymentDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>[]
          }
          create: {
            args: Prisma.PaymentDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          createMany: {
            args: Prisma.PaymentDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          update: {
            args: Prisma.PaymentDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          aggregate: {
            args: Prisma.PaymentDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentDetails>
          }
          groupBy: {
            args: Prisma.PaymentDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentDetailsCountAggregateOutputType> | number
          }
        }
      }
      InventoryItems: {
        payload: Prisma.$InventoryItemsPayload<ExtArgs>
        fields: Prisma.InventoryItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemsPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemsPayload>
          }
          findMany: {
            args: Prisma.InventoryItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemsPayload>[]
          }
          create: {
            args: Prisma.InventoryItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemsPayload>
          }
          createMany: {
            args: Prisma.InventoryItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemsPayload>
          }
          update: {
            args: Prisma.InventoryItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemsPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemsPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItems>
          }
          groupBy: {
            args: Prisma.InventoryItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemsCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemsCountAggregateOutputType> | number
          }
        }
      }
      InventoryTransactions: {
        payload: Prisma.$InventoryTransactionsPayload<ExtArgs>
        fields: Prisma.InventoryTransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryTransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryTransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionsPayload>
          }
          findFirst: {
            args: Prisma.InventoryTransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryTransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionsPayload>
          }
          findMany: {
            args: Prisma.InventoryTransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionsPayload>[]
          }
          create: {
            args: Prisma.InventoryTransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionsPayload>
          }
          createMany: {
            args: Prisma.InventoryTransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryTransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionsPayload>
          }
          update: {
            args: Prisma.InventoryTransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionsPayload>
          }
          deleteMany: {
            args: Prisma.InventoryTransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryTransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryTransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionsPayload>
          }
          aggregate: {
            args: Prisma.InventoryTransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryTransactions>
          }
          groupBy: {
            args: Prisma.InventoryTransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryTransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransactionsCountAggregateOutputType> | number
          }
        }
      }
      Reservations: {
        payload: Prisma.$ReservationsPayload<ExtArgs>
        fields: Prisma.ReservationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          findFirst: {
            args: Prisma.ReservationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          findMany: {
            args: Prisma.ReservationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>[]
          }
          create: {
            args: Prisma.ReservationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          createMany: {
            args: Prisma.ReservationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          update: {
            args: Prisma.ReservationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          deleteMany: {
            args: Prisma.ReservationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          aggregate: {
            args: Prisma.ReservationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservations>
          }
          groupBy: {
            args: Prisma.ReservationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationsCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationsCountAggregateOutputType> | number
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
    courses?: CoursesOmit
    categories?: CategoriesOmit
    menuItems?: MenuItemsOmit
    tables?: TablesOmit
    users?: UsersOmit
    orders?: OrdersOmit
    orderSeats?: OrderSeatsOmit
    orderItems?: OrderItemsOmit
    payments?: PaymentsOmit
    paymentDetails?: PaymentDetailsOmit
    inventoryItems?: InventoryItemsOmit
    inventoryTransactions?: InventoryTransactionsOmit
    reservations?: ReservationsOmit
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
   * Count Type CoursesCountOutputType
   */

  export type CoursesCountOutputType = {
    orderItems: number
  }

  export type CoursesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | CoursesCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursesCountOutputType
     */
    select?: CoursesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoursesCountOutputType without action
   */
  export type CoursesCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    menuItems: number
    inventoryItems: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItems?: boolean | CategoriesCountOutputTypeCountMenuItemsArgs
    inventoryItems?: boolean | CategoriesCountOutputTypeCountInventoryItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemsWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountInventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemsWhereInput
  }


  /**
   * Count Type MenuItemsCountOutputType
   */

  export type MenuItemsCountOutputType = {
    orderItems: number
  }

  export type MenuItemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | MenuItemsCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * MenuItemsCountOutputType without action
   */
  export type MenuItemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemsCountOutputType
     */
    select?: MenuItemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemsCountOutputType without action
   */
  export type MenuItemsCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }


  /**
   * Count Type TablesCountOutputType
   */

  export type TablesCountOutputType = {
    orders: number
    reservations: number
  }

  export type TablesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | TablesCountOutputTypeCountOrdersArgs
    reservations?: boolean | TablesCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * TablesCountOutputType without action
   */
  export type TablesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablesCountOutputType
     */
    select?: TablesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TablesCountOutputType without action
   */
  export type TablesCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * TablesCountOutputType without action
   */
  export type TablesCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    orders: number
    inventoryTransactions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    inventoryTransactions?: boolean | UsersCountOutputTypeCountInventoryTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    orderSeats: number
    orderItems: number
    payments: number
    inventoryTransactions: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderSeats?: boolean | OrdersCountOutputTypeCountOrderSeatsArgs
    orderItems?: boolean | OrdersCountOutputTypeCountOrderItemsArgs
    payments?: boolean | OrdersCountOutputTypeCountPaymentsArgs
    inventoryTransactions?: boolean | OrdersCountOutputTypeCountInventoryTransactionsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderSeatsWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountInventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionsWhereInput
  }


  /**
   * Count Type OrderSeatsCountOutputType
   */

  export type OrderSeatsCountOutputType = {
    orderItems: number
    paymentDetails: number
  }

  export type OrderSeatsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderSeatsCountOutputTypeCountOrderItemsArgs
    paymentDetails?: boolean | OrderSeatsCountOutputTypeCountPaymentDetailsArgs
  }

  // Custom InputTypes
  /**
   * OrderSeatsCountOutputType without action
   */
  export type OrderSeatsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeatsCountOutputType
     */
    select?: OrderSeatsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderSeatsCountOutputType without action
   */
  export type OrderSeatsCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
  }

  /**
   * OrderSeatsCountOutputType without action
   */
  export type OrderSeatsCountOutputTypeCountPaymentDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailsWhereInput
  }


  /**
   * Count Type PaymentsCountOutputType
   */

  export type PaymentsCountOutputType = {
    paymentDetails: number
  }

  export type PaymentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentDetails?: boolean | PaymentsCountOutputTypeCountPaymentDetailsArgs
  }

  // Custom InputTypes
  /**
   * PaymentsCountOutputType without action
   */
  export type PaymentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsCountOutputType
     */
    select?: PaymentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentsCountOutputType without action
   */
  export type PaymentsCountOutputTypeCountPaymentDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailsWhereInput
  }


  /**
   * Count Type InventoryItemsCountOutputType
   */

  export type InventoryItemsCountOutputType = {
    inventoryTransactions: number
  }

  export type InventoryItemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryTransactions?: boolean | InventoryItemsCountOutputTypeCountInventoryTransactionsArgs
  }

  // Custom InputTypes
  /**
   * InventoryItemsCountOutputType without action
   */
  export type InventoryItemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItemsCountOutputType
     */
    select?: InventoryItemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryItemsCountOutputType without action
   */
  export type InventoryItemsCountOutputTypeCountInventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type CoursesSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type CoursesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoursesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoursesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoursesAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type CoursesSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type CoursesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoursesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoursesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to aggregate.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursesWhereUniqueInput
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
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type CoursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursesWhereInput
    orderBy?: CoursesOrderByWithAggregationInput | CoursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: CoursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _avg?: CoursesAvgAggregateInputType
    _sum?: CoursesSumAggregateInputType
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    id: number
    name: string
    description: string | null
    price: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CoursesCountAggregateOutputType | null
    _avg: CoursesAvgAggregateOutputType | null
    _sum: CoursesSumAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends CoursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type CoursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderItems?: boolean | Courses$orderItemsArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>



  export type CoursesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoursesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["courses"]>
  export type CoursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | Courses$orderItemsArgs<ExtArgs>
    _count?: boolean | CoursesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courses"
    objects: {
      orderItems: Prisma.$OrderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      price: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type CoursesGetPayload<S extends boolean | null | undefined | CoursesDefaultArgs> = $Result.GetResult<Prisma.$CoursesPayload, S>

  type CoursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface CoursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courses'], meta: { name: 'Courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {CoursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursesFindUniqueArgs>(args: SelectSubset<T, CoursesFindUniqueArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursesFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursesFindFirstArgs>(args?: SelectSubset<T, CoursesFindFirstArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursesFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursesWithIdOnly = await prisma.courses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursesFindManyArgs>(args?: SelectSubset<T, CoursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courses.
     * @param {CoursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends CoursesCreateArgs>(args: SelectSubset<T, CoursesCreateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CoursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursesCreateManyArgs>(args?: SelectSubset<T, CoursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Courses.
     * @param {CoursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends CoursesDeleteArgs>(args: SelectSubset<T, CoursesDeleteArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courses.
     * @param {CoursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursesUpdateArgs>(args: SelectSubset<T, CoursesUpdateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CoursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursesDeleteManyArgs>(args?: SelectSubset<T, CoursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursesUpdateManyArgs>(args: SelectSubset<T, CoursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Courses.
     * @param {CoursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends CoursesUpsertArgs>(args: SelectSubset<T, CoursesUpsertArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CoursesCountArgs>(
      args?: Subset<T, CoursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesGroupByArgs} args - Group by arguments.
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
      T extends CoursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursesGroupByArgs['orderBy'] }
        : { orderBy?: CoursesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courses model
   */
  readonly fields: CoursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItems<T extends Courses$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Courses$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Courses model
   */
  interface CoursesFieldRefs {
    readonly id: FieldRef<"Courses", 'Int'>
    readonly name: FieldRef<"Courses", 'String'>
    readonly description: FieldRef<"Courses", 'String'>
    readonly price: FieldRef<"Courses", 'Float'>
    readonly isActive: FieldRef<"Courses", 'Boolean'>
    readonly createdAt: FieldRef<"Courses", 'DateTime'>
    readonly updatedAt: FieldRef<"Courses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Courses findUnique
   */
  export type CoursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findUniqueOrThrow
   */
  export type CoursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findFirst
   */
  export type CoursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
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
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findFirstOrThrow
   */
  export type CoursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
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
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findMany
   */
  export type CoursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CoursesWhereUniqueInput
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
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses create
   */
  export type CoursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to create a Courses.
     */
    data: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
  }

  /**
   * Courses createMany
   */
  export type CoursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courses update
   */
  export type CoursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to update a Courses.
     */
    data: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
    /**
     * Choose, which Courses to update.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses updateMany
   */
  export type CoursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Courses upsert
   */
  export type CoursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The filter to search for the Courses to update in case it exists.
     */
    where: CoursesWhereUniqueInput
    /**
     * In case the Courses found by the `where` argument doesn't exist, create a new Courses with this data.
     */
    create: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
    /**
     * In case the Courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
  }

  /**
   * Courses delete
   */
  export type CoursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter which Courses to delete.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses deleteMany
   */
  export type CoursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Courses.orderItems
   */
  export type Courses$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * Courses without action
   */
  export type CoursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
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
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menuItems?: boolean | Categories$menuItemsArgs<ExtArgs>
    inventoryItems?: boolean | Categories$inventoryItemsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>



  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItems?: boolean | Categories$menuItemsArgs<ExtArgs>
    inventoryItems?: boolean | Categories$inventoryItemsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      menuItems: Prisma.$MenuItemsPayload<ExtArgs>[]
      inventoryItems: Prisma.$InventoryItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuItems<T extends Categories$menuItemsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$menuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryItems<T extends Categories$inventoryItemsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$inventoryItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly description: FieldRef<"Categories", 'String'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly updatedAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
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
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
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
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
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
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.menuItems
   */
  export type Categories$menuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemsInclude<ExtArgs> | null
    where?: MenuItemsWhereInput
    orderBy?: MenuItemsOrderByWithRelationInput | MenuItemsOrderByWithRelationInput[]
    cursor?: MenuItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemsScalarFieldEnum | MenuItemsScalarFieldEnum[]
  }

  /**
   * Categories.inventoryItems
   */
  export type Categories$inventoryItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItems
     */
    select?: InventoryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItems
     */
    omit?: InventoryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemsInclude<ExtArgs> | null
    where?: InventoryItemsWhereInput
    orderBy?: InventoryItemsOrderByWithRelationInput | InventoryItemsOrderByWithRelationInput[]
    cursor?: InventoryItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemsScalarFieldEnum | InventoryItemsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model MenuItems
   */

  export type AggregateMenuItems = {
    _count: MenuItemsCountAggregateOutputType | null
    _avg: MenuItemsAvgAggregateOutputType | null
    _sum: MenuItemsSumAggregateOutputType | null
    _min: MenuItemsMinAggregateOutputType | null
    _max: MenuItemsMaxAggregateOutputType | null
  }

  export type MenuItemsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
    stockQuantity: number | null
  }

  export type MenuItemsSumAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
    stockQuantity: number | null
  }

  export type MenuItemsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    categoryId: number | null
    isCourseItem: boolean | null
    isExtraItem: boolean | null
    stockQuantity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    categoryId: number | null
    isCourseItem: boolean | null
    isExtraItem: boolean | null
    stockQuantity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    categoryId: number
    isCourseItem: number
    isExtraItem: number
    stockQuantity: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuItemsAvgAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
    stockQuantity?: true
  }

  export type MenuItemsSumAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
    stockQuantity?: true
  }

  export type MenuItemsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryId?: true
    isCourseItem?: true
    isExtraItem?: true
    stockQuantity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryId?: true
    isCourseItem?: true
    isExtraItem?: true
    stockQuantity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryId?: true
    isCourseItem?: true
    isExtraItem?: true
    stockQuantity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to aggregate.
     */
    where?: MenuItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemsOrderByWithRelationInput | MenuItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemsWhereUniqueInput
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
    _count?: true | MenuItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemsMaxAggregateInputType
  }

  export type GetMenuItemsAggregateType<T extends MenuItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItems[P]>
      : GetScalarType<T[P], AggregateMenuItems[P]>
  }




  export type MenuItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemsWhereInput
    orderBy?: MenuItemsOrderByWithAggregationInput | MenuItemsOrderByWithAggregationInput[]
    by: MenuItemsScalarFieldEnum[] | MenuItemsScalarFieldEnum
    having?: MenuItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemsCountAggregateInputType | true
    _avg?: MenuItemsAvgAggregateInputType
    _sum?: MenuItemsSumAggregateInputType
    _min?: MenuItemsMinAggregateInputType
    _max?: MenuItemsMaxAggregateInputType
  }

  export type MenuItemsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    price: number
    categoryId: number
    isCourseItem: boolean
    isExtraItem: boolean
    stockQuantity: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MenuItemsCountAggregateOutputType | null
    _avg: MenuItemsAvgAggregateOutputType | null
    _sum: MenuItemsSumAggregateOutputType | null
    _min: MenuItemsMinAggregateOutputType | null
    _max: MenuItemsMaxAggregateOutputType | null
  }

  type GetMenuItemsGroupByPayload<T extends MenuItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemsGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemsGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    isCourseItem?: boolean
    isExtraItem?: boolean
    stockQuantity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItems$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuItemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItems"]>



  export type MenuItemsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    isCourseItem?: boolean
    isExtraItem?: boolean
    stockQuantity?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "categoryId" | "isCourseItem" | "isExtraItem" | "stockQuantity" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["menuItems"]>
  export type MenuItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItems$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuItemsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MenuItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItems"
    objects: {
      category: Prisma.$CategoriesPayload<ExtArgs>
      orderItems: Prisma.$OrderItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      price: number
      categoryId: number
      isCourseItem: boolean
      isExtraItem: boolean
      stockQuantity: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuItems"]>
    composites: {}
  }

  type MenuItemsGetPayload<S extends boolean | null | undefined | MenuItemsDefaultArgs> = $Result.GetResult<Prisma.$MenuItemsPayload, S>

  type MenuItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemsCountAggregateInputType | true
    }

  export interface MenuItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItems'], meta: { name: 'MenuItems' } }
    /**
     * Find zero or one MenuItems that matches the filter.
     * @param {MenuItemsFindUniqueArgs} args - Arguments to find a MenuItems
     * @example
     * // Get one MenuItems
     * const menuItems = await prisma.menuItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemsFindUniqueArgs>(args: SelectSubset<T, MenuItemsFindUniqueArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemsFindUniqueOrThrowArgs} args - Arguments to find a MenuItems
     * @example
     * // Get one MenuItems
     * const menuItems = await prisma.menuItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsFindFirstArgs} args - Arguments to find a MenuItems
     * @example
     * // Get one MenuItems
     * const menuItems = await prisma.menuItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemsFindFirstArgs>(args?: SelectSubset<T, MenuItemsFindFirstArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsFindFirstOrThrowArgs} args - Arguments to find a MenuItems
     * @example
     * // Get one MenuItems
     * const menuItems = await prisma.menuItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItems.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemsWithIdOnly = await prisma.menuItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemsFindManyArgs>(args?: SelectSubset<T, MenuItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItems.
     * @param {MenuItemsCreateArgs} args - Arguments to create a MenuItems.
     * @example
     * // Create one MenuItems
     * const MenuItems = await prisma.menuItems.create({
     *   data: {
     *     // ... data to create a MenuItems
     *   }
     * })
     * 
     */
    create<T extends MenuItemsCreateArgs>(args: SelectSubset<T, MenuItemsCreateArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemsCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItems = await prisma.menuItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemsCreateManyArgs>(args?: SelectSubset<T, MenuItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MenuItems.
     * @param {MenuItemsDeleteArgs} args - Arguments to delete one MenuItems.
     * @example
     * // Delete one MenuItems
     * const MenuItems = await prisma.menuItems.delete({
     *   where: {
     *     // ... filter to delete one MenuItems
     *   }
     * })
     * 
     */
    delete<T extends MenuItemsDeleteArgs>(args: SelectSubset<T, MenuItemsDeleteArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItems.
     * @param {MenuItemsUpdateArgs} args - Arguments to update one MenuItems.
     * @example
     * // Update one MenuItems
     * const menuItems = await prisma.menuItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemsUpdateArgs>(args: SelectSubset<T, MenuItemsUpdateArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemsDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemsDeleteManyArgs>(args?: SelectSubset<T, MenuItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItems = await prisma.menuItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemsUpdateManyArgs>(args: SelectSubset<T, MenuItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuItems.
     * @param {MenuItemsUpsertArgs} args - Arguments to update or create a MenuItems.
     * @example
     * // Update or create a MenuItems
     * const menuItems = await prisma.menuItems.upsert({
     *   create: {
     *     // ... data to create a MenuItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItems we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemsUpsertArgs>(args: SelectSubset<T, MenuItemsUpsertArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItems.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemsCountArgs>(
      args?: Subset<T, MenuItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemsAggregateArgs>(args: Subset<T, MenuItemsAggregateArgs>): Prisma.PrismaPromise<GetMenuItemsAggregateType<T>>

    /**
     * Group by MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemsGroupByArgs} args - Group by arguments.
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
      T extends MenuItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemsGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItems model
   */
  readonly fields: MenuItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends MenuItems$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItems$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MenuItems model
   */
  interface MenuItemsFieldRefs {
    readonly id: FieldRef<"MenuItems", 'Int'>
    readonly name: FieldRef<"MenuItems", 'String'>
    readonly description: FieldRef<"MenuItems", 'String'>
    readonly price: FieldRef<"MenuItems", 'Float'>
    readonly categoryId: FieldRef<"MenuItems", 'Int'>
    readonly isCourseItem: FieldRef<"MenuItems", 'Boolean'>
    readonly isExtraItem: FieldRef<"MenuItems", 'Boolean'>
    readonly stockQuantity: FieldRef<"MenuItems", 'Int'>
    readonly isActive: FieldRef<"MenuItems", 'Boolean'>
    readonly createdAt: FieldRef<"MenuItems", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuItems findUnique
   */
  export type MenuItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemsInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where: MenuItemsWhereUniqueInput
  }

  /**
   * MenuItems findUniqueOrThrow
   */
  export type MenuItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemsInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where: MenuItemsWhereUniqueInput
  }

  /**
   * MenuItems findFirst
   */
  export type MenuItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemsInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemsOrderByWithRelationInput | MenuItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemsWhereUniqueInput
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
    distinct?: MenuItemsScalarFieldEnum | MenuItemsScalarFieldEnum[]
  }

  /**
   * MenuItems findFirstOrThrow
   */
  export type MenuItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemsInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemsOrderByWithRelationInput | MenuItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemsWhereUniqueInput
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
    distinct?: MenuItemsScalarFieldEnum | MenuItemsScalarFieldEnum[]
  }

  /**
   * MenuItems findMany
   */
  export type MenuItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemsInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemsOrderByWithRelationInput | MenuItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemsWhereUniqueInput
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
    distinct?: MenuItemsScalarFieldEnum | MenuItemsScalarFieldEnum[]
  }

  /**
   * MenuItems create
   */
  export type MenuItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItems.
     */
    data: XOR<MenuItemsCreateInput, MenuItemsUncheckedCreateInput>
  }

  /**
   * MenuItems createMany
   */
  export type MenuItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemsCreateManyInput | MenuItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItems update
   */
  export type MenuItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItems.
     */
    data: XOR<MenuItemsUpdateInput, MenuItemsUncheckedUpdateInput>
    /**
     * Choose, which MenuItems to update.
     */
    where: MenuItemsWhereUniqueInput
  }

  /**
   * MenuItems updateMany
   */
  export type MenuItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemsUpdateManyMutationInput, MenuItemsUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemsWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItems upsert
   */
  export type MenuItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItems to update in case it exists.
     */
    where: MenuItemsWhereUniqueInput
    /**
     * In case the MenuItems found by the `where` argument doesn't exist, create a new MenuItems with this data.
     */
    create: XOR<MenuItemsCreateInput, MenuItemsUncheckedCreateInput>
    /**
     * In case the MenuItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemsUpdateInput, MenuItemsUncheckedUpdateInput>
  }

  /**
   * MenuItems delete
   */
  export type MenuItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemsInclude<ExtArgs> | null
    /**
     * Filter which MenuItems to delete.
     */
    where: MenuItemsWhereUniqueInput
  }

  /**
   * MenuItems deleteMany
   */
  export type MenuItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemsWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItems.orderItems
   */
  export type MenuItems$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * MenuItems without action
   */
  export type MenuItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItems
     */
    select?: MenuItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItems
     */
    omit?: MenuItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemsInclude<ExtArgs> | null
  }


  /**
   * Model Tables
   */

  export type AggregateTables = {
    _count: TablesCountAggregateOutputType | null
    _avg: TablesAvgAggregateOutputType | null
    _sum: TablesSumAggregateOutputType | null
    _min: TablesMinAggregateOutputType | null
    _max: TablesMaxAggregateOutputType | null
  }

  export type TablesAvgAggregateOutputType = {
    id: number | null
    tableNumber: number | null
    capacity: number | null
  }

  export type TablesSumAggregateOutputType = {
    id: number | null
    tableNumber: number | null
    capacity: number | null
  }

  export type TablesMinAggregateOutputType = {
    id: number | null
    tableNumber: number | null
    capacity: number | null
    status: $Enums.TableStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TablesMaxAggregateOutputType = {
    id: number | null
    tableNumber: number | null
    capacity: number | null
    status: $Enums.TableStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TablesCountAggregateOutputType = {
    id: number
    tableNumber: number
    capacity: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TablesAvgAggregateInputType = {
    id?: true
    tableNumber?: true
    capacity?: true
  }

  export type TablesSumAggregateInputType = {
    id?: true
    tableNumber?: true
    capacity?: true
  }

  export type TablesMinAggregateInputType = {
    id?: true
    tableNumber?: true
    capacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TablesMaxAggregateInputType = {
    id?: true
    tableNumber?: true
    capacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TablesCountAggregateInputType = {
    id?: true
    tableNumber?: true
    capacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TablesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to aggregate.
     */
    where?: TablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TablesOrderByWithRelationInput | TablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TablesWhereUniqueInput
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
    _count?: true | TablesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TablesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TablesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TablesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TablesMaxAggregateInputType
  }

  export type GetTablesAggregateType<T extends TablesAggregateArgs> = {
        [P in keyof T & keyof AggregateTables]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTables[P]>
      : GetScalarType<T[P], AggregateTables[P]>
  }




  export type TablesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TablesWhereInput
    orderBy?: TablesOrderByWithAggregationInput | TablesOrderByWithAggregationInput[]
    by: TablesScalarFieldEnum[] | TablesScalarFieldEnum
    having?: TablesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TablesCountAggregateInputType | true
    _avg?: TablesAvgAggregateInputType
    _sum?: TablesSumAggregateInputType
    _min?: TablesMinAggregateInputType
    _max?: TablesMaxAggregateInputType
  }

  export type TablesGroupByOutputType = {
    id: number
    tableNumber: number
    capacity: number
    status: $Enums.TableStatus
    createdAt: Date
    updatedAt: Date
    _count: TablesCountAggregateOutputType | null
    _avg: TablesAvgAggregateOutputType | null
    _sum: TablesSumAggregateOutputType | null
    _min: TablesMinAggregateOutputType | null
    _max: TablesMaxAggregateOutputType | null
  }

  type GetTablesGroupByPayload<T extends TablesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TablesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TablesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TablesGroupByOutputType[P]>
            : GetScalarType<T[P], TablesGroupByOutputType[P]>
        }
      >
    >


  export type TablesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableNumber?: boolean
    capacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Tables$ordersArgs<ExtArgs>
    reservations?: boolean | Tables$reservationsArgs<ExtArgs>
    _count?: boolean | TablesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tables"]>



  export type TablesSelectScalar = {
    id?: boolean
    tableNumber?: boolean
    capacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TablesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableNumber" | "capacity" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["tables"]>
  export type TablesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Tables$ordersArgs<ExtArgs>
    reservations?: boolean | Tables$reservationsArgs<ExtArgs>
    _count?: boolean | TablesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TablesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tables"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      reservations: Prisma.$ReservationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tableNumber: number
      capacity: number
      status: $Enums.TableStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tables"]>
    composites: {}
  }

  type TablesGetPayload<S extends boolean | null | undefined | TablesDefaultArgs> = $Result.GetResult<Prisma.$TablesPayload, S>

  type TablesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TablesCountAggregateInputType | true
    }

  export interface TablesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tables'], meta: { name: 'Tables' } }
    /**
     * Find zero or one Tables that matches the filter.
     * @param {TablesFindUniqueArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TablesFindUniqueArgs>(args: SelectSubset<T, TablesFindUniqueArgs<ExtArgs>>): Prisma__TablesClient<$Result.GetResult<Prisma.$TablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tables that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TablesFindUniqueOrThrowArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TablesFindUniqueOrThrowArgs>(args: SelectSubset<T, TablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TablesClient<$Result.GetResult<Prisma.$TablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesFindFirstArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TablesFindFirstArgs>(args?: SelectSubset<T, TablesFindFirstArgs<ExtArgs>>): Prisma__TablesClient<$Result.GetResult<Prisma.$TablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tables that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesFindFirstOrThrowArgs} args - Arguments to find a Tables
     * @example
     * // Get one Tables
     * const tables = await prisma.tables.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TablesFindFirstOrThrowArgs>(args?: SelectSubset<T, TablesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TablesClient<$Result.GetResult<Prisma.$TablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.tables.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.tables.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tablesWithIdOnly = await prisma.tables.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TablesFindManyArgs>(args?: SelectSubset<T, TablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tables.
     * @param {TablesCreateArgs} args - Arguments to create a Tables.
     * @example
     * // Create one Tables
     * const Tables = await prisma.tables.create({
     *   data: {
     *     // ... data to create a Tables
     *   }
     * })
     * 
     */
    create<T extends TablesCreateArgs>(args: SelectSubset<T, TablesCreateArgs<ExtArgs>>): Prisma__TablesClient<$Result.GetResult<Prisma.$TablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {TablesCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const tables = await prisma.tables.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TablesCreateManyArgs>(args?: SelectSubset<T, TablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tables.
     * @param {TablesDeleteArgs} args - Arguments to delete one Tables.
     * @example
     * // Delete one Tables
     * const Tables = await prisma.tables.delete({
     *   where: {
     *     // ... filter to delete one Tables
     *   }
     * })
     * 
     */
    delete<T extends TablesDeleteArgs>(args: SelectSubset<T, TablesDeleteArgs<ExtArgs>>): Prisma__TablesClient<$Result.GetResult<Prisma.$TablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tables.
     * @param {TablesUpdateArgs} args - Arguments to update one Tables.
     * @example
     * // Update one Tables
     * const tables = await prisma.tables.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TablesUpdateArgs>(args: SelectSubset<T, TablesUpdateArgs<ExtArgs>>): Prisma__TablesClient<$Result.GetResult<Prisma.$TablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {TablesDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.tables.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TablesDeleteManyArgs>(args?: SelectSubset<T, TablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const tables = await prisma.tables.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TablesUpdateManyArgs>(args: SelectSubset<T, TablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tables.
     * @param {TablesUpsertArgs} args - Arguments to update or create a Tables.
     * @example
     * // Update or create a Tables
     * const tables = await prisma.tables.upsert({
     *   create: {
     *     // ... data to create a Tables
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tables we want to update
     *   }
     * })
     */
    upsert<T extends TablesUpsertArgs>(args: SelectSubset<T, TablesUpsertArgs<ExtArgs>>): Prisma__TablesClient<$Result.GetResult<Prisma.$TablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.tables.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TablesCountArgs>(
      args?: Subset<T, TablesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TablesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TablesAggregateArgs>(args: Subset<T, TablesAggregateArgs>): Prisma.PrismaPromise<GetTablesAggregateType<T>>

    /**
     * Group by Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablesGroupByArgs} args - Group by arguments.
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
      T extends TablesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TablesGroupByArgs['orderBy'] }
        : { orderBy?: TablesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tables model
   */
  readonly fields: TablesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tables.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TablesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Tables$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Tables$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Tables$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Tables$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tables model
   */
  interface TablesFieldRefs {
    readonly id: FieldRef<"Tables", 'Int'>
    readonly tableNumber: FieldRef<"Tables", 'Int'>
    readonly capacity: FieldRef<"Tables", 'Int'>
    readonly status: FieldRef<"Tables", 'TableStatus'>
    readonly createdAt: FieldRef<"Tables", 'DateTime'>
    readonly updatedAt: FieldRef<"Tables", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tables findUnique
   */
  export type TablesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tables
     */
    select?: TablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tables
     */
    omit?: TablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TablesInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where: TablesWhereUniqueInput
  }

  /**
   * Tables findUniqueOrThrow
   */
  export type TablesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tables
     */
    select?: TablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tables
     */
    omit?: TablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TablesInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where: TablesWhereUniqueInput
  }

  /**
   * Tables findFirst
   */
  export type TablesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tables
     */
    select?: TablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tables
     */
    omit?: TablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TablesInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TablesOrderByWithRelationInput | TablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TablesWhereUniqueInput
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
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * Tables findFirstOrThrow
   */
  export type TablesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tables
     */
    select?: TablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tables
     */
    omit?: TablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TablesInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TablesOrderByWithRelationInput | TablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TablesWhereUniqueInput
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
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * Tables findMany
   */
  export type TablesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tables
     */
    select?: TablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tables
     */
    omit?: TablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TablesInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TablesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TablesOrderByWithRelationInput | TablesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TablesWhereUniqueInput
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
    distinct?: TablesScalarFieldEnum | TablesScalarFieldEnum[]
  }

  /**
   * Tables create
   */
  export type TablesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tables
     */
    select?: TablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tables
     */
    omit?: TablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TablesInclude<ExtArgs> | null
    /**
     * The data needed to create a Tables.
     */
    data: XOR<TablesCreateInput, TablesUncheckedCreateInput>
  }

  /**
   * Tables createMany
   */
  export type TablesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TablesCreateManyInput | TablesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tables update
   */
  export type TablesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tables
     */
    select?: TablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tables
     */
    omit?: TablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TablesInclude<ExtArgs> | null
    /**
     * The data needed to update a Tables.
     */
    data: XOR<TablesUpdateInput, TablesUncheckedUpdateInput>
    /**
     * Choose, which Tables to update.
     */
    where: TablesWhereUniqueInput
  }

  /**
   * Tables updateMany
   */
  export type TablesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TablesUpdateManyMutationInput, TablesUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TablesWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
  }

  /**
   * Tables upsert
   */
  export type TablesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tables
     */
    select?: TablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tables
     */
    omit?: TablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TablesInclude<ExtArgs> | null
    /**
     * The filter to search for the Tables to update in case it exists.
     */
    where: TablesWhereUniqueInput
    /**
     * In case the Tables found by the `where` argument doesn't exist, create a new Tables with this data.
     */
    create: XOR<TablesCreateInput, TablesUncheckedCreateInput>
    /**
     * In case the Tables was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TablesUpdateInput, TablesUncheckedUpdateInput>
  }

  /**
   * Tables delete
   */
  export type TablesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tables
     */
    select?: TablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tables
     */
    omit?: TablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TablesInclude<ExtArgs> | null
    /**
     * Filter which Tables to delete.
     */
    where: TablesWhereUniqueInput
  }

  /**
   * Tables deleteMany
   */
  export type TablesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TablesWhereInput
    /**
     * Limit how many Tables to delete.
     */
    limit?: number
  }

  /**
   * Tables.orders
   */
  export type Tables$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Tables.reservations
   */
  export type Tables$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    where?: ReservationsWhereInput
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    cursor?: ReservationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Tables without action
   */
  export type TablesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tables
     */
    select?: TablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tables
     */
    omit?: TablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TablesInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    name: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Users$ordersArgs<ExtArgs>
    inventoryTransactions?: boolean | Users$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "name" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Users$ordersArgs<ExtArgs>
    inventoryTransactions?: boolean | Users$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      inventoryTransactions: Prisma.$InventoryTransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      name: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryTransactions<T extends Users$inventoryTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$inventoryTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'UserRole'>
    readonly isActive: FieldRef<"Users", 'Boolean'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.orders
   */
  export type Users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users.inventoryTransactions
   */
  export type Users$inventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    where?: InventoryTransactionsWhereInput
    orderBy?: InventoryTransactionsOrderByWithRelationInput | InventoryTransactionsOrderByWithRelationInput[]
    cursor?: InventoryTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryTransactionsScalarFieldEnum | InventoryTransactionsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    tableId: number | null
    serverId: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    tableId: number | null
    serverId: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    tableId: number | null
    serverId: number | null
    orderStatus: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    tableId: number | null
    serverId: number | null
    orderStatus: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    tableId: number
    serverId: number
    orderStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    tableId?: true
    serverId?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    tableId?: true
    serverId?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    tableId?: true
    serverId?: true
    orderStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    tableId?: true
    serverId?: true
    orderStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    tableId?: true
    serverId?: true
    orderStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
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
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    tableId: number
    serverId: number
    orderStatus: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableId?: boolean
    serverId?: boolean
    orderStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | TablesDefaultArgs<ExtArgs>
    server?: boolean | UsersDefaultArgs<ExtArgs>
    orderSeats?: boolean | Orders$orderSeatsArgs<ExtArgs>
    orderItems?: boolean | Orders$orderItemsArgs<ExtArgs>
    payments?: boolean | Orders$paymentsArgs<ExtArgs>
    inventoryTransactions?: boolean | Orders$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type OrdersSelectScalar = {
    id?: boolean
    tableId?: boolean
    serverId?: boolean
    orderStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableId" | "serverId" | "orderStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TablesDefaultArgs<ExtArgs>
    server?: boolean | UsersDefaultArgs<ExtArgs>
    orderSeats?: boolean | Orders$orderSeatsArgs<ExtArgs>
    orderItems?: boolean | Orders$orderItemsArgs<ExtArgs>
    payments?: boolean | Orders$paymentsArgs<ExtArgs>
    inventoryTransactions?: boolean | Orders$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      table: Prisma.$TablesPayload<ExtArgs>
      server: Prisma.$UsersPayload<ExtArgs>
      orderSeats: Prisma.$OrderSeatsPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemsPayload<ExtArgs>[]
      payments: Prisma.$PaymentsPayload<ExtArgs>[]
      inventoryTransactions: Prisma.$InventoryTransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tableId: number
      serverId: number
      orderStatus: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TablesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TablesDefaultArgs<ExtArgs>>): Prisma__TablesClient<$Result.GetResult<Prisma.$TablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    server<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderSeats<T extends Orders$orderSeatsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$orderSeatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends Orders$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Orders$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryTransactions<T extends Orders$inventoryTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$inventoryTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly tableId: FieldRef<"Orders", 'Int'>
    readonly serverId: FieldRef<"Orders", 'Int'>
    readonly orderStatus: FieldRef<"Orders", 'OrderStatus'>
    readonly createdAt: FieldRef<"Orders", 'DateTime'>
    readonly updatedAt: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
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
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
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
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
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
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.orderSeats
   */
  export type Orders$orderSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
    where?: OrderSeatsWhereInput
    orderBy?: OrderSeatsOrderByWithRelationInput | OrderSeatsOrderByWithRelationInput[]
    cursor?: OrderSeatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderSeatsScalarFieldEnum | OrderSeatsScalarFieldEnum[]
  }

  /**
   * Orders.orderItems
   */
  export type Orders$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * Orders.payments
   */
  export type Orders$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Orders.inventoryTransactions
   */
  export type Orders$inventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    where?: InventoryTransactionsWhereInput
    orderBy?: InventoryTransactionsOrderByWithRelationInput | InventoryTransactionsOrderByWithRelationInput[]
    cursor?: InventoryTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryTransactionsScalarFieldEnum | InventoryTransactionsScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderSeats
   */

  export type AggregateOrderSeats = {
    _count: OrderSeatsCountAggregateOutputType | null
    _avg: OrderSeatsAvgAggregateOutputType | null
    _sum: OrderSeatsSumAggregateOutputType | null
    _min: OrderSeatsMinAggregateOutputType | null
    _max: OrderSeatsMaxAggregateOutputType | null
  }

  export type OrderSeatsAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    seatNumber: number | null
  }

  export type OrderSeatsSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    seatNumber: number | null
  }

  export type OrderSeatsMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    seatNumber: number | null
    customerName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderSeatsMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    seatNumber: number | null
    customerName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderSeatsCountAggregateOutputType = {
    id: number
    orderId: number
    seatNumber: number
    customerName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderSeatsAvgAggregateInputType = {
    id?: true
    orderId?: true
    seatNumber?: true
  }

  export type OrderSeatsSumAggregateInputType = {
    id?: true
    orderId?: true
    seatNumber?: true
  }

  export type OrderSeatsMinAggregateInputType = {
    id?: true
    orderId?: true
    seatNumber?: true
    customerName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderSeatsMaxAggregateInputType = {
    id?: true
    orderId?: true
    seatNumber?: true
    customerName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderSeatsCountAggregateInputType = {
    id?: true
    orderId?: true
    seatNumber?: true
    customerName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderSeatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderSeats to aggregate.
     */
    where?: OrderSeatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSeats to fetch.
     */
    orderBy?: OrderSeatsOrderByWithRelationInput | OrderSeatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderSeatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderSeats
    **/
    _count?: true | OrderSeatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderSeatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSeatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderSeatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderSeatsMaxAggregateInputType
  }

  export type GetOrderSeatsAggregateType<T extends OrderSeatsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderSeats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderSeats[P]>
      : GetScalarType<T[P], AggregateOrderSeats[P]>
  }




  export type OrderSeatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderSeatsWhereInput
    orderBy?: OrderSeatsOrderByWithAggregationInput | OrderSeatsOrderByWithAggregationInput[]
    by: OrderSeatsScalarFieldEnum[] | OrderSeatsScalarFieldEnum
    having?: OrderSeatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderSeatsCountAggregateInputType | true
    _avg?: OrderSeatsAvgAggregateInputType
    _sum?: OrderSeatsSumAggregateInputType
    _min?: OrderSeatsMinAggregateInputType
    _max?: OrderSeatsMaxAggregateInputType
  }

  export type OrderSeatsGroupByOutputType = {
    id: number
    orderId: number
    seatNumber: number
    customerName: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderSeatsCountAggregateOutputType | null
    _avg: OrderSeatsAvgAggregateOutputType | null
    _sum: OrderSeatsSumAggregateOutputType | null
    _min: OrderSeatsMinAggregateOutputType | null
    _max: OrderSeatsMaxAggregateOutputType | null
  }

  type GetOrderSeatsGroupByPayload<T extends OrderSeatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderSeatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderSeatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderSeatsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderSeatsGroupByOutputType[P]>
        }
      >
    >


  export type OrderSeatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    seatNumber?: boolean
    customerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    orderItems?: boolean | OrderSeats$orderItemsArgs<ExtArgs>
    paymentDetails?: boolean | OrderSeats$paymentDetailsArgs<ExtArgs>
    _count?: boolean | OrderSeatsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderSeats"]>



  export type OrderSeatsSelectScalar = {
    id?: boolean
    orderId?: boolean
    seatNumber?: boolean
    customerName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderSeatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "seatNumber" | "customerName" | "createdAt" | "updatedAt", ExtArgs["result"]["orderSeats"]>
  export type OrderSeatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    orderItems?: boolean | OrderSeats$orderItemsArgs<ExtArgs>
    paymentDetails?: boolean | OrderSeats$paymentDetailsArgs<ExtArgs>
    _count?: boolean | OrderSeatsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderSeatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderSeats"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
      orderItems: Prisma.$OrderItemsPayload<ExtArgs>[]
      paymentDetails: Prisma.$PaymentDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      seatNumber: number
      customerName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderSeats"]>
    composites: {}
  }

  type OrderSeatsGetPayload<S extends boolean | null | undefined | OrderSeatsDefaultArgs> = $Result.GetResult<Prisma.$OrderSeatsPayload, S>

  type OrderSeatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderSeatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderSeatsCountAggregateInputType | true
    }

  export interface OrderSeatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderSeats'], meta: { name: 'OrderSeats' } }
    /**
     * Find zero or one OrderSeats that matches the filter.
     * @param {OrderSeatsFindUniqueArgs} args - Arguments to find a OrderSeats
     * @example
     * // Get one OrderSeats
     * const orderSeats = await prisma.orderSeats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderSeatsFindUniqueArgs>(args: SelectSubset<T, OrderSeatsFindUniqueArgs<ExtArgs>>): Prisma__OrderSeatsClient<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderSeats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderSeatsFindUniqueOrThrowArgs} args - Arguments to find a OrderSeats
     * @example
     * // Get one OrderSeats
     * const orderSeats = await prisma.orderSeats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderSeatsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderSeatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderSeatsClient<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderSeats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSeatsFindFirstArgs} args - Arguments to find a OrderSeats
     * @example
     * // Get one OrderSeats
     * const orderSeats = await prisma.orderSeats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderSeatsFindFirstArgs>(args?: SelectSubset<T, OrderSeatsFindFirstArgs<ExtArgs>>): Prisma__OrderSeatsClient<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderSeats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSeatsFindFirstOrThrowArgs} args - Arguments to find a OrderSeats
     * @example
     * // Get one OrderSeats
     * const orderSeats = await prisma.orderSeats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderSeatsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderSeatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderSeatsClient<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderSeats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSeatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderSeats
     * const orderSeats = await prisma.orderSeats.findMany()
     * 
     * // Get first 10 OrderSeats
     * const orderSeats = await prisma.orderSeats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderSeatsWithIdOnly = await prisma.orderSeats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderSeatsFindManyArgs>(args?: SelectSubset<T, OrderSeatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderSeats.
     * @param {OrderSeatsCreateArgs} args - Arguments to create a OrderSeats.
     * @example
     * // Create one OrderSeats
     * const OrderSeats = await prisma.orderSeats.create({
     *   data: {
     *     // ... data to create a OrderSeats
     *   }
     * })
     * 
     */
    create<T extends OrderSeatsCreateArgs>(args: SelectSubset<T, OrderSeatsCreateArgs<ExtArgs>>): Prisma__OrderSeatsClient<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderSeats.
     * @param {OrderSeatsCreateManyArgs} args - Arguments to create many OrderSeats.
     * @example
     * // Create many OrderSeats
     * const orderSeats = await prisma.orderSeats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderSeatsCreateManyArgs>(args?: SelectSubset<T, OrderSeatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderSeats.
     * @param {OrderSeatsDeleteArgs} args - Arguments to delete one OrderSeats.
     * @example
     * // Delete one OrderSeats
     * const OrderSeats = await prisma.orderSeats.delete({
     *   where: {
     *     // ... filter to delete one OrderSeats
     *   }
     * })
     * 
     */
    delete<T extends OrderSeatsDeleteArgs>(args: SelectSubset<T, OrderSeatsDeleteArgs<ExtArgs>>): Prisma__OrderSeatsClient<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderSeats.
     * @param {OrderSeatsUpdateArgs} args - Arguments to update one OrderSeats.
     * @example
     * // Update one OrderSeats
     * const orderSeats = await prisma.orderSeats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderSeatsUpdateArgs>(args: SelectSubset<T, OrderSeatsUpdateArgs<ExtArgs>>): Prisma__OrderSeatsClient<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderSeats.
     * @param {OrderSeatsDeleteManyArgs} args - Arguments to filter OrderSeats to delete.
     * @example
     * // Delete a few OrderSeats
     * const { count } = await prisma.orderSeats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderSeatsDeleteManyArgs>(args?: SelectSubset<T, OrderSeatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSeatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderSeats
     * const orderSeats = await prisma.orderSeats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderSeatsUpdateManyArgs>(args: SelectSubset<T, OrderSeatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderSeats.
     * @param {OrderSeatsUpsertArgs} args - Arguments to update or create a OrderSeats.
     * @example
     * // Update or create a OrderSeats
     * const orderSeats = await prisma.orderSeats.upsert({
     *   create: {
     *     // ... data to create a OrderSeats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderSeats we want to update
     *   }
     * })
     */
    upsert<T extends OrderSeatsUpsertArgs>(args: SelectSubset<T, OrderSeatsUpsertArgs<ExtArgs>>): Prisma__OrderSeatsClient<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSeatsCountArgs} args - Arguments to filter OrderSeats to count.
     * @example
     * // Count the number of OrderSeats
     * const count = await prisma.orderSeats.count({
     *   where: {
     *     // ... the filter for the OrderSeats we want to count
     *   }
     * })
    **/
    count<T extends OrderSeatsCountArgs>(
      args?: Subset<T, OrderSeatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderSeatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSeatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderSeatsAggregateArgs>(args: Subset<T, OrderSeatsAggregateArgs>): Prisma.PrismaPromise<GetOrderSeatsAggregateType<T>>

    /**
     * Group by OrderSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSeatsGroupByArgs} args - Group by arguments.
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
      T extends OrderSeatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderSeatsGroupByArgs['orderBy'] }
        : { orderBy?: OrderSeatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderSeatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderSeatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderSeats model
   */
  readonly fields: OrderSeatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderSeats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderSeatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends OrderSeats$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, OrderSeats$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentDetails<T extends OrderSeats$paymentDetailsArgs<ExtArgs> = {}>(args?: Subset<T, OrderSeats$paymentDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OrderSeats model
   */
  interface OrderSeatsFieldRefs {
    readonly id: FieldRef<"OrderSeats", 'Int'>
    readonly orderId: FieldRef<"OrderSeats", 'Int'>
    readonly seatNumber: FieldRef<"OrderSeats", 'Int'>
    readonly customerName: FieldRef<"OrderSeats", 'String'>
    readonly createdAt: FieldRef<"OrderSeats", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderSeats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderSeats findUnique
   */
  export type OrderSeatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
    /**
     * Filter, which OrderSeats to fetch.
     */
    where: OrderSeatsWhereUniqueInput
  }

  /**
   * OrderSeats findUniqueOrThrow
   */
  export type OrderSeatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
    /**
     * Filter, which OrderSeats to fetch.
     */
    where: OrderSeatsWhereUniqueInput
  }

  /**
   * OrderSeats findFirst
   */
  export type OrderSeatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
    /**
     * Filter, which OrderSeats to fetch.
     */
    where?: OrderSeatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSeats to fetch.
     */
    orderBy?: OrderSeatsOrderByWithRelationInput | OrderSeatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderSeats.
     */
    cursor?: OrderSeatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderSeats.
     */
    distinct?: OrderSeatsScalarFieldEnum | OrderSeatsScalarFieldEnum[]
  }

  /**
   * OrderSeats findFirstOrThrow
   */
  export type OrderSeatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
    /**
     * Filter, which OrderSeats to fetch.
     */
    where?: OrderSeatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSeats to fetch.
     */
    orderBy?: OrderSeatsOrderByWithRelationInput | OrderSeatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderSeats.
     */
    cursor?: OrderSeatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderSeats.
     */
    distinct?: OrderSeatsScalarFieldEnum | OrderSeatsScalarFieldEnum[]
  }

  /**
   * OrderSeats findMany
   */
  export type OrderSeatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
    /**
     * Filter, which OrderSeats to fetch.
     */
    where?: OrderSeatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSeats to fetch.
     */
    orderBy?: OrderSeatsOrderByWithRelationInput | OrderSeatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderSeats.
     */
    cursor?: OrderSeatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSeats.
     */
    skip?: number
    distinct?: OrderSeatsScalarFieldEnum | OrderSeatsScalarFieldEnum[]
  }

  /**
   * OrderSeats create
   */
  export type OrderSeatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderSeats.
     */
    data: XOR<OrderSeatsCreateInput, OrderSeatsUncheckedCreateInput>
  }

  /**
   * OrderSeats createMany
   */
  export type OrderSeatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderSeats.
     */
    data: OrderSeatsCreateManyInput | OrderSeatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderSeats update
   */
  export type OrderSeatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderSeats.
     */
    data: XOR<OrderSeatsUpdateInput, OrderSeatsUncheckedUpdateInput>
    /**
     * Choose, which OrderSeats to update.
     */
    where: OrderSeatsWhereUniqueInput
  }

  /**
   * OrderSeats updateMany
   */
  export type OrderSeatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderSeats.
     */
    data: XOR<OrderSeatsUpdateManyMutationInput, OrderSeatsUncheckedUpdateManyInput>
    /**
     * Filter which OrderSeats to update
     */
    where?: OrderSeatsWhereInput
    /**
     * Limit how many OrderSeats to update.
     */
    limit?: number
  }

  /**
   * OrderSeats upsert
   */
  export type OrderSeatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderSeats to update in case it exists.
     */
    where: OrderSeatsWhereUniqueInput
    /**
     * In case the OrderSeats found by the `where` argument doesn't exist, create a new OrderSeats with this data.
     */
    create: XOR<OrderSeatsCreateInput, OrderSeatsUncheckedCreateInput>
    /**
     * In case the OrderSeats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderSeatsUpdateInput, OrderSeatsUncheckedUpdateInput>
  }

  /**
   * OrderSeats delete
   */
  export type OrderSeatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
    /**
     * Filter which OrderSeats to delete.
     */
    where: OrderSeatsWhereUniqueInput
  }

  /**
   * OrderSeats deleteMany
   */
  export type OrderSeatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderSeats to delete
     */
    where?: OrderSeatsWhereInput
    /**
     * Limit how many OrderSeats to delete.
     */
    limit?: number
  }

  /**
   * OrderSeats.orderItems
   */
  export type OrderSeats$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    cursor?: OrderItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderSeats.paymentDetails
   */
  export type OrderSeats$paymentDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    where?: PaymentDetailsWhereInput
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    cursor?: PaymentDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }

  /**
   * OrderSeats without action
   */
  export type OrderSeatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
  }


  /**
   * Model OrderItems
   */

  export type AggregateOrderItems = {
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  export type OrderItemsAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    seatId: number | null
    itemId: number | null
    courseId: number | null
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemsSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    seatId: number | null
    itemId: number | null
    courseId: number | null
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemsMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    seatId: number | null
    itemId: number | null
    courseId: number | null
    quantity: number | null
    unitPrice: number | null
    itemStatus: $Enums.ItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemsMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    seatId: number | null
    itemId: number | null
    courseId: number | null
    quantity: number | null
    unitPrice: number | null
    itemStatus: $Enums.ItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemsCountAggregateOutputType = {
    id: number
    orderId: number
    seatId: number
    itemId: number
    courseId: number
    quantity: number
    unitPrice: number
    itemStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemsAvgAggregateInputType = {
    id?: true
    orderId?: true
    seatId?: true
    itemId?: true
    courseId?: true
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemsSumAggregateInputType = {
    id?: true
    orderId?: true
    seatId?: true
    itemId?: true
    courseId?: true
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemsMinAggregateInputType = {
    id?: true
    orderId?: true
    seatId?: true
    itemId?: true
    courseId?: true
    quantity?: true
    unitPrice?: true
    itemStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemsMaxAggregateInputType = {
    id?: true
    orderId?: true
    seatId?: true
    itemId?: true
    courseId?: true
    quantity?: true
    unitPrice?: true
    itemStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemsCountAggregateInputType = {
    id?: true
    orderId?: true
    seatId?: true
    itemId?: true
    courseId?: true
    quantity?: true
    unitPrice?: true
    itemStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to aggregate.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemsWhereUniqueInput
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
    _count?: true | OrderItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemsMaxAggregateInputType
  }

  export type GetOrderItemsAggregateType<T extends OrderItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItems[P]>
      : GetScalarType<T[P], AggregateOrderItems[P]>
  }




  export type OrderItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemsWhereInput
    orderBy?: OrderItemsOrderByWithAggregationInput | OrderItemsOrderByWithAggregationInput[]
    by: OrderItemsScalarFieldEnum[] | OrderItemsScalarFieldEnum
    having?: OrderItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemsCountAggregateInputType | true
    _avg?: OrderItemsAvgAggregateInputType
    _sum?: OrderItemsSumAggregateInputType
    _min?: OrderItemsMinAggregateInputType
    _max?: OrderItemsMaxAggregateInputType
  }

  export type OrderItemsGroupByOutputType = {
    id: number
    orderId: number
    seatId: number
    itemId: number
    courseId: number | null
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt: Date
    updatedAt: Date
    _count: OrderItemsCountAggregateOutputType | null
    _avg: OrderItemsAvgAggregateOutputType | null
    _sum: OrderItemsSumAggregateOutputType | null
    _min: OrderItemsMinAggregateOutputType | null
    _max: OrderItemsMaxAggregateOutputType | null
  }

  type GetOrderItemsGroupByPayload<T extends OrderItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemsGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    seatId?: boolean
    itemId?: boolean
    courseId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    itemStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    seat?: boolean | OrderSeatsDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemsDefaultArgs<ExtArgs>
    course?: boolean | OrderItems$courseArgs<ExtArgs>
  }, ExtArgs["result"]["orderItems"]>



  export type OrderItemsSelectScalar = {
    id?: boolean
    orderId?: boolean
    seatId?: boolean
    itemId?: boolean
    courseId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    itemStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "seatId" | "itemId" | "courseId" | "quantity" | "unitPrice" | "itemStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["orderItems"]>
  export type OrderItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    seat?: boolean | OrderSeatsDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemsDefaultArgs<ExtArgs>
    course?: boolean | OrderItems$courseArgs<ExtArgs>
  }

  export type $OrderItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItems"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
      seat: Prisma.$OrderSeatsPayload<ExtArgs>
      menuItem: Prisma.$MenuItemsPayload<ExtArgs>
      course: Prisma.$CoursesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      seatId: number
      itemId: number
      courseId: number | null
      quantity: number
      unitPrice: number
      itemStatus: $Enums.ItemStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderItems"]>
    composites: {}
  }

  type OrderItemsGetPayload<S extends boolean | null | undefined | OrderItemsDefaultArgs> = $Result.GetResult<Prisma.$OrderItemsPayload, S>

  type OrderItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemsCountAggregateInputType | true
    }

  export interface OrderItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItems'], meta: { name: 'OrderItems' } }
    /**
     * Find zero or one OrderItems that matches the filter.
     * @param {OrderItemsFindUniqueArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemsFindUniqueArgs>(args: SelectSubset<T, OrderItemsFindUniqueArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemsFindUniqueOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemsFindFirstArgs>(args?: SelectSubset<T, OrderItemsFindFirstArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindFirstOrThrowArgs} args - Arguments to find a OrderItems
     * @example
     * // Get one OrderItems
     * const orderItems = await prisma.orderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItems.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemsWithIdOnly = await prisma.orderItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemsFindManyArgs>(args?: SelectSubset<T, OrderItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItems.
     * @param {OrderItemsCreateArgs} args - Arguments to create a OrderItems.
     * @example
     * // Create one OrderItems
     * const OrderItems = await prisma.orderItems.create({
     *   data: {
     *     // ... data to create a OrderItems
     *   }
     * })
     * 
     */
    create<T extends OrderItemsCreateArgs>(args: SelectSubset<T, OrderItemsCreateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemsCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItems = await prisma.orderItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemsCreateManyArgs>(args?: SelectSubset<T, OrderItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItems.
     * @param {OrderItemsDeleteArgs} args - Arguments to delete one OrderItems.
     * @example
     * // Delete one OrderItems
     * const OrderItems = await prisma.orderItems.delete({
     *   where: {
     *     // ... filter to delete one OrderItems
     *   }
     * })
     * 
     */
    delete<T extends OrderItemsDeleteArgs>(args: SelectSubset<T, OrderItemsDeleteArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItems.
     * @param {OrderItemsUpdateArgs} args - Arguments to update one OrderItems.
     * @example
     * // Update one OrderItems
     * const orderItems = await prisma.orderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemsUpdateArgs>(args: SelectSubset<T, OrderItemsUpdateArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemsDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemsDeleteManyArgs>(args?: SelectSubset<T, OrderItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItems = await prisma.orderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemsUpdateManyArgs>(args: SelectSubset<T, OrderItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItems.
     * @param {OrderItemsUpsertArgs} args - Arguments to update or create a OrderItems.
     * @example
     * // Update or create a OrderItems
     * const orderItems = await prisma.orderItems.upsert({
     *   create: {
     *     // ... data to create a OrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItems we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemsUpsertArgs>(args: SelectSubset<T, OrderItemsUpsertArgs<ExtArgs>>): Prisma__OrderItemsClient<$Result.GetResult<Prisma.$OrderItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItems.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemsCountArgs>(
      args?: Subset<T, OrderItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemsAggregateArgs>(args: Subset<T, OrderItemsAggregateArgs>): Prisma.PrismaPromise<GetOrderItemsAggregateType<T>>

    /**
     * Group by OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemsGroupByArgs} args - Group by arguments.
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
      T extends OrderItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemsGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItems model
   */
  readonly fields: OrderItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends OrderSeatsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderSeatsDefaultArgs<ExtArgs>>): Prisma__OrderSeatsClient<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menuItem<T extends MenuItemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemsDefaultArgs<ExtArgs>>): Prisma__MenuItemsClient<$Result.GetResult<Prisma.$MenuItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends OrderItems$courseArgs<ExtArgs> = {}>(args?: Subset<T, OrderItems$courseArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItems model
   */
  interface OrderItemsFieldRefs {
    readonly id: FieldRef<"OrderItems", 'Int'>
    readonly orderId: FieldRef<"OrderItems", 'Int'>
    readonly seatId: FieldRef<"OrderItems", 'Int'>
    readonly itemId: FieldRef<"OrderItems", 'Int'>
    readonly courseId: FieldRef<"OrderItems", 'Int'>
    readonly quantity: FieldRef<"OrderItems", 'Int'>
    readonly unitPrice: FieldRef<"OrderItems", 'Float'>
    readonly itemStatus: FieldRef<"OrderItems", 'ItemStatus'>
    readonly createdAt: FieldRef<"OrderItems", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItems findUnique
   */
  export type OrderItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findUniqueOrThrow
   */
  export type OrderItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems findFirst
   */
  export type OrderItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
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
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findFirstOrThrow
   */
  export type OrderItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
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
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems findMany
   */
  export type OrderItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemsOrderByWithRelationInput | OrderItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemsWhereUniqueInput
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
    distinct?: OrderItemsScalarFieldEnum | OrderItemsScalarFieldEnum[]
  }

  /**
   * OrderItems create
   */
  export type OrderItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItems.
     */
    data: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
  }

  /**
   * OrderItems createMany
   */
  export type OrderItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemsCreateManyInput | OrderItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItems update
   */
  export type OrderItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItems.
     */
    data: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
    /**
     * Choose, which OrderItems to update.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems updateMany
   */
  export type OrderItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItems upsert
   */
  export type OrderItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItems to update in case it exists.
     */
    where: OrderItemsWhereUniqueInput
    /**
     * In case the OrderItems found by the `where` argument doesn't exist, create a new OrderItems with this data.
     */
    create: XOR<OrderItemsCreateInput, OrderItemsUncheckedCreateInput>
    /**
     * In case the OrderItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemsUpdateInput, OrderItemsUncheckedUpdateInput>
  }

  /**
   * OrderItems delete
   */
  export type OrderItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
    /**
     * Filter which OrderItems to delete.
     */
    where: OrderItemsWhereUniqueInput
  }

  /**
   * OrderItems deleteMany
   */
  export type OrderItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemsWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItems.course
   */
  export type OrderItems$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    where?: CoursesWhereInput
  }

  /**
   * OrderItems without action
   */
  export type OrderItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItems
     */
    select?: OrderItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItems
     */
    omit?: OrderItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemsInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    totalAmount: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    totalAmount: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    paymentType: $Enums.PaymentType | null
    paymentMethod: $Enums.PaymentMethod | null
    totalAmount: number | null
    paymentStatus: $Enums.PaymentStatus | null
    qrCodeData: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    paymentType: $Enums.PaymentType | null
    paymentMethod: $Enums.PaymentMethod | null
    totalAmount: number | null
    paymentStatus: $Enums.PaymentStatus | null
    qrCodeData: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    orderId: number
    paymentType: number
    paymentMethod: number
    totalAmount: number
    paymentStatus: number
    qrCodeData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    orderId?: true
    totalAmount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    orderId?: true
    totalAmount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    orderId?: true
    paymentType?: true
    paymentMethod?: true
    totalAmount?: true
    paymentStatus?: true
    qrCodeData?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    orderId?: true
    paymentType?: true
    paymentMethod?: true
    totalAmount?: true
    paymentStatus?: true
    qrCodeData?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    orderId?: true
    paymentType?: true
    paymentMethod?: true
    totalAmount?: true
    paymentStatus?: true
    qrCodeData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
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
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    orderId: number
    paymentType: $Enums.PaymentType
    paymentMethod: $Enums.PaymentMethod
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    qrCodeData: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentType?: boolean
    paymentMethod?: boolean
    totalAmount?: boolean
    paymentStatus?: boolean
    qrCodeData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    paymentDetails?: boolean | Payments$paymentDetailsArgs<ExtArgs>
    _count?: boolean | PaymentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>



  export type PaymentsSelectScalar = {
    id?: boolean
    orderId?: boolean
    paymentType?: boolean
    paymentMethod?: boolean
    totalAmount?: boolean
    paymentStatus?: boolean
    qrCodeData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "paymentType" | "paymentMethod" | "totalAmount" | "paymentStatus" | "qrCodeData" | "createdAt" | "updatedAt", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrdersDefaultArgs<ExtArgs>
    paymentDetails?: boolean | Payments$paymentDetailsArgs<ExtArgs>
    _count?: boolean | PaymentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      order: Prisma.$OrdersPayload<ExtArgs>
      paymentDetails: Prisma.$PaymentDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      paymentType: $Enums.PaymentType
      paymentMethod: $Enums.PaymentMethod
      totalAmount: number
      paymentStatus: $Enums.PaymentStatus
      qrCodeData: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
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
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentDetails<T extends Payments$paymentDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Payments$paymentDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'Int'>
    readonly orderId: FieldRef<"Payments", 'Int'>
    readonly paymentType: FieldRef<"Payments", 'PaymentType'>
    readonly paymentMethod: FieldRef<"Payments", 'PaymentMethod'>
    readonly totalAmount: FieldRef<"Payments", 'Float'>
    readonly paymentStatus: FieldRef<"Payments", 'PaymentStatus'>
    readonly qrCodeData: FieldRef<"Payments", 'String'>
    readonly createdAt: FieldRef<"Payments", 'DateTime'>
    readonly updatedAt: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
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
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
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
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
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
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments.paymentDetails
   */
  export type Payments$paymentDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    where?: PaymentDetailsWhereInput
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    cursor?: PaymentDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model PaymentDetails
   */

  export type AggregatePaymentDetails = {
    _count: PaymentDetailsCountAggregateOutputType | null
    _avg: PaymentDetailsAvgAggregateOutputType | null
    _sum: PaymentDetailsSumAggregateOutputType | null
    _min: PaymentDetailsMinAggregateOutputType | null
    _max: PaymentDetailsMaxAggregateOutputType | null
  }

  export type PaymentDetailsAvgAggregateOutputType = {
    id: number | null
    paymentId: number | null
    seatId: number | null
    amount: number | null
  }

  export type PaymentDetailsSumAggregateOutputType = {
    id: number | null
    paymentId: number | null
    seatId: number | null
    amount: number | null
  }

  export type PaymentDetailsMinAggregateOutputType = {
    id: number | null
    paymentId: number | null
    seatId: number | null
    amount: number | null
    isCoursePayment: boolean | null
    isExtraPayment: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentDetailsMaxAggregateOutputType = {
    id: number | null
    paymentId: number | null
    seatId: number | null
    amount: number | null
    isCoursePayment: boolean | null
    isExtraPayment: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentDetailsCountAggregateOutputType = {
    id: number
    paymentId: number
    seatId: number
    amount: number
    isCoursePayment: number
    isExtraPayment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentDetailsAvgAggregateInputType = {
    id?: true
    paymentId?: true
    seatId?: true
    amount?: true
  }

  export type PaymentDetailsSumAggregateInputType = {
    id?: true
    paymentId?: true
    seatId?: true
    amount?: true
  }

  export type PaymentDetailsMinAggregateInputType = {
    id?: true
    paymentId?: true
    seatId?: true
    amount?: true
    isCoursePayment?: true
    isExtraPayment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentDetailsMaxAggregateInputType = {
    id?: true
    paymentId?: true
    seatId?: true
    amount?: true
    isCoursePayment?: true
    isExtraPayment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentDetailsCountAggregateInputType = {
    id?: true
    paymentId?: true
    seatId?: true
    amount?: true
    isCoursePayment?: true
    isExtraPayment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetails to aggregate.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentDetails
    **/
    _count?: true | PaymentDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentDetailsMaxAggregateInputType
  }

  export type GetPaymentDetailsAggregateType<T extends PaymentDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentDetails[P]>
      : GetScalarType<T[P], AggregatePaymentDetails[P]>
  }




  export type PaymentDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailsWhereInput
    orderBy?: PaymentDetailsOrderByWithAggregationInput | PaymentDetailsOrderByWithAggregationInput[]
    by: PaymentDetailsScalarFieldEnum[] | PaymentDetailsScalarFieldEnum
    having?: PaymentDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentDetailsCountAggregateInputType | true
    _avg?: PaymentDetailsAvgAggregateInputType
    _sum?: PaymentDetailsSumAggregateInputType
    _min?: PaymentDetailsMinAggregateInputType
    _max?: PaymentDetailsMaxAggregateInputType
  }

  export type PaymentDetailsGroupByOutputType = {
    id: number
    paymentId: number
    seatId: number | null
    amount: number
    isCoursePayment: boolean
    isExtraPayment: boolean
    createdAt: Date
    updatedAt: Date
    _count: PaymentDetailsCountAggregateOutputType | null
    _avg: PaymentDetailsAvgAggregateOutputType | null
    _sum: PaymentDetailsSumAggregateOutputType | null
    _min: PaymentDetailsMinAggregateOutputType | null
    _max: PaymentDetailsMaxAggregateOutputType | null
  }

  type GetPaymentDetailsGroupByPayload<T extends PaymentDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentDetailsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    seatId?: boolean
    amount?: boolean
    isCoursePayment?: boolean
    isExtraPayment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payment?: boolean | PaymentsDefaultArgs<ExtArgs>
    seat?: boolean | PaymentDetails$seatArgs<ExtArgs>
  }, ExtArgs["result"]["paymentDetails"]>



  export type PaymentDetailsSelectScalar = {
    id?: boolean
    paymentId?: boolean
    seatId?: boolean
    amount?: boolean
    isCoursePayment?: boolean
    isExtraPayment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "seatId" | "amount" | "isCoursePayment" | "isExtraPayment" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentDetails"]>
  export type PaymentDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentsDefaultArgs<ExtArgs>
    seat?: boolean | PaymentDetails$seatArgs<ExtArgs>
  }

  export type $PaymentDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentDetails"
    objects: {
      payment: Prisma.$PaymentsPayload<ExtArgs>
      seat: Prisma.$OrderSeatsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paymentId: number
      seatId: number | null
      amount: number
      isCoursePayment: boolean
      isExtraPayment: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentDetails"]>
    composites: {}
  }

  type PaymentDetailsGetPayload<S extends boolean | null | undefined | PaymentDetailsDefaultArgs> = $Result.GetResult<Prisma.$PaymentDetailsPayload, S>

  type PaymentDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentDetailsCountAggregateInputType | true
    }

  export interface PaymentDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentDetails'], meta: { name: 'PaymentDetails' } }
    /**
     * Find zero or one PaymentDetails that matches the filter.
     * @param {PaymentDetailsFindUniqueArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentDetailsFindUniqueArgs>(args: SelectSubset<T, PaymentDetailsFindUniqueArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentDetailsFindUniqueOrThrowArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindFirstArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentDetailsFindFirstArgs>(args?: SelectSubset<T, PaymentDetailsFindFirstArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindFirstOrThrowArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findMany()
     * 
     * // Get first 10 PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentDetailsWithIdOnly = await prisma.paymentDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentDetailsFindManyArgs>(args?: SelectSubset<T, PaymentDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentDetails.
     * @param {PaymentDetailsCreateArgs} args - Arguments to create a PaymentDetails.
     * @example
     * // Create one PaymentDetails
     * const PaymentDetails = await prisma.paymentDetails.create({
     *   data: {
     *     // ... data to create a PaymentDetails
     *   }
     * })
     * 
     */
    create<T extends PaymentDetailsCreateArgs>(args: SelectSubset<T, PaymentDetailsCreateArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentDetails.
     * @param {PaymentDetailsCreateManyArgs} args - Arguments to create many PaymentDetails.
     * @example
     * // Create many PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentDetailsCreateManyArgs>(args?: SelectSubset<T, PaymentDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentDetails.
     * @param {PaymentDetailsDeleteArgs} args - Arguments to delete one PaymentDetails.
     * @example
     * // Delete one PaymentDetails
     * const PaymentDetails = await prisma.paymentDetails.delete({
     *   where: {
     *     // ... filter to delete one PaymentDetails
     *   }
     * })
     * 
     */
    delete<T extends PaymentDetailsDeleteArgs>(args: SelectSubset<T, PaymentDetailsDeleteArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentDetails.
     * @param {PaymentDetailsUpdateArgs} args - Arguments to update one PaymentDetails.
     * @example
     * // Update one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentDetailsUpdateArgs>(args: SelectSubset<T, PaymentDetailsUpdateArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentDetails.
     * @param {PaymentDetailsDeleteManyArgs} args - Arguments to filter PaymentDetails to delete.
     * @example
     * // Delete a few PaymentDetails
     * const { count } = await prisma.paymentDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDetailsDeleteManyArgs>(args?: SelectSubset<T, PaymentDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentDetailsUpdateManyArgs>(args: SelectSubset<T, PaymentDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentDetails.
     * @param {PaymentDetailsUpsertArgs} args - Arguments to update or create a PaymentDetails.
     * @example
     * // Update or create a PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.upsert({
     *   create: {
     *     // ... data to create a PaymentDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentDetails we want to update
     *   }
     * })
     */
    upsert<T extends PaymentDetailsUpsertArgs>(args: SelectSubset<T, PaymentDetailsUpsertArgs<ExtArgs>>): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsCountArgs} args - Arguments to filter PaymentDetails to count.
     * @example
     * // Count the number of PaymentDetails
     * const count = await prisma.paymentDetails.count({
     *   where: {
     *     // ... the filter for the PaymentDetails we want to count
     *   }
     * })
    **/
    count<T extends PaymentDetailsCountArgs>(
      args?: Subset<T, PaymentDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentDetailsAggregateArgs>(args: Subset<T, PaymentDetailsAggregateArgs>): Prisma.PrismaPromise<GetPaymentDetailsAggregateType<T>>

    /**
     * Group by PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsGroupByArgs} args - Group by arguments.
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
      T extends PaymentDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentDetailsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentDetails model
   */
  readonly fields: PaymentDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentsDefaultArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends PaymentDetails$seatArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDetails$seatArgs<ExtArgs>>): Prisma__OrderSeatsClient<$Result.GetResult<Prisma.$OrderSeatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentDetails model
   */
  interface PaymentDetailsFieldRefs {
    readonly id: FieldRef<"PaymentDetails", 'Int'>
    readonly paymentId: FieldRef<"PaymentDetails", 'Int'>
    readonly seatId: FieldRef<"PaymentDetails", 'Int'>
    readonly amount: FieldRef<"PaymentDetails", 'Float'>
    readonly isCoursePayment: FieldRef<"PaymentDetails", 'Boolean'>
    readonly isExtraPayment: FieldRef<"PaymentDetails", 'Boolean'>
    readonly createdAt: FieldRef<"PaymentDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentDetails findUnique
   */
  export type PaymentDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where: PaymentDetailsWhereUniqueInput
  }

  /**
   * PaymentDetails findUniqueOrThrow
   */
  export type PaymentDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where: PaymentDetailsWhereUniqueInput
  }

  /**
   * PaymentDetails findFirst
   */
  export type PaymentDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }

  /**
   * PaymentDetails findFirstOrThrow
   */
  export type PaymentDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }

  /**
   * PaymentDetails findMany
   */
  export type PaymentDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }

  /**
   * PaymentDetails create
   */
  export type PaymentDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentDetails.
     */
    data: XOR<PaymentDetailsCreateInput, PaymentDetailsUncheckedCreateInput>
  }

  /**
   * PaymentDetails createMany
   */
  export type PaymentDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentDetails.
     */
    data: PaymentDetailsCreateManyInput | PaymentDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentDetails update
   */
  export type PaymentDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentDetails.
     */
    data: XOR<PaymentDetailsUpdateInput, PaymentDetailsUncheckedUpdateInput>
    /**
     * Choose, which PaymentDetails to update.
     */
    where: PaymentDetailsWhereUniqueInput
  }

  /**
   * PaymentDetails updateMany
   */
  export type PaymentDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentDetails.
     */
    data: XOR<PaymentDetailsUpdateManyMutationInput, PaymentDetailsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentDetails to update
     */
    where?: PaymentDetailsWhereInput
    /**
     * Limit how many PaymentDetails to update.
     */
    limit?: number
  }

  /**
   * PaymentDetails upsert
   */
  export type PaymentDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentDetails to update in case it exists.
     */
    where: PaymentDetailsWhereUniqueInput
    /**
     * In case the PaymentDetails found by the `where` argument doesn't exist, create a new PaymentDetails with this data.
     */
    create: XOR<PaymentDetailsCreateInput, PaymentDetailsUncheckedCreateInput>
    /**
     * In case the PaymentDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentDetailsUpdateInput, PaymentDetailsUncheckedUpdateInput>
  }

  /**
   * PaymentDetails delete
   */
  export type PaymentDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter which PaymentDetails to delete.
     */
    where: PaymentDetailsWhereUniqueInput
  }

  /**
   * PaymentDetails deleteMany
   */
  export type PaymentDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetails to delete
     */
    where?: PaymentDetailsWhereInput
    /**
     * Limit how many PaymentDetails to delete.
     */
    limit?: number
  }

  /**
   * PaymentDetails.seat
   */
  export type PaymentDetails$seatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSeats
     */
    select?: OrderSeatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSeats
     */
    omit?: OrderSeatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSeatsInclude<ExtArgs> | null
    where?: OrderSeatsWhereInput
  }

  /**
   * PaymentDetails without action
   */
  export type PaymentDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentDetails
     */
    omit?: PaymentDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItems
   */

  export type AggregateInventoryItems = {
    _count: InventoryItemsCountAggregateOutputType | null
    _avg: InventoryItemsAvgAggregateOutputType | null
    _sum: InventoryItemsSumAggregateOutputType | null
    _min: InventoryItemsMinAggregateOutputType | null
    _max: InventoryItemsMaxAggregateOutputType | null
  }

  export type InventoryItemsAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    quantity: number | null
  }

  export type InventoryItemsSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    quantity: number | null
  }

  export type InventoryItemsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    categoryId: number | null
    quantity: number | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryItemsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    categoryId: number | null
    quantity: number | null
    unit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryItemsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    categoryId: number
    quantity: number
    unit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryItemsAvgAggregateInputType = {
    id?: true
    categoryId?: true
    quantity?: true
  }

  export type InventoryItemsSumAggregateInputType = {
    id?: true
    categoryId?: true
    quantity?: true
  }

  export type InventoryItemsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    quantity?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryItemsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    quantity?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryItemsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    categoryId?: true
    quantity?: true
    unit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to aggregate.
     */
    where?: InventoryItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemsOrderByWithRelationInput | InventoryItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemsWhereUniqueInput
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
    _count?: true | InventoryItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemsMaxAggregateInputType
  }

  export type GetInventoryItemsAggregateType<T extends InventoryItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItems[P]>
      : GetScalarType<T[P], AggregateInventoryItems[P]>
  }




  export type InventoryItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemsWhereInput
    orderBy?: InventoryItemsOrderByWithAggregationInput | InventoryItemsOrderByWithAggregationInput[]
    by: InventoryItemsScalarFieldEnum[] | InventoryItemsScalarFieldEnum
    having?: InventoryItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemsCountAggregateInputType | true
    _avg?: InventoryItemsAvgAggregateInputType
    _sum?: InventoryItemsSumAggregateInputType
    _min?: InventoryItemsMinAggregateInputType
    _max?: InventoryItemsMaxAggregateInputType
  }

  export type InventoryItemsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    categoryId: number
    quantity: number
    unit: string
    createdAt: Date
    updatedAt: Date
    _count: InventoryItemsCountAggregateOutputType | null
    _avg: InventoryItemsAvgAggregateOutputType | null
    _sum: InventoryItemsSumAggregateOutputType | null
    _min: InventoryItemsMinAggregateOutputType | null
    _max: InventoryItemsMaxAggregateOutputType | null
  }

  type GetInventoryItemsGroupByPayload<T extends InventoryItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemsGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemsGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    quantity?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    inventoryTransactions?: boolean | InventoryItems$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | InventoryItemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItems"]>



  export type InventoryItemsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    categoryId?: boolean
    quantity?: boolean
    unit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "categoryId" | "quantity" | "unit" | "createdAt" | "updatedAt", ExtArgs["result"]["inventoryItems"]>
  export type InventoryItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    inventoryTransactions?: boolean | InventoryItems$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | InventoryItemsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InventoryItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItems"
    objects: {
      category: Prisma.$CategoriesPayload<ExtArgs>
      inventoryTransactions: Prisma.$InventoryTransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      categoryId: number
      quantity: number
      unit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryItems"]>
    composites: {}
  }

  type InventoryItemsGetPayload<S extends boolean | null | undefined | InventoryItemsDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemsPayload, S>

  type InventoryItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryItemsCountAggregateInputType | true
    }

  export interface InventoryItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItems'], meta: { name: 'InventoryItems' } }
    /**
     * Find zero or one InventoryItems that matches the filter.
     * @param {InventoryItemsFindUniqueArgs} args - Arguments to find a InventoryItems
     * @example
     * // Get one InventoryItems
     * const inventoryItems = await prisma.inventoryItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemsFindUniqueArgs>(args: SelectSubset<T, InventoryItemsFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemsClient<$Result.GetResult<Prisma.$InventoryItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryItemsFindUniqueOrThrowArgs} args - Arguments to find a InventoryItems
     * @example
     * // Get one InventoryItems
     * const inventoryItems = await prisma.inventoryItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemsClient<$Result.GetResult<Prisma.$InventoryItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemsFindFirstArgs} args - Arguments to find a InventoryItems
     * @example
     * // Get one InventoryItems
     * const inventoryItems = await prisma.inventoryItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemsFindFirstArgs>(args?: SelectSubset<T, InventoryItemsFindFirstArgs<ExtArgs>>): Prisma__InventoryItemsClient<$Result.GetResult<Prisma.$InventoryItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemsFindFirstOrThrowArgs} args - Arguments to find a InventoryItems
     * @example
     * // Get one InventoryItems
     * const inventoryItems = await prisma.inventoryItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemsClient<$Result.GetResult<Prisma.$InventoryItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItems.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryItemsWithIdOnly = await prisma.inventoryItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryItemsFindManyArgs>(args?: SelectSubset<T, InventoryItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryItems.
     * @param {InventoryItemsCreateArgs} args - Arguments to create a InventoryItems.
     * @example
     * // Create one InventoryItems
     * const InventoryItems = await prisma.inventoryItems.create({
     *   data: {
     *     // ... data to create a InventoryItems
     *   }
     * })
     * 
     */
    create<T extends InventoryItemsCreateArgs>(args: SelectSubset<T, InventoryItemsCreateArgs<ExtArgs>>): Prisma__InventoryItemsClient<$Result.GetResult<Prisma.$InventoryItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemsCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItems = await prisma.inventoryItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemsCreateManyArgs>(args?: SelectSubset<T, InventoryItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryItems.
     * @param {InventoryItemsDeleteArgs} args - Arguments to delete one InventoryItems.
     * @example
     * // Delete one InventoryItems
     * const InventoryItems = await prisma.inventoryItems.delete({
     *   where: {
     *     // ... filter to delete one InventoryItems
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemsDeleteArgs>(args: SelectSubset<T, InventoryItemsDeleteArgs<ExtArgs>>): Prisma__InventoryItemsClient<$Result.GetResult<Prisma.$InventoryItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryItems.
     * @param {InventoryItemsUpdateArgs} args - Arguments to update one InventoryItems.
     * @example
     * // Update one InventoryItems
     * const inventoryItems = await prisma.inventoryItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemsUpdateArgs>(args: SelectSubset<T, InventoryItemsUpdateArgs<ExtArgs>>): Prisma__InventoryItemsClient<$Result.GetResult<Prisma.$InventoryItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemsDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemsDeleteManyArgs>(args?: SelectSubset<T, InventoryItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItems = await prisma.inventoryItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemsUpdateManyArgs>(args: SelectSubset<T, InventoryItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryItems.
     * @param {InventoryItemsUpsertArgs} args - Arguments to update or create a InventoryItems.
     * @example
     * // Update or create a InventoryItems
     * const inventoryItems = await prisma.inventoryItems.upsert({
     *   create: {
     *     // ... data to create a InventoryItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItems we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemsUpsertArgs>(args: SelectSubset<T, InventoryItemsUpsertArgs<ExtArgs>>): Prisma__InventoryItemsClient<$Result.GetResult<Prisma.$InventoryItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemsCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItems.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemsCountArgs>(
      args?: Subset<T, InventoryItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryItemsAggregateArgs>(args: Subset<T, InventoryItemsAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemsAggregateType<T>>

    /**
     * Group by InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemsGroupByArgs} args - Group by arguments.
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
      T extends InventoryItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemsGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItems model
   */
  readonly fields: InventoryItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventoryTransactions<T extends InventoryItems$inventoryTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItems$inventoryTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InventoryItems model
   */
  interface InventoryItemsFieldRefs {
    readonly id: FieldRef<"InventoryItems", 'Int'>
    readonly name: FieldRef<"InventoryItems", 'String'>
    readonly description: FieldRef<"InventoryItems", 'String'>
    readonly categoryId: FieldRef<"InventoryItems", 'Int'>
    readonly quantity: FieldRef<"InventoryItems", 'Float'>
    readonly unit: FieldRef<"InventoryItems", 'String'>
    readonly createdAt: FieldRef<"InventoryItems", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItems findUnique
   */
  export type InventoryItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItems
     */
    select?: InventoryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItems
     */
    omit?: InventoryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemsInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where: InventoryItemsWhereUniqueInput
  }

  /**
   * InventoryItems findUniqueOrThrow
   */
  export type InventoryItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItems
     */
    select?: InventoryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItems
     */
    omit?: InventoryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemsInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where: InventoryItemsWhereUniqueInput
  }

  /**
   * InventoryItems findFirst
   */
  export type InventoryItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItems
     */
    select?: InventoryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItems
     */
    omit?: InventoryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemsInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemsOrderByWithRelationInput | InventoryItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemsWhereUniqueInput
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
    distinct?: InventoryItemsScalarFieldEnum | InventoryItemsScalarFieldEnum[]
  }

  /**
   * InventoryItems findFirstOrThrow
   */
  export type InventoryItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItems
     */
    select?: InventoryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItems
     */
    omit?: InventoryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemsInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemsOrderByWithRelationInput | InventoryItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemsWhereUniqueInput
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
    distinct?: InventoryItemsScalarFieldEnum | InventoryItemsScalarFieldEnum[]
  }

  /**
   * InventoryItems findMany
   */
  export type InventoryItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItems
     */
    select?: InventoryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItems
     */
    omit?: InventoryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemsInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemsOrderByWithRelationInput | InventoryItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemsWhereUniqueInput
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
    distinct?: InventoryItemsScalarFieldEnum | InventoryItemsScalarFieldEnum[]
  }

  /**
   * InventoryItems create
   */
  export type InventoryItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItems
     */
    select?: InventoryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItems
     */
    omit?: InventoryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItems.
     */
    data: XOR<InventoryItemsCreateInput, InventoryItemsUncheckedCreateInput>
  }

  /**
   * InventoryItems createMany
   */
  export type InventoryItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemsCreateManyInput | InventoryItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItems update
   */
  export type InventoryItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItems
     */
    select?: InventoryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItems
     */
    omit?: InventoryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItems.
     */
    data: XOR<InventoryItemsUpdateInput, InventoryItemsUncheckedUpdateInput>
    /**
     * Choose, which InventoryItems to update.
     */
    where: InventoryItemsWhereUniqueInput
  }

  /**
   * InventoryItems updateMany
   */
  export type InventoryItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemsUpdateManyMutationInput, InventoryItemsUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemsWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
  }

  /**
   * InventoryItems upsert
   */
  export type InventoryItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItems
     */
    select?: InventoryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItems
     */
    omit?: InventoryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItems to update in case it exists.
     */
    where: InventoryItemsWhereUniqueInput
    /**
     * In case the InventoryItems found by the `where` argument doesn't exist, create a new InventoryItems with this data.
     */
    create: XOR<InventoryItemsCreateInput, InventoryItemsUncheckedCreateInput>
    /**
     * In case the InventoryItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemsUpdateInput, InventoryItemsUncheckedUpdateInput>
  }

  /**
   * InventoryItems delete
   */
  export type InventoryItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItems
     */
    select?: InventoryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItems
     */
    omit?: InventoryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemsInclude<ExtArgs> | null
    /**
     * Filter which InventoryItems to delete.
     */
    where: InventoryItemsWhereUniqueInput
  }

  /**
   * InventoryItems deleteMany
   */
  export type InventoryItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemsWhereInput
    /**
     * Limit how many InventoryItems to delete.
     */
    limit?: number
  }

  /**
   * InventoryItems.inventoryTransactions
   */
  export type InventoryItems$inventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    where?: InventoryTransactionsWhereInput
    orderBy?: InventoryTransactionsOrderByWithRelationInput | InventoryTransactionsOrderByWithRelationInput[]
    cursor?: InventoryTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryTransactionsScalarFieldEnum | InventoryTransactionsScalarFieldEnum[]
  }

  /**
   * InventoryItems without action
   */
  export type InventoryItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItems
     */
    select?: InventoryItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItems
     */
    omit?: InventoryItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemsInclude<ExtArgs> | null
  }


  /**
   * Model InventoryTransactions
   */

  export type AggregateInventoryTransactions = {
    _count: InventoryTransactionsCountAggregateOutputType | null
    _avg: InventoryTransactionsAvgAggregateOutputType | null
    _sum: InventoryTransactionsSumAggregateOutputType | null
    _min: InventoryTransactionsMinAggregateOutputType | null
    _max: InventoryTransactionsMaxAggregateOutputType | null
  }

  export type InventoryTransactionsAvgAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    quantityChange: number | null
    relatedOrderId: number | null
    createdById: number | null
  }

  export type InventoryTransactionsSumAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    quantityChange: number | null
    relatedOrderId: number | null
    createdById: number | null
  }

  export type InventoryTransactionsMinAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    quantityChange: number | null
    transactionType: $Enums.TransactionType | null
    relatedOrderId: number | null
    notes: string | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryTransactionsMaxAggregateOutputType = {
    id: number | null
    inventoryItemId: number | null
    quantityChange: number | null
    transactionType: $Enums.TransactionType | null
    relatedOrderId: number | null
    notes: string | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryTransactionsCountAggregateOutputType = {
    id: number
    inventoryItemId: number
    quantityChange: number
    transactionType: number
    relatedOrderId: number
    notes: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryTransactionsAvgAggregateInputType = {
    id?: true
    inventoryItemId?: true
    quantityChange?: true
    relatedOrderId?: true
    createdById?: true
  }

  export type InventoryTransactionsSumAggregateInputType = {
    id?: true
    inventoryItemId?: true
    quantityChange?: true
    relatedOrderId?: true
    createdById?: true
  }

  export type InventoryTransactionsMinAggregateInputType = {
    id?: true
    inventoryItemId?: true
    quantityChange?: true
    transactionType?: true
    relatedOrderId?: true
    notes?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryTransactionsMaxAggregateInputType = {
    id?: true
    inventoryItemId?: true
    quantityChange?: true
    transactionType?: true
    relatedOrderId?: true
    notes?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryTransactionsCountAggregateInputType = {
    id?: true
    inventoryItemId?: true
    quantityChange?: true
    transactionType?: true
    relatedOrderId?: true
    notes?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryTransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransactions to aggregate.
     */
    where?: InventoryTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionsOrderByWithRelationInput | InventoryTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryTransactionsWhereUniqueInput
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
    _count?: true | InventoryTransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryTransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryTransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryTransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryTransactionsMaxAggregateInputType
  }

  export type GetInventoryTransactionsAggregateType<T extends InventoryTransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryTransactions[P]>
      : GetScalarType<T[P], AggregateInventoryTransactions[P]>
  }




  export type InventoryTransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionsWhereInput
    orderBy?: InventoryTransactionsOrderByWithAggregationInput | InventoryTransactionsOrderByWithAggregationInput[]
    by: InventoryTransactionsScalarFieldEnum[] | InventoryTransactionsScalarFieldEnum
    having?: InventoryTransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryTransactionsCountAggregateInputType | true
    _avg?: InventoryTransactionsAvgAggregateInputType
    _sum?: InventoryTransactionsSumAggregateInputType
    _min?: InventoryTransactionsMinAggregateInputType
    _max?: InventoryTransactionsMaxAggregateInputType
  }

  export type InventoryTransactionsGroupByOutputType = {
    id: number
    inventoryItemId: number
    quantityChange: number
    transactionType: $Enums.TransactionType
    relatedOrderId: number | null
    notes: string | null
    createdById: number
    createdAt: Date
    updatedAt: Date
    _count: InventoryTransactionsCountAggregateOutputType | null
    _avg: InventoryTransactionsAvgAggregateOutputType | null
    _sum: InventoryTransactionsSumAggregateOutputType | null
    _min: InventoryTransactionsMinAggregateOutputType | null
    _max: InventoryTransactionsMaxAggregateOutputType | null
  }

  type GetInventoryTransactionsGroupByPayload<T extends InventoryTransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryTransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryTransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryTransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryTransactionsGroupByOutputType[P]>
        }
      >
    >


  export type InventoryTransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryItemId?: boolean
    quantityChange?: boolean
    transactionType?: boolean
    relatedOrderId?: boolean
    notes?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventoryItem?: boolean | InventoryItemsDefaultArgs<ExtArgs>
    relatedOrder?: boolean | InventoryTransactions$relatedOrderArgs<ExtArgs>
    createdBy?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryTransactions"]>



  export type InventoryTransactionsSelectScalar = {
    id?: boolean
    inventoryItemId?: boolean
    quantityChange?: boolean
    transactionType?: boolean
    relatedOrderId?: boolean
    notes?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryTransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inventoryItemId" | "quantityChange" | "transactionType" | "relatedOrderId" | "notes" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["inventoryTransactions"]>
  export type InventoryTransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryItem?: boolean | InventoryItemsDefaultArgs<ExtArgs>
    relatedOrder?: boolean | InventoryTransactions$relatedOrderArgs<ExtArgs>
    createdBy?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $InventoryTransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryTransactions"
    objects: {
      inventoryItem: Prisma.$InventoryItemsPayload<ExtArgs>
      relatedOrder: Prisma.$OrdersPayload<ExtArgs> | null
      createdBy: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inventoryItemId: number
      quantityChange: number
      transactionType: $Enums.TransactionType
      relatedOrderId: number | null
      notes: string | null
      createdById: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryTransactions"]>
    composites: {}
  }

  type InventoryTransactionsGetPayload<S extends boolean | null | undefined | InventoryTransactionsDefaultArgs> = $Result.GetResult<Prisma.$InventoryTransactionsPayload, S>

  type InventoryTransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryTransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryTransactionsCountAggregateInputType | true
    }

  export interface InventoryTransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryTransactions'], meta: { name: 'InventoryTransactions' } }
    /**
     * Find zero or one InventoryTransactions that matches the filter.
     * @param {InventoryTransactionsFindUniqueArgs} args - Arguments to find a InventoryTransactions
     * @example
     * // Get one InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryTransactionsFindUniqueArgs>(args: SelectSubset<T, InventoryTransactionsFindUniqueArgs<ExtArgs>>): Prisma__InventoryTransactionsClient<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryTransactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryTransactionsFindUniqueOrThrowArgs} args - Arguments to find a InventoryTransactions
     * @example
     * // Get one InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryTransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryTransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryTransactionsClient<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsFindFirstArgs} args - Arguments to find a InventoryTransactions
     * @example
     * // Get one InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryTransactionsFindFirstArgs>(args?: SelectSubset<T, InventoryTransactionsFindFirstArgs<ExtArgs>>): Prisma__InventoryTransactionsClient<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryTransactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsFindFirstOrThrowArgs} args - Arguments to find a InventoryTransactions
     * @example
     * // Get one InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryTransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryTransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryTransactionsClient<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findMany()
     * 
     * // Get first 10 InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryTransactionsWithIdOnly = await prisma.inventoryTransactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryTransactionsFindManyArgs>(args?: SelectSubset<T, InventoryTransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryTransactions.
     * @param {InventoryTransactionsCreateArgs} args - Arguments to create a InventoryTransactions.
     * @example
     * // Create one InventoryTransactions
     * const InventoryTransactions = await prisma.inventoryTransactions.create({
     *   data: {
     *     // ... data to create a InventoryTransactions
     *   }
     * })
     * 
     */
    create<T extends InventoryTransactionsCreateArgs>(args: SelectSubset<T, InventoryTransactionsCreateArgs<ExtArgs>>): Prisma__InventoryTransactionsClient<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryTransactions.
     * @param {InventoryTransactionsCreateManyArgs} args - Arguments to create many InventoryTransactions.
     * @example
     * // Create many InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryTransactionsCreateManyArgs>(args?: SelectSubset<T, InventoryTransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryTransactions.
     * @param {InventoryTransactionsDeleteArgs} args - Arguments to delete one InventoryTransactions.
     * @example
     * // Delete one InventoryTransactions
     * const InventoryTransactions = await prisma.inventoryTransactions.delete({
     *   where: {
     *     // ... filter to delete one InventoryTransactions
     *   }
     * })
     * 
     */
    delete<T extends InventoryTransactionsDeleteArgs>(args: SelectSubset<T, InventoryTransactionsDeleteArgs<ExtArgs>>): Prisma__InventoryTransactionsClient<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryTransactions.
     * @param {InventoryTransactionsUpdateArgs} args - Arguments to update one InventoryTransactions.
     * @example
     * // Update one InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryTransactionsUpdateArgs>(args: SelectSubset<T, InventoryTransactionsUpdateArgs<ExtArgs>>): Prisma__InventoryTransactionsClient<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryTransactions.
     * @param {InventoryTransactionsDeleteManyArgs} args - Arguments to filter InventoryTransactions to delete.
     * @example
     * // Delete a few InventoryTransactions
     * const { count } = await prisma.inventoryTransactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryTransactionsDeleteManyArgs>(args?: SelectSubset<T, InventoryTransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryTransactionsUpdateManyArgs>(args: SelectSubset<T, InventoryTransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryTransactions.
     * @param {InventoryTransactionsUpsertArgs} args - Arguments to update or create a InventoryTransactions.
     * @example
     * // Update or create a InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransactions.upsert({
     *   create: {
     *     // ... data to create a InventoryTransactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryTransactions we want to update
     *   }
     * })
     */
    upsert<T extends InventoryTransactionsUpsertArgs>(args: SelectSubset<T, InventoryTransactionsUpsertArgs<ExtArgs>>): Prisma__InventoryTransactionsClient<$Result.GetResult<Prisma.$InventoryTransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsCountArgs} args - Arguments to filter InventoryTransactions to count.
     * @example
     * // Count the number of InventoryTransactions
     * const count = await prisma.inventoryTransactions.count({
     *   where: {
     *     // ... the filter for the InventoryTransactions we want to count
     *   }
     * })
    **/
    count<T extends InventoryTransactionsCountArgs>(
      args?: Subset<T, InventoryTransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryTransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryTransactionsAggregateArgs>(args: Subset<T, InventoryTransactionsAggregateArgs>): Prisma.PrismaPromise<GetInventoryTransactionsAggregateType<T>>

    /**
     * Group by InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionsGroupByArgs} args - Group by arguments.
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
      T extends InventoryTransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryTransactionsGroupByArgs['orderBy'] }
        : { orderBy?: InventoryTransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryTransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryTransactions model
   */
  readonly fields: InventoryTransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryTransactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryTransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventoryItem<T extends InventoryItemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryItemsDefaultArgs<ExtArgs>>): Prisma__InventoryItemsClient<$Result.GetResult<Prisma.$InventoryItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    relatedOrder<T extends InventoryTransactions$relatedOrderArgs<ExtArgs> = {}>(args?: Subset<T, InventoryTransactions$relatedOrderArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InventoryTransactions model
   */
  interface InventoryTransactionsFieldRefs {
    readonly id: FieldRef<"InventoryTransactions", 'Int'>
    readonly inventoryItemId: FieldRef<"InventoryTransactions", 'Int'>
    readonly quantityChange: FieldRef<"InventoryTransactions", 'Float'>
    readonly transactionType: FieldRef<"InventoryTransactions", 'TransactionType'>
    readonly relatedOrderId: FieldRef<"InventoryTransactions", 'Int'>
    readonly notes: FieldRef<"InventoryTransactions", 'String'>
    readonly createdById: FieldRef<"InventoryTransactions", 'Int'>
    readonly createdAt: FieldRef<"InventoryTransactions", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryTransactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryTransactions findUnique
   */
  export type InventoryTransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where: InventoryTransactionsWhereUniqueInput
  }

  /**
   * InventoryTransactions findUniqueOrThrow
   */
  export type InventoryTransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where: InventoryTransactionsWhereUniqueInput
  }

  /**
   * InventoryTransactions findFirst
   */
  export type InventoryTransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where?: InventoryTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionsOrderByWithRelationInput | InventoryTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionsWhereUniqueInput
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
    distinct?: InventoryTransactionsScalarFieldEnum | InventoryTransactionsScalarFieldEnum[]
  }

  /**
   * InventoryTransactions findFirstOrThrow
   */
  export type InventoryTransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where?: InventoryTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionsOrderByWithRelationInput | InventoryTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionsWhereUniqueInput
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
    distinct?: InventoryTransactionsScalarFieldEnum | InventoryTransactionsScalarFieldEnum[]
  }

  /**
   * InventoryTransactions findMany
   */
  export type InventoryTransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where?: InventoryTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionsOrderByWithRelationInput | InventoryTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryTransactions.
     */
    cursor?: InventoryTransactionsWhereUniqueInput
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
    distinct?: InventoryTransactionsScalarFieldEnum | InventoryTransactionsScalarFieldEnum[]
  }

  /**
   * InventoryTransactions create
   */
  export type InventoryTransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryTransactions.
     */
    data: XOR<InventoryTransactionsCreateInput, InventoryTransactionsUncheckedCreateInput>
  }

  /**
   * InventoryTransactions createMany
   */
  export type InventoryTransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryTransactions.
     */
    data: InventoryTransactionsCreateManyInput | InventoryTransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryTransactions update
   */
  export type InventoryTransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryTransactions.
     */
    data: XOR<InventoryTransactionsUpdateInput, InventoryTransactionsUncheckedUpdateInput>
    /**
     * Choose, which InventoryTransactions to update.
     */
    where: InventoryTransactionsWhereUniqueInput
  }

  /**
   * InventoryTransactions updateMany
   */
  export type InventoryTransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryTransactions.
     */
    data: XOR<InventoryTransactionsUpdateManyMutationInput, InventoryTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which InventoryTransactions to update
     */
    where?: InventoryTransactionsWhereInput
    /**
     * Limit how many InventoryTransactions to update.
     */
    limit?: number
  }

  /**
   * InventoryTransactions upsert
   */
  export type InventoryTransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryTransactions to update in case it exists.
     */
    where: InventoryTransactionsWhereUniqueInput
    /**
     * In case the InventoryTransactions found by the `where` argument doesn't exist, create a new InventoryTransactions with this data.
     */
    create: XOR<InventoryTransactionsCreateInput, InventoryTransactionsUncheckedCreateInput>
    /**
     * In case the InventoryTransactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryTransactionsUpdateInput, InventoryTransactionsUncheckedUpdateInput>
  }

  /**
   * InventoryTransactions delete
   */
  export type InventoryTransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
    /**
     * Filter which InventoryTransactions to delete.
     */
    where: InventoryTransactionsWhereUniqueInput
  }

  /**
   * InventoryTransactions deleteMany
   */
  export type InventoryTransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransactions to delete
     */
    where?: InventoryTransactionsWhereInput
    /**
     * Limit how many InventoryTransactions to delete.
     */
    limit?: number
  }

  /**
   * InventoryTransactions.relatedOrder
   */
  export type InventoryTransactions$relatedOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
  }

  /**
   * InventoryTransactions without action
   */
  export type InventoryTransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransactions
     */
    select?: InventoryTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransactions
     */
    omit?: InventoryTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionsInclude<ExtArgs> | null
  }


  /**
   * Model Reservations
   */

  export type AggregateReservations = {
    _count: ReservationsCountAggregateOutputType | null
    _avg: ReservationsAvgAggregateOutputType | null
    _sum: ReservationsSumAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  export type ReservationsAvgAggregateOutputType = {
    id: number | null
    partySize: number | null
    tableId: number | null
  }

  export type ReservationsSumAggregateOutputType = {
    id: number | null
    partySize: number | null
    tableId: number | null
  }

  export type ReservationsMinAggregateOutputType = {
    id: number | null
    customerName: string | null
    contactNumber: string | null
    email: string | null
    partySize: number | null
    reservationTime: Date | null
    tableId: number | null
    status: $Enums.ReservationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationsMaxAggregateOutputType = {
    id: number | null
    customerName: string | null
    contactNumber: string | null
    email: string | null
    partySize: number | null
    reservationTime: Date | null
    tableId: number | null
    status: $Enums.ReservationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationsCountAggregateOutputType = {
    id: number
    customerName: number
    contactNumber: number
    email: number
    partySize: number
    reservationTime: number
    tableId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationsAvgAggregateInputType = {
    id?: true
    partySize?: true
    tableId?: true
  }

  export type ReservationsSumAggregateInputType = {
    id?: true
    partySize?: true
    tableId?: true
  }

  export type ReservationsMinAggregateInputType = {
    id?: true
    customerName?: true
    contactNumber?: true
    email?: true
    partySize?: true
    reservationTime?: true
    tableId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationsMaxAggregateInputType = {
    id?: true
    customerName?: true
    contactNumber?: true
    email?: true
    partySize?: true
    reservationTime?: true
    tableId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationsCountAggregateInputType = {
    id?: true
    customerName?: true
    contactNumber?: true
    email?: true
    partySize?: true
    reservationTime?: true
    tableId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to aggregate.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationsWhereUniqueInput
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
    _count?: true | ReservationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationsMaxAggregateInputType
  }

  export type GetReservationsAggregateType<T extends ReservationsAggregateArgs> = {
        [P in keyof T & keyof AggregateReservations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservations[P]>
      : GetScalarType<T[P], AggregateReservations[P]>
  }




  export type ReservationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationsWhereInput
    orderBy?: ReservationsOrderByWithAggregationInput | ReservationsOrderByWithAggregationInput[]
    by: ReservationsScalarFieldEnum[] | ReservationsScalarFieldEnum
    having?: ReservationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationsCountAggregateInputType | true
    _avg?: ReservationsAvgAggregateInputType
    _sum?: ReservationsSumAggregateInputType
    _min?: ReservationsMinAggregateInputType
    _max?: ReservationsMaxAggregateInputType
  }

  export type ReservationsGroupByOutputType = {
    id: number
    customerName: string
    contactNumber: string
    email: string | null
    partySize: number
    reservationTime: Date
    tableId: number | null
    status: $Enums.ReservationStatus
    createdAt: Date
    updatedAt: Date
    _count: ReservationsCountAggregateOutputType | null
    _avg: ReservationsAvgAggregateOutputType | null
    _sum: ReservationsSumAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  type GetReservationsGroupByPayload<T extends ReservationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
        }
      >
    >


  export type ReservationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    contactNumber?: boolean
    email?: boolean
    partySize?: boolean
    reservationTime?: boolean
    tableId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | Reservations$tableArgs<ExtArgs>
  }, ExtArgs["result"]["reservations"]>



  export type ReservationsSelectScalar = {
    id?: boolean
    customerName?: boolean
    contactNumber?: boolean
    email?: boolean
    partySize?: boolean
    reservationTime?: boolean
    tableId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerName" | "contactNumber" | "email" | "partySize" | "reservationTime" | "tableId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["reservations"]>
  export type ReservationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | Reservations$tableArgs<ExtArgs>
  }

  export type $ReservationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservations"
    objects: {
      table: Prisma.$TablesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerName: string
      contactNumber: string
      email: string | null
      partySize: number
      reservationTime: Date
      tableId: number | null
      status: $Enums.ReservationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservations"]>
    composites: {}
  }

  type ReservationsGetPayload<S extends boolean | null | undefined | ReservationsDefaultArgs> = $Result.GetResult<Prisma.$ReservationsPayload, S>

  type ReservationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationsCountAggregateInputType | true
    }

  export interface ReservationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservations'], meta: { name: 'Reservations' } }
    /**
     * Find zero or one Reservations that matches the filter.
     * @param {ReservationsFindUniqueArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationsFindUniqueArgs>(args: SelectSubset<T, ReservationsFindUniqueArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationsFindUniqueOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindFirstArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationsFindFirstArgs>(args?: SelectSubset<T, ReservationsFindFirstArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindFirstOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservations.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationsWithIdOnly = await prisma.reservations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationsFindManyArgs>(args?: SelectSubset<T, ReservationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservations.
     * @param {ReservationsCreateArgs} args - Arguments to create a Reservations.
     * @example
     * // Create one Reservations
     * const Reservations = await prisma.reservations.create({
     *   data: {
     *     // ... data to create a Reservations
     *   }
     * })
     * 
     */
    create<T extends ReservationsCreateArgs>(args: SelectSubset<T, ReservationsCreateArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationsCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservations = await prisma.reservations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationsCreateManyArgs>(args?: SelectSubset<T, ReservationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservations.
     * @param {ReservationsDeleteArgs} args - Arguments to delete one Reservations.
     * @example
     * // Delete one Reservations
     * const Reservations = await prisma.reservations.delete({
     *   where: {
     *     // ... filter to delete one Reservations
     *   }
     * })
     * 
     */
    delete<T extends ReservationsDeleteArgs>(args: SelectSubset<T, ReservationsDeleteArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservations.
     * @param {ReservationsUpdateArgs} args - Arguments to update one Reservations.
     * @example
     * // Update one Reservations
     * const reservations = await prisma.reservations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationsUpdateArgs>(args: SelectSubset<T, ReservationsUpdateArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationsDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationsDeleteManyArgs>(args?: SelectSubset<T, ReservationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservations = await prisma.reservations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationsUpdateManyArgs>(args: SelectSubset<T, ReservationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservations.
     * @param {ReservationsUpsertArgs} args - Arguments to update or create a Reservations.
     * @example
     * // Update or create a Reservations
     * const reservations = await prisma.reservations.upsert({
     *   create: {
     *     // ... data to create a Reservations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservations we want to update
     *   }
     * })
     */
    upsert<T extends ReservationsUpsertArgs>(args: SelectSubset<T, ReservationsUpsertArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservations.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationsCountArgs>(
      args?: Subset<T, ReservationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationsAggregateArgs>(args: Subset<T, ReservationsAggregateArgs>): Prisma.PrismaPromise<GetReservationsAggregateType<T>>

    /**
     * Group by Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsGroupByArgs} args - Group by arguments.
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
      T extends ReservationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationsGroupByArgs['orderBy'] }
        : { orderBy?: ReservationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservations model
   */
  readonly fields: ReservationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends Reservations$tableArgs<ExtArgs> = {}>(args?: Subset<T, Reservations$tableArgs<ExtArgs>>): Prisma__TablesClient<$Result.GetResult<Prisma.$TablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reservations model
   */
  interface ReservationsFieldRefs {
    readonly id: FieldRef<"Reservations", 'Int'>
    readonly customerName: FieldRef<"Reservations", 'String'>
    readonly contactNumber: FieldRef<"Reservations", 'String'>
    readonly email: FieldRef<"Reservations", 'String'>
    readonly partySize: FieldRef<"Reservations", 'Int'>
    readonly reservationTime: FieldRef<"Reservations", 'DateTime'>
    readonly tableId: FieldRef<"Reservations", 'Int'>
    readonly status: FieldRef<"Reservations", 'ReservationStatus'>
    readonly createdAt: FieldRef<"Reservations", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservations findUnique
   */
  export type ReservationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations findUniqueOrThrow
   */
  export type ReservationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations findFirst
   */
  export type ReservationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
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
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations findFirstOrThrow
   */
  export type ReservationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
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
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations findMany
   */
  export type ReservationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
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
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations create
   */
  export type ReservationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservations.
     */
    data: XOR<ReservationsCreateInput, ReservationsUncheckedCreateInput>
  }

  /**
   * Reservations createMany
   */
  export type ReservationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationsCreateManyInput | ReservationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservations update
   */
  export type ReservationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservations.
     */
    data: XOR<ReservationsUpdateInput, ReservationsUncheckedUpdateInput>
    /**
     * Choose, which Reservations to update.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations updateMany
   */
  export type ReservationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationsWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservations upsert
   */
  export type ReservationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservations to update in case it exists.
     */
    where: ReservationsWhereUniqueInput
    /**
     * In case the Reservations found by the `where` argument doesn't exist, create a new Reservations with this data.
     */
    create: XOR<ReservationsCreateInput, ReservationsUncheckedCreateInput>
    /**
     * In case the Reservations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationsUpdateInput, ReservationsUncheckedUpdateInput>
  }

  /**
   * Reservations delete
   */
  export type ReservationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
    /**
     * Filter which Reservations to delete.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations deleteMany
   */
  export type ReservationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationsWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservations.table
   */
  export type Reservations$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tables
     */
    select?: TablesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tables
     */
    omit?: TablesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TablesInclude<ExtArgs> | null
    where?: TablesWhereInput
  }

  /**
   * Reservations without action
   */
  export type ReservationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationsInclude<ExtArgs> | null
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


  export const CoursesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const MenuItemsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    categoryId: 'categoryId',
    isCourseItem: 'isCourseItem',
    isExtraItem: 'isExtraItem',
    stockQuantity: 'stockQuantity',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuItemsScalarFieldEnum = (typeof MenuItemsScalarFieldEnum)[keyof typeof MenuItemsScalarFieldEnum]


  export const TablesScalarFieldEnum: {
    id: 'id',
    tableNumber: 'tableNumber',
    capacity: 'capacity',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TablesScalarFieldEnum = (typeof TablesScalarFieldEnum)[keyof typeof TablesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    tableId: 'tableId',
    serverId: 'serverId',
    orderStatus: 'orderStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderSeatsScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    seatNumber: 'seatNumber',
    customerName: 'customerName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderSeatsScalarFieldEnum = (typeof OrderSeatsScalarFieldEnum)[keyof typeof OrderSeatsScalarFieldEnum]


  export const OrderItemsScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    seatId: 'seatId',
    itemId: 'itemId',
    courseId: 'courseId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    itemStatus: 'itemStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemsScalarFieldEnum = (typeof OrderItemsScalarFieldEnum)[keyof typeof OrderItemsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    paymentType: 'paymentType',
    paymentMethod: 'paymentMethod',
    totalAmount: 'totalAmount',
    paymentStatus: 'paymentStatus',
    qrCodeData: 'qrCodeData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const PaymentDetailsScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    seatId: 'seatId',
    amount: 'amount',
    isCoursePayment: 'isCoursePayment',
    isExtraPayment: 'isExtraPayment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentDetailsScalarFieldEnum = (typeof PaymentDetailsScalarFieldEnum)[keyof typeof PaymentDetailsScalarFieldEnum]


  export const InventoryItemsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    categoryId: 'categoryId',
    quantity: 'quantity',
    unit: 'unit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryItemsScalarFieldEnum = (typeof InventoryItemsScalarFieldEnum)[keyof typeof InventoryItemsScalarFieldEnum]


  export const InventoryTransactionsScalarFieldEnum: {
    id: 'id',
    inventoryItemId: 'inventoryItemId',
    quantityChange: 'quantityChange',
    transactionType: 'transactionType',
    relatedOrderId: 'relatedOrderId',
    notes: 'notes',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryTransactionsScalarFieldEnum = (typeof InventoryTransactionsScalarFieldEnum)[keyof typeof InventoryTransactionsScalarFieldEnum]


  export const ReservationsScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    contactNumber: 'contactNumber',
    email: 'email',
    partySize: 'partySize',
    reservationTime: 'reservationTime',
    tableId: 'tableId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationsScalarFieldEnum = (typeof ReservationsScalarFieldEnum)[keyof typeof ReservationsScalarFieldEnum]


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


  export const CoursesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type CoursesOrderByRelevanceFieldEnum = (typeof CoursesOrderByRelevanceFieldEnum)[keyof typeof CoursesOrderByRelevanceFieldEnum]


  export const CategoriesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type CategoriesOrderByRelevanceFieldEnum = (typeof CategoriesOrderByRelevanceFieldEnum)[keyof typeof CategoriesOrderByRelevanceFieldEnum]


  export const MenuItemsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type MenuItemsOrderByRelevanceFieldEnum = (typeof MenuItemsOrderByRelevanceFieldEnum)[keyof typeof MenuItemsOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    name: 'name'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const OrderSeatsOrderByRelevanceFieldEnum: {
    customerName: 'customerName'
  };

  export type OrderSeatsOrderByRelevanceFieldEnum = (typeof OrderSeatsOrderByRelevanceFieldEnum)[keyof typeof OrderSeatsOrderByRelevanceFieldEnum]


  export const PaymentsOrderByRelevanceFieldEnum: {
    qrCodeData: 'qrCodeData'
  };

  export type PaymentsOrderByRelevanceFieldEnum = (typeof PaymentsOrderByRelevanceFieldEnum)[keyof typeof PaymentsOrderByRelevanceFieldEnum]


  export const InventoryItemsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    unit: 'unit'
  };

  export type InventoryItemsOrderByRelevanceFieldEnum = (typeof InventoryItemsOrderByRelevanceFieldEnum)[keyof typeof InventoryItemsOrderByRelevanceFieldEnum]


  export const InventoryTransactionsOrderByRelevanceFieldEnum: {
    notes: 'notes'
  };

  export type InventoryTransactionsOrderByRelevanceFieldEnum = (typeof InventoryTransactionsOrderByRelevanceFieldEnum)[keyof typeof InventoryTransactionsOrderByRelevanceFieldEnum]


  export const ReservationsOrderByRelevanceFieldEnum: {
    customerName: 'customerName',
    contactNumber: 'contactNumber',
    email: 'email'
  };

  export type ReservationsOrderByRelevanceFieldEnum = (typeof ReservationsOrderByRelevanceFieldEnum)[keyof typeof ReservationsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TableStatus'
   */
  export type EnumTableStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TableStatus'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'PaymentType'
   */
  export type EnumPaymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentType'>
    


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
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    
  /**
   * Deep Input Types
   */


  export type CoursesWhereInput = {
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    id?: IntFilter<"Courses"> | number
    name?: StringFilter<"Courses"> | string
    description?: StringNullableFilter<"Courses"> | string | null
    price?: FloatFilter<"Courses"> | number
    isActive?: BoolFilter<"Courses"> | boolean
    createdAt?: DateTimeFilter<"Courses"> | Date | string
    updatedAt?: DateTimeFilter<"Courses"> | Date | string
    orderItems?: OrderItemsListRelationFilter
  }

  export type CoursesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderItems?: OrderItemsOrderByRelationAggregateInput
    _relevance?: CoursesOrderByRelevanceInput
  }

  export type CoursesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    name?: StringFilter<"Courses"> | string
    description?: StringNullableFilter<"Courses"> | string | null
    price?: FloatFilter<"Courses"> | number
    isActive?: BoolFilter<"Courses"> | boolean
    createdAt?: DateTimeFilter<"Courses"> | Date | string
    updatedAt?: DateTimeFilter<"Courses"> | Date | string
    orderItems?: OrderItemsListRelationFilter
  }, "id">

  export type CoursesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoursesCountOrderByAggregateInput
    _avg?: CoursesAvgOrderByAggregateInput
    _max?: CoursesMaxOrderByAggregateInput
    _min?: CoursesMinOrderByAggregateInput
    _sum?: CoursesSumOrderByAggregateInput
  }

  export type CoursesScalarWhereWithAggregatesInput = {
    AND?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    OR?: CoursesScalarWhereWithAggregatesInput[]
    NOT?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Courses"> | number
    name?: StringWithAggregatesFilter<"Courses"> | string
    description?: StringNullableWithAggregatesFilter<"Courses"> | string | null
    price?: FloatWithAggregatesFilter<"Courses"> | number
    isActive?: BoolWithAggregatesFilter<"Courses"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Courses"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Courses"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    description?: StringNullableFilter<"Categories"> | string | null
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    menuItems?: MenuItemsListRelationFilter
    inventoryItems?: InventoryItemsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menuItems?: MenuItemsOrderByRelationAggregateInput
    inventoryItems?: InventoryItemsOrderByRelationAggregateInput
    _relevance?: CategoriesOrderByRelevanceInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    description?: StringNullableFilter<"Categories"> | string | null
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    menuItems?: MenuItemsListRelationFilter
    inventoryItems?: InventoryItemsListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    description?: StringNullableWithAggregatesFilter<"Categories"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type MenuItemsWhereInput = {
    AND?: MenuItemsWhereInput | MenuItemsWhereInput[]
    OR?: MenuItemsWhereInput[]
    NOT?: MenuItemsWhereInput | MenuItemsWhereInput[]
    id?: IntFilter<"MenuItems"> | number
    name?: StringFilter<"MenuItems"> | string
    description?: StringNullableFilter<"MenuItems"> | string | null
    price?: FloatFilter<"MenuItems"> | number
    categoryId?: IntFilter<"MenuItems"> | number
    isCourseItem?: BoolFilter<"MenuItems"> | boolean
    isExtraItem?: BoolFilter<"MenuItems"> | boolean
    stockQuantity?: IntFilter<"MenuItems"> | number
    isActive?: BoolFilter<"MenuItems"> | boolean
    createdAt?: DateTimeFilter<"MenuItems"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItems"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    orderItems?: OrderItemsListRelationFilter
  }

  export type MenuItemsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    isCourseItem?: SortOrder
    isExtraItem?: SortOrder
    stockQuantity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoriesOrderByWithRelationInput
    orderItems?: OrderItemsOrderByRelationAggregateInput
    _relevance?: MenuItemsOrderByRelevanceInput
  }

  export type MenuItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MenuItemsWhereInput | MenuItemsWhereInput[]
    OR?: MenuItemsWhereInput[]
    NOT?: MenuItemsWhereInput | MenuItemsWhereInput[]
    name?: StringFilter<"MenuItems"> | string
    description?: StringNullableFilter<"MenuItems"> | string | null
    price?: FloatFilter<"MenuItems"> | number
    categoryId?: IntFilter<"MenuItems"> | number
    isCourseItem?: BoolFilter<"MenuItems"> | boolean
    isExtraItem?: BoolFilter<"MenuItems"> | boolean
    stockQuantity?: IntFilter<"MenuItems"> | number
    isActive?: BoolFilter<"MenuItems"> | boolean
    createdAt?: DateTimeFilter<"MenuItems"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItems"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    orderItems?: OrderItemsListRelationFilter
  }, "id">

  export type MenuItemsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    isCourseItem?: SortOrder
    isExtraItem?: SortOrder
    stockQuantity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuItemsCountOrderByAggregateInput
    _avg?: MenuItemsAvgOrderByAggregateInput
    _max?: MenuItemsMaxOrderByAggregateInput
    _min?: MenuItemsMinOrderByAggregateInput
    _sum?: MenuItemsSumOrderByAggregateInput
  }

  export type MenuItemsScalarWhereWithAggregatesInput = {
    AND?: MenuItemsScalarWhereWithAggregatesInput | MenuItemsScalarWhereWithAggregatesInput[]
    OR?: MenuItemsScalarWhereWithAggregatesInput[]
    NOT?: MenuItemsScalarWhereWithAggregatesInput | MenuItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuItems"> | number
    name?: StringWithAggregatesFilter<"MenuItems"> | string
    description?: StringNullableWithAggregatesFilter<"MenuItems"> | string | null
    price?: FloatWithAggregatesFilter<"MenuItems"> | number
    categoryId?: IntWithAggregatesFilter<"MenuItems"> | number
    isCourseItem?: BoolWithAggregatesFilter<"MenuItems"> | boolean
    isExtraItem?: BoolWithAggregatesFilter<"MenuItems"> | boolean
    stockQuantity?: IntWithAggregatesFilter<"MenuItems"> | number
    isActive?: BoolWithAggregatesFilter<"MenuItems"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MenuItems"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItems"> | Date | string
  }

  export type TablesWhereInput = {
    AND?: TablesWhereInput | TablesWhereInput[]
    OR?: TablesWhereInput[]
    NOT?: TablesWhereInput | TablesWhereInput[]
    id?: IntFilter<"Tables"> | number
    tableNumber?: IntFilter<"Tables"> | number
    capacity?: IntFilter<"Tables"> | number
    status?: EnumTableStatusFilter<"Tables"> | $Enums.TableStatus
    createdAt?: DateTimeFilter<"Tables"> | Date | string
    updatedAt?: DateTimeFilter<"Tables"> | Date | string
    orders?: OrdersListRelationFilter
    reservations?: ReservationsListRelationFilter
  }

  export type TablesOrderByWithRelationInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrdersOrderByRelationAggregateInput
    reservations?: ReservationsOrderByRelationAggregateInput
  }

  export type TablesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TablesWhereInput | TablesWhereInput[]
    OR?: TablesWhereInput[]
    NOT?: TablesWhereInput | TablesWhereInput[]
    tableNumber?: IntFilter<"Tables"> | number
    capacity?: IntFilter<"Tables"> | number
    status?: EnumTableStatusFilter<"Tables"> | $Enums.TableStatus
    createdAt?: DateTimeFilter<"Tables"> | Date | string
    updatedAt?: DateTimeFilter<"Tables"> | Date | string
    orders?: OrdersListRelationFilter
    reservations?: ReservationsListRelationFilter
  }, "id">

  export type TablesOrderByWithAggregationInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TablesCountOrderByAggregateInput
    _avg?: TablesAvgOrderByAggregateInput
    _max?: TablesMaxOrderByAggregateInput
    _min?: TablesMinOrderByAggregateInput
    _sum?: TablesSumOrderByAggregateInput
  }

  export type TablesScalarWhereWithAggregatesInput = {
    AND?: TablesScalarWhereWithAggregatesInput | TablesScalarWhereWithAggregatesInput[]
    OR?: TablesScalarWhereWithAggregatesInput[]
    NOT?: TablesScalarWhereWithAggregatesInput | TablesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tables"> | number
    tableNumber?: IntWithAggregatesFilter<"Tables"> | number
    capacity?: IntWithAggregatesFilter<"Tables"> | number
    status?: EnumTableStatusWithAggregatesFilter<"Tables"> | $Enums.TableStatus
    createdAt?: DateTimeWithAggregatesFilter<"Tables"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tables"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    isActive?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    orders?: OrdersListRelationFilter
    inventoryTransactions?: InventoryTransactionsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrdersOrderByRelationAggregateInput
    inventoryTransactions?: InventoryTransactionsOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    isActive?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    orders?: OrdersListRelationFilter
    inventoryTransactions?: InventoryTransactionsListRelationFilter
  }, "id" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumUserRoleWithAggregatesFilter<"Users"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"Users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    tableId?: IntFilter<"Orders"> | number
    serverId?: IntFilter<"Orders"> | number
    orderStatus?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    table?: XOR<TablesScalarRelationFilter, TablesWhereInput>
    server?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    orderSeats?: OrderSeatsListRelationFilter
    orderItems?: OrderItemsListRelationFilter
    payments?: PaymentsListRelationFilter
    inventoryTransactions?: InventoryTransactionsListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    tableId?: SortOrder
    serverId?: SortOrder
    orderStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    table?: TablesOrderByWithRelationInput
    server?: UsersOrderByWithRelationInput
    orderSeats?: OrderSeatsOrderByRelationAggregateInput
    orderItems?: OrderItemsOrderByRelationAggregateInput
    payments?: PaymentsOrderByRelationAggregateInput
    inventoryTransactions?: InventoryTransactionsOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    tableId?: IntFilter<"Orders"> | number
    serverId?: IntFilter<"Orders"> | number
    orderStatus?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    table?: XOR<TablesScalarRelationFilter, TablesWhereInput>
    server?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    orderSeats?: OrderSeatsListRelationFilter
    orderItems?: OrderItemsListRelationFilter
    payments?: PaymentsListRelationFilter
    inventoryTransactions?: InventoryTransactionsListRelationFilter
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    tableId?: SortOrder
    serverId?: SortOrder
    orderStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    tableId?: IntWithAggregatesFilter<"Orders"> | number
    serverId?: IntWithAggregatesFilter<"Orders"> | number
    orderStatus?: EnumOrderStatusWithAggregatesFilter<"Orders"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type OrderSeatsWhereInput = {
    AND?: OrderSeatsWhereInput | OrderSeatsWhereInput[]
    OR?: OrderSeatsWhereInput[]
    NOT?: OrderSeatsWhereInput | OrderSeatsWhereInput[]
    id?: IntFilter<"OrderSeats"> | number
    orderId?: IntFilter<"OrderSeats"> | number
    seatNumber?: IntFilter<"OrderSeats"> | number
    customerName?: StringNullableFilter<"OrderSeats"> | string | null
    createdAt?: DateTimeFilter<"OrderSeats"> | Date | string
    updatedAt?: DateTimeFilter<"OrderSeats"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    orderItems?: OrderItemsListRelationFilter
    paymentDetails?: PaymentDetailsListRelationFilter
  }

  export type OrderSeatsOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatNumber?: SortOrder
    customerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrdersOrderByWithRelationInput
    orderItems?: OrderItemsOrderByRelationAggregateInput
    paymentDetails?: PaymentDetailsOrderByRelationAggregateInput
    _relevance?: OrderSeatsOrderByRelevanceInput
  }

  export type OrderSeatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderSeatsWhereInput | OrderSeatsWhereInput[]
    OR?: OrderSeatsWhereInput[]
    NOT?: OrderSeatsWhereInput | OrderSeatsWhereInput[]
    orderId?: IntFilter<"OrderSeats"> | number
    seatNumber?: IntFilter<"OrderSeats"> | number
    customerName?: StringNullableFilter<"OrderSeats"> | string | null
    createdAt?: DateTimeFilter<"OrderSeats"> | Date | string
    updatedAt?: DateTimeFilter<"OrderSeats"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    orderItems?: OrderItemsListRelationFilter
    paymentDetails?: PaymentDetailsListRelationFilter
  }, "id">

  export type OrderSeatsOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatNumber?: SortOrder
    customerName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderSeatsCountOrderByAggregateInput
    _avg?: OrderSeatsAvgOrderByAggregateInput
    _max?: OrderSeatsMaxOrderByAggregateInput
    _min?: OrderSeatsMinOrderByAggregateInput
    _sum?: OrderSeatsSumOrderByAggregateInput
  }

  export type OrderSeatsScalarWhereWithAggregatesInput = {
    AND?: OrderSeatsScalarWhereWithAggregatesInput | OrderSeatsScalarWhereWithAggregatesInput[]
    OR?: OrderSeatsScalarWhereWithAggregatesInput[]
    NOT?: OrderSeatsScalarWhereWithAggregatesInput | OrderSeatsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderSeats"> | number
    orderId?: IntWithAggregatesFilter<"OrderSeats"> | number
    seatNumber?: IntWithAggregatesFilter<"OrderSeats"> | number
    customerName?: StringNullableWithAggregatesFilter<"OrderSeats"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrderSeats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderSeats"> | Date | string
  }

  export type OrderItemsWhereInput = {
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    id?: IntFilter<"OrderItems"> | number
    orderId?: IntFilter<"OrderItems"> | number
    seatId?: IntFilter<"OrderItems"> | number
    itemId?: IntFilter<"OrderItems"> | number
    courseId?: IntNullableFilter<"OrderItems"> | number | null
    quantity?: IntFilter<"OrderItems"> | number
    unitPrice?: FloatFilter<"OrderItems"> | number
    itemStatus?: EnumItemStatusFilter<"OrderItems"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItems"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    seat?: XOR<OrderSeatsScalarRelationFilter, OrderSeatsWhereInput>
    menuItem?: XOR<MenuItemsScalarRelationFilter, MenuItemsWhereInput>
    course?: XOR<CoursesNullableScalarRelationFilter, CoursesWhereInput> | null
  }

  export type OrderItemsOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatId?: SortOrder
    itemId?: SortOrder
    courseId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    itemStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrdersOrderByWithRelationInput
    seat?: OrderSeatsOrderByWithRelationInput
    menuItem?: MenuItemsOrderByWithRelationInput
    course?: CoursesOrderByWithRelationInput
  }

  export type OrderItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemsWhereInput | OrderItemsWhereInput[]
    OR?: OrderItemsWhereInput[]
    NOT?: OrderItemsWhereInput | OrderItemsWhereInput[]
    orderId?: IntFilter<"OrderItems"> | number
    seatId?: IntFilter<"OrderItems"> | number
    itemId?: IntFilter<"OrderItems"> | number
    courseId?: IntNullableFilter<"OrderItems"> | number | null
    quantity?: IntFilter<"OrderItems"> | number
    unitPrice?: FloatFilter<"OrderItems"> | number
    itemStatus?: EnumItemStatusFilter<"OrderItems"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItems"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    seat?: XOR<OrderSeatsScalarRelationFilter, OrderSeatsWhereInput>
    menuItem?: XOR<MenuItemsScalarRelationFilter, MenuItemsWhereInput>
    course?: XOR<CoursesNullableScalarRelationFilter, CoursesWhereInput> | null
  }, "id">

  export type OrderItemsOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatId?: SortOrder
    itemId?: SortOrder
    courseId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    itemStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderItemsCountOrderByAggregateInput
    _avg?: OrderItemsAvgOrderByAggregateInput
    _max?: OrderItemsMaxOrderByAggregateInput
    _min?: OrderItemsMinOrderByAggregateInput
    _sum?: OrderItemsSumOrderByAggregateInput
  }

  export type OrderItemsScalarWhereWithAggregatesInput = {
    AND?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    OR?: OrderItemsScalarWhereWithAggregatesInput[]
    NOT?: OrderItemsScalarWhereWithAggregatesInput | OrderItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItems"> | number
    orderId?: IntWithAggregatesFilter<"OrderItems"> | number
    seatId?: IntWithAggregatesFilter<"OrderItems"> | number
    itemId?: IntWithAggregatesFilter<"OrderItems"> | number
    courseId?: IntNullableWithAggregatesFilter<"OrderItems"> | number | null
    quantity?: IntWithAggregatesFilter<"OrderItems"> | number
    unitPrice?: FloatWithAggregatesFilter<"OrderItems"> | number
    itemStatus?: EnumItemStatusWithAggregatesFilter<"OrderItems"> | $Enums.ItemStatus
    createdAt?: DateTimeWithAggregatesFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItems"> | Date | string
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: IntFilter<"Payments"> | number
    orderId?: IntFilter<"Payments"> | number
    paymentType?: EnumPaymentTypeFilter<"Payments"> | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFilter<"Payments"> | $Enums.PaymentMethod
    totalAmount?: FloatFilter<"Payments"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    qrCodeData?: StringNullableFilter<"Payments"> | string | null
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    updatedAt?: DateTimeFilter<"Payments"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    paymentDetails?: PaymentDetailsListRelationFilter
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentType?: SortOrder
    paymentMethod?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    qrCodeData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrdersOrderByWithRelationInput
    paymentDetails?: PaymentDetailsOrderByRelationAggregateInput
    _relevance?: PaymentsOrderByRelevanceInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    orderId?: IntFilter<"Payments"> | number
    paymentType?: EnumPaymentTypeFilter<"Payments"> | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFilter<"Payments"> | $Enums.PaymentMethod
    totalAmount?: FloatFilter<"Payments"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    qrCodeData?: StringNullableFilter<"Payments"> | string | null
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    updatedAt?: DateTimeFilter<"Payments"> | Date | string
    order?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    paymentDetails?: PaymentDetailsListRelationFilter
  }, "id">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentType?: SortOrder
    paymentMethod?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    qrCodeData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payments"> | number
    orderId?: IntWithAggregatesFilter<"Payments"> | number
    paymentType?: EnumPaymentTypeWithAggregatesFilter<"Payments"> | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Payments"> | $Enums.PaymentMethod
    totalAmount?: FloatWithAggregatesFilter<"Payments"> | number
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Payments"> | $Enums.PaymentStatus
    qrCodeData?: StringNullableWithAggregatesFilter<"Payments"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type PaymentDetailsWhereInput = {
    AND?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    OR?: PaymentDetailsWhereInput[]
    NOT?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    id?: IntFilter<"PaymentDetails"> | number
    paymentId?: IntFilter<"PaymentDetails"> | number
    seatId?: IntNullableFilter<"PaymentDetails"> | number | null
    amount?: FloatFilter<"PaymentDetails"> | number
    isCoursePayment?: BoolFilter<"PaymentDetails"> | boolean
    isExtraPayment?: BoolFilter<"PaymentDetails"> | boolean
    createdAt?: DateTimeFilter<"PaymentDetails"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentDetails"> | Date | string
    payment?: XOR<PaymentsScalarRelationFilter, PaymentsWhereInput>
    seat?: XOR<OrderSeatsNullableScalarRelationFilter, OrderSeatsWhereInput> | null
  }

  export type PaymentDetailsOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    seatId?: SortOrderInput | SortOrder
    amount?: SortOrder
    isCoursePayment?: SortOrder
    isExtraPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payment?: PaymentsOrderByWithRelationInput
    seat?: OrderSeatsOrderByWithRelationInput
  }

  export type PaymentDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    OR?: PaymentDetailsWhereInput[]
    NOT?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    paymentId?: IntFilter<"PaymentDetails"> | number
    seatId?: IntNullableFilter<"PaymentDetails"> | number | null
    amount?: FloatFilter<"PaymentDetails"> | number
    isCoursePayment?: BoolFilter<"PaymentDetails"> | boolean
    isExtraPayment?: BoolFilter<"PaymentDetails"> | boolean
    createdAt?: DateTimeFilter<"PaymentDetails"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentDetails"> | Date | string
    payment?: XOR<PaymentsScalarRelationFilter, PaymentsWhereInput>
    seat?: XOR<OrderSeatsNullableScalarRelationFilter, OrderSeatsWhereInput> | null
  }, "id">

  export type PaymentDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    seatId?: SortOrderInput | SortOrder
    amount?: SortOrder
    isCoursePayment?: SortOrder
    isExtraPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentDetailsCountOrderByAggregateInput
    _avg?: PaymentDetailsAvgOrderByAggregateInput
    _max?: PaymentDetailsMaxOrderByAggregateInput
    _min?: PaymentDetailsMinOrderByAggregateInput
    _sum?: PaymentDetailsSumOrderByAggregateInput
  }

  export type PaymentDetailsScalarWhereWithAggregatesInput = {
    AND?: PaymentDetailsScalarWhereWithAggregatesInput | PaymentDetailsScalarWhereWithAggregatesInput[]
    OR?: PaymentDetailsScalarWhereWithAggregatesInput[]
    NOT?: PaymentDetailsScalarWhereWithAggregatesInput | PaymentDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentDetails"> | number
    paymentId?: IntWithAggregatesFilter<"PaymentDetails"> | number
    seatId?: IntNullableWithAggregatesFilter<"PaymentDetails"> | number | null
    amount?: FloatWithAggregatesFilter<"PaymentDetails"> | number
    isCoursePayment?: BoolWithAggregatesFilter<"PaymentDetails"> | boolean
    isExtraPayment?: BoolWithAggregatesFilter<"PaymentDetails"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PaymentDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentDetails"> | Date | string
  }

  export type InventoryItemsWhereInput = {
    AND?: InventoryItemsWhereInput | InventoryItemsWhereInput[]
    OR?: InventoryItemsWhereInput[]
    NOT?: InventoryItemsWhereInput | InventoryItemsWhereInput[]
    id?: IntFilter<"InventoryItems"> | number
    name?: StringFilter<"InventoryItems"> | string
    description?: StringNullableFilter<"InventoryItems"> | string | null
    categoryId?: IntFilter<"InventoryItems"> | number
    quantity?: FloatFilter<"InventoryItems"> | number
    unit?: StringFilter<"InventoryItems"> | string
    createdAt?: DateTimeFilter<"InventoryItems"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItems"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    inventoryTransactions?: InventoryTransactionsListRelationFilter
  }

  export type InventoryItemsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoriesOrderByWithRelationInput
    inventoryTransactions?: InventoryTransactionsOrderByRelationAggregateInput
    _relevance?: InventoryItemsOrderByRelevanceInput
  }

  export type InventoryItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryItemsWhereInput | InventoryItemsWhereInput[]
    OR?: InventoryItemsWhereInput[]
    NOT?: InventoryItemsWhereInput | InventoryItemsWhereInput[]
    name?: StringFilter<"InventoryItems"> | string
    description?: StringNullableFilter<"InventoryItems"> | string | null
    categoryId?: IntFilter<"InventoryItems"> | number
    quantity?: FloatFilter<"InventoryItems"> | number
    unit?: StringFilter<"InventoryItems"> | string
    createdAt?: DateTimeFilter<"InventoryItems"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItems"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    inventoryTransactions?: InventoryTransactionsListRelationFilter
  }, "id">

  export type InventoryItemsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryItemsCountOrderByAggregateInput
    _avg?: InventoryItemsAvgOrderByAggregateInput
    _max?: InventoryItemsMaxOrderByAggregateInput
    _min?: InventoryItemsMinOrderByAggregateInput
    _sum?: InventoryItemsSumOrderByAggregateInput
  }

  export type InventoryItemsScalarWhereWithAggregatesInput = {
    AND?: InventoryItemsScalarWhereWithAggregatesInput | InventoryItemsScalarWhereWithAggregatesInput[]
    OR?: InventoryItemsScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemsScalarWhereWithAggregatesInput | InventoryItemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryItems"> | number
    name?: StringWithAggregatesFilter<"InventoryItems"> | string
    description?: StringNullableWithAggregatesFilter<"InventoryItems"> | string | null
    categoryId?: IntWithAggregatesFilter<"InventoryItems"> | number
    quantity?: FloatWithAggregatesFilter<"InventoryItems"> | number
    unit?: StringWithAggregatesFilter<"InventoryItems"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InventoryItems"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryItems"> | Date | string
  }

  export type InventoryTransactionsWhereInput = {
    AND?: InventoryTransactionsWhereInput | InventoryTransactionsWhereInput[]
    OR?: InventoryTransactionsWhereInput[]
    NOT?: InventoryTransactionsWhereInput | InventoryTransactionsWhereInput[]
    id?: IntFilter<"InventoryTransactions"> | number
    inventoryItemId?: IntFilter<"InventoryTransactions"> | number
    quantityChange?: FloatFilter<"InventoryTransactions"> | number
    transactionType?: EnumTransactionTypeFilter<"InventoryTransactions"> | $Enums.TransactionType
    relatedOrderId?: IntNullableFilter<"InventoryTransactions"> | number | null
    notes?: StringNullableFilter<"InventoryTransactions"> | string | null
    createdById?: IntFilter<"InventoryTransactions"> | number
    createdAt?: DateTimeFilter<"InventoryTransactions"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryTransactions"> | Date | string
    inventoryItem?: XOR<InventoryItemsScalarRelationFilter, InventoryItemsWhereInput>
    relatedOrder?: XOR<OrdersNullableScalarRelationFilter, OrdersWhereInput> | null
    createdBy?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type InventoryTransactionsOrderByWithRelationInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    quantityChange?: SortOrder
    transactionType?: SortOrder
    relatedOrderId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventoryItem?: InventoryItemsOrderByWithRelationInput
    relatedOrder?: OrdersOrderByWithRelationInput
    createdBy?: UsersOrderByWithRelationInput
    _relevance?: InventoryTransactionsOrderByRelevanceInput
  }

  export type InventoryTransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryTransactionsWhereInput | InventoryTransactionsWhereInput[]
    OR?: InventoryTransactionsWhereInput[]
    NOT?: InventoryTransactionsWhereInput | InventoryTransactionsWhereInput[]
    inventoryItemId?: IntFilter<"InventoryTransactions"> | number
    quantityChange?: FloatFilter<"InventoryTransactions"> | number
    transactionType?: EnumTransactionTypeFilter<"InventoryTransactions"> | $Enums.TransactionType
    relatedOrderId?: IntNullableFilter<"InventoryTransactions"> | number | null
    notes?: StringNullableFilter<"InventoryTransactions"> | string | null
    createdById?: IntFilter<"InventoryTransactions"> | number
    createdAt?: DateTimeFilter<"InventoryTransactions"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryTransactions"> | Date | string
    inventoryItem?: XOR<InventoryItemsScalarRelationFilter, InventoryItemsWhereInput>
    relatedOrder?: XOR<OrdersNullableScalarRelationFilter, OrdersWhereInput> | null
    createdBy?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type InventoryTransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    quantityChange?: SortOrder
    transactionType?: SortOrder
    relatedOrderId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryTransactionsCountOrderByAggregateInput
    _avg?: InventoryTransactionsAvgOrderByAggregateInput
    _max?: InventoryTransactionsMaxOrderByAggregateInput
    _min?: InventoryTransactionsMinOrderByAggregateInput
    _sum?: InventoryTransactionsSumOrderByAggregateInput
  }

  export type InventoryTransactionsScalarWhereWithAggregatesInput = {
    AND?: InventoryTransactionsScalarWhereWithAggregatesInput | InventoryTransactionsScalarWhereWithAggregatesInput[]
    OR?: InventoryTransactionsScalarWhereWithAggregatesInput[]
    NOT?: InventoryTransactionsScalarWhereWithAggregatesInput | InventoryTransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryTransactions"> | number
    inventoryItemId?: IntWithAggregatesFilter<"InventoryTransactions"> | number
    quantityChange?: FloatWithAggregatesFilter<"InventoryTransactions"> | number
    transactionType?: EnumTransactionTypeWithAggregatesFilter<"InventoryTransactions"> | $Enums.TransactionType
    relatedOrderId?: IntNullableWithAggregatesFilter<"InventoryTransactions"> | number | null
    notes?: StringNullableWithAggregatesFilter<"InventoryTransactions"> | string | null
    createdById?: IntWithAggregatesFilter<"InventoryTransactions"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InventoryTransactions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryTransactions"> | Date | string
  }

  export type ReservationsWhereInput = {
    AND?: ReservationsWhereInput | ReservationsWhereInput[]
    OR?: ReservationsWhereInput[]
    NOT?: ReservationsWhereInput | ReservationsWhereInput[]
    id?: IntFilter<"Reservations"> | number
    customerName?: StringFilter<"Reservations"> | string
    contactNumber?: StringFilter<"Reservations"> | string
    email?: StringNullableFilter<"Reservations"> | string | null
    partySize?: IntFilter<"Reservations"> | number
    reservationTime?: DateTimeFilter<"Reservations"> | Date | string
    tableId?: IntNullableFilter<"Reservations"> | number | null
    status?: EnumReservationStatusFilter<"Reservations"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservations"> | Date | string
    updatedAt?: DateTimeFilter<"Reservations"> | Date | string
    table?: XOR<TablesNullableScalarRelationFilter, TablesWhereInput> | null
  }

  export type ReservationsOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    partySize?: SortOrder
    reservationTime?: SortOrder
    tableId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    table?: TablesOrderByWithRelationInput
    _relevance?: ReservationsOrderByRelevanceInput
  }

  export type ReservationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservationsWhereInput | ReservationsWhereInput[]
    OR?: ReservationsWhereInput[]
    NOT?: ReservationsWhereInput | ReservationsWhereInput[]
    customerName?: StringFilter<"Reservations"> | string
    contactNumber?: StringFilter<"Reservations"> | string
    email?: StringNullableFilter<"Reservations"> | string | null
    partySize?: IntFilter<"Reservations"> | number
    reservationTime?: DateTimeFilter<"Reservations"> | Date | string
    tableId?: IntNullableFilter<"Reservations"> | number | null
    status?: EnumReservationStatusFilter<"Reservations"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservations"> | Date | string
    updatedAt?: DateTimeFilter<"Reservations"> | Date | string
    table?: XOR<TablesNullableScalarRelationFilter, TablesWhereInput> | null
  }, "id">

  export type ReservationsOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    partySize?: SortOrder
    reservationTime?: SortOrder
    tableId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationsCountOrderByAggregateInput
    _avg?: ReservationsAvgOrderByAggregateInput
    _max?: ReservationsMaxOrderByAggregateInput
    _min?: ReservationsMinOrderByAggregateInput
    _sum?: ReservationsSumOrderByAggregateInput
  }

  export type ReservationsScalarWhereWithAggregatesInput = {
    AND?: ReservationsScalarWhereWithAggregatesInput | ReservationsScalarWhereWithAggregatesInput[]
    OR?: ReservationsScalarWhereWithAggregatesInput[]
    NOT?: ReservationsScalarWhereWithAggregatesInput | ReservationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservations"> | number
    customerName?: StringWithAggregatesFilter<"Reservations"> | string
    contactNumber?: StringWithAggregatesFilter<"Reservations"> | string
    email?: StringNullableWithAggregatesFilter<"Reservations"> | string | null
    partySize?: IntWithAggregatesFilter<"Reservations"> | number
    reservationTime?: DateTimeWithAggregatesFilter<"Reservations"> | Date | string
    tableId?: IntNullableWithAggregatesFilter<"Reservations"> | number | null
    status?: EnumReservationStatusWithAggregatesFilter<"Reservations"> | $Enums.ReservationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Reservations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservations"> | Date | string
  }

  export type CoursesCreateInput = {
    name: string
    description?: string | null
    price: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsCreateNestedManyWithoutCourseInput
  }

  export type CoursesUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CoursesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUpdateManyWithoutCourseNestedInput
  }

  export type CoursesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CoursesCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItems?: MenuItemsCreateNestedManyWithoutCategoryInput
    inventoryItems?: InventoryItemsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItems?: MenuItemsUncheckedCreateNestedManyWithoutCategoryInput
    inventoryItems?: InventoryItemsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItems?: MenuItemsUpdateManyWithoutCategoryNestedInput
    inventoryItems?: InventoryItemsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItems?: MenuItemsUncheckedUpdateManyWithoutCategoryNestedInput
    inventoryItems?: InventoryItemsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemsCreateInput = {
    name: string
    description?: string | null
    price: number
    isCourseItem?: boolean
    isExtraItem?: boolean
    stockQuantity: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutMenuItemsInput
    orderItems?: OrderItemsCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    categoryId: number
    isCourseItem?: boolean
    isExtraItem?: boolean
    stockQuantity: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isCourseItem?: BoolFieldUpdateOperationsInput | boolean
    isExtraItem?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutMenuItemsNestedInput
    orderItems?: OrderItemsUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    isCourseItem?: BoolFieldUpdateOperationsInput | boolean
    isExtraItem?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    categoryId: number
    isCourseItem?: boolean
    isExtraItem?: boolean
    stockQuantity: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isCourseItem?: BoolFieldUpdateOperationsInput | boolean
    isExtraItem?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    isCourseItem?: BoolFieldUpdateOperationsInput | boolean
    isExtraItem?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TablesCreateInput = {
    tableNumber: number
    capacity: number
    status: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrdersCreateNestedManyWithoutTableInput
    reservations?: ReservationsCreateNestedManyWithoutTableInput
  }

  export type TablesUncheckedCreateInput = {
    id?: number
    tableNumber: number
    capacity: number
    status: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrdersUncheckedCreateNestedManyWithoutTableInput
    reservations?: ReservationsUncheckedCreateNestedManyWithoutTableInput
  }

  export type TablesUpdateInput = {
    tableNumber?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateManyWithoutTableNestedInput
    reservations?: ReservationsUpdateManyWithoutTableNestedInput
  }

  export type TablesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableNumber?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUncheckedUpdateManyWithoutTableNestedInput
    reservations?: ReservationsUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TablesCreateManyInput = {
    id?: number
    tableNumber: number
    capacity: number
    status: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TablesUpdateManyMutationInput = {
    tableNumber?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TablesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableNumber?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    username: string
    password: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrdersCreateNestedManyWithoutServerInput
    inventoryTransactions?: InventoryTransactionsCreateNestedManyWithoutCreatedByInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrdersUncheckedCreateNestedManyWithoutServerInput
    inventoryTransactions?: InventoryTransactionsUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateManyWithoutServerNestedInput
    inventoryTransactions?: InventoryTransactionsUpdateManyWithoutCreatedByNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUncheckedUpdateManyWithoutServerNestedInput
    inventoryTransactions?: InventoryTransactionsUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    username: string
    password: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateInput = {
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TablesCreateNestedOneWithoutOrdersInput
    server: UsersCreateNestedOneWithoutOrdersInput
    orderSeats?: OrderSeatsCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemsCreateNestedManyWithoutOrderInput
    payments?: PaymentsCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    tableId: number
    serverId: number
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orderSeats?: OrderSeatsUncheckedCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsUncheckedCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersUpdateInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TablesUpdateOneRequiredWithoutOrdersNestedInput
    server?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    orderSeats?: OrderSeatsUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemsUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUpdateManyWithoutRelatedOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSeats?: OrderSeatsUncheckedUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUncheckedUpdateManyWithoutRelatedOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: number
    tableId: number
    serverId: number
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderSeatsCreateInput = {
    seatNumber: number
    customerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrderSeatsInput
    orderItems?: OrderItemsCreateNestedManyWithoutSeatInput
    paymentDetails?: PaymentDetailsCreateNestedManyWithoutSeatInput
  }

  export type OrderSeatsUncheckedCreateInput = {
    id?: number
    orderId: number
    seatNumber: number
    customerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutSeatInput
    paymentDetails?: PaymentDetailsUncheckedCreateNestedManyWithoutSeatInput
  }

  export type OrderSeatsUpdateInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrderSeatsNestedInput
    orderItems?: OrderItemsUpdateManyWithoutSeatNestedInput
    paymentDetails?: PaymentDetailsUpdateManyWithoutSeatNestedInput
  }

  export type OrderSeatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUncheckedUpdateManyWithoutSeatNestedInput
    paymentDetails?: PaymentDetailsUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type OrderSeatsCreateManyInput = {
    id?: number
    orderId: number
    seatNumber: number
    customerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderSeatsUpdateManyMutationInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderSeatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateInput = {
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrderItemsInput
    seat: OrderSeatsCreateNestedOneWithoutOrderItemsInput
    menuItem: MenuItemsCreateNestedOneWithoutOrderItemsInput
    course?: CoursesCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateInput = {
    id?: number
    orderId: number
    seatId: number
    itemId: number
    courseId?: number | null
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrderItemsNestedInput
    seat?: OrderSeatsUpdateOneRequiredWithoutOrderItemsNestedInput
    menuItem?: MenuItemsUpdateOneRequiredWithoutOrderItemsNestedInput
    course?: CoursesUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateManyInput = {
    id?: number
    orderId: number
    seatId: number
    itemId: number
    courseId?: number | null
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateInput = {
    paymentType: $Enums.PaymentType
    paymentMethod: $Enums.PaymentMethod
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    qrCodeData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutPaymentsInput
    paymentDetails?: PaymentDetailsCreateNestedManyWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: number
    orderId: number
    paymentType: $Enums.PaymentType
    paymentMethod: $Enums.PaymentMethod
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    qrCodeData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentDetails?: PaymentDetailsUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentsUpdateInput = {
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutPaymentsNestedInput
    paymentDetails?: PaymentDetailsUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDetails?: PaymentDetailsUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentsCreateManyInput = {
    id?: number
    orderId: number
    paymentType: $Enums.PaymentType
    paymentMethod: $Enums.PaymentMethod
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    qrCodeData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsCreateInput = {
    amount: number
    isCoursePayment?: boolean
    isExtraPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentsCreateNestedOneWithoutPaymentDetailsInput
    seat?: OrderSeatsCreateNestedOneWithoutPaymentDetailsInput
  }

  export type PaymentDetailsUncheckedCreateInput = {
    id?: number
    paymentId: number
    seatId?: number | null
    amount: number
    isCoursePayment?: boolean
    isExtraPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailsUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    isCoursePayment?: BoolFieldUpdateOperationsInput | boolean
    isExtraPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentsUpdateOneRequiredWithoutPaymentDetailsNestedInput
    seat?: OrderSeatsUpdateOneWithoutPaymentDetailsNestedInput
  }

  export type PaymentDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    seatId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    isCoursePayment?: BoolFieldUpdateOperationsInput | boolean
    isExtraPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsCreateManyInput = {
    id?: number
    paymentId: number
    seatId?: number | null
    amount: number
    isCoursePayment?: boolean
    isExtraPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailsUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    isCoursePayment?: BoolFieldUpdateOperationsInput | boolean
    isExtraPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    seatId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    isCoursePayment?: BoolFieldUpdateOperationsInput | boolean
    isExtraPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemsCreateInput = {
    name: string
    description?: string | null
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutInventoryItemsInput
    inventoryTransactions?: InventoryTransactionsCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryTransactions?: InventoryTransactionsUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutInventoryItemsNestedInput
    inventoryTransactions?: InventoryTransactionsUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryTransactions?: InventoryTransactionsUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionsCreateInput = {
    quantityChange: number
    transactionType: $Enums.TransactionType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItem: InventoryItemsCreateNestedOneWithoutInventoryTransactionsInput
    relatedOrder?: OrdersCreateNestedOneWithoutInventoryTransactionsInput
    createdBy: UsersCreateNestedOneWithoutInventoryTransactionsInput
  }

  export type InventoryTransactionsUncheckedCreateInput = {
    id?: number
    inventoryItemId: number
    quantityChange: number
    transactionType: $Enums.TransactionType
    relatedOrderId?: number | null
    notes?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionsUpdateInput = {
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemsUpdateOneRequiredWithoutInventoryTransactionsNestedInput
    relatedOrder?: OrdersUpdateOneWithoutInventoryTransactionsNestedInput
    createdBy?: UsersUpdateOneRequiredWithoutInventoryTransactionsNestedInput
  }

  export type InventoryTransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    relatedOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionsCreateManyInput = {
    id?: number
    inventoryItemId: number
    quantityChange: number
    transactionType: $Enums.TransactionType
    relatedOrderId?: number | null
    notes?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionsUpdateManyMutationInput = {
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    relatedOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsCreateInput = {
    customerName: string
    contactNumber: string
    email?: string | null
    partySize: number
    reservationTime: Date | string
    status: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    table?: TablesCreateNestedOneWithoutReservationsInput
  }

  export type ReservationsUncheckedCreateInput = {
    id?: number
    customerName: string
    contactNumber: string
    email?: string | null
    partySize: number
    reservationTime: Date | string
    tableId?: number | null
    status: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationsUpdateInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TablesUpdateOneWithoutReservationsNestedInput
  }

  export type ReservationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsCreateManyInput = {
    id?: number
    customerName: string
    contactNumber: string
    email?: string | null
    partySize: number
    reservationTime: Date | string
    tableId?: number | null
    status: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationsUpdateManyMutationInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type OrderItemsListRelationFilter = {
    every?: OrderItemsWhereInput
    some?: OrderItemsWhereInput
    none?: OrderItemsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoursesOrderByRelevanceInput = {
    fields: CoursesOrderByRelevanceFieldEnum | CoursesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CoursesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursesAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type CoursesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursesSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MenuItemsListRelationFilter = {
    every?: MenuItemsWhereInput
    some?: MenuItemsWhereInput
    none?: MenuItemsWhereInput
  }

  export type InventoryItemsListRelationFilter = {
    every?: InventoryItemsWhereInput
    some?: InventoryItemsWhereInput
    none?: InventoryItemsWhereInput
  }

  export type MenuItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesOrderByRelevanceInput = {
    fields: CategoriesOrderByRelevanceFieldEnum | CategoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type MenuItemsOrderByRelevanceInput = {
    fields: MenuItemsOrderByRelevanceFieldEnum | MenuItemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MenuItemsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    isCourseItem?: SortOrder
    isExtraItem?: SortOrder
    stockQuantity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    stockQuantity?: SortOrder
  }

  export type MenuItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    isCourseItem?: SortOrder
    isExtraItem?: SortOrder
    stockQuantity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    isCourseItem?: SortOrder
    isExtraItem?: SortOrder
    stockQuantity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    stockQuantity?: SortOrder
  }

  export type EnumTableStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TableStatus | EnumTableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TableStatus[]
    notIn?: $Enums.TableStatus[]
    not?: NestedEnumTableStatusFilter<$PrismaModel> | $Enums.TableStatus
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type ReservationsListRelationFilter = {
    every?: ReservationsWhereInput
    some?: ReservationsWhereInput
    none?: ReservationsWhereInput
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TablesCountOrderByAggregateInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TablesAvgOrderByAggregateInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
  }

  export type TablesMaxOrderByAggregateInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TablesMinOrderByAggregateInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TablesSumOrderByAggregateInput = {
    id?: SortOrder
    tableNumber?: SortOrder
    capacity?: SortOrder
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type InventoryTransactionsListRelationFilter = {
    every?: InventoryTransactionsWhereInput
    some?: InventoryTransactionsWhereInput
    none?: InventoryTransactionsWhereInput
  }

  export type InventoryTransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type TablesScalarRelationFilter = {
    is?: TablesWhereInput
    isNot?: TablesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type OrderSeatsListRelationFilter = {
    every?: OrderSeatsWhereInput
    some?: OrderSeatsWhereInput
    none?: OrderSeatsWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: PaymentsWhereInput
    some?: PaymentsWhereInput
    none?: PaymentsWhereInput
  }

  export type OrderSeatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    serverId?: SortOrder
    orderStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    serverId?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    serverId?: SortOrder
    orderStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    serverId?: SortOrder
    orderStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
    serverId?: SortOrder
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

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type PaymentDetailsListRelationFilter = {
    every?: PaymentDetailsWhereInput
    some?: PaymentDetailsWhereInput
    none?: PaymentDetailsWhereInput
  }

  export type PaymentDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderSeatsOrderByRelevanceInput = {
    fields: OrderSeatsOrderByRelevanceFieldEnum | OrderSeatsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderSeatsCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatNumber?: SortOrder
    customerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSeatsAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatNumber?: SortOrder
  }

  export type OrderSeatsMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatNumber?: SortOrder
    customerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSeatsMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatNumber?: SortOrder
    customerName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSeatsSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatNumber?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type OrderSeatsScalarRelationFilter = {
    is?: OrderSeatsWhereInput
    isNot?: OrderSeatsWhereInput
  }

  export type MenuItemsScalarRelationFilter = {
    is?: MenuItemsWhereInput
    isNot?: MenuItemsWhereInput
  }

  export type CoursesNullableScalarRelationFilter = {
    is?: CoursesWhereInput | null
    isNot?: CoursesWhereInput | null
  }

  export type OrderItemsCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatId?: SortOrder
    itemId?: SortOrder
    courseId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    itemStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatId?: SortOrder
    itemId?: SortOrder
    courseId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatId?: SortOrder
    itemId?: SortOrder
    courseId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    itemStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemsMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatId?: SortOrder
    itemId?: SortOrder
    courseId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    itemStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemsSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    seatId?: SortOrder
    itemId?: SortOrder
    courseId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type EnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
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

  export type PaymentsOrderByRelevanceInput = {
    fields: PaymentsOrderByRelevanceFieldEnum | PaymentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentType?: SortOrder
    paymentMethod?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    qrCodeData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    totalAmount?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentType?: SortOrder
    paymentMethod?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    qrCodeData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentType?: SortOrder
    paymentMethod?: SortOrder
    totalAmount?: SortOrder
    paymentStatus?: SortOrder
    qrCodeData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    totalAmount?: SortOrder
  }

  export type EnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
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

  export type PaymentsScalarRelationFilter = {
    is?: PaymentsWhereInput
    isNot?: PaymentsWhereInput
  }

  export type OrderSeatsNullableScalarRelationFilter = {
    is?: OrderSeatsWhereInput | null
    isNot?: OrderSeatsWhereInput | null
  }

  export type PaymentDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    seatId?: SortOrder
    amount?: SortOrder
    isCoursePayment?: SortOrder
    isExtraPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    seatId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    seatId?: SortOrder
    amount?: SortOrder
    isCoursePayment?: SortOrder
    isExtraPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    seatId?: SortOrder
    amount?: SortOrder
    isCoursePayment?: SortOrder
    isExtraPayment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    seatId?: SortOrder
    amount?: SortOrder
  }

  export type InventoryItemsOrderByRelevanceInput = {
    fields: InventoryItemsOrderByRelevanceFieldEnum | InventoryItemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InventoryItemsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemsAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemsSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type InventoryItemsScalarRelationFilter = {
    is?: InventoryItemsWhereInput
    isNot?: InventoryItemsWhereInput
  }

  export type OrdersNullableScalarRelationFilter = {
    is?: OrdersWhereInput | null
    isNot?: OrdersWhereInput | null
  }

  export type InventoryTransactionsOrderByRelevanceInput = {
    fields: InventoryTransactionsOrderByRelevanceFieldEnum | InventoryTransactionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InventoryTransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    quantityChange?: SortOrder
    transactionType?: SortOrder
    relatedOrderId?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryTransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    quantityChange?: SortOrder
    relatedOrderId?: SortOrder
    createdById?: SortOrder
  }

  export type InventoryTransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    quantityChange?: SortOrder
    transactionType?: SortOrder
    relatedOrderId?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryTransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    quantityChange?: SortOrder
    transactionType?: SortOrder
    relatedOrderId?: SortOrder
    notes?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryTransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    inventoryItemId?: SortOrder
    quantityChange?: SortOrder
    relatedOrderId?: SortOrder
    createdById?: SortOrder
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

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type TablesNullableScalarRelationFilter = {
    is?: TablesWhereInput | null
    isNot?: TablesWhereInput | null
  }

  export type ReservationsOrderByRelevanceInput = {
    fields: ReservationsOrderByRelevanceFieldEnum | ReservationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReservationsCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    partySize?: SortOrder
    reservationTime?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationsAvgOrderByAggregateInput = {
    id?: SortOrder
    partySize?: SortOrder
    tableId?: SortOrder
  }

  export type ReservationsMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    partySize?: SortOrder
    reservationTime?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationsMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    partySize?: SortOrder
    reservationTime?: SortOrder
    tableId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationsSumOrderByAggregateInput = {
    id?: SortOrder
    partySize?: SortOrder
    tableId?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type OrderItemsCreateNestedManyWithoutCourseInput = {
    create?: XOR<OrderItemsCreateWithoutCourseInput, OrderItemsUncheckedCreateWithoutCourseInput> | OrderItemsCreateWithoutCourseInput[] | OrderItemsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutCourseInput | OrderItemsCreateOrConnectWithoutCourseInput[]
    createMany?: OrderItemsCreateManyCourseInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<OrderItemsCreateWithoutCourseInput, OrderItemsUncheckedCreateWithoutCourseInput> | OrderItemsCreateWithoutCourseInput[] | OrderItemsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutCourseInput | OrderItemsCreateOrConnectWithoutCourseInput[]
    createMany?: OrderItemsCreateManyCourseInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderItemsUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OrderItemsCreateWithoutCourseInput, OrderItemsUncheckedCreateWithoutCourseInput> | OrderItemsCreateWithoutCourseInput[] | OrderItemsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutCourseInput | OrderItemsCreateOrConnectWithoutCourseInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutCourseInput | OrderItemsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OrderItemsCreateManyCourseInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutCourseInput | OrderItemsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutCourseInput | OrderItemsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderItemsUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<OrderItemsCreateWithoutCourseInput, OrderItemsUncheckedCreateWithoutCourseInput> | OrderItemsCreateWithoutCourseInput[] | OrderItemsUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutCourseInput | OrderItemsCreateOrConnectWithoutCourseInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutCourseInput | OrderItemsUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: OrderItemsCreateManyCourseInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutCourseInput | OrderItemsUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutCourseInput | OrderItemsUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type MenuItemsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemsCreateWithoutCategoryInput, MenuItemsUncheckedCreateWithoutCategoryInput> | MenuItemsCreateWithoutCategoryInput[] | MenuItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemsCreateOrConnectWithoutCategoryInput | MenuItemsCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemsCreateManyCategoryInputEnvelope
    connect?: MenuItemsWhereUniqueInput | MenuItemsWhereUniqueInput[]
  }

  export type InventoryItemsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<InventoryItemsCreateWithoutCategoryInput, InventoryItemsUncheckedCreateWithoutCategoryInput> | InventoryItemsCreateWithoutCategoryInput[] | InventoryItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InventoryItemsCreateOrConnectWithoutCategoryInput | InventoryItemsCreateOrConnectWithoutCategoryInput[]
    createMany?: InventoryItemsCreateManyCategoryInputEnvelope
    connect?: InventoryItemsWhereUniqueInput | InventoryItemsWhereUniqueInput[]
  }

  export type MenuItemsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemsCreateWithoutCategoryInput, MenuItemsUncheckedCreateWithoutCategoryInput> | MenuItemsCreateWithoutCategoryInput[] | MenuItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemsCreateOrConnectWithoutCategoryInput | MenuItemsCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemsCreateManyCategoryInputEnvelope
    connect?: MenuItemsWhereUniqueInput | MenuItemsWhereUniqueInput[]
  }

  export type InventoryItemsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<InventoryItemsCreateWithoutCategoryInput, InventoryItemsUncheckedCreateWithoutCategoryInput> | InventoryItemsCreateWithoutCategoryInput[] | InventoryItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InventoryItemsCreateOrConnectWithoutCategoryInput | InventoryItemsCreateOrConnectWithoutCategoryInput[]
    createMany?: InventoryItemsCreateManyCategoryInputEnvelope
    connect?: InventoryItemsWhereUniqueInput | InventoryItemsWhereUniqueInput[]
  }

  export type MenuItemsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemsCreateWithoutCategoryInput, MenuItemsUncheckedCreateWithoutCategoryInput> | MenuItemsCreateWithoutCategoryInput[] | MenuItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemsCreateOrConnectWithoutCategoryInput | MenuItemsCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemsUpsertWithWhereUniqueWithoutCategoryInput | MenuItemsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemsCreateManyCategoryInputEnvelope
    set?: MenuItemsWhereUniqueInput | MenuItemsWhereUniqueInput[]
    disconnect?: MenuItemsWhereUniqueInput | MenuItemsWhereUniqueInput[]
    delete?: MenuItemsWhereUniqueInput | MenuItemsWhereUniqueInput[]
    connect?: MenuItemsWhereUniqueInput | MenuItemsWhereUniqueInput[]
    update?: MenuItemsUpdateWithWhereUniqueWithoutCategoryInput | MenuItemsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemsUpdateManyWithWhereWithoutCategoryInput | MenuItemsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemsScalarWhereInput | MenuItemsScalarWhereInput[]
  }

  export type InventoryItemsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<InventoryItemsCreateWithoutCategoryInput, InventoryItemsUncheckedCreateWithoutCategoryInput> | InventoryItemsCreateWithoutCategoryInput[] | InventoryItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InventoryItemsCreateOrConnectWithoutCategoryInput | InventoryItemsCreateOrConnectWithoutCategoryInput[]
    upsert?: InventoryItemsUpsertWithWhereUniqueWithoutCategoryInput | InventoryItemsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: InventoryItemsCreateManyCategoryInputEnvelope
    set?: InventoryItemsWhereUniqueInput | InventoryItemsWhereUniqueInput[]
    disconnect?: InventoryItemsWhereUniqueInput | InventoryItemsWhereUniqueInput[]
    delete?: InventoryItemsWhereUniqueInput | InventoryItemsWhereUniqueInput[]
    connect?: InventoryItemsWhereUniqueInput | InventoryItemsWhereUniqueInput[]
    update?: InventoryItemsUpdateWithWhereUniqueWithoutCategoryInput | InventoryItemsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: InventoryItemsUpdateManyWithWhereWithoutCategoryInput | InventoryItemsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: InventoryItemsScalarWhereInput | InventoryItemsScalarWhereInput[]
  }

  export type MenuItemsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemsCreateWithoutCategoryInput, MenuItemsUncheckedCreateWithoutCategoryInput> | MenuItemsCreateWithoutCategoryInput[] | MenuItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemsCreateOrConnectWithoutCategoryInput | MenuItemsCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemsUpsertWithWhereUniqueWithoutCategoryInput | MenuItemsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemsCreateManyCategoryInputEnvelope
    set?: MenuItemsWhereUniqueInput | MenuItemsWhereUniqueInput[]
    disconnect?: MenuItemsWhereUniqueInput | MenuItemsWhereUniqueInput[]
    delete?: MenuItemsWhereUniqueInput | MenuItemsWhereUniqueInput[]
    connect?: MenuItemsWhereUniqueInput | MenuItemsWhereUniqueInput[]
    update?: MenuItemsUpdateWithWhereUniqueWithoutCategoryInput | MenuItemsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemsUpdateManyWithWhereWithoutCategoryInput | MenuItemsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemsScalarWhereInput | MenuItemsScalarWhereInput[]
  }

  export type InventoryItemsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<InventoryItemsCreateWithoutCategoryInput, InventoryItemsUncheckedCreateWithoutCategoryInput> | InventoryItemsCreateWithoutCategoryInput[] | InventoryItemsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InventoryItemsCreateOrConnectWithoutCategoryInput | InventoryItemsCreateOrConnectWithoutCategoryInput[]
    upsert?: InventoryItemsUpsertWithWhereUniqueWithoutCategoryInput | InventoryItemsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: InventoryItemsCreateManyCategoryInputEnvelope
    set?: InventoryItemsWhereUniqueInput | InventoryItemsWhereUniqueInput[]
    disconnect?: InventoryItemsWhereUniqueInput | InventoryItemsWhereUniqueInput[]
    delete?: InventoryItemsWhereUniqueInput | InventoryItemsWhereUniqueInput[]
    connect?: InventoryItemsWhereUniqueInput | InventoryItemsWhereUniqueInput[]
    update?: InventoryItemsUpdateWithWhereUniqueWithoutCategoryInput | InventoryItemsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: InventoryItemsUpdateManyWithWhereWithoutCategoryInput | InventoryItemsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: InventoryItemsScalarWhereInput | InventoryItemsScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutMenuItemsInput = {
    create?: XOR<CategoriesCreateWithoutMenuItemsInput, CategoriesUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutMenuItemsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type OrderItemsCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemsCreateWithoutMenuItemInput, OrderItemsUncheckedCreateWithoutMenuItemInput> | OrderItemsCreateWithoutMenuItemInput[] | OrderItemsUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutMenuItemInput | OrderItemsCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemsCreateManyMenuItemInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemsCreateWithoutMenuItemInput, OrderItemsUncheckedCreateWithoutMenuItemInput> | OrderItemsCreateWithoutMenuItemInput[] | OrderItemsUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutMenuItemInput | OrderItemsCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemsCreateManyMenuItemInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type CategoriesUpdateOneRequiredWithoutMenuItemsNestedInput = {
    create?: XOR<CategoriesCreateWithoutMenuItemsInput, CategoriesUncheckedCreateWithoutMenuItemsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutMenuItemsInput
    upsert?: CategoriesUpsertWithoutMenuItemsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutMenuItemsInput, CategoriesUpdateWithoutMenuItemsInput>, CategoriesUncheckedUpdateWithoutMenuItemsInput>
  }

  export type OrderItemsUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<OrderItemsCreateWithoutMenuItemInput, OrderItemsUncheckedCreateWithoutMenuItemInput> | OrderItemsCreateWithoutMenuItemInput[] | OrderItemsUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutMenuItemInput | OrderItemsCreateOrConnectWithoutMenuItemInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutMenuItemInput | OrderItemsUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: OrderItemsCreateManyMenuItemInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutMenuItemInput | OrderItemsUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutMenuItemInput | OrderItemsUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<OrderItemsCreateWithoutMenuItemInput, OrderItemsUncheckedCreateWithoutMenuItemInput> | OrderItemsCreateWithoutMenuItemInput[] | OrderItemsUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutMenuItemInput | OrderItemsCreateOrConnectWithoutMenuItemInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutMenuItemInput | OrderItemsUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: OrderItemsCreateManyMenuItemInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutMenuItemInput | OrderItemsUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutMenuItemInput | OrderItemsUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type OrdersCreateNestedManyWithoutTableInput = {
    create?: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput> | OrdersCreateWithoutTableInput[] | OrdersUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutTableInput | OrdersCreateOrConnectWithoutTableInput[]
    createMany?: OrdersCreateManyTableInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ReservationsCreateNestedManyWithoutTableInput = {
    create?: XOR<ReservationsCreateWithoutTableInput, ReservationsUncheckedCreateWithoutTableInput> | ReservationsCreateWithoutTableInput[] | ReservationsUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutTableInput | ReservationsCreateOrConnectWithoutTableInput[]
    createMany?: ReservationsCreateManyTableInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput> | OrdersCreateWithoutTableInput[] | OrdersUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutTableInput | OrdersCreateOrConnectWithoutTableInput[]
    createMany?: OrdersCreateManyTableInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ReservationsUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<ReservationsCreateWithoutTableInput, ReservationsUncheckedCreateWithoutTableInput> | ReservationsCreateWithoutTableInput[] | ReservationsUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutTableInput | ReservationsCreateOrConnectWithoutTableInput[]
    createMany?: ReservationsCreateManyTableInputEnvelope
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
  }

  export type EnumTableStatusFieldUpdateOperationsInput = {
    set?: $Enums.TableStatus
  }

  export type OrdersUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput> | OrdersCreateWithoutTableInput[] | OrdersUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutTableInput | OrdersCreateOrConnectWithoutTableInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutTableInput | OrdersUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrdersCreateManyTableInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutTableInput | OrdersUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutTableInput | OrdersUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ReservationsUpdateManyWithoutTableNestedInput = {
    create?: XOR<ReservationsCreateWithoutTableInput, ReservationsUncheckedCreateWithoutTableInput> | ReservationsCreateWithoutTableInput[] | ReservationsUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutTableInput | ReservationsCreateOrConnectWithoutTableInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutTableInput | ReservationsUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ReservationsCreateManyTableInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutTableInput | ReservationsUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutTableInput | ReservationsUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput> | OrdersCreateWithoutTableInput[] | OrdersUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutTableInput | OrdersCreateOrConnectWithoutTableInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutTableInput | OrdersUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrdersCreateManyTableInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutTableInput | OrdersUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutTableInput | OrdersUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ReservationsUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<ReservationsCreateWithoutTableInput, ReservationsUncheckedCreateWithoutTableInput> | ReservationsCreateWithoutTableInput[] | ReservationsUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ReservationsCreateOrConnectWithoutTableInput | ReservationsCreateOrConnectWithoutTableInput[]
    upsert?: ReservationsUpsertWithWhereUniqueWithoutTableInput | ReservationsUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ReservationsCreateManyTableInputEnvelope
    set?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    disconnect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    delete?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    connect?: ReservationsWhereUniqueInput | ReservationsWhereUniqueInput[]
    update?: ReservationsUpdateWithWhereUniqueWithoutTableInput | ReservationsUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ReservationsUpdateManyWithWhereWithoutTableInput | ReservationsUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
  }

  export type OrdersCreateNestedManyWithoutServerInput = {
    create?: XOR<OrdersCreateWithoutServerInput, OrdersUncheckedCreateWithoutServerInput> | OrdersCreateWithoutServerInput[] | OrdersUncheckedCreateWithoutServerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutServerInput | OrdersCreateOrConnectWithoutServerInput[]
    createMany?: OrdersCreateManyServerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type InventoryTransactionsCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<InventoryTransactionsCreateWithoutCreatedByInput, InventoryTransactionsUncheckedCreateWithoutCreatedByInput> | InventoryTransactionsCreateWithoutCreatedByInput[] | InventoryTransactionsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutCreatedByInput | InventoryTransactionsCreateOrConnectWithoutCreatedByInput[]
    createMany?: InventoryTransactionsCreateManyCreatedByInputEnvelope
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<OrdersCreateWithoutServerInput, OrdersUncheckedCreateWithoutServerInput> | OrdersCreateWithoutServerInput[] | OrdersUncheckedCreateWithoutServerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutServerInput | OrdersCreateOrConnectWithoutServerInput[]
    createMany?: OrdersCreateManyServerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type InventoryTransactionsUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<InventoryTransactionsCreateWithoutCreatedByInput, InventoryTransactionsUncheckedCreateWithoutCreatedByInput> | InventoryTransactionsCreateWithoutCreatedByInput[] | InventoryTransactionsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutCreatedByInput | InventoryTransactionsCreateOrConnectWithoutCreatedByInput[]
    createMany?: InventoryTransactionsCreateManyCreatedByInputEnvelope
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type OrdersUpdateManyWithoutServerNestedInput = {
    create?: XOR<OrdersCreateWithoutServerInput, OrdersUncheckedCreateWithoutServerInput> | OrdersCreateWithoutServerInput[] | OrdersUncheckedCreateWithoutServerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutServerInput | OrdersCreateOrConnectWithoutServerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutServerInput | OrdersUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: OrdersCreateManyServerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutServerInput | OrdersUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutServerInput | OrdersUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type InventoryTransactionsUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<InventoryTransactionsCreateWithoutCreatedByInput, InventoryTransactionsUncheckedCreateWithoutCreatedByInput> | InventoryTransactionsCreateWithoutCreatedByInput[] | InventoryTransactionsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutCreatedByInput | InventoryTransactionsCreateOrConnectWithoutCreatedByInput[]
    upsert?: InventoryTransactionsUpsertWithWhereUniqueWithoutCreatedByInput | InventoryTransactionsUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: InventoryTransactionsCreateManyCreatedByInputEnvelope
    set?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    disconnect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    delete?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    update?: InventoryTransactionsUpdateWithWhereUniqueWithoutCreatedByInput | InventoryTransactionsUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: InventoryTransactionsUpdateManyWithWhereWithoutCreatedByInput | InventoryTransactionsUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: InventoryTransactionsScalarWhereInput | InventoryTransactionsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<OrdersCreateWithoutServerInput, OrdersUncheckedCreateWithoutServerInput> | OrdersCreateWithoutServerInput[] | OrdersUncheckedCreateWithoutServerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutServerInput | OrdersCreateOrConnectWithoutServerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutServerInput | OrdersUpsertWithWhereUniqueWithoutServerInput[]
    createMany?: OrdersCreateManyServerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutServerInput | OrdersUpdateWithWhereUniqueWithoutServerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutServerInput | OrdersUpdateManyWithWhereWithoutServerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type InventoryTransactionsUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<InventoryTransactionsCreateWithoutCreatedByInput, InventoryTransactionsUncheckedCreateWithoutCreatedByInput> | InventoryTransactionsCreateWithoutCreatedByInput[] | InventoryTransactionsUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutCreatedByInput | InventoryTransactionsCreateOrConnectWithoutCreatedByInput[]
    upsert?: InventoryTransactionsUpsertWithWhereUniqueWithoutCreatedByInput | InventoryTransactionsUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: InventoryTransactionsCreateManyCreatedByInputEnvelope
    set?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    disconnect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    delete?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    update?: InventoryTransactionsUpdateWithWhereUniqueWithoutCreatedByInput | InventoryTransactionsUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: InventoryTransactionsUpdateManyWithWhereWithoutCreatedByInput | InventoryTransactionsUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: InventoryTransactionsScalarWhereInput | InventoryTransactionsScalarWhereInput[]
  }

  export type TablesCreateNestedOneWithoutOrdersInput = {
    create?: XOR<TablesCreateWithoutOrdersInput, TablesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TablesCreateOrConnectWithoutOrdersInput
    connect?: TablesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type OrderSeatsCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderSeatsCreateWithoutOrderInput, OrderSeatsUncheckedCreateWithoutOrderInput> | OrderSeatsCreateWithoutOrderInput[] | OrderSeatsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderSeatsCreateOrConnectWithoutOrderInput | OrderSeatsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderSeatsCreateManyOrderInputEnvelope
    connect?: OrderSeatsWhereUniqueInput | OrderSeatsWhereUniqueInput[]
  }

  export type OrderItemsCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type PaymentsCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type InventoryTransactionsCreateNestedManyWithoutRelatedOrderInput = {
    create?: XOR<InventoryTransactionsCreateWithoutRelatedOrderInput, InventoryTransactionsUncheckedCreateWithoutRelatedOrderInput> | InventoryTransactionsCreateWithoutRelatedOrderInput[] | InventoryTransactionsUncheckedCreateWithoutRelatedOrderInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutRelatedOrderInput | InventoryTransactionsCreateOrConnectWithoutRelatedOrderInput[]
    createMany?: InventoryTransactionsCreateManyRelatedOrderInputEnvelope
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
  }

  export type OrderSeatsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderSeatsCreateWithoutOrderInput, OrderSeatsUncheckedCreateWithoutOrderInput> | OrderSeatsCreateWithoutOrderInput[] | OrderSeatsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderSeatsCreateOrConnectWithoutOrderInput | OrderSeatsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderSeatsCreateManyOrderInputEnvelope
    connect?: OrderSeatsWhereUniqueInput | OrderSeatsWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type InventoryTransactionsUncheckedCreateNestedManyWithoutRelatedOrderInput = {
    create?: XOR<InventoryTransactionsCreateWithoutRelatedOrderInput, InventoryTransactionsUncheckedCreateWithoutRelatedOrderInput> | InventoryTransactionsCreateWithoutRelatedOrderInput[] | InventoryTransactionsUncheckedCreateWithoutRelatedOrderInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutRelatedOrderInput | InventoryTransactionsCreateOrConnectWithoutRelatedOrderInput[]
    createMany?: InventoryTransactionsCreateManyRelatedOrderInputEnvelope
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type TablesUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<TablesCreateWithoutOrdersInput, TablesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TablesCreateOrConnectWithoutOrdersInput
    upsert?: TablesUpsertWithoutOrdersInput
    connect?: TablesWhereUniqueInput
    update?: XOR<XOR<TablesUpdateToOneWithWhereWithoutOrdersInput, TablesUpdateWithoutOrdersInput>, TablesUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderSeatsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderSeatsCreateWithoutOrderInput, OrderSeatsUncheckedCreateWithoutOrderInput> | OrderSeatsCreateWithoutOrderInput[] | OrderSeatsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderSeatsCreateOrConnectWithoutOrderInput | OrderSeatsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderSeatsUpsertWithWhereUniqueWithoutOrderInput | OrderSeatsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderSeatsCreateManyOrderInputEnvelope
    set?: OrderSeatsWhereUniqueInput | OrderSeatsWhereUniqueInput[]
    disconnect?: OrderSeatsWhereUniqueInput | OrderSeatsWhereUniqueInput[]
    delete?: OrderSeatsWhereUniqueInput | OrderSeatsWhereUniqueInput[]
    connect?: OrderSeatsWhereUniqueInput | OrderSeatsWhereUniqueInput[]
    update?: OrderSeatsUpdateWithWhereUniqueWithoutOrderInput | OrderSeatsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderSeatsUpdateManyWithWhereWithoutOrderInput | OrderSeatsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderSeatsScalarWhereInput | OrderSeatsScalarWhereInput[]
  }

  export type OrderItemsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutOrderInput | OrderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutOrderInput | OrderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutOrderInput | OrderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type PaymentsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutOrderInput | PaymentsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutOrderInput | PaymentsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutOrderInput | PaymentsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type InventoryTransactionsUpdateManyWithoutRelatedOrderNestedInput = {
    create?: XOR<InventoryTransactionsCreateWithoutRelatedOrderInput, InventoryTransactionsUncheckedCreateWithoutRelatedOrderInput> | InventoryTransactionsCreateWithoutRelatedOrderInput[] | InventoryTransactionsUncheckedCreateWithoutRelatedOrderInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutRelatedOrderInput | InventoryTransactionsCreateOrConnectWithoutRelatedOrderInput[]
    upsert?: InventoryTransactionsUpsertWithWhereUniqueWithoutRelatedOrderInput | InventoryTransactionsUpsertWithWhereUniqueWithoutRelatedOrderInput[]
    createMany?: InventoryTransactionsCreateManyRelatedOrderInputEnvelope
    set?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    disconnect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    delete?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    update?: InventoryTransactionsUpdateWithWhereUniqueWithoutRelatedOrderInput | InventoryTransactionsUpdateWithWhereUniqueWithoutRelatedOrderInput[]
    updateMany?: InventoryTransactionsUpdateManyWithWhereWithoutRelatedOrderInput | InventoryTransactionsUpdateManyWithWhereWithoutRelatedOrderInput[]
    deleteMany?: InventoryTransactionsScalarWhereInput | InventoryTransactionsScalarWhereInput[]
  }

  export type OrderSeatsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderSeatsCreateWithoutOrderInput, OrderSeatsUncheckedCreateWithoutOrderInput> | OrderSeatsCreateWithoutOrderInput[] | OrderSeatsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderSeatsCreateOrConnectWithoutOrderInput | OrderSeatsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderSeatsUpsertWithWhereUniqueWithoutOrderInput | OrderSeatsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderSeatsCreateManyOrderInputEnvelope
    set?: OrderSeatsWhereUniqueInput | OrderSeatsWhereUniqueInput[]
    disconnect?: OrderSeatsWhereUniqueInput | OrderSeatsWhereUniqueInput[]
    delete?: OrderSeatsWhereUniqueInput | OrderSeatsWhereUniqueInput[]
    connect?: OrderSeatsWhereUniqueInput | OrderSeatsWhereUniqueInput[]
    update?: OrderSeatsUpdateWithWhereUniqueWithoutOrderInput | OrderSeatsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderSeatsUpdateManyWithWhereWithoutOrderInput | OrderSeatsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderSeatsScalarWhereInput | OrderSeatsScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput> | OrderItemsCreateWithoutOrderInput[] | OrderItemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutOrderInput | OrderItemsCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutOrderInput | OrderItemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemsCreateManyOrderInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutOrderInput | OrderItemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutOrderInput | OrderItemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput> | PaymentsCreateWithoutOrderInput[] | PaymentsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutOrderInput | PaymentsCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutOrderInput | PaymentsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentsCreateManyOrderInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutOrderInput | PaymentsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutOrderInput | PaymentsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type InventoryTransactionsUncheckedUpdateManyWithoutRelatedOrderNestedInput = {
    create?: XOR<InventoryTransactionsCreateWithoutRelatedOrderInput, InventoryTransactionsUncheckedCreateWithoutRelatedOrderInput> | InventoryTransactionsCreateWithoutRelatedOrderInput[] | InventoryTransactionsUncheckedCreateWithoutRelatedOrderInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutRelatedOrderInput | InventoryTransactionsCreateOrConnectWithoutRelatedOrderInput[]
    upsert?: InventoryTransactionsUpsertWithWhereUniqueWithoutRelatedOrderInput | InventoryTransactionsUpsertWithWhereUniqueWithoutRelatedOrderInput[]
    createMany?: InventoryTransactionsCreateManyRelatedOrderInputEnvelope
    set?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    disconnect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    delete?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    update?: InventoryTransactionsUpdateWithWhereUniqueWithoutRelatedOrderInput | InventoryTransactionsUpdateWithWhereUniqueWithoutRelatedOrderInput[]
    updateMany?: InventoryTransactionsUpdateManyWithWhereWithoutRelatedOrderInput | InventoryTransactionsUpdateManyWithWhereWithoutRelatedOrderInput[]
    deleteMany?: InventoryTransactionsScalarWhereInput | InventoryTransactionsScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutOrderSeatsInput = {
    create?: XOR<OrdersCreateWithoutOrderSeatsInput, OrdersUncheckedCreateWithoutOrderSeatsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderSeatsInput
    connect?: OrdersWhereUniqueInput
  }

  export type OrderItemsCreateNestedManyWithoutSeatInput = {
    create?: XOR<OrderItemsCreateWithoutSeatInput, OrderItemsUncheckedCreateWithoutSeatInput> | OrderItemsCreateWithoutSeatInput[] | OrderItemsUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutSeatInput | OrderItemsCreateOrConnectWithoutSeatInput[]
    createMany?: OrderItemsCreateManySeatInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type PaymentDetailsCreateNestedManyWithoutSeatInput = {
    create?: XOR<PaymentDetailsCreateWithoutSeatInput, PaymentDetailsUncheckedCreateWithoutSeatInput> | PaymentDetailsCreateWithoutSeatInput[] | PaymentDetailsUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutSeatInput | PaymentDetailsCreateOrConnectWithoutSeatInput[]
    createMany?: PaymentDetailsCreateManySeatInputEnvelope
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
  }

  export type OrderItemsUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<OrderItemsCreateWithoutSeatInput, OrderItemsUncheckedCreateWithoutSeatInput> | OrderItemsCreateWithoutSeatInput[] | OrderItemsUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutSeatInput | OrderItemsCreateOrConnectWithoutSeatInput[]
    createMany?: OrderItemsCreateManySeatInputEnvelope
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
  }

  export type PaymentDetailsUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<PaymentDetailsCreateWithoutSeatInput, PaymentDetailsUncheckedCreateWithoutSeatInput> | PaymentDetailsCreateWithoutSeatInput[] | PaymentDetailsUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutSeatInput | PaymentDetailsCreateOrConnectWithoutSeatInput[]
    createMany?: PaymentDetailsCreateManySeatInputEnvelope
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
  }

  export type OrdersUpdateOneRequiredWithoutOrderSeatsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderSeatsInput, OrdersUncheckedCreateWithoutOrderSeatsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderSeatsInput
    upsert?: OrdersUpsertWithoutOrderSeatsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrderSeatsInput, OrdersUpdateWithoutOrderSeatsInput>, OrdersUncheckedUpdateWithoutOrderSeatsInput>
  }

  export type OrderItemsUpdateManyWithoutSeatNestedInput = {
    create?: XOR<OrderItemsCreateWithoutSeatInput, OrderItemsUncheckedCreateWithoutSeatInput> | OrderItemsCreateWithoutSeatInput[] | OrderItemsUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutSeatInput | OrderItemsCreateOrConnectWithoutSeatInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutSeatInput | OrderItemsUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: OrderItemsCreateManySeatInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutSeatInput | OrderItemsUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutSeatInput | OrderItemsUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type PaymentDetailsUpdateManyWithoutSeatNestedInput = {
    create?: XOR<PaymentDetailsCreateWithoutSeatInput, PaymentDetailsUncheckedCreateWithoutSeatInput> | PaymentDetailsCreateWithoutSeatInput[] | PaymentDetailsUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutSeatInput | PaymentDetailsCreateOrConnectWithoutSeatInput[]
    upsert?: PaymentDetailsUpsertWithWhereUniqueWithoutSeatInput | PaymentDetailsUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: PaymentDetailsCreateManySeatInputEnvelope
    set?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    disconnect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    delete?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    update?: PaymentDetailsUpdateWithWhereUniqueWithoutSeatInput | PaymentDetailsUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: PaymentDetailsUpdateManyWithWhereWithoutSeatInput | PaymentDetailsUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: PaymentDetailsScalarWhereInput | PaymentDetailsScalarWhereInput[]
  }

  export type OrderItemsUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<OrderItemsCreateWithoutSeatInput, OrderItemsUncheckedCreateWithoutSeatInput> | OrderItemsCreateWithoutSeatInput[] | OrderItemsUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: OrderItemsCreateOrConnectWithoutSeatInput | OrderItemsCreateOrConnectWithoutSeatInput[]
    upsert?: OrderItemsUpsertWithWhereUniqueWithoutSeatInput | OrderItemsUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: OrderItemsCreateManySeatInputEnvelope
    set?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    disconnect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    delete?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    connect?: OrderItemsWhereUniqueInput | OrderItemsWhereUniqueInput[]
    update?: OrderItemsUpdateWithWhereUniqueWithoutSeatInput | OrderItemsUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: OrderItemsUpdateManyWithWhereWithoutSeatInput | OrderItemsUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
  }

  export type PaymentDetailsUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<PaymentDetailsCreateWithoutSeatInput, PaymentDetailsUncheckedCreateWithoutSeatInput> | PaymentDetailsCreateWithoutSeatInput[] | PaymentDetailsUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutSeatInput | PaymentDetailsCreateOrConnectWithoutSeatInput[]
    upsert?: PaymentDetailsUpsertWithWhereUniqueWithoutSeatInput | PaymentDetailsUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: PaymentDetailsCreateManySeatInputEnvelope
    set?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    disconnect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    delete?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    update?: PaymentDetailsUpdateWithWhereUniqueWithoutSeatInput | PaymentDetailsUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: PaymentDetailsUpdateManyWithWhereWithoutSeatInput | PaymentDetailsUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: PaymentDetailsScalarWhereInput | PaymentDetailsScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderItemsInput
    connect?: OrdersWhereUniqueInput
  }

  export type OrderSeatsCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderSeatsCreateWithoutOrderItemsInput, OrderSeatsUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderSeatsCreateOrConnectWithoutOrderItemsInput
    connect?: OrderSeatsWhereUniqueInput
  }

  export type MenuItemsCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<MenuItemsCreateWithoutOrderItemsInput, MenuItemsUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemsCreateOrConnectWithoutOrderItemsInput
    connect?: MenuItemsWhereUniqueInput
  }

  export type CoursesCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<CoursesCreateWithoutOrderItemsInput, CoursesUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: CoursesCreateOrConnectWithoutOrderItemsInput
    connect?: CoursesWhereUniqueInput
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type OrdersUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderItemsInput
    upsert?: OrdersUpsertWithoutOrderItemsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrderItemsInput, OrdersUpdateWithoutOrderItemsInput>, OrdersUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderSeatsUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderSeatsCreateWithoutOrderItemsInput, OrderSeatsUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderSeatsCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderSeatsUpsertWithoutOrderItemsInput
    connect?: OrderSeatsWhereUniqueInput
    update?: XOR<XOR<OrderSeatsUpdateToOneWithWhereWithoutOrderItemsInput, OrderSeatsUpdateWithoutOrderItemsInput>, OrderSeatsUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MenuItemsUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<MenuItemsCreateWithoutOrderItemsInput, MenuItemsUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemsCreateOrConnectWithoutOrderItemsInput
    upsert?: MenuItemsUpsertWithoutOrderItemsInput
    connect?: MenuItemsWhereUniqueInput
    update?: XOR<XOR<MenuItemsUpdateToOneWithWhereWithoutOrderItemsInput, MenuItemsUpdateWithoutOrderItemsInput>, MenuItemsUncheckedUpdateWithoutOrderItemsInput>
  }

  export type CoursesUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<CoursesCreateWithoutOrderItemsInput, CoursesUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: CoursesCreateOrConnectWithoutOrderItemsInput
    upsert?: CoursesUpsertWithoutOrderItemsInput
    disconnect?: CoursesWhereInput | boolean
    delete?: CoursesWhereInput | boolean
    connect?: CoursesWhereUniqueInput
    update?: XOR<XOR<CoursesUpdateToOneWithWhereWithoutOrderItemsInput, CoursesUpdateWithoutOrderItemsInput>, CoursesUncheckedUpdateWithoutOrderItemsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrdersCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<OrdersCreateWithoutPaymentsInput, OrdersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentsInput
    connect?: OrdersWhereUniqueInput
  }

  export type PaymentDetailsCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentDetailsCreateWithoutPaymentInput, PaymentDetailsUncheckedCreateWithoutPaymentInput> | PaymentDetailsCreateWithoutPaymentInput[] | PaymentDetailsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutPaymentInput | PaymentDetailsCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentDetailsCreateManyPaymentInputEnvelope
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
  }

  export type PaymentDetailsUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentDetailsCreateWithoutPaymentInput, PaymentDetailsUncheckedCreateWithoutPaymentInput> | PaymentDetailsCreateWithoutPaymentInput[] | PaymentDetailsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutPaymentInput | PaymentDetailsCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentDetailsCreateManyPaymentInputEnvelope
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
  }

  export type EnumPaymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PaymentType
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type OrdersUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<OrdersCreateWithoutPaymentsInput, OrdersUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutPaymentsInput
    upsert?: OrdersUpsertWithoutPaymentsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutPaymentsInput, OrdersUpdateWithoutPaymentsInput>, OrdersUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentDetailsUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentDetailsCreateWithoutPaymentInput, PaymentDetailsUncheckedCreateWithoutPaymentInput> | PaymentDetailsCreateWithoutPaymentInput[] | PaymentDetailsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutPaymentInput | PaymentDetailsCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentDetailsUpsertWithWhereUniqueWithoutPaymentInput | PaymentDetailsUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentDetailsCreateManyPaymentInputEnvelope
    set?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    disconnect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    delete?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    update?: PaymentDetailsUpdateWithWhereUniqueWithoutPaymentInput | PaymentDetailsUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentDetailsUpdateManyWithWhereWithoutPaymentInput | PaymentDetailsUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentDetailsScalarWhereInput | PaymentDetailsScalarWhereInput[]
  }

  export type PaymentDetailsUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentDetailsCreateWithoutPaymentInput, PaymentDetailsUncheckedCreateWithoutPaymentInput> | PaymentDetailsCreateWithoutPaymentInput[] | PaymentDetailsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutPaymentInput | PaymentDetailsCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentDetailsUpsertWithWhereUniqueWithoutPaymentInput | PaymentDetailsUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentDetailsCreateManyPaymentInputEnvelope
    set?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    disconnect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    delete?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    update?: PaymentDetailsUpdateWithWhereUniqueWithoutPaymentInput | PaymentDetailsUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentDetailsUpdateManyWithWhereWithoutPaymentInput | PaymentDetailsUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentDetailsScalarWhereInput | PaymentDetailsScalarWhereInput[]
  }

  export type PaymentsCreateNestedOneWithoutPaymentDetailsInput = {
    create?: XOR<PaymentsCreateWithoutPaymentDetailsInput, PaymentsUncheckedCreateWithoutPaymentDetailsInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutPaymentDetailsInput
    connect?: PaymentsWhereUniqueInput
  }

  export type OrderSeatsCreateNestedOneWithoutPaymentDetailsInput = {
    create?: XOR<OrderSeatsCreateWithoutPaymentDetailsInput, OrderSeatsUncheckedCreateWithoutPaymentDetailsInput>
    connectOrCreate?: OrderSeatsCreateOrConnectWithoutPaymentDetailsInput
    connect?: OrderSeatsWhereUniqueInput
  }

  export type PaymentsUpdateOneRequiredWithoutPaymentDetailsNestedInput = {
    create?: XOR<PaymentsCreateWithoutPaymentDetailsInput, PaymentsUncheckedCreateWithoutPaymentDetailsInput>
    connectOrCreate?: PaymentsCreateOrConnectWithoutPaymentDetailsInput
    upsert?: PaymentsUpsertWithoutPaymentDetailsInput
    connect?: PaymentsWhereUniqueInput
    update?: XOR<XOR<PaymentsUpdateToOneWithWhereWithoutPaymentDetailsInput, PaymentsUpdateWithoutPaymentDetailsInput>, PaymentsUncheckedUpdateWithoutPaymentDetailsInput>
  }

  export type OrderSeatsUpdateOneWithoutPaymentDetailsNestedInput = {
    create?: XOR<OrderSeatsCreateWithoutPaymentDetailsInput, OrderSeatsUncheckedCreateWithoutPaymentDetailsInput>
    connectOrCreate?: OrderSeatsCreateOrConnectWithoutPaymentDetailsInput
    upsert?: OrderSeatsUpsertWithoutPaymentDetailsInput
    disconnect?: OrderSeatsWhereInput | boolean
    delete?: OrderSeatsWhereInput | boolean
    connect?: OrderSeatsWhereUniqueInput
    update?: XOR<XOR<OrderSeatsUpdateToOneWithWhereWithoutPaymentDetailsInput, OrderSeatsUpdateWithoutPaymentDetailsInput>, OrderSeatsUncheckedUpdateWithoutPaymentDetailsInput>
  }

  export type CategoriesCreateNestedOneWithoutInventoryItemsInput = {
    create?: XOR<CategoriesCreateWithoutInventoryItemsInput, CategoriesUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutInventoryItemsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type InventoryTransactionsCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryTransactionsCreateWithoutInventoryItemInput, InventoryTransactionsUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionsCreateWithoutInventoryItemInput[] | InventoryTransactionsUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutInventoryItemInput | InventoryTransactionsCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryTransactionsCreateManyInventoryItemInputEnvelope
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
  }

  export type InventoryTransactionsUncheckedCreateNestedManyWithoutInventoryItemInput = {
    create?: XOR<InventoryTransactionsCreateWithoutInventoryItemInput, InventoryTransactionsUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionsCreateWithoutInventoryItemInput[] | InventoryTransactionsUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutInventoryItemInput | InventoryTransactionsCreateOrConnectWithoutInventoryItemInput[]
    createMany?: InventoryTransactionsCreateManyInventoryItemInputEnvelope
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
  }

  export type CategoriesUpdateOneRequiredWithoutInventoryItemsNestedInput = {
    create?: XOR<CategoriesCreateWithoutInventoryItemsInput, CategoriesUncheckedCreateWithoutInventoryItemsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutInventoryItemsInput
    upsert?: CategoriesUpsertWithoutInventoryItemsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutInventoryItemsInput, CategoriesUpdateWithoutInventoryItemsInput>, CategoriesUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type InventoryTransactionsUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryTransactionsCreateWithoutInventoryItemInput, InventoryTransactionsUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionsCreateWithoutInventoryItemInput[] | InventoryTransactionsUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutInventoryItemInput | InventoryTransactionsCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryTransactionsUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionsUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryTransactionsCreateManyInventoryItemInputEnvelope
    set?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    disconnect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    delete?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    update?: InventoryTransactionsUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionsUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryTransactionsUpdateManyWithWhereWithoutInventoryItemInput | InventoryTransactionsUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryTransactionsScalarWhereInput | InventoryTransactionsScalarWhereInput[]
  }

  export type InventoryTransactionsUncheckedUpdateManyWithoutInventoryItemNestedInput = {
    create?: XOR<InventoryTransactionsCreateWithoutInventoryItemInput, InventoryTransactionsUncheckedCreateWithoutInventoryItemInput> | InventoryTransactionsCreateWithoutInventoryItemInput[] | InventoryTransactionsUncheckedCreateWithoutInventoryItemInput[]
    connectOrCreate?: InventoryTransactionsCreateOrConnectWithoutInventoryItemInput | InventoryTransactionsCreateOrConnectWithoutInventoryItemInput[]
    upsert?: InventoryTransactionsUpsertWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionsUpsertWithWhereUniqueWithoutInventoryItemInput[]
    createMany?: InventoryTransactionsCreateManyInventoryItemInputEnvelope
    set?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    disconnect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    delete?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    connect?: InventoryTransactionsWhereUniqueInput | InventoryTransactionsWhereUniqueInput[]
    update?: InventoryTransactionsUpdateWithWhereUniqueWithoutInventoryItemInput | InventoryTransactionsUpdateWithWhereUniqueWithoutInventoryItemInput[]
    updateMany?: InventoryTransactionsUpdateManyWithWhereWithoutInventoryItemInput | InventoryTransactionsUpdateManyWithWhereWithoutInventoryItemInput[]
    deleteMany?: InventoryTransactionsScalarWhereInput | InventoryTransactionsScalarWhereInput[]
  }

  export type InventoryItemsCreateNestedOneWithoutInventoryTransactionsInput = {
    create?: XOR<InventoryItemsCreateWithoutInventoryTransactionsInput, InventoryItemsUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: InventoryItemsCreateOrConnectWithoutInventoryTransactionsInput
    connect?: InventoryItemsWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutInventoryTransactionsInput = {
    create?: XOR<OrdersCreateWithoutInventoryTransactionsInput, OrdersUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutInventoryTransactionsInput
    connect?: OrdersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutInventoryTransactionsInput = {
    create?: XOR<UsersCreateWithoutInventoryTransactionsInput, UsersUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutInventoryTransactionsInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type InventoryItemsUpdateOneRequiredWithoutInventoryTransactionsNestedInput = {
    create?: XOR<InventoryItemsCreateWithoutInventoryTransactionsInput, InventoryItemsUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: InventoryItemsCreateOrConnectWithoutInventoryTransactionsInput
    upsert?: InventoryItemsUpsertWithoutInventoryTransactionsInput
    connect?: InventoryItemsWhereUniqueInput
    update?: XOR<XOR<InventoryItemsUpdateToOneWithWhereWithoutInventoryTransactionsInput, InventoryItemsUpdateWithoutInventoryTransactionsInput>, InventoryItemsUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type OrdersUpdateOneWithoutInventoryTransactionsNestedInput = {
    create?: XOR<OrdersCreateWithoutInventoryTransactionsInput, OrdersUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutInventoryTransactionsInput
    upsert?: OrdersUpsertWithoutInventoryTransactionsInput
    disconnect?: OrdersWhereInput | boolean
    delete?: OrdersWhereInput | boolean
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutInventoryTransactionsInput, OrdersUpdateWithoutInventoryTransactionsInput>, OrdersUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type UsersUpdateOneRequiredWithoutInventoryTransactionsNestedInput = {
    create?: XOR<UsersCreateWithoutInventoryTransactionsInput, UsersUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutInventoryTransactionsInput
    upsert?: UsersUpsertWithoutInventoryTransactionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutInventoryTransactionsInput, UsersUpdateWithoutInventoryTransactionsInput>, UsersUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type TablesCreateNestedOneWithoutReservationsInput = {
    create?: XOR<TablesCreateWithoutReservationsInput, TablesUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: TablesCreateOrConnectWithoutReservationsInput
    connect?: TablesWhereUniqueInput
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type TablesUpdateOneWithoutReservationsNestedInput = {
    create?: XOR<TablesCreateWithoutReservationsInput, TablesUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: TablesCreateOrConnectWithoutReservationsInput
    upsert?: TablesUpsertWithoutReservationsInput
    disconnect?: TablesWhereInput | boolean
    delete?: TablesWhereInput | boolean
    connect?: TablesWhereUniqueInput
    update?: XOR<XOR<TablesUpdateToOneWithWhereWithoutReservationsInput, TablesUpdateWithoutReservationsInput>, TablesUncheckedUpdateWithoutReservationsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumTableStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TableStatus | EnumTableStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TableStatus[]
    notIn?: $Enums.TableStatus[]
    not?: NestedEnumTableStatusFilter<$PrismaModel> | $Enums.TableStatus
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeFilter<$PrismaModel> | $Enums.PaymentType
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

  export type NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentType | EnumPaymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentType[]
    notIn?: $Enums.PaymentType[]
    not?: NestedEnumPaymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PaymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentTypeFilter<$PrismaModel>
    _max?: NestedEnumPaymentTypeFilter<$PrismaModel>
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

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type OrderItemsCreateWithoutCourseInput = {
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrderItemsInput
    seat: OrderSeatsCreateNestedOneWithoutOrderItemsInput
    menuItem: MenuItemsCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateWithoutCourseInput = {
    id?: number
    orderId: number
    seatId: number
    itemId: number
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsCreateOrConnectWithoutCourseInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutCourseInput, OrderItemsUncheckedCreateWithoutCourseInput>
  }

  export type OrderItemsCreateManyCourseInputEnvelope = {
    data: OrderItemsCreateManyCourseInput | OrderItemsCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutCourseInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutCourseInput, OrderItemsUncheckedUpdateWithoutCourseInput>
    create: XOR<OrderItemsCreateWithoutCourseInput, OrderItemsUncheckedCreateWithoutCourseInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutCourseInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutCourseInput, OrderItemsUncheckedUpdateWithoutCourseInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutCourseInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutCourseInput>
  }

  export type OrderItemsScalarWhereInput = {
    AND?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    OR?: OrderItemsScalarWhereInput[]
    NOT?: OrderItemsScalarWhereInput | OrderItemsScalarWhereInput[]
    id?: IntFilter<"OrderItems"> | number
    orderId?: IntFilter<"OrderItems"> | number
    seatId?: IntFilter<"OrderItems"> | number
    itemId?: IntFilter<"OrderItems"> | number
    courseId?: IntNullableFilter<"OrderItems"> | number | null
    quantity?: IntFilter<"OrderItems"> | number
    unitPrice?: FloatFilter<"OrderItems"> | number
    itemStatus?: EnumItemStatusFilter<"OrderItems"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"OrderItems"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItems"> | Date | string
  }

  export type MenuItemsCreateWithoutCategoryInput = {
    name: string
    description?: string | null
    price: number
    isCourseItem?: boolean
    isExtraItem?: boolean
    stockQuantity: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemsUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    isCourseItem?: boolean
    isExtraItem?: boolean
    stockQuantity: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemsCreateOrConnectWithoutCategoryInput = {
    where: MenuItemsWhereUniqueInput
    create: XOR<MenuItemsCreateWithoutCategoryInput, MenuItemsUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemsCreateManyCategoryInputEnvelope = {
    data: MenuItemsCreateManyCategoryInput | MenuItemsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type InventoryItemsCreateWithoutCategoryInput = {
    name: string
    description?: string | null
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryTransactions?: InventoryTransactionsCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemsUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description?: string | null
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryTransactions?: InventoryTransactionsUncheckedCreateNestedManyWithoutInventoryItemInput
  }

  export type InventoryItemsCreateOrConnectWithoutCategoryInput = {
    where: InventoryItemsWhereUniqueInput
    create: XOR<InventoryItemsCreateWithoutCategoryInput, InventoryItemsUncheckedCreateWithoutCategoryInput>
  }

  export type InventoryItemsCreateManyCategoryInputEnvelope = {
    data: InventoryItemsCreateManyCategoryInput | InventoryItemsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemsWhereUniqueInput
    update: XOR<MenuItemsUpdateWithoutCategoryInput, MenuItemsUncheckedUpdateWithoutCategoryInput>
    create: XOR<MenuItemsCreateWithoutCategoryInput, MenuItemsUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemsWhereUniqueInput
    data: XOR<MenuItemsUpdateWithoutCategoryInput, MenuItemsUncheckedUpdateWithoutCategoryInput>
  }

  export type MenuItemsUpdateManyWithWhereWithoutCategoryInput = {
    where: MenuItemsScalarWhereInput
    data: XOR<MenuItemsUpdateManyMutationInput, MenuItemsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MenuItemsScalarWhereInput = {
    AND?: MenuItemsScalarWhereInput | MenuItemsScalarWhereInput[]
    OR?: MenuItemsScalarWhereInput[]
    NOT?: MenuItemsScalarWhereInput | MenuItemsScalarWhereInput[]
    id?: IntFilter<"MenuItems"> | number
    name?: StringFilter<"MenuItems"> | string
    description?: StringNullableFilter<"MenuItems"> | string | null
    price?: FloatFilter<"MenuItems"> | number
    categoryId?: IntFilter<"MenuItems"> | number
    isCourseItem?: BoolFilter<"MenuItems"> | boolean
    isExtraItem?: BoolFilter<"MenuItems"> | boolean
    stockQuantity?: IntFilter<"MenuItems"> | number
    isActive?: BoolFilter<"MenuItems"> | boolean
    createdAt?: DateTimeFilter<"MenuItems"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItems"> | Date | string
  }

  export type InventoryItemsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: InventoryItemsWhereUniqueInput
    update: XOR<InventoryItemsUpdateWithoutCategoryInput, InventoryItemsUncheckedUpdateWithoutCategoryInput>
    create: XOR<InventoryItemsCreateWithoutCategoryInput, InventoryItemsUncheckedCreateWithoutCategoryInput>
  }

  export type InventoryItemsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: InventoryItemsWhereUniqueInput
    data: XOR<InventoryItemsUpdateWithoutCategoryInput, InventoryItemsUncheckedUpdateWithoutCategoryInput>
  }

  export type InventoryItemsUpdateManyWithWhereWithoutCategoryInput = {
    where: InventoryItemsScalarWhereInput
    data: XOR<InventoryItemsUpdateManyMutationInput, InventoryItemsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type InventoryItemsScalarWhereInput = {
    AND?: InventoryItemsScalarWhereInput | InventoryItemsScalarWhereInput[]
    OR?: InventoryItemsScalarWhereInput[]
    NOT?: InventoryItemsScalarWhereInput | InventoryItemsScalarWhereInput[]
    id?: IntFilter<"InventoryItems"> | number
    name?: StringFilter<"InventoryItems"> | string
    description?: StringNullableFilter<"InventoryItems"> | string | null
    categoryId?: IntFilter<"InventoryItems"> | number
    quantity?: FloatFilter<"InventoryItems"> | number
    unit?: StringFilter<"InventoryItems"> | string
    createdAt?: DateTimeFilter<"InventoryItems"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItems"> | Date | string
  }

  export type CategoriesCreateWithoutMenuItemsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItems?: InventoryItemsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateWithoutMenuItemsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItems?: InventoryItemsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesCreateOrConnectWithoutMenuItemsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutMenuItemsInput, CategoriesUncheckedCreateWithoutMenuItemsInput>
  }

  export type OrderItemsCreateWithoutMenuItemInput = {
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrderItemsInput
    seat: OrderSeatsCreateNestedOneWithoutOrderItemsInput
    course?: CoursesCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateWithoutMenuItemInput = {
    id?: number
    orderId: number
    seatId: number
    courseId?: number | null
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsCreateOrConnectWithoutMenuItemInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutMenuItemInput, OrderItemsUncheckedCreateWithoutMenuItemInput>
  }

  export type OrderItemsCreateManyMenuItemInputEnvelope = {
    data: OrderItemsCreateManyMenuItemInput | OrderItemsCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutMenuItemsInput = {
    update: XOR<CategoriesUpdateWithoutMenuItemsInput, CategoriesUncheckedUpdateWithoutMenuItemsInput>
    create: XOR<CategoriesCreateWithoutMenuItemsInput, CategoriesUncheckedCreateWithoutMenuItemsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutMenuItemsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutMenuItemsInput, CategoriesUncheckedUpdateWithoutMenuItemsInput>
  }

  export type CategoriesUpdateWithoutMenuItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItems?: InventoryItemsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutMenuItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItems?: InventoryItemsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutMenuItemInput, OrderItemsUncheckedUpdateWithoutMenuItemInput>
    create: XOR<OrderItemsCreateWithoutMenuItemInput, OrderItemsUncheckedCreateWithoutMenuItemInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutMenuItemInput, OrderItemsUncheckedUpdateWithoutMenuItemInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutMenuItemInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type OrdersCreateWithoutTableInput = {
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    server: UsersCreateNestedOneWithoutOrdersInput
    orderSeats?: OrderSeatsCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemsCreateNestedManyWithoutOrderInput
    payments?: PaymentsCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersUncheckedCreateWithoutTableInput = {
    id?: number
    serverId: number
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orderSeats?: OrderSeatsUncheckedCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsUncheckedCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersCreateOrConnectWithoutTableInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput>
  }

  export type OrdersCreateManyTableInputEnvelope = {
    data: OrdersCreateManyTableInput | OrdersCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type ReservationsCreateWithoutTableInput = {
    customerName: string
    contactNumber: string
    email?: string | null
    partySize: number
    reservationTime: Date | string
    status: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationsUncheckedCreateWithoutTableInput = {
    id?: number
    customerName: string
    contactNumber: string
    email?: string | null
    partySize: number
    reservationTime: Date | string
    status: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationsCreateOrConnectWithoutTableInput = {
    where: ReservationsWhereUniqueInput
    create: XOR<ReservationsCreateWithoutTableInput, ReservationsUncheckedCreateWithoutTableInput>
  }

  export type ReservationsCreateManyTableInputEnvelope = {
    data: ReservationsCreateManyTableInput | ReservationsCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithWhereUniqueWithoutTableInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutTableInput, OrdersUncheckedUpdateWithoutTableInput>
    create: XOR<OrdersCreateWithoutTableInput, OrdersUncheckedCreateWithoutTableInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutTableInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutTableInput, OrdersUncheckedUpdateWithoutTableInput>
  }

  export type OrdersUpdateManyWithWhereWithoutTableInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutTableInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    tableId?: IntFilter<"Orders"> | number
    serverId?: IntFilter<"Orders"> | number
    orderStatus?: EnumOrderStatusFilter<"Orders"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
  }

  export type ReservationsUpsertWithWhereUniqueWithoutTableInput = {
    where: ReservationsWhereUniqueInput
    update: XOR<ReservationsUpdateWithoutTableInput, ReservationsUncheckedUpdateWithoutTableInput>
    create: XOR<ReservationsCreateWithoutTableInput, ReservationsUncheckedCreateWithoutTableInput>
  }

  export type ReservationsUpdateWithWhereUniqueWithoutTableInput = {
    where: ReservationsWhereUniqueInput
    data: XOR<ReservationsUpdateWithoutTableInput, ReservationsUncheckedUpdateWithoutTableInput>
  }

  export type ReservationsUpdateManyWithWhereWithoutTableInput = {
    where: ReservationsScalarWhereInput
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyWithoutTableInput>
  }

  export type ReservationsScalarWhereInput = {
    AND?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
    OR?: ReservationsScalarWhereInput[]
    NOT?: ReservationsScalarWhereInput | ReservationsScalarWhereInput[]
    id?: IntFilter<"Reservations"> | number
    customerName?: StringFilter<"Reservations"> | string
    contactNumber?: StringFilter<"Reservations"> | string
    email?: StringNullableFilter<"Reservations"> | string | null
    partySize?: IntFilter<"Reservations"> | number
    reservationTime?: DateTimeFilter<"Reservations"> | Date | string
    tableId?: IntNullableFilter<"Reservations"> | number | null
    status?: EnumReservationStatusFilter<"Reservations"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservations"> | Date | string
    updatedAt?: DateTimeFilter<"Reservations"> | Date | string
  }

  export type OrdersCreateWithoutServerInput = {
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TablesCreateNestedOneWithoutOrdersInput
    orderSeats?: OrderSeatsCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemsCreateNestedManyWithoutOrderInput
    payments?: PaymentsCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersUncheckedCreateWithoutServerInput = {
    id?: number
    tableId: number
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orderSeats?: OrderSeatsUncheckedCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsUncheckedCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersCreateOrConnectWithoutServerInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutServerInput, OrdersUncheckedCreateWithoutServerInput>
  }

  export type OrdersCreateManyServerInputEnvelope = {
    data: OrdersCreateManyServerInput | OrdersCreateManyServerInput[]
    skipDuplicates?: boolean
  }

  export type InventoryTransactionsCreateWithoutCreatedByInput = {
    quantityChange: number
    transactionType: $Enums.TransactionType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItem: InventoryItemsCreateNestedOneWithoutInventoryTransactionsInput
    relatedOrder?: OrdersCreateNestedOneWithoutInventoryTransactionsInput
  }

  export type InventoryTransactionsUncheckedCreateWithoutCreatedByInput = {
    id?: number
    inventoryItemId: number
    quantityChange: number
    transactionType: $Enums.TransactionType
    relatedOrderId?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionsCreateOrConnectWithoutCreatedByInput = {
    where: InventoryTransactionsWhereUniqueInput
    create: XOR<InventoryTransactionsCreateWithoutCreatedByInput, InventoryTransactionsUncheckedCreateWithoutCreatedByInput>
  }

  export type InventoryTransactionsCreateManyCreatedByInputEnvelope = {
    data: InventoryTransactionsCreateManyCreatedByInput | InventoryTransactionsCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithWhereUniqueWithoutServerInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutServerInput, OrdersUncheckedUpdateWithoutServerInput>
    create: XOR<OrdersCreateWithoutServerInput, OrdersUncheckedCreateWithoutServerInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutServerInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutServerInput, OrdersUncheckedUpdateWithoutServerInput>
  }

  export type OrdersUpdateManyWithWhereWithoutServerInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutServerInput>
  }

  export type InventoryTransactionsUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: InventoryTransactionsWhereUniqueInput
    update: XOR<InventoryTransactionsUpdateWithoutCreatedByInput, InventoryTransactionsUncheckedUpdateWithoutCreatedByInput>
    create: XOR<InventoryTransactionsCreateWithoutCreatedByInput, InventoryTransactionsUncheckedCreateWithoutCreatedByInput>
  }

  export type InventoryTransactionsUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: InventoryTransactionsWhereUniqueInput
    data: XOR<InventoryTransactionsUpdateWithoutCreatedByInput, InventoryTransactionsUncheckedUpdateWithoutCreatedByInput>
  }

  export type InventoryTransactionsUpdateManyWithWhereWithoutCreatedByInput = {
    where: InventoryTransactionsScalarWhereInput
    data: XOR<InventoryTransactionsUpdateManyMutationInput, InventoryTransactionsUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type InventoryTransactionsScalarWhereInput = {
    AND?: InventoryTransactionsScalarWhereInput | InventoryTransactionsScalarWhereInput[]
    OR?: InventoryTransactionsScalarWhereInput[]
    NOT?: InventoryTransactionsScalarWhereInput | InventoryTransactionsScalarWhereInput[]
    id?: IntFilter<"InventoryTransactions"> | number
    inventoryItemId?: IntFilter<"InventoryTransactions"> | number
    quantityChange?: FloatFilter<"InventoryTransactions"> | number
    transactionType?: EnumTransactionTypeFilter<"InventoryTransactions"> | $Enums.TransactionType
    relatedOrderId?: IntNullableFilter<"InventoryTransactions"> | number | null
    notes?: StringNullableFilter<"InventoryTransactions"> | string | null
    createdById?: IntFilter<"InventoryTransactions"> | number
    createdAt?: DateTimeFilter<"InventoryTransactions"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryTransactions"> | Date | string
  }

  export type TablesCreateWithoutOrdersInput = {
    tableNumber: number
    capacity: number
    status: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationsCreateNestedManyWithoutTableInput
  }

  export type TablesUncheckedCreateWithoutOrdersInput = {
    id?: number
    tableNumber: number
    capacity: number
    status: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationsUncheckedCreateNestedManyWithoutTableInput
  }

  export type TablesCreateOrConnectWithoutOrdersInput = {
    where: TablesWhereUniqueInput
    create: XOR<TablesCreateWithoutOrdersInput, TablesUncheckedCreateWithoutOrdersInput>
  }

  export type UsersCreateWithoutOrdersInput = {
    username: string
    password: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryTransactions?: InventoryTransactionsCreateNestedManyWithoutCreatedByInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    id?: number
    username: string
    password: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryTransactions?: InventoryTransactionsUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type OrderSeatsCreateWithoutOrderInput = {
    seatNumber: number
    customerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsCreateNestedManyWithoutSeatInput
    paymentDetails?: PaymentDetailsCreateNestedManyWithoutSeatInput
  }

  export type OrderSeatsUncheckedCreateWithoutOrderInput = {
    id?: number
    seatNumber: number
    customerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutSeatInput
    paymentDetails?: PaymentDetailsUncheckedCreateNestedManyWithoutSeatInput
  }

  export type OrderSeatsCreateOrConnectWithoutOrderInput = {
    where: OrderSeatsWhereUniqueInput
    create: XOR<OrderSeatsCreateWithoutOrderInput, OrderSeatsUncheckedCreateWithoutOrderInput>
  }

  export type OrderSeatsCreateManyOrderInputEnvelope = {
    data: OrderSeatsCreateManyOrderInput | OrderSeatsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemsCreateWithoutOrderInput = {
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    seat: OrderSeatsCreateNestedOneWithoutOrderItemsInput
    menuItem: MenuItemsCreateNestedOneWithoutOrderItemsInput
    course?: CoursesCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateWithoutOrderInput = {
    id?: number
    seatId: number
    itemId: number
    courseId?: number | null
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsCreateOrConnectWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemsCreateManyOrderInputEnvelope = {
    data: OrderItemsCreateManyOrderInput | OrderItemsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentsCreateWithoutOrderInput = {
    paymentType: $Enums.PaymentType
    paymentMethod: $Enums.PaymentMethod
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    qrCodeData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentDetails?: PaymentDetailsCreateNestedManyWithoutPaymentInput
  }

  export type PaymentsUncheckedCreateWithoutOrderInput = {
    id?: number
    paymentType: $Enums.PaymentType
    paymentMethod: $Enums.PaymentMethod
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    qrCodeData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentDetails?: PaymentDetailsUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentsCreateOrConnectWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
  }

  export type PaymentsCreateManyOrderInputEnvelope = {
    data: PaymentsCreateManyOrderInput | PaymentsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type InventoryTransactionsCreateWithoutRelatedOrderInput = {
    quantityChange: number
    transactionType: $Enums.TransactionType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryItem: InventoryItemsCreateNestedOneWithoutInventoryTransactionsInput
    createdBy: UsersCreateNestedOneWithoutInventoryTransactionsInput
  }

  export type InventoryTransactionsUncheckedCreateWithoutRelatedOrderInput = {
    id?: number
    inventoryItemId: number
    quantityChange: number
    transactionType: $Enums.TransactionType
    notes?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionsCreateOrConnectWithoutRelatedOrderInput = {
    where: InventoryTransactionsWhereUniqueInput
    create: XOR<InventoryTransactionsCreateWithoutRelatedOrderInput, InventoryTransactionsUncheckedCreateWithoutRelatedOrderInput>
  }

  export type InventoryTransactionsCreateManyRelatedOrderInputEnvelope = {
    data: InventoryTransactionsCreateManyRelatedOrderInput | InventoryTransactionsCreateManyRelatedOrderInput[]
    skipDuplicates?: boolean
  }

  export type TablesUpsertWithoutOrdersInput = {
    update: XOR<TablesUpdateWithoutOrdersInput, TablesUncheckedUpdateWithoutOrdersInput>
    create: XOR<TablesCreateWithoutOrdersInput, TablesUncheckedCreateWithoutOrdersInput>
    where?: TablesWhereInput
  }

  export type TablesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: TablesWhereInput
    data: XOR<TablesUpdateWithoutOrdersInput, TablesUncheckedUpdateWithoutOrdersInput>
  }

  export type TablesUpdateWithoutOrdersInput = {
    tableNumber?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationsUpdateManyWithoutTableNestedInput
  }

  export type TablesUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableNumber?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationsUncheckedUpdateManyWithoutTableNestedInput
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryTransactions?: InventoryTransactionsUpdateManyWithoutCreatedByNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryTransactions?: InventoryTransactionsUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type OrderSeatsUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderSeatsWhereUniqueInput
    update: XOR<OrderSeatsUpdateWithoutOrderInput, OrderSeatsUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderSeatsCreateWithoutOrderInput, OrderSeatsUncheckedCreateWithoutOrderInput>
  }

  export type OrderSeatsUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderSeatsWhereUniqueInput
    data: XOR<OrderSeatsUpdateWithoutOrderInput, OrderSeatsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderSeatsUpdateManyWithWhereWithoutOrderInput = {
    where: OrderSeatsScalarWhereInput
    data: XOR<OrderSeatsUpdateManyMutationInput, OrderSeatsUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderSeatsScalarWhereInput = {
    AND?: OrderSeatsScalarWhereInput | OrderSeatsScalarWhereInput[]
    OR?: OrderSeatsScalarWhereInput[]
    NOT?: OrderSeatsScalarWhereInput | OrderSeatsScalarWhereInput[]
    id?: IntFilter<"OrderSeats"> | number
    orderId?: IntFilter<"OrderSeats"> | number
    seatNumber?: IntFilter<"OrderSeats"> | number
    customerName?: StringNullableFilter<"OrderSeats"> | string | null
    createdAt?: DateTimeFilter<"OrderSeats"> | Date | string
    updatedAt?: DateTimeFilter<"OrderSeats"> | Date | string
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutOrderInput, OrderItemsUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemsCreateWithoutOrderInput, OrderItemsUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutOrderInput, OrderItemsUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentsUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentsCreateWithoutOrderInput, PaymentsUncheckedCreateWithoutOrderInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutOrderInput, PaymentsUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentsScalarWhereInput = {
    AND?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    OR?: PaymentsScalarWhereInput[]
    NOT?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    id?: IntFilter<"Payments"> | number
    orderId?: IntFilter<"Payments"> | number
    paymentType?: EnumPaymentTypeFilter<"Payments"> | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFilter<"Payments"> | $Enums.PaymentMethod
    totalAmount?: FloatFilter<"Payments"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Payments"> | $Enums.PaymentStatus
    qrCodeData?: StringNullableFilter<"Payments"> | string | null
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    updatedAt?: DateTimeFilter<"Payments"> | Date | string
  }

  export type InventoryTransactionsUpsertWithWhereUniqueWithoutRelatedOrderInput = {
    where: InventoryTransactionsWhereUniqueInput
    update: XOR<InventoryTransactionsUpdateWithoutRelatedOrderInput, InventoryTransactionsUncheckedUpdateWithoutRelatedOrderInput>
    create: XOR<InventoryTransactionsCreateWithoutRelatedOrderInput, InventoryTransactionsUncheckedCreateWithoutRelatedOrderInput>
  }

  export type InventoryTransactionsUpdateWithWhereUniqueWithoutRelatedOrderInput = {
    where: InventoryTransactionsWhereUniqueInput
    data: XOR<InventoryTransactionsUpdateWithoutRelatedOrderInput, InventoryTransactionsUncheckedUpdateWithoutRelatedOrderInput>
  }

  export type InventoryTransactionsUpdateManyWithWhereWithoutRelatedOrderInput = {
    where: InventoryTransactionsScalarWhereInput
    data: XOR<InventoryTransactionsUpdateManyMutationInput, InventoryTransactionsUncheckedUpdateManyWithoutRelatedOrderInput>
  }

  export type OrdersCreateWithoutOrderSeatsInput = {
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TablesCreateNestedOneWithoutOrdersInput
    server: UsersCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemsCreateNestedManyWithoutOrderInput
    payments?: PaymentsCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersUncheckedCreateWithoutOrderSeatsInput = {
    id?: number
    tableId: number
    serverId: number
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsUncheckedCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersCreateOrConnectWithoutOrderSeatsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderSeatsInput, OrdersUncheckedCreateWithoutOrderSeatsInput>
  }

  export type OrderItemsCreateWithoutSeatInput = {
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrderItemsInput
    menuItem: MenuItemsCreateNestedOneWithoutOrderItemsInput
    course?: CoursesCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemsUncheckedCreateWithoutSeatInput = {
    id?: number
    orderId: number
    itemId: number
    courseId?: number | null
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsCreateOrConnectWithoutSeatInput = {
    where: OrderItemsWhereUniqueInput
    create: XOR<OrderItemsCreateWithoutSeatInput, OrderItemsUncheckedCreateWithoutSeatInput>
  }

  export type OrderItemsCreateManySeatInputEnvelope = {
    data: OrderItemsCreateManySeatInput | OrderItemsCreateManySeatInput[]
    skipDuplicates?: boolean
  }

  export type PaymentDetailsCreateWithoutSeatInput = {
    amount: number
    isCoursePayment?: boolean
    isExtraPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentsCreateNestedOneWithoutPaymentDetailsInput
  }

  export type PaymentDetailsUncheckedCreateWithoutSeatInput = {
    id?: number
    paymentId: number
    amount: number
    isCoursePayment?: boolean
    isExtraPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailsCreateOrConnectWithoutSeatInput = {
    where: PaymentDetailsWhereUniqueInput
    create: XOR<PaymentDetailsCreateWithoutSeatInput, PaymentDetailsUncheckedCreateWithoutSeatInput>
  }

  export type PaymentDetailsCreateManySeatInputEnvelope = {
    data: PaymentDetailsCreateManySeatInput | PaymentDetailsCreateManySeatInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithoutOrderSeatsInput = {
    update: XOR<OrdersUpdateWithoutOrderSeatsInput, OrdersUncheckedUpdateWithoutOrderSeatsInput>
    create: XOR<OrdersCreateWithoutOrderSeatsInput, OrdersUncheckedCreateWithoutOrderSeatsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrderSeatsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrderSeatsInput, OrdersUncheckedUpdateWithoutOrderSeatsInput>
  }

  export type OrdersUpdateWithoutOrderSeatsInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TablesUpdateOneRequiredWithoutOrdersNestedInput
    server?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    orderItems?: OrderItemsUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUpdateManyWithoutRelatedOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrderSeatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUncheckedUpdateManyWithoutRelatedOrderNestedInput
  }

  export type OrderItemsUpsertWithWhereUniqueWithoutSeatInput = {
    where: OrderItemsWhereUniqueInput
    update: XOR<OrderItemsUpdateWithoutSeatInput, OrderItemsUncheckedUpdateWithoutSeatInput>
    create: XOR<OrderItemsCreateWithoutSeatInput, OrderItemsUncheckedCreateWithoutSeatInput>
  }

  export type OrderItemsUpdateWithWhereUniqueWithoutSeatInput = {
    where: OrderItemsWhereUniqueInput
    data: XOR<OrderItemsUpdateWithoutSeatInput, OrderItemsUncheckedUpdateWithoutSeatInput>
  }

  export type OrderItemsUpdateManyWithWhereWithoutSeatInput = {
    where: OrderItemsScalarWhereInput
    data: XOR<OrderItemsUpdateManyMutationInput, OrderItemsUncheckedUpdateManyWithoutSeatInput>
  }

  export type PaymentDetailsUpsertWithWhereUniqueWithoutSeatInput = {
    where: PaymentDetailsWhereUniqueInput
    update: XOR<PaymentDetailsUpdateWithoutSeatInput, PaymentDetailsUncheckedUpdateWithoutSeatInput>
    create: XOR<PaymentDetailsCreateWithoutSeatInput, PaymentDetailsUncheckedCreateWithoutSeatInput>
  }

  export type PaymentDetailsUpdateWithWhereUniqueWithoutSeatInput = {
    where: PaymentDetailsWhereUniqueInput
    data: XOR<PaymentDetailsUpdateWithoutSeatInput, PaymentDetailsUncheckedUpdateWithoutSeatInput>
  }

  export type PaymentDetailsUpdateManyWithWhereWithoutSeatInput = {
    where: PaymentDetailsScalarWhereInput
    data: XOR<PaymentDetailsUpdateManyMutationInput, PaymentDetailsUncheckedUpdateManyWithoutSeatInput>
  }

  export type PaymentDetailsScalarWhereInput = {
    AND?: PaymentDetailsScalarWhereInput | PaymentDetailsScalarWhereInput[]
    OR?: PaymentDetailsScalarWhereInput[]
    NOT?: PaymentDetailsScalarWhereInput | PaymentDetailsScalarWhereInput[]
    id?: IntFilter<"PaymentDetails"> | number
    paymentId?: IntFilter<"PaymentDetails"> | number
    seatId?: IntNullableFilter<"PaymentDetails"> | number | null
    amount?: FloatFilter<"PaymentDetails"> | number
    isCoursePayment?: BoolFilter<"PaymentDetails"> | boolean
    isExtraPayment?: BoolFilter<"PaymentDetails"> | boolean
    createdAt?: DateTimeFilter<"PaymentDetails"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentDetails"> | Date | string
  }

  export type OrdersCreateWithoutOrderItemsInput = {
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TablesCreateNestedOneWithoutOrdersInput
    server: UsersCreateNestedOneWithoutOrdersInput
    orderSeats?: OrderSeatsCreateNestedManyWithoutOrderInput
    payments?: PaymentsCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    tableId: number
    serverId: number
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orderSeats?: OrderSeatsUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsUncheckedCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersCreateOrConnectWithoutOrderItemsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderSeatsCreateWithoutOrderItemsInput = {
    seatNumber: number
    customerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrderSeatsInput
    paymentDetails?: PaymentDetailsCreateNestedManyWithoutSeatInput
  }

  export type OrderSeatsUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    orderId: number
    seatNumber: number
    customerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentDetails?: PaymentDetailsUncheckedCreateNestedManyWithoutSeatInput
  }

  export type OrderSeatsCreateOrConnectWithoutOrderItemsInput = {
    where: OrderSeatsWhereUniqueInput
    create: XOR<OrderSeatsCreateWithoutOrderItemsInput, OrderSeatsUncheckedCreateWithoutOrderItemsInput>
  }

  export type MenuItemsCreateWithoutOrderItemsInput = {
    name: string
    description?: string | null
    price: number
    isCourseItem?: boolean
    isExtraItem?: boolean
    stockQuantity: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutMenuItemsInput
  }

  export type MenuItemsUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    categoryId: number
    isCourseItem?: boolean
    isExtraItem?: boolean
    stockQuantity: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemsCreateOrConnectWithoutOrderItemsInput = {
    where: MenuItemsWhereUniqueInput
    create: XOR<MenuItemsCreateWithoutOrderItemsInput, MenuItemsUncheckedCreateWithoutOrderItemsInput>
  }

  export type CoursesCreateWithoutOrderItemsInput = {
    name: string
    description?: string | null
    price: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursesUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursesCreateOrConnectWithoutOrderItemsInput = {
    where: CoursesWhereUniqueInput
    create: XOR<CoursesCreateWithoutOrderItemsInput, CoursesUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrdersUpsertWithoutOrderItemsInput = {
    update: XOR<OrdersUpdateWithoutOrderItemsInput, OrdersUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrdersCreateWithoutOrderItemsInput, OrdersUncheckedCreateWithoutOrderItemsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrderItemsInput, OrdersUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrdersUpdateWithoutOrderItemsInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TablesUpdateOneRequiredWithoutOrdersNestedInput
    server?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    orderSeats?: OrderSeatsUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUpdateManyWithoutRelatedOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSeats?: OrderSeatsUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUncheckedUpdateManyWithoutRelatedOrderNestedInput
  }

  export type OrderSeatsUpsertWithoutOrderItemsInput = {
    update: XOR<OrderSeatsUpdateWithoutOrderItemsInput, OrderSeatsUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderSeatsCreateWithoutOrderItemsInput, OrderSeatsUncheckedCreateWithoutOrderItemsInput>
    where?: OrderSeatsWhereInput
  }

  export type OrderSeatsUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderSeatsWhereInput
    data: XOR<OrderSeatsUpdateWithoutOrderItemsInput, OrderSeatsUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderSeatsUpdateWithoutOrderItemsInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrderSeatsNestedInput
    paymentDetails?: PaymentDetailsUpdateManyWithoutSeatNestedInput
  }

  export type OrderSeatsUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDetails?: PaymentDetailsUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type MenuItemsUpsertWithoutOrderItemsInput = {
    update: XOR<MenuItemsUpdateWithoutOrderItemsInput, MenuItemsUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<MenuItemsCreateWithoutOrderItemsInput, MenuItemsUncheckedCreateWithoutOrderItemsInput>
    where?: MenuItemsWhereInput
  }

  export type MenuItemsUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: MenuItemsWhereInput
    data: XOR<MenuItemsUpdateWithoutOrderItemsInput, MenuItemsUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MenuItemsUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isCourseItem?: BoolFieldUpdateOperationsInput | boolean
    isExtraItem?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutMenuItemsNestedInput
  }

  export type MenuItemsUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    isCourseItem?: BoolFieldUpdateOperationsInput | boolean
    isExtraItem?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursesUpsertWithoutOrderItemsInput = {
    update: XOR<CoursesUpdateWithoutOrderItemsInput, CoursesUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<CoursesCreateWithoutOrderItemsInput, CoursesUncheckedCreateWithoutOrderItemsInput>
    where?: CoursesWhereInput
  }

  export type CoursesUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: CoursesWhereInput
    data: XOR<CoursesUpdateWithoutOrderItemsInput, CoursesUncheckedUpdateWithoutOrderItemsInput>
  }

  export type CoursesUpdateWithoutOrderItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursesUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateWithoutPaymentsInput = {
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TablesCreateNestedOneWithoutOrdersInput
    server: UsersCreateNestedOneWithoutOrdersInput
    orderSeats?: OrderSeatsCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemsCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersUncheckedCreateWithoutPaymentsInput = {
    id?: number
    tableId: number
    serverId: number
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orderSeats?: OrderSeatsUncheckedCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
    inventoryTransactions?: InventoryTransactionsUncheckedCreateNestedManyWithoutRelatedOrderInput
  }

  export type OrdersCreateOrConnectWithoutPaymentsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutPaymentsInput, OrdersUncheckedCreateWithoutPaymentsInput>
  }

  export type PaymentDetailsCreateWithoutPaymentInput = {
    amount: number
    isCoursePayment?: boolean
    isExtraPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seat?: OrderSeatsCreateNestedOneWithoutPaymentDetailsInput
  }

  export type PaymentDetailsUncheckedCreateWithoutPaymentInput = {
    id?: number
    seatId?: number | null
    amount: number
    isCoursePayment?: boolean
    isExtraPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailsCreateOrConnectWithoutPaymentInput = {
    where: PaymentDetailsWhereUniqueInput
    create: XOR<PaymentDetailsCreateWithoutPaymentInput, PaymentDetailsUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentDetailsCreateManyPaymentInputEnvelope = {
    data: PaymentDetailsCreateManyPaymentInput | PaymentDetailsCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithoutPaymentsInput = {
    update: XOR<OrdersUpdateWithoutPaymentsInput, OrdersUncheckedUpdateWithoutPaymentsInput>
    create: XOR<OrdersCreateWithoutPaymentsInput, OrdersUncheckedCreateWithoutPaymentsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutPaymentsInput, OrdersUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrdersUpdateWithoutPaymentsInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TablesUpdateOneRequiredWithoutOrdersNestedInput
    server?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    orderSeats?: OrderSeatsUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemsUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUpdateManyWithoutRelatedOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSeats?: OrderSeatsUncheckedUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUncheckedUpdateManyWithoutRelatedOrderNestedInput
  }

  export type PaymentDetailsUpsertWithWhereUniqueWithoutPaymentInput = {
    where: PaymentDetailsWhereUniqueInput
    update: XOR<PaymentDetailsUpdateWithoutPaymentInput, PaymentDetailsUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentDetailsCreateWithoutPaymentInput, PaymentDetailsUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentDetailsUpdateWithWhereUniqueWithoutPaymentInput = {
    where: PaymentDetailsWhereUniqueInput
    data: XOR<PaymentDetailsUpdateWithoutPaymentInput, PaymentDetailsUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentDetailsUpdateManyWithWhereWithoutPaymentInput = {
    where: PaymentDetailsScalarWhereInput
    data: XOR<PaymentDetailsUpdateManyMutationInput, PaymentDetailsUncheckedUpdateManyWithoutPaymentInput>
  }

  export type PaymentsCreateWithoutPaymentDetailsInput = {
    paymentType: $Enums.PaymentType
    paymentMethod: $Enums.PaymentMethod
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    qrCodeData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateWithoutPaymentDetailsInput = {
    id?: number
    orderId: number
    paymentType: $Enums.PaymentType
    paymentMethod: $Enums.PaymentMethod
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    qrCodeData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutPaymentDetailsInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutPaymentDetailsInput, PaymentsUncheckedCreateWithoutPaymentDetailsInput>
  }

  export type OrderSeatsCreateWithoutPaymentDetailsInput = {
    seatNumber: number
    customerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrdersCreateNestedOneWithoutOrderSeatsInput
    orderItems?: OrderItemsCreateNestedManyWithoutSeatInput
  }

  export type OrderSeatsUncheckedCreateWithoutPaymentDetailsInput = {
    id?: number
    orderId: number
    seatNumber: number
    customerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutSeatInput
  }

  export type OrderSeatsCreateOrConnectWithoutPaymentDetailsInput = {
    where: OrderSeatsWhereUniqueInput
    create: XOR<OrderSeatsCreateWithoutPaymentDetailsInput, OrderSeatsUncheckedCreateWithoutPaymentDetailsInput>
  }

  export type PaymentsUpsertWithoutPaymentDetailsInput = {
    update: XOR<PaymentsUpdateWithoutPaymentDetailsInput, PaymentsUncheckedUpdateWithoutPaymentDetailsInput>
    create: XOR<PaymentsCreateWithoutPaymentDetailsInput, PaymentsUncheckedCreateWithoutPaymentDetailsInput>
    where?: PaymentsWhereInput
  }

  export type PaymentsUpdateToOneWithWhereWithoutPaymentDetailsInput = {
    where?: PaymentsWhereInput
    data: XOR<PaymentsUpdateWithoutPaymentDetailsInput, PaymentsUncheckedUpdateWithoutPaymentDetailsInput>
  }

  export type PaymentsUpdateWithoutPaymentDetailsInput = {
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutPaymentDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderSeatsUpsertWithoutPaymentDetailsInput = {
    update: XOR<OrderSeatsUpdateWithoutPaymentDetailsInput, OrderSeatsUncheckedUpdateWithoutPaymentDetailsInput>
    create: XOR<OrderSeatsCreateWithoutPaymentDetailsInput, OrderSeatsUncheckedCreateWithoutPaymentDetailsInput>
    where?: OrderSeatsWhereInput
  }

  export type OrderSeatsUpdateToOneWithWhereWithoutPaymentDetailsInput = {
    where?: OrderSeatsWhereInput
    data: XOR<OrderSeatsUpdateWithoutPaymentDetailsInput, OrderSeatsUncheckedUpdateWithoutPaymentDetailsInput>
  }

  export type OrderSeatsUpdateWithoutPaymentDetailsInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrderSeatsNestedInput
    orderItems?: OrderItemsUpdateManyWithoutSeatNestedInput
  }

  export type OrderSeatsUncheckedUpdateWithoutPaymentDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type CategoriesCreateWithoutInventoryItemsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItems?: MenuItemsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateWithoutInventoryItemsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItems?: MenuItemsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesCreateOrConnectWithoutInventoryItemsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutInventoryItemsInput, CategoriesUncheckedCreateWithoutInventoryItemsInput>
  }

  export type InventoryTransactionsCreateWithoutInventoryItemInput = {
    quantityChange: number
    transactionType: $Enums.TransactionType
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedOrder?: OrdersCreateNestedOneWithoutInventoryTransactionsInput
    createdBy: UsersCreateNestedOneWithoutInventoryTransactionsInput
  }

  export type InventoryTransactionsUncheckedCreateWithoutInventoryItemInput = {
    id?: number
    quantityChange: number
    transactionType: $Enums.TransactionType
    relatedOrderId?: number | null
    notes?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionsCreateOrConnectWithoutInventoryItemInput = {
    where: InventoryTransactionsWhereUniqueInput
    create: XOR<InventoryTransactionsCreateWithoutInventoryItemInput, InventoryTransactionsUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryTransactionsCreateManyInventoryItemInputEnvelope = {
    data: InventoryTransactionsCreateManyInventoryItemInput | InventoryTransactionsCreateManyInventoryItemInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutInventoryItemsInput = {
    update: XOR<CategoriesUpdateWithoutInventoryItemsInput, CategoriesUncheckedUpdateWithoutInventoryItemsInput>
    create: XOR<CategoriesCreateWithoutInventoryItemsInput, CategoriesUncheckedCreateWithoutInventoryItemsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutInventoryItemsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutInventoryItemsInput, CategoriesUncheckedUpdateWithoutInventoryItemsInput>
  }

  export type CategoriesUpdateWithoutInventoryItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItems?: MenuItemsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutInventoryItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItems?: MenuItemsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type InventoryTransactionsUpsertWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryTransactionsWhereUniqueInput
    update: XOR<InventoryTransactionsUpdateWithoutInventoryItemInput, InventoryTransactionsUncheckedUpdateWithoutInventoryItemInput>
    create: XOR<InventoryTransactionsCreateWithoutInventoryItemInput, InventoryTransactionsUncheckedCreateWithoutInventoryItemInput>
  }

  export type InventoryTransactionsUpdateWithWhereUniqueWithoutInventoryItemInput = {
    where: InventoryTransactionsWhereUniqueInput
    data: XOR<InventoryTransactionsUpdateWithoutInventoryItemInput, InventoryTransactionsUncheckedUpdateWithoutInventoryItemInput>
  }

  export type InventoryTransactionsUpdateManyWithWhereWithoutInventoryItemInput = {
    where: InventoryTransactionsScalarWhereInput
    data: XOR<InventoryTransactionsUpdateManyMutationInput, InventoryTransactionsUncheckedUpdateManyWithoutInventoryItemInput>
  }

  export type InventoryItemsCreateWithoutInventoryTransactionsInput = {
    name: string
    description?: string | null
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutInventoryItemsInput
  }

  export type InventoryItemsUncheckedCreateWithoutInventoryTransactionsInput = {
    id?: number
    name: string
    description?: string | null
    categoryId: number
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemsCreateOrConnectWithoutInventoryTransactionsInput = {
    where: InventoryItemsWhereUniqueInput
    create: XOR<InventoryItemsCreateWithoutInventoryTransactionsInput, InventoryItemsUncheckedCreateWithoutInventoryTransactionsInput>
  }

  export type OrdersCreateWithoutInventoryTransactionsInput = {
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TablesCreateNestedOneWithoutOrdersInput
    server: UsersCreateNestedOneWithoutOrdersInput
    orderSeats?: OrderSeatsCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemsCreateNestedManyWithoutOrderInput
    payments?: PaymentsCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateWithoutInventoryTransactionsInput = {
    id?: number
    tableId: number
    serverId: number
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orderSeats?: OrderSeatsUncheckedCreateNestedManyWithoutOrderInput
    orderItems?: OrderItemsUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersCreateOrConnectWithoutInventoryTransactionsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutInventoryTransactionsInput, OrdersUncheckedCreateWithoutInventoryTransactionsInput>
  }

  export type UsersCreateWithoutInventoryTransactionsInput = {
    username: string
    password: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrdersCreateNestedManyWithoutServerInput
  }

  export type UsersUncheckedCreateWithoutInventoryTransactionsInput = {
    id?: number
    username: string
    password: string
    name: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrdersUncheckedCreateNestedManyWithoutServerInput
  }

  export type UsersCreateOrConnectWithoutInventoryTransactionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutInventoryTransactionsInput, UsersUncheckedCreateWithoutInventoryTransactionsInput>
  }

  export type InventoryItemsUpsertWithoutInventoryTransactionsInput = {
    update: XOR<InventoryItemsUpdateWithoutInventoryTransactionsInput, InventoryItemsUncheckedUpdateWithoutInventoryTransactionsInput>
    create: XOR<InventoryItemsCreateWithoutInventoryTransactionsInput, InventoryItemsUncheckedCreateWithoutInventoryTransactionsInput>
    where?: InventoryItemsWhereInput
  }

  export type InventoryItemsUpdateToOneWithWhereWithoutInventoryTransactionsInput = {
    where?: InventoryItemsWhereInput
    data: XOR<InventoryItemsUpdateWithoutInventoryTransactionsInput, InventoryItemsUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type InventoryItemsUpdateWithoutInventoryTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutInventoryItemsNestedInput
  }

  export type InventoryItemsUncheckedUpdateWithoutInventoryTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpsertWithoutInventoryTransactionsInput = {
    update: XOR<OrdersUpdateWithoutInventoryTransactionsInput, OrdersUncheckedUpdateWithoutInventoryTransactionsInput>
    create: XOR<OrdersCreateWithoutInventoryTransactionsInput, OrdersUncheckedCreateWithoutInventoryTransactionsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutInventoryTransactionsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutInventoryTransactionsInput, OrdersUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type OrdersUpdateWithoutInventoryTransactionsInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TablesUpdateOneRequiredWithoutOrdersNestedInput
    server?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    orderSeats?: OrderSeatsUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemsUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutInventoryTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSeats?: OrderSeatsUncheckedUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UsersUpsertWithoutInventoryTransactionsInput = {
    update: XOR<UsersUpdateWithoutInventoryTransactionsInput, UsersUncheckedUpdateWithoutInventoryTransactionsInput>
    create: XOR<UsersCreateWithoutInventoryTransactionsInput, UsersUncheckedCreateWithoutInventoryTransactionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutInventoryTransactionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutInventoryTransactionsInput, UsersUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type UsersUpdateWithoutInventoryTransactionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateManyWithoutServerNestedInput
  }

  export type UsersUncheckedUpdateWithoutInventoryTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUncheckedUpdateManyWithoutServerNestedInput
  }

  export type TablesCreateWithoutReservationsInput = {
    tableNumber: number
    capacity: number
    status: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrdersCreateNestedManyWithoutTableInput
  }

  export type TablesUncheckedCreateWithoutReservationsInput = {
    id?: number
    tableNumber: number
    capacity: number
    status: $Enums.TableStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrdersUncheckedCreateNestedManyWithoutTableInput
  }

  export type TablesCreateOrConnectWithoutReservationsInput = {
    where: TablesWhereUniqueInput
    create: XOR<TablesCreateWithoutReservationsInput, TablesUncheckedCreateWithoutReservationsInput>
  }

  export type TablesUpsertWithoutReservationsInput = {
    update: XOR<TablesUpdateWithoutReservationsInput, TablesUncheckedUpdateWithoutReservationsInput>
    create: XOR<TablesCreateWithoutReservationsInput, TablesUncheckedCreateWithoutReservationsInput>
    where?: TablesWhereInput
  }

  export type TablesUpdateToOneWithWhereWithoutReservationsInput = {
    where?: TablesWhereInput
    data: XOR<TablesUpdateWithoutReservationsInput, TablesUncheckedUpdateWithoutReservationsInput>
  }

  export type TablesUpdateWithoutReservationsInput = {
    tableNumber?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateManyWithoutTableNestedInput
  }

  export type TablesUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableNumber?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumTableStatusFieldUpdateOperationsInput | $Enums.TableStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUncheckedUpdateManyWithoutTableNestedInput
  }

  export type OrderItemsCreateManyCourseInput = {
    id?: number
    orderId: number
    seatId: number
    itemId: number
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsUpdateWithoutCourseInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrderItemsNestedInput
    seat?: OrderSeatsUpdateOneRequiredWithoutOrderItemsNestedInput
    menuItem?: MenuItemsUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemsCreateManyCategoryInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    isCourseItem?: boolean
    isExtraItem?: boolean
    stockQuantity: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryItemsCreateManyCategoryInput = {
    id?: number
    name: string
    description?: string | null
    quantity: number
    unit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemsUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isCourseItem?: BoolFieldUpdateOperationsInput | boolean
    isExtraItem?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isCourseItem?: BoolFieldUpdateOperationsInput | boolean
    isExtraItem?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    isCourseItem?: BoolFieldUpdateOperationsInput | boolean
    isExtraItem?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryItemsUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryTransactions?: InventoryTransactionsUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemsUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryTransactions?: InventoryTransactionsUncheckedUpdateManyWithoutInventoryItemNestedInput
  }

  export type InventoryItemsUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateManyMenuItemInput = {
    id?: number
    orderId: number
    seatId: number
    courseId?: number | null
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsUpdateWithoutMenuItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrderItemsNestedInput
    seat?: OrderSeatsUpdateOneRequiredWithoutOrderItemsNestedInput
    course?: CoursesUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutMenuItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyWithoutMenuItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateManyTableInput = {
    id?: number
    serverId: number
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationsCreateManyTableInput = {
    id?: number
    customerName: string
    contactNumber: string
    email?: string | null
    partySize: number
    reservationTime: Date | string
    status: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateWithoutTableInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    server?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    orderSeats?: OrderSeatsUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemsUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUpdateManyWithoutRelatedOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSeats?: OrderSeatsUncheckedUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUncheckedUpdateManyWithoutRelatedOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsUpdateWithoutTableInput = {
    customerName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationsUncheckedUpdateManyWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerName?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partySize?: IntFieldUpdateOperationsInput | number
    reservationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateManyServerInput = {
    id?: number
    tableId: number
    orderStatus: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionsCreateManyCreatedByInput = {
    id?: number
    inventoryItemId: number
    quantityChange: number
    transactionType: $Enums.TransactionType
    relatedOrderId?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateWithoutServerInput = {
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TablesUpdateOneRequiredWithoutOrdersNestedInput
    orderSeats?: OrderSeatsUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemsUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUpdateManyWithoutRelatedOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutServerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSeats?: OrderSeatsUncheckedUpdateManyWithoutOrderNestedInput
    orderItems?: OrderItemsUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutOrderNestedInput
    inventoryTransactions?: InventoryTransactionsUncheckedUpdateManyWithoutRelatedOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutServerInput = {
    id?: IntFieldUpdateOperationsInput | number
    tableId?: IntFieldUpdateOperationsInput | number
    orderStatus?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionsUpdateWithoutCreatedByInput = {
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemsUpdateOneRequiredWithoutInventoryTransactionsNestedInput
    relatedOrder?: OrdersUpdateOneWithoutInventoryTransactionsNestedInput
  }

  export type InventoryTransactionsUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    relatedOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionsUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    relatedOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderSeatsCreateManyOrderInput = {
    id?: number
    seatNumber: number
    customerName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsCreateManyOrderInput = {
    id?: number
    seatId: number
    itemId: number
    courseId?: number | null
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsCreateManyOrderInput = {
    id?: number
    paymentType: $Enums.PaymentType
    paymentMethod: $Enums.PaymentMethod
    totalAmount: number
    paymentStatus: $Enums.PaymentStatus
    qrCodeData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionsCreateManyRelatedOrderInput = {
    id?: number
    inventoryItemId: number
    quantityChange: number
    transactionType: $Enums.TransactionType
    notes?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderSeatsUpdateWithoutOrderInput = {
    seatNumber?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUpdateManyWithoutSeatNestedInput
    paymentDetails?: PaymentDetailsUpdateManyWithoutSeatNestedInput
  }

  export type OrderSeatsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemsUncheckedUpdateManyWithoutSeatNestedInput
    paymentDetails?: PaymentDetailsUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type OrderSeatsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatNumber?: IntFieldUpdateOperationsInput | number
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seat?: OrderSeatsUpdateOneRequiredWithoutOrderItemsNestedInput
    menuItem?: MenuItemsUpdateOneRequiredWithoutOrderItemsNestedInput
    course?: CoursesUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUpdateWithoutOrderInput = {
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDetails?: PaymentDetailsUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDetails?: PaymentDetailsUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentType?: EnumPaymentTypeFieldUpdateOperationsInput | $Enums.PaymentType
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    totalAmount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    qrCodeData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionsUpdateWithoutRelatedOrderInput = {
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryItem?: InventoryItemsUpdateOneRequiredWithoutInventoryTransactionsNestedInput
    createdBy?: UsersUpdateOneRequiredWithoutInventoryTransactionsNestedInput
  }

  export type InventoryTransactionsUncheckedUpdateWithoutRelatedOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionsUncheckedUpdateManyWithoutRelatedOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsCreateManySeatInput = {
    id?: number
    orderId: number
    itemId: number
    courseId?: number | null
    quantity: number
    unitPrice: number
    itemStatus: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailsCreateManySeatInput = {
    id?: number
    paymentId: number
    amount: number
    isCoursePayment?: boolean
    isExtraPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemsUpdateWithoutSeatInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrdersUpdateOneRequiredWithoutOrderItemsNestedInput
    menuItem?: MenuItemsUpdateOneRequiredWithoutOrderItemsNestedInput
    course?: CoursesUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemsUncheckedUpdateWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemsUncheckedUpdateManyWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    itemStatus?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsUpdateWithoutSeatInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    isCoursePayment?: BoolFieldUpdateOperationsInput | boolean
    isExtraPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentsUpdateOneRequiredWithoutPaymentDetailsNestedInput
  }

  export type PaymentDetailsUncheckedUpdateWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    isCoursePayment?: BoolFieldUpdateOperationsInput | boolean
    isExtraPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsUncheckedUpdateManyWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    isCoursePayment?: BoolFieldUpdateOperationsInput | boolean
    isExtraPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsCreateManyPaymentInput = {
    id?: number
    seatId?: number | null
    amount: number
    isCoursePayment?: boolean
    isExtraPayment?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailsUpdateWithoutPaymentInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    isCoursePayment?: BoolFieldUpdateOperationsInput | boolean
    isExtraPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seat?: OrderSeatsUpdateOneWithoutPaymentDetailsNestedInput
  }

  export type PaymentDetailsUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    isCoursePayment?: BoolFieldUpdateOperationsInput | boolean
    isExtraPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsUncheckedUpdateManyWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    seatId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: FloatFieldUpdateOperationsInput | number
    isCoursePayment?: BoolFieldUpdateOperationsInput | boolean
    isExtraPayment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionsCreateManyInventoryItemInput = {
    id?: number
    quantityChange: number
    transactionType: $Enums.TransactionType
    relatedOrderId?: number | null
    notes?: string | null
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionsUpdateWithoutInventoryItemInput = {
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedOrder?: OrdersUpdateOneWithoutInventoryTransactionsNestedInput
    createdBy?: UsersUpdateOneRequiredWithoutInventoryTransactionsNestedInput
  }

  export type InventoryTransactionsUncheckedUpdateWithoutInventoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    relatedOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionsUncheckedUpdateManyWithoutInventoryItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantityChange?: FloatFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    relatedOrderId?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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