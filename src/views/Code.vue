<template>
    <my-page title="源码出售" :page="page">
        <div class="common-container container">
            <ui-article>
                <h2>源码出售</h2>
                <p>云设所有的工具源码均可出售。每个工具单独出售源码，不整站出售。</p>
                <p>有意者加站长 QQ（1418503647，备注购买源码）或邮箱（1418503647@qq.com）咨询。价格可协商。</p>
                <p>如果有特殊的需求，还可以<router-link to="/custom">定制开发</router-link>。</p>

                <p>注意：源码为虚拟物品，一旦售出，概不支持退款。请购买前自己先测试工具是否有问题。</p>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                version: '',
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'search',
                        //     href: 'https://search.yunser.com?utm_source=calculator',
                        //     target: '_blank',
                        //     title: '搜索'
                        // },
                        // {
                        //     type: 'icon',
                        //     icon: 'apps',
                        //     href: 'https://app.yunser.com?utm_source=about',
                        //     target: '_blank',
                        //     title: '应用'
                        // }
                    ]
                }
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
.container {
    max-width: 480px;
}
</style>
