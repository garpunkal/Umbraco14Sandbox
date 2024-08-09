# Umbraco 14 Sandbox

## Credentials
### Umbraco

|   |   |
|---|---|
|username|admin@umbraco.com|
|password|QxqEEobu3siE0n3OkU8J|


## Usage

use node 20.x (I'm using: 20.11.1).

```cmd
nvm install 20.11.1
nvm use 20.11.1
```

### Umbraco

Umbraco must be running for the routes to build statically on the frontend client. 

```cmd
cd src
cd Umbraco14Sandbox.Web
dotnet run
```

### Umbraco's Frontend

```cmd
cd src
cd Umbraco14Sandbox.Client/assets
npm run watch
```


## References

### Umbraco docs
- https://docs.umbraco.com/umbraco-cms/tutorials/creating-a-custom-dashboard
- https://docs.umbraco.com/umbraco-cms/tutorials/creating-your-first-extension
- https://docs.umbraco.com/umbraco-cms/extending/customize-backoffice/development-flow
- https://docs.umbraco.com/umbraco-cms/extending/customize-backoffice/vite-package-setup

#### Umbraco UI Library Storybook
- https://apidocs.umbraco.com/v14/ui/?path=/docs/uui_uui-button--docs

#### Umbraco Backoffice API
- https://apidocs.umbraco.com/v14/ui-api/index.html

### Blog Articles
- https://dev.to/kevinjump/early-adoptors-guide-to-umbraco-v14-package-structure-3i67
- https://github.com/KevinJump/EarlyAdopters.Umbraco.Templates/tree/main/package-template/MyPackage.1.Client/assets
- https://github.com/KevinJump/EarlyAdopters.Umbraco.Templates/tree/main/package-template/MyPackage.1.Client/assets

