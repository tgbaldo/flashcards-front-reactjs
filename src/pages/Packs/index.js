import React from 'react';
import { Row, Col, Button, Card } from 'antd';
import { Link } from 'react-router-dom';

import './style.css';

export default function PacksPage() {
    return (
        <>
        <Row gutter={20}>
            <Col span={12}>
                <h1>Packs<p>Nesta página você encontra seus packs de Flash Cards</p></h1>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
                <Button size="large" type="primary">Novo Pack</Button>
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
        </>
    )
}
