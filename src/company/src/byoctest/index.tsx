import * as FEAAS from "@sitecore-feaas/clientside/react";

/**
 *  Make sure that you import your registered components in the rendering 
 * host to be able to render them Warning: some bundlers optimize out unused 
 * imports resulting to your component not been included in the bundle
 *  For more information handling this case, at the nextjs example repo: 
 * https://bitbucket.org/stylelabsdev/feaas-nextjs-example
 */
import "./HelloWorld";

export default (props: any) => {
    debugger;
    return FEAAS.ExternalComponent(props);
}