import { Component, ReactNode, createElement } from "react";

import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";

import { BadgeSample, BadgeSampleProps } from "./components/BadgeSample";
import { WebDecimalFormatterPreviewProps } from "../typings/WebDecimalFormatterProps";
import { money } from "./Money";

export class preview extends Component<WebDecimalFormatterPreviewProps> {
    render(): ReactNode {
        return (
            <div ref={this.parentInline}>
                <BadgeSample {...this.transformProps(this.props)}></BadgeSample>
            </div>
        );
    }

    private parentInline(node?: HTMLElement | null): void {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement && node.parentElement.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }

    private transformProps(props: WebDecimalFormatterPreviewProps): BadgeSampleProps {
        const decimalValue = money(
            123456.789,
            props.decimalSeparator,
            props.thousandsSeparator,
            props.decimalCount || 2
        );

        return {
            type: props.webdecimalformatterType,
            bootstrapStyle: props.bootstrapStyle,
            className: props.className,
            clickable: false,
            style: parseInlineStyle(props.style),
            value: decimalValue
        };
    }
}

export function getPreviewCss(): string {
    return require("./ui/WebDecimalFormatter.css");
}
