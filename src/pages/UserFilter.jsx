import { AutoComplete, Flex, Form } from 'antd';
import { optionsExtra } from '../constants';
import { useState } from 'react';

const UserFilter = ({ searchedUsers, children }) => {
    const [filterUser, setFilterUser] = useState('');
    const manipulatedSearchedUsers = searchedUsers?.data?.map((user) => {
        return {
            id: user._id,
            value: user.firstName + ' ' + user.lastName,
        };
    });
    return (
        <Flex justify="space-between">
            <Form.Item name="q" style={{ height: '0px' }}>
                <AutoComplete
                    style={{
                        width: 200,
                    }}
                    placeholder="Search users..."
                    options={manipulatedSearchedUsers}></AutoComplete>
            </Form.Item>
            {children}
        </Flex>
    );
};
export default UserFilter;
