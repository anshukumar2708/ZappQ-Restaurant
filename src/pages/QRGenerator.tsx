import { useState } from "react";

const QRGenerator = () => {
    const [companyId, setCompanyId] = useState("12345");
    const [tableNumber, setTableNumber] = useState("10");

    // Generate value (could be JSON, URL, or any string)
    const qrValue = JSON.stringify({
        companyId,
        tableNumber,
    });

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>QR Code Generator</h2>

            {/* <QRCode value={qrValue} size={200} /> */}

            <div style={{ marginTop: "20px" }}>
                <input
                    type="text"
                    placeholder="Company ID"
                    value={companyId}
                    onChange={(e) => setCompanyId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Table Number"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                />
            </div>
        </div>
    );
};

export default QRGenerator;
