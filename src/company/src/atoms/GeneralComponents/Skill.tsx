import React from 'react';
import { ComponentParams, ComponentRendering, TextField, Text as JSSText } from '@sitecore-jss/sitecore-jss-nextjs';

export interface SkillFields {
  Name: TextField;
  Rate: TextField;
}

export interface SkillProps {
  params: ComponentParams;
  fields: SkillFields;
  id: number;
}

export const Skill = (props: SkillProps): JSX.Element => {
  const divStyle = {
    width: props.fields.Rate.value+'%',
  }

  return (
    <div className="progress">
      <span className="skill"><JSSText field={props.fields.Name}/> 
        <i className="val"><JSSText field={props.fields.Rate}/>%</i>
      </span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" style={divStyle} data-aria-valuenow="100" data-aria-valuemin="0" data-aria-valuemax="100"></div>
      </div>
    </div>
  );
};
