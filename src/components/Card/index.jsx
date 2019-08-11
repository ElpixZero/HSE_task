import React from 'react';
import { Card } from 'semantic-ui-react';

import './Card.scss';

const CardComponent = ({countryName}) => {
  const contentForCardDescription = `Ниже, на графике, Вы видите данные IMR по выше указанной стране с 2011 по 2017 год в зависимости от уровней: 'lower', 'median', 'upper'.`;

  return (
    <div className="card">
      <Card>
        <Card.Content>
          <Card.Header content={countryName} />
          <Card.Description content={contentForCardDescription} />
        </Card.Content>
      </Card>
    </div>
)}

export default CardComponent;