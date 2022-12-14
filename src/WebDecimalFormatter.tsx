import { Component, ReactNode, createElement } from "react";

import { WebDecimalFormatterContainerProps } from "../typings/WebDecimalFormatterProps";
import { BadgeWebDecimal } from "./components/BadgeWebDecimal";
import "./ui/WebDecimalFormatter.css";
import { money } from "./libs/Money";

export class WebDecimalFormatter extends Component<WebDecimalFormatterContainerProps> {
    private readonly onClickHandler = this.onClick.bind(this);

    render(): ReactNode {
        let displayValue = 0;
        let text = "";
        if (this.props.valueSourceType === "attribute") {
            const inputValue = this.props.input?.value;
            switch (typeof inputValue) {
                case "string":
                    displayValue = Number.parseFloat(inputValue);
                    break;
                case "object":
                    displayValue = Number(inputValue);
                    break;
            }
        } else {
            displayValue = Number(this.props.valueExpression?.value);
        }

        if (!isNaN(displayValue)) {
            const decimalValue = money(
                displayValue,
                this.props.decimalSeparator.value,
                this.props.thousandsSeparator.value,
                this.props.decimalCount
            );
            text = `${this.props.preffix}${decimalValue}${this.props.suffix}`;
        }

        return (
            <BadgeWebDecimal
                type={this.props.webdecimalformatterType}
                bootstrapStyle={this.props.bootstrapStyle}
                className={this.props.class}
                clickable={!!this.props.onClickAction}
                onClickAction={this.onClickHandler}
                style={this.props.style}
                value={text}
            ></BadgeWebDecimal>
        );
    }

    private onClick(): void {
        if (this.props.onClickAction && this.props.onClickAction.canExecute) {
            this.props.onClickAction.execute();
        }
    }
}
