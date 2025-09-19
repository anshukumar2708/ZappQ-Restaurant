import { Form, Input, Button, Select } from "antd";
const { Option } = Select;

const AddUpdateTable = ({ restaurantOptions, onSubmit }) => {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        onSubmit(values);
        form.resetFields();
    };

    return (
        <Form form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item
                label="Restaurant Name"
                name="restaurant"
                rules={[{ required: true, message: "Please select a restaurant" }]}
            >
                <Select placeholder="Select restaurant" style={{ width: "100%" }}>
                    {restaurantOptions.map((r) => (
                        <Option key={r.value} value={r.value}>
                            {r.label}
                        </Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item
                label="Table Number"
                name="tableNumber"
                rules={[{ required: true, message: "Please enter table number" }]}
            >
                <Input placeholder="Enter table number" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add Table
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddUpdateTable;
