declare module 'react/jsx-runtime'{
// Type definitions for React 18.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
//                 AssureSign <http://www.assuresign.com>
//                 Microsoft <https://microsoft.com>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Benoit Benezech <https://github.com/bbenezech>
//                 Patricio Zavolinsky <https://github.com/pzavolinsky>
//                 Eric Anderson <https://github.com/ericanderson>
//                 Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Josh Rutherford <https://github.com/theruther4d>
//                 Guilherme Hübner <https://github.com/guilhermehubner>
//                 Ferdy Budhidharma <https://github.com/ferdaber>
//                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
//                 Olivier Pascal <https://github.com/pascaloliv>
//                 Martin Hochel <https://github.com/hotell>
//                 Frank Li <https://github.com/franklixuefei>
//                 Jessica Franco <https://github.com/Jessidhia>
//                 Saransh Kataria <https://github.com/saranshkataria>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Kyle Scully <https://github.com/zieka>
//                 Cong Zhang <https://github.com/dancerphil>
//                 Dimitri Mitropoulos <https://github.com/dimitropoulos>
//                 JongChan Choi <https://github.com/disjukr>
//                 Victor Magalhães <https://github.com/vhfmag>
//                 Dale Tan <https://github.com/hellatan>
//                 Priyanshu Rav <https://github.com/priyanshurav>
//                 Dmitry Semigradsky <https://github.com/Semigradsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// NOTE: Users of the `experimental` builds of React should add a reference
// to 'react/experimental' in their project. See experimental.d.ts's top comment
// for reference and documentation on how exactly to do it.

/// <reference path="global.d.ts" />

import * as PropTypes from 'prop-types';
import { Interaction as SchedulerInteraction } from 'scheduler/tracing';

type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent;
type NativeFocusEvent = FocusEvent;
type NativeKeyboardEvent = KeyboardEvent;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativePointerEvent = PointerEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;
type Booleanish = boolean | 'true' | 'false';

declare const UNDEFINED_VOID_ONLY: unique symbol;
// Destructors are only allowed to return void.
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never };
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };
/*
React projects that don't include the DOM library need these interfaces to compile.
React Native applications use React, but there is no DOM available. The JavaScript runtime
is ES6/ES2015 only. These definitions allow such projects to compile with only `--lib ES6`.

Warning: all of these interfaces are empty. If you want type definitions for various properties
(such as HTMLInputElement.prototype.value), you need to add `--lib DOM` (via command line or tsconfig.json).
*/

interface Event { }
interface AnimationEvent extends Event { }
interface ClipboardEvent extends Event { }
interface CompositionEvent extends Event { }
interface DragEvent extends Event { }
interface FocusEvent extends Event { }
interface KeyboardEvent extends Event { }
interface MouseEvent extends Event { }
interface TouchEvent extends Event { }
interface PointerEvent extends Event { }
interface TransitionEvent extends Event { }
interface UIEvent extends Event { }
interface WheelEvent extends Event { }

interface EventTarget { }
interface Document { }
interface DataTransfer { }
interface StyleMedia { }

interface Element { }
interface DocumentFragment { }

interface HTMLElement extends Element { }
interface HTMLAnchorElement extends HTMLElement { }
interface HTMLAreaElement extends HTMLElement { }
interface HTMLAudioElement extends HTMLElement { }
interface HTMLBaseElement extends HTMLElement { }
interface HTMLBodyElement extends HTMLElement { }
interface HTMLBRElement extends HTMLElement { }
interface HTMLButtonElement extends HTMLElement { }
interface HTMLCanvasElement extends HTMLElement { }
interface HTMLDataElement extends HTMLElement { }
interface HTMLDataListElement extends HTMLElement { }
interface HTMLDetailsElement extends HTMLElement { }
interface HTMLDialogElement extends HTMLElement { }
interface HTMLDivElement extends HTMLElement { }
interface HTMLDListElement extends HTMLElement { }
interface HTMLEmbedElement extends HTMLElement { }
interface HTMLFieldSetElement extends HTMLElement { }
interface HTMLFormElement extends HTMLElement { }
interface HTMLHeadingElement extends HTMLElement { }
interface HTMLHeadElement extends HTMLElement { }
interface HTMLHRElement extends HTMLElement { }
interface HTMLHtmlElement extends HTMLElement { }
interface HTMLIFrameElement extends HTMLElement { }
interface HTMLImageElement extends HTMLElement { }
interface HTMLInputElement extends HTMLElement { }
interface HTMLModElement extends HTMLElement { }
interface HTMLLabelElement extends HTMLElement { }
interface HTMLLegendElement extends HTMLElement { }
interface HTMLLIElement extends HTMLElement { }
interface HTMLLinkElement extends HTMLElement { }
interface HTMLMapElement extends HTMLElement { }
interface HTMLMetaElement extends HTMLElement { }
interface HTMLMeterElement extends HTMLElement { }
interface HTMLObjectElement extends HTMLElement { }
interface HTMLOListElement extends HTMLElement { }
interface HTMLOptGroupElement extends HTMLElement { }
interface HTMLOptionElement extends HTMLElement { }
interface HTMLOutputElement extends HTMLElement { }
interface HTMLParagraphElement extends HTMLElement { }
interface HTMLParamElement extends HTMLElement { }
interface HTMLPreElement extends HTMLElement { }
interface HTMLProgressElement extends HTMLElement { }
interface HTMLQuoteElement extends HTMLElement { }
interface HTMLSlotElement extends HTMLElement { }
interface HTMLScriptElement extends HTMLElement { }
interface HTMLSelectElement extends HTMLElement { }
interface HTMLSourceElement extends HTMLElement { }
interface HTMLSpanElement extends HTMLElement { }
interface HTMLStyleElement extends HTMLElement { }
interface HTMLTableElement extends HTMLElement { }
interface HTMLTableColElement extends HTMLElement { }
interface HTMLTableDataCellElement extends HTMLElement { }
interface HTMLTableHeaderCellElement extends HTMLElement { }
interface HTMLTableRowElement extends HTMLElement { }
interface HTMLTableSectionElement extends HTMLElement { }
interface HTMLTemplateElement extends HTMLElement { }
interface HTMLTextAreaElement extends HTMLElement { }
interface HTMLTimeElement extends HTMLElement { }
interface HTMLTitleElement extends HTMLElement { }
interface HTMLTrackElement extends HTMLElement { }
interface HTMLUListElement extends HTMLElement { }
interface HTMLVideoElement extends HTMLElement { }
interface HTMLWebViewElement extends HTMLElement { }

interface SVGElement extends Element { }
interface SVGSVGElement extends SVGElement { }
interface SVGCircleElement extends SVGElement { }
interface SVGClipPathElement extends SVGElement { }
interface SVGDefsElement extends SVGElement { }
interface SVGDescElement extends SVGElement { }
interface SVGEllipseElement extends SVGElement { }
interface SVGFEBlendElement extends SVGElement { }
interface SVGFEColorMatrixElement extends SVGElement { }
interface SVGFEComponentTransferElement extends SVGElement { }
interface SVGFECompositeElement extends SVGElement { }
interface SVGFEConvolveMatrixElement extends SVGElement { }
interface SVGFEDiffuseLightingElement extends SVGElement { }
interface SVGFEDisplacementMapElement extends SVGElement { }
interface SVGFEDistantLightElement extends SVGElement { }
interface SVGFEDropShadowElement extends SVGElement { }
interface SVGFEFloodElement extends SVGElement { }
interface SVGFEFuncAElement extends SVGElement { }
interface SVGFEFuncBElement extends SVGElement { }
interface SVGFEFuncGElement extends SVGElement { }
interface SVGFEFuncRElement extends SVGElement { }
interface SVGFEGaussianBlurElement extends SVGElement { }
interface SVGFEImageElement extends SVGElement { }
interface SVGFEMergeElement extends SVGElement { }
interface SVGFEMergeNodeElement extends SVGElement { }
interface SVGFEMorphologyElement extends SVGElement { }
interface SVGFEOffsetElement extends SVGElement { }
interface SVGFEPointLightElement extends SVGElement { }
interface SVGFESpecularLightingElement extends SVGElement { }
interface SVGFESpotLightElement extends SVGElement { }
interface SVGFETileElement extends SVGElement { }
interface SVGFETurbulenceElement extends SVGElement { }
interface SVGFilterElement extends SVGElement { }
interface SVGForeignObjectElement extends SVGElement { }
interface SVGGElement extends SVGElement { }
interface SVGImageElement extends SVGElement { }
interface SVGLineElement extends SVGElement { }
interface SVGLinearGradientElement extends SVGElement { }
interface SVGMarkerElement extends SVGElement { }
interface SVGMaskElement extends SVGElement { }
interface SVGMetadataElement extends SVGElement { }
interface SVGPathElement extends SVGElement { }
interface SVGPatternElement extends SVGElement { }
interface SVGPolygonElement extends SVGElement { }
interface SVGPolylineElement extends SVGElement { }
interface SVGRadialGradientElement extends SVGElement { }
interface SVGRectElement extends SVGElement { }
interface SVGStopElement extends SVGElement { }
interface SVGSwitchElement extends SVGElement { }
interface SVGSymbolElement extends SVGElement { }
interface SVGTextElement extends SVGElement { }
interface SVGTextPathElement extends SVGElement { }
interface SVGTSpanElement extends SVGElement { }
interface SVGUseElement extends SVGElement { }
interface SVGViewElement extends SVGElement { }

interface Text { }
interface TouchList { }
interface WebGLRenderingContext { }
interface WebGL2RenderingContext { }


// eslint-disable-next-line export-just-namespace
export = React;
export as namespace React;

declare namespace React {
    //
    // React Elements
    // ----------------------------------------------------------------------

    type ElementType<P = any> =
        {
            [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never
        }[keyof JSX.IntrinsicElements] |
        ComponentType<P>;
    type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;

    type JSXElementConstructor<P> =
        | ((props: P) => ReactElement<any, any> | null)
        | (new (props: P) => Component<any, any>);

    interface RefObject<T> {
        readonly current: T | null;
    }
    // Bivariance hack for consistent unsoundness with RefObject
    type RefCallback<T> = { bivarianceHack(instance: T | null): void }["bivarianceHack"];
    type Ref<T> = RefCallback<T> | RefObject<T> | null;
    type LegacyRef<T> = string | Ref<T>;
    /**
     * Gets the instance type for a React element. The instance will be different for various component types:
     *
     * - React class components will be the class instance. So if you had `class Foo extends React.Component<{}> {}`
     *   and used `React.ElementRef<typeof Foo>` then the type would be the instance of `Foo`.
     * - React stateless functional components do not have a backing instance and so `React.ElementRef<typeof Bar>`
     *   (when `Bar` is `function Bar() {}`) will give you the `undefined` type.
     * - JSX intrinsics like `div` will give you their DOM instance. For `React.ElementRef<'div'>` that would be
     *   `HTMLDivElement`. For `React.ElementRef<'input'>` that would be `HTMLInputElement`.
     * - React stateless functional components that forward a `ref` will give you the `ElementRef` of the forwarded
     *   to component.
     *
     * `C` must be the type _of_ a React component so you need to use typeof as in `React.ElementRef<typeof MyComponent>`.
     *
     * @todo In Flow, this works a little different with forwarded refs and the `AbstractComponent` that
     *       `React.forwardRef()` returns.
     */
    type ElementRef<
        C extends
            | ForwardRefExoticComponent<any>
            | { new (props: any): Component<any> }
            | ((props: any, context?: any) => ReactElement | null)
            | keyof JSX.IntrinsicElements
    > =
        // need to check first if `ref` is a valid prop for ts@3.0
        // otherwise it will infer `{}` instead of `never`
        "ref" extends keyof ComponentPropsWithRef<C>
            ? NonNullable<ComponentPropsWithRef<C>["ref"]> extends Ref<
                infer Instance
            >
                ? Instance
                : never
            : never;

    type ComponentState = any;

    type Key = string | number;

    /**
     * @internal You shouldn't need to use this type since you never see these attributes
     * inside your component or have to validate them.
     */
    interface Attributes {
        key?: Key | null | undefined;
    }
    interface RefAttributes<T> extends Attributes {
        ref?: Ref<T> | undefined;
    }
    interface ClassAttributes<T> extends Attributes {
        ref?: LegacyRef<T> | undefined;
    }

    interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
        type: T;
        props: P;
        key: Key | null;
    }

    interface ReactComponentElement<
        T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
        P = Pick<ComponentProps<T>, Exclude<keyof ComponentProps<T>, 'key' | 'ref'>>
    > extends ReactElement<P, Exclude<T, number>> { }

    interface FunctionComponentElement<P> extends ReactElement<P, FunctionComponent<P>> {
        ref?: ('ref' extends keyof P ? P extends { ref?: infer R | undefined } ? R : never : never) | undefined;
    }

    type CElement<P, T extends Component<P, ComponentState>> = ComponentElement<P, T>;
    interface ComponentElement<P, T extends Component<P, ComponentState>> extends ReactElement<P, ComponentClass<P>> {
        ref?: LegacyRef<T> | undefined;
    }

    type ClassicElement<P> = CElement<P, ClassicComponent<P, ComponentState>>;

    // string fallback for custom web-components
    interface DOMElement<P extends HTMLAttributes<T> | SVGAttributes<T>, T extends Element> extends ReactElement<P, string> {
        ref: LegacyRef<T>;
    }

    // ReactHTML for ReactHTMLElement
    interface ReactHTMLElement<T extends HTMLElement> extends DetailedReactHTMLElement<AllHTMLAttributes<T>, T> { }

    interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
        type: keyof ReactHTML;
    }

    // ReactSVG for ReactSVGElement
    interface ReactSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
        type: keyof ReactSVG;
    }

    interface ReactPortal extends ReactElement {
        key: Key | null;
        children: ReactNode;
    }

    //
    // Factories
    // ----------------------------------------------------------------------

    type Factory<P> = (props?: Attributes & P, ...children: ReactNode[]) => ReactElement<P>;

    /**
     * @deprecated Please use `FunctionComponentFactory`
     */
    type SFCFactory<P> = FunctionComponentFactory<P>;

    type FunctionComponentFactory<P> = (props?: Attributes & P, ...children: ReactNode[]) => FunctionComponentElement<P>;

    type ComponentFactory<P, T extends Component<P, ComponentState>> =
        (props?: ClassAttributes<T> & P, ...children: ReactNode[]) => CElement<P, T>;

    type CFactory<P, T extends Component<P, ComponentState>> = ComponentFactory<P, T>;
    type ClassicFactory<P> = CFactory<P, ClassicComponent<P, ComponentState>>;

    type DOMFactory<P extends DOMAttributes<T>, T extends Element> =
        (props?: ClassAttributes<T> & P | null, ...children: ReactNode[]) => DOMElement<P, T>;

    interface HTMLFactory<T extends HTMLElement> extends DetailedHTMLFactory<AllHTMLAttributes<T>, T> {}

    interface DetailedHTMLFactory<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMFactory<P, T> {
        (props?: ClassAttributes<T> & P | null, ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
    }

    interface SVGFactory extends DOMFactory<SVGAttributes<SVGElement>, SVGElement> {
        (props?: ClassAttributes<SVGElement> & SVGAttributes<SVGElement> | null, ...children: ReactNode[]): ReactSVGElement;
    }

    /**
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactText = string | number;
    /**
     * @deprecated - This type is not relevant when using React. Inline the type instead to make the intent clear.
     */
    type ReactChild = ReactElement | string | number;

    /**
     * @deprecated Use either `ReactNode[]` if you need an array or `Iterable<ReactNode>` if its passed to a host component.
     */
    interface ReactNodeArray extends ReadonlyArray<ReactNode> {}
    type ReactFragment = Iterable<ReactNode>;
    type ReactNodeBase = ReactElement  | string | number | ReactFragment | ReactPortal | boolean | null | undefined;
    type ReactNode = ReactNodeBase  | ReactNodeBase[] ;

    //
    // Top Level API
    // ----------------------------------------------------------------------

    // DOM Elements
    function createFactory<T extends HTMLElement>(
        type: keyof ReactHTML): HTMLFactory<T>;
    function createFactory(
        type: keyof ReactSVG): SVGFactory;
    function createFactory<P extends DOMAttributes<T>, T extends Element>(
        type: string): DOMFactory<P, T>;

    // Custom components
    function createFactory<P>(type: FunctionComponent<P>): FunctionComponentFactory<P>;
    function createFactory<P>(
        type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>): CFactory<P, ClassicComponent<P, ComponentState>>;
    function createFactory<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
        type: ClassType<P, T, C>): CFactory<P, T>;
    function createFactory<P>(type: ComponentClass<P>): Factory<P>;

    // DOM Elements
    // TODO: generalize this to everything in `keyof ReactHTML`, not just "input"
    function createElement(
        type: "input",
        props?: InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> | null,
        ...children: ReactNode[]): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    function createElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        type: keyof ReactHTML,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
    function createElement<P extends SVGAttributes<T>, T extends SVGElement>(
        type: keyof ReactSVG,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]): ReactSVGElement;
    function createElement<P extends DOMAttributes<T>, T extends Element>(
        type: string,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]): DOMElement<P, T>;

    // Custom components

    function createElement<P extends {}>(
        type: FunctionComponent<P>,
        props?: Attributes & P | null,
        ...children: ReactNode[]): FunctionComponentElement<P>;
    function createElement<P extends {}>(
        type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>,
        props?: ClassAttributes<ClassicComponent<P, ComponentState>> & P | null,
        ...children: ReactNode[]): CElement<P, ClassicComponent<P, ComponentState>>;
    function createElement<P extends {}, T extends Component<P, ComponentState>, C extends ComponentClass<P>>(
        type: ClassType<P, T, C>,
        props?: ClassAttributes<T> & P | null,
        ...children: ReactNode[]): CElement<P, T>;
    function createElement<P extends {}>(
        type: FunctionComponent<P> | ComponentClass<P> | string,
        props?: Attributes & P | null,
        ...children: ReactNode[]): ReactElement<P>;

    // DOM Elements
    // ReactHTMLElement
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: DetailedReactHTMLElement<P, T>,
        props?: P,
        ...children: ReactNode[]): DetailedReactHTMLElement<P, T>;
    // ReactHTMLElement, less specific
    function cloneElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
        element: ReactHTMLElement<T>,
        props?: P,
        ...children: ReactNode[]): ReactHTMLElement<T>;
    // SVGElement
    function cloneElement<P extends SVGAttributes<T>, T extends SVGElement>(
        element: ReactSVGElement,
        props?: P,
        ...children: ReactNode[]): ReactSVGElement;
    // DOM Element (has to be the last, because type checking stops at first overload that fits)
    function cloneElement<P extends DOMAttributes<T>, T extends Element>(
        element: DOMElement<P, T>,
        props?: DOMAttributes<T> & P,
        ...children: ReactNode[]): DOMElement<P, T>;

    // Custom components
    function cloneElement<P>(
        element: FunctionComponentElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]): FunctionComponentElement<P>;
    function cloneElement<P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        props?: Partial<P> & ClassAttributes<T>,
        ...children: ReactNode[]): CElement<P, T>;
    function cloneElement<P>(
        element: ReactElement<P>,
        props?: Partial<P> & Attributes,
        ...children: ReactNode[]): ReactElement<P>;

    // Context via RenderProps
    interface ProviderProps<T> {
        value: T;
        children?: ReactNode | undefined;
    }

    interface ConsumerProps<T> {
        children: (value: T) => ReactNode;
    }

    // TODO: similar to how Fragment is actually a symbol, the values returned from createContext,
    // forwardRef and memo are actually objects that are treated specially by the renderer; see:
    // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/ReactContext.js#L35-L48
    // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/forwardRef.js#L42-L45
    // https://github.com/facebook/react/blob/v16.6.0/packages/react/src/memo.js#L27-L31
    // However, we have no way of telling the JSX parser that it's a JSX element type or its props other than
    // by pretending to be a normal component.
    //
    // We don't just use ComponentType or FunctionComponent types because you are not supposed to attach statics to this
    // object, but rather to the original function.
    interface ExoticComponent<P = {}> {
        /**
         * **NOTE**: Exotic components are not callable.
         */
        (props: P): (ReactElement|null);
        readonly $$typeof: symbol;
    }

    interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
        displayName?: string | undefined;
    }

    interface ProviderExoticComponent<P> extends ExoticComponent<P> {
        propTypes?: WeakValidationMap<P> | undefined;
    }

    type ContextType<C extends Context<any>> = C extends Context<infer T> ? T : never;

    // NOTE: only the Context object itself can get a displayName
    // https://github.com/facebook/react-devtools/blob/e0b854e4c/backend/attachRendererFiber.js#L310-L325
    type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
    type Consumer<T> = ExoticComponent<ConsumerProps<T>>;
    interface Context<T> {
        Provider: Provider<T>;
        Consumer: Consumer<T>;
        displayName?: string | undefined;
    }
    function createContext<T>(
        // If you thought this should be optional, see
        // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
        defaultValue: T,
    ): Context<T>;

    function isValidElement<P>(object: {} | null | undefined): object is ReactElement<P>;

    // Sync with `ReactChildren` until `ReactChildren` is removed.
    const Children: {
        map<T, C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => T):
            C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    };
    const Fragment: ExoticComponent<{ children?: ReactNode | undefined }>;
    const StrictMode: ExoticComponent<{ children?: ReactNode | undefined }>;

    interface SuspenseProps {
        children?: ReactNode | undefined;

        /** A fallback react tree to show when a Suspense child (like React.lazy) suspends */
        fallback?: ReactNode;
    }

    const Suspense: ExoticComponent<SuspenseProps>;
    const version: string;

    /**
     * {@link https://reactjs.org/docs/profiler.html#onrender-callback Profiler API}
     */
    type ProfilerOnRenderCallback = (
        id: string,
        phase: "mount" | "update",
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number,
        interactions: Set<SchedulerInteraction>,
    ) => void;
    interface ProfilerProps {
        children?: ReactNode | undefined;
        id: string;
        onRender: ProfilerOnRenderCallback;
    }

    const Profiler: ExoticComponent<ProfilerProps>;

    //
    // Component API
    // ----------------------------------------------------------------------

    type ReactInstance = Component<any> | Element;

    // Base component for plain JS classes
    interface Component<P = {}, S = {}, SS = any> extends ComponentLifecycle<P, S, SS> { }
    class Component<P, S> {
        // tslint won't let me format the sample code in a way that vscode likes it :(
        /**
         * If set, `this.context` will be set at runtime to the current value of the given Context.
         *
         * Usage:
         *
         * ```ts
         * type MyContext = number
         * const Ctx = React.createContext<MyContext>(0)
         *
         * class Foo extends React.Component {
         *   static contextType = Ctx
         *   context!: React.ContextType<typeof Ctx>
         *   render () {
         *     return <>My context's value: {this.context}</>;
         *   }
         * }
         * ```
         *
         * @see https://reactjs.org/docs/context.html#classcontexttype
         */
        static contextType?: Context<any> | undefined;

        /**
         * If using the new style context, re-declare this in your class to be the
         * `React.ContextType` of your `static contextType`.
         * Should be used with type annotation or static contextType.
         *
         * ```ts
         * static contextType = MyContext
         * // For TS pre-3.7:
         * context!: React.ContextType<typeof MyContext>
         * // For TS 3.7 and above:
         * declare context: React.ContextType<typeof MyContext>
         * ```
         *
         * @see https://reactjs.org/docs/context.html
         */
        context: unknown;

        constructor(props: Readonly<P> | P);
        /**
         * @deprecated
         * @see https://reactjs.org/docs/legacy-context.html
         */
        constructor(props: P, context: any);

        // We MUST keep setState() as a unified signature because it allows proper checking of the method return type.
        // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18365#issuecomment-351013257
        // Also, the ` | S` allows intellisense to not be dumbisense
        setState<K extends keyof S>(
            state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
            callback?: () => void
        ): void;

        forceUpdate(callback?: () => void): void;
        render(): ReactNode;

        readonly props: Readonly<P>;
        state: Readonly<S>;
        /**
         * @deprecated
         * https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
         */
        refs: {
            [key: string]: ReactInstance
        };
    }

    class PureComponent<P = {}, S = {}, SS = any> extends Component<P, S, SS> { }

    interface ClassicComponent<P = {}, S = {}> extends Component<P, S> {
        replaceState(nextState: S, callback?: () => void): void;
        isMounted(): boolean;
        getInitialState?(): S;
    }

    interface ChildContextProvider<CC> {
        getChildContext(): CC;
    }

    //
    // Class Interfaces
    // ----------------------------------------------------------------------

    type FC<P = {}> = FunctionComponent<P>;

    interface FunctionComponent<P = {}> {
        (props: P, context?: any): ReactElement<any, any> | null;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    /**
     * @deprecated - Equivalent with `React.FC`.
     */
    type VFC<P = {}> = VoidFunctionComponent<P>;

    /**
     * @deprecated - Equivalent with `React.FunctionComponent`.
     */
    interface VoidFunctionComponent<P = {}> {
        (props: P, context?: any): ReactElement<any, any> | null;
        propTypes?: WeakValidationMap<P> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

    interface ForwardRefRenderFunction<T, P = {}> {
        (props: P, ref: ForwardedRef<T>): ReactElement | null;
        displayName?: string | undefined;
        // explicit rejected with `never` required due to
        // https://github.com/microsoft/TypeScript/issues/36826
        /**
         * defaultProps are not supported on render functions
         */
        defaultProps?: never | undefined;
        /**
         * propTypes are not supported on render functions
         */
        propTypes?: never | undefined;
    }

    interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
        new (props: P, context?: any): Component<P, S>;
        propTypes?: WeakValidationMap<P> | undefined;
        contextType?: Context<any> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        childContextTypes?: ValidationMap<any> | undefined;
        defaultProps?: Partial<P> | undefined;
        displayName?: string | undefined;
    }

    interface ClassicComponentClass<P = {}> extends ComponentClass<P> {
        new (props: P, context?: any): ClassicComponent<P, ComponentState>;
        getDefaultProps?(): P;
    }

    /**
     * We use an intersection type to infer multiple type parameters from
     * a single argument, which is useful for many top-level API defs.
     * See https://github.com/Microsoft/TypeScript/issues/7234 for more info.
     */
    type ClassType<P, T extends Component<P, ComponentState>, C extends ComponentClass<P>> =
        C &
        (new (props: P, context?: any) => T);

    //
    // Component Specs and Lifecycle
    // ----------------------------------------------------------------------

    // This should actually be something like `Lifecycle<P, S> | DeprecatedLifecycle<P, S>`,
    // as React will _not_ call the deprecated lifecycle methods if any of the new lifecycle
    // methods are present.
    interface ComponentLifecycle<P, S, SS = any> extends NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
        /**
         * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
         */
        componentDidMount?(): void;
        /**
         * Called to determine whether the change in props and state should trigger a re-render.
         *
         * `Component` always returns true.
         * `PureComponent` implements a shallow comparison on props and state and returns true if any
         * props or states have changed.
         *
         * If false is returned, `Component#render`, `componentWillUpdate`
         * and `componentDidUpdate` will not be called.
         */
        shouldComponentUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean;
        /**
         * Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
         * cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.
         */
        componentWillUnmount?(): void;
        /**
         * Catches exceptions generated in descendant components. Unhandled exceptions will cause
         * the entire component tree to unmount.
         */
        componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
    }

    // Unfortunately, we have no way of declaring that the component constructor must implement this
    interface StaticLifecycle<P, S> {
        getDerivedStateFromProps?: GetDerivedStateFromProps<P, S> | undefined;
        getDerivedStateFromError?: GetDerivedStateFromError<P, S> | undefined;
    }

    type GetDerivedStateFromProps<P, S> =
        /**
         * Returns an update to a component's state based on its new props and old state.
         *
         * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
         */
        (nextProps: Readonly<P>, prevState: S) => Partial<S> | null;

    type GetDerivedStateFromError<P, S> =
        /**
         * This lifecycle is invoked after an error has been thrown by a descendant component.
         * It receives the error that was thrown as a parameter and should return a value to update state.
         *
         * Note: its presence prevents any of the deprecated lifecycle methods from being invoked
         */
        (error: any) => Partial<S> | null;

    // This should be "infer SS" but can't use it yet
    interface NewLifecycle<P, S, SS> {
        /**
         * Runs before React applies the result of `render` to the document, and
         * returns an object to be given to componentDidUpdate. Useful for saving
         * things such as scroll position before `render` causes changes to it.
         *
         * Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
         * lifecycle events from running.
         */
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): SS | null;
        /**
         * Called immediately after updating occurs. Not called for the initial render.
         *
         * The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.
         */
        componentDidUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: SS): void;
    }

    interface DeprecatedLifecycle<P, S> {
        /**
         * Called immediately before mounting occurs, and before `Component#render`.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use componentDidMount or the constructor instead; will stop working in React 17
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        componentWillMount?(): void;
        /**
         * Called immediately before mounting occurs, and before `Component#render`.
         * Avoid introducing any side-effects or subscriptions in this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use componentDidMount or the constructor instead
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        UNSAFE_componentWillMount?(): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling `Component#setState` generally does not trigger this method.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use static getDerivedStateFromProps instead; will stop working in React 17
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        /**
         * Called when the component may be receiving new props.
         * React may call this even if props have not changed, so be sure to compare new and existing
         * props if you only want to handle changes.
         *
         * Calling `Component#setState` generally does not trigger this method.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use static getDerivedStateFromProps instead
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call `Component#setState` here.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        /**
         * Called immediately before rendering when new props or state is received. Not called for the initial render.
         *
         * Note: You cannot call `Component#setState` here.
         *
         * This method will not stop working in React 17.
         *
         * Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
         * prevents this from being invoked.
         *
         * @deprecated 16.3, use getSnapshotBeforeUpdate instead
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
         * @see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path
         */
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    }

    interface Mixin<P, S> extends ComponentLifecycle<P, S> {
        mixins?: Array<Mixin<P, S>> | undefined;
        statics?: {
            [key: string]: any;
        } | undefined;

        displayName?: string | undefined;
        propTypes?: ValidationMap<any> | undefined;
        contextTypes?: ValidationMap<any> | undefined;
        childContextTypes?: ValidationMap<any> | undefined;

        getDefaultProps?(): P;
        getInitialState?(): S;
    }

    interface ComponentSpec<P, S> extends Mixin<P, S> {
        render(): ReactNode;

        [propertyName: string]: any;
    }

    function createRef<T>(): RefObject<T>;

    // will show `ForwardRef(${Component.displayName || Component.name})` in devtools by default,
    // but can be given its own specific name
    interface ForwardRefExoticComponent<P> extends NamedExoticComponent<P> {
        defaultProps?: Partial<P> | undefined;
        propTypes?: WeakValidationMap<P> | undefined;
    }

    function forwardRef<T, P = {}>(render: ForwardRefRenderFunction<T, P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

    /** Ensures that the props do not include ref at all */
    type PropsWithoutRef<P> =
        // Omit would not be sufficient for this. We'd like to avoid unnecessary mapping and need a distributive conditional to support unions.
        // see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
        // https://github.com/Microsoft/TypeScript/issues/28339
        P extends any ? ('ref' extends keyof P ? Omit<P, 'ref'> : P) : P;
    /** Ensures that the props do not include string ref, which cannot be forwarded */
    type PropsWithRef<P> =
        // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
        'ref' extends keyof P
            ? P extends { ref?: infer R | undefined }
                ? string extends R
                    ? PropsWithoutRef<P> & { ref?: Exclude<R, string> | undefined }
                    : P
                : P
            : P;

    type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };

    /**
     * NOTE: prefer ComponentPropsWithRef, if the ref is forwarded,
     * or ComponentPropsWithoutRef when refs are not supported.
     */
    type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
        T extends JSXElementConstructor<infer P>
            ? P
            : T extends keyof JSX.IntrinsicElements
                ? JSX.IntrinsicElements[T]
                : {};
    type ComponentPropsWithRef<T extends ElementType> =
        T extends (new (props: infer P) => Component<any, any>)
            ? PropsWithoutRef<P> & RefAttributes<InstanceType<T>>
            : PropsWithRef<ComponentProps<T>>;
    type ComponentPropsWithoutRef<T extends ElementType> =
        PropsWithoutRef<ComponentProps<T>>;

    type ComponentRef<T extends ElementType> = T extends NamedExoticComponent<
        ComponentPropsWithoutRef<T> & RefAttributes<infer Method>
    >
        ? Method
        : ComponentPropsWithRef<T> extends RefAttributes<infer Method>
            ? Method
            : never;

    // will show `Memo(${Component.displayName || Component.name})` in devtools by default,
    // but can be given its own specific name
    type MemoExoticComponent<T extends ComponentType<any>> = NamedExoticComponent<ComponentPropsWithRef<T>> & {
        readonly type: T;
    };

    function memo<P extends object>(
        Component: FunctionComponent<P>,
        propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean
    ): NamedExoticComponent<P>;
    function memo<T extends ComponentType<any>>(
        Component: T,
        propsAreEqual?: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) => boolean
    ): MemoExoticComponent<T>;

    type LazyExoticComponent<T extends ComponentType<any>> = ExoticComponent<ComponentPropsWithRef<T>> & {
        readonly _result: T;
    };

    function lazy<T extends ComponentType<any>>(
        factory: () => Promise<{ default: T }>
    ): LazyExoticComponent<T>;

    //
    // React Hooks
    // ----------------------------------------------------------------------

    // based on the code in https://github.com/facebook/react/pull/13968

    // Unlike the class component setState, the updates are not allowed to be partial
    type SetStateAction<S> = S | ((prevState: S) => S);
    // this technically does accept a second argument, but it's already under a deprecation warning
    // and it's not even released so probably better to not define it.
    type Dispatch<A> = (value: A) => void;
    // Since action _can_ be undefined, dispatch may be called without any parameters.
    type DispatchWithoutAction = () => void;
    // Unlike redux, the actions _can_ be anything
    type Reducer<S, A> = (prevState: S, action: A) => S;
    // If useReducer accepts a reducer without action, dispatch may be called without any parameters.
    type ReducerWithoutAction<S> = (prevState: S) => S;
    // types used to try and prevent the compiler from reducing S
    // to a supertype common with the second argument to useReducer()
    type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any> ? S : never;
    type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<any, infer A> ? A : never;
    // The identity check is done with the SameValue algorithm (Object.is), which is stricter than ===
    type ReducerStateWithoutAction<R extends ReducerWithoutAction<any>> =
        R extends ReducerWithoutAction<infer S> ? S : never;
    type DependencyList = ReadonlyArray<unknown>;

    // NOTE: callbacks are _only_ allowed to return either void, or a destructor.
    type EffectCallback = () => (void | Destructor);

    interface MutableRefObject<T> {
        current: T;
    }

    // This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns
    /**
     * Accepts a context object (the value returned from `React.createContext`) and returns the current
     * context value, as given by the nearest context provider for the given context.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usecontext
     */
    function useContext<T>(context: Context<T>/*, (not public API) observedBits?: number|boolean */): T;
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usestate
     */
    function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
    // convenience overload when first argument is omitted
    /**
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usestate
     */
    function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usereducer
     */
    // overload where dispatch could accept 0 arguments.
    function useReducer<R extends ReducerWithoutAction<any>, I>(
        reducer: R,
        initializerArg: I,
        initializer: (arg: I) => ReducerStateWithoutAction<R>
    ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usereducer
     */
    // overload where dispatch could accept 0 arguments.
    function useReducer<R extends ReducerWithoutAction<any>>(
        reducer: R,
        initializerArg: ReducerStateWithoutAction<R>,
        initializer?: undefined
    ): [ReducerStateWithoutAction<R>, DispatchWithoutAction];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usereducer
     */
    // overload where "I" may be a subset of ReducerState<R>; used to provide autocompletion.
    // If "I" matches ReducerState<R> exactly then the last overload will allow initializer to be omitted.
    // the last overload effectively behaves as if the identity function (x => x) is the initializer.
    function useReducer<R extends Reducer<any, any>, I>(
        reducer: R,
        initializerArg: I & ReducerState<R>,
        initializer: (arg: I & ReducerState<R>) => ReducerState<R>
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usereducer
     */
    // overload for free "I"; all goes as long as initializer converts it into "ReducerState<R>".
    function useReducer<R extends Reducer<any, any>, I>(
        reducer: R,
        initializerArg: I,
        initializer: (arg: I) => ReducerState<R>
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
     * multiple sub-values. It also lets you optimize performance for components that trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usereducer
     */

    // I'm not sure if I keep this 2-ary or if I make it (2,3)-ary; it's currently (2,3)-ary.
    // The Flow types do have an overload for 3-ary invocation with undefined initializer.

    // NOTE: without the ReducerState indirection, TypeScript would reduce S to be the most common
    // supertype between the reducer's return type and the initialState (or the initializer's return type),
    // which would prevent autocompletion from ever working.

    // TODO: double-check if this weird overload logic is necessary. It is possible it's either a bug
    // in older versions, or a regression in newer versions of the typescript completion service.
    function useReducer<R extends Reducer<any, any>>(
        reducer: R,
        initialState: ReducerState<R>,
        initializer?: undefined
    ): [ReducerState<R>, Dispatch<ReducerAction<R>>];
    /**
     * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
     * (`initialValue`). The returned object will persist for the full lifetime of the component.
     *
     * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#useref
     */
    function useRef<T>(initialValue: T): MutableRefObject<T>;
    // convenience overload for refs given as a ref prop as they typically start with a null value
    /**
     * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
     * (`initialValue`). The returned object will persist for the full lifetime of the component.
     *
     * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * Usage note: if you need the result of useRef to be directly mutable, include `| null` in the type
     * of the generic argument.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#useref
     */
    function useRef<T>(initialValue: T|null): RefObject<T>;
    // convenience overload for potentially undefined initialValue / call with 0 arguments
    // has a default to stop it from defaulting to {} instead
    /**
     * `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument
     * (`initialValue`). The returned object will persist for the full lifetime of the component.
     *
     * Note that `useRef()` is useful for more than the `ref` attribute. It’s handy for keeping any mutable
     * value around similar to how you’d use instance fields in classes.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#useref
     */
    function useRef<T = undefined>(): MutableRefObject<T | undefined>;
    /**
     * The signature is identical to `useEffect`, but it fires synchronously after all DOM mutations.
     * Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside
     * `useLayoutEffect` will be flushed synchronously, before the browser has a chance to paint.
     *
     * Prefer the standard `useEffect` when possible to avoid blocking visual updates.
     *
     * If you’re migrating code from a class component, `useLayoutEffect` fires in the same phase as
     * `componentDidMount` and `componentDidUpdate`.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#uselayouteffect
     */
    function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
    /**
     * Accepts a function that contains imperative, possibly effectful code.
     *
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#useeffect
     */
    function useEffect(effect: EffectCallback, deps?: DependencyList): void;
    // NOTE: this does not accept strings, but this will have to be fixed by removing strings from type Ref<T>
    /**
     * `useImperativeHandle` customizes the instance value that is exposed to parent components when using
     * `ref`. As always, imperative code using refs should be avoided in most cases.
     *
     * `useImperativeHandle` should be used with `React.forwardRef`.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
     */
    function useImperativeHandle<T, R extends T>(ref: Ref<T>|undefined, init: () => R, deps?: DependencyList): void;
    // I made 'inputs' required here and in useMemo as there's no point to memoizing without the memoization key
    // useCallback(X) is identical to just using X, useMemo(() => Y) is identical to just using Y.
    /**
     * `useCallback` will return a memoized version of the callback that only changes if one of the `inputs`
     * has changed.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usecallback
     */
    // A specific function type would not trigger implicit any.
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/52873#issuecomment-845806435 for a comparison between `Function` and more specific types.
    // tslint:disable-next-line ban-types
    function useCallback<T extends Function>(callback: T, deps: DependencyList): T;
    /**
     * `useMemo` will only recompute the memoized value when one of the `deps` has changed.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usememo
     */
    // allow undefined, but don't make it optional as that is very likely a mistake
    function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
    /**
     * `useDebugValue` can be used to display a label for custom hooks in React DevTools.
     *
     * NOTE: We don’t recommend adding debug values to every custom hook.
     * It’s most valuable for custom hooks that are part of shared libraries.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usedebugvalue
     */
    // the name of the custom hook is itself derived from the function name at runtime:
    // it's just the function name without the "use" prefix.
    function useDebugValue<T>(value: T, format?: (value: T) => any): void;

    // must be synchronous
    export type TransitionFunction = () => VoidOrUndefinedOnly;
    // strange definition to allow vscode to show documentation on the invocation
    export interface TransitionStartFunction {
        /**
         * State updates caused inside the callback are allowed to be deferred.
         *
         * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
         *
         * @param callback A _synchronous_ function which causes state updates that can be deferred.
         */
        (callback: TransitionFunction): void;
    }

    /**
     * Returns a deferred version of the value that may “lag behind” it.
     *
     * This is commonly used to keep the interface responsive when you have something that renders immediately
     * based on user input and something that needs to wait for a data fetch.
     *
     * A good example of this is a text input.
     *
     * @param value The value that is going to be deferred
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#usedeferredvalue
     */
    export function useDeferredValue<T>(value: T): T;

    /**
     * Allows components to avoid undesirable loading states by waiting for content to load
     * before transitioning to the next screen. It also allows components to defer slower,
     * data fetching updates until subsequent renders so that more crucial updates can be
     * rendered immediately.
     *
     * The `useTransition` hook returns two values in an array.
     *
     * The first is a boolean, React’s way of informing us whether we’re waiting for the transition to finish.
     * The second is a function that takes a callback. We can use it to tell React which state we want to defer.
     *
     * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**`
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#usetransition
     */
    export function useTransition(): [boolean, TransitionStartFunction];

    /**
     * Similar to `useTransition` but allows uses where hooks are not available.
     *
     * @param callback A _synchronous_ function which causes state updates that can be deferred.
     */
    export function startTransition(scope: TransitionFunction): void;

    export function useId(): string;

    /**
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @see https://github.com/facebook/react/pull/21913
     */
     export function useInsertionEffect(effect: EffectCallback, deps?: DependencyList): void;

    /**
     * @param subscribe
     * @param getSnapshot
     *
     * @see https://github.com/reactwg/react-18/discussions/86
     */
    // keep in sync with `useSyncExternalStore` from `use-sync-external-store`
    export function useSyncExternalStore<Snapshot>(
        subscribe: (onStoreChange: () => void) => () => void,
        getSnapshot: () => Snapshot,
        getServerSnapshot?: () => Snapshot,
    ): Snapshot;

    //
    // Event System
    // ----------------------------------------------------------------------
    // TODO: change any to unknown when moving to TS v3
    interface BaseSyntheticEvent<E = object, C = any, T = any> {
        nativeEvent: E;
        currentTarget: C;
        target: T;
        bubbles: boolean;
        cancelable: boolean;
        defaultPrevented: boolean;
        eventPhase: number;
        isTrusted: boolean;
        preventDefault(): void;
        isDefaultPrevented(): boolean;
        stopPropagation(): void;
        isPropagationStopped(): boolean;
        persist(): void;
        timeStamp: number;
        type: string;
    }

    /**
     * currentTarget - a reference to the element on which the event listener is registered.
     *
     * target - a reference to the element from which the event was originally dispatched.
     * This might be a child element to the element on which the event listener is registered.
     * If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
     */
    interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}

    interface ClipboardEvent<T = Element> extends SyntheticEvent<T, NativeClipboardEvent> {
        clipboardData: DataTransfer;
    }

    interface CompositionEvent<T = Element> extends SyntheticEvent<T, NativeCompositionEvent> {
        data: string;
    }

    interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
        dataTransfer: DataTransfer;
    }

    interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
        pointerId: number;
        pressure: number;
        tangentialPressure: number;
        tiltX: number;
        tiltY: number;
        twist: number;
        width: number;
        height: number;
        pointerType: 'mouse' | 'pen' | 'touch';
        isPrimary: boolean;
    }

    interface FocusEvent<Target = Element, RelatedTarget = Element> extends SyntheticEvent<Target, NativeFocusEvent> {
        relatedTarget: (EventTarget & RelatedTarget) | null;
        target: EventTarget & Target;
    }

    interface FormEvent<T = Element> extends SyntheticEvent<T> {
    }

    interface InvalidEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    export type ModifierKey = "Alt" | "AltGraph" | "CapsLock" | "Control" | "Fn" | "FnLock" | "Hyper" | "Meta" | "NumLock" | "ScrollLock" | "Shift" | "Super" | "Symbol" | "SymbolLock";

    interface KeyboardEvent<T = Element> extends UIEvent<T, NativeKeyboardEvent> {
        altKey: boolean;
        /** @deprecated */
        charCode: number;
        ctrlKey: boolean;
        code: string;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        /**
         * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
         */
        key: string;
        /** @deprecated */
        keyCode: number;
        locale: string;
        location: number;
        metaKey: boolean;
        repeat: boolean;
        shiftKey: boolean;
        /** @deprecated */
        which: number;
    }

    interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        movementX: number;
        movementY: number;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget | null;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
    }

    interface TouchEvent<T = Element> extends UIEvent<T, NativeTouchEvent> {
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        /**
         * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
         */
        getModifierState(key: ModifierKey): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    interface UIEvent<T = Element, E = NativeUIEvent> extends SyntheticEvent<T, E> {
        detail: number;
        view: AbstractView;
    }

    interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
    }

    interface AnimationEvent<T = Element> extends SyntheticEvent<T, NativeAnimationEvent> {
        animationName: string;
        elapsedTime: number;
        pseudoElement: string;
    }

    interface TransitionEvent<T = Element> extends SyntheticEvent<T, NativeTransitionEvent> {
        elapsedTime: number;
        propertyName: string;
        pseudoElement: string;
    }

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

    type ReactEventHandler<T = Element> = EventHandler<SyntheticEvent<T>>;

    type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
    type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
    type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
    type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
    type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
    type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
    type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
    type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
    type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
    type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
    type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
    type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
    type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
    type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;

    //
    // Props / DOM Attributes
    // ----------------------------------------------------------------------

    interface HTMLProps<T> extends AllHTMLAttributes<T>, ClassAttributes<T> {
    }

    type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;

    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
    }

    interface DOMAttributes<T> {
        children?: ReactNode | undefined;
        dangerouslySetInnerHTML?: {
            __html: string;
        } | undefined;

        // Clipboard Events
        onCopy?: ClipboardEventHandler<T> | undefined;
        onCopyCapture?: ClipboardEventHandler<T> | undefined;
        onCut?: ClipboardEventHandler<T> | undefined;
        onCutCapture?: ClipboardEventHandler<T> | undefined;
        onPaste?: ClipboardEventHandler<T> | undefined;
        onPasteCapture?: ClipboardEventHandler<T> | undefined;

        // Composition Events
        onCompositionEnd?: CompositionEventHandler<T> | undefined;
        onCompositionEndCapture?: CompositionEventHandler<T> | undefined;
        onCompositionStart?: CompositionEventHandler<T> | undefined;
        onCompositionStartCapture?: CompositionEventHandler<T> | undefined;
        onCompositionUpdate?: CompositionEventHandler<T> | undefined;
        onCompositionUpdateCapture?: CompositionEventHandler<T> | undefined;

        // Focus Events
        onFocus?: FocusEventHandler<T> | undefined;
        onFocusCapture?: FocusEventHandler<T> | undefined;
        onBlur?: FocusEventHandler<T> | undefined;
        onBlurCapture?: FocusEventHandler<T> | undefined;

        // Form Events
        onChange?: FormEventHandler<T> | undefined;
        onChangeCapture?: FormEventHandler<T> | undefined;
        onBeforeInput?: FormEventHandler<T> | undefined;
        onBeforeInputCapture?: FormEventHandler<T> | undefined;
        onInput?: FormEventHandler<T> | undefined;
        onInputCapture?: FormEventHandler<T> | undefined;
        onReset?: FormEventHandler<T> | undefined;
        onResetCapture?: FormEventHandler<T> | undefined;
        onSubmit?: FormEventHandler<T> | undefined;
        onSubmitCapture?: FormEventHandler<T> | undefined;
        onInvalid?: FormEventHandler<T> | undefined;
        onInvalidCapture?: FormEventHandler<T> | undefined;

        // Image Events
        onLoad?: ReactEventHandler<T> | undefined;
        onLoadCapture?: ReactEventHandler<T> | undefined;
        onError?: ReactEventHandler<T> | undefined; // also a Media Event
        onErrorCapture?: ReactEventHandler<T> | undefined; // also a Media Event

        // Keyboard Events
        onKeyDown?: KeyboardEventHandler<T> | undefined;
        onKeyDownCapture?: KeyboardEventHandler<T> | undefined;
        /** @deprecated */
        onKeyPress?: KeyboardEventHandler<T> | undefined;
        /** @deprecated */
        onKeyPressCapture?: KeyboardEventHandler<T> | undefined;
        onKeyUp?: KeyboardEventHandler<T> | undefined;
        onKeyUpCapture?: KeyboardEventHandler<T> | undefined;

        // Media Events
        onAbort?: ReactEventHandler<T> | undefined;
        onAbortCapture?: ReactEventHandler<T> | undefined;
        onCanPlay?: ReactEventHandler<T> | undefined;
        onCanPlayCapture?: ReactEventHandler<T> | undefined;
        onCanPlayThrough?: ReactEventHandler<T> | undefined;
        onCanPlayThroughCapture?: ReactEventHandler<T> | undefined;
        onDurationChange?: ReactEventHandler<T> | undefined;
        onDurationChangeCapture?: ReactEventHandler<T> | undefined;
        onEmptied?: ReactEventHandler<T> | undefined;
        onEmptiedCapture?: ReactEventHandler<T> | undefined;
        onEncrypted?: ReactEventHandler<T> | undefined;
        onEncryptedCapture?: ReactEventHandler<T> | undefined;
        onEnded?: ReactEventHandler<T> | undefined;
        onEndedCapture?: ReactEventHandler<T> | undefined;
        onLoadedData?: ReactEventHandler<T> | undefined;
        onLoadedDataCapture?: ReactEventHandler<T> | undefined;
        onLoadedMetadata?: ReactEventHandler<T> | undefined;
        onLoadedMetadataCapture?: ReactEventHandler<T> | undefined;
        onLoadStart?: ReactEventHandler<T> | undefined;
        onLoadStartCapture?: ReactEventHandler<T> | undefined;
        onPause?: ReactEventHandler<T> | undefined;
        onPauseCapture?: ReactEventHandler<T> | undefined;
        onPlay?: ReactEventHandler<T> | undefined;
        onPlayCapture?: ReactEventHandler<T> | undefined;
        onPlaying?: ReactEventHandler<T> | undefined;
        onPlayingCapture?: ReactEventHandler<T> | undefined;
        onProgress?: ReactEventHandler<T> | undefined;
        onProgressCapture?: ReactEventHandler<T> | undefined;
        onRateChange?: ReactEventHandler<T> | undefined;
        onRateChangeCapture?: ReactEventHandler<T> | undefined;
        onResize?: ReactEventHandler<T> | undefined;
        onResizeCapture?: ReactEventHandler<T> | undefined;
        onSeeked?: ReactEventHandler<T> | undefined;
        onSeekedCapture?: ReactEventHandler<T> | undefined;
        onSeeking?: ReactEventHandler<T> | undefined;
        onSeekingCapture?: ReactEventHandler<T> | undefined;
        onStalled?: ReactEventHandler<T> | undefined;
        onStalledCapture?: ReactEventHandler<T> | undefined;
        onSuspend?: ReactEventHandler<T> | undefined;
        onSuspendCapture?: ReactEventHandler<T> | undefined;
        onTimeUpdate?: ReactEventHandler<T> | undefined;
        onTimeUpdateCapture?: ReactEventHandler<T> | undefined;
        onVolumeChange?: ReactEventHandler<T> | undefined;
        onVolumeChangeCapture?: ReactEventHandler<T> | undefined;
        onWaiting?: ReactEventHandler<T> | undefined;
        onWaitingCapture?: ReactEventHandler<T> | undefined;

        // MouseEvents
        onAuxClick?: MouseEventHandler<T> | undefined;
        onAuxClickCapture?: MouseEventHandler<T> | undefined;
        onClick?: MouseEventHandler<T> | undefined;
        onClickCapture?: MouseEventHandler<T> | undefined;
        onContextMenu?: MouseEventHandler<T> | undefined;
        onContextMenuCapture?: MouseEventHandler<T> | undefined;
        onDoubleClick?: MouseEventHandler<T> | undefined;
        onDoubleClickCapture?: MouseEventHandler<T> | undefined;
        onDrag?: DragEventHandler<T> | undefined;
        onDragCapture?: DragEventHandler<T> | undefined;
        onDragEnd?: DragEventHandler<T> | undefined;
        onDragEndCapture?: DragEventHandler<T> | undefined;
        onDragEnter?: DragEventHandler<T> | undefined;
        onDragEnterCapture?: DragEventHandler<T> | undefined;
        onDragExit?: DragEventHandler<T> | undefined;
        onDragExitCapture?: DragEventHandler<T> | undefined;
        onDragLeave?: DragEventHandler<T> | undefined;
        onDragLeaveCapture?: DragEventHandler<T> | undefined;
        onDragOver?: DragEventHandler<T> | undefined;
        onDragOverCapture?: DragEventHandler<T> | undefined;
        onDragStart?: DragEventHandler<T> | undefined;
        onDragStartCapture?: DragEventHandler<T> | undefined;
        onDrop?: DragEventHandler<T> | undefined;
        onDropCapture?: DragEventHandler<T> | undefined;
        onMouseDown?: MouseEventHandler<T> | undefined;
        onMouseDownCapture?: MouseEventHandler<T> | undefined;
        onMouseEnter?: MouseEventHandler<T> | undefined;
        onMouseLeave?: MouseEventHandler<T> | undefined;
        onMouseMove?: MouseEventHandler<T> | undefined;
        onMouseMoveCapture?: MouseEventHandler<T> | undefined;
        onMouseOut?: MouseEventHandler<T> | undefined;
        onMouseOutCapture?: MouseEventHandler<T> | undefined;
        onMouseOver?: MouseEventHandler<T> | undefined;
        onMouseOverCapture?: MouseEventHandler<T> | undefined;
        onMouseUp?: MouseEventHandler<T> | undefined;
        onMouseUpCapture?: MouseEventHandler<T> | undefined;

        // Selection Events
        onSelect?: ReactEventHandler<T> | undefined;
        onSelectCapture?: ReactEventHandler<T> | undefined;

        // Touch Events
        onTouchCancel?: TouchEventHandler<T> | undefined;
        onTouchCancelCapture?: TouchEventHandler<T> | undefined;
        onTouchEnd?: TouchEventHandler<T> | undefined;
        onTouchEndCapture?: TouchEventHandler<T> | undefined;
        onTouchMove?: TouchEventHandler<T> | undefined;
        onTouchMoveCapture?: TouchEventHandler<T> | undefined;
        onTouchStart?: TouchEventHandler<T> | undefined;
        onTouchStartCapture?: TouchEventHandler<T> | undefined;

        // Pointer Events
        onPointerDown?: PointerEventHandler<T> | undefined;
        onPointerDownCapture?: PointerEventHandler<T> | undefined;
        onPointerMove?: PointerEventHandler<T> | undefined;
        onPointerMoveCapture?: PointerEventHandler<T> | undefined;
        onPointerUp?: PointerEventHandler<T> | undefined;
        onPointerUpCapture?: PointerEventHandler<T> | undefined;
        onPointerCancel?: PointerEventHandler<T> | undefined;
        onPointerCancelCapture?: PointerEventHandler<T> | undefined;
        onPointerEnter?: PointerEventHandler<T> | undefined;
        onPointerEnterCapture?: PointerEventHandler<T> | undefined;
        onPointerLeave?: PointerEventHandler<T> | undefined;
        onPointerLeaveCapture?: PointerEventHandler<T> | undefined;
        onPointerOver?: PointerEventHandler<T> | undefined;
        onPointerOverCapture?: PointerEventHandler<T> | undefined;
        onPointerOut?: PointerEventHandler<T> | undefined;
        onPointerOutCapture?: PointerEventHandler<T> | undefined;
        onGotPointerCapture?: PointerEventHandler<T> | undefined;
        onGotPointerCaptureCapture?: PointerEventHandler<T> | undefined;
        onLostPointerCapture?: PointerEventHandler<T> | undefined;
        onLostPointerCaptureCapture?: PointerEventHandler<T> | undefined;

        // UI Events
        onScroll?: UIEventHandler<T> | undefined;
        onScrollCapture?: UIEventHandler<T> | undefined;

        // Wheel Events
        onWheel?: WheelEventHandler<T> | undefined;
        onWheelCapture?: WheelEventHandler<T> | undefined;

        // Animation Events
        onAnimationStart?: AnimationEventHandler<T> | undefined;
        onAnimationStartCapture?: AnimationEventHandler<T> | undefined;
        onAnimationEnd?: AnimationEventHandler<T> | undefined;
        onAnimationEndCapture?: AnimationEventHandler<T> | undefined;
        onAnimationIteration?: AnimationEventHandler<T> | undefined;
        onAnimationIterationCapture?: AnimationEventHandler<T> | undefined;

        // Transition Events
        onTransitionEnd?: TransitionEventHandler<T> | undefined;
        onTransitionEndCapture?: TransitionEventHandler<T> | undefined;
    }
    
    export interface CSSProperties extends CSS.Properties<string | number> {
            /**
             * The **`accent-color`** CSS property sets the accent color for user-interface controls generated by some elements.
             *
             * **Syntax**: `auto | <color>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **93** | **92**  | **15.4** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/accent-color
             */
            accentColor?: CSS.Property.AccentColor | undefined;
            /**
             * The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
             *
             * **Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`
             *
             * **Initial value**: `normal`
             *
             * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :------: | :-----: | :-----: | :----: | :----: |
             * |  **29**  | **28**  |  **9**  | **12** | **11** |
             * | 21 _-x-_ |         | 7 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/align-content
             */
            alignContent?: CSS.Property.AlignContent | undefined;
            /**
             * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
             *
             * **Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`
             *
             * **Initial value**: `normal`
             *
             * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :------: | :-----: | :-----: | :----: | :----: |
             * |  **29**  | **20**  |  **9**  | **12** | **11** |
             * | 21 _-x-_ |         | 7 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/align-items
             */
            alignItems?: CSS.Property.AlignItems | undefined;
            /**
             * The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
             *
             * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`
             *
             * **Initial value**: `auto`
             *
             * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :------: | :-----: | :-----: | :----: | :----: |
             * |  **29**  | **20**  |  **9**  | **12** | **10** |
             * | 21 _-x-_ |         | 7 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/align-self
             */
            alignSelf?: CSS.Property.AlignSelf | undefined;
            /**
             * The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.
             *
             * **Syntax**: `[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   |   n/a   |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/align-tracks
             */
            alignTracks?: CSS.Property.AlignTracks | undefined;
            /**
             * The **`animation-composition`** CSS property specifies the composite operation to use when multiple animations affect the same property simultaneously.
             *
             * **Syntax**: `<single-animation-composition>#`
             *
             * **Initial value**: `replace`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   |   n/a   |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/animation-composition
             */
            animationComposition?: CSS.Property.AnimationComposition | undefined;
            /**
             * The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
             *
             * **Syntax**: `<time>#`
             *
             * **Initial value**: `0s`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **43**  | **16**  |  **9**  | **12** | **10** |
             * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
             */
            animationDelay?: CSS.Property.AnimationDelay<(string & {})> | undefined;
            /**
             * The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
             *
             * **Syntax**: `<single-animation-direction>#`
             *
             * **Initial value**: `normal`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **43**  | **16**  |  **9**  | **12** | **10** |
             * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
             */
            animationDirection?: CSS.Property.AnimationDirection | undefined;
            /**
             * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
             *
             * **Syntax**: `<time>#`
             *
             * **Initial value**: `0s`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **43**  | **16**  |  **9**  | **12** | **10** |
             * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
             */
            animationDuration?: CSS.Property.AnimationDuration<(string & {})> | undefined;
            /**
             * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
             *
             * **Syntax**: `<single-animation-fill-mode>#`
             *
             * **Initial value**: `none`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **43**  | **16**  |  **9**  | **12** | **10** |
             * | 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
             */
            animationFillMode?: CSS.Property.AnimationFillMode | undefined;
            /**
             * The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.
             *
             * **Syntax**: `<single-animation-iteration-count>#`
             *
             * **Initial value**: `1`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **43**  | **16**  |  **9**  | **12** | **10** |
             * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
             */
            animationIterationCount?: CSS.Property.AnimationIterationCount | undefined;
            /**
             * The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.
             *
             * **Syntax**: `[ none | <keyframes-name> ]#`
             *
             * **Initial value**: `none`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **43**  | **16**  |  **9**  | **12** | **10** |
             * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
             */
            animationName?: CSS.Property.AnimationName | undefined;
            /**
             * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
             *
             * **Syntax**: `<single-animation-play-state>#`
             *
             * **Initial value**: `running`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **43**  | **16**  |  **9**  | **12** | **10** |
             * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
             */
            animationPlayState?: CSS.Property.AnimationPlayState | undefined;
            /**
             * The **`animation-timeline`** CSS property specifies the names of one or more `@scroll-timeline` at-rules describing the scroll animations to apply to the element.
             *
             * **Syntax**: `<single-animation-timeline>#`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   |   n/a   |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/animation-timeline
             */
            animationTimeline?: CSS.Property.AnimationTimeline | undefined;
            /**
             * The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.
             *
             * **Syntax**: `<easing-function>#`
             *
             * **Initial value**: `ease`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **43**  | **16**  |  **9**  | **12** | **10** |
             * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
             */
            animationTimingFunction?: CSS.Property.AnimationTimingFunction | undefined;
            /**
             * The **`appearance`** CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.
             *
             * **Syntax**: `none | auto | textfield | menulist-button | <compat-auto>`
             *
             * **Initial value**: `none`
             *
             * | Chrome  | Firefox |  Safari  |   Edge   | IE  |
             * | :-----: | :-----: | :------: | :------: | :-: |
             * | **84**  | **80**  | **15.4** |  **84**  | No  |
             * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_  | 12 _-x-_ |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/appearance
             */
            appearance?: CSS.Property.Appearance | undefined;
            /**
             * The **`aspect-ratio`** CSS property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.
             *
             * **Syntax**: `auto | <ratio>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **88** | **89**  | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/aspect-ratio
             */
            aspectRatio?: CSS.Property.AspectRatio | undefined;
            /**
             * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
             *
             * **Syntax**: `none | <filter-function-list>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |   Safari    |  Edge  | IE  |
             * | :----: | :-----: | :---------: | :----: | :-: |
             * | **76** | **103** | **9** _-x-_ | **17** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
             */
            backdropFilter?: CSS.Property.BackdropFilter | undefined;
            /**
             * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
             *
             * **Syntax**: `visible | hidden`
             *
             * **Initial value**: `visible`
             *
             * |  Chrome  | Firefox  |  Safari   |  Edge  |   IE   |
             * | :------: | :------: | :-------: | :----: | :----: |
             * |  **36**  |  **16**  | **15.4**  | **12** | **10** |
             * | 12 _-x-_ | 10 _-x-_ | 5.1 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
             */
            backfaceVisibility?: CSS.Property.BackfaceVisibility | undefined;
            /**
             * The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
             *
             * **Syntax**: `<attachment>#`
             *
             * **Initial value**: `scroll`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
             */
            backgroundAttachment?: CSS.Property.BackgroundAttachment | undefined;
            /**
             * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
             *
             * **Syntax**: `<blend-mode>#`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **35** | **30**  | **8**  | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
             */
            backgroundBlendMode?: CSS.Property.BackgroundBlendMode | undefined;
            /**
             * The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
             *
             * **Syntax**: `<box>#`
             *
             * **Initial value**: `border-box`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  |  **4**  | **14**  | **12** | **9** |
             * |        |         | 3 _-x-_ |        |       |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
             */
            backgroundClip?: CSS.Property.BackgroundClip | undefined;
            /**
             * The **`background-color`** CSS property sets the background color of an element.
             *
             * **Syntax**: `<color>`
             *
             * **Initial value**: `transparent`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/background-color
             */
            backgroundColor?: CSS.Property.BackgroundColor | undefined;
            /**
             * The **`background-image`** CSS property sets one or more background images on an element.
             *
             * **Syntax**: `<bg-image>#`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/background-image
             */
            backgroundImage?: CSS.Property.BackgroundImage | undefined;
            /**
             * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
             *
             * **Syntax**: `<box>#`
             *
             * **Initial value**: `padding-box`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **4**  | **3**  | **12** | **9** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
             */
            backgroundOrigin?: CSS.Property.BackgroundOrigin | undefined;
            /**
             * The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.
             *
             * **Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`
             *
             * **Initial value**: `0%`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  | **49**  | **1**  | **12** | **6** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
             */
            backgroundPositionX?: CSS.Property.BackgroundPositionX<(string & {})> | undefined;
            /**
             * The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.
             *
             * **Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`
             *
             * **Initial value**: `0%`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  | **49**  | **1**  | **12** | **6** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
             */
            backgroundPositionY?: CSS.Property.BackgroundPositionY<(string & {})> | undefined;
            /**
             * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
             *
             * **Syntax**: `<repeat-style>#`
             *
             * **Initial value**: `repeat`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
             */
            backgroundRepeat?: CSS.Property.BackgroundRepeat | undefined;
            /**
             * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
             *
             * **Syntax**: `<bg-size>#`
             *
             * **Initial value**: `auto auto`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
             * | :-----: | :-----: | :-----: | :----: | :---: |
             * |  **3**  |  **4**  |  **5**  | **12** | **9** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |       |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/background-size
             */
            backgroundSize?: CSS.Property.BackgroundSize<(string & {})> | undefined;
            /**
             * **Syntax**: `clip | ellipsis | <string>`
             *
             * **Initial value**: `clip`
             */
            blockOverflow?: CSS.Property.BlockOverflow | undefined;
            /**
             * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
             *
             * **Syntax**: `<'width'>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **57** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/block-size
             */
            blockSize?: CSS.Property.BlockSize<(string & {})> | undefined;
            /**
             * The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-color'>{1,2}`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **66**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-block-color
             */
            borderBlockColor?: CSS.Property.BorderBlockColor | undefined;
            /**
             * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-color'>`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
             */
            borderBlockEndColor?: CSS.Property.BorderBlockEndColor | undefined;
            /**
             * The **`border-block-end-style`** CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-style'>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
             */
            borderBlockEndStyle?: CSS.Property.BorderBlockEndStyle | undefined;
            /**
             * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-width'>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
             */
            borderBlockEndWidth?: CSS.Property.BorderBlockEndWidth<(string & {})> | undefined;
            /**
             * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-color'>`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
             */
            borderBlockStartColor?: CSS.Property.BorderBlockStartColor | undefined;
            /**
             * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-style'>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
             */
            borderBlockStartStyle?: CSS.Property.BorderBlockStartStyle | undefined;
            /**
             * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-width'>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
             */
            borderBlockStartWidth?: CSS.Property.BorderBlockStartWidth<(string & {})> | undefined;
            /**
             * The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-style'>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **66**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-block-style
             */
            borderBlockStyle?: CSS.Property.BorderBlockStyle | undefined;
            /**
             * The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-width'>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **66**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-block-width
             */
            borderBlockWidth?: CSS.Property.BorderBlockWidth<(string & {})> | undefined;
            /**
             * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
             *
             * **Syntax**: `<'border-top-color'>`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
             */
            borderBottomColor?: CSS.Property.BorderBottomColor | undefined;
            /**
             * The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
             *
             * **Syntax**: `<length-percentage>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
             * | :-----: | :-----: | :-----: | :----: | :---: |
             * |  **4**  |  **4**  |  **5**  | **12** | **9** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |       |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
             */
            borderBottomLeftRadius?: CSS.Property.BorderBottomLeftRadius<(string & {})> | undefined;
            /**
             * The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
             *
             * **Syntax**: `<length-percentage>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
             * | :-----: | :-----: | :-----: | :----: | :---: |
             * |  **4**  |  **4**  |  **5**  | **12** | **9** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |       |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
             */
            borderBottomRightRadius?: CSS.Property.BorderBottomRightRadius<(string & {})> | undefined;
            /**
             * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
             *
             * **Syntax**: `<line-style>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE    |
             * | :----: | :-----: | :----: | :----: | :-----: |
             * | **1**  |  **1**  | **1**  | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
             */
            borderBottomStyle?: CSS.Property.BorderBottomStyle | undefined;
            /**
             * The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.
             *
             * **Syntax**: `<line-width>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
             */
            borderBottomWidth?: CSS.Property.BorderBottomWidth<(string & {})> | undefined;
            /**
             * The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.
             *
             * **Syntax**: `collapse | separate`
             *
             * **Initial value**: `separate`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  |  **1**  | **1.2** | **12** | **5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
             */
            borderCollapse?: CSS.Property.BorderCollapse | undefined;
            /**
             * The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
             *
             * **Syntax**: `<length-percentage>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **89** | **66**  | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-end-end-radius
             */
            borderEndEndRadius?: CSS.Property.BorderEndEndRadius<(string & {})> | undefined;
            /**
             * The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
             *
             * **Syntax**: `<length-percentage>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **89** | **66**  | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-end-start-radius
             */
            borderEndStartRadius?: CSS.Property.BorderEndStartRadius<(string & {})> | undefined;
            /**
             * The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.
             *
             * **Syntax**: `[ <length> | <number> ]{1,4}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * | **15** | **15**  | **6**  | **12** | **11** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
             */
            borderImageOutset?: CSS.Property.BorderImageOutset<(string & {})> | undefined;
            /**
             * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
             *
             * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
             *
             * **Initial value**: `stretch`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * | **15** | **15**  | **6**  | **12** | **11** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
             */
            borderImageRepeat?: CSS.Property.BorderImageRepeat | undefined;
            /**
             * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
             *
             * **Syntax**: `<number-percentage>{1,4} && fill?`
             *
             * **Initial value**: `100%`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * | **15** | **15**  | **6**  | **12** | **11** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
             */
            borderImageSlice?: CSS.Property.BorderImageSlice | undefined;
            /**
             * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
             *
             * **Syntax**: `none | <image>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * | **15** | **15**  | **6**  | **12** | **11** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
             */
            borderImageSource?: CSS.Property.BorderImageSource | undefined;
            /**
             * The **`border-image-width`** CSS property sets the width of an element's border image.
             *
             * **Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`
             *
             * **Initial value**: `1`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * | **15** | **13**  | **6**  | **12** | **11** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
             */
            borderImageWidth?: CSS.Property.BorderImageWidth<(string & {})> | undefined;
            /**
             * The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-color'>{1,2}`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **66**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-color
             */
            borderInlineColor?: CSS.Property.BorderInlineColor | undefined;
            /**
             * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-color'>`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome |           Firefox           |  Safari  | Edge | IE  |
             * | :----: | :-------------------------: | :------: | :--: | :-: |
             * | **69** |           **41**            | **12.1** | n/a  | No  |
             * |        | 3 _(-moz-border-end-color)_ |          |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
             */
            borderInlineEndColor?: CSS.Property.BorderInlineEndColor | undefined;
            /**
             * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-style'>`
             *
             * **Initial value**: `none`
             *
             * | Chrome |           Firefox           |  Safari  | Edge | IE  |
             * | :----: | :-------------------------: | :------: | :--: | :-: |
             * | **69** |           **41**            | **12.1** | n/a  | No  |
             * |        | 3 _(-moz-border-end-style)_ |          |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
             */
            borderInlineEndStyle?: CSS.Property.BorderInlineEndStyle | undefined;
            /**
             * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-width'>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome |           Firefox           |  Safari  | Edge | IE  |
             * | :----: | :-------------------------: | :------: | :--: | :-: |
             * | **69** |           **41**            | **12.1** | n/a  | No  |
             * |        | 3 _(-moz-border-end-width)_ |          |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
             */
            borderInlineEndWidth?: CSS.Property.BorderInlineEndWidth<(string & {})> | undefined;
            /**
             * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-color'>`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome |            Firefox            |  Safari  | Edge | IE  |
             * | :----: | :---------------------------: | :------: | :--: | :-: |
             * | **69** |            **41**             | **12.1** | n/a  | No  |
             * |        | 3 _(-moz-border-start-color)_ |          |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
             */
            borderInlineStartColor?: CSS.Property.BorderInlineStartColor | undefined;
            /**
             * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-style'>`
             *
             * **Initial value**: `none`
             *
             * | Chrome |            Firefox            |  Safari  | Edge | IE  |
             * | :----: | :---------------------------: | :------: | :--: | :-: |
             * | **69** |            **41**             | **12.1** | n/a  | No  |
             * |        | 3 _(-moz-border-start-style)_ |          |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
             */
            borderInlineStartStyle?: CSS.Property.BorderInlineStartStyle | undefined;
            /**
             * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-width'>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
             */
            borderInlineStartWidth?: CSS.Property.BorderInlineStartWidth<(string & {})> | undefined;
            /**
             * The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-style'>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **66**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-style
             */
            borderInlineStyle?: CSS.Property.BorderInlineStyle | undefined;
            /**
             * The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'border-top-width'>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **66**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-width
             */
            borderInlineWidth?: CSS.Property.BorderInlineWidth<(string & {})> | undefined;
            /**
             * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
             *
             * **Syntax**: `<color>`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
             */
            borderLeftColor?: CSS.Property.BorderLeftColor | undefined;
            /**
             * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
             *
             * **Syntax**: `<line-style>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE    |
             * | :----: | :-----: | :----: | :----: | :-----: |
             * | **1**  |  **1**  | **1**  | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
             */
            borderLeftStyle?: CSS.Property.BorderLeftStyle | undefined;
            /**
             * The **`border-left-width`** CSS property sets the width of the left border of an element.
             *
             * **Syntax**: `<line-width>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
             */
            borderLeftWidth?: CSS.Property.BorderLeftWidth<(string & {})> | undefined;
            /**
             * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
             *
             * **Syntax**: `<color>`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
             */
            borderRightColor?: CSS.Property.BorderRightColor | undefined;
            /**
             * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
             *
             * **Syntax**: `<line-style>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE    |
             * | :----: | :-----: | :----: | :----: | :-----: |
             * | **1**  |  **1**  | **1**  | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
             */
            borderRightStyle?: CSS.Property.BorderRightStyle | undefined;
            /**
             * The **`border-right-width`** CSS property sets the width of the right border of an element.
             *
             * **Syntax**: `<line-width>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
             */
            borderRightWidth?: CSS.Property.BorderRightWidth<(string & {})> | undefined;
            /**
             * The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
             *
             * **Syntax**: `<length> <length>?`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
             */
            borderSpacing?: CSS.Property.BorderSpacing<(string & {})> | undefined;
            /**
             * The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
             *
             * **Syntax**: `<length-percentage>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **89** | **66**  | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-start-end-radius
             */
            borderStartEndRadius?: CSS.Property.BorderStartEndRadius<(string & {})> | undefined;
            /**
             * The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.
             *
             * **Syntax**: `<length-percentage>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **89** | **66**  | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-start-start-radius
             */
            borderStartStartRadius?: CSS.Property.BorderStartStartRadius<(string & {})> | undefined;
            /**
             * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
             *
             * **Syntax**: `<color>`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
             */
            borderTopColor?: CSS.Property.BorderTopColor | undefined;
            /**
             * The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
             *
             * **Syntax**: `<length-percentage>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
             * | :-----: | :-----: | :-----: | :----: | :---: |
             * |  **4**  |  **4**  |  **5**  | **12** | **9** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |       |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
             */
            borderTopLeftRadius?: CSS.Property.BorderTopLeftRadius<(string & {})> | undefined;
            /**
             * The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
             *
             * **Syntax**: `<length-percentage>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
             * | :-----: | :-----: | :-----: | :----: | :---: |
             * |  **4**  |  **4**  |  **5**  | **12** | **9** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |       |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
             */
            borderTopRightRadius?: CSS.Property.BorderTopRightRadius<(string & {})> | undefined;
            /**
             * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
             *
             * **Syntax**: `<line-style>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE    |
             * | :----: | :-----: | :----: | :----: | :-----: |
             * | **1**  |  **1**  | **1**  | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
             */
            borderTopStyle?: CSS.Property.BorderTopStyle | undefined;
            /**
             * The **`border-top-width`** CSS property sets the width of the top border of an element.
             *
             * **Syntax**: `<line-width>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
             */
            borderTopWidth?: CSS.Property.BorderTopWidth<(string & {})> | undefined;
            /**
             * The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
             *
             * **Syntax**: `<length> | <percentage> | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/bottom
             */
            bottom?: CSS.Property.Bottom<(string & {})> | undefined;
            /**
             * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
             *
             * **Syntax**: `slice | clone`
             *
             * **Initial value**: `slice`
             *
             * |    Chrome    | Firefox |   Safari    | Edge | IE  |
             * | :----------: | :-----: | :---------: | :--: | :-: |
             * | **22** _-x-_ | **32**  | **7** _-x-_ | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
             */
            boxDecorationBreak?: CSS.Property.BoxDecorationBreak | undefined;
            /**
             * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
             *
             * **Syntax**: `none | <shadow>#`
             *
             * **Initial value**: `none`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
             * | :-----: | :-----: | :-----: | :----: | :---: |
             * | **10**  |  **4**  | **5.1** | **12** | **9** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |       |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
             */
            boxShadow?: CSS.Property.BoxShadow | undefined;
            /**
             * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
             *
             * **Syntax**: `content-box | border-box`
             *
             * **Initial value**: `content-box`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
             * | :-----: | :-----: | :-----: | :----: | :---: |
             * | **10**  | **29**  | **5.1** | **12** | **8** |
             * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
             */
            boxSizing?: CSS.Property.BoxSizing | undefined;
            /**
             * The **`break-after`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
             *
             * **Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * | **50** | **65**  | **10** | **12** | **10** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/break-after
             */
            breakAfter?: CSS.Property.BreakAfter | undefined;
            /**
             * The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
             *
             * **Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * | **50** | **65**  | **10** | **12** | **10** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/break-before
             */
            breakBefore?: CSS.Property.BreakBefore | undefined;
            /**
             * The **`break-inside`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
             *
             * **Syntax**: `auto | avoid | avoid-page | avoid-column | avoid-region`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * | **50** | **65**  | **10** | **12** | **10** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
             */
            breakInside?: CSS.Property.BreakInside | undefined;
            /**
             * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
             *
             * **Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`
             *
             * **Initial value**: `top`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
             */
            captionSide?: CSS.Property.CaptionSide | undefined;
            /**
             * The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this CSS.Property.
             *
             * **Syntax**: `auto | <color>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **57** | **53**  | **11.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
             */
            caretColor?: CSS.Property.CaretColor | undefined;
            /**
             * The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.
             *
             * **Syntax**: `none | left | right | both | inline-start | inline-end`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/clear
             */
            clear?: CSS.Property.Clear | undefined;
            /**
             * The **`clip-path`** CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
             *
             * **Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`
             *
             * **Initial value**: `none`
             *
             * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :------: | :-----: | :-----: | :----: | :----: |
             * |  **55**  | **3.5** | **9.1** | **79** | **10** |
             * | 23 _-x-_ |         | 7 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
             */
            clipPath?: CSS.Property.ClipPath | undefined;
            /**
             * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `<currentcolor>` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
             *
             * **Syntax**: `<color>`
             *
             * **Initial value**: `canvastext`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **3** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/color
             */
            color?: CSS.Property.Color | undefined;
            /**
             * The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
             *
             * **Syntax**: `economy | exact`
             *
             * **Initial value**: `economy`
             *
             * |    Chrome    |       Firefox       |  Safari  |     Edge     | IE  |
             * | :----------: | :-----------------: | :------: | :----------: | :-: |
             * | **17** _-x-_ |       **97**        | **15.4** | **79** _-x-_ | No  |
             * |              | 48 _(color-adjust)_ | 6 _-x-_  |              |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/print-color-adjust
             */
            colorAdjust?: CSS.Property.PrintColorAdjust | undefined;
            /**
             * The **`color-scheme`** CSS property allows an element to indicate which color schemes it can comfortably be rendered in.
             *
             * **Syntax**: `normal | [ light | dark | <custom-ident> ]+ && only?`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **81** | **96**  | **13** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/color-scheme
             */
            colorScheme?: CSS.Property.ColorScheme | undefined;
            /**
             * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
             *
             * **Syntax**: `<integer> | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **50**  | **52**  |  **9**  | **12** | **10** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/column-count
             */
            columnCount?: CSS.Property.ColumnCount | undefined;
            /**
             * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
             *
             * **Syntax**: `auto | balance | balance-all`
             *
             * **Initial value**: `balance`
             *
             * | Chrome | Firefox | Safari  |  Edge  |   IE   |
             * | :----: | :-----: | :-----: | :----: | :----: |
             * | **50** | **52**  |  **9**  | **12** | **10** |
             * |        |         | 8 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
             */
            columnFill?: CSS.Property.ColumnFill | undefined;
            /**
             * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
             *
             * **Syntax**: `normal | <length-percentage>`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * | **1**  | **1.5** | **3**  | **12** | **10** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
             */
            columnGap?: CSS.Property.ColumnGap<(string & {})> | undefined;
            /**
             * The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.
             *
             * **Syntax**: `<color>`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **50**  | **52**  |  **9**  | **12** | **10** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
             */
            columnRuleColor?: CSS.Property.ColumnRuleColor | undefined;
            /**
             * The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.
             *
             * **Syntax**: `<'border-style'>`
             *
             * **Initial value**: `none`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **50**  | **52**  |  **9**  | **12** | **10** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
             */
            columnRuleStyle?: CSS.Property.ColumnRuleStyle | undefined;
            /**
             * The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.
             *
             * **Syntax**: `<'border-width'>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **50**  | **52**  |  **9**  | **12** | **10** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
             */
            columnRuleWidth?: CSS.Property.ColumnRuleWidth<(string & {})> | undefined;
            /**
             * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
             *
             * **Syntax**: `none | all`
             *
             * **Initial value**: `none`
             *
             * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
             * | :-----: | :-----: | :-------: | :----: | :----: |
             * | **50**  | **71**  |   **9**   | **12** | **10** |
             * | 6 _-x-_ |         | 5.1 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/column-span
             */
            columnSpan?: CSS.Property.ColumnSpan | undefined;
            /**
             * The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
             *
             * **Syntax**: `<length> | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **50**  | **50**  |  **9**  | **12** | **10** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/column-width
             */
            columnWidth?: CSS.Property.ColumnWidth<(string & {})> | undefined;
            /**
             * The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.
             *
             * **Syntax**: `none | strict | content | [ [ size || inline-size ] || layout || style || paint ]`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **52** | **69**  | **15.4** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/contain
             */
            contain?: CSS.Property.Contain | undefined;
            /**
             * The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous replaced elements**.
             *
             * **Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [/ [ <string> | <counter> ]+ ]?`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/content
             */
            content?: CSS.Property.Content | undefined;
            /**
             * The **`content-visibility`** CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.
             *
             * **Syntax**: `visible | auto | hidden`
             *
             * **Initial value**: `visible`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **85** |   No    |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/content-visibility
             */
            contentVisibility?: CSS.Property.ContentVisibility | undefined;
            /**
             * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
             *
             * **Syntax**: `[ <counter-name> <integer>? ]+ | none`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **2**  |  **1**  | **3**  | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
             */
            counterIncrement?: CSS.Property.CounterIncrement | undefined;
            /**
             * The **`counter-reset`** CSS property resets a CSS counter to a given value. This property will create a new counter or reversed counter with the given name on the specified element.
             *
             * **Syntax**: `[ <counter-name> <integer>? | <reversed-counter-name> <integer>? ]+ | none`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **2**  |  **1**  | **3**  | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
             */
            counterReset?: CSS.Property.CounterReset | undefined;
            /**
             * The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.
             *
             * **Syntax**: `[ <counter-name> <integer>? ]+ | none`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **85** | **68**  |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/counter-set
             */
            counterSet?: CSS.Property.CounterSet | undefined;
            /**
             * The **`cursor`** CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an element.
             *
             * **Syntax**: `[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  |  **1**  | **1.2** | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/cursor
             */
            cursor?: CSS.Property.Cursor | undefined;
            /**
             * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
             *
             * **Syntax**: `ltr | rtl`
             *
             * **Initial value**: `ltr`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE    |
             * | :----: | :-----: | :----: | :----: | :-----: |
             * | **2**  |  **1**  | **1**  | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/direction
             */
            direction?: CSS.Property.Direction | undefined;
            /**
             * The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
             *
             * **Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`
             *
             * **Initial value**: `inline`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/display
             */
            display?: CSS.Property.Display | undefined;
            /**
             * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
             *
             * **Syntax**: `show | hide`
             *
             * **Initial value**: `show`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  |  **1**  | **1.2** | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
             */
            emptyCells?: CSS.Property.EmptyCells | undefined;
            /**
             * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
             *
             * **Syntax**: `none | <filter-function-list>`
             *
             * **Initial value**: `none`
             *
             * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
             * | :------: | :-----: | :-----: | :----: | :-: |
             * |  **53**  | **35**  | **9.1** | **12** | No  |
             * | 18 _-x-_ |         | 6 _-x-_ |        |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/filter
             */
            filter?: CSS.Property.Filter | undefined;
            /**
             * The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.
             *
             * **Syntax**: `content | <'width'>`
             *
             * **Initial value**: `auto`
             *
             * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :------: | :-----: | :-----: | :----: | :----: |
             * |  **29**  | **22**  |  **9**  | **12** | **11** |
             * | 22 _-x-_ |         | 7 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
             */
            flexBasis?: CSS.Property.FlexBasis<(string & {})> | undefined;
            /**
             * The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
             *
             * **Syntax**: `row | row-reverse | column | column-reverse`
             *
             * **Initial value**: `row`
             *
             * |  Chrome  | Firefox  | Safari  |  Edge  |    IE    |
             * | :------: | :------: | :-----: | :----: | :------: |
             * |  **29**  |  **81**  |  **9**  | **12** |  **11**  |
             * | 21 _-x-_ | 49 _-x-_ | 7 _-x-_ |        | 10 _-x-_ |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
             */
            flexDirection?: CSS.Property.FlexDirection | undefined;
            /**
             * The **`flex-grow`** CSS property sets the flex grow factor of a flex item's main size.
             *
             * **Syntax**: `<number>`
             *
             * **Initial value**: `0`
             *
             * |  Chrome  | Firefox | Safari  |  Edge  |            IE            |
             * | :------: | :-----: | :-----: | :----: | :----------------------: |
             * |  **29**  | **20**  |  **9**  | **12** |          **11**          |
             * | 22 _-x-_ |         | 7 _-x-_ |        | 10 _(-ms-flex-positive)_ |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
             */
            flexGrow?: CSS.Property.FlexGrow | undefined;
            /**
             * The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.
             *
             * **Syntax**: `<number>`
             *
             * **Initial value**: `1`
             *
             * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :------: | :-----: | :-----: | :----: | :----: |
             * |  **29**  | **20**  |  **9**  | **12** | **10** |
             * | 22 _-x-_ |         | 8 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
             */
            flexShrink?: CSS.Property.FlexShrink | undefined;
            /**
             * The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
             *
             * **Syntax**: `nowrap | wrap | wrap-reverse`
             *
             * **Initial value**: `nowrap`
             *
             * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :------: | :-----: | :-----: | :----: | :----: |
             * |  **29**  | **28**  |  **9**  | **12** | **11** |
             * | 21 _-x-_ |         | 7 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
             */
            flexWrap?: CSS.Property.FlexWrap | undefined;
            /**
             * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
             *
             * **Syntax**: `left | right | none | inline-start | inline-end`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/float
             */
            float?: CSS.Property.Float | undefined;
            /**
             * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
             *
             * **Syntax**: `[ <family-name> | <generic-family> ]#`
             *
             * **Initial value**: depends on user agent
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **3** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-family
             */
            fontFamily?: CSS.Property.FontFamily | undefined;
            /**
             * The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.
             *
             * **Syntax**: `normal | <feature-tag-value>#`
             *
             * **Initial value**: `normal`
             *
             * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
             * | :------: | :------: | :-----: | :----: | :----: |
             * |  **48**  |  **34**  | **9.1** | **15** | **10** |
             * | 16 _-x-_ | 15 _-x-_ |         |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
             */
            fontFeatureSettings?: CSS.Property.FontFeatureSettings | undefined;
            /**
             * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
             *
             * **Syntax**: `auto | normal | none`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari  | Edge | IE  |
             * | :----: | :-----: | :-----: | :--: | :-: |
             * | **33** | **32**  |  **9**  | n/a  | No  |
             * |        |         | 6 _-x-_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
             */
            fontKerning?: CSS.Property.FontKerning | undefined;
            /**
             * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
             *
             * **Syntax**: `normal | <string>`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   | **34**  |   No   | n/a  | No  |
             * |        | 4 _-x-_ |        |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
             */
            fontLanguageOverride?: CSS.Property.FontLanguageOverride | undefined;
            /**
             * The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes.
             *
             * **Syntax**: `auto | none`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  | IE  |
             * | :----: | :-----: | :----: | :----: | :-: |
             * | **79** | **62**  | **11** | **17** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
             */
            fontOpticalSizing?: CSS.Property.FontOpticalSizing | undefined;
            /**
             * The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth.
             *
             * **Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE    |
             * | :----: | :-----: | :----: | :----: | :-----: |
             * | **1**  |  **1**  | **1**  | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-size
             */
            fontSize?: CSS.Property.FontSize<(string & {})> | undefined;
            /**
             * The **`font-size-adjust`** CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).
             *
             * **Syntax**: `none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   |  **3**  |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
             */
            fontSizeAdjust?: CSS.Property.FontSizeAdjust | undefined;
            /**
             * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
             *
             * **Syntax**: `auto | never | always | <absolute-size> | <length>`
             *
             * **Initial value**: `auto`
             *
             * |              Chrome              |              Firefox               |              Safari              | Edge | IE  |
             * | :------------------------------: | :--------------------------------: | :------------------------------: | :--: | :-: |
             * | **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-smooth
             */
            fontSmooth?: CSS.Property.FontSmooth<(string & {})> | undefined;
            /**
             * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
             *
             * **Syntax**: `<font-stretch-absolute>`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **60** |  **9**  | **11** | **12** | **9** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
             */
            fontStretch?: CSS.Property.FontStretch | undefined;
            /**
             * The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
             *
             * **Syntax**: `normal | italic | oblique <angle>?`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-style
             */
            fontStyle?: CSS.Property.FontStyle | undefined;
            /**
             * The **`font-synthesis`** CSS property controls which missing typefaces, bold, italic, or small-caps, may be synthesized by the browser.
             *
             * **Syntax**: `none | [ weight || style || small-caps ]`
             *
             * **Initial value**: `weight style`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **97** | **34**  | **9**  | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
             */
            fontSynthesis?: CSS.Property.FontSynthesis | undefined;
            /**
             * The **`font-variant`** CSS shorthand property allows you to set all the font variants for a font.
             *
             * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
             */
            fontVariant?: CSS.Property.FontVariant | undefined;
            /**
             * The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.
             *
             * **Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari  | Edge | IE  |
             * | :----: | :-----: | :-----: | :--: | :-: |
             * |   No   | **34**  | **9.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates
             */
            fontVariantAlternates?: CSS.Property.FontVariantAlternates | undefined;
            /**
             * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
             *
             * **Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari  | Edge | IE  |
             * | :----: | :-----: | :-----: | :--: | :-: |
             * | **52** | **34**  | **9.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
             */
            fontVariantCaps?: CSS.Property.FontVariantCaps | undefined;
            /**
             * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
             *
             * **Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari  | Edge | IE  |
             * | :----: | :-----: | :-----: | :--: | :-: |
             * | **63** | **34**  | **9.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
             */
            fontVariantEastAsian?: CSS.Property.FontVariantEastAsian | undefined;
            /**
             * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
             *
             * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`
             *
             * **Initial value**: `normal`
             *
             * |  Chrome  | Firefox | Safari  | Edge | IE  |
             * | :------: | :-----: | :-----: | :--: | :-: |
             * |  **34**  | **34**  | **9.1** | n/a  | No  |
             * | 31 _-x-_ |         | 7 _-x-_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
             */
            fontVariantLigatures?: CSS.Property.FontVariantLigatures | undefined;
            /**
             * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
             *
             * **Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari  | Edge | IE  |
             * | :----: | :-----: | :-----: | :--: | :-: |
             * | **52** | **34**  | **9.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
             */
            fontVariantNumeric?: CSS.Property.FontVariantNumeric | undefined;
            /**
             * The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.
             *
             * **Syntax**: `normal | sub | super`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari  | Edge | IE  |
             * | :----: | :-----: | :-----: | :--: | :-: |
             * |   No   | **34**  | **9.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
             */
            fontVariantPosition?: CSS.Property.FontVariantPosition | undefined;
            /**
             * The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.
             *
             * **Syntax**: `normal | [ <string> <number> ]#`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  | IE  |
             * | :----: | :-----: | :----: | :----: | :-: |
             * | **62** | **62**  | **11** | **17** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
             */
            fontVariationSettings?: CSS.Property.FontVariationSettings | undefined;
            /**
             * The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set.
             *
             * **Syntax**: `<font-weight-absolute> | bolder | lighter`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **2**  |  **1**  | **1**  | **12** | **3** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
             */
            fontWeight?: CSS.Property.FontWeight | undefined;
            /**
             * The **`forced-color-adjust`** CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.
             *
             * **Syntax**: `auto | none`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |              Edge               |                 IE                  |
             * | :----: | :-----: | :----: | :-----------------------------: | :---------------------------------: |
             * | **89** |   No    |   No   |             **79**              | **10** _(-ms-high-contrast-adjust)_ |
             * |        |         |        | 12 _(-ms-high-contrast-adjust)_ |                                     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/forced-color-adjust
             */
            forcedColorAdjust?: CSS.Property.ForcedColorAdjust | undefined;
            /**
             * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
             *
             * **Syntax**: `<track-size>+`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  |  Edge  |             IE              |
             * | :----: | :-----: | :------: | :----: | :-------------------------: |
             * | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
             */
            gridAutoColumns?: CSS.Property.GridAutoColumns<(string & {})> | undefined;
            /**
             * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
             *
             * **Syntax**: `[ row | column ] || dense`
             *
             * **Initial value**: `row`
             *
             * | Chrome | Firefox |  Safari  |  Edge  | IE  |
             * | :----: | :-----: | :------: | :----: | :-: |
             * | **57** | **52**  | **10.1** | **16** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
             */
            gridAutoFlow?: CSS.Property.GridAutoFlow | undefined;
            /**
             * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.
             *
             * **Syntax**: `<track-size>+`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  |  Edge  |            IE            |
             * | :----: | :-----: | :------: | :----: | :----------------------: |
             * | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
             */
            gridAutoRows?: CSS.Property.GridAutoRows<(string & {})> | undefined;
            /**
             * The **`grid-column-end`** CSS property specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
             *
             * **Syntax**: `<grid-line>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  |  Edge  | IE  |
             * | :----: | :-----: | :------: | :----: | :-: |
             * | **57** | **52**  | **10.1** | **16** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
             */
            gridColumnEnd?: CSS.Property.GridColumnEnd | undefined;
            /**
             * The **`grid-column-start`** CSS property specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
             *
             * **Syntax**: `<grid-line>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  |  Edge  | IE  |
             * | :----: | :-----: | :------: | :----: | :-: |
             * | **57** | **52**  | **10.1** | **16** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
             */
            gridColumnStart?: CSS.Property.GridColumnStart | undefined;
            /**
             * The **`grid-row-end`** CSS property specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
             *
             * **Syntax**: `<grid-line>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  |  Edge  | IE  |
             * | :----: | :-----: | :------: | :----: | :-: |
             * | **57** | **52**  | **10.1** | **16** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
             */
            gridRowEnd?: CSS.Property.GridRowEnd | undefined;
            /**
             * The **`grid-row-start`** CSS property specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
             *
             * **Syntax**: `<grid-line>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  |  Edge  | IE  |
             * | :----: | :-----: | :------: | :----: | :-: |
             * | **57** | **52**  | **10.1** | **16** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
             */
            gridRowStart?: CSS.Property.GridRowStart | undefined;
            /**
             * The **`grid-template-areas`** CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.
             *
             * **Syntax**: `none | <string>+`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |  Safari  |  Edge  | IE  |
             * | :----: | :-----: | :------: | :----: | :-: |
             * | **57** | **52**  | **10.1** | **16** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
             */
            gridTemplateAreas?: CSS.Property.GridTemplateAreas | undefined;
            /**
             * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
             *
             * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |  Safari  |  Edge  |             IE              |
             * | :----: | :-----: | :------: | :----: | :-------------------------: |
             * | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
             */
            gridTemplateColumns?: CSS.Property.GridTemplateColumns<(string & {})> | undefined;
            /**
             * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
             *
             * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |  Safari  |  Edge  |            IE            |
             * | :----: | :-----: | :------: | :----: | :----------------------: |
             * | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
             */
            gridTemplateRows?: CSS.Property.GridTemplateRows<(string & {})> | undefined;
            /**
             * The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
             *
             * **Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   |   No    | **10** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation
             */
            hangingPunctuation?: CSS.Property.HangingPunctuation | undefined;
            /**
             * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
             *
             * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/height
             */
            height?: CSS.Property.Height<(string & {})> | undefined;
            /**
             * The **`hyphenate-character`** CSS property sets the character (or string) used at the end of a line before a hyphenation break.
             *
             * **Syntax**: `auto | <string>`
             *
             * **Initial value**: `auto`
             *
             * |   Chrome    | Firefox |    Safari     | Edge | IE  |
             * | :---------: | :-----: | :-----------: | :--: | :-: |
             * | **6** _-x-_ | **98**  | **5.1** _-x-_ | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/hyphenate-character
             */
            hyphenateCharacter?: CSS.Property.HyphenateCharacter | undefined;
            /**
             * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
             *
             * **Syntax**: `none | manual | auto`
             *
             * **Initial value**: `manual`
             *
             * |  Chrome  | Firefox |    Safari     |  Edge  |      IE      |
             * | :------: | :-----: | :-----------: | :----: | :----------: |
             * |  **55**  | **43**  | **5.1** _-x-_ | **79** | **10** _-x-_ |
             * | 13 _-x-_ | 6 _-x-_ |               |        |              |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
             */
            hyphens?: CSS.Property.Hyphens | undefined;
            /**
             * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image.
             *
             * **Syntax**: `from-image | <angle> | [ <angle>? flip ]`
             *
             * **Initial value**: `from-image`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **81** | **26**  | **13.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
             */
            imageOrientation?: CSS.Property.ImageOrientation | undefined;
            /**
             * The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
             *
             * **Syntax**: `auto | crisp-edges | pixelated`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **13** | **3.6** | **6**  | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
             */
            imageRendering?: CSS.Property.ImageRendering | undefined;
            /**
             * **Syntax**: `[ from-image || <resolution> ] && snap?`
             *
             * **Initial value**: `1dppx`
             */
            imageResolution?: CSS.Property.ImageResolution | undefined;
            /**
             * The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.
             *
             * **Syntax**: `normal | [ <number> <integer>? ]`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox |   Safari    | Edge | IE  |
             * | :----: | :-----: | :---------: | :--: | :-: |
             * |   No   |   No    | **9** _-x-_ | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
             */
            initialLetter?: CSS.Property.InitialLetter | undefined;
            /**
             * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
             *
             * **Syntax**: `<'width'>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **57** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
             */
            inlineSize?: CSS.Property.InlineSize<(string & {})> | undefined;
            /**
             * **Syntax**: `auto | none`
             *
             * **Initial value**: `auto`
             */
            inputSecurity?: CSS.Property.InputSecurity | undefined;
            /**
             * The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.
             *
             * **Syntax**: `<'top'>{1,4}`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **66**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/inset
             */
            inset?: CSS.Property.Inset<(string & {})> | undefined;
            /**
             * The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'top'>{1,2}`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **63**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/inset-block
             */
            insetBlock?: CSS.Property.InsetBlock<(string & {})> | undefined;
            /**
             * The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'top'>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **63**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-end
             */
            insetBlockEnd?: CSS.Property.InsetBlockEnd<(string & {})> | undefined;
            /**
             * The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'top'>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **63**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/inset-block-start
             */
            insetBlockStart?: CSS.Property.InsetBlockStart<(string & {})> | undefined;
            /**
             * The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'top'>{1,2}`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **63**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline
             */
            insetInline?: CSS.Property.InsetInline<(string & {})> | undefined;
            /**
             * The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'top'>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **63**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-end
             */
            insetInlineEnd?: CSS.Property.InsetInlineEnd<(string & {})> | undefined;
            /**
             * The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'top'>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **63**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/inset-inline-start
             */
            insetInlineStart?: CSS.Property.InsetInlineStart<(string & {})> | undefined;
            /**
             * The **`isolation`** CSS property determines whether an element must create a new stacking context.
             *
             * **Syntax**: `auto | isolate`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **41** | **36**  | **8**  | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/isolation
             */
            isolation?: CSS.Property.Isolation | undefined;
            /**
             * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
             *
             * **Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`
             *
             * **Initial value**: `normal`
             *
             * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :------: | :-----: | :-----: | :----: | :----: |
             * |  **29**  | **20**  |  **9**  | **12** | **11** |
             * | 21 _-x-_ |         | 7 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
             */
            justifyContent?: CSS.Property.JustifyContent | undefined;
            /**
             * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
             *
             * **Syntax**: `normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]`
             *
             * **Initial value**: `legacy`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * | **52** | **20**  | **9**  | **12** | **11** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
             */
            justifyItems?: CSS.Property.JustifyItems | undefined;
            /**
             * The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.
             *
             * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  |  Edge  |   IE   |
             * | :----: | :-----: | :------: | :----: | :----: |
             * | **57** | **45**  | **10.1** | **16** | **10** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
             */
            justifySelf?: CSS.Property.JustifySelf | undefined;
            /**
             * The **`justify-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.
             *
             * **Syntax**: `[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   |   n/a   |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/justify-tracks
             */
            justifyTracks?: CSS.Property.JustifyTracks | undefined;
            /**
             * The **`left`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
             *
             * **Syntax**: `<length> | <percentage> | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE    |
             * | :----: | :-----: | :----: | :----: | :-----: |
             * | **1**  |  **1**  | **1**  | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/left
             */
            left?: CSS.Property.Left<(string & {})> | undefined;
            /**
             * The **`letter-spacing`** CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.
             *
             * **Syntax**: `normal | <length>`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
             */
            letterSpacing?: CSS.Property.LetterSpacing<(string & {})> | undefined;
            /**
             * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
             *
             * **Syntax**: `auto | loose | normal | strict | anywhere`
             *
             * **Initial value**: `auto`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE    |
             * | :-----: | :-----: | :-----: | :----: | :-----: |
             * | **58**  | **69**  | **11**  | **14** | **5.5** |
             * | 1 _-x-_ |         | 3 _-x-_ |        |         |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/line-break
             */
            lineBreak?: CSS.Property.LineBreak | undefined;
            /**
             * The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
             *
             * **Syntax**: `normal | <number> | <length> | <percentage>`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/line-height
             */
            lineHeight?: CSS.Property.LineHeight<(string & {})> | undefined;
            /**
             * The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |  n/a   |   No    |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/line-height-step
             */
            lineHeightStep?: CSS.Property.LineHeightStep<(string & {})> | undefined;
            /**
             * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
             *
             * **Syntax**: `<image> | none`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
             */
            listStyleImage?: CSS.Property.ListStyleImage | undefined;
            /**
             * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
             *
             * **Syntax**: `inside | outside`
             *
             * **Initial value**: `outside`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
             */
            listStylePosition?: CSS.Property.ListStylePosition | undefined;
            /**
             * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
             *
             * **Syntax**: `<counter-style> | <string> | none`
             *
             * **Initial value**: `disc`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
             */
            listStyleType?: CSS.Property.ListStyleType | undefined;
            /**
             * The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
             *
             * **Syntax**: `<'margin-left'>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **66**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
             */
            marginBlock?: CSS.Property.MarginBlock<(string & {})> | undefined;
            /**
             * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
             *
             * **Syntax**: `<'margin-left'>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
             */
            marginBlockEnd?: CSS.Property.MarginBlockEnd<(string & {})> | undefined;
            /**
             * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
             *
             * **Syntax**: `<'margin-left'>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
             */
            marginBlockStart?: CSS.Property.MarginBlockStart<(string & {})> | undefined;
            /**
             * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
             *
             * **Syntax**: `<length> | <percentage> | auto`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **3** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
             */
            marginBottom?: CSS.Property.MarginBottom<(string & {})> | undefined;
            /**
             * The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
             *
             * **Syntax**: `<'margin-left'>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **66**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
             */
            marginInline?: CSS.Property.MarginInline<(string & {})> | undefined;
            /**
             * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'margin-left'>`
             *
             * **Initial value**: `0`
             *
             * |          Chrome          |        Firefox        |          Safari          | Edge | IE  |
             * | :----------------------: | :-------------------: | :----------------------: | :--: | :-: |
             * |          **87**          |        **41**         |         **12.1**         | n/a  | No  |
             * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
             */
            marginInlineEnd?: CSS.Property.MarginInlineEnd<(string & {})> | undefined;
            /**
             * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
             *
             * **Syntax**: `<'margin-left'>`
             *
             * **Initial value**: `0`
             *
             * |           Chrome           |         Firefox         |           Safari           | Edge | IE  |
             * | :------------------------: | :---------------------: | :------------------------: | :--: | :-: |
             * |           **87**           |         **41**          |          **12.1**          | n/a  | No  |
             * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
             */
            marginInlineStart?: CSS.Property.MarginInlineStart<(string & {})> | undefined;
            /**
             * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
             *
             * **Syntax**: `<length> | <percentage> | auto`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **3** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
             */
            marginLeft?: CSS.Property.MarginLeft<(string & {})> | undefined;
            /**
             * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
             *
             * **Syntax**: `<length> | <percentage> | auto`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **3** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
             */
            marginRight?: CSS.Property.MarginRight<(string & {})> | undefined;
            /**
             * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
             *
             * **Syntax**: `<length> | <percentage> | auto`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **3** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
             */
            marginTop?: CSS.Property.MarginTop<(string & {})> | undefined;
            /**
             * The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.
             *
             * **Syntax**: `luminance | alpha`
             *
             * **Initial value**: `alpha`
             */
            maskBorderMode?: CSS.Property.MaskBorderMode | undefined;
            /**
             * The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.
             *
             * **Syntax**: `[ <length> | <number> ]{1,4}`
             *
             * **Initial value**: `0`
             *
             * |                 Chrome                  | Firefox |                  Safari                   | Edge | IE  |
             * | :-------------------------------------: | :-----: | :---------------------------------------: | :--: | :-: |
             * | **1** _(-webkit-mask-box-image-outset)_ |   No    | **3.1** _(-webkit-mask-box-image-outset)_ | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-outset
             */
            maskBorderOutset?: CSS.Property.MaskBorderOutset<(string & {})> | undefined;
            /**
             * The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
             *
             * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
             *
             * **Initial value**: `stretch`
             *
             * |                 Chrome                  | Firefox |                  Safari                   | Edge | IE  |
             * | :-------------------------------------: | :-----: | :---------------------------------------: | :--: | :-: |
             * | **1** _(-webkit-mask-box-image-repeat)_ |   No    | **3.1** _(-webkit-mask-box-image-repeat)_ | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-repeat
             */
            maskBorderRepeat?: CSS.Property.MaskBorderRepeat | undefined;
            /**
             * The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.
             *
             * **Syntax**: `<number-percentage>{1,4} fill?`
             *
             * **Initial value**: `0`
             *
             * |                 Chrome                 | Firefox |                  Safari                  | Edge | IE  |
             * | :------------------------------------: | :-----: | :--------------------------------------: | :--: | :-: |
             * | **1** _(-webkit-mask-box-image-slice)_ |   No    | **3.1** _(-webkit-mask-box-image-slice)_ | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-slice
             */
            maskBorderSlice?: CSS.Property.MaskBorderSlice | undefined;
            /**
             * The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.
             *
             * **Syntax**: `none | <image>`
             *
             * **Initial value**: `none`
             *
             * |                 Chrome                  | Firefox |                  Safari                   | Edge | IE  |
             * | :-------------------------------------: | :-----: | :---------------------------------------: | :--: | :-: |
             * | **1** _(-webkit-mask-box-image-source)_ |   No    | **3.1** _(-webkit-mask-box-image-source)_ | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-source
             */
            maskBorderSource?: CSS.Property.MaskBorderSource | undefined;
            /**
             * The **`mask-border-width`** CSS property sets the width of an element's mask border.
             *
             * **Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`
             *
             * **Initial value**: `auto`
             *
             * |                 Chrome                 | Firefox |                  Safari                  | Edge | IE  |
             * | :------------------------------------: | :-----: | :--------------------------------------: | :--: | :-: |
             * | **1** _(-webkit-mask-box-image-width)_ |   No    | **3.1** _(-webkit-mask-box-image-width)_ | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-border-width
             */
            maskBorderWidth?: CSS.Property.MaskBorderWidth<(string & {})> | undefined;
            /**
             * The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
             *
             * **Syntax**: `[ <geometry-box> | no-clip ]#`
             *
             * **Initial value**: `border-box`
             *
             * |   Chrome    | Firefox |  Safari  | Edge | IE  |
             * | :---------: | :-----: | :------: | :--: | :-: |
             * | **1** _-x-_ | **53**  | **15.4** | n/a  | No  |
             * |             |         | 4 _-x-_  |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
             */
            maskClip?: CSS.Property.MaskClip | undefined;
            /**
             * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
             *
             * **Syntax**: `<compositing-operator>#`
             *
             * **Initial value**: `add`
             *
             * | Chrome | Firefox |  Safari  | Edge  | IE  |
             * | :----: | :-----: | :------: | :---: | :-: |
             * |   No   | **53**  | **15.4** | 18-79 | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
             */
            maskComposite?: CSS.Property.MaskComposite | undefined;
            /**
             * The **`mask-image`** CSS property sets the image that is used as mask layer for an element. By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the `mask-mode` CSS.Property.
             *
             * **Syntax**: `<mask-reference>#`
             *
             * **Initial value**: `none`
             *
             * |   Chrome    | Firefox |  Safari  | Edge  | IE  |
             * | :---------: | :-----: | :------: | :---: | :-: |
             * | **1** _-x-_ | **53**  | **15.4** | 16-79 | No  |
             * |             |         | 4 _-x-_  |       |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
             */
            maskImage?: CSS.Property.MaskImage | undefined;
            /**
             * The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
             *
             * **Syntax**: `<masking-mode>#`
             *
             * **Initial value**: `match-source`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * |   No   | **53**  | **15.4** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
             */
            maskMode?: CSS.Property.MaskMode | undefined;
            /**
             * The **`mask-origin`** CSS property sets the origin of a mask.
             *
             * **Syntax**: `<geometry-box>#`
             *
             * **Initial value**: `border-box`
             *
             * |   Chrome    | Firefox |  Safari  | Edge | IE  |
             * | :---------: | :-----: | :------: | :--: | :-: |
             * | **1** _-x-_ | **53**  | **15.4** | n/a  | No  |
             * |             |         | 4 _-x-_  |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
             */
            maskOrigin?: CSS.Property.MaskOrigin | undefined;
            /**
             * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.
             *
             * **Syntax**: `<position>#`
             *
             * **Initial value**: `center`
             *
             * |   Chrome    | Firefox |  Safari   | Edge  | IE  |
             * | :---------: | :-----: | :-------: | :---: | :-: |
             * | **1** _-x-_ | **53**  | **15.4**  | 18-79 | No  |
             * |             |         | 3.1 _-x-_ |       |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
             */
            maskPosition?: CSS.Property.MaskPosition<(string & {})> | undefined;
            /**
             * The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
             *
             * **Syntax**: `<repeat-style>#`
             *
             * **Initial value**: `no-repeat`
             *
             * |   Chrome    | Firefox |  Safari   | Edge  | IE  |
             * | :---------: | :-----: | :-------: | :---: | :-: |
             * | **1** _-x-_ | **53**  | **15.4**  | 18-79 | No  |
             * |             |         | 3.1 _-x-_ |       |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
             */
            maskRepeat?: CSS.Property.MaskRepeat | undefined;
            /**
             * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
             *
             * **Syntax**: `<bg-size>#`
             *
             * **Initial value**: `auto`
             *
             * |   Chrome    | Firefox |  Safari  | Edge  | IE  |
             * | :---------: | :-----: | :------: | :---: | :-: |
             * | **4** _-x-_ | **53**  | **15.4** | 18-79 | No  |
             * |             |         | 4 _-x-_  |       |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
             */
            maskSize?: CSS.Property.MaskSize<(string & {})> | undefined;
            /**
             * The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
             *
             * **Syntax**: `luminance | alpha`
             *
             * **Initial value**: `luminance`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **24** | **35**  | **7**  | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
             */
            maskType?: CSS.Property.MaskType | undefined;
            /**
             * The **`math-depth`** property describes a notion of _depth_ for each element of a mathematical formula, with respect to the top-level container of that formula. Concretely, this is used to determine the computed value of the font-size property when its specified value is `math`.
             *
             * **Syntax**: `auto-add | add(<integer>) | <integer>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |  n/a   |   n/a   |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/math-depth
             */
            mathDepth?: CSS.Property.MathDepth | undefined;
            /**
             * The `math-shift` property indicates whether superscripts inside MathML formulas should be raised by a normal or compact shift.
             *
             * **Syntax**: `normal | compact`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |  n/a   |   No    |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/math-shift
             */
            mathShift?: CSS.Property.MathShift | undefined;
            /**
             * The `math-style` property indicates whether MathML equations should render with normal or compact height.
             *
             * **Syntax**: `normal | compact`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * |  n/a   |   n/a   | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/math-style
             */
            mathStyle?: CSS.Property.MathStyle | undefined;
            /**
             * The **`max-block-size`** CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.
             *
             * **Syntax**: `<'max-width'>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **57** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/max-block-size
             */
            maxBlockSize?: CSS.Property.MaxBlockSize<(string & {})> | undefined;
            /**
             * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
             *
             * **Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **18** |  **1**  | **1.3** | **12** | **7** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/max-height
             */
            maxHeight?: CSS.Property.MaxHeight<(string & {})> | undefined;
            /**
             * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.
             *
             * **Syntax**: `<'max-width'>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |   Safari   | Edge | IE  |
             * | :----: | :-----: | :--------: | :--: | :-: |
             * | **57** | **41**  |  **12.1**  | n/a  | No  |
             * |        |         | 10.1 _-x-_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
             */
            maxInlineSize?: CSS.Property.MaxInlineSize<(string & {})> | undefined;
            /**
             * **Syntax**: `none | <integer>`
             *
             * **Initial value**: `none`
             */
            maxLines?: CSS.Property.MaxLines | undefined;
            /**
             * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
             *
             * **Syntax**: `none | <length-percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **7** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/max-width
             */
            maxWidth?: CSS.Property.MaxWidth<(string & {})> | undefined;
            /**
             * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
             *
             * **Syntax**: `<'min-width'>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **57** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
             */
            minBlockSize?: CSS.Property.MinBlockSize<(string & {})> | undefined;
            /**
             * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
             *
             * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  |  **3**  | **1.3** | **12** | **7** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/min-height
             */
            minHeight?: CSS.Property.MinHeight<(string & {})> | undefined;
            /**
             * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
             *
             * **Syntax**: `<'min-width'>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **57** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
             */
            minInlineSize?: CSS.Property.MinInlineSize<(string & {})> | undefined;
            /**
             * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
             *
             * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **7** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/min-width
             */
            minWidth?: CSS.Property.MinWidth<(string & {})> | undefined;
            /**
             * The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
             *
             * **Syntax**: `<blend-mode> | plus-lighter`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **41** | **32**  | **8**  | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
             */
            mixBlendMode?: CSS.Property.MixBlendMode | undefined;
            /**
             * The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
             *
             * **Syntax**: `<length-percentage>`
             *
             * **Initial value**: `0`
             *
             * |         Chrome         | Firefox | Safari | Edge | IE  |
             * | :--------------------: | :-----: | :----: | :--: | :-: |
             * |         **55**         | **72**  |   No   | n/a  | No  |
             * | 46 _(motion-distance)_ |         |        |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
             */
            motionDistance?: CSS.Property.OffsetDistance<(string & {})> | undefined;
            /**
             * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
             *
             * **Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`
             *
             * **Initial value**: `none`
             *
             * |       Chrome       | Firefox |  Safari  | Edge | IE  |
             * | :----------------: | :-----: | :------: | :--: | :-: |
             * |       **55**       | **72**  | **15.4** | n/a  | No  |
             * | 46 _(motion-path)_ |         |          |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
             */
            motionPath?: CSS.Property.OffsetPath | undefined;
            /**
             * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
             *
             * **Syntax**: `[ auto | reverse ] || <angle>`
             *
             * **Initial value**: `auto`
             *
             * |         Chrome         | Firefox | Safari | Edge | IE  |
             * | :--------------------: | :-----: | :----: | :--: | :-: |
             * |         **56**         | **72**  |   No   | n/a  | No  |
             * | 46 _(motion-rotation)_ |         |        |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
             */
            motionRotation?: CSS.Property.OffsetRotate | undefined;
            /**
             * The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
             *
             * **Syntax**: `fill | contain | cover | none | scale-down`
             *
             * **Initial value**: `fill`
             *
             * | Chrome | Firefox | Safari |  Edge  | IE  |
             * | :----: | :-----: | :----: | :----: | :-: |
             * | **32** | **36**  | **10** | **79** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
             */
            objectFit?: CSS.Property.ObjectFit | undefined;
            /**
             * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
             *
             * **Syntax**: `<position>`
             *
             * **Initial value**: `50% 50%`
             *
             * | Chrome | Firefox | Safari |  Edge  | IE  |
             * | :----: | :-----: | :----: | :----: | :-: |
             * | **32** | **36**  | **10** | **79** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/object-position
             */
            objectPosition?: CSS.Property.ObjectPosition<(string & {})> | undefined;
            /**
             * **Syntax**: `auto | <position>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   | **72**  |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/offset-anchor
             */
            offsetAnchor?: CSS.Property.OffsetAnchor<(string & {})> | undefined;
            /**
             * The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.
             *
             * **Syntax**: `<length-percentage>`
             *
             * **Initial value**: `0`
             *
             * |         Chrome         | Firefox | Safari | Edge | IE  |
             * | :--------------------: | :-----: | :----: | :--: | :-: |
             * |         **55**         | **72**  |   No   | n/a  | No  |
             * | 46 _(motion-distance)_ |         |        |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
             */
            offsetDistance?: CSS.Property.OffsetDistance<(string & {})> | undefined;
            /**
             * The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
             *
             * **Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`
             *
             * **Initial value**: `none`
             *
             * |       Chrome       | Firefox |  Safari  | Edge | IE  |
             * | :----------------: | :-----: | :------: | :--: | :-: |
             * |       **55**       | **72**  | **15.4** | n/a  | No  |
             * | 46 _(motion-path)_ |         |          |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
             */
            offsetPath?: CSS.Property.OffsetPath | undefined;
            /**
             * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
             *
             * **Syntax**: `[ auto | reverse ] || <angle>`
             *
             * **Initial value**: `auto`
             *
             * |         Chrome         | Firefox | Safari | Edge | IE  |
             * | :--------------------: | :-----: | :----: | :--: | :-: |
             * |         **56**         | **72**  |   No   | n/a  | No  |
             * | 46 _(motion-rotation)_ |         |        |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
             */
            offsetRotate?: CSS.Property.OffsetRotate | undefined;
            /**
             * The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.
             *
             * **Syntax**: `[ auto | reverse ] || <angle>`
             *
             * **Initial value**: `auto`
             *
             * |         Chrome         | Firefox | Safari | Edge | IE  |
             * | :--------------------: | :-----: | :----: | :--: | :-: |
             * |         **56**         | **72**  |   No   | n/a  | No  |
             * | 46 _(motion-rotation)_ |         |        |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
             */
            offsetRotation?: CSS.Property.OffsetRotate | undefined;
            /**
             * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
             *
             * **Syntax**: `<alpha-value>`
             *
             * **Initial value**: `1`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **2**  | **12** | **9** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/opacity
             */
            opacity?: CSS.Property.Opacity | undefined;
            /**
             * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
             *
             * **Syntax**: `<integer>`
             *
             * **Initial value**: `0`
             *
             * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
             * | :------: | :-----: | :-----: | :----: | :------: |
             * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
             * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/order
             */
            order?: CSS.Property.Order | undefined;
            /**
             * The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.
             *
             * **Syntax**: `<integer>`
             *
             * **Initial value**: `2`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **25** |   No    | **1.3** | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/orphans
             */
            orphans?: CSS.Property.Orphans | undefined;
            /**
             * The **`outline-color`** CSS property sets the color of an element's outline.
             *
             * **Syntax**: `<color> | invert`
             *
             * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  | **1.5** | **1.2** | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
             */
            outlineColor?: CSS.Property.OutlineColor | undefined;
            /**
             * The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari  |  Edge  | IE  |
             * | :----: | :-----: | :-----: | :----: | :-: |
             * | **1**  | **1.5** | **1.2** | **15** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
             */
            outlineOffset?: CSS.Property.OutlineOffset<(string & {})> | undefined;
            /**
             * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
             *
             * **Syntax**: `auto | <'border-style'>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  | **1.5** | **1.2** | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
             */
            outlineStyle?: CSS.Property.OutlineStyle | undefined;
            /**
             * The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
             *
             * **Syntax**: `<line-width>`
             *
             * **Initial value**: `medium`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  | **1.5** | **1.2** | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
             */
            outlineWidth?: CSS.Property.OutlineWidth<(string & {})> | undefined;
            /**
             * **Syntax**: `auto | none`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **56** | **66**  |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/overflow-anchor
             */
            overflowAnchor?: CSS.Property.OverflowAnchor | undefined;
            /**
             * **Syntax**: `visible | hidden | clip | scroll | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   | **69**  |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/overflow-block
             */
            overflowBlock?: CSS.Property.OverflowBlock | undefined;
            /**
             * The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.
             *
             * **Syntax**: `padding-box | content-box`
             *
             * **Initial value**: `padding-box`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   | **29**  |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Mozilla/Gecko/Chrome/CSS/overflow-clip-box
             */
            overflowClipBox?: CSS.Property.OverflowClipBox | undefined;
            /**
             * **Syntax**: `<visual-box> || <length [0,∞]>`
             *
             * **Initial value**: `0px`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **90** |   No    |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/overflow-clip-margin
             */
            overflowClipMargin?: CSS.Property.OverflowClipMargin<(string & {})> | undefined;
            /**
             * **Syntax**: `visible | hidden | clip | scroll | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   | **69**  |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/overflow-inline
             */
            overflowInline?: CSS.Property.OverflowInline | undefined;
            /**
             * The **`overflow-wrap`** CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
             *
             * **Syntax**: `normal | break-word | anywhere`
             *
             * **Initial value**: `normal`
             *
             * |     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
             * | :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
             * |     **23**      |      **49**       |      **7**      |      **18**      | **5.5** _(word-wrap)_ |
             * | 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
             */
            overflowWrap?: CSS.Property.OverflowWrap | undefined;
            /**
             * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
             *
             * **Syntax**: `visible | hidden | clip | scroll | auto`
             *
             * **Initial value**: `visible`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  | **3.5** | **3**  | **12** | **5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
             */
            overflowX?: CSS.Property.OverflowX | undefined;
            /**
             * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
             *
             * **Syntax**: `visible | hidden | clip | scroll | auto`
             *
             * **Initial value**: `visible`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  | **3.5** | **3**  | **12** | **5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
             */
            overflowY?: CSS.Property.OverflowY | undefined;
            /**
             * The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.
             *
             * **Syntax**: `contain | none | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **77** | **73**  | **16** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-block
             */
            overscrollBehaviorBlock?: CSS.Property.OverscrollBehaviorBlock | undefined;
            /**
             * The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.
             *
             * **Syntax**: `contain | none | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **77** | **73**  | **16** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-inline
             */
            overscrollBehaviorInline?: CSS.Property.OverscrollBehaviorInline | undefined;
            /**
             * The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.
             *
             * **Syntax**: `contain | none | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  | IE  |
             * | :----: | :-----: | :----: | :----: | :-: |
             * | **63** | **59**  | **16** | **18** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
             */
            overscrollBehaviorX?: CSS.Property.OverscrollBehaviorX | undefined;
            /**
             * The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.
             *
             * **Syntax**: `contain | none | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  | IE  |
             * | :----: | :-----: | :----: | :----: | :-: |
             * | **63** | **59**  | **16** | **18** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
             */
            overscrollBehaviorY?: CSS.Property.OverscrollBehaviorY | undefined;
            /**
             * The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
             *
             * **Syntax**: `<'padding-left'>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **66**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/padding-block
             */
            paddingBlock?: CSS.Property.PaddingBlock<(string & {})> | undefined;
            /**
             * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
             *
             * **Syntax**: `<'padding-left'>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
             */
            paddingBlockEnd?: CSS.Property.PaddingBlockEnd<(string & {})> | undefined;
            /**
             * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
             *
             * **Syntax**: `<'padding-left'>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **41**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
             */
            paddingBlockStart?: CSS.Property.PaddingBlockStart<(string & {})> | undefined;
            /**
             * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
             *
             * **Syntax**: `<length> | <percentage>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
             */
            paddingBottom?: CSS.Property.PaddingBottom<(string & {})> | undefined;
            /**
             * The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
             *
             * **Syntax**: `<'padding-left'>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **66**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline
             */
            paddingInline?: CSS.Property.PaddingInline<(string & {})> | undefined;
            /**
             * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
             *
             * **Syntax**: `<'padding-left'>`
             *
             * **Initial value**: `0`
             *
             * |          Chrome           |        Firefox         |          Safari           | Edge | IE  |
             * | :-----------------------: | :--------------------: | :-----------------------: | :--: | :-: |
             * |          **87**           |         **41**         |         **12.1**          | n/a  | No  |
             * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
             */
            paddingInlineEnd?: CSS.Property.PaddingInlineEnd<(string & {})> | undefined;
            /**
             * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
             *
             * **Syntax**: `<'padding-left'>`
             *
             * **Initial value**: `0`
             *
             * |           Chrome            |         Firefox          |           Safari            | Edge | IE  |
             * | :-------------------------: | :----------------------: | :-------------------------: | :--: | :-: |
             * |           **87**            |          **41**          |          **12.1**           | n/a  | No  |
             * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
             */
            paddingInlineStart?: CSS.Property.PaddingInlineStart<(string & {})> | undefined;
            /**
             * The **`padding-left`** CSS property sets the width of the padding area to the left of an element.
             *
             * **Syntax**: `<length> | <percentage>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
             */
            paddingLeft?: CSS.Property.PaddingLeft<(string & {})> | undefined;
            /**
             * The **`padding-right`** CSS property sets the width of the padding area on the right of an element.
             *
             * **Syntax**: `<length> | <percentage>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
             */
            paddingRight?: CSS.Property.PaddingRight<(string & {})> | undefined;
            /**
             * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
             *
             * **Syntax**: `<length> | <percentage>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
             */
            paddingTop?: CSS.Property.PaddingTop<(string & {})> | undefined;
            /**
             * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
             *
             * **Syntax**: `auto | always | avoid | left | right | recto | verso`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  |  **1**  | **1.2** | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
             */
            pageBreakAfter?: CSS.Property.PageBreakAfter | undefined;
            /**
             * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
             *
             * **Syntax**: `auto | always | avoid | left | right | recto | verso`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  |  **1**  | **1.2** | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
             */
            pageBreakBefore?: CSS.Property.PageBreakBefore | undefined;
            /**
             * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
             *
             * **Syntax**: `auto | avoid`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  | **19**  | **1.3** | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
             */
            pageBreakInside?: CSS.Property.PageBreakInside | undefined;
            /**
             * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
             *
             * **Syntax**: `normal | [ fill || stroke || markers ]`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  | IE  |
             * | :----: | :-----: | :----: | :----: | :-: |
             * | **35** | **60**  | **8**  | **17** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
             */
            paintOrder?: CSS.Property.PaintOrder | undefined;
            /**
             * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.
             *
             * **Syntax**: `none | <length>`
             *
             * **Initial value**: `none`
             *
             * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
             * | :------: | :------: | :-----: | :----: | :----: |
             * |  **36**  |  **16**  |  **9**  | **12** | **10** |
             * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/perspective
             */
            perspective?: CSS.Property.Perspective<(string & {})> | undefined;
            /**
             * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` CSS.Property.
             *
             * **Syntax**: `<position>`
             *
             * **Initial value**: `50% 50%`
             *
             * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
             * | :------: | :------: | :-----: | :----: | :----: |
             * |  **36**  |  **16**  |  **9**  | **12** | **10** |
             * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
             */
            perspectiveOrigin?: CSS.Property.PerspectiveOrigin<(string & {})> | undefined;
            /**
             * The **`place-content`** CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the `align-content` and `justify-content` properties) in a relevant layout system such as Grid or Flexbox.
             *
             * **Syntax**: `<'align-content'> <'justify-content'>?`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **59** | **45**  | **9**  | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/place-content
             */
            placeContent?: CSS.Property.PlaceContent | undefined;
            /**
             * The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
             *
             * **Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * | **1**  | **1.5** | **4**  | **12** | **11** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
             */
            pointerEvents?: CSS.Property.PointerEvents | undefined;
            /**
             * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
             *
             * **Syntax**: `static | relative | absolute | sticky | fixed`
             *
             * **Initial value**: `static`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/position
             */
            position?: CSS.Property.Position | undefined;
            /**
             * The **`print-color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
             *
             * **Syntax**: `economy | exact`
             *
             * **Initial value**: `economy`
             *
             * |    Chrome    |       Firefox       |  Safari  |     Edge     | IE  |
             * | :----------: | :-----------------: | :------: | :----------: | :-: |
             * | **17** _-x-_ |       **97**        | **15.4** | **79** _-x-_ | No  |
             * |              | 48 _(color-adjust)_ | 6 _-x-_  |              |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/print-color-adjust
             */
            printColorAdjust?: CSS.Property.PrintColorAdjust | undefined;
            /**
             * The **`quotes`** CSS property sets how the browser should render quotation marks that are added using the `open-quotes` or `close-quotes` values of the CSS `content` CSS.Property.
             *
             * **Syntax**: `none | auto | [ <string> <string> ]+`
             *
             * **Initial value**: depends on user agent
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **11** | **1.5** | **9**  | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/quotes
             */
            quotes?: CSS.Property.Quotes | undefined;
            /**
             * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
             *
             * **Syntax**: `none | both | horizontal | vertical | block | inline`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **1**  |  **4**  | **3**  | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/resize
             */
            resize?: CSS.Property.Resize | undefined;
            /**
             * The **`right`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
             *
             * **Syntax**: `<length> | <percentage> | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE    |
             * | :----: | :-----: | :----: | :----: | :-----: |
             * | **1**  |  **1**  | **1**  | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/right
             */
            right?: CSS.Property.Right<(string & {})> | undefined;
            /**
             * The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` CSS.Property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` CSS.Property.
             *
             * **Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`
             *
             * **Initial value**: `none`
             *
             * | Chrome  | Firefox |  Safari  | Edge | IE  |
             * | :-----: | :-----: | :------: | :--: | :-: |
             * | **104** | **72**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/rotate
             */
            rotate?: CSS.Property.Rotate | undefined;
            /**
             * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
             *
             * **Syntax**: `normal | <length-percentage>`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox |  Safari  |  Edge  | IE  |
             * | :----: | :-----: | :------: | :----: | :-: |
             * | **47** | **52**  | **10.1** | **16** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
             */
            rowGap?: CSS.Property.RowGap<(string & {})> | undefined;
            /**
             * The **`ruby-align`** CSS property defines the distribution of the different ruby elements over the base.
             *
             * **Syntax**: `start | center | space-between | space-around`
             *
             * **Initial value**: `space-around`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   | **38**  |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
             */
            rubyAlign?: CSS.Property.RubyAlign | undefined;
            /**
             * **Syntax**: `separate | collapse | auto`
             *
             * **Initial value**: `separate`
             */
            rubyMerge?: CSS.Property.RubyMerge | undefined;
            /**
             * The **`ruby-position`** CSS property defines the position of a ruby element relatives to its base element. It can be positioned over the element (`over`), under it (`under`), or between the characters on their right side (`inter-character`).
             *
             * **Syntax**: `[ alternate || [ over | under ] ] | inter-character`
             *
             * **Initial value**: `alternate`
             *
             * | Chrome  | Firefox |   Safari    | Edge  | IE  |
             * | :-----: | :-----: | :---------: | :---: | :-: |
             * | **84**  | **38**  | **7** _-x-_ | 12-79 | No  |
             * | 1 _-x-_ |         |             |       |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
             */
            rubyPosition?: CSS.Property.RubyPosition | undefined;
            /**
             * The **`scale`** CSS property allows you to specify scale transforms individually and independently of the `transform` CSS.Property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
             *
             * **Syntax**: `none | <number>{1,3}`
             *
             * **Initial value**: `none`
             *
             * | Chrome  | Firefox |  Safari  | Edge | IE  |
             * | :-----: | :-----: | :------: | :--: | :-: |
             * | **104** | **72**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scale
             */
            scale?: CSS.Property.Scale | undefined;
            /**
             * The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
             *
             * **Syntax**: `auto | smooth`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **61** | **36**  | **15.4** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
             */
            scrollBehavior?: CSS.Property.ScrollBehavior | undefined;
            /**
             * The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.
             *
             * **Syntax**: `<length>{1,4}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |          Safari           | Edge | IE  |
             * | :----: | :-----: | :-----------------------: | :--: | :-: |
             * | **69** | **90**  |         **14.1**          | n/a  | No  |
             * |        |         | 11 _(scroll-snap-margin)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
             */
            scrollMargin?: CSS.Property.ScrollMargin<(string & {})> | undefined;
            /**
             * The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.
             *
             * **Syntax**: `<length>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **68**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block
             */
            scrollMarginBlock?: CSS.Property.ScrollMarginBlock<(string & {})> | undefined;
            /**
             * The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **68**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-end
             */
            scrollMarginBlockEnd?: CSS.Property.ScrollMarginBlockEnd<(string & {})> | undefined;
            /**
             * The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **68**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start
             */
            scrollMarginBlockStart?: CSS.Property.ScrollMarginBlockStart<(string & {})> | undefined;
            /**
             * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |              Safari              | Edge | IE  |
             * | :----: | :-----: | :------------------------------: | :--: | :-: |
             * | **69** | **68**  |             **14.1**             | n/a  | No  |
             * |        |         | 11 _(scroll-snap-margin-bottom)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
             */
            scrollMarginBottom?: CSS.Property.ScrollMarginBottom<(string & {})> | undefined;
            /**
             * The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.
             *
             * **Syntax**: `<length>{1,2}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **68**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline
             */
            scrollMarginInline?: CSS.Property.ScrollMarginInline<(string & {})> | undefined;
            /**
             * The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **68**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-end
             */
            scrollMarginInlineEnd?: CSS.Property.ScrollMarginInlineEnd<(string & {})> | undefined;
            /**
             * The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **68**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline-start
             */
            scrollMarginInlineStart?: CSS.Property.ScrollMarginInlineStart<(string & {})> | undefined;
            /**
             * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |             Safari             | Edge | IE  |
             * | :----: | :-----: | :----------------------------: | :--: | :-: |
             * | **69** | **68**  |            **14.1**            | n/a  | No  |
             * |        |         | 11 _(scroll-snap-margin-left)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
             */
            scrollMarginLeft?: CSS.Property.ScrollMarginLeft<(string & {})> | undefined;
            /**
             * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |             Safari              | Edge | IE  |
             * | :----: | :-----: | :-----------------------------: | :--: | :-: |
             * | **69** | **68**  |            **14.1**             | n/a  | No  |
             * |        |         | 11 _(scroll-snap-margin-right)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
             */
            scrollMarginRight?: CSS.Property.ScrollMarginRight<(string & {})> | undefined;
            /**
             * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |            Safari             | Edge | IE  |
             * | :----: | :-----: | :---------------------------: | :--: | :-: |
             * | **69** | **68**  |           **14.1**            | n/a  | No  |
             * |        |         | 11 _(scroll-snap-margin-top)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
             */
            scrollMarginTop?: CSS.Property.ScrollMarginTop<(string & {})> | undefined;
            /**
             * The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.
             *
             * **Syntax**: `[ auto | <length-percentage> ]{1,4}`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **68**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding
             */
            scrollPadding?: CSS.Property.ScrollPadding<(string & {})> | undefined;
            /**
             * The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.
             *
             * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **69** | **68**  | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block
             */
            scrollPaddingBlock?: CSS.Property.ScrollPaddingBlock<(string & {})> | undefined;
            /**
             * The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
             *
             * **Syntax**: `auto | <length-percentage>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **69** | **68**  | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-end
             */
            scrollPaddingBlockEnd?: CSS.Property.ScrollPaddingBlockEnd<(string & {})> | undefined;
            /**
             * The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
             *
             * **Syntax**: `auto | <length-percentage>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **69** | **68**  | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block-start
             */
            scrollPaddingBlockStart?: CSS.Property.ScrollPaddingBlockStart<(string & {})> | undefined;
            /**
             * The `scroll-padding-bottom` property defines offsets for the bottom of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
             *
             * **Syntax**: `auto | <length-percentage>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **68**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-bottom
             */
            scrollPaddingBottom?: CSS.Property.ScrollPaddingBottom<(string & {})> | undefined;
            /**
             * The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.
             *
             * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **69** | **68**  | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline
             */
            scrollPaddingInline?: CSS.Property.ScrollPaddingInline<(string & {})> | undefined;
            /**
             * The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
             *
             * **Syntax**: `auto | <length-percentage>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **69** | **68**  | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-end
             */
            scrollPaddingInlineEnd?: CSS.Property.ScrollPaddingInlineEnd<(string & {})> | undefined;
            /**
             * The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
             *
             * **Syntax**: `auto | <length-percentage>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **69** | **68**  | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline-start
             */
            scrollPaddingInlineStart?: CSS.Property.ScrollPaddingInlineStart<(string & {})> | undefined;
            /**
             * The `scroll-padding-left` property defines offsets for the left of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
             *
             * **Syntax**: `auto | <length-percentage>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **68**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-left
             */
            scrollPaddingLeft?: CSS.Property.ScrollPaddingLeft<(string & {})> | undefined;
            /**
             * The `scroll-padding-right` property defines offsets for the right of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
             *
             * **Syntax**: `auto | <length-percentage>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **68**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-right
             */
            scrollPaddingRight?: CSS.Property.ScrollPaddingRight<(string & {})> | undefined;
            /**
             * The **`scroll-padding-top`** property defines offsets for the top of the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
             *
             * **Syntax**: `auto | <length-percentage>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **69** | **68**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-padding-top
             */
            scrollPaddingTop?: CSS.Property.ScrollPaddingTop<(string & {})> | undefined;
            /**
             * The `scroll-snap-align` property specifies the box's snap position as an alignment of its snap area (as the alignment subject) within its snap container's snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
             *
             * **Syntax**: `[ none | start | end | center ]{1,2}`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **69** | **68**  | **11** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align
             */
            scrollSnapAlign?: CSS.Property.ScrollSnapAlign | undefined;
            /**
             * The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.
             *
             * **Syntax**: `<length>{1,4}`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |          Safari           | Edge | IE  |
             * | :----: | :-----: | :-----------------------: | :--: | :-: |
             * | **69** |  68-90  |         **14.1**          | n/a  | No  |
             * |        |         | 11 _(scroll-snap-margin)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin
             */
            scrollSnapMargin?: CSS.Property.ScrollMargin<(string & {})> | undefined;
            /**
             * The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |              Safari              | Edge | IE  |
             * | :----: | :-----: | :------------------------------: | :--: | :-: |
             * | **69** | **68**  |             **14.1**             | n/a  | No  |
             * |        |         | 11 _(scroll-snap-margin-bottom)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-bottom
             */
            scrollSnapMarginBottom?: CSS.Property.ScrollMarginBottom<(string & {})> | undefined;
            /**
             * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |             Safari             | Edge | IE  |
             * | :----: | :-----: | :----------------------------: | :--: | :-: |
             * | **69** | **68**  |            **14.1**            | n/a  | No  |
             * |        |         | 11 _(scroll-snap-margin-left)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
             */
            scrollSnapMarginLeft?: CSS.Property.ScrollMarginLeft<(string & {})> | undefined;
            /**
             * The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |             Safari              | Edge | IE  |
             * | :----: | :-----: | :-----------------------------: | :--: | :-: |
             * | **69** | **68**  |            **14.1**             | n/a  | No  |
             * |        |         | 11 _(scroll-snap-margin-right)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-right
             */
            scrollSnapMarginRight?: CSS.Property.ScrollMarginRight<(string & {})> | undefined;
            /**
             * The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
             *
             * **Syntax**: `<length>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |            Safari             | Edge | IE  |
             * | :----: | :-----: | :---------------------------: | :--: | :-: |
             * | **69** | **68**  |           **14.1**            | n/a  | No  |
             * |        |         | 11 _(scroll-snap-margin-top)_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-top
             */
            scrollSnapMarginTop?: CSS.Property.ScrollMarginTop<(string & {})> | undefined;
            /**
             * The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
             *
             * **Syntax**: `normal | always`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **75** | **103** | **15** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop
             */
            scrollSnapStop?: CSS.Property.ScrollSnapStop | undefined;
            /**
             * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
             *
             * **Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari  |  Edge  |      IE      |
             * | :----: | :-----: | :-----: | :----: | :----------: |
             * | **69** |  39-68  | **11**  | **79** | **10** _-x-_ |
             * |        |         | 9 _-x-_ |        |              |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
             */
            scrollSnapType?: CSS.Property.ScrollSnapType | undefined;
            /**
             * The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.
             *
             * **Syntax**: `auto | <color>{2}`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   | **64**  |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-color
             */
            scrollbarColor?: CSS.Property.ScrollbarColor | undefined;
            /**
             * The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.
             *
             * **Syntax**: `auto | stable && both-edges?`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **94** | **97**  |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter
             */
            scrollbarGutter?: CSS.Property.ScrollbarGutter | undefined;
            /**
             * The **`scrollbar-width`** property allows the author to set the maximum thickness of an element's scrollbars when they are shown.
             *
             * **Syntax**: `auto | thin | none`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * |   No   | **64**  |   No   | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/scrollbar-width
             */
            scrollbarWidth?: CSS.Property.ScrollbarWidth | undefined;
            /**
             * The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
             *
             * **Syntax**: `<alpha-value>`
             *
             * **Initial value**: `0.0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **37** | **62**  | **10.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
             */
            shapeImageThreshold?: CSS.Property.ShapeImageThreshold | undefined;
            /**
             * The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.
             *
             * **Syntax**: `<length-percentage>`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **37** | **62**  | **10.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
             */
            shapeMargin?: CSS.Property.ShapeMargin<(string & {})> | undefined;
            /**
             * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
             *
             * **Syntax**: `none | [ <shape-box> || <basic-shape> ] | <image>`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **37** | **62**  | **10.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
             */
            shapeOutside?: CSS.Property.ShapeOutside | undefined;
            /**
             * The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).
             *
             * **Syntax**: `<integer> | <length>`
             *
             * **Initial value**: `8`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **21** | **91**  | **7**  | n/a  | No  |
             * |        | 4 _-x-_ |        |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
             */
            tabSize?: CSS.Property.TabSize<(string & {})> | undefined;
            /**
             * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
             *
             * **Syntax**: `auto | fixed`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **14** |  **1**  | **1**  | **12** | **5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
             */
            tableLayout?: CSS.Property.TableLayout | undefined;
            /**
             * The **`text-align`** CSS property sets the horizontal alignment of the content inside a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
             *
             * **Syntax**: `start | end | left | right | center | justify | match-parent`
             *
             * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **3** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-align
             */
            textAlign?: CSS.Property.TextAlign | undefined;
            /**
             * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
             *
             * **Syntax**: `auto | start | end | left | right | center | justify`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE    |
             * | :----: | :-----: | :----: | :----: | :-----: |
             * | **47** | **49**  | **16** | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
             */
            textAlignLast?: CSS.Property.TextAlignLast | undefined;
            /**
             * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
             *
             * **Syntax**: `none | all | [ digits <integer>? ]`
             *
             * **Initial value**: `none`
             *
             * |           Chrome           | Firefox |              Safari              | Edge  |                   IE                   |
             * | :------------------------: | :-----: | :------------------------------: | :---: | :------------------------------------: |
             * |           **48**           | **48**  | **5.1** _(-webkit-text-combine)_ | 15-79 | **11** _(-ms-text-combine-horizontal)_ |
             * | 9 _(-webkit-text-combine)_ |         |                                  |       |                                        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
             */
            textCombineUpright?: CSS.Property.TextCombineUpright | undefined;
            /**
             * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
             *
             * **Syntax**: `<color>`
             *
             * **Initial value**: `currentcolor`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **57** | **36**  | **12.1** | n/a  | No  |
             * |        |         | 8 _-x-_  |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
             */
            textDecorationColor?: CSS.Property.TextDecorationColor | undefined;
            /**
             * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
             *
             * **Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **57** | **36**  | **12.1** | n/a  | No  |
             * |        |         | 8 _-x-_  |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
             */
            textDecorationLine?: CSS.Property.TextDecorationLine | undefined;
            /**
             * The **`text-decoration-skip`** CSS property sets what parts of an element's content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
             *
             * **Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`
             *
             * **Initial value**: `objects`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | 57-64  |   No    | **12.1** | n/a  | No  |
             * |        |         | 7 _-x-_  |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
             */
            textDecorationSkip?: CSS.Property.TextDecorationSkip | undefined;
            /**
             * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
             *
             * **Syntax**: `auto | all | none`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **64** | **70**  | **15.4** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
             */
            textDecorationSkipInk?: CSS.Property.TextDecorationSkipInk | undefined;
            /**
             * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
             *
             * **Syntax**: `solid | double | dotted | dashed | wavy`
             *
             * **Initial value**: `solid`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **57** | **36**  | **12.1** | n/a  | No  |
             * |        |         | 8 _-x-_  |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
             */
            textDecorationStyle?: CSS.Property.TextDecorationStyle | undefined;
            /**
             * The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
             *
             * **Syntax**: `auto | from-font | <length> | <percentage> `
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **89** | **70**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness
             */
            textDecorationThickness?: CSS.Property.TextDecorationThickness<(string & {})> | undefined;
            /**
             * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
             *
             * **Syntax**: `<color>`
             *
             * **Initial value**: `currentcolor`
             *
             * |  Chrome  | Firefox | Safari | Edge | IE  |
             * | :------: | :-----: | :----: | :--: | :-: |
             * |  **99**  | **46**  | **7**  | n/a  | No  |
             * | 25 _-x-_ |         |        |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
             */
            textEmphasisColor?: CSS.Property.TextEmphasisColor | undefined;
            /**
             * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
             *
             * **Syntax**: `[ over | under ] && [ right | left ]`
             *
             * **Initial value**: `over right`
             *
             * |  Chrome  | Firefox | Safari | Edge | IE  |
             * | :------: | :-----: | :----: | :--: | :-: |
             * |  **99**  | **46**  | **7**  | n/a  | No  |
             * | 25 _-x-_ |         |        |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
             */
            textEmphasisPosition?: CSS.Property.TextEmphasisPosition | undefined;
            /**
             * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
             *
             * **Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`
             *
             * **Initial value**: `none`
             *
             * |  Chrome  | Firefox | Safari | Edge | IE  |
             * | :------: | :-----: | :----: | :--: | :-: |
             * |  **99**  | **46**  | **7**  | n/a  | No  |
             * | 25 _-x-_ |         |        |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
             */
            textEmphasisStyle?: CSS.Property.TextEmphasisStyle | undefined;
            /**
             * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
             *
             * **Syntax**: `<length-percentage> && hanging? && each-line?`
             *
             * **Initial value**: `0`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **3** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
             */
            textIndent?: CSS.Property.TextIndent<(string & {})> | undefined;
            /**
             * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
             *
             * **Syntax**: `auto | inter-character | inter-word | none`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE   |
             * | :----: | :-----: | :----: | :----: | :----: |
             * |  n/a   | **55**  |   No   | **12** | **11** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
             */
            textJustify?: CSS.Property.TextJustify | undefined;
            /**
             * The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
             *
             * **Syntax**: `mixed | upright | sideways`
             *
             * **Initial value**: `mixed`
             *
             * |  Chrome  | Firefox |  Safari   | Edge | IE  |
             * | :------: | :-----: | :-------: | :--: | :-: |
             * |  **48**  | **41**  |  **14**   | n/a  | No  |
             * | 11 _-x-_ |         | 5.1 _-x-_ |      |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
             */
            textOrientation?: CSS.Property.TextOrientation | undefined;
            /**
             * The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
             *
             * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
             *
             * **Initial value**: `clip`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **1**  |  **7**  | **1.3** | **12** | **6** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
             */
            textOverflow?: CSS.Property.TextOverflow | undefined;
            /**
             * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
             *
             * **Syntax**: `auto | optimizeSpeed | optimizeLegibility | geometricPrecision`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **4**  |  **1**  | **5**  | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
             */
            textRendering?: CSS.Property.TextRendering | undefined;
            /**
             * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
             *
             * **Syntax**: `none | <shadow-t>#`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari  |  Edge  |   IE   |
             * | :----: | :-----: | :-----: | :----: | :----: |
             * | **2**  | **3.5** | **1.1** | **12** | **10** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
             */
            textShadow?: CSS.Property.TextShadow | undefined;
            /**
             * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this CSS.Property.
             *
             * **Syntax**: `none | auto | <percentage>`
             *
             * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
             *
             * | Chrome | Firefox | Safari |  Edge  | IE  |
             * | :----: | :-----: | :----: | :----: | :-: |
             * | **54** |   No    |   No   | **79** | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
             */
            textSizeAdjust?: CSS.Property.TextSizeAdjust | undefined;
            /**
             * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
             *
             * **Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`
             *
             * **Initial value**: `none`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
             */
            textTransform?: CSS.Property.TextTransform | undefined;
            /**
             * The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.
             *
             * **Syntax**: `auto | <length> | <percentage> `
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  | Edge | IE  |
             * | :----: | :-----: | :------: | :--: | :-: |
             * | **87** | **70**  | **12.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-offset
             */
            textUnderlineOffset?: CSS.Property.TextUnderlineOffset<(string & {})> | undefined;
            /**
             * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
             *
             * **Syntax**: `auto | from-font | [ under || [ left | right ] ]`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox |  Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :------: | :----: | :---: |
             * | **33** | **74**  | **12.1** | **12** | **6** |
             * |        |         | 9 _-x-_  |        |       |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
             */
            textUnderlinePosition?: CSS.Property.TextUnderlinePosition | undefined;
            /**
             * The **`top`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
             *
             * **Syntax**: `<length> | <percentage> | auto`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/top
             */
            top?: CSS.Property.Top<(string & {})> | undefined;
            /**
             * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
             *
             * **Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |    IE    |
             * | :----: | :-----: | :----: | :----: | :------: |
             * | **36** | **52**  | **13** | **12** |  **11**  |
             * |        |         |        |        | 10 _-x-_ |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
             */
            touchAction?: CSS.Property.TouchAction | undefined;
            /**
             * The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
             *
             * **Syntax**: `none | <transform-list>`
             *
             * **Initial value**: `none`
             *
             * | Chrome  | Firefox |  Safari   |  Edge  |   IE    |
             * | :-----: | :-----: | :-------: | :----: | :-----: |
             * | **36**  | **16**  |   **9**   | **12** | **10**  |
             * | 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/transform
             */
            transform?: CSS.Property.Transform | undefined;
            /**
             * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
             *
             * **Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`
             *
             * **Initial value**: `view-box`
             *
             * | Chrome | Firefox | Safari | Edge | IE  |
             * | :----: | :-----: | :----: | :--: | :-: |
             * | **64** | **55**  | **11** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
             */
            transformBox?: CSS.Property.TransformBox | undefined;
            /**
             * The **`transform-origin`** CSS property sets the origin for an element's transformations.
             *
             * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
             *
             * **Initial value**: `50% 50% 0`
             *
             * | Chrome  |  Firefox  | Safari  |  Edge  |   IE    |
             * | :-----: | :-------: | :-----: | :----: | :-----: |
             * | **36**  |  **16**   |  **9**  | **12** | **10**  |
             * | 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
             */
            transformOrigin?: CSS.Property.TransformOrigin<(string & {})> | undefined;
            /**
             * The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
             *
             * **Syntax**: `flat | preserve-3d`
             *
             * **Initial value**: `flat`
             *
             * |  Chrome  | Firefox  | Safari  |  Edge  | IE  |
             * | :------: | :------: | :-----: | :----: | :-: |
             * |  **36**  |  **16**  |  **9**  | **12** | No  |
             * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
             */
            transformStyle?: CSS.Property.TransformStyle | undefined;
            /**
             * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
             *
             * **Syntax**: `<time>#`
             *
             * **Initial value**: `0s`
             *
             * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
             * | :-----: | :-----: | :-----: | :----: | :----: |
             * | **26**  | **16**  |  **9**  | **12** | **10** |
             * | 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
             */
            transitionDelay?: CSS.Property.TransitionDelay<(string & {})> | undefined;
            /**
             * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
             *
             * **Syntax**: `<time>#`
             *
             * **Initial value**: `0s`
             *
             * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
             * | :-----: | :-----: | :-------: | :----: | :----: |
             * | **26**  | **16**  |   **9**   | **12** | **10** |
             * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
             */
            transitionDuration?: CSS.Property.TransitionDuration<(string & {})> | undefined;
            /**
             * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
             *
             * **Syntax**: `none | <single-transition-property>#`
             *
             * **Initial value**: all
             *
             * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
             * | :-----: | :-----: | :-------: | :----: | :----: |
             * | **26**  | **16**  |   **9**   | **12** | **10** |
             * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
             */
            transitionProperty?: CSS.Property.TransitionProperty | undefined;
            /**
             * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
             *
             * **Syntax**: `<easing-function>#`
             *
             * **Initial value**: `ease`
             *
             * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
             * | :-----: | :-----: | :-------: | :----: | :----: |
             * | **26**  | **16**  |   **9**   | **12** | **10** |
             * | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
             */
            transitionTimingFunction?: CSS.Property.TransitionTimingFunction | undefined;
            /**
             * The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` CSS.Property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
             *
             * **Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`
             *
             * **Initial value**: `none`
             *
             * | Chrome  | Firefox |  Safari  | Edge | IE  |
             * | :-----: | :-----: | :------: | :--: | :-: |
             * | **104** | **72**  | **14.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/translate
             */
            translate?: CSS.Property.Translate<(string & {})> | undefined;
            /**
             * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
             *
             * **Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari  |  Edge  |   IE    |
             * | :----: | :-----: | :-----: | :----: | :-----: |
             * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
             */
            unicodeBidi?: CSS.Property.UnicodeBidi | undefined;
            /**
             * The **`user-select`** CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.
             *
             * **Syntax**: `auto | text | none | contain | all`
             *
             * **Initial value**: `auto`
             *
             * | Chrome  | Firefox |   Safari    |   Edge   |      IE      |
             * | :-----: | :-----: | :---------: | :------: | :----------: |
             * | **54**  | **69**  | **3** _-x-_ |  **79**  | **10** _-x-_ |
             * | 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |              |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/user-select
             */
            userSelect?: CSS.Property.UserSelect | undefined;
            /**
             * The **`vertical-align`** CSS property sets vertical alignment of an inline, inline-block or table-cell box.
             *
             * **Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`
             *
             * **Initial value**: `baseline`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
             */
            verticalAlign?: CSS.Property.VerticalAlign<(string & {})> | undefined;
            /**
             * The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.
             *
             * **Syntax**: `visible | hidden | collapse`
             *
             * **Initial value**: `visible`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/visibility
             */
            visibility?: CSS.Property.Visibility | undefined;
            /**
             * The **`white-space`** CSS property sets how white space inside an element is handled.
             *
             * **Syntax**: `normal | pre | nowrap | pre-wrap | pre-line | break-spaces`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE    |
             * | :----: | :-----: | :----: | :----: | :-----: |
             * | **1**  |  **1**  | **1**  | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/white-space
             */
            whiteSpace?: CSS.Property.WhiteSpace | undefined;
            /**
             * The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.
             *
             * **Syntax**: `<integer>`
             *
             * **Initial value**: `2`
             *
             * | Chrome | Firefox | Safari  |  Edge  |  IE   |
             * | :----: | :-----: | :-----: | :----: | :---: |
             * | **25** |   No    | **1.3** | **12** | **8** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/widows
             */
            widows?: CSS.Property.Widows | undefined;
            /**
             * The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.
             *
             * **Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content | fit-content(<length-percentage>)`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/width
             */
            width?: CSS.Property.Width<(string & {})> | undefined;
            /**
             * The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.
             *
             * **Syntax**: `auto | <animateable-feature>#`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari  | Edge | IE  |
             * | :----: | :-----: | :-----: | :--: | :-: |
             * | **36** | **36**  | **9.1** | n/a  | No  |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/will-change
             */
            willChange?: CSS.Property.WillChange | undefined;
            /**
             * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
             *
             * **Syntax**: `normal | break-all | keep-all | break-word`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  |   IE    |
             * | :----: | :-----: | :----: | :----: | :-----: |
             * | **1**  | **15**  | **3**  | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/word-break
             */
            wordBreak?: CSS.Property.WordBreak | undefined;
            /**
             * The **`word-spacing`** CSS property sets the length of space between words and between tags.
             *
             * **Syntax**: `normal | <length>`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **6** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
             */
            wordSpacing?: CSS.Property.WordSpacing<(string & {})> | undefined;
            /**
             * The **`overflow-wrap`** CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
             *
             * **Syntax**: `normal | break-word`
             *
             * **Initial value**: `normal`
             */
            wordWrap?: CSS.Property.WordWrap | undefined;
            /**
             * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).
             *
             * **Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`
             *
             * **Initial value**: `horizontal-tb`
             *
             * | Chrome  | Firefox |  Safari   |  Edge  |  IE   |
             * | :-----: | :-----: | :-------: | :----: | :---: |
             * | **48**  | **41**  | **10.1**  | **12** | **9** |
             * | 8 _-x-_ |         | 5.1 _-x-_ |        |       |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
             */
            writingMode?: CSS.Property.WritingMode | undefined;
            /**
             * The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
             *
             * **Syntax**: `auto | <integer>`
             *
             * **Initial value**: `auto`
             *
             * | Chrome | Firefox | Safari |  Edge  |  IE   |
             * | :----: | :-----: | :----: | :----: | :---: |
             * | **1**  |  **1**  | **1**  | **12** | **4** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/z-index
             */
            zIndex?: CSS.Property.ZIndex | undefined;
            /**
             * The non-standard **_`zoom`_** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.
             *
             * **Syntax**: `normal | reset | <number> | <percentage>`
             *
             * **Initial value**: `normal`
             *
             * | Chrome | Firefox | Safari  |  Edge  |   IE    |
             * | :----: | :-----: | :-----: | :----: | :-----: |
             * | **1**  |   No    | **3.1** | **12** | **5.5** |
             *
             * @see https://developer.mozilla.org/docs/Web/CSS/zoom
             */
            zoom?: CSS.Property.Zoom | undefined;
          
          
        /**
         * The index signature was removed to enable closed typing for style
         * using CSSType. You're able to use type assertion or module augmentation
         * to add properties or an index signature of your own.
         *
         * For examples and more information, visit:
         * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
         */
    }

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface AriaAttributes {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        'aria-activedescendant'?: string | undefined;
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        'aria-atomic'?: Booleanish | undefined;
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both' | undefined;
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        'aria-busy'?: Booleanish | undefined;
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        'aria-checked'?: boolean | 'false' | 'mixed' | 'true' | undefined;
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        'aria-colcount'?: number | undefined;
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        'aria-colindex'?: number | undefined;
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        'aria-colspan'?: number | undefined;
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        'aria-controls'?: string | undefined;
        /** Indicates the element that represents the current item within a container or set of related elements. */
        'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time' | undefined;
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        'aria-describedby'?: string | undefined;
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        'aria-details'?: string | undefined;
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        'aria-disabled'?: Booleanish | undefined;
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup' | undefined;
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        'aria-errormessage'?: string | undefined;
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        'aria-expanded'?: Booleanish | undefined;
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        'aria-flowto'?: string | undefined;
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        'aria-grabbed'?: Booleanish | undefined;
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | undefined;
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        'aria-hidden'?: Booleanish | undefined;
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling' | undefined;
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        'aria-keyshortcuts'?: string | undefined;
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        'aria-label'?: string | undefined;
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        'aria-labelledby'?: string | undefined;
        /** Defines the hierarchical level of an element within a structure. */
        'aria-level'?: number | undefined;
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        'aria-live'?: 'off' | 'assertive' | 'polite' | undefined;
        /** Indicates whether an element is modal when displayed. */
        'aria-modal'?: Booleanish | undefined;
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        'aria-multiline'?: Booleanish | undefined;
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        'aria-multiselectable'?: Booleanish | undefined;
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        'aria-orientation'?: 'horizontal' | 'vertical' | undefined;
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        'aria-owns'?: string | undefined;
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        'aria-placeholder'?: string | undefined;
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        'aria-posinset'?: number | undefined;
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        'aria-pressed'?: boolean | 'false' | 'mixed' | 'true' | undefined;
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        'aria-readonly'?: Booleanish | undefined;
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        'aria-relevant'?: 'additions' | 'additions removals' | 'additions text' | 'all' | 'removals' | 'removals additions' | 'removals text' | 'text' | 'text additions' | 'text removals' | undefined;
        /** Indicates that user input is required on the element before a form may be submitted. */
        'aria-required'?: Booleanish | undefined;
        /** Defines a human-readable, author-localized description for the role of an element. */
        'aria-roledescription'?: string | undefined;
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        'aria-rowcount'?: number | undefined;
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        'aria-rowindex'?: number | undefined;
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        'aria-rowspan'?: number | undefined;
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        'aria-selected'?: Booleanish | undefined;
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        'aria-setsize'?: number | undefined;
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
        /** Defines the maximum allowed value for a range widget. */
        'aria-valuemax'?: number | undefined;
        /** Defines the minimum allowed value for a range widget. */
        'aria-valuemin'?: number | undefined;
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        'aria-valuenow'?: number | undefined;
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        'aria-valuetext'?: string | undefined;
    }

    // All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
    type AriaRole =
        | 'alert'
        | 'alertdialog'
        | 'application'
        | 'article'
        | 'banner'
        | 'button'
        | 'cell'
        | 'checkbox'
        | 'columnheader'
        | 'combobox'
        | 'complementary'
        | 'contentinfo'
        | 'definition'
        | 'dialog'
        | 'directory'
        | 'document'
        | 'feed'
        | 'figure'
        | 'form'
        | 'grid'
        | 'gridcell'
        | 'group'
        | 'heading'
        | 'img'
        | 'link'
        | 'list'
        | 'listbox'
        | 'listitem'
        | 'log'
        | 'main'
        | 'marquee'
        | 'math'
        | 'menu'
        | 'menubar'
        | 'menuitem'
        | 'menuitemcheckbox'
        | 'menuitemradio'
        | 'navigation'
        | 'none'
        | 'note'
        | 'option'
        | 'presentation'
        | 'progressbar'
        | 'radio'
        | 'radiogroup'
        | 'region'
        | 'row'
        | 'rowgroup'
        | 'rowheader'
        | 'scrollbar'
        | 'search'
        | 'searchbox'
        | 'separator'
        | 'slider'
        | 'spinbutton'
        | 'status'
        | 'switch'
        | 'tab'
        | 'table'
        | 'tablist'
        | 'tabpanel'
        | 'term'
        | 'textbox'
        | 'timer'
        | 'toolbar'
        | 'tooltip'
        | 'tree'
        | 'treegrid'
        | 'treeitem'
        | (string & {});

    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // React-specific Attributes
        defaultChecked?: boolean | undefined;
        defaultValue?: string | number | ReadonlyArray<string> | undefined;
        suppressContentEditableWarning?: boolean | undefined;
        suppressHydrationWarning?: boolean | undefined;

        // Standard HTML Attributes
        accessKey?: string | undefined;
        className?: string | undefined;
        contentEditable?: Booleanish | "inherit" | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: Booleanish | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        nonce?: string | undefined;
        placeholder?: string | undefined;
        slot?: string | undefined;
        spellCheck?: Booleanish | undefined;
        style?: CSSProperties | undefined;
        tabIndex?: number | undefined;
        title?: string | undefined;
        translate?: 'yes' | 'no' | undefined;

        // Unknown
        radioGroup?: string | undefined; // <command>, <menuitem>

        // WAI-ARIA
        role?: AriaRole | undefined;

        // RDFa Attributes
        about?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        resource?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;

        // Non-standard Attributes
        autoCapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        itemProp?: string | undefined;
        itemScope?: boolean | undefined;
        itemType?: string | undefined;
        itemID?: string | undefined;
        itemRef?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: 'on' | 'off' | undefined;

        // Living Standard
        /**
         * Hints at the type of data that might be entered by the user while editing the element or its contents
         * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
         */
        inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
        /**
         * Specify that a standard HTML element should behave like a defined custom built-in element
         * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
         */
        is?: string | undefined;
    }

    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
        // Standard HTML Attributes
        accept?: string | undefined;
        acceptCharset?: string | undefined;
        action?: string | undefined;
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        alt?: string | undefined;
        as?: string | undefined;
        async?: boolean | undefined;
        autoComplete?: string | undefined;
        autoFocus?: boolean | undefined;
        autoPlay?: boolean | undefined;
        capture?: boolean | 'user' | 'environment' | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        charSet?: string | undefined;
        challenge?: string | undefined;
        checked?: boolean | undefined;
        cite?: string | undefined;
        classID?: string | undefined;
        cols?: number | undefined;
        colSpan?: number | undefined;
        content?: string | undefined;
        controls?: boolean | undefined;
        coords?: string | undefined;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        data?: string | undefined;
        dateTime?: string | undefined;
        default?: boolean | undefined;
        defer?: boolean | undefined;
        disabled?: boolean | undefined;
        download?: any;
        encType?: string | undefined;
        form?: string | undefined;
        formAction?: string | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        frameBorder?: number | string | undefined;
        headers?: string | undefined;
        height?: number | string | undefined;
        high?: number | undefined;
        href?: string | undefined;
        hrefLang?: string | undefined;
        htmlFor?: string | undefined;
        httpEquiv?: string | undefined;
        integrity?: string | undefined;
        keyParams?: string | undefined;
        keyType?: string | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        list?: string | undefined;
        loop?: boolean | undefined;
        low?: number | undefined;
        manifest?: string | undefined;
        marginHeight?: number | undefined;
        marginWidth?: number | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        media?: string | undefined;
        mediaGroup?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        muted?: boolean | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        open?: boolean | undefined;
        optimum?: number | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        preload?: string | undefined;
        readOnly?: boolean | undefined;
        rel?: string | undefined;
        required?: boolean | undefined;
        reversed?: boolean | undefined;
        rows?: number | undefined;
        rowSpan?: number | undefined;
        sandbox?: string | undefined;
        scope?: string | undefined;
        scoped?: boolean | undefined;
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        selected?: boolean | undefined;
        shape?: string | undefined;
        size?: number | undefined;
        sizes?: string | undefined;
        span?: number | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        srcLang?: string | undefined;
        srcSet?: string | undefined;
        start?: number | undefined;
        step?: number | string | undefined;
        summary?: string | undefined;
        target?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
        wrap?: string | undefined;
    }

    type HTMLAttributeReferrerPolicy =
        | ''
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';

    type HTMLAttributeAnchorTarget =
        | '_self'
        | '_blank'
        | '_parent'
        | '_top'
        | (string & {});

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        ping?: string | undefined;
        rel?: string | undefined;
        target?: HTMLAttributeAnchorTarget | undefined;
        type?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    }

    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        coords?: string | undefined;
        download?: any;
        href?: string | undefined;
        hrefLang?: string | undefined;
        media?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        rel?: string | undefined;
        shape?: string | undefined;
        target?: string | undefined;
    }

    interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
        href?: string | undefined;
        target?: string | undefined;
    }

    interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
        autoFocus?: boolean | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        formAction?: string | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        name?: string | undefined;
        type?: 'submit' | 'reset' | 'button' | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        width?: number | string | undefined;
    }

    interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
        width?: number | string | undefined;
    }

    interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number | undefined;
    }

    interface DataHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean | undefined;
        onToggle?: ReactEventHandler<T> | undefined;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    interface DialogHTMLAttributes<T> extends HTMLAttributes<T> {
        onCancel?: ReactEventHandler<T> |  undefined;
        onClose?: ReactEventHandler<T> |  undefined;
        open?: boolean | undefined;
    }

    interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        src?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        form?: string | undefined;
        name?: string | undefined;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
        acceptCharset?: string | undefined;
        action?: string | undefined;
        autoComplete?: string | undefined;
        encType?: string | undefined;
        method?: string | undefined;
        name?: string | undefined;
        noValidate?: boolean | undefined;
        target?: string | undefined;
        rel?: string | undefined;
    }

    interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
        manifest?: string | undefined;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allow?: string | undefined;
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        /** @deprecated */
        frameBorder?: number | string | undefined;
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        /** @deprecated */
        marginHeight?: number | undefined;
        /** @deprecated */
        marginWidth?: number | undefined;
        name?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sandbox?: string | undefined;
        /** @deprecated */
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        width?: number | string | undefined;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string | undefined;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        decoding?: "async" | "auto" | "sync" | undefined;
        height?: number | string | undefined;
        loading?: "eager" | "lazy" | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
    }

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
        dateTime?: string | undefined;
    }

    type HTMLInputTypeAttribute =
        | 'button'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'reset'
        | 'search'
        | 'submit'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week'
        | (string & {});

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        accept?: string | undefined;
        alt?: string | undefined;
        autoComplete?: string | undefined;
        autoFocus?: boolean | undefined;
        capture?: boolean | 'user' | 'environment' | undefined; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        checked?: boolean | undefined;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        disabled?: boolean | undefined;
        enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined;
        form?: string | undefined;
        formAction?: string | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        height?: number | string | undefined;
        list?: string | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        src?: string | undefined;
        step?: number | string | undefined;
        type?: HTMLInputTypeAttribute | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        width?: number | string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
        autoFocus?: boolean | undefined;
        challenge?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        keyType?: string | undefined;
        keyParams?: string | undefined;
        name?: string | undefined;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
    }

    interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
        as?: string | undefined;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        href?: string | undefined;
        hrefLang?: string | undefined;
        integrity?: string | undefined;
        media?: string | undefined;
        imageSrcSet?: string | undefined;
        imageSizes?: string | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        rel?: string | undefined;
        sizes?: string | undefined;
        type?: string | undefined;
        charSet?: string | undefined;
    }

    interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
        type?: string | undefined;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoPlay?: boolean | undefined;
        controls?: boolean | undefined;
        controlsList?: string | undefined;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        loop?: boolean | undefined;
        mediaGroup?: string | undefined;
        muted?: boolean | undefined;
        playsInline?: boolean | undefined;
        preload?: string | undefined;
        src?: string | undefined;
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charSet?: string | undefined;
        content?: string | undefined;
        httpEquiv?: string | undefined;
        name?: string | undefined;
        media?: string | undefined;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        high?: number | undefined;
        low?: number | undefined;
        max?: number | string | undefined;
        min?: number | string | undefined;
        optimum?: number | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string | undefined;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
        classID?: string | undefined;
        data?: string | undefined;
        form?: string | undefined;
        height?: number | string | undefined;
        name?: string | undefined;
        type?: string | undefined;
        useMap?: string | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
    }

    interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
        reversed?: boolean | undefined;
        start?: number | undefined;
        type?: '1' | 'a' | 'A' | 'i' | 'I' | undefined;
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean | undefined;
        label?: string | undefined;
        selected?: boolean | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string | undefined;
        htmlFor?: string | undefined;
        name?: string | undefined;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
        max?: number | string | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
    }

    interface SlotHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string | undefined;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        async?: boolean | undefined;
        /** @deprecated */
        charSet?: string | undefined;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        defer?: boolean | undefined;
        integrity?: string | undefined;
        noModule?: boolean | undefined;
        referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
        src?: string | undefined;
        type?: string | undefined;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        autoFocus?: boolean | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        multiple?: boolean | undefined;
        name?: string | undefined;
        required?: boolean | undefined;
        size?: number | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string | undefined;
        media?: string | undefined;
        sizes?: string | undefined;
        src?: string | undefined;
        srcSet?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string | undefined;
        scoped?: boolean | undefined;
        type?: string | undefined;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | undefined;
        bgcolor?: string | undefined;
        border?: number | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        frame?: boolean | undefined;
        rules?: "none" | "groups" | "rows" | "columns" | "all" | undefined;
        summary?: string | undefined;
        width?: number | string | undefined;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string | undefined;
        autoFocus?: boolean | undefined;
        cols?: number | undefined;
        dirName?: string | undefined;
        disabled?: boolean | undefined;
        form?: string | undefined;
        maxLength?: number | undefined;
        minLength?: number | undefined;
        name?: string | undefined;
        placeholder?: string | undefined;
        readOnly?: boolean | undefined;
        required?: boolean | undefined;
        rows?: number | undefined;
        value?: string | ReadonlyArray<string> | number | undefined;
        wrap?: string | undefined;

        onChange?: ChangeEventHandler<T> | undefined;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
        height?: number | string | undefined;
        width?: number | string | undefined;
        valign?: "top" | "middle" | "bottom" | "baseline" | undefined;
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        align?: "left" | "center" | "right" | "justify" | "char" | undefined;
        colSpan?: number | undefined;
        headers?: string | undefined;
        rowSpan?: number | undefined;
        scope?: string | undefined;
        abbr?: string | undefined;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
        dateTime?: string | undefined;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
        default?: boolean | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        src?: string | undefined;
        srcLang?: string | undefined;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
        height?: number | string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        width?: number | string | undefined;
        disablePictureInPicture?: boolean | undefined;
        disableRemotePlayback?: boolean | undefined;
    }

    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals
    interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // Attributes which also defined in HTMLAttributes
        // See comment in SVGDOMPropertyConfig.js
        className?: string | undefined;
        color?: string | undefined;
        height?: number | string | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        max?: number | string | undefined;
        media?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        name?: string | undefined;
        style?: CSSProperties | undefined;
        target?: string | undefined;
        type?: string | undefined;
        width?: number | string | undefined;

        // Other HTML properties supported by SVG elements in browsers
        role?: AriaRole | undefined;
        tabIndex?: number | undefined;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;

        // SVG Specific attributes
        accentHeight?: number | string | undefined;
        accumulate?: "none" | "sum" | undefined;
        additive?: "replace" | "sum" | undefined;
        alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" |
        "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit" | undefined;
        allowReorder?: "no" | "yes" | undefined;
        alphabetic?: number | string | undefined;
        amplitude?: number | string | undefined;
        arabicForm?: "initial" | "medial" | "terminal" | "isolated" | undefined;
        ascent?: number | string | undefined;
        attributeName?: string | undefined;
        attributeType?: string | undefined;
        autoReverse?: Booleanish | undefined;
        azimuth?: number | string | undefined;
        baseFrequency?: number | string | undefined;
        baselineShift?: number | string | undefined;
        baseProfile?: number | string | undefined;
        bbox?: number | string | undefined;
        begin?: number | string | undefined;
        bias?: number | string | undefined;
        by?: number | string | undefined;
        calcMode?: number | string | undefined;
        capHeight?: number | string | undefined;
        clip?: number | string | undefined;
        clipPath?: string | undefined;
        clipPathUnits?: number | string | undefined;
        clipRule?: number | string | undefined;
        colorInterpolation?: number | string | undefined;
        colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
        colorProfile?: number | string | undefined;
        colorRendering?: number | string | undefined;
        contentScriptType?: number | string | undefined;
        contentStyleType?: number | string | undefined;
        cursor?: number | string | undefined;
        cx?: number | string | undefined;
        cy?: number | string | undefined;
        d?: string | undefined;
        decelerate?: number | string | undefined;
        descent?: number | string | undefined;
        diffuseConstant?: number | string | undefined;
        direction?: number | string | undefined;
        display?: number | string | undefined;
        divisor?: number | string | undefined;
        dominantBaseline?: number | string | undefined;
        dur?: number | string | undefined;
        dx?: number | string | undefined;
        dy?: number | string | undefined;
        edgeMode?: number | string | undefined;
        elevation?: number | string | undefined;
        enableBackground?: number | string | undefined;
        end?: number | string | undefined;
        exponent?: number | string | undefined;
        externalResourcesRequired?: Booleanish | undefined;
        fill?: string | undefined;
        fillOpacity?: number | string | undefined;
        fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
        filter?: string | undefined;
        filterRes?: number | string | undefined;
        filterUnits?: number | string | undefined;
        floodColor?: number | string | undefined;
        floodOpacity?: number | string | undefined;
        focusable?: Booleanish | "auto" | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | string | undefined;
        fontSizeAdjust?: number | string | undefined;
        fontStretch?: number | string | undefined;
        fontStyle?: number | string | undefined;
        fontVariant?: number | string | undefined;
        fontWeight?: number | string | undefined;
        format?: number | string | undefined;
        fr?: number | string | undefined;
        from?: number | string | undefined;
        fx?: number | string | undefined;
        fy?: number | string | undefined;
        g1?: number | string | undefined;
        g2?: number | string | undefined;
        glyphName?: number | string | undefined;
        glyphOrientationHorizontal?: number | string | undefined;
        glyphOrientationVertical?: number | string | undefined;
        glyphRef?: number | string | undefined;
        gradientTransform?: string | undefined;
        gradientUnits?: string | undefined;
        hanging?: number | string | undefined;
        horizAdvX?: number | string | undefined;
        horizOriginX?: number | string | undefined;
        href?: string | undefined;
        ideographic?: number | string | undefined;
        imageRendering?: number | string | undefined;
        in2?: number | string | undefined;
        in?: string | undefined;
        intercept?: number | string | undefined;
        k1?: number | string | undefined;
        k2?: number | string | undefined;
        k3?: number | string | undefined;
        k4?: number | string | undefined;
        k?: number | string | undefined;
        kernelMatrix?: number | string | undefined;
        kernelUnitLength?: number | string | undefined;
        kerning?: number | string | undefined;
        keyPoints?: number | string | undefined;
        keySplines?: number | string | undefined;
        keyTimes?: number | string | undefined;
        lengthAdjust?: number | string | undefined;
        letterSpacing?: number | string | undefined;
        lightingColor?: number | string | undefined;
        limitingConeAngle?: number | string | undefined;
        local?: number | string | undefined;
        markerEnd?: string | undefined;
        markerHeight?: number | string | undefined;
        markerMid?: string | undefined;
        markerStart?: string | undefined;
        markerUnits?: number | string | undefined;
        markerWidth?: number | string | undefined;
        mask?: string | undefined;
        maskContentUnits?: number | string | undefined;
        maskUnits?: number | string | undefined;
        mathematical?: number | string | undefined;
        mode?: number | string | undefined;
        numOctaves?: number | string | undefined;
        offset?: number | string | undefined;
        opacity?: number | string | undefined;
        operator?: number | string | undefined;
        order?: number | string | undefined;
        orient?: number | string | undefined;
        orientation?: number | string | undefined;
        origin?: number | string | undefined;
        overflow?: number | string | undefined;
        overlinePosition?: number | string | undefined;
        overlineThickness?: number | string | undefined;
        paintOrder?: number | string | undefined;
        panose1?: number | string | undefined;
        path?: string | undefined;
        pathLength?: number | string | undefined;
        patternContentUnits?: string | undefined;
        patternTransform?: number | string | undefined;
        patternUnits?: string | undefined;
        pointerEvents?: number | string | undefined;
        points?: string | undefined;
        pointsAtX?: number | string | undefined;
        pointsAtY?: number | string | undefined;
        pointsAtZ?: number | string | undefined;
        preserveAlpha?: Booleanish | undefined;
        preserveAspectRatio?: string | undefined;
        primitiveUnits?: number | string | undefined;
        r?: number | string | undefined;
        radius?: number | string | undefined;
        refX?: number | string | undefined;
        refY?: number | string | undefined;
        renderingIntent?: number | string | undefined;
        repeatCount?: number | string | undefined;
        repeatDur?: number | string | undefined;
        requiredExtensions?: number | string | undefined;
        requiredFeatures?: number | string | undefined;
        restart?: number | string | undefined;
        result?: string | undefined;
        rotate?: number | string | undefined;
        rx?: number | string | undefined;
        ry?: number | string | undefined;
        scale?: number | string | undefined;
        seed?: number | string | undefined;
        shapeRendering?: number | string | undefined;
        slope?: number | string | undefined;
        spacing?: number | string | undefined;
        specularConstant?: number | string | undefined;
        specularExponent?: number | string | undefined;
        speed?: number | string | undefined;
        spreadMethod?: string | undefined;
        startOffset?: number | string | undefined;
        stdDeviation?: number | string | undefined;
        stemh?: number | string | undefined;
        stemv?: number | string | undefined;
        stitchTiles?: number | string | undefined;
        stopColor?: string | undefined;
        stopOpacity?: number | string | undefined;
        strikethroughPosition?: number | string | undefined;
        strikethroughThickness?: number | string | undefined;
        string?: number | string | undefined;
        stroke?: string | undefined;
        strokeDasharray?: string | number | undefined;
        strokeDashoffset?: string | number | undefined;
        strokeLinecap?: "butt" | "round" | "square" | "inherit" | undefined;
        strokeLinejoin?: "miter" | "round" | "bevel" | "inherit" | undefined;
        strokeMiterlimit?: number | string | undefined;
        strokeOpacity?: number | string | undefined;
        strokeWidth?: number | string | undefined;
        surfaceScale?: number | string | undefined;
        systemLanguage?: number | string | undefined;
        tableValues?: number | string | undefined;
        targetX?: number | string | undefined;
        targetY?: number | string | undefined;
        textAnchor?: string | undefined;
        textDecoration?: number | string | undefined;
        textLength?: number | string | undefined;
        textRendering?: number | string | undefined;
        to?: number | string | undefined;
        transform?: string | undefined;
        u1?: number | string | undefined;
        u2?: number | string | undefined;
        underlinePosition?: number | string | undefined;
        underlineThickness?: number | string | undefined;
        unicode?: number | string | undefined;
        unicodeBidi?: number | string | undefined;
        unicodeRange?: number | string | undefined;
        unitsPerEm?: number | string | undefined;
        vAlphabetic?: number | string | undefined;
        values?: string | undefined;
        vectorEffect?: number | string | undefined;
        version?: string | undefined;
        vertAdvY?: number | string | undefined;
        vertOriginX?: number | string | undefined;
        vertOriginY?: number | string | undefined;
        vHanging?: number | string | undefined;
        vIdeographic?: number | string | undefined;
        viewBox?: string | undefined;
        viewTarget?: number | string | undefined;
        visibility?: number | string | undefined;
        vMathematical?: number | string | undefined;
        widths?: number | string | undefined;
        wordSpacing?: number | string | undefined;
        writingMode?: number | string | undefined;
        x1?: number | string | undefined;
        x2?: number | string | undefined;
        x?: number | string | undefined;
        xChannelSelector?: string | undefined;
        xHeight?: number | string | undefined;
        xlinkActuate?: string | undefined;
        xlinkArcrole?: string | undefined;
        xlinkHref?: string | undefined;
        xlinkRole?: string | undefined;
        xlinkShow?: string | undefined;
        xlinkTitle?: string | undefined;
        xlinkType?: string | undefined;
        xmlBase?: string | undefined;
        xmlLang?: string | undefined;
        xmlns?: string | undefined;
        xmlnsXlink?: string | undefined;
        xmlSpace?: string | undefined;
        y1?: number | string | undefined;
        y2?: number | string | undefined;
        y?: number | string | undefined;
        yChannelSelector?: string | undefined;
        z?: number | string | undefined;
        zoomAndPan?: string | undefined;
    }

    interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
        allowFullScreen?: boolean | undefined;
        allowpopups?: boolean | undefined;
        autoFocus?: boolean | undefined;
        autosize?: boolean | undefined;
        blinkfeatures?: string | undefined;
        disableblinkfeatures?: string | undefined;
        disableguestresize?: boolean | undefined;
        disablewebsecurity?: boolean | undefined;
        guestinstance?: string | undefined;
        httpreferrer?: string | undefined;
        nodeintegration?: boolean | undefined;
        partition?: string | undefined;
        plugins?: boolean | undefined;
        preload?: string | undefined;
        src?: string | undefined;
        useragent?: string | undefined;
        webpreferences?: string | undefined;
    }

    //
    // React.DOM
    // ----------------------------------------------------------------------

    interface ReactHTML {
        a: DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
        abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        area: DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
        article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        audio: DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
        b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        base: DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
        bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        blockquote: DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
        br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
        button: DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
        canvas: DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
        caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        center: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        col: DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        colgroup: DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        data: DetailedHTMLFactory<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
        datalist: DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
        dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        del: DetailedHTMLFactory<DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
        details: DetailedHTMLFactory<DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
        dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        dialog: DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
        div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
        dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        embed: DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
        fieldset: DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
        figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        form: DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
        h1: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h2: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h3: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h4: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h5: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h6: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>;
        header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
        html: DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
        i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        iframe: DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
        img: DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
        input: DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
        kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
        label: DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        legend: DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
        li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
        link: DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
        main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
        mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
        menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        meta: DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
        meter: DetailedHTMLFactory<MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
        nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        object: DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
        ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
        optgroup: DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
        option: DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
        output: DetailedHTMLFactory<OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
        p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
        param: DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
        picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
        progress: DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
        q: DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        slot: DetailedHTMLFactory<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
        script: DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
        section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        select: DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
        small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        source: DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
        span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
        strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        style: DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
        sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        table: DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
        template: DetailedHTMLFactory<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
        tbody: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        td: DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
        textarea: DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
        tfoot: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        th: DetailedHTMLFactory<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
        thead: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        time: DetailedHTMLFactory<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
        title: DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
        tr: DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
        track: DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
        u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
        "var": DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        video: DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
        wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        webview: DetailedHTMLFactory<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;
    }

    interface ReactSVG {
        animate: SVGFactory;
        circle: SVGFactory;
        clipPath: SVGFactory;
        defs: SVGFactory;
        desc: SVGFactory;
        ellipse: SVGFactory;
        feBlend: SVGFactory;
        feColorMatrix: SVGFactory;
        feComponentTransfer: SVGFactory;
        feComposite: SVGFactory;
        feConvolveMatrix: SVGFactory;
        feDiffuseLighting: SVGFactory;
        feDisplacementMap: SVGFactory;
        feDistantLight: SVGFactory;
        feDropShadow: SVGFactory;
        feFlood: SVGFactory;
        feFuncA: SVGFactory;
        feFuncB: SVGFactory;
        feFuncG: SVGFactory;
        feFuncR: SVGFactory;
        feGaussianBlur: SVGFactory;
        feImage: SVGFactory;
        feMerge: SVGFactory;
        feMergeNode: SVGFactory;
        feMorphology: SVGFactory;
        feOffset: SVGFactory;
        fePointLight: SVGFactory;
        feSpecularLighting: SVGFactory;
        feSpotLight: SVGFactory;
        feTile: SVGFactory;
        feTurbulence: SVGFactory;
        filter: SVGFactory;
        foreignObject: SVGFactory;
        g: SVGFactory;
        image: SVGFactory;
        line: SVGFactory;
        linearGradient: SVGFactory;
        marker: SVGFactory;
        mask: SVGFactory;
        metadata: SVGFactory;
        path: SVGFactory;
        pattern: SVGFactory;
        polygon: SVGFactory;
        polyline: SVGFactory;
        radialGradient: SVGFactory;
        rect: SVGFactory;
        stop: SVGFactory;
        svg: SVGFactory;
        switch: SVGFactory;
        symbol: SVGFactory;
        text: SVGFactory;
        textPath: SVGFactory;
        tspan: SVGFactory;
        use: SVGFactory;
        view: SVGFactory;
    }

    interface ReactDOM extends ReactHTML, ReactSVG { }

    //
    // React.PropTypes
    // ----------------------------------------------------------------------

    type Validator<T> = PropTypes.Validator<T>;

    type Requireable<T> = PropTypes.Requireable<T>;

    type ValidationMap<T> = PropTypes.ValidationMap<T>;

    type WeakValidationMap<T> = {
        [K in keyof T]?: null extends T[K]
            ? Validator<T[K] | null | undefined>
            : undefined extends T[K]
            ? Validator<T[K] | null | undefined>
            : Validator<T[K]>
    };

    interface ReactPropTypes {
        any: typeof PropTypes.any;
        array: typeof PropTypes.array;
        bool: typeof PropTypes.bool;
        func: typeof PropTypes.func;
        number: typeof PropTypes.number;
        object: typeof PropTypes.object;
        string: typeof PropTypes.string;
        node: typeof PropTypes.node;
        element: typeof PropTypes.element;
        instanceOf: typeof PropTypes.instanceOf;
        oneOf: typeof PropTypes.oneOf;
        oneOfType: typeof PropTypes.oneOfType;
        arrayOf: typeof PropTypes.arrayOf;
        objectOf: typeof PropTypes.objectOf;
        shape: typeof PropTypes.shape;
        exact: typeof PropTypes.exact;
    }

    //
    // React.Children
    // ----------------------------------------------------------------------

    /**
     * @deprecated - Use `typeof React.Children` instead.
     */
    // Sync with type of `const Children`.
    interface ReactChildren {
        map<T, C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => T):
            C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
        forEach<C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => void): void;
        count(children: any): number;
        only<C>(children: C): C extends any[] ? never : C;
        toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
    }

    //
    // Browser Interfaces
    // https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
    // ----------------------------------------------------------------------

    interface AbstractView {
        styleMedia: StyleMedia;
        document: Document;
    }

    interface Touch {
        identifier: number;
        target: EventTarget;
        screenX: number;
        screenY: number;
        clientX: number;
        clientY: number;
        pageX: number;
        pageY: number;
    }

    interface TouchList {
        [index: number]: Touch;
        length: number;
        item(index: number): Touch;
        identifiedTouch(identifier: number): Touch;
    }

    //
    // Error Interfaces
    // ----------------------------------------------------------------------
    interface ErrorInfo {
        /**
         * Captures which component contained the exception, and its ancestors.
         */
        componentStack: string;
    }
}

// naked 'any' type in a conditional type will short circuit and union both the then/else branches
// so boolean is only resolved for T = any
type IsExactlyAny<T> = boolean extends (T extends never ? true : false) ? true : false;

type ExactlyAnyPropertyKeys<T> = { [K in keyof T]: IsExactlyAny<T[K]> extends true ? K : never }[keyof T];
type NotExactlyAnyPropertyKeys<T> = Exclude<keyof T, ExactlyAnyPropertyKeys<T>>;

// Try to resolve ill-defined props like for JS users: props can be any, or sometimes objects with properties of type any
type MergePropTypes<P, T> =
    // Distribute over P in case it is a union type
    P extends any
        // If props is type any, use propTypes definitions
        ? IsExactlyAny<P> extends true ? T :
            // If declared props have indexed properties, ignore inferred props entirely as keyof gets widened
            string extends keyof P ? P :
                // Prefer declared types which are not exactly any
                & Pick<P, NotExactlyAnyPropertyKeys<P>>
                // For props which are exactly any, use the type inferred from propTypes if present
                & Pick<T, Exclude<keyof T, NotExactlyAnyPropertyKeys<P>>>
                // Keep leftover props not specified in propTypes
                & Pick<P, Exclude<keyof P, keyof T>>
        : never;

type InexactPartial<T> = { [K in keyof T]?: T[K] | undefined };

// Any prop that has a default prop becomes optional, but its type is unchanged
// Undeclared default props are augmented into the resulting allowable attributes
// If declared props have indexed properties, ignore default props entirely as keyof gets widened
// Wrap in an outer-level conditional type to allow distribution over props that are unions
type Defaultize<P, D> = P extends any
    ? string extends keyof P ? P :
        & Pick<P, Exclude<keyof P, keyof D>>
        & InexactPartial<Pick<P, Extract<keyof P, keyof D>>>
        & InexactPartial<Pick<D, Exclude<keyof D, keyof P>>>
    : never;

type ReactManagedAttributes<C, P> = C extends { propTypes: infer T; defaultProps: infer D; }
    ? Defaultize<MergePropTypes<P, PropTypes.InferProps<T>>, D>
    : C extends { propTypes: infer T; }
        ? MergePropTypes<P, PropTypes.InferProps<T>>
        : C extends { defaultProps: infer D; }
            ? Defaultize<P, D>
            : P;

declare global {
    namespace JSX {
        interface Element extends React.ReactElement<any, any> { }
        interface ElementClass extends React.Component<any> {
            render(): React.ReactNode;
        }
        interface ElementAttributesProperty { props: {}; }
        interface ElementChildrenAttribute { children: {}; }

        // We can't recurse forever because `type` can't be self-referential;
        // let's assume it's reasonable to do a single React.lazy() around a single React.memo() / vice-versa
        type LibraryManagedAttributes<C, P> = C extends React.MemoExoticComponent<infer T> | React.LazyExoticComponent<infer T>
            ? T extends React.MemoExoticComponent<infer U> | React.LazyExoticComponent<infer U>
                ? ReactManagedAttributes<U, P>
                : ReactManagedAttributes<T, P>
            : ReactManagedAttributes<C, P>;

        interface IntrinsicAttributes extends React.Attributes { }
        interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> { }

        interface IntrinsicElements {
            // HTML
            a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            address: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            area: React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            base: React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            big: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            body: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            center: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            code: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            col: React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
            datalist: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            del: React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
            details: React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
            dfn: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
            div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            em: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            form: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: React.DetailedHTMLProps<React.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            map: React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
            nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            object: React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
            p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            s: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            slot: React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
            script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            select: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            source: React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            style: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            template: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;
            tbody: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
            title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            video: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            webview: React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>;

            // SVG
            svg: React.SVGProps<SVGSVGElement>;

            animate: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
            animateMotion: React.SVGProps<SVGElement>;
            animateTransform: React.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
            circle: React.SVGProps<SVGCircleElement>;
            clipPath: React.SVGProps<SVGClipPathElement>;
            defs: React.SVGProps<SVGDefsElement>;
            desc: React.SVGProps<SVGDescElement>;
            ellipse: React.SVGProps<SVGEllipseElement>;
            feBlend: React.SVGProps<SVGFEBlendElement>;
            feColorMatrix: React.SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: React.SVGProps<SVGFEComponentTransferElement>;
            feComposite: React.SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: React.SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: React.SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: React.SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: React.SVGProps<SVGFEDistantLightElement>;
            feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
            feFlood: React.SVGProps<SVGFEFloodElement>;
            feFuncA: React.SVGProps<SVGFEFuncAElement>;
            feFuncB: React.SVGProps<SVGFEFuncBElement>;
            feFuncG: React.SVGProps<SVGFEFuncGElement>;
            feFuncR: React.SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
            feImage: React.SVGProps<SVGFEImageElement>;
            feMerge: React.SVGProps<SVGFEMergeElement>;
            feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
            feMorphology: React.SVGProps<SVGFEMorphologyElement>;
            feOffset: React.SVGProps<SVGFEOffsetElement>;
            fePointLight: React.SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: React.SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: React.SVGProps<SVGFESpotLightElement>;
            feTile: React.SVGProps<SVGFETileElement>;
            feTurbulence: React.SVGProps<SVGFETurbulenceElement>;
            filter: React.SVGProps<SVGFilterElement>;
            foreignObject: React.SVGProps<SVGForeignObjectElement>;
            g: React.SVGProps<SVGGElement>;
            image: React.SVGProps<SVGImageElement>;
            line: React.SVGProps<SVGLineElement>;
            linearGradient: React.SVGProps<SVGLinearGradientElement>;
            marker: React.SVGProps<SVGMarkerElement>;
            mask: React.SVGProps<SVGMaskElement>;
            metadata: React.SVGProps<SVGMetadataElement>;
            mpath: React.SVGProps<SVGElement>;
            path: React.SVGProps<SVGPathElement>;
            pattern: React.SVGProps<SVGPatternElement>;
            polygon: React.SVGProps<SVGPolygonElement>;
            polyline: React.SVGProps<SVGPolylineElement>;
            radialGradient: React.SVGProps<SVGRadialGradientElement>;
            rect: React.SVGProps<SVGRectElement>;
            stop: React.SVGProps<SVGStopElement>;
            switch: React.SVGProps<SVGSwitchElement>;
            symbol: React.SVGProps<SVGSymbolElement>;
            text: React.SVGProps<SVGTextElement>;
            textPath: React.SVGProps<SVGTextPathElement>;
            tspan: React.SVGProps<SVGTSpanElement>;
            use: React.SVGProps<SVGUseElement>;
            view: React.SVGProps<SVGViewElement>;
        }
    }
}
}