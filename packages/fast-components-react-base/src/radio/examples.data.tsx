import * as React from "react";
import Radio, { IRadioHandledProps, IRadioManagedClasses, IRadioUnhandledProps } from "./radio";
import schema from "./radio.schema.json";
import Documentation from "./.tmp/documentation";
import { IComponentFactoryExample } from "@microsoft/fast-development-site-react";
import Label from "../label";
import labelSchema from "../label/label.schema.json";

const classes: IRadioManagedClasses = {
    managedClasses: {
        radio: "radio",
        radio__disabled: "radio__disabled",
        radio_input: "radio_input",
        radio_stateIndicator: "radio_stateIndicator"
    }
};

const slotRadioExample: any = {
    id: labelSchema.id,
    props: {
        slot: "label",
        htmlFor: "radio01"
    }
};

const examples: IComponentFactoryExample<IRadioHandledProps & IRadioManagedClasses> = {
    name: "Radio",
    component: Radio,
    schema: schema as any,
    documentation: <Documentation />,
    detailData: {
        id: "radio01",
        ...classes,
        checked: true,
        children: slotRadioExample
    },
    data: [
        {
            id: "checked_true",
            ...classes,
            checked: true
        },
        {
            id: "checked_false",
            ...classes,
            checked: false
        },
        {
            id: "checked_none",
            ...classes
        },
        {
            id: "disabled",
            ...classes,
            disabled: true
        }
    ]
};

export default examples;
