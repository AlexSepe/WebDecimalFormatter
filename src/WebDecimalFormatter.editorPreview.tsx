import { Component, ReactNode, createElement } from "react";

import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";

import { BadgeWebDecimal, BadgeWebDecimalProps } from "./components/BadgeWebDecimal";
import { WebDecimalFormatterPreviewProps } from "../typings/WebDecimalFormatterProps";
import { money } from "./Money";

export class preview extends Component<WebDecimalFormatterPreviewProps> {
    render(): ReactNode {
        return (
            // <div ref={this.parentInline}>
            <BadgeWebDecimal {...this.transformProps(this.props)}></BadgeWebDecimal>
            // </div>
        );
    }

    // private parentInline(node?: HTMLElement | null): void {
    //     // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    //     if (node && node.parentElement && node.parentElement.parentElement) {
    //         node.parentElement.parentElement.style.display = "inline-block";
    //     }
    // }

    private transformProps(props: WebDecimalFormatterPreviewProps): BadgeWebDecimalProps {
        const decimalValue = money(
            123456.789,
            props.decimalSeparator.replaceAll("'", ""),
            props.thousandsSeparator.replaceAll("'", ""),
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
