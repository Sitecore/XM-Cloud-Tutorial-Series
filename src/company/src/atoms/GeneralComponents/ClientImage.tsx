import React from 'react';
import { ComponentParams, ImageField, Image as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';

export interface ClientFields {
  ClientImage:  ImageField;
}

export interface ClientImageProps {
  params: ComponentParams;
  fields: ClientFields;
  id: number;
}

export const ClientImage = (props: ClientImageProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className="col-lg-3 col-md-4 col-6">
      <div className="client-logo">
        <JssImage field={props.fields.ClientImage} className="img-fluid"/>
      </div>
    </div>
  );
};
