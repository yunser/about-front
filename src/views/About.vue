<template>
    <my-page title="关于" :page="page">
        <div class="common-container container">
            <ui-article>
                <h2>关于</h2>
                <p><strong>云设工具</strong>是一个在线工具集合网站。我们相信，好的工具，不仅能提高生活的质量，也能提高工作的效率。基于这个理念，我们开发了这个网站。</p>
                <p>我们提供了平时工作、生活或学习中，会用到的一些小工具。尽量无需安装，无需注册，用完即走。</p>
                <p>如果大家觉得这个工具站好用的话，可以添加到收藏夹，或推荐给身边的朋友、同事。</p>
                <p>网站目标：</p>
                <ul>
                    <li>功能尽可能齐全，涵盖生活、学习等各个方面。</li>
                    <li>界面美观、简洁易用，能提高效率。</li>
                    <li>逐步把网站相关功能代码开源出去。</li>
                </ul>

                <h2>联系我们</h2>
                <p>邮箱：admin@yunser.com</p>
                <p>QQ：
                    <a target="_blank" href="http://sighttp.qq.com/authd?IDKEY=4630f6e27842a23195a87daa10a3b9597876b96fd5619f55">
                        <img border="0" src="http://wpa.qq.com/imgd?IDKEY=4630f6e27842a23195a87daa10a3b9597876b96fd5619f55&pic=51" alt="点击这里给我发消息" title="点击这里给我发消息"style="margin-bottom: 0"></a>
                    （1418503647）
                </p>
                <p>QQ 群：
                    <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=11975aff9cb203c9896b47320a17545d3c80aaea08a18dfb1ab639553e6f05b1">
                        <img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="云设交流群" title="云设交流群" style="margin-bottom: 0">
                    </a>
                    （群号：642481431，交流、源码分享）
                </p>

                <h2>意见及建议</h2>
                <p>有什么意见或建议，可以在下面留言，或进群讨论。</p>

                <h2>版权</h2>
                <p>© 2016-2019 <a href="https://www.yunser.com/" target="_blank">云设</a></p>
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
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=about',
                            target: '_blank',
                            title: '应用'
                        }
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
