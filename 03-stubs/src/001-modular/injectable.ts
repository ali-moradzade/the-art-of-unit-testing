export const moduleInject = (originalDeps: any) => {
    const dependencies = {};
    const inject = (fakes: any) => Object.assign(dependencies, fakes);
    const reset = () => Object.assign(dependencies, originalDeps);

    return {
        dependencies,
        inject,
        reset
    };
};
