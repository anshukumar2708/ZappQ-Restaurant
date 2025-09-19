import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const QRGenerator = () => {
    const [companyId, setCompanyId] = useState("");
    const [tableNumber, setTableNumber] = useState("");
    const [qrValue, setQrValue] = useState("");

    const generateQRCode = () => {
        const qrData = JSON.stringify({ companyId, tableNumber });
        setQrValue(qrData);
    };

    return (
        <div className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Enter Company ID"
                value={companyId}
                onChange={(e) => setCompanyId(e.target.value)}
                className="border p-2 rounded"
            />

            <input
                type="text"
                placeholder="Enter Table Number"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="border p-2 rounded"
            />

            <button
                onClick={generateQRCode}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Generate QR
            </button>

            {qrValue && (
                <div className="mt-4">
                    <QRCodeSVG value={qrValue} size={150} />
                    <p className="text-sm mt-2">QR Data: {qrValue}</p>
                </div>
            )}
        </div>
    );
};

export default QRGenerator;
