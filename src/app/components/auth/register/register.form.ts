import { FormlyFieldConfig } from '@ngx-formly/core';
import { EMAIL_REGEX, regexValidator } from '../../widgets/forms/validators';

export const PROFILE_FORM: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'row',
    className: 'col-5',
    wrappers: ['section'],
    props: {
      label: 'labels.register',
    },
    fieldGroup: [
      /* {
        key: 'picture',
        className: 'col-12 col-sm-12',

        type: 'file-upload',
        props: {
          label: 'Upload Documents',
          multiple: true,
        },
      },
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
        },
      },*/
      {
        key: 'email',
        type: 'input',
        className: 'col-12',
        props: {
          label: 'labels.email',
          type: 'text',
          required: true,
          placeholder: 'placeholder.email',
        },

        validators: {
          validation: [regexValidator(EMAIL_REGEX, 'regex-validator')],
        },
      },
      {
        key: 'password',
        type: 'input',
        className: 'col-12',
        props: {
          label: 'labels.password',
          type: 'password',
          required: true,
          placeholder: 'placeholder.password',
        },
      },
      {
        key: 'password_confirmation',
        type: 'input',
        className: 'col-12',
        props: {
          label: 'labels.password_confirm',
          type: 'password',
          required: true,
          placeholder: 'placeholder.password_confirm',
        },
        validators: {
          fieldMatch: {
            expression: (control: any, field: any) => {
              const password =
                field?.formControl?.parent?.get('password')?.value;
              const passwordConfirmation = control.value;
              return password === passwordConfirmation;
            },
            message: 'errors.password_missmatch',
          },
        },
      },
    ],
  },
];
