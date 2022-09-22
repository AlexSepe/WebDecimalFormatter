/**
 * This file was generated from WebDecimalFormatter.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type ValueSourceTypeEnum = "attribute" | "expression";

export type BootstrapStyleEnum = "none" | "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export type WebdecimalformatterTypeEnum = "badge" | "label" | "text";

export interface WebDecimalFormatterContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    valueSourceType: ValueSourceTypeEnum;
    valueExpression?: DynamicValue<Big>;
    input?: EditableValue<Big | string>;
    preffix: string;
    suffix: string;
    thousandsSeparator: DynamicValue<string>;
    decimalSeparator: DynamicValue<string>;
    decimalCount: number;
    bootstrapStyle: BootstrapStyleEnum;
    webdecimalformatterType: WebdecimalformatterTypeEnum;
    onClickAction?: ActionValue;
}

export interface WebDecimalFormatterPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    valueSourceType: ValueSourceTypeEnum;
    valueExpression: string;
    input: string;
    preffix: string;
    suffix: string;
    thousandsSeparator: string;
    decimalSeparator: string;
    decimalCount: number | null;
    bootstrapStyle: BootstrapStyleEnum;
    webdecimalformatterType: WebdecimalformatterTypeEnum;
    onClickAction: {} | null;
}
