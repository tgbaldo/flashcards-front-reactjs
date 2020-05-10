import React, { useState } from 'react';
import { Row, Col, Button, Card, Modal, Form, Input, Pagination } from 'antd';
import { Link } from 'react-router-dom';

import './style.css';

export default function PacksPage() {

    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <>
        <Row gutter={20}>
            <Col span={12}>
                <h1>Packs<p>Nesta página você encontra seus packs de Flash Cards</p></h1>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
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
        <Row gutter={20} style={{ marginTop: '20px' }}>
            <Col span={6}>
                <Link to="" className="card-link">
                    <Card>
                        <h3>Curso de Inglês Mairo Vergara</h3>
                        <p style={{ fontSize: '14px', color: '#777', fontWeight: 350 }}>
                            Criado em 10/05/2020
                        </p>
                    </Card>
                </Link>
            </Col>
            <Col span={6}>
                <Link to="" className="card-link">
                    <Card>
                        <h3>Curso de Inglês Mairo Vergara</h3>
                        <p style={{ fontSize: '14px', color: '#777', fontWeight: 350 }}>
                            Criado em 10/05/2020
                        </p>
                    </Card>
                </Link>
            </Col>
            <Col span={6}>
                <Link to="" className="card-link">
                    <Card>
                        <h3>Curso de Inglês Mairo Vergara</h3>
                        <p style={{ fontSize: '14px', color: '#777', fontWeight: 350 }}>
                            Criado em 10/05/2020
                        </p>
                    </Card>
                </Link>
            </Col>
            <Col span={6}>
                <Link to="" className="card-link">
                    <Card>
                        <h3>Curso de Inglês Mairo Vergara</h3>
                        <p style={{ fontSize: '14px', color: '#777', fontWeight: 350 }}>
                            Criado em 10/05/2020
                        </p>
                    </Card>
                </Link>
            </Col>
        </Row>
        <Row gutter={20} style={{ marginTop: '40px' }}>
            <Col span={24} style={{ textAlign: 'right' }}>
                <Pagination defaultCurrent={1} total={50} />
            </Col>
        </Row>
        </>
    )
}
