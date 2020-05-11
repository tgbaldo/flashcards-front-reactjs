import React, { useState } from 'react';
import { Button, Card, Modal, Form, Input, Pagination } from 'antd';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

export default function PacksPage() {
    const [visibleModal, setVisibleModal] = useState(false);

    const cards = [
        { "title": "Curso de Inglês Mario Vergara", "created_at": '10/05/2020' },
        { "title": "Curso de Inglês Mario Vergara", "created_at": '10/05/2020' },
        { "title": "Curso de Inglês Mario Vergara", "created_at": '10/05/2020' },
        { "title": "Curso de Inglês Mario Vergara", "created_at": '10/05/2020' },
        { "title": "Curso de Inglês Mario Vergara", "created_at": '10/05/2020' },
    ];

    return (
        <>
        <Row>
            <Col md={6}>
                <h1>Packs<p>Nesta página você encontra seus packs de Flash Cards</p></h1>
            </Col>
            <Col md={6} style={{ textAlign: 'right' }}>
                <Button size="large" type="primary" onClick={() => { setVisibleModal(true) }}>Novo Pack</Button>
                <Modal
                    visible={visibleModal}
                    title="Novo Pack"
                    onOk={() => { setVisibleModal(false) }}
                    onCancel={() => { setVisibleModal(false) }}
                    footer={[
                        <Button key="back" onClick={() => { setVisibleModal(false) }}>Cancelar</Button>,
                        <Button key="submit" type="primary">Salvar</Button>,
                    ]}
                    >
                    <Form layout="vertical">
                        <Form.Item label="Nome">
                            <Input type="text" size="large" name="name"></Input>
                        </Form.Item>
                    </Form>
                </Modal>
            </Col>
        </Row>
        <Row>
            {cards.map((item) => {
                return (
                    <Col md={4} style={{ marginTop: '22px' }}>
                        <Link to="" className="card-link">
                            <Card>
                                <p className="card-title">{item.title}</p>
                                <p style={{ fontSize: '14px', color: '#777', fontWeight: 350 }}>
                                    {item.created_at}
                                </p>
                            </Card>
                        </Link>
                    </Col>
                )
            })}
        </Row>
        <Row style={{ marginTop: '40px' }}>
            <Col style={{ textAlign: 'right' }}>
                <Pagination defaultCurrent={1} total={50} />
            </Col>
        </Row>
        </>
    )
}
