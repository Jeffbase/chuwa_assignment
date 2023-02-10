import { Modal, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./index.css";

const MyModal = ({ children, titleText, visible, width, setVisible }) => {
  const onCancel = () => {};
  const { Title } = Typography;
  return (
    <Modal
      width={width}
      closeIcon={<CloseCircleOutlined />}
      title={
        <Title level={2} className="modal-title">
          {titleText}
        </Title>
      }
      open={visible}
      footer={null}
      onCancel={() => {
        setVisible(false);
      }}
    >
      {children}
    </Modal>
  );
};

export default MyModal;
