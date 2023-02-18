import { ChangeEvent, useEffect } from "react";
import styled from "styled-components";

interface ISelect {
  value: any;
  menuItems: Array<{ value: any; name: string }>;
  onChange: (value: any) => void;
}

export default function Select({ value, menuItems, onChange }: ISelect) {
  return (
    <Container>
      <$Select value={value} onChange={(e) => onChange(e.target.value)}>
        {menuItems.map((item) => (
          // eslint-disable-next-line react/jsx-pascal-case
          <$MenuItem value={item.value} key={item.value}>
            {item.name}
          </$MenuItem>
        ))}
      </$Select>
    </Container>
  );
}

const Container = styled.div``;
const $Select = styled.select`
  width: 140px;
  height: 32px;
  border-radius: 8px;
`;
const $MenuItem = styled.option``;
