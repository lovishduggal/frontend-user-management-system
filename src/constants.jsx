import { capitalizeFLetter } from './utils';

export const PER_PAGE = 5;

export const columns = [
    {
        title: 'First Name',
        dataIndex: 'firstName',
        render: (text, record) => {
            return capitalizeFLetter(record.firstName);
        },
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        render: (text, record) => {
            return capitalizeFLetter(record.lastName);
        },
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        responsive: ['sm'],
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        responsive: ['sm'],
        render: (text, record) => {
            return capitalizeFLetter(record.gender);
        },
    },
];
