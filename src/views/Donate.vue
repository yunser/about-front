<template>
    <my-page title="捐赠" :page="page">
        <ui-article>
            <p>如果这个网站不小心帮助到了你，可以请我喝杯咖啡，以及帮我分担一点服务器的开销。</p>
        </ui-article>
        <div class="pay-box">
            <div class="pay wechat-pay">
                <img class="qrcode" src="/static/img/wechat_pay.png">
                <div class="name">微信支付</div>
            </div>
            <div class="pay alipay">
                <img class="qrcode" src="/static/img/alipay.png">
                <div class="name">支付宝</div>
            </div>
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
                        {
                            type: 'text',
                            icon: 'close',
                            text: '捐赠列表',
                            to: '/donations'
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
    @import "../scss/var.scss";

    .pay-box {
        .pay {
            float: left;
            margin-right: 16px;
            .qrcode {
                width: 240px;
            }
            .name {
                font-size: 16px;
                text-align: center;
            }
        }
        .wechat-pay {
            .qrcode {
                border: 1px solid #22ab38;
            }
        }
        .alipay {
            .qrcode {
                border: 1px solid #009fe7;
            }
        }
    }
</style>
