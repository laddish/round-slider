import { LitElement, TemplateResult, PropertyValues, CSSResultGroup } from "lit";
export declare class RoundSlider extends LitElement {
    value: number;
    high: number;
    low: number;
    min: number;
    max: number;
    step: number;
    startAngle: number;
    arcLength: number;
    handleSize: number;
    handleZoom: number;
    readonly: boolean;
    disabled: boolean;
    dragging: boolean;
    rtl: boolean;
    valueLabel: string;
    lowLabel: string;
    highLabel: string;
    private _scale;
    private _reverseOrder?;
    private _rotation?;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get _start();
    private get _len();
    private get _end();
    private get _showHandle();
    private _angleInside;
    private _angle2xy;
    private _xy2angle;
    private _value2angle;
    private _angle2value;
    private get _boundaries();
    private _mouse2value;
    dragStart(ev: TouchEvent | MouseEvent | FocusEvent): void;
    private _cleanupRotation;
    dragEnd(_ev: MouseEvent | TouchEvent | FocusEvent): void;
    drag(ev: TouchEvent | MouseEvent): void;
    private _calcAngle;
    private _calcTheta;
    private _calcAngle2xy;
    private _dragpos;
    private _keyStep;
    protected updated(changedProperties: PropertyValues): void;
    _renderArc(start: number, end: number): string;
    private _renderHandle;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
