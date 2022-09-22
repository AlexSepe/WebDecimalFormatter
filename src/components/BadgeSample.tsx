import { Component, ReactNode, CSSProperties, createElement } from "react";
import classNames from "classnames";

export interface BadgeSampleProps {
    type: "badge" | "label" | "text";
    className?: string;
    style?: CSSProperties;
    value?: string;
    bootstrapStyle?: BootstrapStyle;
    clickable?: boolean;
    onClickAction?: () => void;
    getRef?: (node: HTMLElement) => void;
}

export type BootstrapStyle = "none" | "default" | "info" | "inverse" | "primary" | "danger" | "success" | "warning";

export class BadgeSample extends Component<BadgeSampleProps> {
    render(): ReactNode {
        return (
            <span
                className={classNames("widget-webdecimalformatter", this.props.type, this.props.className, {
                    [`label-${this.props.bootstrapStyle}`]: !!this.props.bootstrapStyle,
                    "widget-webdecimalformatter-clickable": this.props.clickable
                })}
                onClick={this.props.onClickAction}
                ref={this.props.getRef}
                style={this.props.style}
            >
                {this.props.value}
            </span>
        );
    }
}
