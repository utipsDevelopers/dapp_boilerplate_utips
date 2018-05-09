import React from 'react';
import styled from 'styled-components';

const SuperFooter = () => (
  <FooterStyle>
    <FooterItems1>© 2018 engieFactory. All rights reserved.</FooterItems1>
    <FooterItems2>Powered by Utips</FooterItems2>
  </FooterStyle>
);

export default SuperFooter;

const FooterStyle = styled.div`
  position:relative;
  bottom:0;
  width: 100%;
`;

const FooterItems1 = styled.li`
  display: flex;
  justify-content: center;
  color: #595959;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const FooterItems2 = styled.li`
  display: flex;
  justify-content: center;
  color: #595959;
  margin-bottom: 40px;
`;

