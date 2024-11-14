import React from 'react';
import { Column, Table, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';

const headers = ["Product", "PO Number", "Booking No.", "ETA", "Previous ETA"];
const rows = Array.from({ length: 1000 }, (_, index) => ({
  product: `Product ${index + 1}`,
  poNumber: `PO${1000 + index}`,
  bookingNo: `Booking${2000 + index}`,
  eta: `ETA Date ${index + 1}`,
  previousEta: `Previous ETA ${index + 1}`,
}));

const VirtualizedTableDemo = () => {
  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            width={width}
            height={height}
            headerHeight={40}
            rowHeight={40}
            rowCount={rows.length}
            rowGetter={({ index }) => rows[index]}
          >
            <Column label="Product" dataKey="product" width={width * 0.2} />
            <Column label="PO Number" dataKey="poNumber" width={width * 0.2} />
            <Column label="Booking No." dataKey="bookingNo" width={width * 0.2} />
            <Column label="ETA" dataKey="eta" width={width * 0.2} />
            <Column label="Previous ETA" dataKey="previousEta" width={width * 0.2} />
          </Table>
        )}
      </AutoSizer>
    </div>
  );
};

export default VirtualizedTableDemo;
