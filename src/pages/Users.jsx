import { Button, Card, Col, Flex, Form, Row, Table } from 'antd';
import { columns } from '../constants';
import UserFilter from './UserFilter';
import { useMemo, useState } from 'react';
import { debounce, set } from 'lodash';
import UserForm from './UserForm';
import { createUser, getAllUser } from '../http/api';
import toast from 'react-hot-toast';

const Users = ({ users, queryParams, getAllUserData, setQueryParams }) => {
    const [filterForm] = Form.useForm();
    const [form] = Form.useForm();
    const [openModel, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCancel = () => {
        setModalOpen(false);
        setLoading(false);
    };

    const handleSubmit = async () => {
        try {
            await form.validateFields();

            setLoading(true);

            const formData = form.getFieldsValue();
            await createUser(formData);
            await getAllUserData();

            setModalOpen(false);
            form.resetFields();
        } catch (error) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('All fields are required.');
            }
        } finally {
            setLoading(false);
        }
    };

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
                [item.name[0]]: item?.value?.replace(/\s/g, ''),
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
                            <Button onClick={() => setModalOpen(true)}>
                                Add User
                            </Button>
                        </UserFilter>
                    </Form>
                    <Card bordered={true}>
                        <Flex vertical style={{ marginBottom: '20px' }}>
                            <h1>User Details</h1>
                            <h5 style={{ fontWeight: 'normal' }}>
                                View and Manage user information
                            </h5>
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
                                    setQueryParams((prev) => {
                                        return { ...prev, currentPage: page };
                                    });
                                },
                                showTotal: (total, range) =>
                                    `Showing ${range[0]}-${range[1]} of ${total} items`,
                            }}
                        />
                        <Form form={form}>
                            <UserForm
                                openModel={openModel}
                                handleCancel={handleCancel}
                                loading={loading}
                                handleSubmit={handleSubmit}></UserForm>
                        </Form>
                    </Card>
                </Flex>
            </Col>
        </Row>
    );
};
export default Users;
