import React, { useState } from 'react';
import { Button, Card, Modal, Form, Input, Pagination, Tag, Space } from 'antd';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

const { TextArea } = Input;

export default function FlashCardsPage() {
    const [visibleModal, setVisibleModal] = useState(false);
    const [flashcards, setFlashCards] = useState(
        [
            { "id": "xpto999", "front": "Qual a capital do Brasil?", "back": "Brasília", "created_at": '10/05/2020' },
            { "id": "xpto999", "front": "Qual a capital do Brasil?", "back": "Brasília", "created_at": '10/05/2020' },
            { "id": "xpto999", "front": "Qual a capital do Brasil?", "back": "Brasília", "created_at": '10/05/2020' },
            { "id": "xpto999", "front": "Qual a capital do Brasil?", "back": "Brasília", "created_at": '10/05/2020' },
            { "id": "xpto999", "front": "Qual a capital do Brasil?", "back": "Brasília", "created_at": '10/05/2020' },
            { "id": "xpto999", "front": "Qual a capital do Brasil?", "back": "Brasília", "created_at": '10/05/2020' },
        ]
    );

    const handleSubmit = values => {
        flashcards.push({
            id: "xpto777",
            front: values.front,
            back: values.front,
            created_at: (new Date().toString())
        });
        setVisibleModal(false);
    };

    return (
        <>
        <Row>
            <Col md={6}>
                <h1>Curso de Inglês Mairo Vergara<p>Gerencie os Flash Cards do seu Pack</p></h1>
            </Col>
            <Col md={6} style={{ textAlign: 'right' }}>
                <Space>
                    <Button size="large" danger>Estudar</Button>
                    <Button size="large" type="primary" onClick={() => { setVisibleModal(true) }}>Criar Flash Card</Button>
                </Space>
                <Modal
                    visible={visibleModal}
                    title="Criar Novo Flash Card"
                    footer={false}
                    onOk={() => { setVisibleModal(false) }}
                    onCancel={() => { setVisibleModal(false) }}
                    >
                    <Form layout="vertical" onFinish={handleSubmit}>
                        <Form.Item name="front" label="Frente" rules={[{ required: true, message: 'Campo obrigatório' }]}>
                            <TextArea rows="4"></TextArea>
                        </Form.Item>
                        <Form.Item name="back" label="Verso" rules={[{ required: true, message: 'Campo obrigatório' }]}>
                            <TextArea rows="4"></TextArea>
                        </Form.Item>
                        <Form.Item style={{ textAlign: 'right' }}>
                            <Button htmlType="submit" size="large" key="submit" type="primary">Salvar</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </Col>
        </Row>
        <Row>
            {flashcards.map((item) => {
                return (
                    <Col md={12} style={{ marginTop: '12px' }}>
                        <Link to={`/decks/${item.id}/flash-cards`} className="card-link">
                            <Card className="card-list">
                                <Row>
                                    <Col md={6} style={{ textOverflow: 'ellipsis' }}>
                                        <span className="card-title">{item.front}</span>
                                    </Col>
                                    <Col md={2}>
                                        <span className="card-title">12 flips</span>
                                    </Col>
                                    <Col md={4}>
                                        <Tag color="red">2 difíceis</Tag>
                                        <Tag color="blue">2 bons</Tag>
                                        <Tag color="green">8 fáceis</Tag>
                                    </Col>
                                </Row>
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
