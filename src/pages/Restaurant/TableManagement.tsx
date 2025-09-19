import { useState } from "react";
import { Table, Button, Pagination, Image, Space } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Search } from "lucide-react";
import CustomModal from "@/components/ui/custom-modal";
import AddUpdateTable from "./AddUpdateTable";
import { QRCodeSVG } from "qrcode.react";

const restaurantOptions = [
    { label: "ZappQ Diner", value: "ZappQ Diner" },
    { label: "Aimsoft Cafe", value: "Aimsoft Cafe" },
];

const dummyTables = [
    {
        key: "1",
        restaurant: "ZappQ Diner",
        tableNumber: "T-01",
    },
    {
        key: "2",
        restaurant: "Aimsoft Cafe",
        tableNumber: "T-02",
    },
    {
        key: "3",
        restaurant: "ZappQ Diner",
        tableNumber: "T-03",
    },
];

const TableManagement = () => {
    const [search, setSearch] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState(dummyTables);
    const [current, setCurrent] = useState(1);
    const pageSize = 5;

    const filteredData = data.filter(
        (item) =>
            item.restaurant.toLowerCase().includes(search.toLowerCase()) ||
            item.tableNumber.toLowerCase().includes(search.toLowerCase())
    );

    const columns = [
        { title: "Restaurant Name", dataIndex: "restaurant", key: "restaurant" },
        { title: "Table Number", dataIndex: "tableNumber", key: "tableNumber" },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (_, record) => {
                const qrData = JSON.stringify({ restaurant: record?.restaurant, tableNumber: record?.tableNumber });
                return (
                    <QRCodeSVG value={qrData} size={50} />
                )
            },
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Button icon={<EditOutlined />} type="link" />
                    <Button icon={<DeleteOutlined />} type="link" danger />
                </Space>
            ),
        },
    ];

    // Handles data when AddUpdateTable form is submitted
    const handleAddTable = (values) => {
        setData([
            ...data,
            {
                key: (data.length + 1).toString(),
                restaurant: values.restaurant,
                tableNumber: values.tableNumber,
            },
        ]);
        setModalVisible(false);
    };

    return (
        <div style={{ padding: 24 }}>
            {/* Search & Add Button */}
            <div className="w-full flex justify-between mb-6">
                <div className="w-full max-w-md">
                    <div className="w-full relative flex items-center">
                        <span className="absolute left-3 text-muted-foreground">
                            <Search size={18} />
                        </span>
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

            {/* Table */}
            <Table
                columns={columns}
                dataSource={filteredData.slice((current - 1) * pageSize, current * pageSize)}
                pagination={false}
                rowKey="key"
            />

            {/* Pagination */}
            <div style={{ marginTop: 16, textAlign: "right" }}>
                <Pagination
                    current={current}
                    pageSize={pageSize}
                    total={filteredData.length}
                    onChange={setCurrent}
                    showSizeChanger={false}
                />
            </div>

            {/* Add Update Table */}
            <CustomModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            >
                <AddUpdateTable restaurantOptions={restaurantOptions} onSubmit={handleAddTable} />
            </CustomModal>
        </div>
    );
};

export default TableManagement;
