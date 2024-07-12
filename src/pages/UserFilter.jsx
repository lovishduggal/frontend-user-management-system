import { AutoComplete, Flex, Form } from 'antd';

const UserFilter = ({ searchedUsers, children }) => {
    const manipulatedSearchedUsers = searchedUsers?.data?.map((user) => {
        return {
            key: user._id,
            label: `${user.firstName} ${user.lastName}`,
            value: `${user.firstName} ${user.lastName}`,
        };
    });
    return (
        <Flex justify="space-between">
            <Form.Item name="q" style={{ height: '0px' }}>
                <AutoComplete
                    allowClear
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
