import { useState } from "react";
import { Table, Button, Input, Modal, Form, Select, Pagination, Image, Space } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Search } from "lucide-react";

const { Option } = Select;

const primaryColor = "#1890ff";

// Dummy data
const restaurantOptions = [
    { label: "ZappQ Diner", value: "ZappQ Diner" },
    { label: "Aimsoft Cafe", value: "Aimsoft Cafe" },
];

const dummyTables = [
    {
        key: "1",
        restaurant: "ZappQ Diner",
        tableNumber: "T01",
        image: "https://via.placeholder.com/40",
    },
    {
        key: "2",
        restaurant: "Aimsoft Cafe",
        tableNumber: "T02",
        image: "https://via.placeholder.com/40",
    },
    {
        key: "3",
        restaurant: "ZappQ Diner",
        tableNumber: "T03",
        image: "https://via.placeholder.com/40",
    },
];

const TableManagement = () => {
    const [search, setSearch] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [data, setData] = useState(dummyTables);
    const [current, setCurrent] = useState(1);
    const pageSize = 5;

    const filteredData = data.filter(
        (item) =>
            item.restaurant.toLowerCase().includes(search.toLowerCase()) ||
            item.tableNumber.toLowerCase().includes(search.toLowerCase())
    );

    const columns = [
        {
            title: "Restaurant Name",
            dataIndex: "restaurant",
            key: "restaurant",
        },
        {
            title: "Table Number",
            dataIndex: "tableNumber",
            key: "tableNumber",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (src: string) => <Image src={src} width={40} height={40} />,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Button
                        icon={<EditOutlined />}
                        type="link"
                        style={{ color: primaryColor }}
                    >
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        type="link"
                        danger
                    >
                    </Button>
                </Space>
            ),
        },
    ];

    const handleAddTable = (values) => {
        setData([
            ...data,
            {
                key: (data.length + 1).toString(),
                restaurant: values.restaurant,
                tableNumber: values.tableNumber,
                image: values.image || "https://via.placeholder.com/40",
            },
        ]);
        setModalVisible(false);
        form.resetFields();
    };

    return (
        <div style={{ padding: 24 }}>
            <div className="w-full flex justify-between mb-6">
                <div className="w-full max-w-md">
                    <div className="w-full relative flex items-center">
                        {/* Search Icon */}
                        <span className="absolute left-3 text-muted-foreground">
                            <Search size={18} />
                        </span>
                        {/* Input Field */}
                        <input
                            placeholder="Search tables"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full border border-primary text-black rounded-md pl-10 pr-4 py-1.5 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
                        />
                    </div>
                </div>
                <button
                    className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-md transition hover:bg-transparent hover:text-primary border-2 hover:border-primary hover:shadow-lg"
                    onClick={() => setModalVisible(true)}
                >
                    <PlusOutlined className="text-md" />
                    Add Table
                </button>
            </div>
            <Table
                columns={columns}
                dataSource={filteredData.slice((current - 1) * pageSize, current * pageSize)}
                pagination={false}
                rowKey="key"
            />
            <div style={{ marginTop: 16, textAlign: "right" }}>
                <Pagination
                    current={current}
                    pageSize={pageSize}
                    total={filteredData.length}
                    onChange={setCurrent}
                    showSizeChanger={false}
                />
            </div>
            <Modal
                title="Add Table"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
                destroyOnClose
            >
                <Form form={form} layout="vertical" onFinish={handleAddTable}>
                    <Form.Item
                        label="Restaurant Name"
                        name="restaurant"
                        rules={[{ required: true, message: "Please select a restaurant" }]}
                    >
                        <Select
                            placeholder="Select restaurant"
                            style={{ width: "100%" }}
                            dropdownStyle={{ color: primaryColor }}
                        >
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
                    <Form.Item label="Image URL" name="image">
                        <Input placeholder="Enter image URL (optional)" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                                background: primaryColor,
                                borderColor: primaryColor,
                                width: "100%",
                            }}
                        >
                            Add Table
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default TableManagement;