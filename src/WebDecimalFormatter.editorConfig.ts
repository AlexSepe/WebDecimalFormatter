import { WebDecimalFormatterPreviewProps } from "../typings/WebDecimalFormatterProps";
import { hidePropertyIn, Problem, Properties } from "@mendix/pluggable-widgets-tools";

export function getProperties(_values: WebDecimalFormatterPreviewProps, defaultProperties: Properties): Properties {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.

    if (_values.valueSourceType === "attribute") {
        hidePropertyIn(defaultProperties, _values, "valueExpression");
    } else {
        hidePropertyIn(defaultProperties, _values, "input");
    }

    return defaultProperties;
}

export function check(_values: WebDecimalFormatterPreviewProps): Problem[] {
    const errors: Problem[] = [];
    if (_values.valueSourceType === "attribute" && !_values.input) {
        errors.push({
            property: `input`,
            message: `Select an attribute for this WebDecimalFormatter'.`
        });
    }
    if (_values.valueSourceType === "expression" && !_values.valueExpression) {
        errors.push({
            property: `expression`,
            message: `Select an expression for this WebDecimalFormatter'.`
        });
    }

    return errors;
}
