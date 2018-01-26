<template>
    <ui-page :title="title || page.title" :page="page" ref="page" :backable="backable">
        <div slot="drawer">
            <ui-appbar title=""></ui-appbar>
            <ui-list @itemClick="toggle()">
                <ui-list-item title="关于" to="/">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="捐赠" to="/donate">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-divider />
            </ui-list>
            <ui-list @itemClick="toggle()">
                <ui-list-item title="云设工具" href="http://tool.yunser.com/">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
            </ui-list>
        </div>
        <slot></slot>
    </ui-page>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
                docked: true
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: 'default'
            },
            page: {
                type: Object,
                default: function () {
                    return {
                        title: '云设'
                    }
                }
            },
            backable: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            toggle() {
                console.log(this.$refs.page)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ui-page {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .page-body {
        min-height: 500px;
    }
    .container-main {
        padding-top: 16px;
    }
    .page-content {
        position: absolute;
        top: 0;
        left: 256px;
        right: 0;
        bottom: 0;
    }
    .page-container {
        padding: 16px;
    }
    .admin-container {
        padding: 16px;
    }
</style>
