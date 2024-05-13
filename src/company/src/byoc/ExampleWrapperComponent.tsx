import * as FEAAS from "@sitecore-feaas/clientside/react";
import ExampleClientsideComponent from "./ExampleClientsideComponent";

export default async function ExampleWrapperComponent(props: {
  firstName: string;
  lastName: string;
  telephone: string;
}) {
  const response = await fetch("http://google.com");
  const text = await response.text();
  return (
    <>
      <h2>Wrapper</h2>
      <dl>
        <dt>Description</dt>
        <dd>
          Interactive UI with SEO-friendly server counterpart and data fetching
        </dd>
        <dt>Rendered on</dt>
        <dd>{typeof window != "undefined" ? "Clientside" : "Server"}</dd>
        <dt>Data</dt>
        <dd>
          {props.firstName} {props.lastName} / {props.telephone}
        </dd>
        <dt>Async data</dt>
        <dd>{text.length}bytes</dd>
      </dl>
      <ExampleClientsideComponent {...props}>
        {text.length}bytes was fetched on server side
      </ExampleClientsideComponent>
    </>
  );
}

FEAAS.registerComponent(ExampleWrapperComponent, {
  name: "wrapper",
  title: "Wrapping component",
  description:
    "Interactive UI with SEO-friendly server counterpart and data fetching",
  thumbnail:
    "https://feaasstatic.blob.core.windows.net/assets/thumbnails/byoc.svg",
  group: "Examples",
  required: ["firstName"],
  properties: {
    firstName: {
      type: "string",
      title: "First name",
    },
    lastName: {
      type: "string",
      title: "Last name",
    },
    telephone: {
      type: "number",
      title: "Telephone",
      minLength: 10,
    },    
  },
  ui: {
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:placeholder": "Write your first name",
    },
    bold: {
      "ui:widget": "radio",
    },
  },
});
