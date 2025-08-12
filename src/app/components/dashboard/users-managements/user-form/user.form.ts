import { FormlyFieldConfig } from "@ngx-formly/core";
import { EMAIL_REGEX, regexValidator } from "../../../widgets/forms/validators";

export const PROFILE_FORM: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'row',
    fieldGroup: [
        {
            className: 'col-sm-12 col-md-6',
            key: 'firstName',
            type: 'input',
            props: {
                label: 'labels.first_name',
                type: 'text',
                required: true,
                placeholder: 'placeholder.first_name',
            },
        },
        {
            key: 'lastName',
            type: 'input',
            className: 'col-sm-12 col-md-6',
            props: {
                label: 'labels.last_name',
                type: 'text',
                required: true,
                placeholder: 'placeholder.last_name',
            }
        },
        {
            key: 'email',
            type: 'input',
            className: 'col-sm-12 col-md-6',
            props: {
                label: 'labels.email',
                type: 'text',
                required: true,
                placeholder: 'placeholder.email',
            },

            validators: {
                validation: [
                    regexValidator(EMAIL_REGEX, 'regex-validator'),
                ],
            },

        },
        {
            key: 'cin',
            type: 'input',
            className: 'col-sm-12 col-md-6',
            props: {
                label: 'labels.cin',
                type: 'number',
                required: true,
                placeholder: 'placeholder.cin',
            },
            validators: {
                validation: [
                    regexValidator(/^\d{8}$/, 'regex-validator'),
                ],
            },
        },
        {
            key: 'agencieId',
            type: 'select',
            className: 'col-sm-12 col-md-6',
            props: {
                label: 'labels.name_agence',
                options: [],
                required: true,
                placeholder: 'placeholder.name_agence',
            }
        }]
}
]