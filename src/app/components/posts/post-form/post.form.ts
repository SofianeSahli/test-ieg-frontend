import { FormlyFieldConfig } from '@ngx-formly/core';
export const fields: FormlyFieldConfig[] = [
  {
    wrappers: ['section'],
    props: {
      label: 'Exprimez vous',
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
        key: 'title',
        type: 'input',
        className: 'col-md-6',
        props: {
          label: 'Title',
          placeholder: 'Enter title',
          required: true,
        },
      },

      {
        key: 'tags',
        type: 'select',
        className: 'col-md-6',
        props: {
          label: 'Tags',
          placeholder: 'Select tags',
          multiple: true,
          allowAdd: true,
          options: [
            { label: 'Angular', value: 'angular' },
            { label: 'TypeScript', value: 'typescript' },
            { label: 'MongoDB', value: 'mongodb' },
            { label: 'Elasticsearch', value: 'elasticsearch' },
          ],
        },
      },
      {
        key: 'text',
        type: 'input',
        className: 'col-md-12',
        props: {
          type: 'textarea',
          label: 'Content',
          placeholder: 'Write your post content...',
          required: true,
          rows: 4,
        },
      },
    ],
  },
];
