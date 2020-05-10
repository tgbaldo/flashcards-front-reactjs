import React from 'react';
import { Row, Col, Button, Space } from 'antd';

export default function PacksPage() {
    return (
        <Row gutter={20}>
            <Col span={12}>
                <h1>Packs<p>Nesta página você encontra seus packs de Flash Cards</p></h1>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
                <Button size="large" type="primary">Novo Pack</Button>
            </Col>
        </Row>
    )
}
