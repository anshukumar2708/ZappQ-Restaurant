import { Modal } from "antd";

const CustomModal = ({ visible, onClose, children }) => {
    return (
        <Modal
            title="Add Table"
            open={visible}
            onCancel={onClose}
            footer={null}
            destroyOnClose
        >
            {children}
        </Modal>
    );
};

export default CustomModal;
