import { AutoComplete, Button, Card, Col, Flex, Form, Row, Table } from 'antd';
import { columns } from '../constants';
import UserFilter from './UserFilter';
import { useMemo } from 'react';
import { debounce } from 'lodash';

const options = [
    {
        value: 'Burns Bay Road',
    },
    {
        value: 'Downing Street',
    },
    {
        value: 'Wall Street',
    },
];

const Users = ({ users, queryParams, setQueryParams }) => {
    const [filterForm] = Form.useForm();

    const debounceQUpdate = useMemo(() => {
        return debounce((q) => {
            setQueryParams((prev) => {
                return { ...prev, q, currentPage: 1 };
            });
        }, 500);
    }, []);

    const onFilterChange = (changeFields) => {
        const changedFilterFields = changeFields
            .map((item) => ({
                [item.name[0]]: item.value,
            }))
            .reduce((prev, curr) => ({ ...prev, ...curr }), {});

        if ('q' in changedFilterFields) {
            debounceQUpdate(changedFilterFields.q);
        } else {
            setQueryParams((prev) => {
                return { ...prev, ...changedFilterFields, currentPage: 1 };
            });
        }
    };

    return (
        <Row style={{ height: '100vh' }} justify={'center'}>
            <Col
                xs={24}
                lg={16}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Flex
                    vertical
                    style={{
                        width: '100%',
                        margin: '10px',
                    }}>
                    <Form
                        form={filterForm}
                        onFieldsChange={onFilterChange}
                        style={{ marginBottom: '25px' }}>
                        <UserFilter searchedUsers={users}>
                            <Button>Add User</Button>
                        </UserFilter>
                    </Form>
                    <Card bordered={true}>
                        <Flex vertical style={{ marginBottom: '20px' }}>
                            <h1>User Details</h1>
                            <h6>View and Manage user information</h6>
                        </Flex>
                        <Table
                            loading={
                                users?.data?.length !== 0 && users?.data
                                    ? false
                                    : true
                            }
                            rowKey={'_id'}
                            columns={columns}
                            dataSource={users?.data}
                            size="small"
                            pagination={{
                                total: users?.totalCount,
                                pageSize: queryParams.perPage,
                                current: queryParams.currentPage,
                                onChange: (page) => {
                                    console.log(page);
                                    setQueryParams((prev) => {
                                        return { ...prev, currentPage: page };
                                    });
                                },
                                showTotal: (total, range) =>
                                    `Showing ${range[0]}-${range[1]} of ${total} items`,
                            }}
                        />
                    </Card>
                </Flex>
            </Col>
        </Row>
    );
};
export default Users;
