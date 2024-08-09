
import { type UmbCurrentUserModel, UMB_CURRENT_USER_CONTEXT } from "@umbraco-cms/backoffice/current-user";
import { LitElement, css, html, customElement, state, repeat, property } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { type UmbUserDetailModel, UmbUserCollectionRepository } from '@umbraco-cms/backoffice/user';
import { UserStateModel } from "@umbraco-cms/backoffice/external/backend-api";
import { UUIInterfaceColor, UUIInterfaceLook } from "@umbraco-cms/backoffice/external/uui";

@customElement('punk-dashboard')
export class PunkDashboard extends UmbElementMixin(LitElement) {

    @state()
    private _currentUser?: UmbCurrentUserModel;

    @state()
    private _userData: Array<UmbUserDetailModel> = [];

    #userRepository = new UmbUserCollectionRepository(this);

    constructor() {
        super();
        this.consumeContext(UMB_CURRENT_USER_CONTEXT, (instance) => {
            this._observeCurrentUser(instance);
        });
        this._getPagedUserData();
    }

    private async _observeCurrentUser(instance: typeof UMB_CURRENT_USER_CONTEXT.TYPE) {
        this.observe(instance.currentUser, (currentUser) => {
            this._currentUser = currentUser;
        });
    }
    private async _getPagedUserData() {
        const { data } = await this.#userRepository.requestCollection();
        this._userData = data?.items ?? [];
    }


    @property()
    title = 'Punk Dashboard'

    render() {
        return html`
          <uui-box headline="hello world">
            
                <h1>Welcome ${this._currentUser?.name ?? "Unknown"}!</h1>
         
                <uui-button href="https://garpunkal.dev" look="primary" type="button" target="_blank">garpunkal.dev</uui-button>

                <uui-table id="users-wrapper">
				<uui-table-row>
					<uui-table-head-cell>Name</uui-table-head-cell>
					<uui-table-head-cell>Email</uui-table-head-cell>
					<uui-table-head-cell>Status</uui-table-head-cell>
				</uui-table-row>
				${repeat(this._userData, (user) => user.unique, (user) => this._renderUser(user))}
			</uui-table>

            </uui-box>
        `;

    }


    private _renderUser(user: UmbUserDetailModel) {
        if (!user) return;
        const state = this.getLookAndColorFromUserState(user.state);
        return html`<uui-table-row class="user">
                <uui-table-cell>${user.name}</uui-table-cell>
                <uui-table-cell>${user.email}</uui-table-cell>
                <uui-table-cell><uui-tag look=${state.look} color=${state.color}>${user.state}</uui-tag></uui-table-cell>
            </uui-table-row>`;
    }

    getLookAndColorFromUserState = (state?: UserStateModel | null): { look: UUIInterfaceLook; color: UUIInterfaceColor } => {
        switch (state) {
            case UserStateModel.INACTIVE:
            case UserStateModel.INVITED:
                return { look: 'primary', color: 'warning' };
            case UserStateModel.ACTIVE:
                return { look: 'primary', color: 'positive' };
            case UserStateModel.DISABLED:
                return { look: 'primary', color: 'danger' };
            default:
                return { look: 'secondary', color: 'default' };
        }
    };

    static styles = [
        css`
       :host {
			display: block;
			padding: var(--uui-size-layout-1);
		}

		uui-table-head-cell {
			font-weight: bold;
		}

		.user:hover,
		.user:focus {
			cursor: pointer;
			background-color: var(--uui-color-surface-alt);
		}
    `
    ];
}


export default PunkDashboard;

declare global {
    interface HtmlElementTagNameMap {
        'punk-dashboard': PunkDashboard
    }
}