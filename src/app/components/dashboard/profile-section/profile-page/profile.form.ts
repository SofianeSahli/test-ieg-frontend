import { FormlyFieldConfig } from '@ngx-formly/core';
import { EMAIL_REGEX, regexValidator } from '../../../widgets/forms/validators';

export const PROFILE_FORM: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'row',
    wrappers: ['section'],
    props: {
      label: 'props.profile_info',
    },
    fieldGroup: [
      {
        key: 'file',
        type: 'file-upload',
        className: 'col-12',
        props: {
          label: 'Post Picture',
          description: 'Upload a picture for your post',
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
          validation: [regexValidator(EMAIL_REGEX, 'regex-validator')],
        },
      },
    ],
  },
];
