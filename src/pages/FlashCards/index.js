import React, { useState } from 'react';
import { Button, Card, Modal, Form, Input, Pagination, Tag, Menu, Dropdown } from 'antd';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { EllipsisOutlined } from '@ant-design/icons'

import './style.css';

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

    return (
        <>
        <Row>
            <Col md={6}>
                <h1>Curso de Inglês Mairo Vergara<p>Gerencie os Flash Cards do seu Pack</p></h1>
            </Col>
            <Col md={6} style={{ textAlign: 'right' }}>
                <Button size="large" type="primary">Estudar</Button>
            </Col>
        </Row>
        <Row>
            {flashcards.map((item) => {
                return (
                    <Col md={12} style={{ marginTop: '12px' }}>
                        <Link to={`/packs/${item.id}/flash-cards`} className="card-link">
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
