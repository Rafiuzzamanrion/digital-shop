
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
 * Model ContactInformation
 * 
 */
export type ContactInformation = $Result.DefaultSelection<Prisma.$ContactInformationPayload>
/**
 * Model SocialLink
 * 
 */
export type SocialLink = $Result.DefaultSelection<Prisma.$SocialLinkPayload>
/**
 * Model WebsiteInformation
 * 
 */
export type WebsiteInformation = $Result.DefaultSelection<Prisma.$WebsiteInformationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ContactInformations
 * const contactInformations = await prisma.contactInformation.findMany()
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
   * // Fetch zero or more ContactInformations
   * const contactInformations = await prisma.contactInformation.findMany()
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
   * `prisma.contactInformation`: Exposes CRUD operations for the **ContactInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInformations
    * const contactInformations = await prisma.contactInformation.findMany()
    * ```
    */
  get contactInformation(): Prisma.ContactInformationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialLink`: Exposes CRUD operations for the **SocialLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLinks
    * const socialLinks = await prisma.socialLink.findMany()
    * ```
    */
  get socialLink(): Prisma.SocialLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.websiteInformation`: Exposes CRUD operations for the **WebsiteInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebsiteInformations
    * const websiteInformations = await prisma.websiteInformation.findMany()
    * ```
    */
  get websiteInformation(): Prisma.WebsiteInformationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    ContactInformation: 'ContactInformation',
    SocialLink: 'SocialLink',
    WebsiteInformation: 'WebsiteInformation'
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
      modelProps: "contactInformation" | "socialLink" | "websiteInformation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ContactInformation: {
        payload: Prisma.$ContactInformationPayload<ExtArgs>
        fields: Prisma.ContactInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInformationPayload>
          }
          findFirst: {
            args: Prisma.ContactInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInformationPayload>
          }
          findMany: {
            args: Prisma.ContactInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInformationPayload>[]
          }
          create: {
            args: Prisma.ContactInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInformationPayload>
          }
          createMany: {
            args: Prisma.ContactInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInformationPayload>[]
          }
          delete: {
            args: Prisma.ContactInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInformationPayload>
          }
          update: {
            args: Prisma.ContactInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInformationPayload>
          }
          deleteMany: {
            args: Prisma.ContactInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInformationPayload>[]
          }
          upsert: {
            args: Prisma.ContactInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInformationPayload>
          }
          aggregate: {
            args: Prisma.ContactInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInformation>
          }
          groupBy: {
            args: Prisma.ContactInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInformationCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInformationCountAggregateOutputType> | number
          }
        }
      }
      SocialLink: {
        payload: Prisma.$SocialLinkPayload<ExtArgs>
        fields: Prisma.SocialLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findFirst: {
            args: Prisma.SocialLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findMany: {
            args: Prisma.SocialLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          create: {
            args: Prisma.SocialLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          createMany: {
            args: Prisma.SocialLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          delete: {
            args: Prisma.SocialLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          update: {
            args: Prisma.SocialLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          deleteMany: {
            args: Prisma.SocialLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          upsert: {
            args: Prisma.SocialLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          aggregate: {
            args: Prisma.SocialLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLink>
          }
          groupBy: {
            args: Prisma.SocialLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkCountAggregateOutputType> | number
          }
        }
      }
      WebsiteInformation: {
        payload: Prisma.$WebsiteInformationPayload<ExtArgs>
        fields: Prisma.WebsiteInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteInformationPayload>
          }
          findFirst: {
            args: Prisma.WebsiteInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteInformationPayload>
          }
          findMany: {
            args: Prisma.WebsiteInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteInformationPayload>[]
          }
          create: {
            args: Prisma.WebsiteInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteInformationPayload>
          }
          createMany: {
            args: Prisma.WebsiteInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsiteInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteInformationPayload>[]
          }
          delete: {
            args: Prisma.WebsiteInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteInformationPayload>
          }
          update: {
            args: Prisma.WebsiteInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteInformationPayload>
          }
          deleteMany: {
            args: Prisma.WebsiteInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsiteInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteInformationPayload>[]
          }
          upsert: {
            args: Prisma.WebsiteInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteInformationPayload>
          }
          aggregate: {
            args: Prisma.WebsiteInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsiteInformation>
          }
          groupBy: {
            args: Prisma.WebsiteInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteInformationCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteInformationCountAggregateOutputType> | number
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
    contactInformation?: ContactInformationOmit
    socialLink?: SocialLinkOmit
    websiteInformation?: WebsiteInformationOmit
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
   * Models
   */

  /**
   * Model ContactInformation
   */

  export type AggregateContactInformation = {
    _count: ContactInformationCountAggregateOutputType | null
    _min: ContactInformationMinAggregateOutputType | null
    _max: ContactInformationMaxAggregateOutputType | null
  }

  export type ContactInformationMinAggregateOutputType = {
    id: string | null
    contactNumber: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInformationMaxAggregateOutputType = {
    id: string | null
    contactNumber: string | null
    email: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInformationCountAggregateOutputType = {
    id: number
    contactNumber: number
    email: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactInformationMinAggregateInputType = {
    id?: true
    contactNumber?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInformationMaxAggregateInputType = {
    id?: true
    contactNumber?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInformationCountAggregateInputType = {
    id?: true
    contactNumber?: true
    email?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInformation to aggregate.
     */
    where?: ContactInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInformations to fetch.
     */
    orderBy?: ContactInformationOrderByWithRelationInput | ContactInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInformations
    **/
    _count?: true | ContactInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInformationMaxAggregateInputType
  }

  export type GetContactInformationAggregateType<T extends ContactInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInformation[P]>
      : GetScalarType<T[P], AggregateContactInformation[P]>
  }




  export type ContactInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInformationWhereInput
    orderBy?: ContactInformationOrderByWithAggregationInput | ContactInformationOrderByWithAggregationInput[]
    by: ContactInformationScalarFieldEnum[] | ContactInformationScalarFieldEnum
    having?: ContactInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInformationCountAggregateInputType | true
    _min?: ContactInformationMinAggregateInputType
    _max?: ContactInformationMaxAggregateInputType
  }

  export type ContactInformationGroupByOutputType = {
    id: string
    contactNumber: string
    email: string
    address: string
    createdAt: Date
    updatedAt: Date
    _count: ContactInformationCountAggregateOutputType | null
    _min: ContactInformationMinAggregateOutputType | null
    _max: ContactInformationMaxAggregateOutputType | null
  }

  type GetContactInformationGroupByPayload<T extends ContactInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInformationGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInformationGroupByOutputType[P]>
        }
      >
    >


  export type ContactInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactNumber?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInformation"]>

  export type ContactInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactNumber?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInformation"]>

  export type ContactInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactNumber?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInformation"]>

  export type ContactInformationSelectScalar = {
    id?: boolean
    contactNumber?: boolean
    email?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contactNumber" | "email" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["contactInformation"]>

  export type $ContactInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInformation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contactNumber: string
      email: string
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactInformation"]>
    composites: {}
  }

  type ContactInformationGetPayload<S extends boolean | null | undefined | ContactInformationDefaultArgs> = $Result.GetResult<Prisma.$ContactInformationPayload, S>

  type ContactInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInformationCountAggregateInputType | true
    }

  export interface ContactInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInformation'], meta: { name: 'ContactInformation' } }
    /**
     * Find zero or one ContactInformation that matches the filter.
     * @param {ContactInformationFindUniqueArgs} args - Arguments to find a ContactInformation
     * @example
     * // Get one ContactInformation
     * const contactInformation = await prisma.contactInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInformationFindUniqueArgs>(args: SelectSubset<T, ContactInformationFindUniqueArgs<ExtArgs>>): Prisma__ContactInformationClient<$Result.GetResult<Prisma.$ContactInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInformationFindUniqueOrThrowArgs} args - Arguments to find a ContactInformation
     * @example
     * // Get one ContactInformation
     * const contactInformation = await prisma.contactInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInformationClient<$Result.GetResult<Prisma.$ContactInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInformationFindFirstArgs} args - Arguments to find a ContactInformation
     * @example
     * // Get one ContactInformation
     * const contactInformation = await prisma.contactInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInformationFindFirstArgs>(args?: SelectSubset<T, ContactInformationFindFirstArgs<ExtArgs>>): Prisma__ContactInformationClient<$Result.GetResult<Prisma.$ContactInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInformationFindFirstOrThrowArgs} args - Arguments to find a ContactInformation
     * @example
     * // Get one ContactInformation
     * const contactInformation = await prisma.contactInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInformationClient<$Result.GetResult<Prisma.$ContactInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInformations
     * const contactInformations = await prisma.contactInformation.findMany()
     * 
     * // Get first 10 ContactInformations
     * const contactInformations = await prisma.contactInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInformationWithIdOnly = await prisma.contactInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInformationFindManyArgs>(args?: SelectSubset<T, ContactInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInformation.
     * @param {ContactInformationCreateArgs} args - Arguments to create a ContactInformation.
     * @example
     * // Create one ContactInformation
     * const ContactInformation = await prisma.contactInformation.create({
     *   data: {
     *     // ... data to create a ContactInformation
     *   }
     * })
     * 
     */
    create<T extends ContactInformationCreateArgs>(args: SelectSubset<T, ContactInformationCreateArgs<ExtArgs>>): Prisma__ContactInformationClient<$Result.GetResult<Prisma.$ContactInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInformations.
     * @param {ContactInformationCreateManyArgs} args - Arguments to create many ContactInformations.
     * @example
     * // Create many ContactInformations
     * const contactInformation = await prisma.contactInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInformationCreateManyArgs>(args?: SelectSubset<T, ContactInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInformations and returns the data saved in the database.
     * @param {ContactInformationCreateManyAndReturnArgs} args - Arguments to create many ContactInformations.
     * @example
     * // Create many ContactInformations
     * const contactInformation = await prisma.contactInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInformations and only return the `id`
     * const contactInformationWithIdOnly = await prisma.contactInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactInformation.
     * @param {ContactInformationDeleteArgs} args - Arguments to delete one ContactInformation.
     * @example
     * // Delete one ContactInformation
     * const ContactInformation = await prisma.contactInformation.delete({
     *   where: {
     *     // ... filter to delete one ContactInformation
     *   }
     * })
     * 
     */
    delete<T extends ContactInformationDeleteArgs>(args: SelectSubset<T, ContactInformationDeleteArgs<ExtArgs>>): Prisma__ContactInformationClient<$Result.GetResult<Prisma.$ContactInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInformation.
     * @param {ContactInformationUpdateArgs} args - Arguments to update one ContactInformation.
     * @example
     * // Update one ContactInformation
     * const contactInformation = await prisma.contactInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInformationUpdateArgs>(args: SelectSubset<T, ContactInformationUpdateArgs<ExtArgs>>): Prisma__ContactInformationClient<$Result.GetResult<Prisma.$ContactInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInformations.
     * @param {ContactInformationDeleteManyArgs} args - Arguments to filter ContactInformations to delete.
     * @example
     * // Delete a few ContactInformations
     * const { count } = await prisma.contactInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInformationDeleteManyArgs>(args?: SelectSubset<T, ContactInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInformations
     * const contactInformation = await prisma.contactInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInformationUpdateManyArgs>(args: SelectSubset<T, ContactInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInformations and returns the data updated in the database.
     * @param {ContactInformationUpdateManyAndReturnArgs} args - Arguments to update many ContactInformations.
     * @example
     * // Update many ContactInformations
     * const contactInformation = await prisma.contactInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactInformations and only return the `id`
     * const contactInformationWithIdOnly = await prisma.contactInformation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactInformation.
     * @param {ContactInformationUpsertArgs} args - Arguments to update or create a ContactInformation.
     * @example
     * // Update or create a ContactInformation
     * const contactInformation = await prisma.contactInformation.upsert({
     *   create: {
     *     // ... data to create a ContactInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInformation we want to update
     *   }
     * })
     */
    upsert<T extends ContactInformationUpsertArgs>(args: SelectSubset<T, ContactInformationUpsertArgs<ExtArgs>>): Prisma__ContactInformationClient<$Result.GetResult<Prisma.$ContactInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInformationCountArgs} args - Arguments to filter ContactInformations to count.
     * @example
     * // Count the number of ContactInformations
     * const count = await prisma.contactInformation.count({
     *   where: {
     *     // ... the filter for the ContactInformations we want to count
     *   }
     * })
    **/
    count<T extends ContactInformationCountArgs>(
      args?: Subset<T, ContactInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactInformationAggregateArgs>(args: Subset<T, ContactInformationAggregateArgs>): Prisma.PrismaPromise<GetContactInformationAggregateType<T>>

    /**
     * Group by ContactInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInformationGroupByArgs} args - Group by arguments.
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
      T extends ContactInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInformationGroupByArgs['orderBy'] }
        : { orderBy?: ContactInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInformation model
   */
  readonly fields: ContactInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ContactInformation model
   */
  interface ContactInformationFieldRefs {
    readonly id: FieldRef<"ContactInformation", 'String'>
    readonly contactNumber: FieldRef<"ContactInformation", 'String'>
    readonly email: FieldRef<"ContactInformation", 'String'>
    readonly address: FieldRef<"ContactInformation", 'String'>
    readonly createdAt: FieldRef<"ContactInformation", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactInformation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactInformation findUnique
   */
  export type ContactInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
    /**
     * Filter, which ContactInformation to fetch.
     */
    where: ContactInformationWhereUniqueInput
  }

  /**
   * ContactInformation findUniqueOrThrow
   */
  export type ContactInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
    /**
     * Filter, which ContactInformation to fetch.
     */
    where: ContactInformationWhereUniqueInput
  }

  /**
   * ContactInformation findFirst
   */
  export type ContactInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
    /**
     * Filter, which ContactInformation to fetch.
     */
    where?: ContactInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInformations to fetch.
     */
    orderBy?: ContactInformationOrderByWithRelationInput | ContactInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInformations.
     */
    cursor?: ContactInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInformations.
     */
    distinct?: ContactInformationScalarFieldEnum | ContactInformationScalarFieldEnum[]
  }

  /**
   * ContactInformation findFirstOrThrow
   */
  export type ContactInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
    /**
     * Filter, which ContactInformation to fetch.
     */
    where?: ContactInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInformations to fetch.
     */
    orderBy?: ContactInformationOrderByWithRelationInput | ContactInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInformations.
     */
    cursor?: ContactInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInformations.
     */
    distinct?: ContactInformationScalarFieldEnum | ContactInformationScalarFieldEnum[]
  }

  /**
   * ContactInformation findMany
   */
  export type ContactInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
    /**
     * Filter, which ContactInformations to fetch.
     */
    where?: ContactInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInformations to fetch.
     */
    orderBy?: ContactInformationOrderByWithRelationInput | ContactInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInformations.
     */
    cursor?: ContactInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInformations.
     */
    skip?: number
    distinct?: ContactInformationScalarFieldEnum | ContactInformationScalarFieldEnum[]
  }

  /**
   * ContactInformation create
   */
  export type ContactInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactInformation.
     */
    data: XOR<ContactInformationCreateInput, ContactInformationUncheckedCreateInput>
  }

  /**
   * ContactInformation createMany
   */
  export type ContactInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInformations.
     */
    data: ContactInformationCreateManyInput | ContactInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInformation createManyAndReturn
   */
  export type ContactInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
    /**
     * The data used to create many ContactInformations.
     */
    data: ContactInformationCreateManyInput | ContactInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInformation update
   */
  export type ContactInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactInformation.
     */
    data: XOR<ContactInformationUpdateInput, ContactInformationUncheckedUpdateInput>
    /**
     * Choose, which ContactInformation to update.
     */
    where: ContactInformationWhereUniqueInput
  }

  /**
   * ContactInformation updateMany
   */
  export type ContactInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInformations.
     */
    data: XOR<ContactInformationUpdateManyMutationInput, ContactInformationUncheckedUpdateManyInput>
    /**
     * Filter which ContactInformations to update
     */
    where?: ContactInformationWhereInput
    /**
     * Limit how many ContactInformations to update.
     */
    limit?: number
  }

  /**
   * ContactInformation updateManyAndReturn
   */
  export type ContactInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
    /**
     * The data used to update ContactInformations.
     */
    data: XOR<ContactInformationUpdateManyMutationInput, ContactInformationUncheckedUpdateManyInput>
    /**
     * Filter which ContactInformations to update
     */
    where?: ContactInformationWhereInput
    /**
     * Limit how many ContactInformations to update.
     */
    limit?: number
  }

  /**
   * ContactInformation upsert
   */
  export type ContactInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactInformation to update in case it exists.
     */
    where: ContactInformationWhereUniqueInput
    /**
     * In case the ContactInformation found by the `where` argument doesn't exist, create a new ContactInformation with this data.
     */
    create: XOR<ContactInformationCreateInput, ContactInformationUncheckedCreateInput>
    /**
     * In case the ContactInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInformationUpdateInput, ContactInformationUncheckedUpdateInput>
  }

  /**
   * ContactInformation delete
   */
  export type ContactInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
    /**
     * Filter which ContactInformation to delete.
     */
    where: ContactInformationWhereUniqueInput
  }

  /**
   * ContactInformation deleteMany
   */
  export type ContactInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInformations to delete
     */
    where?: ContactInformationWhereInput
    /**
     * Limit how many ContactInformations to delete.
     */
    limit?: number
  }

  /**
   * ContactInformation without action
   */
  export type ContactInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInformation
     */
    select?: ContactInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInformation
     */
    omit?: ContactInformationOmit<ExtArgs> | null
  }


  /**
   * Model SocialLink
   */

  export type AggregateSocialLink = {
    _count: SocialLinkCountAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  export type SocialLinkMinAggregateOutputType = {
    id: string | null
    facebookLink: string | null
    instagramLink: string | null
    whatsAppLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialLinkMaxAggregateOutputType = {
    id: string | null
    facebookLink: string | null
    instagramLink: string | null
    whatsAppLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialLinkCountAggregateOutputType = {
    id: number
    facebookLink: number
    instagramLink: number
    whatsAppLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialLinkMinAggregateInputType = {
    id?: true
    facebookLink?: true
    instagramLink?: true
    whatsAppLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialLinkMaxAggregateInputType = {
    id?: true
    facebookLink?: true
    instagramLink?: true
    whatsAppLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialLinkCountAggregateInputType = {
    id?: true
    facebookLink?: true
    instagramLink?: true
    whatsAppLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLink to aggregate.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLinks
    **/
    _count?: true | SocialLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinkMaxAggregateInputType
  }

  export type GetSocialLinkAggregateType<T extends SocialLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLink[P]>
      : GetScalarType<T[P], AggregateSocialLink[P]>
  }




  export type SocialLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithAggregationInput | SocialLinkOrderByWithAggregationInput[]
    by: SocialLinkScalarFieldEnum[] | SocialLinkScalarFieldEnum
    having?: SocialLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLinkCountAggregateInputType | true
    _min?: SocialLinkMinAggregateInputType
    _max?: SocialLinkMaxAggregateInputType
  }

  export type SocialLinkGroupByOutputType = {
    id: string
    facebookLink: string
    instagramLink: string
    whatsAppLink: string
    createdAt: Date
    updatedAt: Date
    _count: SocialLinkCountAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  type GetSocialLinkGroupByPayload<T extends SocialLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
        }
      >
    >


  export type SocialLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facebookLink?: boolean
    instagramLink?: boolean
    whatsAppLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facebookLink?: boolean
    instagramLink?: boolean
    whatsAppLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facebookLink?: boolean
    instagramLink?: boolean
    whatsAppLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectScalar = {
    id?: boolean
    facebookLink?: boolean
    instagramLink?: boolean
    whatsAppLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facebookLink" | "instagramLink" | "whatsAppLink" | "createdAt" | "updatedAt", ExtArgs["result"]["socialLink"]>

  export type $SocialLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facebookLink: string
      instagramLink: string
      whatsAppLink: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["socialLink"]>
    composites: {}
  }

  type SocialLinkGetPayload<S extends boolean | null | undefined | SocialLinkDefaultArgs> = $Result.GetResult<Prisma.$SocialLinkPayload, S>

  type SocialLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialLinkCountAggregateInputType | true
    }

  export interface SocialLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLink'], meta: { name: 'SocialLink' } }
    /**
     * Find zero or one SocialLink that matches the filter.
     * @param {SocialLinkFindUniqueArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLinkFindUniqueArgs>(args: SelectSubset<T, SocialLinkFindUniqueArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialLinkFindUniqueOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLinkFindFirstArgs>(args?: SelectSubset<T, SocialLinkFindFirstArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinks
     * const socialLinks = await prisma.socialLink.findMany()
     * 
     * // Get first 10 SocialLinks
     * const socialLinks = await prisma.socialLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLinkFindManyArgs>(args?: SelectSubset<T, SocialLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialLink.
     * @param {SocialLinkCreateArgs} args - Arguments to create a SocialLink.
     * @example
     * // Create one SocialLink
     * const SocialLink = await prisma.socialLink.create({
     *   data: {
     *     // ... data to create a SocialLink
     *   }
     * })
     * 
     */
    create<T extends SocialLinkCreateArgs>(args: SelectSubset<T, SocialLinkCreateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialLinks.
     * @param {SocialLinkCreateManyArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLinkCreateManyArgs>(args?: SelectSubset<T, SocialLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialLinks and returns the data saved in the database.
     * @param {SocialLinkCreateManyAndReturnArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialLink.
     * @param {SocialLinkDeleteArgs} args - Arguments to delete one SocialLink.
     * @example
     * // Delete one SocialLink
     * const SocialLink = await prisma.socialLink.delete({
     *   where: {
     *     // ... filter to delete one SocialLink
     *   }
     * })
     * 
     */
    delete<T extends SocialLinkDeleteArgs>(args: SelectSubset<T, SocialLinkDeleteArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialLink.
     * @param {SocialLinkUpdateArgs} args - Arguments to update one SocialLink.
     * @example
     * // Update one SocialLink
     * const socialLink = await prisma.socialLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLinkUpdateArgs>(args: SelectSubset<T, SocialLinkUpdateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialLinks.
     * @param {SocialLinkDeleteManyArgs} args - Arguments to filter SocialLinks to delete.
     * @example
     * // Delete a few SocialLinks
     * const { count } = await prisma.socialLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLinkDeleteManyArgs>(args?: SelectSubset<T, SocialLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLinkUpdateManyArgs>(args: SelectSubset<T, SocialLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks and returns the data updated in the database.
     * @param {SocialLinkUpdateManyAndReturnArgs} args - Arguments to update many SocialLinks.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialLink.
     * @param {SocialLinkUpsertArgs} args - Arguments to update or create a SocialLink.
     * @example
     * // Update or create a SocialLink
     * const socialLink = await prisma.socialLink.upsert({
     *   create: {
     *     // ... data to create a SocialLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLink we want to update
     *   }
     * })
     */
    upsert<T extends SocialLinkUpsertArgs>(args: SelectSubset<T, SocialLinkUpsertArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkCountArgs} args - Arguments to filter SocialLinks to count.
     * @example
     * // Count the number of SocialLinks
     * const count = await prisma.socialLink.count({
     *   where: {
     *     // ... the filter for the SocialLinks we want to count
     *   }
     * })
    **/
    count<T extends SocialLinkCountArgs>(
      args?: Subset<T, SocialLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialLinkAggregateArgs>(args: Subset<T, SocialLinkAggregateArgs>): Prisma.PrismaPromise<GetSocialLinkAggregateType<T>>

    /**
     * Group by SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkGroupByArgs} args - Group by arguments.
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
      T extends SocialLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLinkGroupByArgs['orderBy'] }
        : { orderBy?: SocialLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLink model
   */
  readonly fields: SocialLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SocialLink model
   */
  interface SocialLinkFieldRefs {
    readonly id: FieldRef<"SocialLink", 'String'>
    readonly facebookLink: FieldRef<"SocialLink", 'String'>
    readonly instagramLink: FieldRef<"SocialLink", 'String'>
    readonly whatsAppLink: FieldRef<"SocialLink", 'String'>
    readonly createdAt: FieldRef<"SocialLink", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialLink findUnique
   */
  export type SocialLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findUniqueOrThrow
   */
  export type SocialLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findFirst
   */
  export type SocialLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findFirstOrThrow
   */
  export type SocialLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findMany
   */
  export type SocialLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink create
   */
  export type SocialLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data needed to create a SocialLink.
     */
    data: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
  }

  /**
   * SocialLink createMany
   */
  export type SocialLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLink createManyAndReturn
   */
  export type SocialLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLink update
   */
  export type SocialLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data needed to update a SocialLink.
     */
    data: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
    /**
     * Choose, which SocialLink to update.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink updateMany
   */
  export type SocialLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLink updateManyAndReturn
   */
  export type SocialLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLink upsert
   */
  export type SocialLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The filter to search for the SocialLink to update in case it exists.
     */
    where: SocialLinkWhereUniqueInput
    /**
     * In case the SocialLink found by the `where` argument doesn't exist, create a new SocialLink with this data.
     */
    create: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
    /**
     * In case the SocialLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
  }

  /**
   * SocialLink delete
   */
  export type SocialLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Filter which SocialLink to delete.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink deleteMany
   */
  export type SocialLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinks to delete
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to delete.
     */
    limit?: number
  }

  /**
   * SocialLink without action
   */
  export type SocialLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
  }


  /**
   * Model WebsiteInformation
   */

  export type AggregateWebsiteInformation = {
    _count: WebsiteInformationCountAggregateOutputType | null
    _min: WebsiteInformationMinAggregateOutputType | null
    _max: WebsiteInformationMaxAggregateOutputType | null
  }

  export type WebsiteInformationMinAggregateOutputType = {
    id: string | null
    websiteName: string | null
    footerDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebsiteInformationMaxAggregateOutputType = {
    id: string | null
    websiteName: string | null
    footerDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebsiteInformationCountAggregateOutputType = {
    id: number
    websiteName: number
    footerDescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebsiteInformationMinAggregateInputType = {
    id?: true
    websiteName?: true
    footerDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebsiteInformationMaxAggregateInputType = {
    id?: true
    websiteName?: true
    footerDescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebsiteInformationCountAggregateInputType = {
    id?: true
    websiteName?: true
    footerDescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebsiteInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsiteInformation to aggregate.
     */
    where?: WebsiteInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteInformations to fetch.
     */
    orderBy?: WebsiteInformationOrderByWithRelationInput | WebsiteInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebsiteInformations
    **/
    _count?: true | WebsiteInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteInformationMaxAggregateInputType
  }

  export type GetWebsiteInformationAggregateType<T extends WebsiteInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsiteInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsiteInformation[P]>
      : GetScalarType<T[P], AggregateWebsiteInformation[P]>
  }




  export type WebsiteInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteInformationWhereInput
    orderBy?: WebsiteInformationOrderByWithAggregationInput | WebsiteInformationOrderByWithAggregationInput[]
    by: WebsiteInformationScalarFieldEnum[] | WebsiteInformationScalarFieldEnum
    having?: WebsiteInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteInformationCountAggregateInputType | true
    _min?: WebsiteInformationMinAggregateInputType
    _max?: WebsiteInformationMaxAggregateInputType
  }

  export type WebsiteInformationGroupByOutputType = {
    id: string
    websiteName: string
    footerDescription: string
    createdAt: Date
    updatedAt: Date
    _count: WebsiteInformationCountAggregateOutputType | null
    _min: WebsiteInformationMinAggregateOutputType | null
    _max: WebsiteInformationMaxAggregateOutputType | null
  }

  type GetWebsiteInformationGroupByPayload<T extends WebsiteInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteInformationGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteInformationGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteName?: boolean
    footerDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["websiteInformation"]>

  export type WebsiteInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteName?: boolean
    footerDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["websiteInformation"]>

  export type WebsiteInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    websiteName?: boolean
    footerDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["websiteInformation"]>

  export type WebsiteInformationSelectScalar = {
    id?: boolean
    websiteName?: boolean
    footerDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebsiteInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "websiteName" | "footerDescription" | "createdAt" | "updatedAt", ExtArgs["result"]["websiteInformation"]>

  export type $WebsiteInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebsiteInformation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      websiteName: string
      footerDescription: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["websiteInformation"]>
    composites: {}
  }

  type WebsiteInformationGetPayload<S extends boolean | null | undefined | WebsiteInformationDefaultArgs> = $Result.GetResult<Prisma.$WebsiteInformationPayload, S>

  type WebsiteInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsiteInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteInformationCountAggregateInputType | true
    }

  export interface WebsiteInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebsiteInformation'], meta: { name: 'WebsiteInformation' } }
    /**
     * Find zero or one WebsiteInformation that matches the filter.
     * @param {WebsiteInformationFindUniqueArgs} args - Arguments to find a WebsiteInformation
     * @example
     * // Get one WebsiteInformation
     * const websiteInformation = await prisma.websiteInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsiteInformationFindUniqueArgs>(args: SelectSubset<T, WebsiteInformationFindUniqueArgs<ExtArgs>>): Prisma__WebsiteInformationClient<$Result.GetResult<Prisma.$WebsiteInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebsiteInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsiteInformationFindUniqueOrThrowArgs} args - Arguments to find a WebsiteInformation
     * @example
     * // Get one WebsiteInformation
     * const websiteInformation = await prisma.websiteInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsiteInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsiteInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsiteInformationClient<$Result.GetResult<Prisma.$WebsiteInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteInformationFindFirstArgs} args - Arguments to find a WebsiteInformation
     * @example
     * // Get one WebsiteInformation
     * const websiteInformation = await prisma.websiteInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsiteInformationFindFirstArgs>(args?: SelectSubset<T, WebsiteInformationFindFirstArgs<ExtArgs>>): Prisma__WebsiteInformationClient<$Result.GetResult<Prisma.$WebsiteInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteInformationFindFirstOrThrowArgs} args - Arguments to find a WebsiteInformation
     * @example
     * // Get one WebsiteInformation
     * const websiteInformation = await prisma.websiteInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsiteInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsiteInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsiteInformationClient<$Result.GetResult<Prisma.$WebsiteInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebsiteInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebsiteInformations
     * const websiteInformations = await prisma.websiteInformation.findMany()
     * 
     * // Get first 10 WebsiteInformations
     * const websiteInformations = await prisma.websiteInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteInformationWithIdOnly = await prisma.websiteInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsiteInformationFindManyArgs>(args?: SelectSubset<T, WebsiteInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebsiteInformation.
     * @param {WebsiteInformationCreateArgs} args - Arguments to create a WebsiteInformation.
     * @example
     * // Create one WebsiteInformation
     * const WebsiteInformation = await prisma.websiteInformation.create({
     *   data: {
     *     // ... data to create a WebsiteInformation
     *   }
     * })
     * 
     */
    create<T extends WebsiteInformationCreateArgs>(args: SelectSubset<T, WebsiteInformationCreateArgs<ExtArgs>>): Prisma__WebsiteInformationClient<$Result.GetResult<Prisma.$WebsiteInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebsiteInformations.
     * @param {WebsiteInformationCreateManyArgs} args - Arguments to create many WebsiteInformations.
     * @example
     * // Create many WebsiteInformations
     * const websiteInformation = await prisma.websiteInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsiteInformationCreateManyArgs>(args?: SelectSubset<T, WebsiteInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebsiteInformations and returns the data saved in the database.
     * @param {WebsiteInformationCreateManyAndReturnArgs} args - Arguments to create many WebsiteInformations.
     * @example
     * // Create many WebsiteInformations
     * const websiteInformation = await prisma.websiteInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebsiteInformations and only return the `id`
     * const websiteInformationWithIdOnly = await prisma.websiteInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsiteInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsiteInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebsiteInformation.
     * @param {WebsiteInformationDeleteArgs} args - Arguments to delete one WebsiteInformation.
     * @example
     * // Delete one WebsiteInformation
     * const WebsiteInformation = await prisma.websiteInformation.delete({
     *   where: {
     *     // ... filter to delete one WebsiteInformation
     *   }
     * })
     * 
     */
    delete<T extends WebsiteInformationDeleteArgs>(args: SelectSubset<T, WebsiteInformationDeleteArgs<ExtArgs>>): Prisma__WebsiteInformationClient<$Result.GetResult<Prisma.$WebsiteInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebsiteInformation.
     * @param {WebsiteInformationUpdateArgs} args - Arguments to update one WebsiteInformation.
     * @example
     * // Update one WebsiteInformation
     * const websiteInformation = await prisma.websiteInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsiteInformationUpdateArgs>(args: SelectSubset<T, WebsiteInformationUpdateArgs<ExtArgs>>): Prisma__WebsiteInformationClient<$Result.GetResult<Prisma.$WebsiteInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebsiteInformations.
     * @param {WebsiteInformationDeleteManyArgs} args - Arguments to filter WebsiteInformations to delete.
     * @example
     * // Delete a few WebsiteInformations
     * const { count } = await prisma.websiteInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsiteInformationDeleteManyArgs>(args?: SelectSubset<T, WebsiteInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebsiteInformations
     * const websiteInformation = await prisma.websiteInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsiteInformationUpdateManyArgs>(args: SelectSubset<T, WebsiteInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteInformations and returns the data updated in the database.
     * @param {WebsiteInformationUpdateManyAndReturnArgs} args - Arguments to update many WebsiteInformations.
     * @example
     * // Update many WebsiteInformations
     * const websiteInformation = await prisma.websiteInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebsiteInformations and only return the `id`
     * const websiteInformationWithIdOnly = await prisma.websiteInformation.updateManyAndReturn({
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
    updateManyAndReturn<T extends WebsiteInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsiteInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebsiteInformation.
     * @param {WebsiteInformationUpsertArgs} args - Arguments to update or create a WebsiteInformation.
     * @example
     * // Update or create a WebsiteInformation
     * const websiteInformation = await prisma.websiteInformation.upsert({
     *   create: {
     *     // ... data to create a WebsiteInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebsiteInformation we want to update
     *   }
     * })
     */
    upsert<T extends WebsiteInformationUpsertArgs>(args: SelectSubset<T, WebsiteInformationUpsertArgs<ExtArgs>>): Prisma__WebsiteInformationClient<$Result.GetResult<Prisma.$WebsiteInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebsiteInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteInformationCountArgs} args - Arguments to filter WebsiteInformations to count.
     * @example
     * // Count the number of WebsiteInformations
     * const count = await prisma.websiteInformation.count({
     *   where: {
     *     // ... the filter for the WebsiteInformations we want to count
     *   }
     * })
    **/
    count<T extends WebsiteInformationCountArgs>(
      args?: Subset<T, WebsiteInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebsiteInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebsiteInformationAggregateArgs>(args: Subset<T, WebsiteInformationAggregateArgs>): Prisma.PrismaPromise<GetWebsiteInformationAggregateType<T>>

    /**
     * Group by WebsiteInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteInformationGroupByArgs} args - Group by arguments.
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
      T extends WebsiteInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteInformationGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteInformationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebsiteInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebsiteInformation model
   */
  readonly fields: WebsiteInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebsiteInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WebsiteInformation model
   */
  interface WebsiteInformationFieldRefs {
    readonly id: FieldRef<"WebsiteInformation", 'String'>
    readonly websiteName: FieldRef<"WebsiteInformation", 'String'>
    readonly footerDescription: FieldRef<"WebsiteInformation", 'String'>
    readonly createdAt: FieldRef<"WebsiteInformation", 'DateTime'>
    readonly updatedAt: FieldRef<"WebsiteInformation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebsiteInformation findUnique
   */
  export type WebsiteInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
    /**
     * Filter, which WebsiteInformation to fetch.
     */
    where: WebsiteInformationWhereUniqueInput
  }

  /**
   * WebsiteInformation findUniqueOrThrow
   */
  export type WebsiteInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
    /**
     * Filter, which WebsiteInformation to fetch.
     */
    where: WebsiteInformationWhereUniqueInput
  }

  /**
   * WebsiteInformation findFirst
   */
  export type WebsiteInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
    /**
     * Filter, which WebsiteInformation to fetch.
     */
    where?: WebsiteInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteInformations to fetch.
     */
    orderBy?: WebsiteInformationOrderByWithRelationInput | WebsiteInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsiteInformations.
     */
    cursor?: WebsiteInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsiteInformations.
     */
    distinct?: WebsiteInformationScalarFieldEnum | WebsiteInformationScalarFieldEnum[]
  }

  /**
   * WebsiteInformation findFirstOrThrow
   */
  export type WebsiteInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
    /**
     * Filter, which WebsiteInformation to fetch.
     */
    where?: WebsiteInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteInformations to fetch.
     */
    orderBy?: WebsiteInformationOrderByWithRelationInput | WebsiteInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsiteInformations.
     */
    cursor?: WebsiteInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsiteInformations.
     */
    distinct?: WebsiteInformationScalarFieldEnum | WebsiteInformationScalarFieldEnum[]
  }

  /**
   * WebsiteInformation findMany
   */
  export type WebsiteInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
    /**
     * Filter, which WebsiteInformations to fetch.
     */
    where?: WebsiteInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteInformations to fetch.
     */
    orderBy?: WebsiteInformationOrderByWithRelationInput | WebsiteInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebsiteInformations.
     */
    cursor?: WebsiteInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteInformations.
     */
    skip?: number
    distinct?: WebsiteInformationScalarFieldEnum | WebsiteInformationScalarFieldEnum[]
  }

  /**
   * WebsiteInformation create
   */
  export type WebsiteInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
    /**
     * The data needed to create a WebsiteInformation.
     */
    data: XOR<WebsiteInformationCreateInput, WebsiteInformationUncheckedCreateInput>
  }

  /**
   * WebsiteInformation createMany
   */
  export type WebsiteInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebsiteInformations.
     */
    data: WebsiteInformationCreateManyInput | WebsiteInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebsiteInformation createManyAndReturn
   */
  export type WebsiteInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
    /**
     * The data used to create many WebsiteInformations.
     */
    data: WebsiteInformationCreateManyInput | WebsiteInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebsiteInformation update
   */
  export type WebsiteInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
    /**
     * The data needed to update a WebsiteInformation.
     */
    data: XOR<WebsiteInformationUpdateInput, WebsiteInformationUncheckedUpdateInput>
    /**
     * Choose, which WebsiteInformation to update.
     */
    where: WebsiteInformationWhereUniqueInput
  }

  /**
   * WebsiteInformation updateMany
   */
  export type WebsiteInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebsiteInformations.
     */
    data: XOR<WebsiteInformationUpdateManyMutationInput, WebsiteInformationUncheckedUpdateManyInput>
    /**
     * Filter which WebsiteInformations to update
     */
    where?: WebsiteInformationWhereInput
    /**
     * Limit how many WebsiteInformations to update.
     */
    limit?: number
  }

  /**
   * WebsiteInformation updateManyAndReturn
   */
  export type WebsiteInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
    /**
     * The data used to update WebsiteInformations.
     */
    data: XOR<WebsiteInformationUpdateManyMutationInput, WebsiteInformationUncheckedUpdateManyInput>
    /**
     * Filter which WebsiteInformations to update
     */
    where?: WebsiteInformationWhereInput
    /**
     * Limit how many WebsiteInformations to update.
     */
    limit?: number
  }

  /**
   * WebsiteInformation upsert
   */
  export type WebsiteInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
    /**
     * The filter to search for the WebsiteInformation to update in case it exists.
     */
    where: WebsiteInformationWhereUniqueInput
    /**
     * In case the WebsiteInformation found by the `where` argument doesn't exist, create a new WebsiteInformation with this data.
     */
    create: XOR<WebsiteInformationCreateInput, WebsiteInformationUncheckedCreateInput>
    /**
     * In case the WebsiteInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteInformationUpdateInput, WebsiteInformationUncheckedUpdateInput>
  }

  /**
   * WebsiteInformation delete
   */
  export type WebsiteInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
    /**
     * Filter which WebsiteInformation to delete.
     */
    where: WebsiteInformationWhereUniqueInput
  }

  /**
   * WebsiteInformation deleteMany
   */
  export type WebsiteInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsiteInformations to delete
     */
    where?: WebsiteInformationWhereInput
    /**
     * Limit how many WebsiteInformations to delete.
     */
    limit?: number
  }

  /**
   * WebsiteInformation without action
   */
  export type WebsiteInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteInformation
     */
    select?: WebsiteInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteInformation
     */
    omit?: WebsiteInformationOmit<ExtArgs> | null
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


  export const ContactInformationScalarFieldEnum: {
    id: 'id',
    contactNumber: 'contactNumber',
    email: 'email',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactInformationScalarFieldEnum = (typeof ContactInformationScalarFieldEnum)[keyof typeof ContactInformationScalarFieldEnum]


  export const SocialLinkScalarFieldEnum: {
    id: 'id',
    facebookLink: 'facebookLink',
    instagramLink: 'instagramLink',
    whatsAppLink: 'whatsAppLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum]


  export const WebsiteInformationScalarFieldEnum: {
    id: 'id',
    websiteName: 'websiteName',
    footerDescription: 'footerDescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebsiteInformationScalarFieldEnum = (typeof WebsiteInformationScalarFieldEnum)[keyof typeof WebsiteInformationScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ContactInformationWhereInput = {
    AND?: ContactInformationWhereInput | ContactInformationWhereInput[]
    OR?: ContactInformationWhereInput[]
    NOT?: ContactInformationWhereInput | ContactInformationWhereInput[]
    id?: StringFilter<"ContactInformation"> | string
    contactNumber?: StringFilter<"ContactInformation"> | string
    email?: StringFilter<"ContactInformation"> | string
    address?: StringFilter<"ContactInformation"> | string
    createdAt?: DateTimeFilter<"ContactInformation"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInformation"> | Date | string
  }

  export type ContactInformationOrderByWithRelationInput = {
    id?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactInformationWhereInput | ContactInformationWhereInput[]
    OR?: ContactInformationWhereInput[]
    NOT?: ContactInformationWhereInput | ContactInformationWhereInput[]
    contactNumber?: StringFilter<"ContactInformation"> | string
    email?: StringFilter<"ContactInformation"> | string
    address?: StringFilter<"ContactInformation"> | string
    createdAt?: DateTimeFilter<"ContactInformation"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInformation"> | Date | string
  }, "id">

  export type ContactInformationOrderByWithAggregationInput = {
    id?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactInformationCountOrderByAggregateInput
    _max?: ContactInformationMaxOrderByAggregateInput
    _min?: ContactInformationMinOrderByAggregateInput
  }

  export type ContactInformationScalarWhereWithAggregatesInput = {
    AND?: ContactInformationScalarWhereWithAggregatesInput | ContactInformationScalarWhereWithAggregatesInput[]
    OR?: ContactInformationScalarWhereWithAggregatesInput[]
    NOT?: ContactInformationScalarWhereWithAggregatesInput | ContactInformationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactInformation"> | string
    contactNumber?: StringWithAggregatesFilter<"ContactInformation"> | string
    email?: StringWithAggregatesFilter<"ContactInformation"> | string
    address?: StringWithAggregatesFilter<"ContactInformation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactInformation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactInformation"> | Date | string
  }

  export type SocialLinkWhereInput = {
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    id?: StringFilter<"SocialLink"> | string
    facebookLink?: StringFilter<"SocialLink"> | string
    instagramLink?: StringFilter<"SocialLink"> | string
    whatsAppLink?: StringFilter<"SocialLink"> | string
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeFilter<"SocialLink"> | Date | string
  }

  export type SocialLinkOrderByWithRelationInput = {
    id?: SortOrder
    facebookLink?: SortOrder
    instagramLink?: SortOrder
    whatsAppLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    facebookLink?: StringFilter<"SocialLink"> | string
    instagramLink?: StringFilter<"SocialLink"> | string
    whatsAppLink?: StringFilter<"SocialLink"> | string
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeFilter<"SocialLink"> | Date | string
  }, "id">

  export type SocialLinkOrderByWithAggregationInput = {
    id?: SortOrder
    facebookLink?: SortOrder
    instagramLink?: SortOrder
    whatsAppLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocialLinkCountOrderByAggregateInput
    _max?: SocialLinkMaxOrderByAggregateInput
    _min?: SocialLinkMinOrderByAggregateInput
  }

  export type SocialLinkScalarWhereWithAggregatesInput = {
    AND?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    OR?: SocialLinkScalarWhereWithAggregatesInput[]
    NOT?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialLink"> | string
    facebookLink?: StringWithAggregatesFilter<"SocialLink"> | string
    instagramLink?: StringWithAggregatesFilter<"SocialLink"> | string
    whatsAppLink?: StringWithAggregatesFilter<"SocialLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SocialLink"> | Date | string
  }

  export type WebsiteInformationWhereInput = {
    AND?: WebsiteInformationWhereInput | WebsiteInformationWhereInput[]
    OR?: WebsiteInformationWhereInput[]
    NOT?: WebsiteInformationWhereInput | WebsiteInformationWhereInput[]
    id?: StringFilter<"WebsiteInformation"> | string
    websiteName?: StringFilter<"WebsiteInformation"> | string
    footerDescription?: StringFilter<"WebsiteInformation"> | string
    createdAt?: DateTimeFilter<"WebsiteInformation"> | Date | string
    updatedAt?: DateTimeFilter<"WebsiteInformation"> | Date | string
  }

  export type WebsiteInformationOrderByWithRelationInput = {
    id?: SortOrder
    websiteName?: SortOrder
    footerDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebsiteInformationWhereInput | WebsiteInformationWhereInput[]
    OR?: WebsiteInformationWhereInput[]
    NOT?: WebsiteInformationWhereInput | WebsiteInformationWhereInput[]
    websiteName?: StringFilter<"WebsiteInformation"> | string
    footerDescription?: StringFilter<"WebsiteInformation"> | string
    createdAt?: DateTimeFilter<"WebsiteInformation"> | Date | string
    updatedAt?: DateTimeFilter<"WebsiteInformation"> | Date | string
  }, "id">

  export type WebsiteInformationOrderByWithAggregationInput = {
    id?: SortOrder
    websiteName?: SortOrder
    footerDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebsiteInformationCountOrderByAggregateInput
    _max?: WebsiteInformationMaxOrderByAggregateInput
    _min?: WebsiteInformationMinOrderByAggregateInput
  }

  export type WebsiteInformationScalarWhereWithAggregatesInput = {
    AND?: WebsiteInformationScalarWhereWithAggregatesInput | WebsiteInformationScalarWhereWithAggregatesInput[]
    OR?: WebsiteInformationScalarWhereWithAggregatesInput[]
    NOT?: WebsiteInformationScalarWhereWithAggregatesInput | WebsiteInformationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebsiteInformation"> | string
    websiteName?: StringWithAggregatesFilter<"WebsiteInformation"> | string
    footerDescription?: StringWithAggregatesFilter<"WebsiteInformation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WebsiteInformation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WebsiteInformation"> | Date | string
  }

  export type ContactInformationCreateInput = {
    id?: string
    contactNumber: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInformationUncheckedCreateInput = {
    id?: string
    contactNumber: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInformationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInformationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInformationCreateManyInput = {
    id?: string
    contactNumber: string
    email: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInformationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInformationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateInput = {
    id?: string
    facebookLink: string
    instagramLink: string
    whatsAppLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUncheckedCreateInput = {
    id?: string
    facebookLink: string
    instagramLink: string
    whatsAppLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facebookLink?: StringFieldUpdateOperationsInput | string
    instagramLink?: StringFieldUpdateOperationsInput | string
    whatsAppLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facebookLink?: StringFieldUpdateOperationsInput | string
    instagramLink?: StringFieldUpdateOperationsInput | string
    whatsAppLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateManyInput = {
    id?: string
    facebookLink: string
    instagramLink: string
    whatsAppLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    facebookLink?: StringFieldUpdateOperationsInput | string
    instagramLink?: StringFieldUpdateOperationsInput | string
    whatsAppLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    facebookLink?: StringFieldUpdateOperationsInput | string
    instagramLink?: StringFieldUpdateOperationsInput | string
    whatsAppLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteInformationCreateInput = {
    id?: string
    websiteName: string
    footerDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteInformationUncheckedCreateInput = {
    id?: string
    websiteName: string
    footerDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteInformationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteName?: StringFieldUpdateOperationsInput | string
    footerDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteInformationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteName?: StringFieldUpdateOperationsInput | string
    footerDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteInformationCreateManyInput = {
    id?: string
    websiteName: string
    footerDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteInformationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteName?: StringFieldUpdateOperationsInput | string
    footerDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteInformationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    websiteName?: StringFieldUpdateOperationsInput | string
    footerDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ContactInformationCountOrderByAggregateInput = {
    id?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInformationMinOrderByAggregateInput = {
    id?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SocialLinkCountOrderByAggregateInput = {
    id?: SortOrder
    facebookLink?: SortOrder
    instagramLink?: SortOrder
    whatsAppLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    facebookLink?: SortOrder
    instagramLink?: SortOrder
    whatsAppLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialLinkMinOrderByAggregateInput = {
    id?: SortOrder
    facebookLink?: SortOrder
    instagramLink?: SortOrder
    whatsAppLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteInformationCountOrderByAggregateInput = {
    id?: SortOrder
    websiteName?: SortOrder
    footerDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    websiteName?: SortOrder
    footerDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteInformationMinOrderByAggregateInput = {
    id?: SortOrder
    websiteName?: SortOrder
    footerDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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