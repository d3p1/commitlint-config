/**
 * @description Configuration for commitlint
 * @author      Cristian Marcelo de Picciotto <d3p1@d3p1.dev>
 * {@link       https://commitlint.js.org/}   
 * {@link       https://www.conventionalcommits.org/en/v1.0.0/}
 */
module.exports = {
    /**
     * @note Resolve and load `@commitlint/config-conventional` 
     *       from `node_modules`
     */
    extends: ['@commitlint/config-conventional'],

    /**
     * @note Add parser preset
     */
    parserPreset: './commitlint.parser.js'
};