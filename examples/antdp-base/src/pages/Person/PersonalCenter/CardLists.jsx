import React, { useEffect, useState } from 'react';
import { Avatar, Card, Skeleton, Row, Col, Button, Space } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { getList } from '@/services/api';
import { useReactMutation } from '@antdp/hooks';
import { cardItems } from './item';
const { Meta } = Card;

export default function () {
  const [data, setData] = useState([]);

  const {
    mutate,
    data: result,
    isLoading,
  } = useReactMutation({
    method: 'POST',
    url: getList,
    onSuccess: ({ data: results = [] }) => {
      setData([...data, ...results]);
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <Row>
      {cardItems.map((item, i) => (
        <Col
          key={i}
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ marginBottom: 12 }}
        >
          <Card
            loading={isLoading}
            style={{ width: 360 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <div>{item.title}</div>
              <div style={{ color: '#8C8C8C', fontSize: 12 }}>
                {item.content}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginTop: 20,
              }}
            >
              <div style={{ color: '#8C8C8C', fontSize: 12 }}>{item.time}</div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
