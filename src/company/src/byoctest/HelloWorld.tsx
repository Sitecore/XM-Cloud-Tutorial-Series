import * as FEAAS from '@sitecore-feaas/clientside/react';

/* eg. src/components/MyComponent.js */

export default function HelloWorld(props: {
    hello: string;
    world?: string;
}) {
    return (
    /*your component body*/
    <>
        <h1>Hello World!</h1>
        <p>
            {props.hello}<br/>
            {props.world}
        </p>
    </>
    )
  }
  
  FEAAS.registerComponent(HelloWorld, {
      name: 'HelloWorld',
      description: 'Description of HelloWorld.',
      required: [ /* List of properties that are required */ 
                  'hello'],
      properties: {
          /* Your component props in JSON schema format
             Read more: https://json-schema.org/learn/getting-started-step-by-step#add-the-properties-object */
        hello: {type: 'string', title: 'Hello'},  
        world: {type: 'string', title: 'World'},
      },
      ui: {
          /* Any ui configuration for the inputs form rendered in the builder
             Read more: https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema/ */
      }
  })