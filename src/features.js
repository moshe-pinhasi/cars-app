
const moduleStore = {
    state: {
        features: []
    },
    mutations: {
        setFeatures(state, {features}) {
            state.features = features
        }
    },
    getters: {
        hasFeature: state => fName => state.features.includes(fName)
    }
}

const createDirective = (Vue) => {
    Vue.directive('feature', {
        inserted(el, binding, vnode, old) {
            const featureName = binding.value || binding.arg
            console.log('inserted', featureName)
            if (!featureName) return 
            if (!vnode.context.$hasFeature(featureName)) {
                vnode.elm.parentElement.removeChild(vnode.elm)
            }
        }
    })
}

const createComponent = (Vue) => {
    Vue.component('feature-wrapper', {
        props: ['name'],
        render: function (createElement) {
            if (!this.$store.getters.hasFeature(this.name)) return ""
    
            return createElement(
                'div',   // tag name
                this.$slots.default // array of children
            )
          }
    })
}

const addToVueInstance = (Vue) => {
    Vue.prototype.$hasFeature = function (name) {
        console.log(`hasFeature ${name}?`, this.$store.getters.hasFeature(name))
        return this.$store.getters.hasFeature(name)
    };
}

const defaultOptions = {
    directive: true,
    component: true,
    instance: true
}

const isValidOptions = (options) => {
    if (!options.store) return false

    return true
}

const errorMessage = "Features plugin: You must provide store in options.";

const FeaturesPlugin = {
    // you can pass the features names in array in options
    // or commit them manually to the store
    install(Vue, options) {
        
        options = Object.assign(defaultOptions, options)
        if (!isValidOptions(options)) throw new Error(errorMessage);

        const {store, features} = options
        store.registerModule('Features', moduleStore)

        if (features) store.commit({type: 'setFeatures', features})

        options.directive && createDirective(Vue)
        options.component && createComponent(Vue)
        options.instance && addToVueInstance(Vue)
    }
};
  
export default FeaturesPlugin;