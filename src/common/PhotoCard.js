import React from "react";
import { Card, Col } from "antd";

const { Meta } = Card;

export default ({ photo }) => (
  <Col span={8}>
    <Card
      hoverable
      cover={<img alt={photo.description} src={photo.urls.small} />}
    >
      <Meta title={photo.description} description={`By ${photo.user.name}`} />
    </Card>
  </Col>
);
