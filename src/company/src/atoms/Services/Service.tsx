import React from 'react';
import {
  ComponentParams,
  Field,
  ImageField,
  Text as JSSText,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { servicesTeaserBgSvgJson } from 'src/data/services/serviceTeaserBgSvg';

export interface ServiceFields {
  Heading: Field<string>;
  Description: Field<string>;
  Image: ImageField;
  Icon: {fields:{ClassName:{value:string}}};
  Color: {fields:{ClassName:{value:string}}};
}

export type ServiceProps = {
  params: ComponentParams;
  fields: ServiceFields;
  id: number;
};

export const Default = (props: ServiceProps): JSX.Element => {
  const objectData = JSON.parse(servicesTeaserBgSvgJson);
  return (
    <div
      className="col-lg-4 col-md-6 d-flex align-items-stretch"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className={`icon-box ${props.fields.Color.fields.ClassName.value}`}>
        <div className="icon">
          <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" stroke-width="0" fill="#f5f5f5" d={objectData[props.id].svg}></path>
          </svg>
          <i className={`bx ${props.fields.Icon.fields.ClassName.value}`}></i>
        </div>
        <h4>
          <a href="">
            <JSSText field={props.fields.Heading} />
          </a>
        </h4>
        <p>
          <JSSText field={props.fields.Description} />
        </p>
      </div>
    </div>
  );
};
