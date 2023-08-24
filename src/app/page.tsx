"use client";

import InvoiceForm from '@/components/InvoiceForm';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
//import InvoiceItem from './InvoiceItem';
//import InvoiceModal from './InvoiceModal';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './page.module.css';

const Home = () => {
  return (
    <Form>
        <Row>
          	<div>
				<span className="fw-bold">Current Date:</span>
				<span className="current-date">{new Date().toLocaleDateString()}</span>
        	</div>

			<div>
				<span className="fw-bold">Due Date:</span>
				<Form.Control type='date' name={"dateOfIssue"} />
        	</div>

        </Row>
    </Form>
  );
}

export default Home;
