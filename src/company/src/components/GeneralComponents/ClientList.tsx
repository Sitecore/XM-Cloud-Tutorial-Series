import React from 'react';
import { ComponentParams, ComponentRendering, TextField, Text as JSSText } from '@sitecore-jss/sitecore-jss-nextjs';
import { ClientFields, ClientImageProps, ClientImage } from 'src/atoms/GeneralComponents/ClientImage';

interface ClientListFields {
  Title: TextField;
  Clients: Array<Clients>;
}

interface Clients {
  fields: ClientFields
}

interface ClientListProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: ClientListFields;
}

export const Default = (props: ClientListProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <section id="clients" className="clients">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2><JSSText field={props.fields.Title}/></h2>
      </div>

      <div className="row no-gutters clients-wrap clearfix" data-aos="fade-up">
        {props.fields.Clients.slice(0,8).map((client, idx) => {
          const clientProps: ClientImageProps = {
            params: props.params,
            fields: client.fields,
            id: idx,
          };
          return <ClientImage key={idx} {...clientProps}></ClientImage>
        })}
        

      </div>

    </div>
  </section>
  );
};