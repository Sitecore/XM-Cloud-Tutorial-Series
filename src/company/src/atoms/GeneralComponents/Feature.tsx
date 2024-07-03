import React from 'react';
import { ComponentParams, TextField, Text as JSSText } from '@sitecore-jss/sitecore-jss-nextjs';

export interface FeatureFields {
  Name: TextField;
  Icon: {fields: {Class: { value: string }, HexColor: { value: string }}};
}
export interface FeatureProps {
  params: ComponentParams;
  fields: FeatureFields;
  id: number;
}

export const Feature = (props: FeatureProps): JSX.Element => {
  const label = props.fields.Icon.fields.Class.value;
  const color = props.fields.Icon.fields.HexColor.value;
  return (
    <div className="col-lg-3 col-md-4">
      <div className="icon-box">
        <i className={`${label}`} style={{color: color,}}></i>
        <h3><a href=""><JSSText field={props.fields.Name}/></a></h3>
      </div>
    </div>
  );
};
