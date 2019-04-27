const mix = require('laravel-mix');

class Alias {
    register (alias, path = null) {
        const aliases = getAliasesObject(alias, path);

        this.aliases = Object.assign(aliases, this.aliases || {});
        this.rootPath = global.path.resolve(__dirname, '../../');
    }

    webpackConfig (webpackConfig) {
        // Set default alias object
        const aliases = webpackConfig.resolve.alias || {};

        Object.entries(this.aliases).forEach(([alias, path]) => {
            // Path must start with forwarding slash
            if (!path.startsWith('/')) {
                path = `/${path}`;
            }

            aliases[alias] = `${this.rootPath}${path}`;
        });

        webpackConfig.resolve.alias = aliases;
    }
}

mix.extend('alias', new Alias());

/**
 * Helper getAliasesObject
 * @param {string|Object} alias
 * @param {string} [path]
 */
function getAliasesObject (alias, path) {
    if (path != null) {
        return {
            [alias]: path,
        };
    }

    return alias;
}
