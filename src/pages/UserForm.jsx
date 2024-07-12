import {
    Button,
    Col,
    Form,
    Input,
    InputNumber,
    Modal,
    Row,
    Select,
} from 'antd';

const TitleText = () => {
    return (
        <div style={{ paddingBottom: '10px' }}>
            <h2>Add User</h2>
            <h5 style={{ fontWeight: 'normal' }}>
                Enter details of the new user
            </h5>
        </div>
    );
};
const UserForm = ({ openModel, handleCancel, loading, handleSubmit }) => {
    return (
        <Modal
            open={openModel}
            title={<TitleText />}
            onCancel={handleCancel}
            footer={[
                <Button
                    key="save"
                    type="primary"
                    loading={loading}
                    onClick={handleSubmit}>
                    Save
                </Button>,
                <Button key="cancel" onClick={handleCancel}>
                    Cancel
                </Button>,
            ]}>
            <Row gutter={20} span={24}>
                <Col span={12}>
                    <Form.Item
                        layout="vertical"
                        label={'First Name'}
                        name="firstName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your first name!',
                            },
                        ]}>
                        <Input placeholder="Enter first name" size="middle" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    {' '}
                    <Form.Item
                        layout="vertical"
                        label={'Last name'}
                        name="lastName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your last name!',
                            },
                        ]}>
                        <Input placeholder="Enter last name" size="middle" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        layout="vertical"
                        label={'Email'}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: 'email',
                                message: 'Invalid email!',
                            },
                        ]}>
                        <Input placeholder="Enter email" size="middle" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        layout="vertical"
                        style={{ height: '0px' }}
                        label={'Age'}
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your first age!',
                            },
                        ]}>
                        <InputNumber
                            min={1}
                            max={100}
                            style={{ width: '100%' }}
                            size="middle"
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    {' '}
                    <Form.Item
                        layout="vertical"
                        style={{ paddingBottom: '0px' }}
                        label={'Gender'}
                        name="gender"
                        rules={[
                            {
                                required: true,
                                message: 'Please select gender!',
                            },
                        ]}>
                        <Select
                            id="selectBoxInUserForm"
                            size="middle"
                            placeholder={'Gender'}
                            allowClear
                            onChange={() => {}}>
                            <Select.Option value="male" children={'Male'} />
                            <Select.Option value="female" children={'Female'} />
                            <Select.Option value="other" children={'Other'} />
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        </Modal>
    );
};
export default UserForm;
