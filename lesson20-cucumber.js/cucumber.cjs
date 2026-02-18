const common = {
    loader: ['ts-node/esm'],
    format: [
        '@cucumber/pretty-formatter',
    ],
    formatOptions: {
        snippetInterface: "async-await",
    },
    import: ['src/**/*.ts'],
    tags: "not @skip"
};

const ci = {
    ...common,
    format: [
        ...common.format,
        'json:./reports/cucumber.json',
        'html:./reports/cucumber-embedded.html',
        'junit:./reports/cucumber.xml'
    ],
    formatOptions: {
        ...common.formatOptions,
    },
    retry: 3
};

const local = {
    ...ci,
    retry: 0
};


const debug = {
    ...local,
    tags: "@debug"
};

module.exports = {
    default: common,
    ci: ci,
    local: local,
    debug: debug
};
