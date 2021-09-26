import React, { useState } from 'react';
import { Button, Card, Modal, Form, Input, Pagination } from 'antd';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';
import { deckService } from '../../services/DeckService';

export default function DecksPage() {
    const [visibleModal, setVisibleModal] = useState(false);
    const [cards, setCards] = useState(
        [
            { "id": "xpto000", "title": "Curso de Inglês Mario Vergara", "created_at": '10/05/2020' },
            { "id": "xpto000", "title": "Curso de Inglês Mario Vergara", "created_at": '10/05/2020' },
            { "id": "xpto000", "title": "Curso de Inglês Mario Vergara", "created_at": '10/05/2020' },
            { "id": "xpto000", "title": "Curso de Inglês Mario Vergara", "created_at": '10/05/2020' },
            { "id": "xpto000", "title": "Curso de Inglês Mario Vergara", "created_at": '10/05/2020' },
        ]
    );

    const handleSubmit = async (values) => {
      await  deckService.save({ name: values.name });
      setVisibleModal(false);
    }

    return (
        <>
        <Row>
            <Col md={6}>
                <h1>Decks<p>Nesta página você encontra seus decks de Flash Cards</p></h1>
            </Col>
            <Col md={6} style={{ textAlign: 'right' }}>
                <Button size="large" type="primary" onClick={() => { setVisibleModal(true) }}>Criar Deck</Button>
                <Modal
                    visible={visibleModal}
                    title="Criar Novo Deck"
                    footer={false}
                    onOk={() => { setVisibleModal(false) }}
                    onCancel={() => { setVisibleModal(false) }}
                    >
                    <Form layout="vertical" onFinish={handleSubmit}>
                        <Form.Item name="name" label="Nome" rules={[{ required: true, message: 'Campo obrigatório' }]}>
                            <Input type="text" size="large" />
                        </Form.Item>
                        <Form.Item style={{ textAlign: 'right' }}>
                            <Button htmlType="submit" size="large" key="submit" type="primary">Salvar</Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </Col>
        </Row>
        <Row>
            {cards.map((item) => {
                return (
                    <Col md={4} style={{ marginTop: '22px' }}>
                        <Link to={`/decks/${item.id}/flash-cards`} className="card-link">
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
