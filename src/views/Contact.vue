<template>
    <my-page title="联系我们" :page="page">
        <div class="common-container container">
            <ui-article class="article">
                <!-- <h2>联系我们</h2> -->
                <p>邮箱：<a class="email" href="mailto:admin@yunser.com">admin@yunser.com</a></p>
                <p>QQ：
                    <a target="_blank" href="https://sighttp.qq.com/authd?IDKEY=4630f6e27842a23195a87daa10a3b9597876b96fd5619f55">
                        <img border="0" src="https://wpa.qq.com/imgd?IDKEY=4630f6e27842a23195a87daa10a3b9597876b96fd5619f55&pic=51" alt="点击这里给我发消息" title="点击这里给我发消息"style="margin-bottom: 0"></a>
                    （<span class="btn-copy" data-clipboard-text="1418503647">1418503647</span>）
                </p>
                <p>QQ 群：
                    <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=11975aff9cb203c9896b47320a17545d3c80aaea08a18dfb1ab639553e6f05b1">
                        <img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="云设交流群" title="云设交流群" style="margin-bottom: 0">
                    </a>
                    （群号：<span class="btn-copy" data-clipboard-text="642481431">642481431</span>，交流、源码分享）
                </p>
                <p>站长微信：<span class="btn-copy" data-clipboard-text="chenjianhang01">chenjianhang01</span></p>
                <img class="wechatQrcode" src="/static/qrcode.jpg">
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    const ClipboardJS = window.ClipboardJS

    export default {
        data () {
            return {
                version: '',
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/39342570a36311eaa3824f27432dbf16',
                            target: '_blank',
                            title: '帮助'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.clipboard = new ClipboardJS('.btn-copy', {
                // target(trigger) {
                //     return trigger
                // },
                // text: trigger => {
                //     return `${this.num1} ${this.num2}`
                // }
            })
            this.clipboard.on('success', e => {
                this.$message({
                    type: 'success',
                    text: '已复制'
                })
                e.clearSelection()
            })
            this.clipboard.on('error', e => {
                console.error('Action:', e.action)
                console.error('Trigger:', e.trigger)
            })
        }
    }
</script>

<style lang="scss" scoped>
.container {
    max-width: 480px;
}
.article {
    // fz16
}
.wechatQrcode {
    width: 160px;
    height: 160px;
    border: 1px solid rgba(0, 0, 0, .12);
}
.btn-copy {
    cursor: pointer;
    &:hover {
        color: #ff4081;
    }
}
.email {
    color: #333;
    &:hover {
        color: #ff4081;
    }
}
</style>
