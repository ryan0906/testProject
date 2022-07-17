import React from 'react';
import { useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';

interface NotFoundLayoutProps {}

export default function NotFoundLayout(props: NotFoundLayoutProps) {
  const history = useHistory();

  const onToHomeClick = () => {
    history.push('/');
  }

  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: "transparent" }}>
      <Result status="info" title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="default" onClick={onToHomeClick}>To Homepage</Button>} />
    </div>
  );
}