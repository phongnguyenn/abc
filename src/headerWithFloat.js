import React from 'react';
import { Header as SemanticHeader } from 'semantic-ui-react';
import {
  Row,
  Col
} from "antd";
import { HeaderWithFloatWrapper } from './headerWithFloat.style';

export default (props) => {
  const { titleText, headerSize } = props;

  return (
    <HeaderWithFloatWrapper>
    <Row>
        <Col span={12}><SemanticHeader as={headerSize}>{titleText}</SemanticHeader></Col>
        <Col span={12}>{props.children}</Col>
    </Row>
    </HeaderWithFloatWrapper>
  );

};