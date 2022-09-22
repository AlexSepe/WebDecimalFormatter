import { WebDecimalFormatterPreviewProps } from "../typings/WebDecimalFormatterProps";
import { hidePropertyIn } from "@mendix/pluggable-widgets-tools";

type Properties = PropertyGroup[];

type PropertyGroup = {
    caption: string;
    propertyGroups?: PropertyGroup[];
    properties?: Property[];
};

type Property = {
    key: string;
    caption: string;
    description?: string;
    objectHeaders?: string[]; // used for customizing object grids
    objects?: ObjectProperties[];
    properties?: Properties[];
};

type Problem = {
    property?: string; // key of the property, at which the problem exists
    severity?: "error" | "warning" | "deprecation"; // default = "error"
    message: string; // description of the problem
    studioMessage?: string; // studio-specific message, defaults to message
    url?: string; // link with more information about the problem
    studioUrl?: string; // studio-specific link
};

type ObjectProperties = {
    properties: PropertyGroup[];
    captions?: string[]; // used for customizing object grids
};

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
