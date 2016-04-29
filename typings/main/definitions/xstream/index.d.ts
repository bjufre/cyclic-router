// Generated by typings
// Source: node_modules/xstream/core.d.ts
declare module '~xstream/core' {
export interface InternalListener<T> {
    _n: (v: T) => void;
    _e: (err: any) => void;
    _c: () => void;
}
export interface InternalProducer<T> {
    _start: (listener: InternalListener<T>) => void;
    _stop: () => void;
}
export interface Operator<T, R> extends InternalProducer<R>, InternalListener<T> {
    _start: (out: Stream<R>) => void;
    _stop: () => void;
    _n: (v: T) => void;
    _e: (err: any) => void;
    _c: () => void;
}
export interface Producer<T> {
    start: (listener: Listener<T>) => void;
    stop: () => void;
}
export interface Listener<T> {
    next: (x: T) => void;
    error: (err: any) => void;
    complete: () => void;
}
export interface CombineProjectFunction {
    <T1, T2, R>(v1: T1, v2: T2): R;
    <T1, T2, T3, R>(v1: T1, v2: T2, v3: T3): R;
    <T1, T2, T3, T4, R>(v1: T1, v2: T2, v3: T3, v4: T4): R;
    <T1, T2, T3, T4, T5, R>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5): R;
    <T1, T2, T3, T4, T5, T6, R>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6): R;
    <R>(...values: Array<any>): R;
}
export interface CombineFactorySignature {
    <T1, T2, R>(project: (t1: T1, t2: T2) => R, stream2: Stream<T2>): Stream<R>;
    <T1, T2, T3, R>(project: (t1: T1, t2: T2, t3: T3) => R, stream2: Stream<T2>, stream3: Stream<T3>): Stream<R>;
    <T1, T2, T3, T4, R>(project: (t1: T1, t2: T2, t3: T3, t4: T4) => R, stream2: Stream<T2>, stream3: Stream<T3>, stream4: Stream<T4>): Stream<R>;
    <T1, T2, T3, T4, T5, R>(project: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, stream2: Stream<T2>, stream3: Stream<T3>, stream4: Stream<T4>, stream5: Stream<T5>): Stream<R>;
    <R>(project: (...args: Array<any>) => R, ...streams: Array<Stream<any>>): Stream<R>;
}
export interface CombineInstanceSignature<T> {
    <T2, R>(project: (t1: T, t2: T2) => R, stream2: Stream<T2>): Stream<R>;
    <T2, T3, R>(project: (t1: T, t2: T2, t3: T3) => R, stream2: Stream<T2>, stream3: Stream<T3>): Stream<R>;
    <T2, T3, T4, R>(project: (t1: T, t2: T2, t3: T3, t4: T4) => R, stream2: Stream<T2>, stream3: Stream<T3>, stream4: Stream<T4>): Stream<R>;
    <T2, T3, T4, T5, R>(project: (t1: T, t2: T2, t3: T3, t4: T4, t5: T5) => R, stream2: Stream<T2>, stream3: Stream<T3>, stream4: Stream<T4>, stream5: Stream<T5>): Stream<R>;
    <R>(project: (...args: Array<any>) => R, ...streams: Array<Stream<any>>): Stream<R>;
}
export class FromArrayProducer<T> implements InternalProducer<T> {
    a: Array<T>;
    constructor(a: Array<T>);
    _start(out: InternalListener<T>): void;
    _stop(): void;
}
export class FromPromiseProducer<T> implements InternalProducer<T> {
    p: Promise<T>;
    on: boolean;
    constructor(p: Promise<T>);
    _start(out: InternalListener<T>): void;
    _stop(): void;
}
export class MergeProducer<T> implements InternalProducer<T>, InternalListener<T> {
    streams: Array<Stream<T>>;
    private out;
    private ac;
    constructor(streams: Array<Stream<T>>);
    _start(out: InternalListener<T>): void;
    _stop(): void;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export class PeriodicProducer implements InternalProducer<number> {
    period: number;
    private intervalID;
    private i;
    constructor(period: number);
    _start(stream: InternalListener<number>): void;
    _stop(): void;
}
export class DebugOperator<T> implements Operator<T, T> {
    spy: (t: T) => any;
    ins: Stream<T>;
    private out;
    constructor(spy: (t: T) => any, ins: Stream<T>);
    _start(out: Stream<T>): void;
    _stop(): void;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export class DropOperator<T> implements Operator<T, T> {
    max: number;
    ins: Stream<T>;
    private out;
    private dropped;
    constructor(max: number, ins: Stream<T>);
    _start(out: Stream<T>): void;
    _stop(): void;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export class EndWhenOperator<T> implements Operator<T, T> {
    o: Stream<any>;
    ins: Stream<T>;
    private out;
    private oli;
    constructor(o: Stream<any>, ins: Stream<T>);
    _start(out: Stream<T>): void;
    _stop(): void;
    end(): void;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export class FilterOperator<T> implements Operator<T, T> {
    passes: (t: T) => boolean;
    ins: Stream<T>;
    private out;
    constructor(passes: (t: T) => boolean, ins: Stream<T>);
    _start(out: Stream<T>): void;
    _stop(): void;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export class FlattenConcOperator<T> implements Operator<Stream<T>, T> {
    ins: Stream<Stream<T>>;
    private active;
    private out;
    constructor(ins: Stream<Stream<T>>);
    _start(out: Stream<T>): void;
    _stop(): void;
    less(): void;
    _n(s: Stream<T>): void;
    _e(err: any): void;
    _c(): void;
}
export class FlattenOperator<T> implements Operator<Stream<T>, T> {
    ins: Stream<Stream<T>>;
    curr: Stream<T>;
    private inner;
    private open;
    private out;
    constructor(ins: Stream<Stream<T>>);
    _start(out: Stream<T>): void;
    _stop(): void;
    cut(): void;
    less(): void;
    _n(s: Stream<T>): void;
    _e(err: any): void;
    _c(): void;
}
export class FoldOperator<T, R> implements Operator<T, R> {
    f: (acc: R, t: T) => R;
    seed: R;
    ins: Stream<T>;
    private out;
    private acc;
    constructor(f: (acc: R, t: T) => R, seed: R, ins: Stream<T>);
    _start(out: Stream<R>): void;
    _stop(): void;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export class LastOperator<T> implements Operator<T, T> {
    ins: Stream<T>;
    private out;
    private has;
    private val;
    constructor(ins: Stream<T>);
    _start(out: Stream<T>): void;
    _stop(): void;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export class MapFlattenConcOperator<T> implements InternalProducer<T>, InternalListener<T> {
    mapOp: MapOperator<T, Stream<T>>;
    private active;
    private out;
    constructor(mapOp: MapOperator<T, Stream<T>>);
    _start(out: Stream<T>): void;
    _stop(): void;
    less(): void;
    _n(v: T): void;
    _e(err: any): void;
    _c(): void;
}
export class MapFlattenOperator<T> implements InternalProducer<T>, InternalListener<T> {
    mapOp: MapOperator<T, Stream<T>>;
    curr: Stream<T>;
    private inner;
    private open;
    private out;
    constructor(mapOp: MapOperator<T, Stream<T>>);
    _start(out: Stream<T>): void;
    _stop(): void;
    cut(): void;
    less(): void;
    _n(v: T): void;
    _e(err: any): void;
    _c(): void;
}
export class MapOperator<T, R> implements Operator<T, R> {
    project: (t: T) => R;
    ins: Stream<T>;
    protected out: Stream<R>;
    constructor(project: (t: T) => R, ins: Stream<T>);
    _start(out: Stream<R>): void;
    _stop(): void;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export class FilterMapOperator<T, R> extends MapOperator<T, R> {
    passes: (t: T) => boolean;
    constructor(passes: (t: T) => boolean, project: (t: T) => R, ins: Stream<T>);
    _n(v: T): void;
}
export class MapToOperator<T, R> implements Operator<T, R> {
    val: R;
    ins: Stream<T>;
    private out;
    constructor(val: R, ins: Stream<T>);
    _start(out: Stream<R>): void;
    _stop(): void;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export class ReplaceErrorOperator<T> implements Operator<T, T> {
    fn: (err: any) => Stream<T>;
    ins: Stream<T>;
    private out;
    constructor(fn: (err: any) => Stream<T>, ins: Stream<T>);
    _start(out: Stream<T>): void;
    _stop(): void;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export class StartWithOperator<T> implements InternalProducer<T> {
    ins: Stream<T>;
    value: T;
    private out;
    constructor(ins: Stream<T>, value: T);
    _start(out: InternalListener<T>): void;
    _stop(): void;
}
export class TakeOperator<T> implements Operator<T, T> {
    max: number;
    ins: Stream<T>;
    private out;
    private taken;
    constructor(max: number, ins: Stream<T>);
    _start(out: Stream<T>): void;
    _stop(): void;
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
}
export class Stream<T> implements InternalListener<T> {
    private _ils;
    private _stopID;
    private _prod;
    constructor(producer: InternalProducer<T>);
    _n(t: T): void;
    _e(err: any): void;
    _c(): void;
    _x(): void;
    /**
     * Adds a Listener to the Stream.
     *
     * @param {Listener<T>} listener
     */
    addListener(listener: Listener<T>): void;
    /**
     * Removes a Listener from the Stream, assuming the Listener was added to it.
     *
     * @param {Listener<T>} listener
     */
    removeListener(listener: Listener<T>): void;
    _add(il: InternalListener<T>): void;
    _remove(il: InternalListener<T>): void;
    /**
     * Creates a new Stream given a Producer.
     *
     * @factory true
     * @param {Producer} producer An optional Producer that dictates how to
     * start, generate events, and stop the Stream.
     * @return {Stream}
     */
    static create<T>(producer?: Producer<T>): Stream<T>;
    /**
     * Creates a new MemoryStream given a Producer.
     *
     * @factory true
     * @param {Producer} producer An optional Producer that dictates how to
     * start, generate events, and stop the Stream.
     * @return {MemoryStream}
     */
    static createWithMemory<T>(producer?: Producer<T>): MemoryStream<T>;
    /**
     * Creates a Stream that does nothing when started. It never emits any event.
     *
     * Marble diagram:
     *
     * ```text
     *          never
     * -----------------------
     * ```
     *
     * @factory true
     * @return {Stream}
     */
    static never(): Stream<any>;
    /**
     * Creates a Stream that immediately emits the "complete" notification when
     * started, and that's it.
     *
     * Marble diagram:
     *
     * ```text
     * empty
     * -|
     * ```
     *
     * @factory true
     * @return {Stream}
     */
    static empty(): Stream<any>;
    /**
     * Creates a Stream that immediately emits an "error" notification with the
     * value you passed as the `error` argument when the stream starts, and that's
     * it.
     *
     * Marble diagram:
     *
     * ```text
     * throw(X)
     * -X
     * ```
     *
     * @factory true
     * @param error The error event to emit on the created stream.
     * @return {Stream}
     */
    static throw(error: any): Stream<any>;
    /**
     * Creates a Stream that immediately emits the arguments that you give to
     * *of*, then completes.
     *
     * Marble diagram:
     *
     * ```text
     * of(1,2,3)
     * 123|
     * ```
     *
     * @factory true
     * @param a The first value you want to emit as an event on the stream.
     * @param b The second value you want to emit as an event on the stream. One
     * or more of these values may be given as arguments.
     * @return {Stream}
     */
    static of<T>(...items: Array<T>): Stream<T>;
    /**
     * Converts an array to a stream. The returned stream will emit synchronously
     * all the items in the array, and then complete.
     *
     * Marble diagram:
     *
     * ```text
     * fromArray([1,2,3])
     * 123|
     * ```
     *
     * @factory true
     * @param {Array} array The array to be converted as a stream.
     * @return {Stream}
     */
    static fromArray<T>(array: Array<T>): Stream<T>;
    /**
     * Converts a promise to a stream. The returned stream will emit the resolved
     * value of the promise, and then complete. However, if the promise is
     * rejected, the stream will emit the corresponding error.
     *
     * Marble diagram:
     *
     * ```text
     * fromPromise( ----42 )
     * -----------------42|
     * ```
     *
     * @factory true
     * @param {Promise} promise The promise to be converted as a stream.
     * @return {Stream}
     */
    static fromPromise<T>(promise: Promise<T>): Stream<T>;
    /**
     * Creates a stream that periodically emits incremental numbers, every
     * `period` milliseconds.
     *
     * Marble diagram:
     *
     * ```text
     *     periodic(1000)
     * ---0---1---2---3---4---...
     * ```
     *
     * @factory true
     * @param {number} period The interval in milliseconds to use as a rate of
     * emission.
     * @return {Stream}
     */
    static periodic(period: number): Stream<number>;
    /**
     * Blends multiple streams together, emitting events from all of them
     * concurrently.
     *
     * *merge* takes multiple streams as arguments, and creates a stream that
     * imitates each of the argument streams, in parallel.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3--------4---
     * ----a-----b----c---d------
     *            merge
     * --1-a--2--b--3-c---d--4---
     * ```
     *
     * @factory true
     * @param {Stream} stream1 A stream to merge together with other streams.
     * @param {Stream} stream2 A stream to merge together with other streams. Two
     * or more streams may be given as arguments.
     * @return {Stream}
     */
    static merge<T>(...streams: Array<Stream<T>>): Stream<T>;
    /**
     * Combines multiple streams together to return a stream whose events are
     * calculated from the latest events of each of the input streams.
     *
     * *combine* remembers the most recent event from each of the input streams.
     * When any of the input streams emits an event, that event together with all
     * the other saved events are combined in the `project` function which should
     * return a value. That value will be emitted on the output stream. It's
     * essentially a way of mixing the events from multiple streams according to a
     * formula.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3--------4---
     * ----a-----b-----c--d------
     *   combine((x,y) => x+y)
     * ----1a-2a-2b-3b-3c-3d-4d--
     * ```
     *
     * @factory true
     * @param {Function} project A function of type `(x: T1, y: T2) => R` or
     * similar that takes the most recent events `x` and `y` from the input
     * streams and returns a value. The output stream will emit that value. The
     * number of arguments for this function should match the number of input
     * streams.
     * @param {Stream} stream1 A stream to combine together with other streams.
     * @param {Stream} stream2 A stream to combine together with other streams.
     * Two or more streams may be given as arguments.
     * @return {Stream}
     */
    static combine: CombineFactorySignature;
    /**
     * Transforms each event from the input Stream through a `project` function,
     * to get a Stream that emits those transformed events.
     *
     * Marble diagram:
     *
     * ```text
     * --1---3--5-----7------
     *    map(i => i * 10)
     * --10--30-50----70-----
     * ```
     *
     * @param {Function} project A function of type `(t: T) => U` that takes event
     * `t` of type `T` from the input Stream and produces an event of type `U`, to
     * be emitted on the output Stream.
     * @return {Stream}
     */
    map<U>(project: (t: T) => U): Stream<U>;
    /**
     * It's like `map`, but transforms each input event to always the same
     * constant value on the output Stream.
     *
     * Marble diagram:
     *
     * ```text
     * --1---3--5-----7-----
     *       mapTo(10)
     * --10--10-10----10----
     * ```
     *
     * @param projectedValue A value to emit on the output Stream whenever the
     * input Stream emits any value.
     * @return {Stream}
     */
    mapTo<U>(projectedValue: U): Stream<U>;
    /**
     * Only allows events that pass the test given by the `passes` argument.
     *
     * Each event from the input stream is given to the `passes` function. If the
     * function returns `true`, the event is forwarded to the output stream,
     * otherwise it is ignored and not forwarded.
     *
     * Marble diagram:
     *
     * ```text
     * --1---2--3-----4-----5---6--7-8--
     *     filter(i => i % 2 === 0)
     * ------2--------4---------6----8--
     * ```
     *
     * @param {Function} passes A function of type `(t: T) +> boolean` that takes
     * an event from the input stream and checks if it passes, by returning a
     * boolean.
     * @return {Stream}
     */
    filter(passes: (t: T) => boolean): Stream<T>;
    /**
     * Lets the first `amount` many events from the input stream pass to the
     * output stream, then makes the output stream complete.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c----d---e--
     *    take(3)
     * --a---b--c|
     * ```
     *
     * @param {number} amount How many events to allow from the input stream
     * before completing the output stream.
     * @return {Stream}
     */
    take(amount: number): Stream<T>;
    /**
     * Ignores the first `amount` many events from the input stream, and then
     * after that starts forwarding events from the input stream to the output
     * stream.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c----d---e--
     *       drop(3)
     * --------------d---e--
     * ```
     *
     * @param {number} amount How many events to ignore from the input stream
     * before forwarding all events from the input stream to the output stream.
     * @return {Stream}
     */
    drop(amount: number): Stream<T>;
    /**
     * When the input stream completes, the output stream will emit the last event
     * emitted by the input stream, and then will also complete.
     *
     * Marble diagram:
     *
     * ```text
     * --a---b--c--d----|
     *       last()
     * -----------------d|
     * ```
     *
     * @return {Stream}
     */
    last(): Stream<T>;
    /**
     * Prepends the given `initial` value to the sequence of events emitted by the
     * input stream.
     *
     * Marble diagram:
     *
     * ```text
     * ---1---2-----3---
     *   startWith(0)
     * 0--1---2-----3---
     * ```
     *
     * @param initial The value or event to prepend.
     * @return {Stream}
     */
    startWith(initial: T): Stream<T>;
    /**
     * Uses another stream to determine when to complete the current stream.
     *
     * When the given `other` stream emits an event or completes, the output
     * stream will complete. Before that happens, the output stream will imitate
     * whatever happens on the input stream.
     *
     * Marble diagram:
     *
     * ```text
     * ---1---2-----3--4----5----6---
     *   endWhen( --------a--b--| )
     * ---1---2-----3--4--|
     * ```
     *
     * @param other Some other stream that is used to know when should the output
     * stream of this operator complete.
     * @return {Stream}
     */
    endWhen(other: Stream<any>): Stream<T>;
    /**
     * "Folds" the stream onto itself.
     *
     * Combines events from the past throughout
     * the entire execution of the input stream, allowing you to accumulate them
     * together. It's essentially like `Array.prototype.reduce`.
     *
     * The output stream starts by emitting the `seed` which you give as argument.
     * Then, when an event happens on the input stream, it is combined with that
     * seed value through the `accumulate` function, and the output value is
     * emitted on the output stream. `fold` remembers that output value as `acc`
     * ("accumulator"), and then when a new input event `t` happens, `acc` will be
     * combined with that to produce the new `acc` and so forth.
     *
     * Marble diagram:
     *
     * ```text
     * ------1-----1--2----1----1------
     *   fold((acc, x) => acc + x, 3)
     * 3-----4-----5--7----8----9------
     * ```
     *
     * @param {Function} accumulate A function of type `(acc: R, t: T) => R` that
     * takes the previous accumulated value `acc` and the incoming event from the
     * input stream and produces the new accumulated value.
     * @param seed The initial accumulated value, of type `R`.
     * @return {Stream}
     */
    fold<R>(accumulate: (acc: R, t: T) => R, seed: R): Stream<R>;
    /**
     * Replaces an error with another stream.
     *
     * When (and if) an error happens on the input stream, instead of forwarding
     * that error to the output stream, *replaceError* will call the `replace`
     * function which returns the stream that the output stream will imitate. And,
     * in case that new stream also emits an error, `replace` will be called again
     * to get another stream to start imitating.
     *
     * Marble diagram:
     *
     * ```text
     * --1---2-----3--4-----X
     *   replaceError( () => --10--| )
     * --1---2-----3--4--------10--|
     * ```
     *
     * @param {Function} replace A function of type `(err) => Stream` that takes
     * the error that occured on the input stream or on the previous replacement
     * stream and returns a new stream. The output stream will imitate the stream
     * that this function returns.
     * @return {Stream}
     */
    replaceError(replace: (err: any) => Stream<T>): Stream<T>;
    /**
     * Flattens a "stream of streams", handling only one nested stream at a time
     * (no concurrency).
     *
     * If the input stream is a stream that emits streams, then this operator will
     * return an output stream which is a flat stream: emits regular events. The
     * flattening happens without concurrency. It works like this: when the input
     * stream emits a nested stream, *flatten* will start imitating that nested
     * one. However, as soon as the next nested stream is emitted on the input
     * stream, *flatten* will forget the previous nested one it was imitating, and
     * will start imitating the new nested one.
     *
     * Marble diagram:
     *
     * ```text
     * --+--------+---------------
     *   \        \
     *    \       ----1----2---3--
     *    --a--b----c----d--------
     *           flatten
     * -----a--b------1----2---3--
     * ```
     *
     * @return {Stream}
     */
    flatten<R, T extends Stream<R>>(): T;
    /**
     * Flattens a "stream of streams", handling multiple concurrent nested streams
     * simultaneously.
     *
     * If the input stream is a stream that emits streams, then this operator will
     * return an output stream which is a flat stream: emits regular events. The
     * flattening happens concurrently. It works like this: when the input stream
     * emits a nested stream, *flattenConcurrently* will start imitating that
     * nested one. When the next nested stream is emitted on the input stream,
     * *flattenConcurrently* will also imitate that new one, but will continue to
     * imitate the previous nested streams as well.
     *
     * Marble diagram:
     *
     * ```text
     * --+--------+---------------
     *   \        \
     *    \       ----1----2---3--
     *    --a--b----c----d--------
     *     flattenConcurrently
     * -----a--b----c-1--d-2---3--
     * ```
     *
     * @return {Stream}
     */
    flattenConcurrently<R, T extends Stream<R>>(): T;
    /**
     * Blends two streams together, emitting events from both.
     *
     * *merge* takes an `other` stream and returns an output stream that imitates
     * both the input stream and the `other` stream.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3--------4---
     * ----a-----b----c---d------
     *            merge
     * --1-a--2--b--3-c---d--4---
     * ```
     *
     * @param {Stream} other Another stream to merge together with the input
     * stream.
     * @return {Stream}
     */
    merge(other: Stream<T>): Stream<T>;
    /**
     * Combines multiple streams with the input stream to return a stream whose
     * events are calculated from the latest events of each of its input streams.
     *
     * *combine* remembers the most recent event from each of the input streams.
     * When any of the input streams emits an event, that event together with all
     * the other saved events are combined in the `project` function which should
     * return a value. That value will be emitted on the output stream. It's
     * essentially a way of mixing the events from multiple streams according to a
     * formula.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3--------4---
     * ----a-----b-----c--d------
     *   combine((x,y) => x+y)
     * ----1a-2a-2b-3b-3c-3d-4d--
     * ```
     *
     * @param {Function} project A function of type `(x: T1, y: T2) => R` or
     * similar that takes the most recent events `x` and `y` from the input
     * streams and returns a value. The output stream will emit that value. The
     * number of arguments for this function should match the number of input
     * streams.
     * @param {Stream} other Another stream to combine together with the input
     * stream. There may be more of these arguments.
     * @return {Stream}
     */
    combine: CombineInstanceSignature<T>;
    /**
     * Passes the input stream to a custom operator, to produce an output stream.
     *
     * *compose* is a handy way of using an existing function in a chained style.
     * Instead of writing `outStream = f(inStream)` you can write
     * `outStream = inStream.compose(f)`.
     *
     * @param {function} operator A function that takes a stream as input and
     * returns a stream as well.
     * @return {Stream}
     */
    compose(operator: (stream: Stream<T>) => Stream<any>): Stream<any>;
    /**
     * Returns an output stream that imitates the input stream, but also remembers
     * the most recent event that happens on the input stream, so that a newly
     * added listener will immediately receive that memorised event.
     *
     * @return {Stream}
     */
    remember(): Stream<T>;
    /**
     * Changes this current stream to imitate the `other` given stream.
     *
     * The *imitate* method returns nothing. Instead, it changes the behavior of
     * the current stream, making it re-emit whatever events are emitted by the
     * given `other` stream.
  
     * @param {Stream} other The stream to imitate on the current one.
     */
    imitate(other: Stream<T>): void;
    /**
     * Returns an output stream that identically imitates the input stream, but
     * also runs a `spy` function fo each event, to help you debug your app.
     *
     * *debug* takes a `spy` function as argument, and runs that for each event
     * happening on the input stream. If you don't provide the `spy` argument,
     * then *debug* will just `console.log` each event. This helps you to
     * understand the flow of events through some operator chain.
     *
     * Please note that if the output stream has no listeners, then it will not
     * start, which means `spy` will never run because no actual event happens in
     * that case.
     *
     * Marble diagram:
     *
     * ```text
     * --1----2-----3-----4--
     *         debug
     * --1----2-----3-----4--
     * ```
     *
     * @param {function} spy A function that takes an event as argument, and
     * returns nothing.
     * @return {Stream}
     */
    debug(spy?: (t: T) => void): Stream<T>;
    /**
     * Forces the Stream to emit the given value to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     *
     * @param value The "next" value you want to broadcast to all listeners of
     * this Stream.
     */
    shamefullySendNext(value: T): void;
    /**
     * Forces the Stream to emit the given error to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     *
     * @param {any} error The error you want to broadcast to all the listeners of
     * this Stream.
     */
    shamefullySendError(error: any): void;
    /**
     * Forces the Stream to emit the "completed" event to its listeners.
     *
     * As the name indicates, if you use this, you are most likely doing something
     * The Wrong Way. Please try to understand the reactive way before using this
     * method. Use it only when you know what you are doing.
     */
    shamefullySendComplete(): void;
}
export class MemoryStream<T> extends Stream<T> {
    private _val;
    private _has;
    constructor(producer: InternalProducer<T>);
    _n(x: T): void;
    _add(listener: InternalListener<T>): void;
}
export default Stream;
}
declare module 'xstream/core' {
export * from '~xstream/core';
export { default } from '~xstream/core';
}

// Generated by typings
// Source: node_modules/xstream/index.d.ts
declare module 'xstream' {
import { Stream, MemoryStream, Listener, Producer, Operator } from '~xstream/core';
export { Stream, MemoryStream, Listener, Producer, Operator };
export default Stream;
}