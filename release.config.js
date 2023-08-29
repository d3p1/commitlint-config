/**
 * @description Configuration for `semantic-release`
 * @author      Cristian Marcelo de Picciotto <d3p1@d3p1.dev>
 * {@link       https://semantic-release.gitbook.io/semantic-release/}
 * {@link       https://semantic-release.gitbook.io/semantic-release/usage/configuration}
 */
module.exports = {
    /**
     * @note Add release branches
     */
    branches: ['main'],

    /**
     * @note Add tag format
     */
    tagFormat: '${version}',
    
    /**
     * @note Add plugins
     */
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/git'
    ]
};