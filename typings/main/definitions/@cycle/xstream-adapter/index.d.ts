// Generated by typings
// Source: node_modules/@cycle/base/lib/index.d.ts
declare module '~@cycle/xstream-adapter~@cycle/base/lib/index' {
export interface Observer {
    next: (x: any) => void;
    error: (e: any) => void;
    complete: (c?: any) => void;
}
export interface HoldSubject {
    stream: any;
    observer: Observer;
}
export interface SinkProxies {
    [driverName: string]: HoldSubject;
}
export type DisposeFunction = () => void;
export type StreamSubscribe = (stream: any, observer: Observer) => DisposeFunction | void;
export interface StreamAdapter {
    adapt: (originStream: any, originStreamSubscribe: StreamSubscribe) => any;
    dispose: (sinks: any, sinkProxies: SinkProxies, sources: any) => void;
    makeHoldSubject: () => HoldSubject;
    isValidStream: (stream: any) => boolean;
    streamSubscribe: StreamSubscribe;
}
export interface DriverFunction {
    (stream: any, adapter: StreamAdapter, driverName: string): any;
    streamAdapter?: StreamAdapter;
}
export interface DriversDefinition {
    [driverName: string]: DriverFunction;
}
export interface CycleOptions {
    streamAdapter: StreamAdapter;
}
export interface CycleExecution<Sources, Sinks> {
    sources: Sources;
    sinks: Sinks;
    run: () => DisposeFunction;
}
export interface CycleSetup {
    (main: (sources: any) => any, drivers: DriversDefinition): CycleExecution<any, any>;
    run: (main: (sources: any) => any, drivers: DriversDefinition) => DisposeFunction;
}
function Cycle<Sources, Sinks>(main: (sources: Sources) => Sinks, drivers: DriversDefinition, options: CycleOptions): CycleExecution<Sources, Sinks>;
export default Cycle;
}
declare module '~@cycle/xstream-adapter~@cycle/base' {
export * from '~@cycle/xstream-adapter~@cycle/base/lib/index';
export { default } from '~@cycle/xstream-adapter~@cycle/base/lib/index';
}

// Generated by typings
// Source: node_modules/@cycle/xstream-adapter/lib/index.d.ts
declare module '~@cycle/xstream-adapter/lib/index' {
import { StreamAdapter } from '~@cycle/xstream-adapter~@cycle/base';
const XStreamAdapter: StreamAdapter;
export default XStreamAdapter;
}
declare module '@cycle/xstream-adapter/lib/index' {
export { default } from '~@cycle/xstream-adapter/lib/index';
}
declare module '@cycle/xstream-adapter' {
export { default } from '~@cycle/xstream-adapter/lib/index';
}
