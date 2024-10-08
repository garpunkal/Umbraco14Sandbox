import { UmbControllerBase } from "@umbraco-cms/backoffice/class-api";
import { UmbContextToken } from "@umbraco-cms/backoffice/context-api";
import { UmbControllerHostElement } from "@umbraco-cms/backoffice/controller-api";
import { UMB_WORKSPACE_CONTEXT, type UmbWorkspaceContextInterface } from '@umbraco-cms/backoffice/workspace';


export class PunkWorkspaceContext extends UmbControllerBase implements UmbWorkspaceContextInterface {
    public readonly workspaceAlias: string = 'punk.workspace';

    constructor(host:UmbControllerHostElement) {
        super(host);
        this.provideContext(UMB_WORKSPACE_CONTEXT, this);
        this.provideContext(TIME_WORKSPACE_CONTEXT, this);
    }

    getEntityType(): string {
        return 'punk-workspace';
    }

    getUnique(): string | undefined {
        return undefined;
    }
}

export default PunkWorkspaceContext;

export const TIME_WORKSPACE_CONTEXT  = new UmbContextToken<PunkWorkspaceContext>(
    PunkWorkspaceContext.name,
);