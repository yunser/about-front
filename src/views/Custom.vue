<template>
    <my-page title="定制" :page="page">
        <div class="common-container container">
            <ui-article>
                <h2>定制服务</h2>
                <p>云设除了提供工具和服务外，还支持工具的定制。云设创办至今，已经为不少用户和企业定制了一批工具，这些工具有些满足用户的特殊需求，有些提高了企业的工作效率。
                    你可以联系我们，为您定制专有的工具产品。</p>

                <p>针对个人用户，我们提供了免费定制服务。欢迎您向我们提出您的需求！</p>
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
