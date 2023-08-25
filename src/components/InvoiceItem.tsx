import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const InvoiceItem = () => {
    return (
        <div>
            <Table>
                <thead>
                <tr>
                <th>ITEM</th>
                <th>QTY</th>
                <th>PRICE/RATE</th>
                <th className="text-center">ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td style={{width: '100%'}}>
            <EditableField
                onItemizedItemEdit={this.props.onItemizedItemEdit}
                cellData={{
                type: "text",
                name: "name",
                placeholder: "Item name",
                value: this.props.item.name,
                id: this.props.item.id,
            }}/>
            <EditableField
                onItemizedItemEdit={this.props.onItemizedItemEdit}
                cellData={{
                type: "text",
                name: "description",
                placeholder: "Item description",
                value: this.props.item.description,
                id: this.props.item.id
            }}/>
            </td>
            <td style={{minWidth: '70px'}}>
            <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}
            cellData={{
                type: "number",
                name: "quantity",
                min: 1,
                step: "1",
                value: this.props.item.quantity,
                id: this.props.item.id,
            }}/>
            </td>
            <td style={{minWidth: '130px'}}>
            <EditableField
                onItemizedItemEdit={this.props.onItemizedItemEdit}
                cellData={{
                leading: this.props.currency,
                type: "number",
                name: "price",
                min: 1,
                step: "0.01",
                presicion: 2,
                textAlign: "text-end",
                value: this.props.item.price,
                id: this.props.item.id,
            }}/>
            </td>
            <td className="text-center" style={{minWidth: '50px'}}>
            <BiTrash onClick={this.onDelEvent.bind(this)} style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white mt-1 btn btn-danger"/>
            </td>
        </tr>
                </tbody>
        </Table>
        </div>
    );
}

export default InvoiceItem;
